"use client";

import { useCallback, useEffect, useState } from "react";
import { getExemplar } from "./data";

const STORAGE_KEY = "habits-habibti:v1";

export interface HabitState {
  /** Currently selected exemplar protocol. */
  selectedExemplarId: string | null;
  /** date (YYYY-MM-DD) -> list of completed constant ids that day. */
  checkIns: Record<string, string[]>;
  /** First day the user activated a protocol. */
  startedAt: string | null;
}

const EMPTY: HabitState = {
  selectedExemplarId: null,
  checkIns: {},
  startedAt: null,
};

// ---- date helpers ---------------------------------------------------------

export function dateKey(d: Date = new Date()): string {
  // Local-date key, not UTC, so "today" matches the user's calendar.
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(d: Date, n: number): Date {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + n);
  return copy;
}

// ---- persistence ----------------------------------------------------------

function load(): HabitState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    return { ...EMPTY, ...(JSON.parse(raw) as HabitState) };
  } catch {
    return EMPTY;
  }
}

function save(state: HabitState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage full or unavailable — fail silently */
  }
}

// ---- the hook -------------------------------------------------------------

export function useHabitState() {
  const [state, setState] = useState<HabitState>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  // Load once on mount (client only) to avoid SSR hydration mismatch.
  useEffect(() => {
    setState(load());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) save(state);
  }, [state, hydrated]);

  const selectExemplar = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      selectedExemplarId: id,
      startedAt: prev.startedAt ?? dateKey(),
    }));
  }, []);

  const clearExemplar = useCallback(() => {
    setState((prev) => ({ ...prev, selectedExemplarId: null }));
  }, []);

  const toggleConstant = useCallback((constantId: string) => {
    const today = dateKey();
    setState((prev) => {
      const todays = prev.checkIns[today] ?? [];
      const next = todays.includes(constantId)
        ? todays.filter((c) => c !== constantId)
        : [...todays, constantId];
      return { ...prev, checkIns: { ...prev.checkIns, [today]: next } };
    });
  }, []);

  const resetAll = useCallback(() => setState(EMPTY), []);

  return {
    state,
    hydrated,
    selectExemplar,
    clearExemplar,
    toggleConstant,
    resetAll,
  };
}

// ---- metrics --------------------------------------------------------------

export interface DayCell {
  key: string;
  date: Date;
  done: number;
  total: number;
  ratio: number; // 0..1
}

/** Build the trailing `days` calendar cells (oldest -> newest, ending today). */
export function buildHeatmap(
  checkIns: Record<string, string[]>,
  total: number,
  days = 35,
): DayCell[] {
  const cells: DayCell[] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(today, -i);
    const key = dateKey(date);
    const done = (checkIns[key] ?? []).length;
    cells.push({
      key,
      date,
      done,
      total,
      ratio: total > 0 ? Math.min(done / total, 1) : 0,
    });
  }
  return cells;
}

/**
 * Consistency score = the hero metric. It's the philosophy made visible:
 * the share of your constants you've actually held over the trailing window.
 * Forgiving by design — one missed day barely moves it.
 */
export function consistencyScore(
  checkIns: Record<string, string[]>,
  total: number,
  windowDays = 7,
): number {
  if (total <= 0) return 0;
  const today = new Date();
  let done = 0;
  for (let i = 0; i < windowDays; i++) {
    const key = dateKey(addDays(today, -i));
    done += (checkIns[key] ?? []).length;
  }
  const possible = total * windowDays;
  return Math.round((done / possible) * 100);
}

/**
 * Streak = consecutive days (ending today or yesterday) with at least one
 * constant completed. "Never miss twice" — a single off day doesn't reset you
 * as long as you were active the day before.
 */
export function currentStreak(checkIns: Record<string, string[]>): number {
  const today = new Date();
  const doneToday = (checkIns[dateKey(today)] ?? []).length > 0;
  // Start from today if active, else yesterday (grace for "not done yet today").
  let cursor = doneToday ? today : addDays(today, -1);
  let streak = 0;
  while ((checkIns[dateKey(cursor)] ?? []).length > 0) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

/** Count of days where every constant was completed. */
export function perfectDays(
  checkIns: Record<string, string[]>,
  total: number,
): number {
  if (total <= 0) return 0;
  return Object.values(checkIns).filter((ids) => ids.length >= total).length;
}

/** Total distinct days the protocol has been touched. */
export function activeDays(checkIns: Record<string, string[]>): number {
  return Object.values(checkIns).filter((ids) => ids.length > 0).length;
}

/** Today's completed constant ids for the given exemplar. */
export function todaysDone(checkIns: Record<string, string[]>): string[] {
  return checkIns[dateKey()] ?? [];
}

/** Total constants in the active protocol (0 if none selected). */
export function protocolSize(selectedExemplarId: string | null): number {
  const ex = getExemplar(selectedExemplarId);
  return ex ? ex.constants.length : 0;
}

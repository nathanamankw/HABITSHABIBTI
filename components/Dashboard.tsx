"use client";

import { useState } from "react";
import { getArchetype, type Exemplar } from "@/lib/data";
import {
  buildHeatmap,
  consistencyScore,
  currentStreak,
  perfectDays,
  activeDays,
  type HabitState,
} from "@/lib/store";
import ConsistencyRing from "./ConsistencyRing";
import Heatmap from "./Heatmap";
import ConstantCard from "./ConstantCard";
import ShareCard from "./ShareCard";

interface Props {
  exemplar: Exemplar;
  state: HabitState;
  onToggle: (constantId: string) => void;
  onChange: () => void;
}

export default function Dashboard({ exemplar, state, onToggle, onChange }: Props) {
  const [showShare, setShowShare] = useState(false);
  const archetype = getArchetype(exemplar.domain);
  const total = exemplar.constants.length;
  const { checkIns } = state;

  const todays = checkIns[todayKey()] ?? [];
  const doneToday = todays.filter((id) =>
    exemplar.constants.some((c) => c.id === id),
  ).length;

  const score = consistencyScore(checkIns, total);
  const streak = currentStreak(checkIns);
  const perfect = perfectDays(checkIns, total);
  const days = Math.max(activeDays(checkIns), 1);
  const heatmap = buildHeatmap(checkIns, total);
  const allDone = doneToday >= total;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <header className="flex items-start justify-between gap-3">
        <div>
          <button
            onClick={onChange}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ‹ Change protocol
          </button>
          <h1 className="mt-1 text-2xl font-bold">
            The{" "}
            <span style={{ color: archetype.accent }}>{exemplar.name}</span>{" "}
            protocol
          </h1>
          <p className="text-sm text-muted">
            {archetype.emoji} {archetype.name} · {exemplar.tagline}
          </p>
        </div>
        <button
          onClick={() => setShowShare(true)}
          className="shrink-0 rounded-xl border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-foreground/40"
        >
          Share
        </button>
      </header>

      {/* metrics */}
      <section className="mt-6 flex flex-col items-center gap-5 rounded-3xl border border-border bg-surface p-6 sm:flex-row sm:gap-8">
        <ConsistencyRing value={score} accent={archetype.accent} />
        <div className="grid flex-1 grid-cols-3 gap-3 text-center">
          <Metric label="Streak" value={`${streak}`} suffix="days" accent={archetype.accent} />
          <Metric label="Perfect days" value={`${perfect}`} accent={archetype.accent} />
          <Metric label="Today" value={`${doneToday}/${total}`} accent={archetype.accent} />
        </div>
      </section>

      {/* today's constants */}
      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Today&rsquo;s constants
          </h2>
          {allDone && (
            <span
              className="animate-pop rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: hexA(archetype.accent, 0.18),
                color: archetype.accent,
              }}
            >
              All held today ✓
            </span>
          )}
        </div>
        <div className="space-y-2.5">
          {exemplar.constants.map((c) => (
            <ConstantCard
              key={c.id}
              constant={c}
              done={todays.includes(c.id)}
              accent={archetype.accent}
              onToggle={() => onToggle(c.id)}
            />
          ))}
        </div>
      </section>

      {/* heatmap */}
      <section className="mt-8 rounded-3xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
          Last 5 weeks
        </h2>
        <Heatmap cells={heatmap} accent={archetype.accent} />
      </section>

      <p className="mt-6 text-center text-xs text-muted-2">{exemplar.sourceNote}</p>

      {showShare && (
        <ShareCard
          exemplar={exemplar}
          archetype={archetype}
          day={days}
          consistency={score}
          streak={streak}
          onClose={() => setShowShare(false)}
        />
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
  accent,
}: {
  label: string;
  value: string;
  suffix?: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl bg-surface-2 px-2 py-3">
      <div className="text-xl font-bold tabular-nums" style={{ color: accent }}>
        {value}
      </div>
      {suffix && <div className="text-[10px] text-muted-2">{suffix}</div>}
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
        {label}
      </div>
    </div>
  );
}

function todayKey(): string {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function hexA(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

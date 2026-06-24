"use client";

import { useState } from "react";
import type { Archetype, Exemplar } from "@/lib/data";

interface Props {
  exemplar: Exemplar;
  archetype: Archetype;
  day: number;
  consistency: number;
  streak: number;
  onClose: () => void;
}

/** A shareable "Day X of the [Exemplar] protocol" card with copy-to-clipboard. */
export default function ShareCard({
  exemplar,
  archetype,
  day,
  consistency,
  streak,
  onClose,
}: Props) {
  const [copied, setCopied] = useState(false);

  const shareText =
    `Day ${day} of the ${exemplar.name} protocol on Habits Habibti — ` +
    `${consistency}% consistent, ${streak}-day streak. ` +
    `Becoming someone who trains like ${archetype.name.toLowerCase()}. ${archetype.emoji}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — ignore */
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* the visual card */}
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-7 text-center"
          style={{
            background: `radial-gradient(120% 120% at 50% 0%, ${hexA(
              archetype.accent,
              0.28,
            )} 0%, var(--surface) 55%)`,
          }}
        >
          <div className="text-5xl">{archetype.emoji}</div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
            Habits Habibti
          </p>
          <h3 className="mt-1 text-2xl font-bold">
            Day {day} of the<br />
            <span style={{ color: archetype.accent }}>{exemplar.name}</span> protocol
          </h3>

          <div className="mt-5 flex justify-center gap-6">
            <Stat label="Consistency" value={`${consistency}%`} />
            <Stat label="Streak" value={`${streak}d`} />
          </div>

          <p className="mt-5 text-sm italic text-muted">
            &ldquo;{archetype.identity}&rdquo;
          </p>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            onClick={copy}
            className="flex-1 rounded-xl bg-foreground py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {copied ? "Copied! ✓" : "Copy share text"}
          </button>
          <button
            onClick={onClose}
            className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}

function hexA(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

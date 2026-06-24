"use client";

import { useState } from "react";
import type { Constant } from "@/lib/data";

interface Props {
  constant: Constant;
  done: boolean;
  accent: string;
  onToggle: () => void;
}

/**
 * One daily constant. The check target is the scaled "your version"; expanding
 * reveals the translation layer — Principle -> Pro version -> Your version.
 */
export default function ConstantCard({ constant, done, accent, onToggle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl border border-border bg-surface transition-colors"
      style={done ? { borderColor: accent } : undefined}
    >
      <div className="flex items-start gap-3 p-4">
        <button
          onClick={onToggle}
          aria-pressed={done}
          aria-label={done ? "Mark incomplete" : "Mark complete"}
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all"
          style={{
            borderColor: done ? accent : "var(--border)",
            backgroundColor: done ? accent : "transparent",
          }}
        >
          {done && (
            <svg
              className="h-4 w-4 animate-pop text-black"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path d="M5 10l3.5 3.5L15 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className={`font-medium ${done ? "text-muted line-through" : ""}`}>
              {constant.title}
            </p>
            <span className="shrink-0 text-xs text-muted-2">{constant.minutes} min</span>
          </div>
          <p className="mt-0.5 text-sm text-muted">{constant.yourVersion}</p>

          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-2 text-xs font-medium text-muted-2 transition-colors hover:text-foreground"
          >
            {open ? "Hide the principle" : "Why this works ›"}
          </button>

          {open && (
            <div className="mt-3 space-y-2 border-t border-border pt-3 text-sm animate-fade-up">
              <Row label="Principle" value={constant.principle} accent={accent} />
              <Row label="Pro version" value={constant.proVersion} accent={accent} />
              <Row label="Your version" value={constant.yourVersion} accent={accent} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div>
      <span
        className="text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: accent }}
      >
        {label}
      </span>
      <p className="text-muted">{value}</p>
    </div>
  );
}

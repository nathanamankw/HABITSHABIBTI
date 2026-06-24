"use client";

import { useState } from "react";
import {
  ARCHETYPES,
  exemplarsByDomain,
  getArchetype,
  type DomainId,
} from "@/lib/data";

interface Props {
  onSelect: (exemplarId: string) => void;
}

/** Two-step onboarding: choose the archetype you're chasing, then an exemplar. */
export default function Onboarding({ onSelect }: Props) {
  const [domain, setDomain] = useState<DomainId | null>(null);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="brand-text">Habits Habibti</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          What would you keep constant if you were trying to become the best in
          the world at something? Pick someone you admire — we&rsquo;ll translate
          their routine into a few daily constants you can actually hold.
        </p>
      </header>

      {!domain ? (
        <section className="mt-10 animate-fade-up">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
            1 · Choose an archetype
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ARCHETYPES.map((a) => (
              <button
                key={a.id}
                onClick={() => setDomain(a.id)}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 text-left transition-all hover:-translate-y-0.5"
                style={{ ["--accent" as string]: a.accent }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                  style={{ backgroundColor: hexA(a.accent, 0.15) }}
                >
                  {a.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{a.name}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {a.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <ExemplarStep
          domain={domain}
          onBack={() => setDomain(null)}
          onSelect={onSelect}
        />
      )}
    </div>
  );
}

function ExemplarStep({
  domain,
  onBack,
  onSelect,
}: {
  domain: DomainId;
  onBack: () => void;
  onSelect: (id: string) => void;
}) {
  const archetype = getArchetype(domain);
  const exemplars = exemplarsByDomain(domain);

  return (
    <section className="mt-10 animate-fade-up">
      <button
        onClick={onBack}
        className="mb-4 text-sm text-muted transition-colors hover:text-foreground"
      >
        ‹ Back to archetypes
      </button>
      <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted">
        2 · Choose your exemplar
      </h2>
      <p className="mb-5 text-sm italic" style={{ color: archetype.accent }}>
        &ldquo;{archetype.identity}&rdquo;
      </p>

      <div className="grid grid-cols-1 gap-3">
        {exemplars.map((e) => (
          <button
            key={e.id}
            onClick={() => onSelect(e.id)}
            className="rounded-2xl border border-border bg-surface p-5 text-left transition-all hover:-translate-y-0.5"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">{e.name}</span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: hexA(archetype.accent, 0.15),
                  color: archetype.accent,
                }}
              >
                {e.tagline}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted">{e.blurb}</p>
            <p className="mt-2 text-xs text-muted-2">
              {e.constants.length} daily constants · {e.sourceNote}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

function hexA(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

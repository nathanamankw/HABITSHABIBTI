"use client";

interface Props {
  /** 0..100 */
  value: number;
  accent: string;
  size?: number;
}

/**
 * The hero metric, made visible. A ring that fills as you hold your constants
 * over the trailing week — the philosophy ("constants held over time") as a number.
 */
export default function ConsistencyRing({ value, accent, size = 132 }: Props) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = c - (clamped / 100) * c;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--surface-2)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accent}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold tabular-nums">{clamped}%</span>
        <span className="text-[11px] uppercase tracking-wider text-muted">7-day</span>
      </div>
    </div>
  );
}

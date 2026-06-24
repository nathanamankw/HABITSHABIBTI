"use client";

import type { DayCell } from "@/lib/store";

interface Props {
  cells: DayCell[];
  accent: string;
}

function shade(ratio: number, accent: string): string {
  if (ratio <= 0) return "var(--surface-2)";
  // Map 0..1 ratio onto opacity bands of the accent color.
  const opacity = 0.25 + ratio * 0.75;
  return hexWithOpacity(accent, opacity);
}

function hexWithOpacity(hex: string, opacity: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(2)})`;
}

/** Calendar heatmap of the trailing weeks (columns = weeks, rows = weekdays). */
export default function Heatmap({ cells, accent }: Props) {
  // cells are oldest -> newest. Group into columns of 7 (weeks).
  const weeks: DayCell[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-[5px] overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[5px]">
            {week.map((cell) => (
              <div
                key={cell.key}
                title={`${cell.key} — ${cell.done}/${cell.total}`}
                className="h-4 w-4 rounded-[4px] border border-border/40"
                style={{ backgroundColor: shade(cell.ratio, accent) }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[11px] text-muted-2">
        <span>Less</span>
        {[0, 0.33, 0.66, 1].map((r) => (
          <div
            key={r}
            className="h-3 w-3 rounded-[3px]"
            style={{ backgroundColor: shade(r, accent) }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

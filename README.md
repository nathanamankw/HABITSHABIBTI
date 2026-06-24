# Habits Habibti

> What would you keep constant if you were trying to become the best in the world at something?

Habits Habibti lets you adopt the daily routine of someone you admire — not by
copying their (often mythologized, untransferable) routine literally, but
through a **translation layer**: every elite routine ships as
**Principle → Pro version → Your version** (a scaled-down 10–30 minute constant
you can actually hold).

## How it works

1. **Pick an archetype** you're chasing — Athletic, Creative, Builder, Beauty &
   Self-Care, or Spiritual & Mental.
2. **Choose an exemplar** within it (e.g. Mayweather, da Vinci, Franklin, Marcus Aurelius).
3. **Hold your daily constants** — check off the scaled-down versions of their habits.
4. Watch your **consistency score** (the hero metric — your constants held over
   the trailing week) and a forgiving streak, plus a 5-week heatmap.
5. **Share** a "Day X of the [exemplar] protocol" card.

The metric *is* the philosophy: mastery comes from the small set of variables
you hold constant.

### Design notes

- **Consistency over streaks.** The trailing-7-day consistency score is the hero
  metric; streaks use a "never miss twice" grace rule so one off day doesn't reset you.
- **Identity-based** (per *Atomic Habits*): you adopt a persona, not a checklist.
- **Honest framing.** Every exemplar carries "inspired by publicly reported
  habits" — no claim that a real person endorses or follows exactly this.
- **Local-first.** All data lives in your browser's `localStorage` — private, offline, no account.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Code map: `lib/data.ts` (archetypes/exemplars/constants), `lib/store.ts`
(localStorage + metrics), `components/` (UI), `app/page.tsx` (orchestrator).

"use client";

import { getExemplar } from "@/lib/data";
import { useHabitState } from "@/lib/store";
import Onboarding from "@/components/Onboarding";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const { state, hydrated, selectExemplar, clearExemplar, toggleConstant } =
    useHabitState();

  // Avoid a hydration flash: render nothing until localStorage is read.
  if (!hydrated) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <div className="text-muted">Loading…</div>
      </main>
    );
  }

  const exemplar = getExemplar(state.selectedExemplarId);

  return (
    <main className="flex-1">
      {exemplar ? (
        <Dashboard
          exemplar={exemplar}
          state={state}
          onToggle={toggleConstant}
          onChange={clearExemplar}
        />
      ) : (
        <Onboarding onSelect={selectExemplar} />
      )}
    </main>
  );
}

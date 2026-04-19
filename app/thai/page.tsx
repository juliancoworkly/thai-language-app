"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { scenarios } from "@/data/scenarios";
import { sentences } from "@/data/sentences";
import { load, type Store } from "@/lib/storage";

export default function Home() {
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    setStore(load());
  }, []);

  const counts: Record<string, { total: number; seen: number }> = {};
  for (const s of scenarios) counts[s.id] = { total: 0, seen: 0 };
  for (const s of sentences) {
    counts[s.scenario].total += 1;
    if (store?.seenSentences.includes(s.id)) counts[s.scenario].seen += 1;
  }

  const due = store
    ? Object.values(store.cards).filter((c) => c.dueAt <= Date.now()).length
    : 0;

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Learn Thai you'll actually use.</h1>
        <p className="mt-2 max-w-2xl text-brand-50">
          Real sentences first, then broken down word-by-word so you can
          remix your own. No cartoon owls, no streaks nagging you. Just the
          phrases that get you through your day in Thailand.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/games" className="btn bg-white text-brand-700 hover:bg-brand-50">
            🎮 Start a game
          </Link>
          <Link href="/words" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            📚 Word bank
          </Link>
          {store && (
            <span className="btn border border-white/30 bg-white/10 text-white">
              🔥 {store.stats.totalReviews} total reviews
              {due > 0 && <> &middot; {due} due now</>}
            </span>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-stone-700">
          Pick a scenario
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios
            .sort((a, b) => a.order - b.order)
            .map((s) => {
              const { total, seen } = counts[s.id];
              const pct = total ? Math.round((seen / total) * 100) : 0;
              return (
                <Link
                  key={s.id}
                  href={`/learn/${s.id}`}
                  className="card group transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{s.emoji}</div>
                    <span className="text-xs text-stone-500">
                      {seen}/{total}
                    </span>
                  </div>
                  <div className="mt-3 font-semibold text-stone-800">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm text-stone-500">
                    {s.description}
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full bg-brand-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <h2 className="text-lg font-semibold text-stone-700">
          How this app is different
        </h2>
        <ul className="mt-3 grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
          <li>✅ Sentence-first: learn whole phrases you'll use today</li>
          <li>✅ Tap any word in a sentence to see its meaning + role</li>
          <li>✅ Tone-coloured phonetics so your mouth knows what to do</li>
          <li>✅ Memory games: flashcards, tone trainer, sentence builder, pairs</li>
          <li>✅ Spaced repetition: hard words come back, easy ones don't</li>
          <li>✅ Works offline after first load &middot; your progress stays on your device</li>
        </ul>
      </section>
    </div>
  );
}

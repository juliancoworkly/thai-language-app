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

  const sortedScenarios = scenarios.slice().sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-12 py-4">
      {/* HERO ===================================================== */}
      <section>
        <span className="eyebrow-pill-light">Your learning home</span>
        <h1 className="display-h2 mt-5 text-stone-900">
          Everyday Thai,{" "}
          <span className="serif-i text-mint-700">actually useful</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">
          Real sentences first, broken down word-by-word. No streaks nagging
          you, no pointless vocabulary. Just what you need this week.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/games"
            className="rounded-full bg-mint-500 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-glow transition hover:scale-[1.02] hover:bg-mint-400"
          >
            🎮 Start a game
          </Link>
          <Link
            href="/words"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50"
          >
            📚 Word bank
          </Link>
        </div>
      </section>

      {/* STATS STRIP (single dark accent) ========================= */}
      {store && (
        <section className="grain relative overflow-hidden rounded-3xl bg-ink-900 p-6 text-white sm:p-8">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint-500/20 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-6 sm:grid-cols-3">
            <HomeStat
              kicker={String(store.seenSentences.length)}
              label="Sentences met"
            />
            <HomeStat
              kicker={String(store.stats.totalReviews)}
              label="Total reviews"
            />
            <HomeStat
              kicker={String(due)}
              label={
                due === 0 ? "No cards due right now" : "Cards due to review"
              }
              cta={
                due > 0 ? (
                  <Link
                    href="/games/flashcards"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-mint-300 hover:text-mint-200"
                  >
                    Review now →
                  </Link>
                ) : null
              }
            />
          </div>
        </section>
      )}

      {/* SCENARIOS ================================================ */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="section-label text-mint-700">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              Pick a scenario
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
              Twelve moments you'll live{" "}
              <span className="serif-i text-stone-500">this week</span>.
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedScenarios.map((s, idx) => {
            const { total, seen } = counts[s.id];
            const pct = total ? Math.round((seen / total) * 100) : 0;
            const complete = pct >= 100;
            return (
              <Link
                key={s.id}
                href={`/learn/${s.id}`}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                    {s.emoji}
                  </div>
                  <span className="font-mono text-xs tracking-wider text-stone-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 font-semibold text-stone-900">
                  {s.title}
                </div>
                <div className="mt-1 text-sm text-stone-500">
                  {s.description}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full bg-mint-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span
                    className={`text-[11px] font-mono tabular-nums ${
                      complete ? "text-mint-700" : "text-stone-500"
                    }`}
                  >
                    {seen}/{total}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY IT'S DIFFERENT ====================================== */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
        <span className="eyebrow-pill-light">Why it works</span>
        <h2 className="mt-5 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
          Six habits baked into every lesson.
        </h2>
        <ul className="mt-5 grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
          <WhyLi>Sentence-first. Learn whole phrases you'll use today.</WhyLi>
          <WhyLi>Tap any word to see its meaning, role, and tone.</WhyLi>
          <WhyLi>Tone-coloured phonetics so your mouth knows what to do.</WhyLi>
          <WhyLi>
            Five memory games: flashcards, tone trainer, builder, pairs,
            conversation.
          </WhyLi>
          <WhyLi>Spaced repetition. Hard words come back, easy ones don't.</WhyLi>
          <WhyLi>Works offline. Progress syncs across your devices.</WhyLi>
        </ul>
      </section>
    </div>
  );
}

function HomeStat({
  kicker,
  label,
  cta,
}: {
  kicker: string;
  label: string;
  cta?: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-3xl font-black text-white sm:text-4xl">{kicker}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-stone-400">
        {label}
      </div>
      {cta}
    </div>
  );
}

function WhyLi({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 text-mint-600">✓</span>
      <span>{children}</span>
    </li>
  );
}

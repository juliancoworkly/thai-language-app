"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { scenarios } from "@/data/scenarios";
import { sentences } from "@/data/sentences";
import { SentenceBreakdown } from "@/components/SentenceBreakdown";
import { load, markSentenceSeen, save, type Store } from "@/lib/storage";

export default function LearnClient({ scenario }: { scenario: string }) {
  const info = scenarios.find((s) => s.id === scenario);
  const list = useMemo(
    () => sentences.filter((s) => s.scenario === scenario),
    [scenario]
  );

  const [store, setStore] = useState<Store | null>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    setStore(load());
  }, []);

  useEffect(() => {
    if (!store || !list[i]) return;
    const next = markSentenceSeen(store, list[i].id);
    if (next !== store) {
      save(next);
      setStore(next);
    }
  }, [i, list, store]);

  if (!info) return notFound();
  if (list.length === 0) {
    return (
      <div className="card">
        <p>No sentences in this scenario yet.</p>
      </div>
    );
  }

  const current = list[i];

  const pct = Math.round(((i + 1) / list.length) * 100);

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/thai" className="btn-ghost">← All scenarios</Link>
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
          {i + 1} <span className="text-stone-400">/ {list.length}</span>
        </div>
      </div>

      <div className="h-1 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-mint-500 shadow-[0_0_6px_rgba(52,211,153,.5)] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div>
        <span className="section-label text-mint-700">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
          Scenario
        </span>
        <div className="mt-3 flex items-start gap-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-50 text-3xl">
            {info.emoji}
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
              {info.title}
            </h1>
            <p className="mt-1 text-stone-600">{info.description}</p>
          </div>
        </div>
      </div>

      <SentenceBreakdown sentence={current} />

      <div className="flex items-center justify-between gap-2">
        <button
          className="btn-secondary"
          disabled={i === 0}
          onClick={() => setI((n) => Math.max(0, n - 1))}
        >
          ← Previous
        </button>
        {i < list.length - 1 ? (
          <button className="btn-primary" onClick={() => setI((n) => n + 1)}>
            Next sentence →
          </button>
        ) : (
          <Link href="/games/flashcards" className="btn-primary">
            Practice these in flashcards →
          </Link>
        )}
      </div>
    </div>
  );
}

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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="btn-ghost">← All scenarios</Link>
        <div className="text-sm text-stone-500">
          {i + 1} / {list.length}
        </div>
      </div>

      <div>
        <div className="text-2xl">{info.emoji}</div>
        <h1 className="text-2xl font-bold text-stone-800">{info.title}</h1>
        <p className="text-stone-600">{info.description}</p>
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

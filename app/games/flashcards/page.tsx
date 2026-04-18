"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { sentences } from "@/data/sentences";
import { AudioButton } from "@/components/AudioButton";
import { PhoneticText } from "@/components/PhoneticText";
import { SentenceBreakdown } from "@/components/SentenceBreakdown";
import {
  getCard,
  load,
  save,
  upsertCard,
  markSentenceSeen,
  type Store,
} from "@/lib/storage";
import { grade, isDue, type Grade } from "@/lib/srs";
import type { Sentence } from "@/lib/types";

type Mode = "due" | "all";

function buildQueue(store: Store, mode: Mode): Sentence[] {
  if (mode === "all") return [...sentences].sort(() => Math.random() - 0.5);
  const due = sentences.filter((s) => {
    const c = getCard(store, s.id, "sentence");
    return isDue(c);
  });
  if (due.length === 0) return [...sentences].sort(() => Math.random() - 0.5);
  return due.sort(() => Math.random() - 0.5);
}

export default function FlashcardsPage() {
  const [store, setStore] = useState<Store | null>(null);
  const [mode, setMode] = useState<Mode>("due");
  const [queue, setQueue] = useState<Sentence[]>([]);
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  useEffect(() => {
    const s = load();
    setStore(s);
    setQueue(buildQueue(s, mode));
  }, [mode]);

  const current = queue[i];
  const dueCount = useMemo(() => {
    if (!store) return 0;
    return sentences.filter((s) => isDue(getCard(store, s.id, "sentence"))).length;
  }, [store]);

  function handleGrade(g: Grade) {
    if (!store || !current) return;
    const card = getCard(store, current.id, "sentence");
    const updated = grade(card, g);
    let next = upsertCard(store, updated);
    next = markSentenceSeen(next, current.id);
    save(next);
    setStore(next);
    setRevealed(false);
    setShowBreakdown(false);
    if (i + 1 >= queue.length) {
      setQueue(buildQueue(next, mode));
      setI(0);
    } else {
      setI(i + 1);
    }
  }

  if (!current) {
    return (
      <div className="card text-center">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/games" className="btn-ghost">← Games</Link>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-stone-100 px-2 py-1 text-stone-600">
            {dueCount} due
          </span>
          <button
            onClick={() => setMode(mode === "due" ? "all" : "due")}
            className="btn-ghost text-xs"
          >
            Mode: {mode === "due" ? "Due only" : "Shuffle all"}
          </button>
        </div>
      </div>

      <div className="card min-h-[22rem]">
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} {current.scenario}
          </div>
          <AudioButton id={current.id} thai={current.thai} />
        </div>

        <div className="mt-6 text-center">
          <div className="thai text-3xl font-bold text-stone-800">
            {current.thai}
          </div>
          <div className="mt-2">
            <PhoneticText phonetic={current.phonetic} size="xl" bold />
          </div>

          {revealed ? (
            <div className="mt-6 text-lg text-stone-700">
              {current.meaning}
            </div>
          ) : (
            <button
              onClick={() => setRevealed(true)}
              className="mt-6 btn-secondary"
            >
              Reveal meaning
            </button>
          )}
        </div>

        {revealed && (
          <>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleGrade(0)}
                className="btn bg-red-100 text-red-800 hover:bg-red-200"
              >
                😵 Again
              </button>
              <button
                onClick={() => handleGrade(1)}
                className="btn bg-amber-100 text-amber-800 hover:bg-amber-200"
              >
                😬 Hard
              </button>
              <button
                onClick={() => handleGrade(2)}
                className="btn bg-green-100 text-green-800 hover:bg-green-200"
              >
                🙂 Good
              </button>
              <button
                onClick={() => handleGrade(3)}
                className="btn bg-blue-100 text-blue-800 hover:bg-blue-200"
              >
                😎 Easy
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowBreakdown((v) => !v)}
                className="btn-ghost text-xs"
              >
                {showBreakdown ? "Hide breakdown" : "Show word-by-word"}
              </button>
            </div>
          </>
        )}
      </div>

      {revealed && showBreakdown && (
        <SentenceBreakdown sentence={current} showTitle={false} />
      )}

      <div className="text-center text-xs text-stone-500">
        Tip: rate honestly. "Again" brings it back in 10 min; "Easy" parks it for days.
      </div>
    </div>
  );
}

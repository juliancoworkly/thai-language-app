"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { words } from "@/data/words";
import { speakThai } from "@/lib/tts";
import type { Word } from "@/lib/types";

type Card = {
  id: string; // unique card id
  wordId: string;
  face: "thai" | "english";
};

function buildDeck(pairCount: number): Card[] {
  const pool = [...words].sort(() => Math.random() - 0.5).slice(0, pairCount);
  const deck: Card[] = [];
  for (const w of pool) {
    deck.push({ id: `${w.id}-t`, wordId: w.id, face: "thai" });
    deck.push({ id: `${w.id}-e`, wordId: w.id, face: "english" });
  }
  return deck.sort(() => Math.random() - 0.5);
}

export default function MatchingGame() {
  const [pairCount, setPairCount] = useState(6);
  const [deck, setDeck] = useState<Card[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const wordMap = useMemo(() => {
    const m: Record<string, Word> = {};
    for (const w of words) m[w.id] = w;
    return m;
  }, []);

  useEffect(() => {
    setDeck(buildDeck(pairCount));
    setMatched(new Set());
    setFlipped([]);
    setMoves(0);
  }, [pairCount]);

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    const ca = deck.find((c) => c.id === a);
    const cb = deck.find((c) => c.id === b);
    if (!ca || !cb) return;
    if (ca.wordId === cb.wordId) {
      const m = new Set(matched);
      m.add(ca.wordId);
      setMatched(m);
      setFlipped([]);
    } else {
      const t = setTimeout(() => setFlipped([]), 900);
      return () => clearTimeout(t);
    }
  }, [flipped, deck, matched]);

  function tap(card: Card) {
    if (matched.has(card.wordId)) return;
    if (flipped.includes(card.id)) return;
    if (flipped.length >= 2) return;
    if (card.face === "thai") speakThai(wordMap[card.wordId].thai);
    setFlipped((f) => {
      const next = [...f, card.id];
      if (next.length === 2) setMoves((m) => m + 1);
      return next;
    });
  }

  const allMatched = deck.length > 0 && matched.size === pairCount;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/games" className="btn-ghost">← Games</Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-stone-600">
            {matched.size}/{pairCount} pairs · {moves} moves
          </span>
          <button
            onClick={() => setDeck(buildDeck(pairCount))}
            className="btn-ghost text-xs"
          >
            ↻ New game
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span className="text-stone-500">Difficulty:</span>
        {[4, 6, 8, 10].map((n) => (
          <button
            key={n}
            onClick={() => setPairCount(n)}
            className={`rounded-full px-3 py-1 ${
              pairCount === n ? "bg-mint-500 text-ink-900" : "bg-stone-100 text-stone-700"
            }`}
          >
            {n} pairs
          </button>
        ))}
      </div>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${Math.min(4, pairCount)}, minmax(0, 1fr))`,
        }}
      >
        {deck.map((card) => {
          const isMatched = matched.has(card.wordId);
          const isFlipped = isMatched || flipped.includes(card.id);
          const w = wordMap[card.wordId];
          return (
            <button
              key={card.id}
              onClick={() => tap(card)}
              className={`relative h-28 rounded-xl border-2 transition ${
                isFlipped
                  ? isMatched
                    ? "border-green-300 bg-green-50"
                    : "border-mint-300 bg-white"
                  : "border-stone-200 bg-mint-500 text-ink-900 hover:bg-mint-400"
              }`}
            >
              {isFlipped ? (
                isMatched ? (
                  <div className="px-1">
                    <div className="thai text-base font-bold text-stone-800">
                      {w.thai}
                    </div>
                    <div className="text-[11px] text-stone-500">{w.phonetic}</div>
                    <div className="mt-1 text-xs font-medium text-green-800">
                      {w.meaning}
                    </div>
                  </div>
                ) : card.face === "thai" ? (
                  <div>
                    <div className="thai text-xl font-bold text-stone-800">
                      {w.thai}
                    </div>
                    <div className="text-xs text-stone-500">{w.phonetic}</div>
                  </div>
                ) : (
                  <div className="px-2 text-sm text-stone-800">{w.meaning}</div>
                )
              ) : (
                <div className="text-3xl">?</div>
              )}
            </button>
          );
        })}
      </div>

      {allMatched && (
        <div className="card bg-green-50 text-center">
          <div className="text-2xl">🎉</div>
          <div className="mt-2 font-semibold">
            All {pairCount} pairs matched in {moves} moves!
          </div>
          <button
            onClick={() => setDeck(buildDeck(pairCount))}
            className="mt-3 btn-primary"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

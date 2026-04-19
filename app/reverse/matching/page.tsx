"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { reverseSentences, type ReverseSentence } from "@/data/reverse";
import { speakEnglish } from "@/lib/tts";

type Card = {
  id: string;
  sentenceId: string;
  face: "en" | "th";
};

function buildDeck(pairCount: number): Card[] {
  const pool = [...reverseSentences].sort(() => Math.random() - 0.5).slice(0, pairCount);
  const deck: Card[] = [];
  for (const s of pool) {
    deck.push({ id: `${s.id}-en`, sentenceId: s.id, face: "en" });
    deck.push({ id: `${s.id}-th`, sentenceId: s.id, face: "th" });
  }
  return deck.sort(() => Math.random() - 0.5);
}

export default function ReverseMatching() {
  const [pairCount, setPairCount] = useState(6);
  const [deck, setDeck] = useState<Card[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const byId = useMemo(() => {
    const m: Record<string, ReverseSentence> = {};
    for (const s of reverseSentences) m[s.id] = s;
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
    if (ca.sentenceId === cb.sentenceId) {
      const m = new Set(matched);
      m.add(ca.sentenceId);
      setMatched(m);
      setFlipped([]);
    } else {
      const t = setTimeout(() => setFlipped([]), 900);
      return () => clearTimeout(t);
    }
  }, [flipped, deck, matched]);

  function tap(card: Card) {
    if (matched.has(card.sentenceId)) return;
    if (flipped.includes(card.id)) return;
    if (flipped.length >= 2) return;
    if (card.face === "en") speakEnglish(byId[card.sentenceId].english);
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
        <Link href="/reverse" className="btn-ghost">← กลับ / Back</Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-stone-600">
            {matched.size}/{pairCount} · {moves} moves
          </span>
          <button onClick={() => setDeck(buildDeck(pairCount))} className="btn-ghost text-xs">
            ↻ New
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-stone-800">
          🪞 จับคู่ Matching Pairs
        </h1>
        <p className="text-stone-600">
          จับคู่ประโยคอังกฤษกับประโยคไทย — Match English ↔ Thai
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span className="text-stone-500">ระดับ / Difficulty:</span>
        {[4, 6, 8].map((n) => (
          <button
            key={n}
            onClick={() => setPairCount(n)}
            className={`rounded-full px-3 py-1 ${
              pairCount === n ? "bg-brand-500 text-white" : "bg-stone-100 text-stone-700"
            }`}
          >
            {n} pairs
          </button>
        ))}
      </div>

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${Math.min(4, pairCount)}, minmax(0, 1fr))` }}
      >
        {deck.map((card) => {
          const isMatched = matched.has(card.sentenceId);
          const isFlipped = isMatched || flipped.includes(card.id);
          const s = byId[card.sentenceId];
          return (
            <button
              key={card.id}
              onClick={() => tap(card)}
              className={`relative h-32 rounded-xl border-2 p-2 transition ${
                isFlipped
                  ? isMatched
                    ? "border-green-300 bg-green-50"
                    : "border-brand-300 bg-white"
                  : "border-stone-200 bg-brand-500 text-white hover:bg-brand-600"
              }`}
            >
              {isFlipped ? (
                isMatched ? (
                  <div className="space-y-0.5 px-1">
                    <div className="text-sm font-bold text-stone-800">{s.english}</div>
                    <div className="thai text-xs text-brand-700">{s.thaiPhonetic}</div>
                    <div className="thai text-xs text-green-800">= {s.meaning}</div>
                  </div>
                ) : card.face === "en" ? (
                  <div>
                    <div className="text-sm font-bold text-stone-800">{s.english}</div>
                    <div className="thai mt-1 text-xs text-brand-700">{s.thaiPhonetic}</div>
                  </div>
                ) : (
                  <div className="thai text-base text-stone-800">{s.meaning}</div>
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
            เก่งมาก! ทำสำเร็จใน {moves} moves
          </div>
          <button onClick={() => setDeck(buildDeck(pairCount))} className="mt-3 btn-primary">
            เล่นอีกครั้ง / Play again
          </button>
        </div>
      )}
    </div>
  );
}

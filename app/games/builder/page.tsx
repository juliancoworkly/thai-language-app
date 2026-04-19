"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { sentences } from "@/data/sentences";
import { wordById } from "@/data/words";
import { AudioButton } from "@/components/AudioButton";
import { PhoneticText } from "@/components/PhoneticText";
import { speakThai } from "@/lib/tts";
import type { Sentence } from "@/lib/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Sentences with 2-5 words make the best puzzles
function buildSet(): Sentence[] {
  return shuffle(sentences.filter((s) => s.words.length >= 2 && s.words.length <= 5));
}

export default function BuilderGame() {
  const [queue, setQueue] = useState<Sentence[]>([]);
  const [i, setI] = useState(0);
  const [bank, setBank] = useState<number[]>([]); // indices into current.words
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<"idle" | "correct" | "wrong">("idle");

  useEffect(() => {
    setQueue(buildSet());
  }, []);

  const current = queue[i];

  useEffect(() => {
    if (!current) return;
    const ids = current.words.map((_, idx) => idx);
    setBank(shuffle(ids));
    setPicked([]);
    setChecked("idle");
  }, [current]);

  if (!current) return <div className="card">Loading…</div>;

  const target = current.words.map((w) => wordById[w.wordId]);

  function pickFromBank(idx: number) {
    if (checked === "correct") return;
    setPicked((p) => [...p, idx]);
    setBank((b) => b.filter((x) => x !== idx));
    setChecked("idle");
  }

  function unpick(idx: number) {
    if (checked === "correct") return;
    setPicked((p) => p.filter((x) => x !== idx));
    setBank((b) => [...b, idx]);
    setChecked("idle");
  }

  function check() {
    const isCorrect = picked.every((v, i) => v === i) && picked.length === target.length;
    setChecked(isCorrect ? "correct" : "wrong");
    if (isCorrect) speakThai(current.thai);
  }

  function next() {
    if (i + 1 >= queue.length) {
      setQueue(buildSet());
      setI(0);
    } else setI(i + 1);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/games" className="btn-ghost">← Games</Link>
        <div className="text-sm text-stone-500">
          {i + 1} / {queue.length}
        </div>
      </div>

      <div className="card space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-stone-500">
            Build the sentence
          </div>
          <div className="mt-2 text-lg font-medium text-stone-800">
            {current.emoji} "{current.meaning}"
          </div>
          <div className="text-xs text-stone-500">
            Drag-free: tap a chip in the bank to add it; tap in the answer row to remove.
          </div>
        </div>

        <div
          className={`min-h-[4.5rem] rounded-xl border-2 border-dashed p-3 transition ${
            checked === "correct"
              ? "border-green-500 bg-green-50"
              : checked === "wrong"
              ? "border-red-500 bg-red-50"
              : "border-stone-300 bg-stone-50"
          }`}
        >
          {picked.length === 0 ? (
            <div className="text-sm text-stone-400">Your answer appears here</div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {picked.map((idx, pos) => {
                const w = target[idx];
                return (
                  <button
                    key={`${idx}-${pos}`}
                    onClick={() => unpick(idx)}
                    className="flex flex-col items-center rounded-lg border border-stone-300 bg-white px-3 py-1.5 shadow-sm"
                  >
                    <span className="thai text-lg font-semibold">{w.thai}</span>
                    <span className="text-[11px] text-stone-500">
                      <PhoneticText phonetic={w.phonetic} size="sm" />
                    </span>
                    <span className="text-[10px] text-stone-400">{w.meaning} ✕</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {bank.map((idx) => {
            const w = target[idx];
            return (
              <button
                key={idx}
                onClick={() => pickFromBank(idx)}
                className="flex flex-col items-center rounded-lg border border-stone-300 bg-white px-3 py-1.5 shadow-sm hover:bg-stone-50"
              >
                <span className="thai text-lg font-semibold">{w.thai}</span>
                <span className="text-[11px] text-stone-500">
                  <PhoneticText phonetic={w.phonetic} size="sm" />
                </span>
                <span className="text-[10px] text-stone-400">{w.meaning}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          {checked !== "correct" ? (
            <button
              onClick={check}
              disabled={picked.length !== target.length}
              className="btn-primary"
            >
              Check
            </button>
          ) : (
            <button onClick={next} className="btn-primary">
              Next →
            </button>
          )}
          {checked === "wrong" && (
            <div className="text-sm text-red-700">
              Not quite — tap chips to rearrange and try again.
            </div>
          )}
        </div>

        {checked === "correct" && (
          <div className="space-y-2 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center justify-between">
              <div className="thai text-2xl font-bold text-green-900">
                {current.thai}
              </div>
              <AudioButton id={current.id} thai={current.thai} />
            </div>
            <div className="text-green-800">
              <PhoneticText phonetic={current.phonetic} size="lg" bold />
            </div>
            <div className="text-sm text-green-700">{current.meaning}</div>
          </div>
        )}
      </div>
    </div>
  );
}

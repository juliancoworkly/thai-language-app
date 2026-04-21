"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { words } from "@/data/words";
import { detectTone, splitSyllables, TONE_COLOR, TONE_LABEL } from "@/lib/tones";
import { speakThai } from "@/lib/tts";
import type { Tone, Word } from "@/lib/types";

const TONES: Tone[] = ["low", "mid", "high", "falling", "rising"];

// Only single-syllable words with an explicit tone are good targets
function targetPool(): Array<{ word: Word; tone: Tone }> {
  const pool: Array<{ word: Word; tone: Tone }> = [];
  for (const w of words) {
    const sylls = splitSyllables(w.phonetic);
    if (sylls.length !== 1) continue;
    const t = detectTone(sylls[0]);
    pool.push({ word: w, tone: t });
  }
  return pool;
}

export default function TonesGame() {
  const pool = useMemo(targetPool, []);
  const [i, setI] = useState(0);
  const [queue, setQueue] = useState<Array<{ word: Word; tone: Tone }>>([]);
  const [picked, setPicked] = useState<Tone | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    setQueue([...pool].sort(() => Math.random() - 0.5).slice(0, 20));
  }, [pool]);

  const current = queue[i];

  function pick(t: Tone) {
    if (picked || !current) return;
    setPicked(t);
    setScore((s) => ({
      correct: s.correct + (t === current.tone ? 1 : 0),
      total: s.total + 1,
    }));
  }

  function next() {
    setPicked(null);
    if (i + 1 >= queue.length) {
      setQueue([...pool].sort(() => Math.random() - 0.5).slice(0, 20));
      setI(0);
    } else setI(i + 1);
  }

  if (!current) {
    return <div className="card">Loading…</div>;
  }

  const correct = picked === current.tone;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/games" className="btn-ghost">← Games</Link>
        <div className="text-sm text-stone-600">
          Score: {score.correct}/{score.total}
        </div>
      </div>

      <div className="card text-center">
        <div className="text-xs uppercase tracking-wide text-stone-500">
          Tone trainer — which tone is this word?
        </div>

        <button
          onClick={() => speakThai(current.word.thai)}
          className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-mint-500 text-4xl text-ink-900 shadow-lg transition hover:scale-105 active:scale-95"
          aria-label="Play word"
        >
          🔊
        </button>

        {picked && (
          <div className="mt-6 space-y-1">
            <div className="thai text-3xl font-bold text-stone-800">
              {current.word.thai}
            </div>
            <div className={`text-xl font-semibold ${TONE_COLOR[current.tone]}`}>
              {current.word.phonetic}
            </div>
            <div className="text-stone-600">{current.word.meaning}</div>
          </div>
        )}

        <div className="mt-6 grid grid-cols-5 gap-2">
          {TONES.map((t) => (
            <button
              key={t}
              onClick={() => pick(t)}
              disabled={!!picked}
              className={`rounded-lg border p-3 text-sm transition disabled:opacity-60 ${
                picked === t
                  ? t === current.tone
                    ? "border-green-500 bg-green-50 text-green-900"
                    : "border-red-500 bg-red-50 text-red-900"
                  : picked && t === current.tone
                  ? "border-green-500 bg-green-50 text-green-900"
                  : "border-stone-200 bg-white hover:bg-stone-50"
              }`}
            >
              <div className={`font-semibold ${TONE_COLOR[t]}`}>
                {TONE_LABEL[t]}
              </div>
            </button>
          ))}
        </div>

        {picked && (
          <div className="mt-6 space-y-3">
            <div className={`text-lg font-semibold ${correct ? "text-green-700" : "text-red-700"}`}>
              {correct ? "✅ Correct!" : `❌ It was ${TONE_LABEL[current.tone].toLowerCase()}`}
            </div>
            <button onClick={next} className="btn-primary">
              Next word →
            </button>
          </div>
        )}
      </div>

      <div className="card">
        <div className="text-sm font-semibold text-stone-700">
          Tone cheat-sheet — the 5 Thai tones
        </div>
        <p className="mt-1 text-xs text-stone-500">
          Same letters, different tone → different word. Compare the five
          versions of "maa" below. Each has its own pitch movement.
        </p>

        <div className="mt-3 grid gap-2 sm:grid-cols-5">
          {[
            { tone: "mid" as const, mark: "maa", thai: "มา", mean: "come", shape: "→", desc: "flat, at your normal voice pitch" },
            { tone: "low" as const, mark: "màa", thai: "หมา̀", mean: "(low-example)", shape: "↘", desc: "flat, lower than normal" },
            { tone: "falling" as const, mark: "mâa", thai: "ม่า", mean: "(fall-example)", shape: "⌒", desc: "starts high, drops sharply — like 'NO!'" },
            { tone: "high" as const, mark: "máa", thai: "ม้า", mean: "horse", shape: "↗", desc: "starts high, rises — sounds excited" },
            { tone: "rising" as const, mark: "mǎa", thai: "หมา", mean: "dog", shape: "⌣", desc: "dips then rises — like asking 'really?'" },
          ].map((row) => (
            <div
              key={row.tone}
              className="rounded-lg border border-stone-200 p-3"
            >
              <div className={`text-2xl font-bold ${TONE_COLOR[row.tone]}`}>
                {row.mark}
              </div>
              <div className={`text-xs font-semibold uppercase ${TONE_COLOR[row.tone]}`}>
                {row.tone} {row.shape}
              </div>
              <div className="mt-1 text-xs text-stone-600">{row.desc}</div>
              <div className="mt-2 text-[11px] text-stone-500">
                <span className="thai text-sm">{row.thai}</span> — {row.mean}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
          <strong>Classic trap:</strong> <span className="thai">มา</span>{" "}
          <span className="tone-mid font-semibold">maa</span> (come), <span className="thai">ม้า</span>{" "}
          <span className="tone-high font-semibold">máa</span> (horse), <span className="thai">หมา</span>{" "}
          <span className="tone-rising font-semibold">mǎa</span> (dog) — same
          letters, totally different words. If your tone is off, Thais genuinely
          won't understand what you mean.
        </div>
      </div>
    </div>
  );
}

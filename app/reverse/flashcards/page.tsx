"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { reverseSentences } from "@/data/reverse";
import { speakEnglish, speakThai } from "@/lib/tts";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ReverseFlashcards() {
  const [queue, setQueue] = useState(() => shuffle(reverseSentences));
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ known: 0, total: 0 });

  const current = queue[i % queue.length];
  const byCat = useMemo(() => current.category, [current]);

  function rate(known: boolean) {
    setScore((s) => ({ known: s.known + (known ? 1 : 0), total: s.total + 1 }));
    setRevealed(false);
    if (i + 1 >= queue.length) {
      setQueue(shuffle(reverseSentences));
      setI(0);
    } else {
      setI(i + 1);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/reverse" className="btn-ghost">← กลับ / Back</Link>
        <div className="text-sm text-stone-600">
          รู้ {score.known}/{score.total}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-stone-800">
          🃏 บัตรคำ Flashcards
        </h1>
        <p className="text-stone-600">
          ฟังประโยค อ่านอังกฤษ แล้วทายความหมาย — Hear it, read it, guess meaning.
        </p>
      </div>

      <div className="card min-h-[20rem] space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} {byCat}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => speakEnglish(current.english)}
              className="inline-flex h-10 items-center gap-1 rounded-full bg-mint-500 px-3 text-ink-900 shadow hover:bg-mint-400"
              aria-label="Play English"
            >
              🔊 EN
            </button>
            <button
              onClick={() => speakThai(current.meaning)}
              className="inline-flex h-10 items-center gap-1 rounded-full border border-stone-300 bg-white px-3 text-stone-800 shadow-sm hover:bg-stone-50"
              aria-label="Play Thai"
            >
              🔊 TH
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-stone-800">{current.english}</div>
          <div className="thai mt-2 text-lg text-mint-700">{current.thaiPhonetic}</div>
          <div className="text-xs text-stone-500">(การออกเสียงแบบไทย)</div>

          {revealed ? (
            <div className="thai mt-6 text-2xl font-semibold text-green-700">
              = {current.meaning}
            </div>
          ) : (
            <button onClick={() => setRevealed(true)} className="mt-6 btn-secondary">
              เฉลย (Reveal)
            </button>
          )}
        </div>

        {revealed && (
          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => rate(false)}
              className="btn bg-red-100 text-red-800 hover:bg-red-200"
            >
              😵 ยังไม่รู้
            </button>
            <button
              onClick={() => rate(true)}
              className="btn bg-green-100 text-green-800 hover:bg-green-200"
            >
              😎 รู้แล้ว
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

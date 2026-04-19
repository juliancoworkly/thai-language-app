"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { reverseSentences, type ReverseSentence } from "@/data/reverse";
import { speakEnglish, speakThai } from "@/lib/tts";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Split an English phrase into word tokens (keep punctuation on the last word).
function tokenise(s: string): string[] {
  return s.trim().split(/\s+/);
}

// We want meaningful puzzles — pick sentences with 3–7 words.
function buildSet(): ReverseSentence[] {
  return shuffle(
    reverseSentences.filter((s) => {
      const n = tokenise(s.english).length;
      return n >= 3 && n <= 7;
    })
  );
}

export default function ReverseBuilder() {
  const [queue, setQueue] = useState<ReverseSentence[]>([]);
  const [i, setI] = useState(0);
  const [bank, setBank] = useState<number[]>([]);
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<"idle" | "correct" | "wrong">("idle");

  useEffect(() => {
    setQueue(buildSet());
  }, []);

  const current = queue[i];
  const tokens = current ? tokenise(current.english) : [];

  useEffect(() => {
    if (!current) return;
    const ids = tokens.map((_, idx) => idx);
    setBank(shuffle(ids));
    setPicked([]);
    setChecked("idle");
  }, [current]);

  if (!current) return <div className="card">Loading…</div>;

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
    const isCorrect =
      picked.length === tokens.length && picked.every((v, i) => v === i);
    setChecked(isCorrect ? "correct" : "wrong");
    if (isCorrect) speakEnglish(current.english);
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
        <Link href="/reverse" className="btn-ghost">← กลับ / Back</Link>
        <div className="text-sm text-stone-500">
          {i + 1} / {queue.length}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-stone-800">
          🧩 เรียงประโยค Sentence Builder
        </h1>
        <p className="text-stone-600">
          เรียงคำภาษาอังกฤษให้ถูกต้อง — Arrange the English words in the right order.
        </p>
      </div>

      <div className="card space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide text-stone-500">
              BUILD THE ENGLISH SENTENCE
            </div>
            <div className="thai mt-2 text-lg font-medium text-stone-800">
              {current.emoji} "{current.meaning}"
            </div>
            <div className="thai text-sm text-stone-500">
              แปลเป็นภาษาอังกฤษ
            </div>
          </div>
          <button
            onClick={() => speakThai(current.meaning)}
            className="inline-flex h-10 items-center gap-1 rounded-full border border-stone-300 bg-white px-3 text-stone-800 shadow-sm hover:bg-stone-50"
            aria-label="Play Thai"
          >
            🔊 TH
          </button>
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
            <div className="text-sm text-stone-400">
              คำตอบของคุณจะปรากฏที่นี่
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {picked.map((idx, pos) => (
                <button
                  key={`${idx}-${pos}`}
                  onClick={() => unpick(idx)}
                  className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-base shadow-sm"
                >
                  {tokens[idx]}
                  <span className="ml-1 text-xs text-stone-400">✕</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {bank.map((idx) => (
            <button
              key={idx}
              onClick={() => pickFromBank(idx)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-base shadow-sm hover:bg-stone-50"
            >
              {tokens[idx]}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          {checked !== "correct" ? (
            <button
              onClick={check}
              disabled={picked.length !== tokens.length}
              className="btn-primary"
            >
              ตรวจคำตอบ / Check
            </button>
          ) : (
            <button onClick={next} className="btn-primary">
              ถัดไป / Next →
            </button>
          )}
          {checked === "wrong" && (
            <div className="text-sm text-red-700">ยังไม่ถูก — ลองใหม่</div>
          )}
        </div>

        {checked === "correct" && (
          <div className="space-y-2 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-900">
                {current.english}
              </div>
              <button
                onClick={() => speakEnglish(current.english)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white hover:bg-brand-600"
              >
                🔊
              </button>
            </div>
            <div className="thai text-sm text-green-800">
              {current.thaiPhonetic}
            </div>
            <div className="thai text-sm text-green-700">
              = {current.meaning}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

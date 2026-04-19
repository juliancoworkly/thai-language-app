"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { reverseCategories, reverseSentences } from "@/data/reverse";
import { speakEnglish } from "@/lib/tts";

export default function ReversePage() {
  const [cat, setCat] = useState(reverseCategories[0].id);
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const list = useMemo(
    () => reverseSentences.filter((s) => s.category === cat),
    [cat]
  );

  const current = list[i % list.length];

  function next() {
    setI((n) => n + 1);
    setRevealed(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-800">
          🔁 English for Thai speakers
        </h1>
        <p className="text-stone-600">
          ภาษาอังกฤษสำหรับคนไทย — เรียนภาษาอังกฤษที่ใช้ในชีวิตประจำวัน
          ผ่านประโยคและเกม
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {reverseCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setCat(c.id);
              setI(0);
              setRevealed(false);
            }}
            className={`rounded-full px-3 py-1 text-sm ${
              cat === c.id ? "bg-brand-500 text-white" : "bg-stone-100 text-stone-700"
            }`}
          >
            {c.emoji} {c.title}
          </button>
        ))}
      </div>

      <div className="card space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} {current.category}
          </div>
          <button
            onClick={() => speakEnglish(current.english)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white shadow-sm hover:bg-brand-600"
            aria-label="Play English"
          >
            🔊
          </button>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-stone-800">
            {current.english}
          </div>
          <div className="thai mt-2 text-lg text-brand-700">
            {current.thaiPhonetic}
          </div>
          <div className="mt-1 text-xs text-stone-500">
            ↑ การออกเสียงแบบไทย (Thai-style pronunciation guide)
          </div>

          {revealed ? (
            <div className="thai mt-4 text-xl text-stone-700">
              = {current.meaning}
            </div>
          ) : (
            <button
              onClick={() => setRevealed(true)}
              className="mt-4 btn-secondary"
            >
              เฉลย (Reveal meaning)
            </button>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm text-stone-500">
            {((i % list.length) + 1)} / {list.length}
          </div>
          <button onClick={next} className="btn-primary">
            ต่อไป (Next) →
          </button>
        </div>
      </div>

      <div className="card">
        <div className="text-sm font-semibold text-stone-700">
          เคล็ดลับ (Tip)
        </div>
        <p className="mt-2 text-sm text-stone-600">
          กดปุ่ม 🔊 เพื่อฟังเสียง แล้วพยายามพูดตาม
          เสียงในภาษาอังกฤษที่ไม่มีในภาษาไทย เช่น "th", "v", "z" ให้ฝึกบ่อย ๆ
        </p>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-stone-700">
          เกมและคลังคำ / Games & Word bank
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/reverse/flashcards" className="card transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-3xl">🃏</div>
            <div className="mt-2 font-semibold">บัตรคำ Flashcards</div>
            <div className="text-xs text-stone-600">ฟังแล้วทายความหมาย</div>
          </Link>
          <Link href="/reverse/matching" className="card transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-3xl">🪞</div>
            <div className="mt-2 font-semibold">จับคู่ Matching</div>
            <div className="text-xs text-stone-600">จับคู่อังกฤษ ↔ ไทย</div>
          </Link>
          <Link href="/reverse/words" className="card transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-3xl">📚</div>
            <div className="mt-2 font-semibold">คลังประโยค Word bank</div>
            <div className="text-xs text-stone-600">ประโยคอังกฤษทั้งหมด</div>
          </Link>
        </div>
      </section>

      <Link href="/" className="btn-ghost inline-flex">
        ← กลับ Thai learning mode
      </Link>
    </div>
  );
}

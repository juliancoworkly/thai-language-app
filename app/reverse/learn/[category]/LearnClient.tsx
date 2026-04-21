"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useMemo, useState } from "react";
import { reverseCategories, reverseSentences } from "@/data/reverse";
import { reverseScripts } from "@/data/reverse-scripts";
import { speakEnglish, speakThai } from "@/lib/tts";

export default function LearnClient({ categoryId }: { categoryId: string }) {
  const cat = reverseCategories.find((c) => c.id === categoryId);
  const list = useMemo(
    () => reverseSentences.filter((s) => s.category === categoryId),
    [categoryId]
  );
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (!cat) return notFound();
  if (list.length === 0)
    return <div className="card">ยังไม่มีประโยคในหมวดนี้</div>;

  const current = list[i];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/reverse" className="btn-ghost">
          ← ทุกหมวด / All categories
        </Link>
        <div className="text-sm text-stone-500">
          {i + 1} / {list.length}
        </div>
      </div>

      <div>
        <div className="text-2xl">{cat.emoji}</div>
        <h1 className="text-2xl font-bold text-stone-800">{cat.title}</h1>
        <p className="text-stone-600">{cat.description}</p>
      </div>

      <div className="card space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} {cat.title}
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
          <div className="text-3xl font-bold text-stone-800">
            {current.english}
          </div>
          <div className="thai mt-2 text-lg text-mint-700">
            {current.thaiPhonetic}
          </div>
          <div className="text-xs text-stone-500">
            ↑ การออกเสียงแบบไทย (Thai-style pronunciation guide)
          </div>

          {revealed ? (
            <div className="thai mt-4 text-xl text-green-700">
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
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          className="btn-secondary"
          disabled={i === 0}
          onClick={() => {
            setI((n) => Math.max(0, n - 1));
            setRevealed(false);
          }}
        >
          ← ก่อนหน้า
        </button>
        {i < list.length - 1 ? (
          <button
            className="btn-primary"
            onClick={() => {
              setI((n) => n + 1);
              setRevealed(false);
            }}
          >
            ประโยคถัดไป →
          </button>
        ) : (
          <Link href="/reverse/flashcards" className="btn-primary">
            ฝึกด้วยบัตรคำ →
          </Link>
        )}
      </div>

      <CategoryScripts categoryId={categoryId} />
    </div>
  );
}

function CategoryScripts({ categoryId }: { categoryId: string }) {
  const matching = reverseScripts.filter((s) => s.category === categoryId);
  if (matching.length === 0) return null;

  return (
    <section className="rounded-2xl border border-mint-500/30 bg-mint-50 p-5">
      <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
        บทสนทนาเต็มๆ
      </div>
      <h2 className="thai mt-2 text-xl font-black tracking-tight text-stone-900">
        ลองอ่านบทสนทนาจริง
      </h2>
      <p className="thai mt-2 text-sm text-stone-700">
        บทสนทนาทั้งหมดมีคำอ่านภาษาไทยและความหมายครบ
        จะเห็นว่าประโยคเรียงต่อกันยังไงในสถานการณ์จริง
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {matching.map((s) => (
          <Link
            key={s.id}
            href={`/reverse/scripts/${s.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-mint-400"
          >
            {s.emoji} {s.title} →
          </Link>
        ))}
      </div>
    </section>
  );
}

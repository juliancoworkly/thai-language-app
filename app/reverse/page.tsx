"use client";

import Link from "next/link";
import { useMemo } from "react";
import { reverseCategories, reverseSentences } from "@/data/reverse";

export default function ReverseHome() {
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of reverseCategories) c[cat.id] = 0;
    for (const s of reverseSentences) c[s.category] = (c[s.category] ?? 0) + 1;
    return c;
  }, []);

  const total = reverseSentences.length;

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">
          ภาษาอังกฤษที่ใช้ในชีวิตประจำวัน
        </h1>
        <p className="mt-2 max-w-2xl text-brand-50">
          English phrases for everyday life in Thailand — for shop staff,
          drivers, waiters, and anyone who wants to speak English to tourists.
          Hear it, read the Thai-script pronunciation guide, practice with games.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/reverse/flashcards" className="btn bg-white text-brand-700 hover:bg-brand-50">
            🃏 บัตรคำ Flashcards
          </Link>
          <Link href="/reverse/matching" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            🪞 จับคู่ Matching
          </Link>
          <Link href="/reverse/builder" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            🧩 เรียงประโยค Builder
          </Link>
          <Link href="/reverse/words" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
            📚 คลังประโยค ({total})
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-stone-700">
          เลือกหมวดหมู่ / Pick a category
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reverseCategories
            .filter((c) => counts[c.id] > 0)
            .map((c) => (
              <Link
                key={c.id}
                href={`/reverse/learn/${c.id}`}
                className="card group transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{c.emoji}</div>
                  <span className="text-xs text-stone-500">
                    {counts[c.id]} ประโยค
                  </span>
                </div>
                <div className="mt-3 font-semibold text-stone-800">{c.title}</div>
                <div className="mt-1 text-sm text-stone-500">
                  {c.description}
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Link href="/" className="btn-ghost inline-flex">
        ← กลับ Thai learning mode
      </Link>
    </div>
  );
}

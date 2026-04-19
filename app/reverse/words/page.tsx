"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { reverseCategories, reverseSentences } from "@/data/reverse";
import { speakEnglish } from "@/lib/tts";

export default function ReverseWords() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return reverseSentences;
    return reverseSentences.filter(
      (s) =>
        s.english.toLowerCase().includes(q) ||
        s.meaning.includes(q) ||
        s.thaiPhonetic.includes(q)
    );
  }, [query]);

  const groups = useMemo(() => {
    const g: Record<string, typeof reverseSentences> = {};
    for (const s of filtered) (g[s.category] ??= []).push(s);
    return g;
  }, [filtered]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/reverse" className="btn-ghost">← กลับ / Back</Link>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ค้นหา / Search…"
          className="w-60 rounded-lg border border-stone-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-stone-800">
          📚 คลังประโยคอังกฤษ
        </h1>
        <p className="text-stone-600">
          ประโยคอังกฤษทั้งหมด — tap 🔊 เพื่อฟัง
        </p>
      </div>

      {reverseCategories
        .filter((c) => groups[c.id]?.length)
        .map((c) => (
          <section key={c.id}>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-stone-500">
              {c.emoji} {c.title} ({groups[c.id].length})
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {groups[c.id].map((s) => (
                <button
                  key={s.id}
                  onClick={() => speakEnglish(s.english)}
                  className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-3 text-left transition hover:shadow-sm"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-stone-800">{s.english}</div>
                    <div className="thai text-xs text-brand-700">{s.thaiPhonetic}</div>
                    <div className="thai text-xs text-stone-600">= {s.meaning}</div>
                  </div>
                  <span className="text-brand-500">🔊</span>
                </button>
              ))}
            </div>
          </section>
        ))}

      {filtered.length === 0 && (
        <div className="card text-center text-stone-500">
          ไม่พบประโยคที่ตรงกับ "{query}"
        </div>
      )}
    </div>
  );
}

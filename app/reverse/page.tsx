"use client";

import Link from "next/link";
import { useMemo } from "react";
import { reverseCategories, reverseSentences } from "@/data/reverse";
import { reverseEssentials } from "@/data/reverse-essentials";

export default function ReverseHome() {
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of reverseCategories) c[cat.id] = 0;
    for (const s of reverseSentences) c[s.category] = (c[s.category] ?? 0) + 1;
    return c;
  }, []);

  const total = reverseSentences.length;
  const visibleCategories = reverseCategories.filter((c) => counts[c.id] > 0);
  const topEssentials = reverseEssentials.slice().sort((a, b) => a.order - b.order).slice(0, 4);

  return (
    <div className="space-y-12 py-4">
      {/* HERO ===================================================== */}
      <section>
        <span className="eyebrow-pill-light">ฟรีตลอดไป · Free forever</span>
        <h1 className="thai display-h2 mt-5 text-stone-900">
          ภาษาอังกฤษที่ใช้{" "}
          <span className="serif-i text-mint-700">จริง</span>
        </h1>
        <p className="thai mt-4 max-w-2xl text-lg text-stone-600">
          ประโยคภาษาอังกฤษสำหรับใช้ในชีวิตประจำวัน สำหรับพนักงานร้าน คนขับรถ
          พนักงานเสิร์ฟ และคนที่อยากคุยกับนักท่องเที่ยว ฟังเสียง
          อ่านคำอ่านภาษาไทย ฝึกผ่านเกมความจำ
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/reverse/conversation"
            className="thai rounded-full bg-mint-500 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-glow transition hover:scale-[1.02] hover:bg-mint-400"
          >
            💬 สนทนา
          </Link>
          <GhostLink href="/reverse/flashcards">🃏 บัตรคำ</GhostLink>
          <GhostLink href="/reverse/matching">🪞 จับคู่</GhostLink>
          <GhostLink href="/reverse/builder">🧩 เรียงประโยค</GhostLink>
          <GhostLink href="/reverse/words">📚 คลังประโยค ({total})</GhostLink>
        </div>
      </section>

      {/* ESSENTIALS ============================================== */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="section-label text-mint-700 thai">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              พื้นฐาน · Essentials
            </span>
            <h2 className="thai mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
              สำหรับเด็กและ{" "}
              <span className="serif-i text-mint-700">ผู้เริ่มต้น</span>
            </h2>
          </div>
          <Link
            href="/reverse/essentials"
            className="thai hidden text-sm font-semibold text-mint-700 hover:text-mint-800 sm:inline"
          >
            ดูทั้งหมด 11 หน้า →
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topEssentials.map((e) => (
            <Link
              key={e.id}
              href={`/reverse/essentials/${e.id}`}
              className="group rounded-2xl border border-stone-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint-50 text-xl">
                {e.emoji}
              </div>
              <div className="mt-3 font-semibold text-stone-900">
                {e.subtitle}
              </div>
              <div className="thai mt-0.5 text-xs text-mint-700">{e.title}</div>
            </Link>
          ))}
        </div>
        <Link
          href="/reverse/essentials"
          className="thai mt-4 inline-flex text-sm font-semibold text-mint-700 hover:text-mint-800 sm:hidden"
        >
          ดูทั้งหมด 11 หน้า →
        </Link>
      </section>

      {/* CATEGORIES =============================================== */}
      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="section-label text-mint-700">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              เลือกหมวดหมู่ · Pick a category
            </span>
            <h2 className="thai mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
              เลือกสิ่งที่คุณอยากพูด
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((c, idx) => (
            <Link
              key={c.id}
              href={`/reverse/learn/${c.id}`}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                  {c.emoji}
                </div>
                <span className="font-mono text-xs tracking-wider text-stone-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 font-semibold text-stone-900">{c.title}</div>
              <div className="mt-1 text-sm text-stone-500">{c.description}</div>
              <div className="thai mt-4 text-xs text-mint-700">
                {counts[c.id]} ประโยค →
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

function GhostLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="thai rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50"
    >
      {children}
    </Link>
  );
}

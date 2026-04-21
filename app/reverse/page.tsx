"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { reverseCategories, reverseSentences } from "@/data/reverse";
import { reverseEssentials } from "@/data/reverse-essentials";
import { load, type Store } from "@/lib/storage";

export default function ReverseHome() {
  const [store, setStore] = useState<Store | null>(null);
  useEffect(() => {
    setStore(load());
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of reverseCategories) c[cat.id] = 0;
    for (const s of reverseSentences) c[s.category] = (c[s.category] ?? 0) + 1;
    return c;
  }, []);

  const total = reverseSentences.length;
  const visibleCategories = reverseCategories.filter((c) => counts[c.id] > 0);
  const topEssentials = reverseEssentials.slice().sort((a, b) => a.order - b.order).slice(0, 4);
  const totalEssentials = reverseEssentials.length;
  const isNewLearner = store
    ? Object.keys(store.cards).length === 0 && store.seenSentences.length === 0
    : true;

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
          <GhostLink href="/reverse/scripts">📜 บทสนทนา</GhostLink>
          <GhostLink href="/reverse/flashcards">🃏 บัตรคำ</GhostLink>
          <GhostLink href="/reverse/matching">🪞 จับคู่</GhostLink>
          <GhostLink href="/reverse/words">📚 คลังประโยค ({total})</GhostLink>
        </div>
      </section>

      {/* START HERE NUDGE ========================================= */}
      {isNewLearner && (
        <section>
          <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
            เริ่มที่นี่
          </div>
          <h2 className="thai mt-2 text-xl font-black tracking-tight text-stone-900 sm:text-2xl">
            สองหน้าสำหรับเริ่มต้น
          </h2>
          <p className="thai mt-1 text-sm text-stone-600">
            เริ่มจากตัวอักษรก่อน แล้วค่อยไปที่คำทักทายพื้นฐาน
            ช้าๆ แต่แน่นอน
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/reverse/essentials/alphabet"
              className="group rounded-2xl border border-mint-500/30 bg-mint-50 p-5 transition hover:border-mint-500 hover:bg-mint-100"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  🔤
                </div>
                <div>
                  <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
                    ขั้นที่ 1
                  </div>
                  <div className="font-semibold text-stone-900">
                    A B C
                    <span className="thai ml-2 text-sm text-mint-700">
                      ตัวอักษร
                    </span>
                  </div>
                </div>
              </div>
              <p className="thai mt-3 text-sm text-stone-700">
                26 ตัวอักษรภาษาอังกฤษ รู้ก่อน อ่านได้ก่อน
              </p>
            </Link>
            <Link
              href="/reverse/essentials/greetings"
              className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                  👋
                </div>
                <div>
                  <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
                    ขั้นที่ 2
                  </div>
                  <div className="font-semibold text-stone-900">
                    Greetings
                    <span className="thai ml-2 text-sm text-mint-700">
                      ทักทาย
                    </span>
                  </div>
                </div>
              </div>
              <p className="thai mt-3 text-sm text-stone-600">
                Hello, Thank you, Sorry คำทักทายและคำสุภาพที่ใช้ทุกวัน
              </p>
            </Link>
          </div>
        </section>
      )}

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
            ดูทั้งหมด {totalEssentials} หน้า →
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
          ดูทั้งหมด {totalEssentials} หน้า →
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

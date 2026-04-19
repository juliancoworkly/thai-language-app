"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname() ?? "";
  const inLanding = pathname === "/";
  const inReverse = pathname.startsWith("/reverse");

  const homeHref = inReverse ? "/reverse" : inLanding ? "/" : "/thai";
  const title = inReverse
    ? "อังกฤษสำหรับคนไทย"
    : inLanding
    ? "Thai & English"
    : "Phuut Thai";

  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href={homeHref} className="flex items-center gap-2">
          <span className="text-2xl">{inReverse ? "🇬🇧" : inLanding ? "🇹🇭↔🇬🇧" : "🇹🇭"}</span>
          <span className="font-bold text-stone-800">{title}</span>
        </Link>
        <div className="flex items-center gap-1 text-sm">
          {inLanding ? (
            <>
              <Link href="/thai" className="btn-ghost">Learn Thai</Link>
              <Link href="/reverse" className="btn-ghost">Learn English</Link>
            </>
          ) : inReverse ? (
            <>
              <Link href="/reverse/words" className="btn-ghost">คลังประโยค</Link>
              <Link href="/reverse/flashcards" className="btn-ghost">บัตรคำ</Link>
              <Link href="/reverse/conversation" className="btn-ghost">สนทนา</Link>
              <Link href="/reverse/matching" className="btn-ghost">จับคู่</Link>
              <Link href="/reverse/builder" className="btn-ghost">เรียงประโยค</Link>
              <Link href="/" className="btn-ghost">🏠</Link>
            </>
          ) : (
            <>
              <Link href="/words" className="btn-ghost">Word bank</Link>
              <Link href="/games" className="btn-ghost">Games</Link>
              <Link href="/" className="btn-ghost">🏠</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { getProfile } from "@/lib/storage";
import type { Profile } from "@/lib/types";

export function Header() {
  const pathname = usePathname() ?? "";
  const inLanding = pathname === "/";
  const inReverse = pathname.startsWith("/reverse");
  const inOnboarding = pathname.startsWith("/onboarding");
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    setProfile(getProfile());
  }, [pathname]);

  if (inOnboarding) {
    // Minimal header during onboarding
    return (
      <header className="border-b border-stone-200 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-mint-500 shadow-[0_0_8px_1px_rgba(52,211,153,.6)]"
              aria-hidden
            />
            <span className="font-bold tracking-tight text-stone-900">
              Phuut <span className="serif-i text-mint-700">Thai</span>
            </span>
          </Link>
          <Link href="/" className="btn-ghost text-xs">Skip for now</Link>
        </nav>
      </header>
    );
  }

  if (inLanding) {
    return (
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-white">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-mint-400 shadow-[0_0_12px_2px_rgba(52,211,153,.6)]" />
            <span className="font-bold">Phuut Thai</span>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/reverse" className="hidden text-stone-300 hover:text-white sm:inline">For Thai speakers</Link>
            {user ? (
              <Link href="/account" className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs">
                {user.email?.split("@")[0]}
              </Link>
            ) : (
              <Link href="/login" className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20">
                Sign in
              </Link>
            )}
            <Link
              href={profile?.onboarded ? "/thai" : "/onboarding"}
              className="rounded-full bg-mint-500 px-4 py-1.5 text-xs font-semibold text-ink-900 hover:bg-mint-400"
            >
              {profile?.onboarded ? "Continue" : "Get started"}
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  const homeHref = inReverse ? "/reverse" : "/thai";
  const title = inReverse ? "อังกฤษสำหรับคนไทย" : "Phuut Thai";

  const authLink = user ? (
    <Link href="/account" className="btn-ghost flex items-center gap-1" title={user.email ?? ""}>
      👤 <span className="hidden sm:inline">{user.email?.split("@")[0]}</span>
    </Link>
  ) : (
    <Link href="/login" className="btn-ghost">Sign in</Link>
  );

  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href={homeHref} className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full bg-mint-500 shadow-[0_0_8px_1px_rgba(52,211,153,.6)]"
            aria-hidden
          />
          <span className="font-bold tracking-tight text-stone-900">
            {inReverse ? (
              <span className="thai">{title}</span>
            ) : (
              <>
                Phuut <span className="serif-i text-mint-700">Thai</span>
              </>
            )}
          </span>
          {profile?.level && !inReverse && (
            <span className="ml-1 rounded-full border border-mint-500/30 bg-mint-50 px-2 py-0.5 text-[10px] font-semibold text-mint-700">
              L{profile.level}
            </span>
          )}
        </Link>
        <div className="flex items-center gap-1 text-sm">
          {inReverse ? (
            <>
              <Link href="/reverse/essentials" className="btn-ghost thai">พื้นฐาน</Link>
              <Link href="/reverse/words" className="btn-ghost thai">คลังประโยค</Link>
              <Link href="/reverse/conversation" className="btn-ghost thai">สนทนา</Link>
              <Link href="/reverse" className="btn-ghost">🎮</Link>
              {authLink}
              <Link href="/" className="btn-ghost">🏠</Link>
            </>
          ) : (
            <>
              <Link href="/essentials" className="btn-ghost">Essentials</Link>
              <Link href="/scripts" className="btn-ghost">Scripts</Link>
              <Link href="/words" className="btn-ghost">Words</Link>
              <Link href="/games" className="btn-ghost">Games</Link>
              {authLink}
              <Link href="/" className="btn-ghost">🏠</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

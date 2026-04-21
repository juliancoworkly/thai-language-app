"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfile, saveProfile } from "@/lib/storage";
import {
  ensureTrial,
  isPaidActive,
  trialDaysLeft,
  trialIsOver,
} from "@/lib/subscription";
import type { Profile } from "@/lib/types";

// Free routes inside the Thai-learning side that we never paywall.
const FREE_INSIDE_THAI = ["/account", "/login", "/onboarding", "/"];

export function Paywall({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let p = getProfile();
    if (p?.mode === "thai" && (!p.subscription || p.subscription.status === "none")) {
      p = ensureTrial(p);
      saveProfile(p);
    }
    setProfile(p);
    setReady(true);
  }, [pathname]);

  if (!ready) return <>{children}</>;
  if (!profile?.onboarded) return <>{children}</>;
  if (profile.mode !== "thai") return <>{children}</>;
  if (FREE_INSIDE_THAI.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return <>{children}</>;
  }
  if (isPaidActive(profile)) return <>{children}</>;

  // Trial over → block content
  return <TrialEndedScreen profile={profile} />;
}

function TrialEndedScreen({ profile: _profile }: { profile: Profile }) {
  return (
    <div className="mx-auto max-w-lg space-y-4 py-10">
      <div className="relative overflow-hidden rounded-3xl border-2 border-mint-500 bg-white p-8 text-center shadow-glow">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mint-500/15 blur-3xl"
          aria-hidden
        />
        <span className="eyebrow-pill-light">Trial ended</span>
        <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-stone-900 sm:text-4xl">
          Keep going,{" "}
          <span className="serif-i text-stone-500">properly</span>.
        </h1>
        <p className="mt-3 text-stone-600">
          Continue learning Thai for ฿1,000 per year. About ฿85 per month, or
          one massage. Unlocks all content plus cloud sync forever.
        </p>
        <div className="mt-6 flex items-baseline justify-center gap-2">
          <span className="text-5xl font-black text-stone-900">฿1,000</span>
          <span className="text-stone-500">per year</span>
        </div>
        <Link
          href="/account/billing"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-mint-500 px-6 py-3 font-semibold text-ink-900 transition hover:scale-[1.01] hover:bg-mint-400"
        >
          Subscribe →
        </Link>
        <Link
          href="/account"
          className="mt-3 block text-xs text-stone-500 hover:text-stone-700"
        >
          Or manage your account
        </Link>
      </div>
    </div>
  );
}

export function TrialBanner() {
  const pathname = usePathname() ?? "/";
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    setProfile(getProfile());
  }, []);

  // Landing page uses an absolute-positioned header that would overlap the banner.
  if (pathname === "/") return null;
  if (!profile || profile.mode !== "thai") return null;
  const days = trialDaysLeft(profile);
  if (days === null) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-mint-500/30 bg-mint-50 px-4 py-2 text-xs text-mint-800">
        <span className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full bg-mint-500 shadow-[0_0_8px_1px_rgba(52,211,153,.6)]"
            aria-hidden
          />
          Free trial
          <strong className="text-stone-900">
            {days} day{days === 1 ? "" : "s"} left
          </strong>
        </span>
        <Link
          href="/account/billing"
          className="rounded-full bg-ink-900 px-3 py-1 font-semibold text-mint-300 hover:bg-ink-800"
        >
          Subscribe →
        </Link>
      </div>
    </div>
  );
}

export { trialIsOver };

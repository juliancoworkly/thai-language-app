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
    <div className="mx-auto max-w-lg space-y-4 py-8">
      <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <div className="text-6xl">🔒</div>
        <h1 className="mt-4 text-2xl font-bold text-stone-800">
          Your free trial has ended
        </h1>
        <p className="mt-2 text-stone-600">
          Continue learning Thai for ฿1,000 per year — about ฿85 per month, or
          one massage. Unlocks all content + cloud sync forever.
        </p>
        <div className="mt-6 flex items-baseline justify-center gap-2">
          <span className="text-5xl font-black text-stone-900">฿1,000</span>
          <span className="text-stone-500">per year</span>
        </div>
        <Link
          href="/account/billing"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-mint-500 px-6 py-3 font-semibold text-ink-900 hover:bg-mint-400"
        >
          Subscribe →
        </Link>
        <Link href="/account" className="mt-3 block text-xs text-stone-500 hover:text-stone-700">
          Or manage your account
        </Link>
      </div>
    </div>
  );
}

export function TrialBanner() {
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    setProfile(getProfile());
  }, []);

  if (!profile || profile.mode !== "thai") return null;
  const days = trialDaysLeft(profile);
  if (days === null) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-2">
      <div className="flex items-center justify-between rounded-full bg-amber-50 px-4 py-2 text-xs text-amber-900">
        <span>
          🎁 Trial — <strong>{days} day{days === 1 ? "" : "s"} left</strong>
        </span>
        <Link href="/account/billing" className="font-semibold underline">
          Subscribe
        </Link>
      </div>
    </div>
  );
}

export { trialIsOver };

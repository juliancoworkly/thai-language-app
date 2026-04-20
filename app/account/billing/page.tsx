"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/CheckoutButton";
import { getProfile, saveProfile } from "@/lib/storage";
import { trialDaysLeft } from "@/lib/subscription";
import type { Profile } from "@/lib/types";

export default function BillingPage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    setProfile(getProfile());
  }, []);

  // Manual override for now — until Paddle is wired up. This lets the user
  // (or you, while testing) flip subscription state without a real payment.
  function activateManually() {
    if (!profile) return;
    const next: Profile = {
      ...profile,
      subscription: {
        status: "active",
        provider: "manual",
        currentPeriodEnd: Date.now() + 365 * 86_400_000,
      },
    };
    saveProfile(next);
    setProfile(next);
  }

  function resetTrial() {
    if (!profile) return;
    const next: Profile = {
      ...profile,
      subscription: {
        status: "trialing",
        trialStart: Date.now(),
        trialEnd: Date.now() + 3 * 86_400_000,
      },
    };
    saveProfile(next);
    setProfile(next);
  }

  const sub = profile?.subscription;
  const days = trialDaysLeft(profile);

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-stone-800">Billing</h1>
        <p className="mt-1 text-stone-600">
          Manage your subscription to the Thai-learning side.
        </p>

        <div className="mt-6 rounded-2xl bg-stone-50 p-5">
          <div className="text-xs uppercase tracking-wider text-stone-500">
            Current status
          </div>
          <div className="mt-1 text-2xl font-bold text-stone-800">
            {labelFor(sub?.status)}
          </div>
          {days !== null && (
            <div className="mt-1 text-sm text-amber-700">
              {days} day{days === 1 ? "" : "s"} of free trial left
            </div>
          )}
          {sub?.currentPeriodEnd && (
            <div className="mt-1 text-sm text-stone-500">
              Renews {new Date(sub.currentPeriodEnd).toLocaleDateString()}
            </div>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-stone-200 p-5">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="font-semibold text-stone-800">Phuut Thai — Annual</div>
              <div className="text-sm text-stone-500">
                Billed once per year. Cancel anytime.
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-stone-900">฿1,000</div>
              <div className="text-xs text-stone-500">≈ $28 USD</div>
            </div>
          </div>
          <div className="mt-4">
            <CheckoutButton />
          </div>
          <p className="mt-2 text-center text-[11px] text-stone-500">
            Secure card processing by Paddle. Cancel anytime during trial —
            no charge.
          </p>
        </div>

        <details className="mt-4 text-xs text-stone-400">
          <summary className="cursor-pointer">Dev controls (until Paddle is live)</summary>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={activateManually} className="btn-secondary">
              Activate (manual)
            </button>
            <button onClick={resetTrial} className="btn-secondary">
              Restart trial (3 days)
            </button>
          </div>
        </details>
      </div>

      <Link href="/account" className="btn-ghost inline-flex">
        ← Back to account
      </Link>
    </div>
  );
}

function labelFor(status?: string) {
  switch (status) {
    case "active": return "✅ Active subscription";
    case "trialing": return "🎁 Free trial";
    case "past_due": return "⚠️ Payment past due";
    case "canceled": return "⏸️ Cancelled";
    case "expired": return "🔒 Trial expired";
    default: return "—";
  }
}

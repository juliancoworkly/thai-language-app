"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/CheckoutButton";
import { getProfile, saveProfile } from "@/lib/storage";
import { trialDaysLeft } from "@/lib/subscription";
import type { Profile } from "@/lib/types";

export default function BillingPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    setProfile(getProfile());
  }, []);

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
    <div className="mx-auto max-w-2xl space-y-4 py-4">
      <div>
        <span className="eyebrow-pill-light">Billing</span>
        <h1 className="display-h2 mt-4 text-stone-900">
          One price. One{" "}
          <span className="serif-i text-mint-700">annual</span> payment.
        </h1>
        <p className="mt-3 text-stone-600">
          Manage your subscription to the Thai-learning side. Cancel anytime.
        </p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
          Current status
        </div>
        <div className="mt-2 text-2xl font-bold text-stone-900">
          {labelFor(sub?.status)}
        </div>
        {days !== null && (
          <div className="mt-1 text-sm font-medium text-mint-700">
            {days} day{days === 1 ? "" : "s"} of free trial left
          </div>
        )}
        {sub?.currentPeriodEnd && (
          <div className="mt-1 text-sm text-stone-500">
            Renews {new Date(sub.currentPeriodEnd).toLocaleDateString()}
          </div>
        )}
      </section>

      <section className="relative overflow-hidden rounded-2xl border-2 border-mint-500 bg-white p-6 shadow-glow sm:p-8">
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-mint-500/15 blur-3xl"
          aria-hidden
        />
        <div className="relative flex items-baseline justify-between">
          <div>
            <div className="font-semibold text-stone-900">
              Phuut Thai · Patron
            </div>
            <div className="text-sm text-stone-500">
              Billed once per year. Cancel anytime.
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-stone-900">฿1,000</div>
            <div className="text-xs text-stone-500">≈ $28 USD</div>
          </div>
        </div>

        <label className="relative mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-700">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 flex-none accent-mint-500"
          />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="text-mint-700 underline">
              Terms of Service
            </Link>
            , the{" "}
            <Link href="/privacy" className="text-mint-700 underline">
              Privacy Policy
            </Link>
            , and the{" "}
            <Link href="/refund" className="text-mint-700 underline">
              Refund Policy
            </Link>
            .
          </span>
        </label>

        <div className="relative mt-4">
          <CheckoutButton disabled={!agreed} />
        </div>
        <p className="relative mt-3 text-center text-[11px] text-stone-500">
          Secure card processing by Paddle. Cancel anytime during trial, no
          charge.
        </p>
      </section>

      <details className="mt-4 text-xs text-stone-400">
        <summary className="cursor-pointer">
          Dev controls (until Paddle is live)
        </summary>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={activateManually} className="btn-secondary">
            Activate (manual)
          </button>
          <button onClick={resetTrial} className="btn-secondary">
            Restart trial (3 days)
          </button>
        </div>
      </details>

      <Link href="/account" className="btn-ghost inline-flex">
        ← Back to account
      </Link>
    </div>
  );
}

function labelFor(status?: string) {
  switch (status) {
    case "active":
      return "Active subscription";
    case "trialing":
      return "Free trial";
    case "past_due":
      return "Payment past due";
    case "canceled":
      return "Cancelled";
    case "expired":
      return "Trial expired";
    default:
      return "—";
  }
}

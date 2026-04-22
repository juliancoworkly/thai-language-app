"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/lib/supabase";
import { load, type Store } from "@/lib/storage";

export default function AccountPage() {
  const { user, loading, syncing } = useAuth();
  const [store, setStore] = useState<Store | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    setStore(load());
  }, [user, syncing]);

  async function signOut() {
    if (!supabase) return;
    setSigningOut(true);
    await supabase.auth.signOut();
    setSigningOut(false);
  }

  if (loading) {
    return <div className="card">Loading…</div>;
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg">
        <div className="card text-center">
          <h1 className="text-2xl font-bold">Not signed in</h1>
          <p className="mt-2 text-stone-600">
            Sign in to sync your progress across devices.
          </p>
          <Link href="/login" className="btn-primary mt-4">
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  const cardsDue = store
    ? Object.values(store.cards).filter((c) => c.dueAt <= Date.now()).length
    : 0;
  const profile = store?.profile;
  const onboarded = profile?.onboarded === true;
  const learnHref = profile?.mode === "english" ? "/reverse" : "/thai";

  return (
    <div className="mx-auto max-w-lg space-y-4">
      <div className="card">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide text-stone-500">
              Signed in as
            </div>
            <div className="mt-1 text-lg font-semibold text-stone-800">
              {user.email}
            </div>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs ${
              syncing
                ? "border border-mint-500/30 bg-mint-50 text-mint-800"
                : "border border-mint-500/40 bg-mint-100 text-mint-800"
            }`}
          >
            {syncing ? "Syncing…" : "Synced"}
          </span>
        </div>
      </div>

      {!onboarded ? (
        <div className="rounded-2xl border-2 border-mint-500/40 bg-mint-50 p-6 shadow-sm">
          <div className="text-xs uppercase tracking-wide text-mint-800">
            Finish setting up
          </div>
          <h2 className="mt-1 text-xl font-bold text-stone-900">
            Your account is ready — let's pick your learning mode.
          </h2>
          <p className="mt-2 text-sm text-stone-700">
            Lessons stay locked until you choose whether you want to learn Thai
            or English. Takes about 30 seconds.
          </p>
          <Link href="/onboarding" className="btn-primary mt-4 w-full">
            Continue setup →
          </Link>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-mint-500/40 bg-mint-50 p-6 shadow-sm">
          <div className="text-xs uppercase tracking-wide text-mint-800">
            Ready to learn
          </div>
          <h2 className="mt-1 text-xl font-bold text-stone-900">
            {cardsDue > 0
              ? `You have ${cardsDue} card${cardsDue === 1 ? "" : "s"} due.`
              : "Jump back into your lessons."}
          </h2>
          <Link href={learnHref} className="btn-primary mt-4 w-full">
            Resume learning →
          </Link>
        </div>
      )}

      {store && (
        <div className="card">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            Your progress
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-stone-500">Sentences seen</dt>
              <dd className="text-xl font-bold text-stone-800">
                {store.seenSentences.length}
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">Words seen</dt>
              <dd className="text-xl font-bold text-stone-800">
                {store.seenWords.length}
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">Total reviews</dt>
              <dd className="text-xl font-bold text-stone-800">
                {store.stats.totalReviews}
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">Cards due now</dt>
              <dd className="text-xl font-bold text-stone-800">{cardsDue}</dd>
            </div>
          </dl>
        </div>
      )}

      <button
        onClick={signOut}
        disabled={signingOut}
        className="btn-secondary w-full"
      >
        {signingOut ? "Signing out…" : "Sign out"}
      </button>

      <Link href="/" className="btn-ghost inline-flex">
        ← Back home
      </Link>
    </div>
  );
}

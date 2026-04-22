"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";

const RESEND_SECONDS = 60;

function friendlyError(raw: string): string {
  const msg = raw.toLowerCase();
  if (msg.includes("rate limit")) {
    return "You've requested a few links in a row. Give it a minute, then check your inbox (and spam) before trying again.";
  }
  if (msg.includes("invalid") && msg.includes("email")) {
    return "That email address doesn't look right. Double-check it and try again.";
  }
  if (msg.includes("network") || msg.includes("fetch")) {
    return "Couldn't reach the server. Check your connection and try again.";
  }
  return raw;
}

export default function LoginPage() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!supabase) {
      setError("Auth isn't configured yet. See setup note below.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + "/account/" },
    });
    setSubmitting(false);
    if (error) {
      setError(friendlyError(error.message));
    } else {
      setSent(true);
      setCooldown(RESEND_SECONDS);
    }
  }

  async function resend() {
    if (cooldown > 0 || submitting || !supabase) return;
    setError(null);
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + "/account/" },
    });
    setSubmitting(false);
    if (error) setError(friendlyError(error.message));
    else setCooldown(RESEND_SECONDS);
  }

  if (!isSupabaseConfigured) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <div className="card">
          <h1 className="text-2xl font-bold">Login isn't set up yet</h1>
          <p className="mt-2 text-stone-600">
            The app is running in local-only mode — your progress is saved in
            this browser's storage. To enable cross-device sync:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-stone-700">
            <li>Create a free project at <a className="text-mint-700 underline" href="https://supabase.com" target="_blank" rel="noreferrer">supabase.com</a></li>
            <li>
              In <strong>Settings → API</strong>, copy the <code>Project URL</code> and the <code>anon public</code> key
            </li>
            <li>
              Create <code>.env.local</code> in the project root with:
              <pre className="mt-2 rounded bg-stone-100 p-2 text-xs">
NEXT_PUBLIC_SUPABASE_URL=&lt;your-url&gt;{"\n"}
NEXT_PUBLIC_SUPABASE_ANON_KEY=&lt;your-anon-key&gt;
              </pre>
            </li>
            <li>
              Open <strong>SQL Editor</strong> in Supabase, paste the contents
              of <code>supabase/schema.sql</code>, run.
            </li>
            <li>Rebuild the site (<code>npm run build</code>).</li>
          </ol>
          <Link href="/" className="btn-ghost mt-4 inline-flex">← Back home</Link>
        </div>
      </div>
    );
  }

  if (!loading && user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <div className="card text-center">
          <div className="text-5xl">✅</div>
          <h1 className="mt-3 text-2xl font-bold">Already signed in</h1>
          <p className="mt-1 text-stone-600">{user.email}</p>
          <Link href="/account" className="btn-primary mt-4">My account</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-4 py-4">
      <div>
        <span className="eyebrow-pill-light">Sign in</span>
        <h1 className="display-h2 mt-4 text-stone-900">
          One tap,{" "}
          <span className="serif-i text-mint-700">no password</span>.
        </h1>
        <p className="mt-3 text-stone-600">
          Enter your email and we'll send a one-tap login link. Your progress
          follows you to any device.
        </p>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        {sent ? (
          <div className="rounded-2xl border border-mint-500/30 bg-mint-50 p-5 text-mint-800">
            <div className="text-2xl">📬</div>
            <p className="mt-2 font-semibold text-stone-900">
              Link sent — check your email
            </p>
            <p className="mt-1 text-sm text-stone-700">
              We sent a one-tap login link to <strong>{email}</strong>. Open it
              on this device and you'll be signed in.
            </p>
            <p className="mt-2 text-xs text-stone-600">
              Didn't get it? Check your spam folder, or resend below.
            </p>
            {error && (
              <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-900">
                {error}
              </div>
            )}
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={resend}
                disabled={cooldown > 0 || submitting}
                className="btn-secondary disabled:cursor-not-allowed"
              >
                {submitting
                  ? "Sending…"
                  : cooldown > 0
                  ? `Resend in ${cooldown}s`
                  : "Resend link"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setError(null);
                }}
                className="btn-ghost"
              >
                Use a different email
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={signIn} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-stone-700">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base focus:border-mint-500 focus:outline-none focus:ring-2 focus:ring-mint-500/20"
                autoFocus
              />
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-700">
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
                </Link>{" "}
                and the{" "}
                <Link href="/privacy" className="text-mint-700 underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-900">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting || !email || !agreed}
              className="btn-primary w-full disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Send magic link →"}
            </button>
          </form>
        )}

        <p className="mt-5 text-xs text-stone-500">
          Your existing progress on this device will be merged into your
          account the first time you sign in.
        </p>
      </div>

      <Link href="/" className="btn-ghost inline-flex">← Back</Link>
    </div>
  );
}

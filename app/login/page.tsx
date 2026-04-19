"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

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
    if (error) setError(error.message);
    else setSent(true);
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
            <li>Create a free project at <a className="text-brand-700 underline" href="https://supabase.com" target="_blank" rel="noreferrer">supabase.com</a></li>
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
    <div className="mx-auto max-w-lg space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold text-stone-800">Sign in</h1>
        <p className="mt-1 text-stone-600">
          Enter your email — we'll send you a one-tap login link. No password
          to remember.
        </p>

        {sent ? (
          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
            <div className="text-2xl">📬</div>
            <p className="mt-2 font-semibold">Check your email</p>
            <p className="text-sm">
              We sent a login link to <strong>{email}</strong>. Open it on this
              device — it'll sign you in and sync your progress to the cloud.
            </p>
          </div>
        ) : (
          <form onSubmit={signIn} className="mt-4 space-y-3">
            <label className="block">
              <span className="text-sm text-stone-600">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
                autoFocus
              />
            </label>
            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-900">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting || !email}
              className="btn-primary w-full"
            >
              {submitting ? "Sending…" : "Send magic link"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-stone-500">
          Your existing progress on this device will be merged into your
          account the first time you sign in.
        </p>
      </div>

      <Link href="/" className="btn-ghost inline-flex">← Back</Link>
    </div>
  );
}

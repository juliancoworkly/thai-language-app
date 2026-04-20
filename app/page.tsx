"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProfile } from "@/lib/storage";

export default function Landing() {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const p = getProfile();
    setHasProfile(!!p?.onboarded);
  }, []);

  const startHref = hasProfile ? "/thai" : "/onboarding";
  const englishHref = "/reverse";

  return (
    <div className="-mx-4 -my-6">
      {/* HERO ====================================================== */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(52,211,153,.25), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-28 text-center sm:pt-32 sm:pb-40">
          <span className="eyebrow-pill">EVERYDAY THAI, ACTUALLY USEFUL</span>
          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Speak Thai you'll{" "}
            <span className="serif-i gradient-mint-text">actually use</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-300 sm:text-xl">
            Real conversations, broken down word by word, drilled in with
            memory games. Not cartoon owls. Not "the spider drinks milk."
            The phrases that get you through your day in Thailand.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href={startHref}
              className="rounded-full bg-mint-500 px-6 py-3 font-semibold text-ink-900 shadow-glow transition hover:scale-105 hover:bg-mint-400"
            >
              {hasProfile ? "Continue learning →" : "Start learning Thai →"}
            </Link>
            <Link
              href={englishHref}
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              🇹🇭 ฟรีสำหรับคนไทย — Free for Thais
            </Link>
          </div>
          <p className="mt-6 text-xs text-stone-400">
            No card required. 3-day free trial of all features.
          </p>
        </div>
      </section>

      {/* WHAT'S DIFFERENT ========================================== */}
      <section className="bg-ink-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow-pill">SENTENCE-FIRST LEARNING</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            More than{" "}
            <span className="serif-i gradient-mint-text">flashcards</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-400">
            Three things that make this different from every other language app.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          <Feature
            icon="💬"
            title="Conversations, not flashcards"
            body="Hear a real Thai phrase, pick the right reply. 3 lives. Streak bonuses. The same drill format you play on your phone for fun."
            chips={["3 lives", "streak bonus", "60+ exchanges"]}
          />
          <Feature
            icon="🧩"
            title="Word by word"
            body="Tap any word in any sentence to see its meaning, role, and tone. Learn how sentences are built so you can build your own."
            chips={["tap to break down", "remix vocabulary"]}
          />
          <Feature
            icon="🎵"
            title="Tone training"
            body="Thai has 5 tones. Get them wrong and people don't understand you. Our trainer drills them in with audio and color coding."
            chips={["5 tones", "audio quiz", "color coded"]}
          />
        </div>
      </section>

      {/* WHY WE BUILT IT ========================================== */}
      <section className="bg-stone-50 px-6 py-24 text-stone-900">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-mint-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mint-700">
            WHY WE BUILT IT
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Other apps teach you{" "}
            <span className="serif-i text-stone-500">"the spider drinks milk"</span>.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-stone-700">
            <p>
              We tried Duolingo. Spent hours learning sentences nobody says.
              Then walked into a 7-Eleven and froze.
            </p>
            <p>
              The problem is structure. Apps are built to maximise daily
              streaks, not real conversations. We built the opposite — every
              sentence in here is something you'll actually need this week
              in Thailand.
            </p>
            <p className="font-medium text-stone-900">
              Order food. Talk to your taxi driver. Bargain at the market.
              Have small-talk with neighbours. The boring, useful stuff.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS ========================================== */}
      <section className="bg-ink-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow-pill">HOW IT WORKS</span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Three steps to{" "}
            <span className="serif-i gradient-mint-text">starting</span>.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          <Step n="1" title="Tell us about you" body="Gender (it changes pronouns!), level, optional kid mode. Takes 30 seconds." />
          <Step n="2" title="Pick a scenario" body="Food, taxi, shopping, small talk, emergency, more. Or jump straight into a game." />
          <Step n="3" title="Play, drill, speak" body="Five game types. Spaced repetition under the hood. Use it once a day for 10 min." />
        </div>
      </section>

      {/* PRICING ========================================== */}
      <section className="bg-stone-50 px-6 py-24 text-stone-900">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full bg-mint-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mint-700">
            HONEST PRICING
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            One price. One{" "}
            <span className="serif-i text-stone-500">payment</span>. A year.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            No subscriptions stacking up. No "Premium Plus Ultra" tiers. And
            English mode stays free for Thai nationals — forever.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          <PriceCard
            badge="FREE FOREVER"
            title="English for Thais"
            price="฿0"
            sub="ฟรีตลอดไป"
            features={[
              "All English phrases",
              "All games (conversation, builder, matching, flashcards)",
              "Searchable phrase bank",
              "No account required",
            ]}
            ctaText="เริ่มเรียน →"
            ctaHref="/reverse"
            light
          />
          <PriceCard
            badge="3-DAY FREE TRIAL"
            title="Phuut Thai"
            price="฿1,000"
            sub="per year — billed annually (about $28)"
            features={[
              "Everything in the free side",
              "All Thai content + future updates",
              "Cloud sync across devices",
              "Cancel any time during trial",
            ]}
            ctaText={hasProfile ? "Continue →" : "Start free trial →"}
            ctaHref={startHref}
            highlighted
          />
        </div>
      </section>

      {/* CTA ========================================== */}
      <section className="bg-ink-900 px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            Built for{" "}
            <span className="serif-i gradient-mint-text">living</span> in Thailand.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-400">
            Made by someone here, for everyone here. Use it on your phone,
            install it as an app, learn on the BTS.
          </p>
          <Link
            href={startHref}
            className="mt-8 inline-flex rounded-full bg-mint-500 px-8 py-4 text-lg font-semibold text-ink-900 shadow-glow transition hover:scale-105 hover:bg-mint-400"
          >
            {hasProfile ? "Continue learning →" : "Start your free trial →"}
          </Link>
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
  chips,
}: {
  icon: string;
  title: string;
  body: string;
  chips: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/20 text-2xl">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-stone-400">{body}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-full border border-mint-500/20 bg-mint-500/10 px-2.5 py-1 text-[11px] text-mint-300"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-500 font-bold text-ink-900">
        {n}
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-stone-400">{body}</p>
    </div>
  );
}

function PriceCard({
  badge,
  title,
  price,
  sub,
  features,
  ctaText,
  ctaHref,
  light,
  highlighted,
}: {
  badge: string;
  title: string;
  price: string;
  sub: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  light?: boolean;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 ${
        highlighted
          ? "border-2 border-mint-500 bg-white shadow-glow"
          : "border border-stone-200 bg-white"
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-mint-700">
        {badge}
      </div>
      <h3 className="mt-2 text-2xl font-bold text-stone-900">{title}</h3>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-5xl font-black text-stone-900">{price}</span>
        <span className="text-sm text-stone-500">{sub}</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-stone-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="text-mint-600">✓</span> {f}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`mt-6 block rounded-full px-5 py-3 text-center font-semibold transition ${
          highlighted
            ? "bg-mint-500 text-ink-900 hover:bg-mint-400"
            : "bg-stone-900 text-white hover:bg-stone-800"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProfile } from "@/lib/storage";

const SCENARIOS = [
  "Order food",
  "Haggle at the market",
  "Talk to your taxi",
  "Make small talk",
  "Handle emergencies",
  "Meet the neighbours",
  "Open a bank account",
  "Rent an apartment",
  "Order a coffee",
  "Tell a joke",
];

export default function Landing() {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const p = getProfile();
    setHasProfile(!!p?.onboarded);
  }, []);

  const startHref = hasProfile ? "/thai" : "/onboarding";

  return (
    <div className="-mx-4 -my-6">
      {/* HERO ====================================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 text-white">
        <div className="glow-radial pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-500/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
          <div className="flex flex-col items-center text-center">
            <span className="section-label">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400 shadow-[0_0_10px_2px_rgba(52,211,153,.6)]" />
              Made in Phuket · Built for Thailand
            </span>

            <h1 className="display-h1 mt-7 max-w-5xl text-balance">
              Two languages.{" "}
              <span className="serif-i gradient-mint-text">One bridge.</span>
              <br className="hidden sm:block" />
              Built in Thailand, for Thailand.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg text-stone-300 sm:text-xl">
              English — <span className="text-mint-300">free, forever</span>{" "}
              for every Thai learner. Thai — honestly priced for the rest of us.
              Our aim: every membership helps put more English into Thai classrooms.
            </p>

            {/* Dual CTA */}
            <div className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-2">
              <Link
                href={hasProfile ? startHref : "/onboarding"}
                className="group relative overflow-hidden rounded-2xl bg-mint-500 p-5 text-left text-ink-900 shadow-glow transition hover:scale-[1.015] hover:bg-mint-400"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-70">
                  🇬🇧 → 🇹🇭 · I speak English
                </div>
                <div className="mt-2 text-xl font-bold">Learn Thai that works</div>
                <div className="text-sm opacity-90">
                  ฿1,000 / year · 3-day free trial · cancel anytime
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                  Start trial
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>

              <Link
                href={hasProfile ? "/reverse" : "/onboarding"}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-5 text-left text-white backdrop-blur transition hover:scale-[1.015] hover:border-white/40 hover:bg-white/10"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-mint-300">
                  🇹🇭 → 🇬🇧 · ฉันเป็นคนไทย
                </div>
                <div className="thai mt-2 text-xl font-bold">
                  เรียนภาษาอังกฤษฟรี
                </div>
                <div className="thai text-sm text-stone-300">
                  ฟรีตลอดไป · ไม่ต้องสมัคร · ไม่มีโฆษณา
                </div>
                <div className="thai mt-3 inline-flex items-center gap-1 text-sm font-semibold text-mint-300">
                  เริ่มเลย
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </div>

            <p className="mt-6 text-xs text-stone-500">
              One choice locks the app to your side. Focus wins.
            </p>
          </div>

          {/* Commitments strip */}
          <div className="mx-auto mt-20 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Stat kicker="฿0" label="Our promise: English mode is free for Thai learners, forever" />
            <Stat kicker="Our aim" label="Every membership helps fund free English for Thailand" />
            <Stat kicker="No" label="Ads · upsells · dark patterns" />
          </div>
        </div>

        {/* Scenario marquee */}
        <div className="relative border-y border-white/5 bg-ink-800/60 py-5">
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track flex gap-3 whitespace-nowrap">
              {[...SCENARIOS, ...SCENARIOS, ...SCENARIOS].map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-stone-300"
                >
                  <span className="h-1 w-1 rounded-full bg-mint-400" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO ================================================ */}
      <section className="relative bg-stone-50 px-6 py-28 text-stone-900">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow-pill-light">Our mission</span>
            <h2 className="display-h2 mt-6">
              English should be{" "}
              <span className="serif-i text-stone-500">free</span> in Thailand.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-stone-700 lg:col-span-7">
            <p>
              In Thailand, a kid's future often hinges on one thing — English.
              Better jobs, better universities, more options. But the best
              learning apps cost more than a school lunch.
            </p>
            <p>
              So we made a promise to ourselves.{" "}
              <span className="font-semibold text-stone-900">
                English mode stays free, forever, for every Thai learner.
              </span>{" "}
              No ads. No upsells. No account required.
            </p>
            <p>
              Thai learners (expats, travellers, curious humans) pay once a year.
              That revenue keeps the Thai side alive — and our aim is to use
              it to put free English in front of every Thai learner who wants it.
            </p>
            <p className="font-medium text-stone-900">
              Buy a year of Thai. Help fund English for Thailand. That's the idea.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S DIFFERENT ========================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 px-6 py-28 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="section-label">02 · Why it works</span>
              <h2 className="display-h2 mt-4 max-w-2xl">
                More than{" "}
                <span className="serif-i gradient-mint-text">flashcards</span>.
              </h2>
            </div>
            <p className="max-w-md text-stone-400">
              Three things that make this different from every other language app
              on your phone.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <Feature
              n="01"
              icon="💬"
              title="Conversations, not flashcards"
              body="Hear a real Thai phrase, pick the right reply. 3 lives. Streak bonuses. The drill format you already play for fun."
              chips={["3 lives", "streak bonus", "60+ exchanges"]}
            />
            <Feature
              n="02"
              icon="🧩"
              title="Word by word"
              body="Tap any word in any sentence to see its meaning, role, and tone. Learn how sentences are built so you can build your own."
              chips={["tap to break down", "remix vocabulary"]}
            />
            <Feature
              n="03"
              icon="🎵"
              title="Tone training"
              body="Thai has 5 tones. Miss them and nobody understands you. Our trainer drills them in with audio and colour coding."
              chips={["5 tones", "audio quiz", "colour coded"]}
            />
          </div>
        </div>
      </section>

      {/* WHY WE BUILT IT ========================================== */}
      <section className="relative bg-stone-50 px-6 py-28 text-stone-900">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow-pill-light">Why we built it</span>
            <h2 className="display-h2 mt-6">
              Other apps teach{" "}
              <span className="serif-i text-stone-500">"the spider drinks milk"</span>.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-stone-700 lg:col-span-7">
            <p>
              We tried Duolingo. Spent hours learning sentences nobody says.
              Then walked into a 7-Eleven and froze.
            </p>
            <p>
              The problem is structure. Apps optimise for daily streaks,
              not real conversations. We built the opposite — every sentence
              in here is something you'll actually need{" "}
              <em className="serif-i">this week</em> in Thailand.
            </p>
            <p className="font-medium text-stone-900">
              Order food. Talk to your taxi driver. Bargain at the market.
              Have small-talk with neighbours. The boring, useful stuff.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS ========================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="section-label">03 · How it works</span>
            <h2 className="display-h2 mt-4">
              Three steps to{" "}
              <span className="serif-i gradient-mint-text">starting</span>.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <Step
              n="1"
              title="Tell us about you"
              body="Gender (it changes pronouns!), level, optional kid mode. Takes 30 seconds."
            />
            <Step
              n="2"
              title="Pick a scenario"
              body="Food, taxi, shopping, small talk, emergency, more. Or jump straight into a game."
            />
            <Step
              n="3"
              title="Play, drill, speak"
              body="Five game types. Spaced repetition under the hood. 10 focused minutes a day."
            />
          </div>
        </div>
      </section>

      {/* FOR SCHOOLS ========================================== */}
      <section className="relative bg-stone-50 px-6 py-28 text-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mint-500/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow-pill-light">For schools & teachers</span>
                <h2 className="display-h2 mt-6">
                  Our aim: classrooms{" "}
                  <span className="serif-i text-stone-500">across Thailand</span>.
                </h2>
                <p className="mt-5 max-w-xl text-lg text-stone-700">
                  We want Phuut Thai to be the first free English resource any
                  Thai teacher reaches for — from Bangkok to Betong. If you
                  teach, tell us what would help and we'll build it with you.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@thaiandenglish.com?subject=Phuut%20Thai%20for%20schools"
                    className="rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
                  >
                    Bring it to your school →
                  </a>
                  <Link
                    href="/reverse"
                    className="thai rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
                  >
                    สำหรับครูไทย →
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 lg:col-span-5">
                <MiniStat
                  kicker="Our promise"
                  body="English mode costs Thai learners nothing — forever."
                />
                <MiniStat
                  kicker="Our aim"
                  body="Keep shipping — new scenarios, vocab, and games as fast as we can."
                />
                <MiniStat
                  kicker="Works offline"
                  body="Install as a phone app. Learn on the BTS, the songthaew, anywhere."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING ========================================== */}
      <section className="relative bg-stone-50 px-6 pb-28 text-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="eyebrow-pill-light">Honest pricing</span>
            <h2 className="display-h2 mt-6">
              One price. One{" "}
              <span className="serif-i text-stone-500">payment</span>. A year.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-stone-600">
              No subscriptions stacking up. No "Premium Plus Ultra" tiers. And
              English mode stays free for Thai nationals — forever.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            <PriceCard
              badge="Free forever"
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
            />
            <PriceCard
              badge="3-day free trial"
              title="Phuut Thai · Patron"
              price="฿1,000"
              sub="per year · about $28"
              features={[
                "Everything in the free side",
                "All Thai content + future updates",
                "Cloud sync across devices",
                "Helps fund free English for Thailand",
                "Cancel any time during trial",
              ]}
              ctaText={hasProfile ? "Continue →" : "Start free trial →"}
              ctaHref={startHref}
              highlighted
            />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-xs text-stone-500">
            Built by Cultra Lab — a tiny team in Phuket. You're not buying a
            product, you're funding a mission.
          </p>
        </div>
      </section>

      {/* CTA ========================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 px-6 py-32 text-center text-white">
        <div className="glow-radial pointer-events-none absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-3xl">
          <span className="section-label justify-center">The last step</span>
          <h2 className="display-h2 mt-5">
            Built for{" "}
            <span className="serif-i gradient-mint-text">living</span> in
            Thailand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-stone-400">
            Made by someone here, for everyone here. Install it as an app,
            learn on the BTS, speak Thai by Sunday.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href={startHref}
              className="rounded-full bg-mint-500 px-8 py-4 text-lg font-semibold text-ink-900 shadow-glow transition hover:scale-105 hover:bg-mint-400"
            >
              {hasProfile ? "Continue learning →" : "Start your free trial →"}
            </Link>
            <Link
              href="/reverse"
              className="thai rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              เรียนอังกฤษฟรี →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

function Stat({ kicker, label }: { kicker: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur">
      <div className="text-3xl font-black text-white sm:text-4xl">{kicker}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-stone-400">
        {label}
      </div>
    </div>
  );
}

function MiniStat({ kicker, body }: { kicker: string; body: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
        {kicker}
      </div>
      <div className="mt-1 text-sm text-stone-700">{body}</div>
    </div>
  );
}

function Feature({
  n,
  icon,
  title,
  body,
  chips,
}: {
  n: string;
  icon: string;
  title: string;
  body: string;
  chips: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-mint-500/30 hover:bg-white/[0.06]">
      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/20 text-2xl">
          {icon}
        </div>
        <span className="font-mono text-xs tracking-wider text-stone-500">
          {n}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-stone-400">{body}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
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
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
      <div className="absolute -top-3 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-mint-500 font-black text-ink-900 shadow-glow">
        {n}
      </div>
      <h3 className="mt-6 text-xl font-bold">{title}</h3>
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
  highlighted,
}: {
  badge: string;
  title: string;
  price: string;
  sub: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
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
      {highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-ink-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-mint-300">
          Most popular
        </span>
      )}
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
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
            <span className="mt-0.5 text-mint-600">✓</span> {f}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`mt-7 block rounded-full px-5 py-3 text-center font-semibold transition ${
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

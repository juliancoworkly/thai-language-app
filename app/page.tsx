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

const GAMES = [
  {
    emoji: "💬",
    title: "Conversation",
    body: "Someone says something in Thai, you pick the right English reply. 3 lives, streak bonuses. The most fun way in.",
  },
  {
    emoji: "🧩",
    title: "Sentence Builder",
    body: "Scrambled word chips, drag them into order. Shows you how Thai sentences actually assemble.",
  },
  {
    emoji: "🪞",
    title: "Matching Pairs",
    body: "Classic flip-card memory. Thai to English. Quick visual drilling for new vocabulary.",
  },
  {
    emoji: "🃏",
    title: "Flashcards",
    body: "See a sentence, recall the meaning. Rate how well you knew it. Spaced repetition queues it back at the right moment.",
  },
  {
    emoji: "🎵",
    title: "Tone Trainer",
    body: "Hear a word, pick the tone. Thai has five. Get them wrong, nobody understands. This drills them in.",
  },
];

export default function Landing() {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const p = getProfile();
    setHasProfile(!!p?.onboarded);
  }, []);

  const startHref = hasProfile ? "/thai" : "/onboarding";

  return (
    <div className="full-bleed -my-6">
      {/* HERO ====================================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 text-white">
        <div className="glow-radial pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-500/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="display-h1 mt-4 max-w-5xl text-balance">
              Two languages.{" "}
              <span className="serif-i gradient-mint-text">One bridge.</span>
              <br className="hidden sm:block" />
              Built in Thailand, for Thailand.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg text-stone-300 sm:text-xl">
              English is{" "}
              <span className="text-mint-300">free, forever</span> for every
              Thai learner. Thai is honestly priced for the rest of us. Our
              aim: every membership helps put more English into Thai
              classrooms.
            </p>

            {/* Dual CTA */}
            <div className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-2">
              <Link
                href={hasProfile ? startHref : "/onboarding"}
                className="group relative overflow-hidden rounded-2xl bg-mint-500 p-5 text-left text-ink-900 shadow-glow transition hover:scale-[1.015] hover:bg-mint-400"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-70">
                  🇬🇧 · I speak English
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
                  🇹🇭 · ฉันเป็นคนไทย
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
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Stat kicker="฿0" label="Our promise: English mode is free for Thai learners, forever" />
            <Stat kicker="Our aim" label="Every membership helps fund free English for Thailand" />
            <Stat kicker="No" label="Ads, upsells, or dark patterns" />
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

      {/* OUR STORY ================================================ */}
      <section className="relative bg-stone-50 px-6 py-20 text-stone-900">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow-pill-light">Our story</span>
            <h2 className="display-h2 mt-6">
              A British and Thai{" "}
              <span className="serif-i text-stone-500">couple</span>. Two
              languages. One idea.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-stone-700 lg:col-span-7">
            <p>
              We started trying to learn each other&apos;s languages. We
              quickly noticed that a lot of apps don&apos;t really teach the
              kind of language people use in everyday life. They felt built to
              keep you subscribed, not to help you build real confidence in
              speaking.
            </p>
            <p>
              At the same time, most of our own family members in Thailand
              don&apos;t speak English, and they can&apos;t afford classes,
              tutors, or expensive language apps. That stayed with us. It made
              us realise how unfair language learning can be. For some people,
              English opens up more confidence, more opportunities, and a
              better future. For others, that access just isn&apos;t there.
            </p>
            <p className="font-medium text-stone-900">
              So we built thaiandenglish.com. A place where tourists and
              expats can learn real, conversational Thai at an affordable
              price, while helping support free English learning for Thai
              people.
            </p>
            <p>
              Our hope is that, over time, this grows into something that
              helps children in local schools, and adults who want to improve
              their English but never had the same opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* MORE THAN FLASHCARDS ====================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 px-6 py-20 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="section-label">01 · Why it works</span>
              <h2 className="display-h2 mt-4 max-w-2xl">
                More than{" "}
                <span className="serif-i gradient-mint-text">flashcards</span>.
              </h2>
            </div>
            <p className="max-w-md text-stone-400">
              Other apps teach you pointless words that keep you a paying
              customer for longer. We focus on useful, everyday Thai.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Feature
              n="01"
              icon="💬"
              title="Conversations, not padding"
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

      {/* ALL FIVE GAMES =========================================== */}
      <section className="grain relative overflow-hidden bg-ink-900 px-6 pb-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="section-label">02 · The games</span>
            <h2 className="display-h2 mt-4">
              Five ways to{" "}
              <span className="serif-i gradient-mint-text">drill</span> the
              same sentences.
            </h2>
            <p className="mt-4 text-stone-400">
              Switch formats and your brain learns faster. Every game pulls
              from the same live vocabulary, so progress follows you
              everywhere.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {GAMES.map((g) => (
              <GameCard key={g.title} {...g} />
            ))}
          </div>
        </div>
      </section>

      {/* OTHER APPS =============================================== */}
      <section className="relative bg-stone-50 px-6 py-20 text-stone-900">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow-pill-light">The problem</span>
            <h2 className="display-h2 mt-6">
              Other apps teach{" "}
              <span className="serif-i text-stone-500">&quot;the spider drinks milk&quot;</span>.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-stone-700 lg:col-span-7">
            <p>
              Pointless words. Padded lessons. Daily streaks. It&apos;s all
              designed to keep you subscribed, not to help you speak.
            </p>
            <p>
              We went the other way. Every sentence in here is something
              you&apos;ll actually need{" "}
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
      <section className="grain relative overflow-hidden bg-ink-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="section-label">03 · How it works</span>
            <h2 className="display-h2 mt-4">
              Three steps to{" "}
              <span className="serif-i gradient-mint-text">starting</span>.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
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
      <section className="relative bg-stone-50 px-6 py-20 text-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-mint-500/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow-pill-light">For schools &amp; teachers</span>
                <h2 className="display-h2 mt-6">
                  Our aim: classrooms{" "}
                  <span className="serif-i text-stone-500">across Thailand</span>.
                </h2>
                <p className="mt-5 max-w-xl text-lg text-stone-700">
                  We want this to be the first free English resource any Thai
                  teacher reaches for, from Bangkok to Betong. If you teach,
                  tell us what would help and we&apos;ll build it with you.
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
                  body="English mode costs Thai learners nothing, forever."
                />
                <MiniStat
                  kicker="Our aim"
                  body="Keep shipping. New scenarios, vocabulary, and games as fast as we can."
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
      <section className="relative bg-stone-50 px-6 pb-20 text-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="eyebrow-pill-light">Honest pricing</span>
            <h2 className="display-h2 mt-6">
              One price. One{" "}
              <span className="serif-i text-stone-500">annual</span> payment.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-stone-600">
              No subscriptions stacking up. No &quot;Premium Plus Ultra&quot;
              tiers. No hidden extras. No constant pressure to spend more.
              And English mode stays free for Thai nationals, forever.
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
        </div>
      </section>

      {/* FEEDBACK / CLOSING ======================================= */}
      <section className="grain relative overflow-hidden bg-ink-900 px-6 py-24 text-center text-white">
        <div className="glow-radial pointer-events-none absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-3xl">
          <span className="section-label justify-center">Help us build this</span>
          <h2 className="display-h2 mt-5">
            Built for{" "}
            <span className="serif-i gradient-mint-text">living</span> in
            Thailand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-stone-400">
            We are still growing and still improving. If you try this, we
            would love your thoughts and feedback on how to make it the
            number one language app in Thailand.
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
          <p className="mx-auto mt-8 max-w-xl text-xs text-stone-500">
            Send feedback to{" "}
            <a
              href="mailto:hello@thaiandenglish.com"
              className="text-mint-400 hover:text-mint-300"
            >
              hello@thaiandenglish.com
            </a>
          </p>
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

function GameCard({
  emoji,
  title,
  body,
}: {
  emoji: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-mint-500/30 hover:bg-white/[0.06]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-500/20 text-2xl">
        {emoji}
      </div>
      <h3 className="mt-4 text-base font-bold">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-stone-400">{body}</p>
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

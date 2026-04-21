import Link from "next/link";

const games = [
  {
    href: "/games/conversation",
    emoji: "💬",
    title: "Conversation",
    desc: "Someone says something in Thai. Pick the right English reply. 3 lives, streak bonuses.",
    tags: ["3 lives", "streaks"],
    featured: true,
  },
  {
    href: "/games/flashcards",
    emoji: "🃏",
    title: "Flashcards",
    desc: "See a sentence, recall the meaning. Rate how well you knew it. Spaced repetition queues it back at the right moment.",
    tags: ["spaced repetition"],
  },
  {
    href: "/games/tones",
    emoji: "🎵",
    title: "Tone Trainer",
    desc: "Hear a word, pick the tone. Thai has five. This is the hardest bit. This drills it in.",
    tags: ["5 tones", "audio"],
  },
  {
    href: "/games/builder",
    emoji: "🧩",
    title: "Sentence Builder",
    desc: "Scrambled word chips. Drag them into order. Reveals how Thai sentences actually assemble.",
    tags: ["drag to order"],
  },
  {
    href: "/games/matching",
    emoji: "🪞",
    title: "Matching Pairs",
    desc: "Classic flip-card memory game. Thai to English. Quick visual drilling for new vocabulary.",
    tags: ["quick drill"],
  },
];

export default function GamesPage() {
  return (
    <div className="space-y-10 py-4">
      <section>
        <span className="eyebrow-pill-light">Memory games</span>
        <h1 className="display-h2 mt-5 text-stone-900">
          Five ways to{" "}
          <span className="serif-i text-mint-700">drill</span> the same
          sentences.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">
          Bounce between formats. Your brain learns faster when it has to
          recall the same thing in different ways. Every game pulls from the
          same live vocabulary, so progress follows you everywhere.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g, idx) => (
          <Link
            key={g.href}
            href={g.href}
            className={`group relative overflow-hidden rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${
              g.featured
                ? "border-mint-500 bg-white shadow-glow"
                : "border-stone-200 bg-white hover:border-mint-300"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {g.emoji}
              </div>
              <span className="font-mono text-xs tracking-wider text-stone-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <h3 className="font-semibold text-stone-900">{g.title}</h3>
              {g.featured && (
                <span className="rounded-full bg-mint-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-900">
                  Start here
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-stone-500">{g.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-mint-500/25 bg-mint-50 px-2.5 py-1 text-[11px] text-mint-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

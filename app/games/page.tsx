import Link from "next/link";

const games = [
  {
    href: "/games/conversation",
    emoji: "💬",
    title: "Conversation",
    desc: "Someone says something in Thai — pick the right English reply. 3 lives, streak bonuses. The most fun way in.",
    featured: true,
  },
  {
    href: "/games/flashcards",
    emoji: "🃏",
    title: "Flashcards",
    desc: "See a sentence, recall the meaning. Rate how well you knew it. Spaced repetition queues it up again at the right moment.",
  },
  {
    href: "/games/tones",
    emoji: "🎵",
    title: "Tone Trainer",
    desc: "Hear a word, pick the tone. Tones are the hardest part of Thai — this drills them in.",
  },
  {
    href: "/games/builder",
    emoji: "🧩",
    title: "Sentence Builder",
    desc: "Scrambled word chips → drag them into order. Reveals how sentences actually assemble.",
  },
  {
    href: "/games/matching",
    emoji: "🪞",
    title: "Matching Pairs",
    desc: "Flip cards to match Thai ↔ English. Classic memory game — great for quick visual drilling.",
  },
];

export default function GamesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-800">Memory games</h1>
        <p className="text-stone-600">
          Four ways to drill the same vocabulary. Bounce between them — your
          brain learns faster when you switch formats.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {games.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className={`card transition hover:-translate-y-0.5 hover:shadow-md ${
              g.featured ? "border-mint-300 bg-mint-50 sm:col-span-2" : ""
            }`}
          >
            <div className="text-4xl">{g.emoji}</div>
            <div className="mt-3 font-semibold text-stone-800">
              {g.title}
              {g.featured && (
                <span className="ml-2 rounded-full bg-mint-500 px-2 py-0.5 text-xs text-ink-900">
                  NEW
                </span>
              )}
            </div>
            <div className="mt-1 text-sm text-stone-600">{g.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

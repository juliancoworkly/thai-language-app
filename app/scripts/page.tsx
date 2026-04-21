import Link from "next/link";
import { scripts } from "@/data/scripts";

export const metadata = {
  title: "Conversation scripts — Phuut Thai",
  description:
    "Full dialogues you'll actually live. Ordering food, taking a taxi, checking into a hotel.",
};

export default function ScriptsIndex() {
  const sorted = scripts.slice().sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-10 py-4">
      <section>
        <span className="eyebrow-pill-light">Scripts</span>
        <h1 className="display-h2 mt-4 text-stone-900">
          Full{" "}
          <span className="serif-i text-mint-700">conversations</span>, start
          to finish.
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Real exchanges broken down turn by turn. What they say, what you
          reply, why it works. Read it once, then use it this week.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {sorted.map((s, idx) => (
          <Link
            key={s.id}
            href={`/scripts/${s.id}`}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {s.emoji}
              </div>
              <span className="font-mono text-xs tracking-wider text-stone-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h3 className="font-semibold text-stone-900">{s.title}</h3>
            </div>
            <div className="thai mt-0.5 text-xs text-mint-700">
              {s.titleThai}
            </div>
            <p className="mt-2 text-sm text-stone-500">{s.description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="rounded-full border border-mint-500/25 bg-mint-50 px-2.5 py-1 text-[11px] text-mint-700">
                Level {s.level}
              </span>
              <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] text-stone-600">
                {s.turns.length} turns
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

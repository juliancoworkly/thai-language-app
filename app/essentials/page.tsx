import Link from "next/link";
import { essentials } from "@/data/essentials";

export const metadata = {
  title: "Essentials — Phuut Thai",
  description:
    "Thai foundations: numbers, days, months, time, colors, family, tones, classifiers.",
};

export default function EssentialsIndex() {
  const sorted = essentials.slice().sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-10 py-4">
      <section>
        <span className="eyebrow-pill-light">Essentials</span>
        <h1 className="display-h2 mt-4 text-stone-900">
          The Thai{" "}
          <span className="serif-i text-mint-700">foundations</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Short reference pages for the things every learner hits early. Less a
          drill, more a place to look something up and come back.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((e, idx) => (
          <Link
            key={e.id}
            href={`/essentials/${e.id}`}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {e.emoji}
              </div>
              <span className="font-mono text-xs tracking-wider text-stone-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
              <h3 className="font-semibold text-stone-900">{e.title}</h3>
              {e.titleThai && (
                <span className="thai text-sm text-mint-700">
                  {e.titleThai}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-stone-500">{e.description}</p>
            <div className="mt-4 text-xs font-mono uppercase tracking-wider text-mint-700">
              Level {e.level} →
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { words } from "@/data/words";
import { sentences } from "@/data/sentences";
import { WordChip } from "@/components/WordChip";
import type { PartOfSpeech } from "@/lib/types";

const POS_LABEL: Record<PartOfSpeech, string> = {
  pronoun: "Pronouns",
  verb: "Verbs",
  noun: "Nouns",
  adjective: "Adjectives",
  adverb: "Adverbs",
  particle: "Particles",
  preposition: "Prepositions",
  classifier: "Classifiers",
  number: "Numbers",
  question: "Question words",
  conjunction: "Conjunctions",
};

export default function WordBank() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return words.filter((w) =>
      !q ||
      w.phonetic.toLowerCase().includes(q) ||
      w.meaning.toLowerCase().includes(q) ||
      w.thai.includes(q)
    );
  }, [query]);

  const groups = useMemo(() => {
    const g: Partial<Record<PartOfSpeech, typeof words>> = {};
    for (const w of filtered) {
      (g[w.pos] ??= []).push(w);
    }
    return g;
  }, [filtered]);

  const usedIn = selectedId
    ? sentences.filter((s) => s.words.some((w) => w.wordId === selectedId))
    : [];

  return (
    <div className="space-y-8 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow-pill-light">Word bank</span>
          <h1 className="display-h2 mt-4 text-stone-900">
            Every word,{" "}
            <span className="serif-i text-mint-700">searchable</span>.
          </h1>
          <p className="mt-3 max-w-xl text-stone-600">
            Tap one to hear it and see every sentence it appears in.
          </p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Thai, phonetic, or meaning…"
          className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm shadow-sm focus:border-mint-500 focus:outline-none focus:ring-2 focus:ring-mint-500/20 sm:w-72"
        />
      </div>

      {selectedId && (
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-stone-500">
                Used in {usedIn.length} sentence{usedIn.length === 1 ? "" : "s"}
              </div>
              <div className="thai mt-1 text-2xl font-bold">
                {words.find((w) => w.id === selectedId)?.thai}
              </div>
            </div>
            <button onClick={() => setSelectedId(null)} className="btn-ghost">
              Close ✕
            </button>
          </div>
          <div className="mt-3 space-y-1 text-sm">
            {usedIn.map((s) => (
              <Link
                key={s.id}
                href={`/learn/${s.scenario}`}
                className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-stone-50"
              >
                <span>{s.emoji}</span>
                <span className="thai font-medium">{s.thai}</span>
                <span className="text-stone-500">— {s.meaning}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {Object.entries(groups).map(([pos, list]) => (
        <section key={pos}>
          <div className="section-label mb-3 text-mint-700">
            <span className="h-1 w-1 rounded-full bg-mint-500" />
            {POS_LABEL[pos as PartOfSpeech]}
            <span className="text-stone-400">·</span>
            <span className="font-sans font-semibold text-stone-500">
              {list!.length}
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4">
            {list!.map((w) => (
              <WordChip
                key={w.id}
                word={w}
                onClick={() => setSelectedId(w.id)}
                highlight={selectedId === w.id}
              />
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="card text-center text-stone-500">
          No words match "{query}".
        </div>
      )}
    </div>
  );
}

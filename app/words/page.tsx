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
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-stone-800">Word bank</h1>
          <p className="text-stone-600">
            Every word in the app. Tap one to hear it and see sentences that use it.
          </p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Thai, phonetic, or meaning…"
          className="w-64 rounded-lg border border-stone-300 px-3 py-2 text-sm"
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
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-stone-500">
            {POS_LABEL[pos as PartOfSpeech]} ({list!.length})
          </h2>
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

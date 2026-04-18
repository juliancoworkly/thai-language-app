"use client";

import Link from "next/link";
import type { Sentence } from "@/lib/types";
import { wordById } from "@/data/words";
import { AudioButton } from "./AudioButton";
import { PhoneticText } from "./PhoneticText";
import { WordChip } from "./WordChip";

export function SentenceBreakdown({
  sentence,
  showTitle = true,
}: {
  sentence: Sentence;
  showTitle?: boolean;
}) {
  const resolved = sentence.words
    .map((sw) => ({ word: wordById[sw.wordId], literal: sw.literal }))
    .filter((x) => x.word);

  return (
    <div className="card space-y-4">
      {showTitle && (
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wide text-stone-500">
              {sentence.emoji} {sentence.scenario}
            </div>
            <div className="thai mt-1 text-2xl font-bold text-stone-800">
              {sentence.thai}
            </div>
            <div className="mt-1">
              <PhoneticText phonetic={sentence.phonetic} size="lg" bold />
            </div>
            <div className="mt-1 text-stone-600">{sentence.meaning}</div>
          </div>
          <AudioButton id={sentence.id} thai={sentence.thai} size="lg" />
        </div>
      )}

      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
          Word by word — tap to hear each
        </div>
        <div className="flex flex-wrap gap-2">
          {resolved.map(({ word, literal }, i) => (
            <div key={i} className="flex flex-col items-center">
              <WordChip word={word!} showMeaning={false} />
              <div className="mt-1 max-w-[9rem] text-center text-xs text-stone-600">
                {literal ?? word!.meaning}
              </div>
              <div className="text-[10px] uppercase tracking-wide text-stone-400">
                {word!.pos}
              </div>
            </div>
          ))}
        </div>
      </div>

      {sentence.notes && (
        <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          💡 {sentence.notes}
        </div>
      )}

      <div className="flex items-center gap-2 pt-2">
        <Link href="/games/builder" className="btn-secondary">
          🧩 Practice building
        </Link>
        <Link href="/games/flashcards" className="btn-secondary">
          🃏 Flashcards
        </Link>
      </div>
    </div>
  );
}

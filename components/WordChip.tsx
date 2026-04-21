"use client";

import type { Word } from "@/lib/types";
import { detectTone, splitSyllables, TONE_COLOR } from "@/lib/tones";
import { speakThai } from "@/lib/tts";

export function WordChip({
  word,
  onClick,
  showMeaning = true,
  highlight = false,
}: {
  word: Word;
  onClick?: () => void;
  showMeaning?: boolean;
  highlight?: boolean;
}) {
  const syllables = splitSyllables(word.phonetic);

  const handleClick = () => {
    speakThai(word.thai);
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group text-left rounded-xl border p-3 transition hover:shadow-md ${
        highlight
          ? "border-mint-500 bg-mint-50"
          : "border-stone-200 bg-white"
      }`}
    >
      <div className="thai text-xl font-semibold text-stone-800">
        {word.thai}
      </div>
      <div className="mt-0.5 text-sm">
        {syllables.map((syl, i) => (
          <span key={i} className={`${TONE_COLOR[detectTone(syl)]} font-medium`}>
            {syl}
            {i < syllables.length - 1 ? "-" : ""}
          </span>
        ))}
      </div>
      {showMeaning && (
        <div className="mt-1 text-xs text-stone-500">{word.meaning}</div>
      )}
    </button>
  );
}

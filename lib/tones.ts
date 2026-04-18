import type { Tone } from "./types";

// Detect tone of a phonetic syllable by its tone mark.
// Paiboon-style: à low, á high, â falling, ǎ rising, (no mark) mid.
export function detectTone(syllable: string): Tone {
  if (/[àèìòùə̀ɔ̀]/.test(syllable)) return "low";
  if (/[áéíóúə́ɔ́]/.test(syllable)) return "high";
  if (/[âêîôûə̂ɔ̂]/.test(syllable)) return "falling";
  if (/[ǎěǐǒǔə̌ɔ̌]/.test(syllable)) return "rising";
  return "mid";
}

export const TONE_COLOR: Record<Tone, string> = {
  low: "tone-low",
  mid: "tone-mid",
  high: "tone-high",
  falling: "tone-falling",
  rising: "tone-rising",
};

export const TONE_LABEL: Record<Tone, string> = {
  low: "Low ↘",
  mid: "Mid →",
  high: "High ↗",
  falling: "Falling ⌒",
  rising: "Rising ⌣",
};

export function splitSyllables(phonetic: string): string[] {
  // Split on spaces or hyphens while preserving tone marks
  return phonetic.split(/[\s-]+/).filter(Boolean);
}

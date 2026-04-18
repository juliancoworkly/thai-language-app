export type Tone = "low" | "mid" | "high" | "falling" | "rising";

export type PartOfSpeech =
  | "pronoun"
  | "verb"
  | "noun"
  | "adjective"
  | "adverb"
  | "particle"
  | "preposition"
  | "classifier"
  | "number"
  | "question"
  | "conjunction";

export interface Word {
  id: string;
  thai: string;
  phonetic: string;
  meaning: string;
  pos: PartOfSpeech;
  tone?: Tone; // for single-syllable words
  notes?: string;
}

export interface SentenceWord {
  wordId: string;
  literal?: string; // contextual literal meaning
}

export interface Sentence {
  id: string;
  thai: string;
  phonetic: string;
  meaning: string;
  words: SentenceWord[];
  scenario: string;
  emoji?: string;
  notes?: string;
}

export interface Scenario {
  id: string;
  title: string;
  emoji: string;
  description: string;
  order: number;
}

export interface CardState {
  id: string; // sentenceId or wordId
  kind: "sentence" | "word";
  ease: number; // SM-2 ease factor
  interval: number; // days
  reps: number;
  lapses: number;
  dueAt: number; // timestamp ms
  lastReviewedAt?: number;
}

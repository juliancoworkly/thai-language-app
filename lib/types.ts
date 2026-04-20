export type Tone = "low" | "mid" | "high" | "falling" | "rising";

export type Gender = "male" | "female";
export type Level = 1 | 2 | 3 | 4 | 5;
export type AgeMode = "kid" | "adult";
export type Mode = "thai" | "english";

export type SubscriptionStatus =
  | "trialing"   // 3-day free trial
  | "active"    // paid up
  | "past_due"  // payment failed
  | "canceled"  // user-cancelled
  | "expired"   // trial ended without paying
  | "none";     // never started a trial

export interface Subscription {
  status: SubscriptionStatus;
  trialStart?: number;    // ms timestamp
  trialEnd?: number;      // ms timestamp
  currentPeriodEnd?: number; // ms timestamp
  provider?: "paddle" | "stripe" | "manual";
  customerId?: string;    // Paddle/Stripe customer id
  subscriptionId?: string;
}

export interface Profile {
  mode: Mode;            // which side they're learning
  gender: Gender;        // affects pronouns + polite particles
  level: Level;          // 1=just arrived, 5=fluency
  ageMode: AgeMode;      // kid mode = brighter UI, fewer adult notes
  name?: string;         // optional display name / nickname
  onboarded: boolean;
  subscription?: Subscription;
  trialStartedAt?: number; // first time they entered the paid mode
}

export const LEVEL_LABEL: Record<Level, string> = {
  1: "Just arrived — no Thai yet",
  2: "I know hello & thanks",
  3: "I can order food and basics",
  4: "I can have short chats",
  5: "Going for fluency",
};

export const LEVEL_SHORT: Record<Level, string> = {
  1: "Newbie",
  2: "Basics",
  3: "Everyday",
  4: "Conversational",
  5: "Fluent",
};

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
  level?: Level;       // 1..5, defaults to 2 if missing
  emoji?: string;
  notes?: string;
  adultOnly?: boolean; // hidden in kid mode (e.g. bar phrases)
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

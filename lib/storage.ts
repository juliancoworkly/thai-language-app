"use client";

import type { CardState } from "./types";
import { newCard } from "./srs";

const KEY = "phuut-thai:v1";

interface Store {
  cards: Record<string, CardState>;
  seenSentences: string[];
  seenWords: string[];
  stats: {
    reviewsToday: number;
    lastReviewDay: string; // YYYY-MM-DD
    totalReviews: number;
  };
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function empty(): Store {
  return {
    cards: {},
    seenSentences: [],
    seenWords: [],
    stats: { reviewsToday: 0, lastReviewDay: today(), totalReviews: 0 },
  };
}

export function load(): Store {
  if (typeof window === "undefined") return empty();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Store;
    // daily rollover
    if (parsed.stats.lastReviewDay !== today()) {
      parsed.stats.lastReviewDay = today();
      parsed.stats.reviewsToday = 0;
    }
    return parsed;
  } catch {
    return empty();
  }
}

export function save(store: Store): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(store));
}

export function getCard(
  store: Store,
  id: string,
  kind: CardState["kind"]
): CardState {
  return store.cards[id] ?? newCard(id, kind);
}

export function upsertCard(store: Store, card: CardState): Store {
  const next: Store = { ...store, cards: { ...store.cards, [card.id]: card } };
  next.stats = {
    ...store.stats,
    reviewsToday: store.stats.reviewsToday + 1,
    totalReviews: store.stats.totalReviews + 1,
  };
  return next;
}

export function markSentenceSeen(store: Store, id: string): Store {
  if (store.seenSentences.includes(id)) return store;
  return { ...store, seenSentences: [...store.seenSentences, id] };
}

export function markWordSeen(store: Store, id: string): Store {
  if (store.seenWords.includes(id)) return store;
  return { ...store, seenWords: [...store.seenWords, id] };
}

export function reset(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export type { Store };

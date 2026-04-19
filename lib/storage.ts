"use client";

import type { CardState } from "./types";
import { newCard } from "./srs";
import { supabase } from "./supabase";

const KEY = "phuut-thai:v1";

interface Store {
  cards: Record<string, CardState>;
  seenSentences: string[];
  seenWords: string[];
  stats: {
    reviewsToday: number;
    lastReviewDay: string;
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
    if (parsed.stats.lastReviewDay !== today()) {
      parsed.stats.lastReviewDay = today();
      parsed.stats.reviewsToday = 0;
    }
    return parsed;
  } catch {
    return empty();
  }
}

// --- Cloud sync state ---

let currentUserId: string | null = null;
let pushTimer: ReturnType<typeof setTimeout> | null = null;

export function setCloudUser(userId: string | null): void {
  currentUserId = userId;
}

function scheduleCloudPush(store: Store): void {
  if (!supabase || !currentUserId) return;
  if (pushTimer) clearTimeout(pushTimer);
  const uid = currentUserId;
  pushTimer = setTimeout(async () => {
    try {
      await supabase!.from("user_progress").upsert({
        user_id: uid,
        cards: store.cards,
        seen_sentences: store.seenSentences,
        seen_words: store.seenWords,
        stats: store.stats,
      });
    } catch {
      // Offline or transient error — next save will retry.
    }
  }, 1500);
}

export function save(store: Store): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(store));
  scheduleCloudPush(store);
}

// --- Cloud pull + merge ---

export async function pullFromCloud(userId: string): Promise<Store | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("user_progress")
    .select("cards, seen_sentences, seen_words, stats")
    .eq("user_id", userId)
    .maybeSingle();
  if (error || !data) return null;
  return {
    cards: (data.cards as Record<string, CardState>) ?? {},
    seenSentences: (data.seen_sentences as string[]) ?? [],
    seenWords: (data.seen_words as string[]) ?? [],
    stats: (data.stats as Store["stats"]) ?? {
      reviewsToday: 0,
      lastReviewDay: today(),
      totalReviews: 0,
    },
  };
}

// Merge two stores, keeping the most-reviewed card state per id.
export function mergeStores(a: Store, b: Store): Store {
  const cards: Record<string, CardState> = { ...a.cards };
  for (const [id, card] of Object.entries(b.cards)) {
    const existing = cards[id];
    if (!existing) {
      cards[id] = card;
      continue;
    }
    const aT = existing.lastReviewedAt ?? 0;
    const bT = card.lastReviewedAt ?? 0;
    cards[id] = bT > aT ? card : existing;
  }
  return {
    cards,
    seenSentences: Array.from(new Set([...a.seenSentences, ...b.seenSentences])),
    seenWords: Array.from(new Set([...a.seenWords, ...b.seenWords])),
    stats: {
      totalReviews: Math.max(a.stats.totalReviews, b.stats.totalReviews),
      reviewsToday: Math.max(a.stats.reviewsToday, b.stats.reviewsToday),
      lastReviewDay: today(),
    },
  };
}

// Called right after login: pull cloud, merge with local, save merged back.
export async function syncOnLogin(userId: string): Promise<Store> {
  const local = load();
  const cloud = await pullFromCloud(userId);
  if (!cloud) {
    // First login ever — push local to cloud so other devices start here.
    setCloudUser(userId);
    save(local);
    return local;
  }
  const merged = mergeStores(local, cloud);
  setCloudUser(userId);
  save(merged);
  return merged;
}

// --- Helpers ---

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

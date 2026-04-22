"use client";

import type { CardState, Profile } from "./types";
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
  profile?: Profile;
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

// Some production deployments of Supabase haven't yet run the migration
// that adds user_progress.profile. Detect the schema error once, remember
// it in localStorage, and retry every so often so the app recovers
// automatically when the migration lands.
const PROFILE_SUPPORT_KEY = "phuut-thai:profile-col-v1";
const PROFILE_RETRY_AFTER_MS = 24 * 60 * 60 * 1000;

interface ProfileSupport {
  supported: boolean;
  checkedAt: number;
}

function loadProfileSupport(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const raw = window.localStorage.getItem(PROFILE_SUPPORT_KEY);
    if (!raw) return true;
    const parsed = JSON.parse(raw) as ProfileSupport;
    if (parsed.supported) return true;
    if (Date.now() - parsed.checkedAt > PROFILE_RETRY_AFTER_MS) return true;
    return false;
  } catch {
    return true;
  }
}

function saveProfileSupport(supported: boolean): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      PROFILE_SUPPORT_KEY,
      JSON.stringify({ supported, checkedAt: Date.now() })
    );
  } catch {
    /* ignore storage quota errors */
  }
}

let profileColumnSupported = loadProfileSupport();
let warnedAboutMissingProfile = false;

function isProfileColumnError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const e = err as { code?: string; message?: string };
  // 42703: PostgREST passes through Postgres "undefined_column"
  if (e.code === "42703") return true;
  // PGRST204: PostgREST schema cache miss on write
  if (e.code === "PGRST204" && e.message?.toLowerCase().includes("profile")) {
    return true;
  }
  return false;
}

function markProfileUnsupported(): void {
  profileColumnSupported = false;
  saveProfileSupport(false);
  if (!warnedAboutMissingProfile && typeof console !== "undefined") {
    warnedAboutMissingProfile = true;
    console.warn(
      "[thai-language-app] user_progress.profile column missing in Supabase. " +
        "Profile will not sync across devices until the migration is applied:\n" +
        "  alter table public.user_progress add column if not exists profile jsonb;"
    );
  }
}

export function setCloudUser(userId: string | null): void {
  currentUserId = userId;
}

async function upsertWithFallback(store: Store, uid: string): Promise<void> {
  if (!supabase) return;
  const base = {
    user_id: uid,
    cards: store.cards,
    seen_sentences: store.seenSentences,
    seen_words: store.seenWords,
    stats: store.stats,
  };
  const payload = profileColumnSupported
    ? { ...base, profile: store.profile ?? null }
    : base;
  const { error } = await supabase.from("user_progress").upsert(payload);
  if (error && isProfileColumnError(error) && profileColumnSupported) {
    markProfileUnsupported();
    await supabase.from("user_progress").upsert(base);
    return;
  }
  if (!error && !profileColumnSupported) {
    // Migration has landed — clear the flag so profile syncs again.
    profileColumnSupported = true;
    saveProfileSupport(true);
  }
}

function scheduleCloudPush(store: Store): void {
  if (!supabase || !currentUserId) return;
  if (pushTimer) clearTimeout(pushTimer);
  const uid = currentUserId;
  pushTimer = setTimeout(async () => {
    try {
      await upsertWithFallback(store, uid);
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

const SELECT_WITH_PROFILE = "cards, seen_sentences, seen_words, stats, profile";
const SELECT_NO_PROFILE = "cards, seen_sentences, seen_words, stats";

export async function pullFromCloud(userId: string): Promise<Store | null> {
  if (!supabase) return null;
  const cols = profileColumnSupported ? SELECT_WITH_PROFILE : SELECT_NO_PROFILE;
  let { data, error } = await supabase
    .from("user_progress")
    .select(cols)
    .eq("user_id", userId)
    .maybeSingle();
  if (error && isProfileColumnError(error) && profileColumnSupported) {
    markProfileUnsupported();
    ({ data, error } = await supabase
      .from("user_progress")
      .select(SELECT_NO_PROFILE)
      .eq("user_id", userId)
      .maybeSingle());
  }
  if (error || !data) return null;
  if (!error && profileColumnSupported === false && "profile" in data) {
    profileColumnSupported = true;
    saveProfileSupport(true);
  }
  const row = data as unknown as Record<string, unknown>;
  return {
    cards: (row.cards as Record<string, CardState>) ?? {},
    seenSentences: (row.seen_sentences as string[]) ?? [],
    seenWords: (row.seen_words as string[]) ?? [],
    stats: (row.stats as Store["stats"]) ?? {
      reviewsToday: 0,
      lastReviewDay: today(),
      totalReviews: 0,
    },
    profile: (row.profile as Profile | undefined) ?? undefined,
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

export function getProfile(): Profile | null {
  return load().profile ?? null;
}

export function saveProfile(profile: Profile): void {
  const store = load();
  save({ ...store, profile });
}

export type { Store };

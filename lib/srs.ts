import type { CardState } from "./types";

// Simplified SM-2. Grades: 0=Again, 1=Hard, 2=Good, 3=Easy
export type Grade = 0 | 1 | 2 | 3;

const DAY = 86_400_000;

export function newCard(id: string, kind: CardState["kind"]): CardState {
  return {
    id,
    kind,
    ease: 2.5,
    interval: 0,
    reps: 0,
    lapses: 0,
    dueAt: Date.now(),
  };
}

export function grade(card: CardState, g: Grade, now: number = Date.now()): CardState {
  let { ease, interval, reps, lapses } = card;

  if (g === 0) {
    lapses += 1;
    reps = 0;
    interval = 0;
    ease = Math.max(1.3, ease - 0.2);
    return { ...card, ease, interval, reps, lapses, dueAt: now + 10 * 60 * 1000, lastReviewedAt: now };
  }

  reps += 1;
  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 3;
  else interval = Math.round(interval * ease);

  if (g === 1) {
    ease = Math.max(1.3, ease - 0.15);
    interval = Math.max(1, Math.round(interval * 0.7));
  } else if (g === 3) {
    ease = ease + 0.1;
    interval = Math.round(interval * 1.3);
  }

  return {
    ...card,
    ease,
    interval,
    reps,
    lapses,
    dueAt: now + interval * DAY,
    lastReviewedAt: now,
  };
}

export function isDue(card: CardState, now: number = Date.now()): boolean {
  return card.dueAt <= now;
}

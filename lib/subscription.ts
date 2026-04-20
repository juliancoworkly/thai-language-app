import type { Profile, Subscription } from "./types";

const TRIAL_DAYS = 3;
const DAY = 86_400_000;

export function ensureTrial(profile: Profile): Profile {
  // Only Thai-mode (paid side) gets a trial.
  if (profile.mode !== "thai") return profile;

  const sub = profile.subscription;
  if (sub && sub.status !== "none") return profile;

  const now = Date.now();
  const newSub: Subscription = {
    status: "trialing",
    trialStart: now,
    trialEnd: now + TRIAL_DAYS * DAY,
  };
  return { ...profile, subscription: newSub, trialStartedAt: now };
}

export function trialDaysLeft(profile: Profile | null): number | null {
  const sub = profile?.subscription;
  if (!sub || sub.status !== "trialing" || !sub.trialEnd) return null;
  const remaining = sub.trialEnd - Date.now();
  return Math.max(0, Math.ceil(remaining / DAY));
}

export function isPaidActive(profile: Profile | null): boolean {
  if (!profile) return false;
  // Free side never needs payment.
  if (profile.mode === "english") return true;
  const sub = profile.subscription;
  if (!sub) return false;
  if (sub.status === "active") return true;
  if (sub.status === "trialing" && sub.trialEnd && sub.trialEnd > Date.now()) {
    return true;
  }
  return false;
}

export function trialIsOver(profile: Profile | null): boolean {
  if (!profile) return false;
  if (profile.mode !== "thai") return false;
  const sub = profile.subscription;
  if (!sub) return false;
  if (sub.status === "trialing" && sub.trialEnd) {
    return sub.trialEnd <= Date.now();
  }
  return sub.status === "expired" || sub.status === "canceled";
}

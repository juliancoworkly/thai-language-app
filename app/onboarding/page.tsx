"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfile, saveProfile } from "@/lib/storage";
import {
  LEVEL_LABEL,
  LEVEL_SHORT,
  type AgeMode,
  type Gender,
  type Level,
  type Mode,
  type Profile,
} from "@/lib/types";

type Step = "mode" | "gender" | "level" | "age" | "name" | "done";

const STEP_ORDER: Step[] = ["mode", "gender", "level", "age", "name", "done"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("mode");
  const [draft, setDraft] = useState<Partial<Profile>>({});
  const [name, setName] = useState("");

  useEffect(() => {
    const existing = getProfile();
    if (existing) setDraft(existing);
  }, []);

  function next() {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1]);
  }

  function back() {
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) setStep(STEP_ORDER[idx - 1]);
  }

  function pick(field: keyof Profile, value: string | number) {
    setDraft((d) => ({ ...d, [field]: value }));
    setTimeout(next, 200);
  }

  function finish() {
    const profile: Profile = {
      mode: (draft.mode ?? "thai") as Mode,
      gender: (draft.gender ?? "male") as Gender,
      level: (draft.level ?? 1) as Level,
      ageMode: (draft.ageMode ?? "adult") as AgeMode,
      name: name.trim() || undefined,
      onboarded: true,
    };
    saveProfile(profile);
    router.push(profile.mode === "thai" ? "/thai" : "/reverse");
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4">
      <ProgressBar step={step} />

      {step === "mode" && (
        <Card title="What do you want to learn?" subtitle="คุณอยากเรียนภาษาอะไร">
          <div className="grid gap-3 sm:grid-cols-2">
            <Choice
              emoji="🇹🇭"
              title="Learn Thai"
              subtitle="For English speakers in Thailand"
              selected={draft.mode === "thai"}
              onClick={() => pick("mode", "thai")}
            />
            <Choice
              emoji="🇬🇧"
              title="Learn English"
              subtitle="ฟรีสำหรับคนไทย — Free for Thai nationals"
              selected={draft.mode === "english"}
              onClick={() => pick("mode", "english")}
            />
          </div>
        </Card>
      )}

      {step === "gender" && (
        <Card
          title="Are you male or female?"
          subtitle="Thai changes 'I' and the polite particle based on the speaker."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Choice
              emoji="👨"
              title="Male"
              subtitle="I = ผม (phǒm) · particle = ครับ (khráp)"
              selected={draft.gender === "male"}
              onClick={() => pick("gender", "male")}
            />
            <Choice
              emoji="👩"
              title="Female"
              subtitle="I = ฉัน (chǎn) · particle = ค่ะ (khâ)"
              selected={draft.gender === "female"}
              onClick={() => pick("gender", "female")}
            />
          </div>
        </Card>
      )}

      {step === "level" && (
        <Card
          title="What's your Thai level?"
          subtitle="We'll start you on sentences that match. Change anytime in your account."
        >
          <div className="grid gap-2">
            {([1, 2, 3, 4, 5] as Level[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => pick("level", lvl)}
                className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
                  draft.level === lvl
                    ? "border-brand-500 bg-brand-50"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                  {lvl}
                </div>
                <div>
                  <div className="font-semibold text-stone-800">
                    {LEVEL_SHORT[lvl]}
                  </div>
                  <div className="text-sm text-stone-500">
                    {LEVEL_LABEL[lvl]}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {step === "age" && (
        <Card title="Are you under 18?" subtitle="We'll hide adult-context examples in kid mode.">
          <div className="grid gap-3 sm:grid-cols-2">
            <Choice
              emoji="🧒"
              title="Under 18"
              subtitle="Kid mode — bigger UI, no bar/dating phrases"
              selected={draft.ageMode === "kid"}
              onClick={() => pick("ageMode", "kid")}
            />
            <Choice
              emoji="🧑"
              title="18+"
              subtitle="Standard mode"
              selected={draft.ageMode === "adult"}
              onClick={() => pick("ageMode", "adult")}
            />
          </div>
        </Card>
      )}

      {step === "name" && (
        <Card
          title="What should we call you?"
          subtitle="Optional — used in greetings only. You can skip."
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nickname"
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-lg"
            autoFocus
          />
          <div className="mt-4 flex gap-2">
            <button onClick={back} className="btn-secondary">← Back</button>
            <button onClick={next} className="btn-primary flex-1">
              {name.trim() ? "Continue →" : "Skip →"}
            </button>
          </div>
        </Card>
      )}

      {step === "done" && (
        <Card
          title={`Welcome${name ? ", " + name : ""}!`}
          subtitle="You're all set. Your settings are saved on this device (and synced if you're signed in)."
        >
          <div className="space-y-2 rounded-xl bg-stone-50 p-4 text-sm">
            <Row label="Learning" value={draft.mode === "english" ? "English (free for Thai nationals)" : "Thai"} />
            <Row label="Pronoun" value={draft.gender === "female" ? "ฉัน / ค่ะ" : "ผม / ครับ"} />
            <Row label="Level" value={draft.level ? `${LEVEL_SHORT[draft.level as Level]} — ${LEVEL_LABEL[draft.level as Level]}` : ""} />
            <Row label="Mode" value={draft.ageMode === "kid" ? "Kid mode" : "Standard"} />
          </div>
          <button onClick={finish} className="btn-primary mt-4 w-full">
            Start learning →
          </button>
          <Link href="#" onClick={(e) => { e.preventDefault(); setStep("mode"); }} className="mt-2 block text-center text-xs text-stone-500">
            Change something
          </Link>
        </Card>
      )}
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold text-stone-800 sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-1 text-stone-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Choice({
  emoji,
  title,
  subtitle,
  selected,
  onClick,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group rounded-2xl border-2 p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
        selected ? "border-brand-500 bg-brand-50" : "border-stone-200 bg-white"
      }`}
    >
      <div className="text-4xl">{emoji}</div>
      <div className="mt-3 font-semibold text-stone-800">{title}</div>
      <div className="mt-1 text-sm text-stone-500">{subtitle}</div>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-stone-500">{label}</span>
      <span className="font-medium text-stone-800">{value}</span>
    </div>
  );
}

function ProgressBar({ step }: { step: Step }) {
  const idx = STEP_ORDER.indexOf(step);
  const pct = Math.round(((idx + 1) / STEP_ORDER.length) * 100);
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

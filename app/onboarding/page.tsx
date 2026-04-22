"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { getProfile, saveProfile } from "@/lib/storage";
import {
  LEVEL_LABEL,
  LEVEL_SHORT,
  resolveUiLanguage,
  type AgeMode,
  type Gender,
  type Level,
  type Mode,
  type Profile,
} from "@/lib/types";

type Step = "mode" | "gender" | "level" | "age" | "name" | "done";

export default function OnboardingPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [step, setStep] = useState<Step>("mode");
  const [draft, setDraft] = useState<Partial<Profile>>({});
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const existing = getProfile();
    if (existing) setDraft(existing);
  }, []);

  const isThaiSpeaker = draft.mode === "english";
  // UI language defaults to Thai for the Thai-speaker branch and English for
  // the English-speaker branch, but a user-set override takes precedence so
  // e.g. a bilingual Thai speaker can go through Thai-learning setup in Thai.
  const showThaiCopy = resolveUiLanguage(draft) === "th";
  // Thai speakers don't need to pick gender (they already know the particles
  // ครับ/ค่ะ) and level is their English level. Simpler flow.
  const stepOrder: Step[] = isThaiSpeaker
    ? ["mode", "level", "age", "name", "done"]
    : ["mode", "gender", "level", "age", "name", "done"];

  function orderFor(d: Partial<Profile>): Step[] {
    return d.mode === "english"
      ? ["mode", "level", "age", "name", "done"]
      : ["mode", "gender", "level", "age", "name", "done"];
  }

  function next() {
    const idx = stepOrder.indexOf(step);
    if (idx < stepOrder.length - 1) setStep(stepOrder[idx + 1]);
  }

  function back() {
    const idx = stepOrder.indexOf(step);
    if (idx > 0) setStep(stepOrder[idx - 1]);
  }

  function pick(field: keyof Profile, value: string | number) {
    // Compute the next step from the updated draft synchronously — picking
    // "mode" changes the stepOrder (Thai speakers skip the gender step), so
    // relying on a closed-over stepOrder inside a setTimeout would advance to
    // a step that no longer exists in the new order and leave the UI blank.
    const updated = { ...draft, [field]: value };
    setDraft(updated);
    const nextOrder = orderFor(updated);
    const idx = nextOrder.indexOf(step);
    if (idx >= 0 && idx < nextOrder.length - 1) {
      const target = nextOrder[idx + 1];
      setTimeout(() => setStep(target), 200);
    }
  }

  function finish() {
    const profile: Profile = {
      mode: (draft.mode ?? "thai") as Mode,
      gender: (draft.gender ?? "male") as Gender,
      level: (draft.level ?? 1) as Level,
      ageMode: (draft.ageMode ?? "adult") as AgeMode,
      name: name.trim() || undefined,
      onboarded: true,
      // Preserve the mode-switch history and any explicit UI-language
      // override set in a previous session so a bilingual user keeps
      // their preferred interface language across setups.
      uiLanguage: draft.uiLanguage,
      modeSwitchCount: draft.modeSwitchCount,
      lastModeSwitchAt: draft.lastModeSwitchAt,
      subscription: draft.subscription,
      trialStartedAt: draft.trialStartedAt,
    };
    saveProfile(profile);
    router.push(profile.mode === "thai" ? "/thai" : "/reverse");
  }

  // Labels in the right language for each step
  const L = showThaiCopy ? TH : EN;

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4">
      {user && step !== "done" && (
        <div className="rounded-2xl border border-mint-500/30 bg-mint-50 px-4 py-3 text-sm text-stone-700">
          <span className="font-semibold text-mint-800">Signed in as {user.email}.</span>{" "}
          Lessons unlock after you finish this quick setup.
        </div>
      )}
      <ProgressBar step={step} stepOrder={stepOrder} />

      {step === "mode" && (
        <Card title="Choose your language / เลือกภาษาของคุณ" subtitle="This locks the app to one mode. You can change it later in your account.">
          <div className="grid gap-3 sm:grid-cols-2">
            <Choice
              emoji="🇬🇧 → 🇹🇭"
              title="I speak English"
              subtitle="Learn Thai — ฿1,000/yr, 3-day free trial"
              selected={draft.mode === "thai"}
              onClick={() => pick("mode", "thai")}
            />
            <Choice
              emoji="🇹🇭 → 🇬🇧"
              title="ฉันเป็นคนไทย"
              subtitle="Learn English — ฟรีตลอดไป · Free forever"
              selected={draft.mode === "english"}
              onClick={() => pick("mode", "english")}
            />
          </div>
          <p className="mt-4 text-xs text-stone-500">
            You'll only see the mode you pick. Switch anytime by signing out
            or from your account page.
          </p>
        </Card>
      )}

      {step === "gender" && !isThaiSpeaker && (
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
          title={L.levelTitle}
          subtitle={L.levelSub}
        >
          <div className="grid gap-2">
            {([1, 2, 3, 4, 5] as Level[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => pick("level", lvl)}
                className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
                  draft.level === lvl
                    ? "border-mint-500 bg-mint-50"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-500 font-bold text-ink-900">
                  {lvl}
                </div>
                <div>
                  <div className="font-semibold text-stone-800">
                    {showThaiCopy ? L.levelShort[lvl] : LEVEL_SHORT[lvl]}
                  </div>
                  <div className="text-sm text-stone-500">
                    {showThaiCopy ? L.levelLabel[lvl] : LEVEL_LABEL[lvl]}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {step === "age" && (
        <Card title={L.ageTitle} subtitle={L.ageSub}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Choice
              emoji="🧒"
              title={L.ageKidTitle}
              subtitle={L.ageKidSub}
              selected={draft.ageMode === "kid"}
              onClick={() => pick("ageMode", "kid")}
            />
            <Choice
              emoji="🧑"
              title={L.ageAdultTitle}
              subtitle={L.ageAdultSub}
              selected={draft.ageMode === "adult"}
              onClick={() => pick("ageMode", "adult")}
            />
          </div>
        </Card>
      )}

      {step === "name" && (
        <Card title={L.nameTitle} subtitle={L.nameSub}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={L.namePlaceholder}
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-lg"
            autoFocus
          />
          <div className="mt-4 flex gap-2">
            <button onClick={back} className="btn-secondary">← {L.back}</button>
            <button onClick={next} className="btn-primary flex-1">
              {name.trim() ? `${L.continue} →` : `${L.skip} →`}
            </button>
          </div>
        </Card>
      )}

      {!stepOrder.includes(step) && (
        <Card
          title={showThaiCopy ? "เริ่มใหม่อีกครั้ง" : "Let's start over"}
          subtitle={
            showThaiCopy
              ? "เลือกภาษาเพื่อเริ่มตั้งค่าใหม่"
              : "Pick your language to restart setup."
          }
        >
          <button onClick={() => setStep("mode")} className="btn-primary w-full">
            {showThaiCopy ? "เริ่มใหม่" : "Start over"} →
          </button>
        </Card>
      )}

      {step === "done" && (
        <Card title={`${L.welcome}${name ? ", " + name : ""}!`} subtitle={L.doneSub}>
          <div className="space-y-2 rounded-xl bg-stone-50 p-4 text-sm">
            <Row label={L.learning} value={isThaiSpeaker ? "ภาษาอังกฤษ (ฟรี)" : "Thai"} />
            {!isThaiSpeaker && (
              <Row label="Pronoun" value={draft.gender === "female" ? "ฉัน / ค่ะ" : "ผม / ครับ"} />
            )}
            <Row label="Level" value={draft.level ? `${showThaiCopy ? L.levelShort[draft.level as Level] : LEVEL_SHORT[draft.level as Level]}` : ""} />
            <Row label="Mode" value={draft.ageMode === "kid" ? L.kid : L.standard} />
          </div>
          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-stone-200 bg-white p-3 text-sm text-stone-700">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-none accent-mint-500"
            />
            <span className="thai">
              {L.agreePrefix}{" "}
              <Link href="/terms" className="text-mint-700 underline">
                {L.terms}
              </Link>{" "}
              {L.and}{" "}
              <Link href="/privacy" className="text-mint-700 underline">
                {L.privacy}
              </Link>
              .
            </span>
          </label>
          <button
            onClick={finish}
            disabled={!agreed}
            className="btn-primary mt-4 w-full disabled:cursor-not-allowed"
          >
            {L.start} →
          </button>
          <button onClick={() => setStep("mode")} className="mt-2 block w-full text-center text-xs text-stone-500">
            {L.changeSomething}
          </button>
        </Card>
      )}
    </div>
  );
}

// --- i18n for onboarding ---

const EN = {
  levelTitle: "What's your Thai level?",
  levelSub: "We'll start you on sentences that match. Change anytime in your account.",
  levelShort: LEVEL_SHORT,
  levelLabel: LEVEL_LABEL,
  ageTitle: "Are you under 18?",
  ageSub: "We'll hide adult-context examples in kid mode.",
  ageKidTitle: "Under 18",
  ageKidSub: "Kid mode — bigger UI, no bar/dating phrases",
  ageAdultTitle: "18+",
  ageAdultSub: "Standard mode",
  nameTitle: "What should we call you?",
  nameSub: "Optional — used in greetings only. You can skip.",
  namePlaceholder: "Nickname",
  back: "Back",
  continue: "Continue",
  skip: "Skip",
  welcome: "Welcome",
  doneSub: "You're all set. Your settings are saved on this device (and synced if you're signed in).",
  learning: "Learning",
  kid: "Kid mode",
  standard: "Standard",
  start: "Start learning",
  changeSomething: "Change something",
  agreePrefix: "I agree to the",
  terms: "Terms of Service",
  privacy: "Privacy Policy",
  and: "and the",
};

const TH = {
  levelTitle: "ภาษาอังกฤษของคุณอยู่ระดับไหน",
  levelSub: "เราจะเริ่มให้คุณเรียนประโยคที่เหมาะกับระดับ เปลี่ยนได้ทุกเมื่อ",
  levelShort: {
    1: "เริ่มต้น",
    2: "พื้นฐาน",
    3: "ใช้ในชีวิตประจำวัน",
    4: "สนทนาได้",
    5: "คล่อง",
  } as Record<Level, string>,
  levelLabel: {
    1: "ยังพูดไม่เป็นเลย",
    2: "รู้คำทักทาย ขอบคุณ",
    3: "สั่งอาหารและซื้อของได้",
    4: "คุยเล่นง่าย ๆ ได้",
    5: "พูดคล่อง อยากพัฒนาต่อ",
  } as Record<Level, string>,
  ageTitle: "อายุต่ำกว่า 18 ไหม",
  ageSub: "เราจะซ่อนเนื้อหาสำหรับผู้ใหญ่ในโหมดเด็ก",
  ageKidTitle: "ต่ำกว่า 18",
  ageKidSub: "โหมดเด็ก — ตัวอักษรใหญ่ ไม่มีประโยคบาร์/นัดเจอ",
  ageAdultTitle: "18 ปีขึ้นไป",
  ageAdultSub: "โหมดมาตรฐาน",
  nameTitle: "ให้เราเรียกคุณว่าอะไรดี",
  nameSub: "ไม่ใส่ก็ได้ ใช้สำหรับทักทายเฉย ๆ",
  namePlaceholder: "ชื่อเล่น",
  back: "ย้อนกลับ",
  continue: "ต่อไป",
  skip: "ข้าม",
  welcome: "ยินดีต้อนรับ",
  doneSub: "ตั้งค่าเสร็จแล้ว ข้อมูลจะถูกบันทึกในเครื่องนี้ (และซิงค์ถ้าคุณเข้าสู่ระบบ)",
  learning: "กำลังเรียน",
  kid: "โหมดเด็ก",
  standard: "มาตรฐาน",
  start: "เริ่มเรียน",
  changeSomething: "แก้ไขบางอย่าง",
  agreePrefix: "ฉันยอมรับ",
  terms: "ข้อตกลงการใช้งาน",
  privacy: "นโยบายความเป็นส่วนตัว",
  and: "และ",
};

// --- UI atoms ---

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
      <h1 className="thai text-2xl font-bold text-stone-800 sm:text-3xl">{title}</h1>
      {subtitle && <p className="thai mt-1 text-stone-600">{subtitle}</p>}
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
        selected ? "border-mint-500 bg-mint-50" : "border-stone-200 bg-white"
      }`}
    >
      <div className="text-4xl">{emoji}</div>
      <div className="thai mt-3 font-semibold text-stone-800">{title}</div>
      <div className="thai mt-1 text-sm text-stone-500">{subtitle}</div>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="thai text-stone-500">{label}</span>
      <span className="thai font-medium text-stone-800">{value}</span>
    </div>
  );
}

function ProgressBar({ step, stepOrder }: { step: Step; stepOrder: Step[] }) {
  const rawIdx = stepOrder.indexOf(step);
  const idx = rawIdx === -1 ? 0 : rawIdx;
  const pct = Math.round(((idx + 1) / stepOrder.length) * 100);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
          Step {idx + 1} of {stepOrder.length}
        </span>
        <span className="text-stone-400">{pct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-mint-500 shadow-[0_0_8px_rgba(52,211,153,.5)] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

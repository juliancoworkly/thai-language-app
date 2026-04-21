"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  conversations,
  levelOf,
  type ConversationTurn,
} from "@/data/conversations";
import { speakEnglish, speakThai } from "@/lib/tts";
import type { Level } from "@/lib/types";

// For Thai speakers learning English: prompt is in English, they pick
// the correct Thai reply. Level-gated so a beginner isn't buried.

type Difficulty = "easy" | "medium" | "hard" | "mixed";

const DIFFICULTY_RANGES: Record<Difficulty, [Level, Level]> = {
  easy: [1, 2],
  medium: [3, 3],
  hard: [4, 5],
  mixed: [1, 5],
};

const ENCOURAGEMENTS = ["🔥 เก่งมาก!", "🚀 ถูกต้อง!", "🎯 แม่นยำ!", "✨ สุดยอด!", "🎉 ใช่แล้ว!"];
const COMMISERATIONS = ["😬 ลองใหม่", "💡 เกือบแล้ว", "📝 จำไว้นะ", "🤏 ใกล้แล้ว"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function filterByDifficulty(d: Difficulty): ConversationTurn[] {
  const [min, max] = DIFFICULTY_RANGES[d];
  return conversations.filter((c) => {
    const lvl = levelOf(c);
    return lvl >= min && lvl <= max;
  });
}

function pickOptions(
  correct: ConversationTurn,
  pool: ConversationTurn[]
): ConversationTurn[] {
  const same = pool.filter(
    (c) => c.id !== correct.id && c.category === correct.category
  );
  const others = pool.filter(
    (c) => c.id !== correct.id && c.category !== correct.category
  );
  const distractors = [
    ...shuffle(same).slice(0, 2),
    ...shuffle(others).slice(0, 1),
  ].slice(0, 3);
  return shuffle([correct, ...distractors]);
}

export default function ReverseConversationGame() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [queue, setQueue] = useState<ConversationTurn[]>([]);
  const [i, setI] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [reaction, setReaction] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const pool = useMemo(
    () => (difficulty ? filterByDifficulty(difficulty) : []),
    [difficulty]
  );

  useEffect(() => {
    if (difficulty) setQueue(shuffle(pool));
  }, [difficulty, pool]);

  const current = queue[i];
  const options = useMemo(
    () => (current ? pickOptions(current, pool) : []),
    [current, pool]
  );

  if (!difficulty) return <DifficultyPicker onPick={setDifficulty} />;

  if (!current) return <div className="card text-center">Loading…</div>;

  function pick(c: ConversationTurn) {
    if (picked || gameOver) return;
    setPicked(c.id);
    const correct = c.id === current.id;
    if (correct) {
      setScore((s) => s + 10 + Math.min(streak, 5) * 2);
      const ns = streak + 1;
      setStreak(ns);
      if (ns > best) setBest(ns);
      setReaction(
        ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]
      );
      speakThai(c.thai);
    } else {
      const remaining = lives - 1;
      setLives(remaining);
      setStreak(0);
      setReaction(
        COMMISERATIONS[Math.floor(Math.random() * COMMISERATIONS.length)]
      );
      if (remaining <= 0) setTimeout(() => setGameOver(true), 900);
    }
  }

  function next() {
    setPicked(null);
    setReaction(null);
    if (i + 1 >= queue.length) {
      setQueue(shuffle(pool));
      setI(0);
    } else setI(i + 1);
  }

  function restart() {
    setQueue(shuffle(pool));
    setI(0);
    setLives(3);
    setScore(0);
    setStreak(0);
    setPicked(null);
    setReaction(null);
    setGameOver(false);
  }

  if (gameOver) {
    return (
      <div className="card space-y-4 text-center">
        <div className="text-6xl">💀</div>
        <h1 className="thai text-2xl font-bold">หัวใจหมดแล้ว!</h1>
        <div className="thai text-stone-600">
          คะแนน: <strong className="text-2xl text-mint-700">{score}</strong>
        </div>
        <div className="thai text-sm text-stone-500">สถิติต่อเนื่อง: {best}</div>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={restart} className="btn-primary thai">🔄 เล่นใหม่</button>
          <button onClick={() => setDifficulty(null)} className="btn-secondary thai">
            เปลี่ยนระดับ
          </button>
          <Link href="/reverse" className="btn-secondary thai">กลับ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/reverse" className="btn-ghost thai">← กลับ</Link>
        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={() => setDifficulty(null)}
            className="thai rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-semibold text-stone-700 hover:bg-stone-50"
            title="เปลี่ยนระดับ"
          >
            {difficultyLabel(difficulty)}
          </button>
          <span className="text-xl">
            {"❤️".repeat(lives)}
            <span className="opacity-20">{"🖤".repeat(3 - lives)}</span>
          </span>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-stone-700">
            💎 {score}
          </span>
          {streak >= 2 && (
            <span className="rounded-full border border-mint-500/30 bg-mint-50 px-3 py-1 text-mint-800">
              🔥 {streak}
            </span>
          )}
        </div>
      </div>

      <div>
        <h1 className="thai text-2xl font-bold text-stone-800">💬 เกมสนทนา</h1>
        <p className="thai text-stone-600">
          คนพูดภาษาอังกฤษกับคุณ ตอบเป็นภาษาไทยให้ถูก
        </p>
      </div>

      <div className="card space-y-4">
        <div className="flex items-start justify-between">
          <div className="thai text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} เขาพูดว่า
          </div>
          <button
            onClick={() => speakEnglish(current.english)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mint-500 text-xl text-ink-900 shadow hover:bg-mint-400"
            aria-label="Play English"
          >
            🔊
          </button>
        </div>

        <div className="rounded-2xl bg-stone-50 p-5 text-center">
          <div className="text-3xl font-bold text-stone-800">
            {current.english}
          </div>
        </div>

        <div className="thai text-center text-sm font-medium text-stone-700">
          เลือกคำตอบที่ถูก ↓
        </div>

        <div className="grid gap-2">
          {options.map((opt) => {
            const isCorrect = opt.id === current.id;
            const isPicked = opt.id === picked;
            const show = picked !== null;
            return (
              <button
                key={opt.id}
                onClick={() => pick(opt)}
                disabled={!!picked}
                className={`rounded-xl border-2 p-3 text-left transition ${
                  !show
                    ? "border-stone-200 bg-white hover:border-mint-300 hover:bg-mint-50"
                    : isCorrect
                    ? "border-green-500 bg-green-50 text-green-900"
                    : isPicked
                    ? "border-red-500 bg-red-50 text-red-900"
                    : "border-stone-200 bg-white opacity-50"
                }`}
              >
                <div className="thai text-lg font-medium">{opt.thai}</div>
                <div className="text-xs text-stone-500">{opt.thaiPhonetic}</div>
              </button>
            );
          })}
        </div>

        {picked && (
          <div className="space-y-3 text-center">
            <div className="text-lg font-semibold">{reaction}</div>
            <button onClick={next} className="btn-primary thai">
              ต่อไป →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function difficultyLabel(d: Difficulty): string {
  switch (d) {
    case "easy":
      return "ง่าย · L1-2";
    case "medium":
      return "กลาง · L3";
    case "hard":
      return "ยาก · L4-5";
    case "mixed":
      return "รวม";
  }
}

function DifficultyPicker({
  onPick,
}: {
  onPick: (d: Difficulty) => void;
}) {
  const options: {
    id: Difficulty;
    label: string;
    desc: string;
    count: number;
    emoji: string;
  }[] = (["easy", "medium", "hard", "mixed"] as Difficulty[]).map((d) => ({
    id: d,
    label:
      d === "easy" ? "ง่าย" : d === "medium" ? "กลาง" : d === "hard" ? "ยาก" : "รวม",
    desc:
      d === "easy"
        ? "ทักทาย กิน พื้นฐาน · ระดับ 1-2"
        : d === "medium"
        ? "ทิศทาง บริการ แท็กซี่ · ระดับ 3"
        : d === "hard"
        ? "ภาษาคล่อง · ระดับ 4-5"
        : "ทุกระดับปนกัน · 1-5",
    count: filterByDifficulty(d).length,
    emoji:
      d === "easy" ? "🌱" : d === "medium" ? "🌿" : d === "hard" ? "🌳" : "🎲",
  }));

  return (
    <div className="space-y-6 py-4">
      <Link href="/reverse" className="thai btn-ghost inline-flex">
        ← กลับ
      </Link>

      <div>
        <span className="eyebrow-pill-light thai">เกมสนทนา</span>
        <h1 className="thai display-h2 mt-4 text-stone-900">
          เลือก{" "}
          <span className="serif-i text-mint-700">ระดับ</span> ของคุณ
        </h1>
        <p className="thai mt-3 max-w-xl text-stone-600">
          3 หัวใจ ตอบถูกต่อเนื่องได้แต้มเพิ่ม เริ่มจากระดับที่สบายใจ
          เปลี่ยนได้ทุกเมื่อระหว่างเล่น
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onPick(o.id)}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {o.emoji}
              </div>
              <span className="thai rounded-full border border-mint-500/25 bg-mint-50 px-2.5 py-1 text-[11px] font-mono text-mint-700">
                {o.count} ข้อ
              </span>
            </div>
            <div className="thai mt-4 text-xl font-bold text-stone-900">
              {o.label}
            </div>
            <div className="thai mt-1 text-sm text-stone-500">{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

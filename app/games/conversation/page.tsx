"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { conversations, type ConversationTurn } from "@/data/conversations";
import { PhoneticText } from "@/components/PhoneticText";
import { speakThai, speakEnglish } from "@/lib/tts";

const ENCOURAGEMENTS = [
  "🔥 Nailed it!",
  "🚀 Sounds Thai to me!",
  "🎯 Bullseye!",
  "✨ You're on a roll!",
  "🎉 Perfect!",
];

const COMMISERATIONS = [
  "😬 Close — try the next one",
  "💡 Good guess, wrong context",
  "📝 One to remember",
  "🤏 So close",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickOptions(correct: ConversationTurn): string[] {
  // Prefer distractors from same category; fill with random if not enough
  const sameCat = conversations.filter(
    (c) => c.id !== correct.id && c.category === correct.category
  );
  const others = conversations.filter(
    (c) => c.id !== correct.id && c.category !== correct.category
  );
  const distractors = [
    ...shuffle(sameCat).slice(0, 2),
    ...shuffle(others).slice(0, 1),
  ].slice(0, 3);
  return shuffle([correct.english, ...distractors.map((d) => d.english)]);
}

export default function ConversationGame() {
  const [queue, setQueue] = useState<ConversationTurn[]>([]);
  const [i, setI] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [reaction, setReaction] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setQueue(shuffle(conversations));
  }, []);

  const current = queue[i];
  const options = useMemo(() => (current ? pickOptions(current) : []), [current]);

  if (!current)
    return (
      <div className="card text-center">
        <p>Loading…</p>
      </div>
    );

  function pick(opt: string) {
    if (picked || gameOver) return;
    setPicked(opt);
    const correct = opt === current.english;
    if (correct) {
      setScore((s) => s + 10 + Math.min(streak, 5) * 2);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > best) setBest(newStreak);
      setReaction(ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]);
      speakEnglish(opt);
    } else {
      const remaining = lives - 1;
      setLives(remaining);
      setStreak(0);
      setReaction(COMMISERATIONS[Math.floor(Math.random() * COMMISERATIONS.length)]);
      if (remaining <= 0) {
        setTimeout(() => setGameOver(true), 900);
      }
    }
  }

  function next() {
    setPicked(null);
    setReaction(null);
    if (i + 1 >= queue.length) {
      setQueue(shuffle(conversations));
      setI(0);
    } else setI(i + 1);
  }

  function restart() {
    setQueue(shuffle(conversations));
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
        <h1 className="text-2xl font-bold">Out of lives!</h1>
        <div className="text-stone-600">
          Final score: <strong className="text-2xl text-brand-700">{score}</strong>
        </div>
        <div className="text-sm text-stone-500">Best streak: {best}</div>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={restart} className="btn-primary">
            🔄 Try again
          </button>
          <Link href="/games" className="btn-secondary">
            Back to games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/games" className="btn-ghost">← Games</Link>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-xl">
            {"❤️".repeat(lives)}
            <span className="opacity-20">{"🖤".repeat(3 - lives)}</span>
          </span>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-stone-700">
            💎 {score}
          </span>
          {streak >= 2 && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">
              🔥 {streak}
            </span>
          )}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-stone-800">
          💬 Conversation
        </h1>
        <p className="text-stone-600">
          Someone says this in Thai. What do you reply in English?
        </p>
      </div>

      <div className="card space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} They say
          </div>
          <button
            onClick={() => speakThai(current.thai)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-xl text-white shadow hover:bg-brand-600"
            aria-label="Play Thai"
          >
            🔊
          </button>
        </div>

        <div className="rounded-2xl bg-stone-50 p-5 text-center">
          <div className="thai text-3xl font-bold text-stone-800">
            {current.thai}
          </div>
          <div className="mt-2">
            <PhoneticText phonetic={current.thaiPhonetic} size="lg" bold />
          </div>
        </div>

        <div className="text-center text-sm font-medium text-stone-700">
          Pick the right reply ↓
        </div>

        <div className="grid gap-2">
          {options.map((opt) => {
            const isCorrect = opt === current.english;
            const isPicked = opt === picked;
            const show = picked !== null;
            return (
              <button
                key={opt}
                onClick={() => pick(opt)}
                disabled={!!picked}
                className={`rounded-xl border-2 p-3 text-left transition ${
                  !show
                    ? "border-stone-200 bg-white hover:border-brand-300 hover:bg-brand-50"
                    : isCorrect
                    ? "border-green-500 bg-green-50 text-green-900"
                    : isPicked
                    ? "border-red-500 bg-red-50 text-red-900"
                    : "border-stone-200 bg-white opacity-50"
                }`}
              >
                <div className="text-base font-medium">{opt}</div>
              </button>
            );
          })}
        </div>

        {picked && (
          <div className="space-y-3 text-center">
            <div className="text-lg font-semibold">{reaction}</div>
            {current.note && (
              <div className="rounded-lg bg-amber-50 p-2 text-xs text-amber-900">
                💡 {current.note}
              </div>
            )}
            <button onClick={next} className="btn-primary">
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

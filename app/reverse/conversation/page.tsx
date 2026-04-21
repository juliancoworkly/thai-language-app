"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { conversations, type ConversationTurn } from "@/data/conversations";
import { speakEnglish, speakThai } from "@/lib/tts";

// For Thai speakers learning English: prompt is in English, they pick the
// correct Thai reply. We invert the "direction" of the same conversation
// pairs so the same data powers both games.
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

// For the reverse game: the prompt is the original Thai speaker's line translated
// to English, and the reply is the Thai translation of the English response.
// So we construct a "flipped turn":
//   prompt (English) = the original Thai line's English gloss
//   correct reply (Thai-script phonetic / English-pronunciation?) - we'll
//   use the English text's natural Thai equivalent. For simplicity the
//   correct answer is the English reply, shown as "how you'd say it in English".
// Actually the user wants: guess the response in the OTHER language.
// For Thai speakers learning English: hear/see an English prompt, pick the
// correct English reply (from 4 options). So we just swap prompt/response:
//   Prompt = something said to them in English (use our 'thai' field meaning
//   as a translated English "they say")
//   Correct reply = the English reply.
// Simpler approach: use the same mechanic but flip: prompt is the English
// sentence that would be said TO the Thai speaker, correct reply is the Thai
// response. We derive "prompt in English" from the existing conversation turn's
// thai→english translation? We only have the Thai sentence's meaning in
// English via original turn.english. Let's present it as: Thai learner hears
// the Thai-prompt-in-English form, then picks the Thai reply.
// We'll present: show current.english as the prompt (what a Thai-speaker might
// say in English), and pick from 4 Thai replies (other conversations' thai
// fields). Keep it simple.

function pickOptions(correct: ConversationTurn): ConversationTurn[] {
  const same = conversations.filter(
    (c) => c.id !== correct.id && c.category === correct.category
  );
  const others = conversations.filter(
    (c) => c.id !== correct.id && c.category !== correct.category
  );
  const distractors = [...shuffle(same).slice(0, 2), ...shuffle(others).slice(0, 1)].slice(0, 3);
  return shuffle([correct, ...distractors]);
}

export default function ReverseConversationGame() {
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
      setReaction(ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]);
      speakThai(c.thai);
    } else {
      const remaining = lives - 1;
      setLives(remaining);
      setStreak(0);
      setReaction(COMMISERATIONS[Math.floor(Math.random() * COMMISERATIONS.length)]);
      if (remaining <= 0) setTimeout(() => setGameOver(true), 900);
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
        <h1 className="text-2xl font-bold">หัวใจหมดแล้ว!</h1>
        <div className="text-stone-600">
          คะแนน: <strong className="text-2xl text-mint-700">{score}</strong>
        </div>
        <div className="text-sm text-stone-500">สถิติต่อเนื่อง: {best}</div>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={restart} className="btn-primary">🔄 เล่นใหม่</button>
          <Link href="/reverse" className="btn-secondary">กลับ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/reverse" className="btn-ghost">← กลับ / Back</Link>
        <div className="flex items-center gap-3 text-sm">
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
        <h1 className="text-2xl font-bold text-stone-800">💬 เกมสนทนา Conversation</h1>
        <p className="text-stone-600">
          คนพูดภาษาอังกฤษนี้กับคุณ — ควรตอบเป็นภาษาไทยอย่างไร
        </p>
      </div>

      <div className="card space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {current.emoji} เขาพูดว่า / They say
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
          <div className="text-3xl font-bold text-stone-800">{current.english}</div>
        </div>

        <div className="text-center text-sm font-medium text-stone-700">
          คำตอบที่ถูก ↓
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
            <button onClick={next} className="btn-primary">ต่อไป / Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}

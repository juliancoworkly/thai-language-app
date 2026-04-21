import Link from "next/link";
import { notFound } from "next/navigation";
import { reverseScripts, type ReverseScriptTurn } from "@/data/reverse-scripts";

export function generateStaticParams() {
  return reverseScripts.map((s) => ({ id: s.id }));
}

export default function ReverseScriptPage({
  params,
}: {
  params: { id: string };
}) {
  const script = reverseScripts.find((s) => s.id === params.id);
  if (!script) return notFound();

  return (
    <div className="space-y-10 py-4">
      <Link
        href="/reverse/scripts"
        className="thai inline-flex text-sm text-stone-500 hover:text-stone-800"
      >
        ← บทสนทนาทั้งหมด
      </Link>

      <section>
        <span className="section-label text-mint-700 thai">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
          บทสนทนา · Level {script.level}
        </span>
        <div className="mt-3 flex items-start gap-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-50 text-3xl">
            {script.emoji}
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
              {script.title}
            </h1>
            <div className="thai mt-1 text-lg text-stone-500">
              {script.titleThai}
            </div>
          </div>
        </div>
        <p className="thai mt-4 max-w-2xl text-stone-600">
          {script.description}
        </p>
      </section>

      <section className="space-y-4">
        {script.turns.map((turn, i) => (
          <Turn
            key={i}
            turn={turn}
            index={i}
            totalTurns={script.turns.length}
          />
        ))}
      </section>

      <section className="rounded-2xl border border-mint-500/30 bg-mint-50 p-6">
        <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
          ฝึกต่อ · Practise
        </div>
        <h2 className="thai mt-2 text-xl font-black tracking-tight text-stone-900">
          อ่านออกเสียงตามสามรอบ
        </h2>
        <p className="thai mt-2 text-sm text-stone-700">
          เมื่อลิ้นคุ้นแล้ว ลองเล่นเกมสนทนาเพื่อฝึกตอบแบบไม่มีบท
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/reverse/conversation"
            className="thai inline-flex items-center gap-2 rounded-full bg-mint-500 px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:scale-[1.02] hover:bg-mint-400"
          >
            💬 เล่นเกมสนทนา →
          </Link>
          <Link
            href="/reverse/scripts"
            className="thai inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:bg-stone-50"
          >
            บทต่อไป →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Turn({
  turn,
  index,
  totalTurns,
}: {
  turn: ReverseScriptTurn;
  index: number;
  totalTurns: number;
}) {
  const isYou = turn.speaker.toLowerCase() === "you";
  return (
    <div
      className={`relative rounded-2xl border p-5 ${
        isYou
          ? "border-mint-500/40 bg-mint-50"
          : "border-stone-200 bg-white"
      }`}
    >
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em]">
        <span
          className={`flex items-center gap-2 ${
            isYou ? "text-mint-700" : "text-stone-500"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isYou ? "bg-mint-500" : "bg-stone-400"
            }`}
          />
          {turn.speaker}
          {turn.speakerTh && (
            <span className="thai text-stone-400">· {turn.speakerTh}</span>
          )}
        </span>
        <span className="text-stone-400">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(totalTurns).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-3">
        <div className="text-xl font-bold leading-snug text-stone-900">
          {turn.english}
        </div>
        <div className="thai mt-1 text-sm text-mint-700">
          {turn.thaiPhonetic}
        </div>
        <div className="thai mt-2 text-sm text-stone-700">
          {turn.thaiMeaning}
        </div>
      </div>

      {turn.note && (
        <div className="thai mt-3 rounded-xl border border-mint-500/20 bg-white/80 p-3 text-xs text-stone-700">
          💡 {turn.note}
        </div>
      )}
    </div>
  );
}

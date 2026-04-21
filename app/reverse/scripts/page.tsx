import Link from "next/link";
import { reverseScripts } from "@/data/reverse-scripts";

export const metadata = {
  title: "บทสนทนาภาษาอังกฤษ — Phuut Thai",
  description:
    "บทสนทนาภาษาอังกฤษพร้อมคำอ่านภาษาไทยและความหมาย ฝึกตามสถานการณ์จริง",
};

export default function ReverseScriptsIndex() {
  const sorted = reverseScripts.slice().sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-10 py-4">
      <section>
        <span className="eyebrow-pill-light thai">บทสนทนา · Scripts</span>
        <h1 className="thai display-h2 mt-4 text-stone-900">
          บทสนทนา{" "}
          <span className="serif-i text-mint-700">เต็มๆ</span>
        </h1>
        <p className="thai mt-3 max-w-2xl text-lg text-stone-600">
          ฝึกภาษาอังกฤษผ่านบทสนทนาจริงในชีวิตประจำวัน
          มีคำอ่านภาษาไทยกำกับให้ทุกประโยค อ่านเสียงได้ด้วย
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {sorted.map((s, idx) => (
          <Link
            key={s.id}
            href={`/reverse/scripts/${s.id}`}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {s.emoji}
              </div>
              <span className="font-mono text-xs tracking-wider text-stone-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h3 className="font-semibold text-stone-900">{s.title}</h3>
            </div>
            <div className="thai mt-0.5 text-sm font-semibold text-mint-700">
              {s.titleThai}
            </div>
            <p className="thai mt-2 text-sm text-stone-500">{s.description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="rounded-full border border-mint-500/25 bg-mint-50 px-2.5 py-1 text-[11px] text-mint-700">
                Level {s.level}
              </span>
              <span className="thai rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] text-stone-600">
                {s.turns.length} ประโยค
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

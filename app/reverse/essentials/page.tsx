import Link from "next/link";
import { reverseEssentials } from "@/data/reverse-essentials";

export const metadata = {
  title: "สิ่งสำคัญภาษาอังกฤษ — Phuut Thai",
  description:
    "พื้นฐานภาษาอังกฤษ: ตัวอักษร ตัวเลข สี สัตว์ ครอบครัว ร่างกาย วัน เดือน อาหาร อากาศ",
};

export default function ReverseEssentialsIndex() {
  const sorted = reverseEssentials.slice().sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-10 py-4">
      <section>
        <span className="eyebrow-pill-light thai">พื้นฐาน · Essentials</span>
        <h1 className="thai display-h2 mt-4 text-stone-900">
          ภาษาอังกฤษ{" "}
          <span className="serif-i text-mint-700">พื้นฐาน</span>
        </h1>
        <p className="thai mt-3 max-w-2xl text-lg text-stone-600">
          สิบเอ็ดหน้าสำหรับเด็กและผู้เริ่มต้น ตั้งแต่ตัวอักษรจนถึงประโยคพื้นฐาน
          ใช้เป็นเอกสารอ้างอิง ไม่ต้องจำทั้งหมดในครั้งเดียว
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((e, idx) => (
          <Link
            key={e.id}
            href={`/reverse/essentials/${e.id}`}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-mint-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {e.emoji}
              </div>
              <span className="font-mono text-xs tracking-wider text-stone-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-bold text-stone-900">{e.subtitle}</h3>
            </div>
            <div className="thai mt-0.5 text-sm font-semibold text-mint-700">
              {e.title}
            </div>
            <p className="thai mt-2 text-sm text-stone-500">{e.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

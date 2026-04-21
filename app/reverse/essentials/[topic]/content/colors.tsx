import { Eyebrow, SubHeading } from "../shell";

const COLORS = [
  { en: "Red", phonetic: "เร็ด", th: "สีแดง", hex: "#dc2626" },
  { en: "Orange", phonetic: "ออ-เรนจ์", th: "สีส้ม", hex: "#f97316" },
  { en: "Yellow", phonetic: "เยล-โล่", th: "สีเหลือง", hex: "#eab308" },
  { en: "Green", phonetic: "กรีน", th: "สีเขียว", hex: "#16a34a" },
  { en: "Blue", phonetic: "บลู", th: "สีฟ้า / น้ำเงิน", hex: "#2563eb" },
  { en: "Purple", phonetic: "เพอร์-เปิ้ล", th: "สีม่วง", hex: "#7c3aed" },
  { en: "Pink", phonetic: "พิงค์", th: "สีชมพู", hex: "#ec4899" },
  { en: "Brown", phonetic: "บราวน์", th: "สีน้ำตาล", hex: "#92400e" },
  { en: "Black", phonetic: "แบล็ค", th: "สีดำ", hex: "#1c1917" },
  { en: "Gray", phonetic: "เกรย์", th: "สีเทา", hex: "#6b7280" },
  { en: "White", phonetic: "ไวท์", th: "สีขาว", hex: "#fafaf9", border: "#e7e5e4" },
  { en: "Gold", phonetic: "โกลด์", th: "สีทอง", hex: "#d4af37" },
];

export function ColorsContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>สิบสองสี · Twelve colors</Eyebrow>
        <SubHeading>Say the color, point to the thing.</SubHeading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COLORS.map((c) => (
            <div
              key={c.en}
              className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4"
            >
              <div
                className="h-14 w-14 flex-none rounded-2xl"
                style={{
                  backgroundColor: c.hex,
                  border: c.border ? `1px solid ${c.border}` : undefined,
                }}
                aria-hidden
              />
              <div className="min-w-0">
                <div className="text-lg font-bold text-stone-900">{c.en}</div>
                <div className="thai text-xs text-mint-700">{c.phonetic}</div>
                <div className="thai mt-1 text-sm text-stone-700">{c.th}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

const COLORS = [
  { thai: "สีแดง", phonetic: "sǐi-dɛɛng", en: "Red", hex: "#dc2626" },
  { thai: "สีส้ม", phonetic: "sǐi-sôm", en: "Orange", hex: "#f97316" },
  { thai: "สีเหลือง", phonetic: "sǐi-lɯ̌ang", en: "Yellow", hex: "#eab308" },
  { thai: "สีเขียว", phonetic: "sǐi-khǐao", en: "Green", hex: "#16a34a" },
  { thai: "สีฟ้า", phonetic: "sǐi-fáa", en: "Light blue", hex: "#38bdf8" },
  { thai: "สีน้ำเงิน", phonetic: "sǐi-náam-ngəən", en: "Dark blue", hex: "#1d4ed8" },
  { thai: "สีม่วง", phonetic: "sǐi-mûang", en: "Purple", hex: "#7c3aed" },
  { thai: "สีชมพู", phonetic: "sǐi-chom-phuu", en: "Pink", hex: "#ec4899" },
  { thai: "สีน้ำตาล", phonetic: "sǐi-náam-dtaan", en: "Brown", hex: "#92400e" },
  { thai: "สีดำ", phonetic: "sǐi-dam", en: "Black", hex: "#1c1917" },
  { thai: "สีเทา", phonetic: "sǐi-thao", en: "Gray", hex: "#6b7280" },
  { thai: "สีขาว", phonetic: "sǐi-khǎao", en: "White", hex: "#fafaf9", border: "#e7e5e4" },
];

export function ColorsEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>Twelve colors</Eyebrow>
        <SubHeading>สี (sǐi) means color, literally.</SubHeading>
        <p className="text-stone-600">
          Every color in Thai starts with <strong className="thai">สี</strong>.
          So red is <strong className="thai">สีแดง</strong> (color red) and
          green is <strong className="thai">สีเขียว</strong> (color green).
          Describing a red car: <strong className="thai">รถสีแดง</strong>.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COLORS.map((c) => (
            <div
              key={c.thai}
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
                <div className="thai text-lg font-bold text-stone-900">
                  {c.thai}
                </div>
                <div className="text-xs text-stone-500">{c.phonetic}</div>
                <div className="mt-1 text-sm text-stone-700">{c.en}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>In use</Eyebrow>
        <SubHeading>Day-to-day phrases.</SubHeading>
        <Callout label="Describing things">
          <p className="thai">มีสีอื่นไหมครับ?</p>
          <p className="mt-1 text-stone-500">
            mii sǐi ɯ̀ɯn mǎi khráp? · Do you have another color?
          </p>
          <p className="thai mt-3">ขอสีดำครับ</p>
          <p className="mt-1 text-stone-500">
            khɔ̌ɔ sǐi-dam khráp · I'd like the black one.
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <LinkCta href="/games/matching">🪞 Match colors in pairs →</LinkCta>
      </section>
    </div>
  );
}

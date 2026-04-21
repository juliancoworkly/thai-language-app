import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

const CLASSIFIERS = [
  { thai: "คน", phonetic: "khon", use: "people", example: "สามคน · three people" },
  { thai: "ตัว", phonetic: "dtua", use: "animals, shirts, furniture", example: "หมาสองตัว · two dogs" },
  { thai: "อัน", phonetic: "an", use: "small generic objects", example: "ขอสองอัน · two of those, please" },
  { thai: "ใบ", phonetic: "bai", use: "leaves, tickets, receipts, plates", example: "ตั๋วสี่ใบ · four tickets" },
  { thai: "ลูก", phonetic: "lûuk", use: "round fruit, balls, hills", example: "แอปเปิลสองลูก · two apples" },
  { thai: "แก้ว", phonetic: "gɛ̂ɛo", use: "glass of (drinks)", example: "น้ำหนึ่งแก้ว · a glass of water" },
  { thai: "ถ้วย", phonetic: "thûai", use: "cup/bowl of", example: "กาแฟถ้วยนี้ · this cup of coffee" },
  { thai: "ขวด", phonetic: "khùat", use: "bottles", example: "เบียร์สองขวด · two bottles of beer" },
  { thai: "จาน", phonetic: "jaan", use: "plates / dishes of food", example: "ข้าวผัดจานนี้ · this plate of fried rice" },
  { thai: "คัน", phonetic: "khan", use: "cars, bikes, motorbikes", example: "รถคันนี้ · this car" },
  { thai: "เล่ม", phonetic: "lêm", use: "books, knives", example: "หนังสือสามเล่ม · three books" },
  { thai: "ชิ้น", phonetic: "chín", use: "pieces, slices", example: "เค้กสองชิ้น · two slices of cake" },
  { thai: "แผ่น", phonetic: "phɛ̀ɛn", use: "flat things (paper, tiles, CDs)", example: "แผ่นนี้ · this sheet" },
  { thai: "ดวง", phonetic: "duang", use: "stars, stamps, lamps", example: "ดวงจันทร์หนึ่งดวง · one moon" },
  { thai: "คู่", phonetic: "khûu", use: "pairs", example: "รองเท้าหนึ่งคู่ · one pair of shoes" },
];

export function ClassifiersEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>What is a classifier?</Eyebrow>
        <SubHeading>
          The little word that sits between a number and a thing.
        </SubHeading>
        <p className="text-stone-600">
          In English we say "three dogs". In Thai it's{" "}
          <strong className="thai">หมาสามตัว</strong> — literally "dog three{" "}
          <em>bodies</em>". <strong className="thai">ตัว</strong> is the
          classifier for animals. Every countable noun has one. You can't
          skip it.
        </p>
        <Callout label="The pattern">
          <p className="font-mono text-sm text-stone-800">
            [noun] + [number] + [classifier]
          </p>
          <p className="mt-2">
            <span className="thai">น้ำสองแก้ว</span> · water + two + glass =
            two glasses of water
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>The fifteen you'll actually need</Eyebrow>
        <SubHeading>Memorise these first. The rest you pick up.</SubHeading>
        <div className="grid gap-2">
          {CLASSIFIERS.map((c) => (
            <div
              key={c.thai}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="thai text-xl font-bold text-stone-900">
                  {c.thai}
                </span>
                <span className="text-sm text-stone-500">{c.phonetic}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-stone-800">
                  {c.use}
                </div>
                <div className="thai text-[11px] text-stone-400">
                  {c.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>When you forget</Eyebrow>
        <SubHeading>The safe fallback.</SubHeading>
        <p className="text-stone-600">
          If you genuinely don't know which classifier to use, Thais will
          understand <strong className="thai">อัน</strong> (an) for most small
          objects. You will sound like a learner, not rude. Better to
          communicate than to freeze.
        </p>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <LinkCta href="/games/builder">🧩 Build sentences with classifiers →</LinkCta>
      </section>
    </div>
  );
}

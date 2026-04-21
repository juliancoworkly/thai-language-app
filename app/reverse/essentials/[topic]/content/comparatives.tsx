import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const SHORT_ADJ = [
  { base: "small", comp: "smaller", sup: "smallest", th: "เล็ก / เล็กกว่า / เล็กที่สุด" },
  { base: "big", comp: "bigger", sup: "biggest", th: "ใหญ่ / ใหญ่กว่า / ใหญ่ที่สุด" },
  { base: "cheap", comp: "cheaper", sup: "cheapest", th: "ถูก / ถูกกว่า / ถูกที่สุด" },
  { base: "tall", comp: "taller", sup: "tallest", th: "สูง / สูงกว่า / สูงที่สุด" },
  { base: "hot", comp: "hotter", sup: "hottest", th: "ร้อน / ร้อนกว่า / ร้อนที่สุด" },
  { base: "fast", comp: "faster", sup: "fastest", th: "เร็ว / เร็วกว่า / เร็วที่สุด" },
];

const LONG_ADJ = [
  { base: "expensive", comp: "more expensive", sup: "most expensive", th: "แพง" },
  { base: "beautiful", comp: "more beautiful", sup: "most beautiful", th: "สวย" },
  { base: "difficult", comp: "more difficult", sup: "most difficult", th: "ยาก" },
  { base: "delicious", comp: "more delicious", sup: "most delicious", th: "อร่อย" },
  { base: "interesting", comp: "more interesting", sup: "most interesting", th: "น่าสนใจ" },
];

const IRREGULARS = [
  { base: "good", comp: "better", sup: "best", th: "ดี / ดีกว่า / ดีที่สุด" },
  { base: "bad", comp: "worse", sup: "worst", th: "แย่ / แย่กว่า / แย่ที่สุด" },
  { base: "far", comp: "farther", sup: "farthest", th: "ไกล" },
  { base: "little", comp: "less", sup: "least", th: "น้อย" },
  { base: "many / much", comp: "more", sup: "most", th: "มาก" },
];

const PHRASES = [
  { en: "This is cheaper than that.", phonetic: "ดิส-อิส-ชีพ-เพอร์-แดน-แดท", th: "อันนี้ถูกกว่าอันนั้น" },
  { en: "Pad Thai is the best.", phonetic: "ผัด-ไท-อิส-เดอะ-เบสท์", th: "ผัดไทยอร่อยที่สุด" },
  { en: "She is taller than me.", phonetic: "ชี-อิส-ทอล-เลอร์-แดน-มี", th: "เธอสูงกว่าฉัน" },
  { en: "This is the most expensive one.", phonetic: "ดิส-อิส-เดอะ-โมสท์-เอ็ก-เพน-ซิฟ-วัน", th: "อันนี้แพงที่สุด" },
];

export function ComparativesContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>กฎคร่าวๆ · The rough rule</Eyebrow>
        <SubHeading>Short words add -er/-est. Long words use more/most.</SubHeading>
        <p className="thai text-stone-600">
          ภาษาไทยใช้คำว่า "กว่า" และ "ที่สุด" หลังคำคุณศัพท์ ภาษาอังกฤษซับซ้อนกว่า
          — คำสั้น (1-2 พยางค์) เปลี่ยนรูปด้วย <strong>-er / -est</strong> ส่วนคำยาว
          (3 พยางค์ขึ้นไป) ใช้ <strong>more / most</strong> นำหน้า
        </p>
        <Callout label="เทียบกับไทย">
          <p><strong>big</strong> · <strong>bigger</strong> · <strong>biggest</strong></p>
          <p className="thai mt-1 text-stone-500">ใหญ่ · ใหญ่กว่า · ใหญ่ที่สุด</p>
          <p className="mt-3"><strong>expensive</strong> · <strong>more expensive</strong> · <strong>most expensive</strong></p>
          <p className="thai mt-1 text-stone-500">แพง · แพงกว่า · แพงที่สุด</p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>คำสั้น · Short adjectives</Eyebrow>
        <SubHeading>Add -er for "more", -est for "most".</SubHeading>
        <div className="grid gap-2">
          {SHORT_ADJ.map((a) => (
            <div
              key={a.base}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-bold text-stone-900">{a.base}</span>
                <span className="text-stone-400">→</span>
                <span className="font-semibold text-mint-700">{a.comp}</span>
                <span className="text-stone-400">→</span>
                <span className="font-semibold text-mint-800">{a.sup}</span>
              </div>
              <span className="thai text-xs text-stone-500">{a.th}</span>
            </div>
          ))}
        </div>
        <Callout label="ข้อควรระวัง · Spelling quirks">
          <p className="thai">
            <strong>big → bigger</strong> (ซ้อนตัว g) เพราะลงท้ายด้วยสระตัวเดียว + พยัญชนะเดียว
          </p>
          <p className="thai mt-1">
            <strong>happy → happier</strong> (y เปลี่ยนเป็น i) เพราะลงท้ายด้วยพยัญชนะ + y
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>คำยาว · Long adjectives</Eyebrow>
        <SubHeading>Keep the word. Just add "more" or "most".</SubHeading>
        <div className="grid gap-2">
          {LONG_ADJ.map((a) => (
            <div
              key={a.base}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-bold text-stone-900">{a.base}</span>
                <span className="text-stone-400">→</span>
                <span className="font-semibold text-mint-700">{a.comp}</span>
              </div>
              <span className="thai text-xs text-stone-500">{a.th}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ผิดปกติ · Irregulars</Eyebrow>
        <SubHeading>Some words go their own way.</SubHeading>
        <div className="grid gap-2">
          {IRREGULARS.map((a) => (
            <div
              key={a.base}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-bold text-stone-900">{a.base}</span>
                <span className="text-stone-400">→</span>
                <span className="font-semibold text-mint-700">{a.comp}</span>
                <span className="text-stone-400">→</span>
                <span className="font-semibold text-mint-800">{a.sup}</span>
              </div>
              <span className="thai text-xs text-stone-500">{a.th}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ประโยคตัวอย่าง · In use</Eyebrow>
        <div className="grid gap-2">
          {PHRASES.map((p) => (
            <EnRow key={p.en} en={p.en} phonetic={p.phonetic} th={p.th} />
          ))}
        </div>
      </section>
    </div>
  );
}

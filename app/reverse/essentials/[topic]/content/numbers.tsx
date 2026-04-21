import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const DIGITS = [
  { n: 0, en: "Zero", phonetic: "ซี-โร่", th: "ศูนย์" },
  { n: 1, en: "One", phonetic: "วัน", th: "หนึ่ง" },
  { n: 2, en: "Two", phonetic: "ทู", th: "สอง" },
  { n: 3, en: "Three", phonetic: "ทรี", th: "สาม" },
  { n: 4, en: "Four", phonetic: "โฟร์", th: "สี่" },
  { n: 5, en: "Five", phonetic: "ไฟฟ์", th: "ห้า" },
  { n: 6, en: "Six", phonetic: "ซิกซ์", th: "หก" },
  { n: 7, en: "Seven", phonetic: "เซ-เว่น", th: "เจ็ด" },
  { n: 8, en: "Eight", phonetic: "เอท", th: "แปด" },
  { n: 9, en: "Nine", phonetic: "ไนน์", th: "เก้า" },
  { n: 10, en: "Ten", phonetic: "เท็น", th: "สิบ" },
];

const TEENS = [
  { en: "Eleven", phonetic: "อี-เล-เว่น", th: "11" },
  { en: "Twelve", phonetic: "ทเว็ลฟ์", th: "12" },
  { en: "Thirteen", phonetic: "เธอร์-ทีน", th: "13" },
  { en: "Fourteen", phonetic: "โฟร์-ทีน", th: "14" },
  { en: "Fifteen", phonetic: "ฟิฟ-ทีน", th: "15" },
  { en: "Sixteen", phonetic: "ซิกซ์-ทีน", th: "16" },
  { en: "Seventeen", phonetic: "เซ-เว่น-ทีน", th: "17" },
  { en: "Eighteen", phonetic: "เอท-ทีน", th: "18" },
  { en: "Nineteen", phonetic: "ไนน์-ทีน", th: "19" },
];

const TENS = [
  { en: "Twenty", phonetic: "ทเว็น-ตี้", th: "20" },
  { en: "Thirty", phonetic: "เธอร์-ตี้", th: "30" },
  { en: "Forty", phonetic: "โฟร์-ตี้", th: "40" },
  { en: "Fifty", phonetic: "ฟิฟ-ตี้", th: "50" },
  { en: "Sixty", phonetic: "ซิกซ์-ตี้", th: "60" },
  { en: "Seventy", phonetic: "เซ-เว่น-ตี้", th: "70" },
  { en: "Eighty", phonetic: "เอท-ตี้", th: "80" },
  { en: "Ninety", phonetic: "ไนน์-ตี้", th: "90" },
];

const BIG = [
  { en: "Hundred", phonetic: "ฮัน-เดรด", th: "ร้อย" },
  { en: "Thousand", phonetic: "เธา-ซั่นด์", th: "พัน" },
  { en: "Million", phonetic: "มิล-เลี่ยน", th: "ล้าน" },
];

export function NumbersContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>0 ถึง 10 · Zero to ten</Eyebrow>
        <SubHeading>Learn these first.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {DIGITS.map((d) => (
            <EnRow key={d.n} en={`${d.n} · ${d.en}`} phonetic={d.phonetic} th={d.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>11 ถึง 19 · Teens</Eyebrow>
        <SubHeading>The -teen family.</SubHeading>
        <p className="thai text-stone-600">
          เลข 13 ถึง 19 ลงท้ายด้วย <strong>-teen</strong> (ทีน)
          แต่ 11 และ 12 ต้องจำเป็นพิเศษ
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TEENS.map((t) => (
            <EnRow key={t.en} en={`${t.th} · ${t.en}`} phonetic={t.phonetic} th="" />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>20 ถึง 90 · Tens</Eyebrow>
        <SubHeading>The -ty family.</SubHeading>
        <p className="thai text-stone-600">
          เลขสิบทุกตัวตั้งแต่ 20 ลงท้ายด้วย <strong>-ty</strong> (ตี้){" "}
          ส่วน 21 = Twenty-one, 35 = Thirty-five แบบนี้ไปเรื่อยๆ
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TENS.map((t) => (
            <EnRow key={t.en} en={`${t.th} · ${t.en}`} phonetic={t.phonetic} th="" />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ใหญ่กว่านั้น · Beyond 100</Eyebrow>
        <SubHeading>Hundreds, thousands, millions.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-3">
          {BIG.map((b) => (
            <EnRow key={b.en} en={b.en} phonetic={b.phonetic} th={b.th} />
          ))}
        </div>
        <Callout label="ตัวอย่าง · Example">
          <p className="text-lg font-semibold">250 = Two hundred fifty</p>
          <p className="thai mt-1">ทู-ฮัน-เดรด-ฟิฟ-ตี้</p>
          <p className="thai mt-3">
            1,500 = One thousand five hundred
            <br />
            วัน-เธา-ซั่นด์-ไฟฟ์-ฮัน-เดรด
          </p>
        </Callout>
      </section>
    </div>
  );
}

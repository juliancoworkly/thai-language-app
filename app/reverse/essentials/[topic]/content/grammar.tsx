import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const PRONOUNS = [
  { en: "I", phonetic: "ไอ", th: "ฉัน / ผม" },
  { en: "You", phonetic: "ยู", th: "คุณ" },
  { en: "He", phonetic: "ฮี", th: "เขา (ผู้ชาย)" },
  { en: "She", phonetic: "ชี", th: "เธอ (ผู้หญิง)" },
  { en: "It", phonetic: "อิท", th: "มัน / สิ่งนั้น" },
  { en: "We", phonetic: "วี", th: "เรา" },
  { en: "They", phonetic: "เดย์", th: "พวกเขา" },
];

const POSSESSIVES = [
  { en: "My", phonetic: "มาย", th: "ของฉัน" },
  { en: "Your", phonetic: "ยัวร์", th: "ของคุณ" },
  { en: "His", phonetic: "ฮิส", th: "ของเขา (ชาย)" },
  { en: "Her", phonetic: "เฮอร์", th: "ของเธอ (หญิง)" },
  { en: "Its", phonetic: "อิทส์", th: "ของมัน" },
  { en: "Our", phonetic: "อาวเออร์", th: "ของเรา" },
  { en: "Their", phonetic: "แดร์", th: "ของพวกเขา" },
];

const BE = [
  { en: "I am", phonetic: "ไอ-แอม", th: "ฉันเป็น/อยู่" },
  { en: "You are", phonetic: "ยู-อาร์", th: "คุณเป็น/อยู่" },
  { en: "He is", phonetic: "ฮี-อิส", th: "เขาเป็น/อยู่" },
  { en: "She is", phonetic: "ชี-อิส", th: "เธอเป็น/อยู่" },
  { en: "It is", phonetic: "อิท-อิส", th: "มันเป็น/อยู่" },
  { en: "We are", phonetic: "วี-อาร์", th: "เราเป็น/อยู่" },
  { en: "They are", phonetic: "เดย์-อาร์", th: "พวกเขาเป็น/อยู่" },
];

const HAVE = [
  { en: "I have", phonetic: "ไอ-แฮฟ", th: "ฉันมี" },
  { en: "You have", phonetic: "ยู-แฮฟ", th: "คุณมี" },
  { en: "He has", phonetic: "ฮี-แฮส", th: "เขามี" },
  { en: "She has", phonetic: "ชี-แฮส", th: "เธอมี" },
  { en: "We have", phonetic: "วี-แฮฟ", th: "เรามี" },
  { en: "They have", phonetic: "เดย์-แฮฟ", th: "พวกเขามี" },
];

const QUESTIONS = [
  { en: "What?", phonetic: "วอท", th: "อะไร" },
  { en: "Who?", phonetic: "ฮู", th: "ใคร" },
  { en: "Where?", phonetic: "แวร์", th: "ที่ไหน" },
  { en: "When?", phonetic: "เว็น", th: "เมื่อไหร่" },
  { en: "Why?", phonetic: "วาย", th: "ทำไม" },
  { en: "How?", phonetic: "ฮาว", th: "อย่างไร" },
  { en: "How much?", phonetic: "ฮาว-มัช", th: "เท่าไหร่" },
  { en: "How many?", phonetic: "ฮาว-เมนี่", th: "กี่อัน" },
];

export function GrammarContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>A / An / The · คำนำหน้าคำนาม</Eyebrow>
        <SubHeading>Three tiny words in front of nouns.</SubHeading>
        <Callout label="กฎ · Rule">
          <p className="thai">
            <strong>a</strong> ใช้กับคำที่ขึ้นต้นด้วยเสียง{" "}
            <em>พยัญชนะ</em>: <strong>a</strong> dog, <strong>a</strong> book
          </p>
          <p className="thai mt-1">
            <strong>an</strong> ใช้กับคำที่ขึ้นต้นด้วยเสียง <em>สระ</em>{" "}
            (a, e, i, o, u): <strong>an</strong> apple,{" "}
            <strong>an</strong> egg
          </p>
          <p className="thai mt-1">
            <strong>the</strong> ใช้เมื่อผู้พูดและผู้ฟังรู้อยู่แล้วว่า
            หมายถึงอันไหน: <strong>the</strong> sun,{" "}
            <strong>the</strong> book on the table
          </p>
        </Callout>
        <Callout label="ตัวอย่าง">
          <p>
            <strong>I have a cat.</strong>{" "}
            <span className="thai text-stone-500">ฉันมีแมวตัวหนึ่ง</span>
          </p>
          <p className="mt-1">
            <strong>An elephant is big.</strong>{" "}
            <span className="thai text-stone-500">ช้างเป็นสัตว์ตัวใหญ่</span>
          </p>
          <p className="mt-1">
            <strong>The sun is hot.</strong>{" "}
            <span className="thai text-stone-500">พระอาทิตย์ร้อน</span>
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>สรรพนาม · Pronouns</Eyebrow>
        <SubHeading>Who is doing what.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {PRONOUNS.map((p) => (
            <EnRow key={p.en} en={p.en} phonetic={p.phonetic} th={p.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ของใคร · Possessives</Eyebrow>
        <SubHeading>My, your, his, her...</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {POSSESSIVES.map((p) => (
            <EnRow key={p.en} en={p.en} phonetic={p.phonetic} th={p.th} />
          ))}
        </div>
        <Callout label="ตัวอย่าง">
          <p>
            <strong>This is my book.</strong>{" "}
            <span className="thai text-stone-500">นี่คือหนังสือของฉัน</span>
          </p>
          <p className="mt-1">
            <strong>Her name is Nong.</strong>{" "}
            <span className="thai text-stone-500">เธอชื่อ นง</span>
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>To be · กริยา "เป็น/อยู่"</Eyebrow>
        <SubHeading>The most important verb.</SubHeading>
        <p className="thai text-stone-600">
          <strong>be</strong> เปลี่ยนรูปตามประธาน จำสามตัวหลักให้ได้ก่อน:{" "}
          <strong>am, is, are</strong>
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {BE.map((b) => (
            <EnRow key={b.en} en={b.en} phonetic={b.phonetic} th={b.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>To have · กริยา "มี"</Eyebrow>
        <SubHeading>Saying what you own.</SubHeading>
        <p className="thai text-stone-600">
          <strong>have / has</strong> ใช้บอกว่ามีอะไร — <strong>has</strong>{" "}
          ใช้กับ he, she, it เท่านั้น
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {HAVE.map((h) => (
            <EnRow key={h.en} en={h.en} phonetic={h.phonetic} th={h.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>คำถาม · Question words</Eyebrow>
        <SubHeading>The "W" family plus How.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {QUESTIONS.map((q) => (
            <EnRow key={q.en} en={q.en} phonetic={q.phonetic} th={q.th} />
          ))}
        </div>
        <Callout label="สูตร · Pattern">
          <p className="thai">
            คำถามที่ขึ้นต้นด้วย W ทั้งหมด + กริยา + ประธาน
          </p>
          <p className="mt-2">
            <strong>What is this?</strong>{" "}
            <span className="thai text-stone-500">นี่คืออะไร</span>
          </p>
          <p className="mt-1">
            <strong>Where is the bathroom?</strong>{" "}
            <span className="thai text-stone-500">ห้องน้ำอยู่ที่ไหน</span>
          </p>
          <p className="mt-1">
            <strong>How much is it?</strong>{" "}
            <span className="thai text-stone-500">ราคาเท่าไหร่</span>
          </p>
        </Callout>
      </section>
    </div>
  );
}

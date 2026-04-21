import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const PRESENT = [
  { en: "I don't eat meat.", phonetic: "ไอ-ด็อนท์-อีท-มีท", th: "ฉันไม่กินเนื้อ" },
  { en: "You don't have to go.", phonetic: "ยู-ด็อนท์-แฮฟ-ทู-โก", th: "คุณไม่ต้องไป" },
  { en: "He doesn't speak Thai.", phonetic: "ฮี-ดาส-เซ่นท์-สปีค-ไท", th: "เขาไม่พูดภาษาไทย" },
  { en: "She doesn't like spicy food.", phonetic: "ชี-ดาส-เซ่นท์-ไลค์-สไป-ซี่-ฟู้ด", th: "เธอไม่ชอบอาหารเผ็ด" },
];

const PAST = [
  { en: "I didn't go.", phonetic: "ไอ-ดิด-เซ่นท์-โก", th: "ฉันไม่ได้ไป" },
  { en: "We didn't see it.", phonetic: "วี-ดิด-เซ่นท์-ซี-อิท", th: "เราไม่ได้เห็น" },
  { en: "He didn't come.", phonetic: "ฮี-ดิด-เซ่นท์-คัม", th: "เขาไม่ได้มา" },
];

const FUTURE = [
  { en: "I won't go.", phonetic: "ไอ-โว้นท์-โก", th: "ฉันจะไม่ไป" },
  { en: "They won't understand.", phonetic: "เดย์-โว้นท์-อัน-เดอร์-สแตนด์", th: "พวกเขาจะไม่เข้าใจ" },
];

const CANT = [
  { en: "I can't speak English well.", phonetic: "ไอ-แค้นท์-สปีค-อิง-ลิช-เวล", th: "ฉันพูดภาษาอังกฤษไม่เก่ง" },
  { en: "She can't come today.", phonetic: "ชี-แค้นท์-คัม-ทู-เดย์", th: "เธอมาไม่ได้วันนี้" },
  { en: "He couldn't sleep.", phonetic: "ฮี-คุด-เซ่นท์-สลีพ", th: "เขานอนไม่หลับ" },
];

const NEVER = [
  { en: "I've never been to London.", phonetic: "ไอฟ์-เน-เว่อร์-บีน-ทู-ลอน-ดั่น", th: "ฉันไม่เคยไปลอนดอน" },
  { en: "She never eats breakfast.", phonetic: "ชี-เน-เว่อร์-อีทส์-เบรก-ฟาสท์", th: "เธอไม่เคยกินข้าวเช้า" },
];

export function NegationContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>กฎพื้นฐาน · The big rule</Eyebrow>
        <SubHeading>English uses helper verbs.</SubHeading>
        <p className="thai text-stone-600">
          ภาษาไทยใช้แค่คำว่า "ไม่" หน้ากริยา จบ
          ภาษาอังกฤษต้องใช้ "helper verb" เช่น do / does / did / will /
          can นำหน้า <strong>not</strong> แล้วค่อยตามด้วยกริยาหลัก
        </p>
        <Callout label="สูตร · Pattern">
          <p><strong>Subject + do/does/did + not + verb</strong></p>
          <p className="mt-2"><strong>I + do + not + eat</strong> → I don't eat</p>
          <p className="mt-1"><strong>She + does + not + eat</strong> → She doesn't eat</p>
          <p className="mt-1"><strong>They + did + not + eat</strong> → They didn't eat</p>
          <p className="mt-2 thai text-xs text-stone-500">
            คำย่อ: do not = don't · does not = doesn't · did not = didn't · will not = won't · cannot = can't
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>ปฏิเสธปัจจุบัน · Don't / Doesn't</Eyebrow>
        <SubHeading>Negating things that happen now or regularly.</SubHeading>
        <p className="thai text-stone-600">
          ใช้ <strong>don't</strong> กับ I / you / we / they
          <br />
          ใช้ <strong>doesn't</strong> กับ he / she / it
        </p>
        <div className="grid gap-2">
          {PRESENT.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ปฏิเสธอดีต · Didn't</Eyebrow>
        <SubHeading>Negating the past. Same form for everyone.</SubHeading>
        <p className="thai text-stone-600">
          ใช้ <strong>didn't + กริยารูปปกติ</strong> (ไม่ต้องเติม -ed)
          <br />
          <em>She didn't <strong>go</strong></em>, ไม่ใช่ <em>She didn't went</em>
        </p>
        <div className="grid gap-2">
          {PAST.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ปฏิเสธอนาคต · Won't</Eyebrow>
        <SubHeading>Will not, contracted.</SubHeading>
        <div className="grid gap-2">
          {FUTURE.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ทำไม่ได้ · Can't / Couldn't</Eyebrow>
        <SubHeading>Lacking ability.</SubHeading>
        <p className="thai text-stone-600">
          <strong>can't</strong> สำหรับปัจจุบัน · <strong>couldn't</strong> สำหรับอดีต
        </p>
        <div className="grid gap-2">
          {CANT.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ไม่เคย · Never</Eyebrow>
        <SubHeading>Across your whole life.</SubHeading>
        <p className="thai text-stone-600">
          ไม่ใช้กับ don't / didn't — แค่วาง <strong>never</strong> หน้ากริยาตรงๆ
        </p>
        <div className="grid gap-2">
          {NEVER.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
        <Callout label="อย่าใช้ซ้อนกัน">
          <p className="thai">
            อย่าพูด <em className="text-stone-400 line-through">I don't never go</em>
            <br />
            ถูก: <strong>I never go</strong> หรือ <strong>I don't go</strong> ไม่ใช่ทั้งสอง
          </p>
        </Callout>
      </section>
    </div>
  );
}

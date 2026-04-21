import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const SIMPLE_PRESENT = [
  { en: "I eat rice every day.", phonetic: "ไอ-อีท-ไรซ์-เอฟ-รี่-เดย์", th: "ฉันกินข้าวทุกวัน" },
  { en: "She works at a hotel.", phonetic: "ชี-เวิร์คส์-แอท-อะ-โฮ-เทล", th: "เธอทำงานที่โรงแรม" },
  { en: "They live in Phuket.", phonetic: "เดย์-ลิฟ-อิน-ภูเก็ต", th: "พวกเขาอยู่ที่ภูเก็ต" },
];

const PRESENT_CONTINUOUS = [
  { en: "I am eating.", phonetic: "ไอ-แอม-อี้ต-ติ้ง", th: "ฉันกำลังกินอยู่" },
  { en: "He is working.", phonetic: "ฮี-อิส-เวิร์ค-คิง", th: "เขากำลังทำงาน" },
  { en: "We are waiting.", phonetic: "วี-อาร์-เวท-ติ้ง", th: "เรากำลังรอ" },
];

const SIMPLE_PAST = [
  { en: "I ate yesterday.", phonetic: "ไอ-เอท-เยส-เต้อร์-เดย์", th: "ฉันกินเมื่อวาน" },
  { en: "She walked home.", phonetic: "ชี-วอล์คท์-โฮม", th: "เธอเดินกลับบ้าน" },
  { en: "They saw the movie.", phonetic: "เดย์-ซอว์-เดอะ-มูฟ-วี่", th: "พวกเขาดูหนัง" },
];

const SIMPLE_FUTURE = [
  { en: "I will go tomorrow.", phonetic: "ไอ-วิล-โก-ทู-มอร์-โร่ว์", th: "ฉันจะไปพรุ่งนี้" },
  { en: "She's going to cook.", phonetic: "ชีส์-โก-อิ้ง-ทู-คุ้ก", th: "เธอจะทำอาหาร" },
  { en: "It will rain.", phonetic: "อิท-วิล-เรน", th: "ฝนจะตก" },
];

const IRREGULARS = [
  { en: "go → went", phonetic: "โก → เว็นท์", th: "ไป" },
  { en: "see → saw", phonetic: "ซี → ซอว์", th: "เห็น" },
  { en: "eat → ate", phonetic: "อีท → เอท", th: "กิน" },
  { en: "drink → drank", phonetic: "ดริงค์ → แดรงค์", th: "ดื่ม" },
  { en: "have → had", phonetic: "แฮฟ → แฮด", th: "มี" },
  { en: "do → did", phonetic: "ดู → ดิด", th: "ทำ" },
  { en: "say → said", phonetic: "เซย์ → เซด", th: "พูด" },
  { en: "take → took", phonetic: "เทค → ทุ๊ค", th: "เอา" },
];

export function TensesContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>สำคัญมาก · The big one</Eyebrow>
        <SubHeading>English verbs change. Thai verbs don't.</SubHeading>
        <p className="thai text-stone-600">
          ภาษาไทยเราไม่เปลี่ยนรูปกริยา "กิน" อยู่เหมือนเดิม ใส่คำว่า จะ / กำลัง / แล้ว
          ข้างหน้าก็พอ ภาษาอังกฤษต่างออกไป คำกริยาต้องเปลี่ยนรูปตามเวลา
        </p>
        <Callout label="ตัวอย่างเทียบ">
          <p><strong>I eat.</strong> <span className="thai text-stone-500">ฉันกิน (ทุกวัน)</span></p>
          <p className="mt-1"><strong>I am eating.</strong> <span className="thai text-stone-500">ฉันกำลังกิน</span></p>
          <p className="mt-1"><strong>I ate.</strong> <span className="thai text-stone-500">ฉันกินแล้ว / เมื่อวาน</span></p>
          <p className="mt-1"><strong>I will eat.</strong> <span className="thai text-stone-500">ฉันจะกิน</span></p>
          <p className="mt-2 thai text-xs text-stone-500">
            คำกริยาเดียวกัน แต่รูปเปลี่ยนตามกาล
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>ปัจจุบันธรรมดา · Simple present</Eyebrow>
        <SubHeading>Habits and general truths.</SubHeading>
        <p className="thai text-stone-600">
          ใช้เมื่อพูดถึงสิ่งที่ทำเป็นประจำ หรือความจริงทั่วไป
          <br />
          <strong>I / You / We / They + verb</strong>, แต่ <strong>He / She / It + verb + s</strong>
        </p>
        <div className="grid gap-2">
          {SIMPLE_PRESENT.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>กำลัง...อยู่ · Present continuous</Eyebrow>
        <SubHeading>Happening right now.</SubHeading>
        <p className="thai text-stone-600">
          <strong>am / is / are + กริยา + -ing</strong>
          <br />
          ใช้พูดสิ่งที่กำลังทำอยู่ในขณะนี้ เทียบกับภาษาไทยคือ "กำลัง...อยู่"
        </p>
        <div className="grid gap-2">
          {PRESENT_CONTINUOUS.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>อดีต · Simple past</Eyebrow>
        <SubHeading>It already happened.</SubHeading>
        <p className="thai text-stone-600">
          ปกติเติม <strong>-ed</strong> ท้ายกริยา เช่น walk → walked, play → played.
          แต่มี "กริยาผิดปกติ" (irregulars) ที่ต้องจำ เช่น eat → ate
        </p>
        <div className="grid gap-2">
          {SIMPLE_PAST.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
        <Callout label="กริยาผิดปกติที่เจอบ่อย · Common irregulars">
          <div className="mt-1 grid gap-1 sm:grid-cols-2">
            {IRREGULARS.map((i) => (
              <div key={i.en} className="flex items-baseline justify-between">
                <span className="font-semibold">{i.en}</span>
                <span className="thai text-xs text-stone-500">{i.th}</span>
              </div>
            ))}
          </div>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>อนาคต · Simple future</Eyebrow>
        <SubHeading>Two ways to say "will".</SubHeading>
        <p className="thai text-stone-600">
          <strong>will + กริยา</strong> สำหรับเหตุการณ์ในอนาคต หรือการตัดสินใจตอนนั้น
          <br />
          <strong>am / is / are going to + กริยา</strong> สำหรับสิ่งที่วางแผนไว้แล้ว
        </p>
        <div className="grid gap-2">
          {SIMPLE_FUTURE.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>เคล็ดลับ · Tip</Eyebrow>
        <Callout label="เริ่มจากสามตัวนี้ก่อน">
          <p className="thai">
            ถ้าจำทั้งหมดไม่ไหว ให้เริ่มจากสามรูปนี้ก่อน:
          </p>
          <ol className="thai mt-2 list-decimal pl-5">
            <li><strong>Simple present</strong> — ฉันกินข้าว (ทุกวัน)</li>
            <li><strong>Simple past</strong> — ฉันกินแล้ว (เมื่อวาน)</li>
            <li><strong>Simple future</strong> — ฉันจะกิน (พรุ่งนี้)</li>
          </ol>
          <p className="thai mt-2 text-xs text-stone-500">
            สามรูปนี้ครอบคลุมการสนทนาทั่วไป 80%
          </p>
        </Callout>
      </section>
    </div>
  );
}

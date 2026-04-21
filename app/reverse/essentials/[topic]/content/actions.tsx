import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const DAILY = [
  { en: "Eat", phonetic: "อีท", th: "กิน" },
  { en: "Drink", phonetic: "ดริงค์", th: "ดื่ม" },
  { en: "Sleep", phonetic: "สลีพ", th: "นอน" },
  { en: "Wake up", phonetic: "เวค-อัพ", th: "ตื่น" },
  { en: "Wash", phonetic: "ว็อช", th: "ล้าง" },
  { en: "Brush teeth", phonetic: "บรัช-ทีธ", th: "แปรงฟัน" },
  { en: "Take a shower", phonetic: "เทค-อะ-ชาว-เว่อร์", th: "อาบน้ำ" },
  { en: "Get dressed", phonetic: "เก็ท-เดรสท์", th: "แต่งตัว" },
];

const MOVEMENT = [
  { en: "Walk", phonetic: "วอล์ค", th: "เดิน" },
  { en: "Run", phonetic: "รัน", th: "วิ่ง" },
  { en: "Jump", phonetic: "จัมพ์", th: "กระโดด" },
  { en: "Climb", phonetic: "ไคลม์", th: "ปีน" },
  { en: "Swim", phonetic: "สวิม", th: "ว่ายน้ำ" },
  { en: "Dance", phonetic: "ดานซ์", th: "เต้น" },
  { en: "Sit", phonetic: "ซิท", th: "นั่ง" },
  { en: "Stand", phonetic: "สแตนด์", th: "ยืน" },
];

const SCHOOL = [
  { en: "Read", phonetic: "รีด", th: "อ่าน" },
  { en: "Write", phonetic: "ไรท์", th: "เขียน" },
  { en: "Listen", phonetic: "ลิส-เซ่น", th: "ฟัง" },
  { en: "Speak", phonetic: "สปีค", th: "พูด" },
  { en: "Learn", phonetic: "เลิร์น", th: "เรียนรู้" },
  { en: "Study", phonetic: "สตัด-ดี้", th: "เรียน" },
  { en: "Play", phonetic: "เพลย์", th: "เล่น" },
  { en: "Draw", phonetic: "ดรอว์", th: "วาด" },
];

const FEEL = [
  { en: "Love", phonetic: "เลิฟ", th: "รัก" },
  { en: "Like", phonetic: "ไลค์", th: "ชอบ" },
  { en: "Want", phonetic: "ว็อนท์", th: "อยาก / ต้องการ" },
  { en: "Need", phonetic: "นี้ด", th: "ต้องการ (จำเป็น)" },
  { en: "Help", phonetic: "เฮลพ์", th: "ช่วย" },
  { en: "See", phonetic: "ซี", th: "เห็น" },
  { en: "Hear", phonetic: "เฮียร์", th: "ได้ยิน" },
  { en: "Know", phonetic: "โนว์", th: "รู้" },
];

export function ActionsContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>ประจำวัน · Daily actions</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {DAILY.map((d) => (
            <EnRow key={d.en} en={d.en} phonetic={d.phonetic} th={d.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>เคลื่อนไหว · Movement</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {MOVEMENT.map((m) => (
            <EnRow key={m.en} en={m.en} phonetic={m.phonetic} th={m.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>โรงเรียนและเล่น · School & play</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {SCHOOL.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ความรู้สึก · Feelings & wants</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {FEEL.map((f) => (
            <EnRow key={f.en} en={f.en} phonetic={f.phonetic} th={f.th} />
          ))}
        </div>
        <Callout label="ลองดู · Try these">
          <p><strong>I love my mum.</strong> <span className="thai text-stone-500">ฉันรักแม่</span></p>
          <p className="mt-1"><strong>I want water, please.</strong> <span className="thai text-stone-500">ขอน้ำหน่อย</span></p>
          <p className="mt-1"><strong>Can you help me?</strong> <span className="thai text-stone-500">ช่วยฉันได้ไหม</span></p>
        </Callout>
      </section>
    </div>
  );
}

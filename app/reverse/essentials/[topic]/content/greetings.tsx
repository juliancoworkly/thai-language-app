import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const HELLOS = [
  { en: "Hello", phonetic: "เฮล-โล", th: "สวัสดี" },
  { en: "Hi", phonetic: "ไฮ", th: "หวัดดี (ไม่เป็นทางการ)" },
  { en: "Good morning", phonetic: "กู๊ด-มอร์-นิ่ง", th: "อรุณสวัสดิ์" },
  { en: "Good afternoon", phonetic: "กู๊ด-อาฟ-เต้อร์-นูน", th: "สวัสดีตอนบ่าย" },
  { en: "Good evening", phonetic: "กู๊ด-อีฟ-นิ่ง", th: "สวัสดีตอนเย็น" },
  { en: "Good night", phonetic: "กู๊ด-ไนท์", th: "ราตรีสวัสดิ์" },
];

const GOODBYES = [
  { en: "Goodbye", phonetic: "กู๊ด-บาย", th: "ลาก่อน" },
  { en: "Bye", phonetic: "บาย", th: "บาย" },
  { en: "See you later", phonetic: "ซี-ยู-เล-เต้อร์", th: "ไว้เจอกันใหม่" },
  { en: "See you tomorrow", phonetic: "ซี-ยู-ทู-มอร์-โร่ว์", th: "พรุ่งนี้เจอกัน" },
  { en: "Take care", phonetic: "เทค-แคร์", th: "ดูแลตัวเองนะ" },
];

const MANNERS = [
  { en: "Please", phonetic: "พลีส", th: "ได้โปรด / กรุณา" },
  { en: "Thank you", phonetic: "แท็งก์-คิว", th: "ขอบคุณ" },
  { en: "Thanks a lot", phonetic: "แท็งก์ส-อะ-ล็อท", th: "ขอบคุณมาก" },
  { en: "You're welcome", phonetic: "ยัวร์-เวล-คัม", th: "ไม่เป็นไร / ด้วยความยินดี" },
  { en: "Sorry", phonetic: "ซอ-รี่", th: "ขอโทษ" },
  { en: "Excuse me", phonetic: "เอ็กซ์-คิวส์-มี", th: "ขอโทษ (เรียก)" },
  { en: "No problem", phonetic: "โน-พร็อบ-เล่ม", th: "ไม่มีปัญหา" },
  { en: "Pardon?", phonetic: "พาร์-ดั่น", th: "อะไรนะ (ขอโทษ ไม่ได้ยิน)" },
];

const INTRO = [
  { en: "What's your name?", phonetic: "วอทส์-ยัวร์-เนม", th: "คุณชื่ออะไร" },
  { en: "My name is...", phonetic: "มาย-เนม-อิส", th: "ฉันชื่อ..." },
  { en: "Nice to meet you", phonetic: "ไนซ์-ทู-มีท-ยู", th: "ยินดีที่ได้รู้จัก" },
  { en: "How are you?", phonetic: "ฮาว-อาร์-ยู", th: "สบายดีไหม" },
  { en: "I'm fine, thank you", phonetic: "ไอม์-ไฟน์-แท็งก์-คิว", th: "สบายดี ขอบคุณ" },
  { en: "And you?", phonetic: "แอนด์-ยู", th: "แล้วคุณล่ะ" },
];

export function GreetingsContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>ทักทาย · Saying hello</Eyebrow>
        <SubHeading>Start with these six.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {HELLOS.map((h) => (
            <EnRow key={h.en} en={h.en} phonetic={h.phonetic} th={h.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ลาก่อน · Saying goodbye</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {GOODBYES.map((g) => (
            <EnRow key={g.en} en={g.en} phonetic={g.phonetic} th={g.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>มารยาท · Manners</Eyebrow>
        <SubHeading>Please, thank you, sorry.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {MANNERS.map((m) => (
            <EnRow key={m.en} en={m.en} phonetic={m.phonetic} th={m.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>แนะนำตัว · Introduce yourself</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {INTRO.map((i) => (
            <EnRow key={i.en} en={i.en} phonetic={i.phonetic} th={i.th} />
          ))}
        </div>
        <Callout label="ลองดู · Try it">
          <p>
            <strong>Hi! My name is Noon. Nice to meet you.</strong>
          </p>
          <p className="thai mt-1 text-stone-500">
            ไฮ มาย-เนม-อิส-นูน ไนซ์-ทู-มีท-ยู
          </p>
          <p className="thai mt-2">หวัดดี ฉันชื่อ นูน ยินดีที่ได้รู้จัก</p>
        </Callout>
      </section>
    </div>
  );
}

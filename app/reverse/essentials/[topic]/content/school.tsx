import { EnRow, Eyebrow, SubHeading } from "../shell";

const SUBJECTS = [
  { emoji: "🔢", en: "Math", phonetic: "แมธ", th: "คณิตศาสตร์" },
  { emoji: "🧪", en: "Science", phonetic: "ไซ-เอ็นซ์", th: "วิทยาศาสตร์" },
  { emoji: "🌏", en: "Geography", phonetic: "จี-อ๊อก-กราฟ-ฟี่", th: "ภูมิศาสตร์" },
  { emoji: "📚", en: "History", phonetic: "ฮิส-เตอ-รี่", th: "ประวัติศาสตร์" },
  { emoji: "🎨", en: "Art", phonetic: "อาร์ท", th: "ศิลปะ" },
  { emoji: "🎵", en: "Music", phonetic: "มิว-สิค", th: "ดนตรี" },
  { emoji: "⚽", en: "PE (sport)", phonetic: "พี-อี", th: "พลศึกษา" },
  { emoji: "💻", en: "Computer", phonetic: "คอม-พิว-เต้อร์", th: "คอมพิวเตอร์" },
  { emoji: "📖", en: "English", phonetic: "อิง-ลิช", th: "ภาษาอังกฤษ" },
  { emoji: "🇹🇭", en: "Thai", phonetic: "ไท", th: "ภาษาไทย" },
];

const ITEMS = [
  { emoji: "📕", en: "Book", phonetic: "บุ๊ค", th: "หนังสือ" },
  { emoji: "✏️", en: "Pencil", phonetic: "เพ็น-ซิ่ล", th: "ดินสอ" },
  { emoji: "🖊️", en: "Pen", phonetic: "เพ็น", th: "ปากกา" },
  { emoji: "📒", en: "Notebook", phonetic: "โน้ต-บุ๊ค", th: "สมุด" },
  { emoji: "📏", en: "Ruler", phonetic: "รู-เล่อร์", th: "ไม้บรรทัด" },
  { emoji: "✂️", en: "Scissors", phonetic: "ซิส-เซอร์ส", th: "กรรไกร" },
  { emoji: "🧮", en: "Calculator", phonetic: "แคล-คู-เล-เต้อร์", th: "เครื่องคิดเลข" },
  { emoji: "🎒", en: "Backpack", phonetic: "แบ็ค-แพ็ค", th: "กระเป๋าเป้" },
  { emoji: "🪑", en: "Desk", phonetic: "เดสก์", th: "โต๊ะเรียน" },
  { emoji: "🖼️", en: "Whiteboard", phonetic: "ไวท์-บอร์ด", th: "กระดานดำ/ไวท์บอร์ด" },
];

const PEOPLE = [
  { en: "Teacher", phonetic: "ที-เช่อร์", th: "คุณครู" },
  { en: "Student", phonetic: "สตู-เดนท์", th: "นักเรียน" },
  { en: "Classmate", phonetic: "คลาส-เมท", th: "เพื่อนร่วมชั้น" },
  { en: "Friend", phonetic: "เฟรนด์", th: "เพื่อน" },
  { en: "Principal", phonetic: "พริน-ซิ-เพิ่ล", th: "ผู้อำนวยการ" },
];

const PHRASES = [
  { en: "Good morning, teacher.", phonetic: "กู๊ด-มอร์-นิ่ง-ที-เช่อร์", th: "อรุณสวัสดิ์ค่ะ/ครับ คุณครู" },
  { en: "May I go to the bathroom?", phonetic: "เมย์-ไอ-โก-ทู-เดอะ-บาธ-รูม", th: "ขออนุญาตเข้าห้องน้ำได้ไหม" },
  { en: "I don't understand.", phonetic: "ไอ-ด็อนท์-อัน-เดอร์-สแตนด์", th: "หนู/ผมไม่เข้าใจ" },
  { en: "Can you say that again?", phonetic: "แคน-ยู-เซย์-แดท-อะ-เกน", th: "พูดอีกครั้งได้ไหม" },
  { en: "How do you say this in English?", phonetic: "ฮาว-ดู-ยู-เซย์-ดิส-อิน-อิง-ลิช", th: "คำนี้ภาษาอังกฤษพูดยังไง" },
  { en: "I forgot my homework.", phonetic: "ไอ-ฟอร์-ก็อท-มาย-โฮม-เวิร์ค", th: "หนู/ผมลืมการบ้าน" },
  { en: "Can I borrow your pencil?", phonetic: "แคน-ไอ-บอ-โร่ว์-ยัวร์-เพ็น-ซิ่ล", th: "ขอยืมดินสอหน่อยได้ไหม" },
  { en: "Thank you, teacher.", phonetic: "แท็งก์-คิว-ที-เช่อร์", th: "ขอบคุณครับ/ค่ะ คุณครู" },
];

export function SchoolContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>วิชาเรียน · School subjects</Eyebrow>
        <SubHeading>What do you study?</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s) => (
            <div
              key={s.en}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {s.emoji}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-stone-900">{s.en}</div>
                <div className="thai text-xs text-mint-700">{s.phonetic}</div>
                <div className="thai text-[11px] text-stone-500">{s.th}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ของใช้ในห้องเรียน · Classroom items</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => (
            <div
              key={i.en}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {i.emoji}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-stone-900">{i.en}</div>
                <div className="thai text-xs text-mint-700">{i.phonetic}</div>
                <div className="thai text-[11px] text-stone-500">{i.th}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>คนในโรงเรียน · People at school</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2">
          {PEOPLE.map((p) => (
            <EnRow key={p.en} en={p.en} phonetic={p.phonetic} th={p.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ประโยคสำคัญ · Must-have phrases</Eyebrow>
        <SubHeading>Say these and every school day gets easier.</SubHeading>
        <div className="grid gap-2">
          {PHRASES.map((p) => (
            <EnRow key={p.en} en={p.en} phonetic={p.phonetic} th={p.th} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { Callout, Eyebrow, SubHeading } from "../shell";

const LETTERS = [
  { letter: "A", phonetic: "เอ", word: "Apple", wordTh: "แอปเปิล" },
  { letter: "B", phonetic: "บี", word: "Ball", wordTh: "บอล" },
  { letter: "C", phonetic: "ซี", word: "Cat", wordTh: "แคท (แมว)" },
  { letter: "D", phonetic: "ดี", word: "Dog", wordTh: "ด็อก (หมา)" },
  { letter: "E", phonetic: "อี", word: "Egg", wordTh: "เอ้ก (ไข่)" },
  { letter: "F", phonetic: "เอฟ", word: "Fish", wordTh: "ฟิช (ปลา)" },
  { letter: "G", phonetic: "จี", word: "Goat", wordTh: "โกท (แพะ)" },
  { letter: "H", phonetic: "เอช", word: "Hat", wordTh: "แฮท (หมวก)" },
  { letter: "I", phonetic: "ไอ", word: "Ice", wordTh: "ไอซ์ (น้ำแข็ง)" },
  { letter: "J", phonetic: "เจ", word: "Jump", wordTh: "จัมพ์ (กระโดด)" },
  { letter: "K", phonetic: "เค", word: "Kite", wordTh: "ไคท์ (ว่าว)" },
  { letter: "L", phonetic: "แอล", word: "Lion", wordTh: "ไล-ออน (สิงโต)" },
  { letter: "M", phonetic: "เอ็ม", word: "Moon", wordTh: "มูน (พระจันทร์)" },
  { letter: "N", phonetic: "เอ็น", word: "Nose", wordTh: "โนส (จมูก)" },
  { letter: "O", phonetic: "โอ", word: "Orange", wordTh: "ออเรนจ์ (ส้ม)" },
  { letter: "P", phonetic: "พี", word: "Pig", wordTh: "พิก (หมู)" },
  { letter: "Q", phonetic: "คิว", word: "Queen", wordTh: "ควีน (ราชินี)" },
  { letter: "R", phonetic: "อาร์", word: "Red", wordTh: "เร็ด (สีแดง)" },
  { letter: "S", phonetic: "เอส", word: "Sun", wordTh: "ซัน (พระอาทิตย์)" },
  { letter: "T", phonetic: "ที", word: "Tree", wordTh: "ทรี (ต้นไม้)" },
  { letter: "U", phonetic: "ยู", word: "Umbrella", wordTh: "อัมเบรลลา (ร่ม)" },
  { letter: "V", phonetic: "วี", word: "Van", wordTh: "แวน (รถตู้)" },
  { letter: "W", phonetic: "ดับเบิลยู", word: "Water", wordTh: "วอเตอร์ (น้ำ)" },
  { letter: "X", phonetic: "เอ็กซ์", word: "X-ray", wordTh: "เอ็กซเรย์" },
  { letter: "Y", phonetic: "วาย", word: "Yellow", wordTh: "เยลโล่ (สีเหลือง)" },
  { letter: "Z", phonetic: "แซด / ซี", word: "Zoo", wordTh: "ซู (สวนสัตว์)" },
];

const VOWELS = ["A", "E", "I", "O", "U"];

export function AlphabetContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>26 ตัวอักษร · 26 letters</Eyebrow>
        <SubHeading>A-Z with one word per letter.</SubHeading>
        <p className="thai text-stone-600">
          ภาษาอังกฤษมี 26 ตัวอักษร แบ่งเป็นพยัญชนะและสระ
          ตัวอักษรสีเขียวคือสระ (A, E, I, O, U) ที่เหลือคือพยัญชนะ
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {LETTERS.map((l) => (
            <div
              key={l.letter}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
            >
              <div
                className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl text-2xl font-black ${
                  VOWELS.includes(l.letter)
                    ? "bg-mint-500 text-ink-900"
                    : "bg-stone-100 text-stone-800"
                }`}
              >
                {l.letter}
              </div>
              <div className="min-w-0">
                <div className="thai text-xs text-mint-700">{l.phonetic}</div>
                <div className="font-semibold text-stone-900">{l.word}</div>
                <div className="thai text-[11px] text-stone-500">
                  {l.wordTh}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>สระ · Vowels</Eyebrow>
        <SubHeading>A, E, I, O, U</SubHeading>
        <Callout label="Why vowels matter">
          <p className="thai">
            สระคือเสียงที่ออกมาโดยไม่มีการปิดปาก ทุกคำในภาษาอังกฤษ
            ต้องมีสระอย่างน้อยหนึ่งตัว เช่น <strong>cat</strong> มีสระ A,{" "}
            <strong>dog</strong> มีสระ O
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>ลองฝึก · Practice</Eyebrow>
        <SubHeading>Say each letter out loud.</SubHeading>
        <p className="thai text-stone-600">
          เริ่มจากร้องเพลง ABC song
          แล้วค่อยๆ ฝึกออกเสียงแต่ละตัวให้ชัด
          ฝึกวันละ 5 นาทีก็พอ
        </p>
      </section>
    </div>
  );
}

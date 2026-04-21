import { EnRow, Eyebrow, SubHeading } from "../shell";

const GROUPS: { label: string; labelTh: string; animals: { emoji: string; en: string; phonetic: string; th: string }[] }[] = [
  {
    label: "Pets · สัตว์เลี้ยง",
    labelTh: "",
    animals: [
      { emoji: "🐶", en: "Dog", phonetic: "ด็อก", th: "หมา" },
      { emoji: "🐱", en: "Cat", phonetic: "แคท", th: "แมว" },
      { emoji: "🐰", en: "Rabbit", phonetic: "แร็บ-บิท", th: "กระต่าย" },
      { emoji: "🐹", en: "Hamster", phonetic: "แฮม-สเตอร์", th: "หนูแฮมสเตอร์" },
      { emoji: "🐦", en: "Bird", phonetic: "เบิร์ด", th: "นก" },
      { emoji: "🐠", en: "Fish", phonetic: "ฟิช", th: "ปลา" },
    ],
  },
  {
    label: "Farm · ฟาร์ม",
    labelTh: "",
    animals: [
      { emoji: "🐄", en: "Cow", phonetic: "คาว", th: "วัว" },
      { emoji: "🐖", en: "Pig", phonetic: "พิก", th: "หมู" },
      { emoji: "🐓", en: "Chicken", phonetic: "ชิค-เก้น", th: "ไก่" },
      { emoji: "🦆", en: "Duck", phonetic: "ดัก", th: "เป็ด" },
      { emoji: "🐐", en: "Goat", phonetic: "โกท", th: "แพะ" },
      { emoji: "🐑", en: "Sheep", phonetic: "ชีพ", th: "แกะ" },
      { emoji: "🐴", en: "Horse", phonetic: "ฮอร์ส", th: "ม้า" },
      { emoji: "🐝", en: "Bee", phonetic: "บี", th: "ผึ้ง" },
    ],
  },
  {
    label: "Zoo & wild · สวนสัตว์และป่า",
    labelTh: "",
    animals: [
      { emoji: "🐘", en: "Elephant", phonetic: "เอ-เล-เฟ่นท์", th: "ช้าง" },
      { emoji: "🦁", en: "Lion", phonetic: "ไล-ออน", th: "สิงโต" },
      { emoji: "🐯", en: "Tiger", phonetic: "ไท-เก้อร์", th: "เสือ" },
      { emoji: "🐒", en: "Monkey", phonetic: "มัง-กี้", th: "ลิง" },
      { emoji: "🐻", en: "Bear", phonetic: "แบร์", th: "หมี" },
      { emoji: "🐺", en: "Wolf", phonetic: "วูลฟ์", th: "หมาป่า" },
      { emoji: "🦒", en: "Giraffe", phonetic: "จิ-ราฟ", th: "ยีราฟ" },
      { emoji: "🦓", en: "Zebra", phonetic: "ซี-บรา", th: "ม้าลาย" },
      { emoji: "🐊", en: "Crocodile", phonetic: "ครอก-โค-ไดล์", th: "จระเข้" },
      { emoji: "🐍", en: "Snake", phonetic: "สเนค", th: "งู" },
    ],
  },
  {
    label: "Sea · ทะเล",
    labelTh: "",
    animals: [
      { emoji: "🐬", en: "Dolphin", phonetic: "ดอล-ฟิน", th: "ปลาโลมา" },
      { emoji: "🐋", en: "Whale", phonetic: "เวล", th: "ปลาวาฬ" },
      { emoji: "🦈", en: "Shark", phonetic: "ชาร์ค", th: "ปลาฉลาม" },
      { emoji: "🐢", en: "Turtle", phonetic: "เทอร์-เทิ่ล", th: "เต่า" },
      { emoji: "🦀", en: "Crab", phonetic: "แค็บ", th: "ปู" },
    ],
  },
];

export function AnimalsContent() {
  return (
    <div className="space-y-10">
      {GROUPS.map((g) => (
        <section key={g.label} className="space-y-3">
          <Eyebrow>{g.label}</Eyebrow>
          <SubHeading>{g.animals.length} animals</SubHeading>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {g.animals.map((a) => (
              <div
                key={a.en}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
                  {a.emoji}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-stone-900">{a.en}</div>
                  <div className="thai text-xs text-mint-700">{a.phonetic}</div>
                  <div className="thai text-[11px] text-stone-500">{a.th}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

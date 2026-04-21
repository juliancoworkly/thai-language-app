import { EnRow, Eyebrow, SubHeading } from "../shell";

const GROUPS: { label: string; parts: { en: string; phonetic: string; th: string }[] }[] = [
  {
    label: "Head · ศีรษะ",
    parts: [
      { en: "Head", phonetic: "เฮ็ด", th: "หัว" },
      { en: "Hair", phonetic: "แฮร์", th: "ผม" },
      { en: "Face", phonetic: "เฟซ", th: "หน้า" },
      { en: "Eye", phonetic: "อาย", th: "ตา" },
      { en: "Ear", phonetic: "เอียร์", th: "หู" },
      { en: "Nose", phonetic: "โนส", th: "จมูก" },
      { en: "Mouth", phonetic: "เมาธ์", th: "ปาก" },
      { en: "Teeth", phonetic: "ทีธ", th: "ฟัน" },
      { en: "Tongue", phonetic: "ทัง", th: "ลิ้น" },
      { en: "Lips", phonetic: "ลิพส์", th: "ริมฝีปาก" },
      { en: "Cheek", phonetic: "ชีค", th: "แก้ม" },
      { en: "Chin", phonetic: "ชิน", th: "คาง" },
    ],
  },
  {
    label: "Upper body · ส่วนบน",
    parts: [
      { en: "Neck", phonetic: "เน็ค", th: "คอ" },
      { en: "Shoulder", phonetic: "โชล-เด้อร์", th: "ไหล่" },
      { en: "Chest", phonetic: "เชสท์", th: "หน้าอก" },
      { en: "Back", phonetic: "แบ็ค", th: "หลัง" },
      { en: "Arm", phonetic: "อาร์ม", th: "แขน" },
      { en: "Elbow", phonetic: "เอล-โบ", th: "ข้อศอก" },
      { en: "Hand", phonetic: "แฮนด์", th: "มือ" },
      { en: "Finger", phonetic: "ฟิง-เก้อร์", th: "นิ้ว" },
      { en: "Stomach / Tummy", phonetic: "สตัม-มัค / ทัม-มี่", th: "ท้อง" },
    ],
  },
  {
    label: "Lower body · ส่วนล่าง",
    parts: [
      { en: "Leg", phonetic: "เล็ก", th: "ขา" },
      { en: "Knee", phonetic: "นี", th: "เข่า" },
      { en: "Foot / Feet", phonetic: "ฟุต / ฟีท", th: "เท้า / เท้า (หลายข้าง)" },
      { en: "Toe", phonetic: "โท", th: "นิ้วเท้า" },
      { en: "Heel", phonetic: "ฮีล", th: "ส้นเท้า" },
    ],
  },
  {
    label: "Feelings in the body · ความรู้สึก",
    parts: [
      { en: "I have a headache", phonetic: "ไอ-แฮฟ-อะ-เฮด-เอค", th: "ปวดหัว" },
      { en: "My stomach hurts", phonetic: "มาย-สตัม-มัค-เฮิร์ทส์", th: "ปวดท้อง" },
      { en: "I'm tired", phonetic: "ไอม์-ไทร์ด", th: "เหนื่อย" },
      { en: "I'm hungry", phonetic: "ไอม์-ฮัง-กรี่", th: "หิว" },
    ],
  },
];

export function BodyContent() {
  return (
    <div className="space-y-10">
      {GROUPS.map((g) => (
        <section key={g.label} className="space-y-3">
          <Eyebrow>{g.label}</Eyebrow>
          <div className="grid gap-2 sm:grid-cols-2">
            {g.parts.map((p) => (
              <EnRow
                key={p.en}
                en={p.en}
                phonetic={p.phonetic}
                th={p.th}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

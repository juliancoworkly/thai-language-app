import { EnRow, Eyebrow, SubHeading } from "../shell";

const GROUPS: { label: string; members: { en: string; phonetic: string; th: string }[] }[] = [
  {
    label: "Parents · พ่อแม่",
    members: [
      { en: "Father / Dad", phonetic: "ฟา-เธ่อร์ / แดด", th: "พ่อ" },
      { en: "Mother / Mum", phonetic: "มา-เธ่อร์ / มัม", th: "แม่" },
      { en: "Parents", phonetic: "แพ-เรนทส์", th: "พ่อแม่ (รวม)" },
    ],
  },
  {
    label: "Siblings · พี่น้อง",
    members: [
      { en: "Brother", phonetic: "บรา-เธ่อร์", th: "พี่ชาย / น้องชาย" },
      { en: "Sister", phonetic: "ซิส-เตอร์", th: "พี่สาว / น้องสาว" },
      { en: "Older brother", phonetic: "โอล-เด้อร์-บรา-เธ่อร์", th: "พี่ชาย" },
      { en: "Younger sister", phonetic: "ยัง-เกอร์-ซิส-เตอร์", th: "น้องสาว" },
    ],
  },
  {
    label: "Grandparents · ปู่ย่าตายาย",
    members: [
      { en: "Grandfather / Grandpa", phonetic: "แกรนด์-ฟา-เธ่อร์ / แกรนด์-พ่า", th: "ปู่ / ตา" },
      { en: "Grandmother / Grandma", phonetic: "แกรนด์-มา-เธ่อร์ / แกรนด์-ม่า", th: "ย่า / ยาย" },
    ],
  },
  {
    label: "Extended · ญาติ",
    members: [
      { en: "Uncle", phonetic: "อัง-เคิ่ล", th: "ลุง / น้าชาย / อาชาย" },
      { en: "Aunt", phonetic: "อานท์", th: "ป้า / น้าสาว / อาสาว" },
      { en: "Cousin", phonetic: "คัซ-ซิ่น", th: "ลูกพี่ลูกน้อง" },
      { en: "Nephew", phonetic: "เน็พ-ฟิว", th: "หลานชาย" },
      { en: "Niece", phonetic: "นีซ", th: "หลานสาว" },
    ],
  },
  {
    label: "Partner & children · คู่ครองและลูก",
    members: [
      { en: "Husband", phonetic: "ฮัส-แบนด์", th: "สามี" },
      { en: "Wife", phonetic: "ไวฟ์", th: "ภรรยา" },
      { en: "Son", phonetic: "ซัน", th: "ลูกชาย" },
      { en: "Daughter", phonetic: "ดอ-เทอร์", th: "ลูกสาว" },
      { en: "Baby", phonetic: "เบ-บี้", th: "ทารก" },
    ],
  },
];

export function FamilyContent() {
  return (
    <div className="space-y-10">
      {GROUPS.map((g) => (
        <section key={g.label} className="space-y-3">
          <Eyebrow>{g.label}</Eyebrow>
          <div className="grid gap-2 sm:grid-cols-2">
            {g.members.map((m) => (
              <EnRow
                key={m.en}
                en={m.en}
                phonetic={m.phonetic}
                th={m.th}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

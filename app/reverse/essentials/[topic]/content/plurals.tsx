import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const REGULAR = [
  { sing: "cat", plur: "cats", th: "แมว" },
  { sing: "book", plur: "books", th: "หนังสือ" },
  { sing: "friend", plur: "friends", th: "เพื่อน" },
  { sing: "day", plur: "days", th: "วัน" },
];

const ES_RULES = [
  { sing: "box", plur: "boxes", th: "กล่อง", note: "ลงท้าย -x" },
  { sing: "bus", plur: "buses", th: "รถเมล์", note: "ลงท้าย -s" },
  { sing: "dish", plur: "dishes", th: "จาน", note: "ลงท้าย -sh" },
  { sing: "watch", plur: "watches", th: "นาฬิกา", note: "ลงท้าย -ch" },
  { sing: "baby", plur: "babies", th: "ทารก", note: "y → ies" },
  { sing: "knife", plur: "knives", th: "มีด", note: "f → ves" },
];

const IRREGULAR = [
  { sing: "child", plur: "children", th: "เด็ก" },
  { sing: "man", plur: "men", th: "ผู้ชาย" },
  { sing: "woman", plur: "women", th: "ผู้หญิง" },
  { sing: "foot", plur: "feet", th: "เท้า" },
  { sing: "tooth", plur: "teeth", th: "ฟัน" },
  { sing: "mouse", plur: "mice", th: "หนู" },
  { sing: "person", plur: "people", th: "คน" },
  { sing: "fish", plur: "fish", th: "ปลา (ไม่เปลี่ยน)" },
  { sing: "sheep", plur: "sheep", th: "แกะ (ไม่เปลี่ยน)" },
];

const POSSESSIVE = [
  { en: "Dad's car", phonetic: "แดดส์-คาร์", th: "รถของพ่อ" },
  { en: "My friend's house", phonetic: "มาย-เฟรนด์ส์-เฮาส์", th: "บ้านของเพื่อน" },
  { en: "The cat's tail", phonetic: "เดอะ-แคทส์-เทล", th: "หางของแมว" },
  { en: "The teacher's bag", phonetic: "เดอะ-ที-เช่อร์ส์-แบ็ก", th: "กระเป๋าของครู" },
];

export function PluralsContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>สองความหมายของ 's'</Eyebrow>
        <SubHeading>Plurals and possessives look the same. They aren't.</SubHeading>
        <p className="thai text-stone-600">
          ภาษาไทยไม่แยกเอกพจน์กับพหูพจน์ "แมว" คือแมวตัวเดียวหรือหลายตัวก็ได้
          ภาษาอังกฤษต้องเติม -s สำหรับพหูพจน์ และเพิ่ม 's เพื่อบอกว่าเป็นของใคร
        </p>
        <Callout label="ต่างกันอย่างไร">
          <p><strong>cats</strong> <span className="thai text-stone-500">= แมวหลายตัว (พหูพจน์)</span></p>
          <p className="mt-1"><strong>cat's</strong> <span className="thai text-stone-500">= ของแมว (กรรมสิทธิ์)</span></p>
          <p className="mt-2 thai text-xs text-stone-500">
            ต่างกันแค่เครื่องหมาย apostrophe (') ตัวเดียว แต่ความหมายคนละเรื่องเลย
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>พหูพจน์ธรรมดา · Regular plurals</Eyebrow>
        <SubHeading>Just add -s.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {REGULAR.map((w) => (
            <div
              key={w.sing}
              className="flex items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-lg font-bold text-stone-900">{w.sing}</span>
                <span className="text-stone-400">→</span>
                <span className="text-lg font-bold text-mint-700">{w.plur}</span>
              </div>
              <span className="thai text-xs text-stone-500">{w.th}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>เติม -es หรือเปลี่ยนรูป · -es and y→ies rules</Eyebrow>
        <SubHeading>When -s alone isn't enough.</SubHeading>
        <div className="grid gap-2">
          {ES_RULES.map((w) => (
            <div
              key={w.sing}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-bold text-stone-900">{w.sing}</span>
                <span className="text-stone-400">→</span>
                <span className="font-bold text-mint-700">{w.plur}</span>
              </div>
              <div className="text-right">
                <div className="thai text-xs text-stone-500">{w.th}</div>
                <div className="thai text-[10px] text-stone-400">{w.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ผิดปกติ · Irregular plurals</Eyebrow>
        <SubHeading>No rule. Just memorise these.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {IRREGULAR.map((w) => (
            <div
              key={w.sing}
              className="flex items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-bold text-stone-900">{w.sing}</span>
                <span className="text-stone-400">→</span>
                <span className="font-bold text-mint-700">{w.plur}</span>
              </div>
              <span className="thai text-xs text-stone-500">{w.th}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>กรรมสิทธิ์ · Possessive 's</Eyebrow>
        <SubHeading>The apostrophe that means "of".</SubHeading>
        <p className="thai text-stone-600">
          สูตร: [คน/สิ่งที่เป็นเจ้าของ] + <strong>'s</strong> + [ของ]
          <br />
          เทียบกับภาษาไทยคือใช้คำว่า "ของ"
        </p>
        <div className="grid gap-2">
          {POSSESSIVE.map((p) => (
            <EnRow key={p.en} en={p.en} phonetic={p.phonetic} th={p.th} />
          ))}
        </div>
        <Callout label="แล้วของหลายคนล่ะ?">
          <p className="thai">
            ถ้าเจ้าของเป็นพหูพจน์ลงท้ายด้วย s อยู่แล้ว ใช้แค่ apostrophe ตัวเดียว
          </p>
          <p className="mt-2">
            <strong>the boys' room</strong> <span className="thai text-stone-500">ห้องของเด็กผู้ชายหลายคน</span>
          </p>
          <p className="mt-1">
            <strong>my parents' car</strong> <span className="thai text-stone-500">รถของพ่อแม่</span>
          </p>
        </Callout>
      </section>
    </div>
  );
}

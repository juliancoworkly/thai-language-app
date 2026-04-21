import { Callout, Eyebrow, SubHeading } from "../shell";

const JOBS = [
  { emoji: "👨‍⚕️", en: "Doctor", phonetic: "ด็อก-เต้อร์", th: "หมอ" },
  { emoji: "👩‍⚕️", en: "Nurse", phonetic: "เนิร์ส", th: "พยาบาล" },
  { emoji: "🧑‍🏫", en: "Teacher", phonetic: "ที-เช่อร์", th: "ครู" },
  { emoji: "🧑‍🎓", en: "Student", phonetic: "สตู-เดนท์", th: "นักเรียน" },
  { emoji: "👨‍🍳", en: "Cook / Chef", phonetic: "คุ้ก / เชฟ", th: "พ่อครัว" },
  { emoji: "🍽️", en: "Waiter / Waitress", phonetic: "เว-เต้อร์ / เวท-เทรส", th: "พนักงานเสิร์ฟ" },
  { emoji: "🚕", en: "Driver", phonetic: "ไดร-เว่อร์", th: "คนขับรถ" },
  { emoji: "✈️", en: "Pilot", phonetic: "ไพ-ล็อท", th: "นักบิน" },
  { emoji: "👮", en: "Police officer", phonetic: "โพ-ลิส-อ๊อฟ-ฟิ-เซ่อร์", th: "ตำรวจ" },
  { emoji: "🧑‍🚒", en: "Firefighter", phonetic: "ไฟ-ไฟท์-เท่อร์", th: "นักดับเพลิง" },
  { emoji: "🧑‍🌾", en: "Farmer", phonetic: "ฟาร์ม-เม่อร์", th: "ชาวนา / เกษตรกร" },
  { emoji: "🛠️", en: "Engineer", phonetic: "เอ็น-จิ-เนียร์", th: "วิศวกร" },
  { emoji: "💻", en: "Programmer", phonetic: "โพร-แกรม-เม่อร์", th: "โปรแกรมเมอร์" },
  { emoji: "🎨", en: "Artist", phonetic: "อาร์-ทิสต์", th: "ศิลปิน" },
  { emoji: "🎤", en: "Singer", phonetic: "ซิง-เง่อร์", th: "นักร้อง" },
  { emoji: "⚽", en: "Athlete", phonetic: "แอธ-ลีท", th: "นักกีฬา" },
  { emoji: "📰", en: "Journalist", phonetic: "เจอร์-น่ะ-ลิสต์", th: "นักข่าว" },
  { emoji: "🏪", en: "Shopkeeper", phonetic: "ช็อพ-คี-เพ่อร์", th: "เจ้าของร้าน" },
  { emoji: "🧑‍💼", en: "Businessperson", phonetic: "บิส-ซิ-เนส-เพอ-เสิ่น", th: "นักธุรกิจ" },
  { emoji: "⚖️", en: "Lawyer", phonetic: "ลอ-เย่อร์", th: "ทนาย" },
  { emoji: "🧑‍🔬", en: "Scientist", phonetic: "ไซ-เอน-ทิสต์", th: "นักวิทยาศาสตร์" },
  { emoji: "💇", en: "Hairdresser", phonetic: "แฮร์-เดรส-เซ่อร์", th: "ช่างตัดผม" },
];

export function JobsContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>อาชีพ · Jobs & professions</Eyebrow>
        <SubHeading>What does your family do?</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((j) => (
            <div
              key={j.en}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {j.emoji}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-stone-900">{j.en}</div>
                <div className="thai text-xs text-mint-700">{j.phonetic}</div>
                <div className="thai text-[11px] text-stone-500">{j.th}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ใช้ในการสนทนา · In conversation</Eyebrow>
        <Callout label="ถามและตอบ · Ask & answer">
          <p>
            <strong>What do you do?</strong>{" "}
            <span className="thai text-stone-500">ทำงานอะไร</span>
          </p>
          <p className="mt-1">
            <strong>I'm a teacher.</strong>{" "}
            <span className="thai text-stone-500">ฉันเป็นครู</span>
          </p>
          <p className="mt-3">
            <strong>What does your dad do?</strong>{" "}
            <span className="thai text-stone-500">พ่อของคุณทำงานอะไร</span>
          </p>
          <p className="mt-1">
            <strong>He is a doctor.</strong>{" "}
            <span className="thai text-stone-500">เขาเป็นหมอ</span>
          </p>
        </Callout>
        <Callout label="หมายเหตุ · Note">
          <p className="thai">
            สังเกต: ใช้ <strong>a</strong> หรือ <strong>an</strong> หน้าชื่ออาชีพเสมอ
            <br />
            <strong>an</strong> engineer (เพราะ e เป็นเสียงสระ)
            <br />
            <strong>a</strong> doctor (เพราะ d เป็นเสียงพยัญชนะ)
          </p>
        </Callout>
      </section>
    </div>
  );
}

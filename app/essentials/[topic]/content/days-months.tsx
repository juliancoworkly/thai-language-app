import { Callout, Eyebrow, LinkCta, Row, SubHeading } from "./shell";

const DAYS = [
  { thai: "วันจันทร์", phonetic: "wan-jan", en: "Monday", color: "สีเหลือง (yellow)" },
  { thai: "วันอังคาร", phonetic: "wan-ang-khaan", en: "Tuesday", color: "สีชมพู (pink)" },
  { thai: "วันพุธ", phonetic: "wan-phút", en: "Wednesday", color: "สีเขียว (green)" },
  { thai: "วันพฤหัสบดี", phonetic: "wan-phá-rɯ́-hàt", en: "Thursday", color: "สีส้ม (orange)" },
  { thai: "วันศุกร์", phonetic: "wan-sùk", en: "Friday", color: "สีฟ้า (light blue)" },
  { thai: "วันเสาร์", phonetic: "wan-sǎo", en: "Saturday", color: "สีม่วง (purple)" },
  { thai: "วันอาทิตย์", phonetic: "wan-aa-thít", en: "Sunday", color: "สีแดง (red)" },
];

const MONTHS = [
  { thai: "มกราคม", phonetic: "má-gà-raa-khom", en: "January", short: "ม.ค." },
  { thai: "กุมภาพันธ์", phonetic: "gum-phaa-phan", en: "February", short: "ก.พ." },
  { thai: "มีนาคม", phonetic: "mii-naa-khom", en: "March", short: "มี.ค." },
  { thai: "เมษายน", phonetic: "mee-sǎa-yon", en: "April", short: "เม.ย." },
  { thai: "พฤษภาคม", phonetic: "phrɯ́t-sà-phaa-khom", en: "May", short: "พ.ค." },
  { thai: "มิถุนายน", phonetic: "mí-thù-naa-yon", en: "June", short: "มิ.ย." },
  { thai: "กรกฎาคม", phonetic: "gà-rá-gà-daa-khom", en: "July", short: "ก.ค." },
  { thai: "สิงหาคม", phonetic: "sǐng-hǎa-khom", en: "August", short: "ส.ค." },
  { thai: "กันยายน", phonetic: "gan-yaa-yon", en: "September", short: "ก.ย." },
  { thai: "ตุลาคม", phonetic: "dtù-laa-khom", en: "October", short: "ต.ค." },
  { thai: "พฤศจิกายน", phonetic: "phrɯ́t-sà-jì-gaa-yon", en: "November", short: "พ.ย." },
  { thai: "ธันวาคม", phonetic: "than-waa-khom", en: "December", short: "ธ.ค." },
];

export function DaysMonthsEssential() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>Days of the week · วัน</Eyebrow>
        <SubHeading>Every day has a color in Thailand.</SubHeading>
        <p className="text-stone-600">
          Thai days all start with <strong className="thai">วัน</strong> (wan,
          meaning "day") followed by the planet name. The Thai calendar
          assigns each day a color; people still wear it to bring luck.
        </p>
        <div className="grid gap-2">
          {DAYS.map((d) => (
            <div
              key={d.thai}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="thai text-xl font-bold text-stone-900">
                  {d.thai}
                </span>
                <span className="text-sm text-stone-500">{d.phonetic}</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-stone-800">{d.en}</span>
                <span className="thai text-xs text-stone-400">{d.color}</span>
              </div>
            </div>
          ))}
        </div>
        <Callout label="In conversation">
          <p>
            <span className="thai font-semibold">วันนี้วันอะไร?</span>{" "}
            <span className="text-stone-500">(wan-níi wan à-rai?)</span>{" "}
            &mdash; What day is today?
          </p>
          <p className="mt-1">
            <span className="thai font-semibold">วันจันทร์ครับ/ค่ะ</span>{" "}
            <span className="text-stone-500">(wan-jan khráp/khâ)</span>{" "}
            &mdash; Monday.
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Months of the year · เดือน</Eyebrow>
        <SubHeading>Twelve months, three suffix patterns.</SubHeading>
        <p className="text-stone-600">
          Months ending in <strong>-คม</strong> have 31 days. Ending in{" "}
          <strong>-ยน</strong> have 30 days. February,{" "}
          <strong className="thai">กุมภาพันธ์</strong>, is the only one ending
          in <strong>-พันธ์</strong> and has 28 or 29.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {MONTHS.map((m) => (
            <Row
              key={m.thai}
              thai={m.thai}
              phonetic={m.phonetic}
              meaning={m.en}
              note={m.short}
            />
          ))}
        </div>
        <Callout label="Dates in Thai">
          <p>
            Format is day + month + year:{" "}
            <span className="thai font-semibold">
              วันที่ ๒๐ เมษายน ๒๕๖๙
            </span>{" "}
            <span className="text-stone-500">
              (wan-thîi yîi-sìp mee-sǎa-yon sɔ̌ɔng-phan-hâa-rɔ́ɔi-hòk-sìp-gâao)
            </span>
            &nbsp;— 20 April 2569 BE (2026 CE).
          </p>
          <p className="mt-2 text-xs text-stone-500">
            Heads up: Thai years are in the Buddhist Era (BE), which is 543
            years ahead of the Common Era.
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <SubHeading>Lock it in.</SubHeading>
        <div className="flex flex-wrap gap-3">
          <LinkCta href="/games/flashcards">🃏 Flashcards →</LinkCta>
          <LinkCta href="/games/conversation">💬 Conversation drill →</LinkCta>
        </div>
      </section>
    </div>
  );
}

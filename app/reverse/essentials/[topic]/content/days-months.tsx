import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const DAYS = [
  { en: "Monday", phonetic: "มัน-เดย์", th: "วันจันทร์", short: "Mon" },
  { en: "Tuesday", phonetic: "ทิวส์-เดย์", th: "วันอังคาร", short: "Tue" },
  { en: "Wednesday", phonetic: "เว็นซ์-เดย์", th: "วันพุธ", short: "Wed" },
  { en: "Thursday", phonetic: "เธอร์ส-เดย์", th: "วันพฤหัสบดี", short: "Thu" },
  { en: "Friday", phonetic: "ไฟร-เดย์", th: "วันศุกร์", short: "Fri" },
  { en: "Saturday", phonetic: "แซท-เทอร์-เดย์", th: "วันเสาร์", short: "Sat" },
  { en: "Sunday", phonetic: "ซัน-เดย์", th: "วันอาทิตย์", short: "Sun" },
];

const MONTHS = [
  { en: "January", phonetic: "แจน-นู-อา-รี่", th: "มกราคม", short: "Jan" },
  { en: "February", phonetic: "เฟ็บ-รู-อา-รี่", th: "กุมภาพันธ์", short: "Feb" },
  { en: "March", phonetic: "มาร์ช", th: "มีนาคม", short: "Mar" },
  { en: "April", phonetic: "เอ-พริล", th: "เมษายน", short: "Apr" },
  { en: "May", phonetic: "เมย์", th: "พฤษภาคม", short: "May" },
  { en: "June", phonetic: "จูน", th: "มิถุนายน", short: "Jun" },
  { en: "July", phonetic: "จู-ลาย", th: "กรกฎาคม", short: "Jul" },
  { en: "August", phonetic: "ออ-กัสท์", th: "สิงหาคม", short: "Aug" },
  { en: "September", phonetic: "เซ็พ-เท็ม-เบ้อร์", th: "กันยายน", short: "Sep" },
  { en: "October", phonetic: "ออค-โท-เบ้อร์", th: "ตุลาคม", short: "Oct" },
  { en: "November", phonetic: "โน-เว็ม-เบ้อร์", th: "พฤศจิกายน", short: "Nov" },
  { en: "December", phonetic: "ดี-เซ็ม-เบ้อร์", th: "ธันวาคม", short: "Dec" },
];

export function DaysMonthsContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>วันในสัปดาห์ · Days of the week</Eyebrow>
        <SubHeading>Seven days, short forms in brackets.</SubHeading>
        <div className="grid gap-2">
          {DAYS.map((d) => (
            <EnRow
              key={d.en}
              en={d.en}
              phonetic={d.phonetic}
              th={d.th}
              note={d.short}
            />
          ))}
        </div>
        <Callout label="ใช้บ่อย · Common phrases">
          <p>
            <strong>What day is today?</strong>{" "}
            <span className="thai text-stone-500">(วอท-เดย์-อิส-ทู-เดย์) · วันนี้วันอะไร</span>
          </p>
          <p className="mt-1">
            <strong>Today is Monday.</strong>{" "}
            <span className="thai text-stone-500">(ทู-เดย์-อิส-มัน-เดย์) · วันนี้วันจันทร์</span>
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>เดือน · Months</Eyebrow>
        <SubHeading>Twelve months of the year.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {MONTHS.map((m) => (
            <EnRow
              key={m.en}
              en={m.en}
              phonetic={m.phonetic}
              th={m.th}
              note={m.short}
            />
          ))}
        </div>
        <Callout label="วันเกิด · Birthdays">
          <p>
            <strong>When is your birthday?</strong>{" "}
            <span className="thai text-stone-500">วันเกิดเมื่อไหร่</span>
          </p>
          <p className="mt-1">
            <strong>My birthday is in April.</strong>{" "}
            <span className="thai text-stone-500">วันเกิดเดือนเมษายน</span>
          </p>
        </Callout>
      </section>
    </div>
  );
}

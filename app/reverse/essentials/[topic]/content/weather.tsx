import { Callout, EnRow, Eyebrow, SubHeading } from "../shell";

const WEATHER = [
  { emoji: "☀️", en: "Sunny", phonetic: "ซัน-นี่", th: "แดดออก" },
  { emoji: "☁️", en: "Cloudy", phonetic: "เคลาด-ดี้", th: "มีเมฆ" },
  { emoji: "🌧️", en: "Rainy", phonetic: "เร-นี่", th: "ฝนตก" },
  { emoji: "⛈️", en: "Stormy", phonetic: "สตอร์ม-มี่", th: "พายุ" },
  { emoji: "🌨️", en: "Snowy", phonetic: "สโน-วี่", th: "หิมะตก" },
  { emoji: "💨", en: "Windy", phonetic: "วิน-ดี้", th: "ลมแรง" },
  { emoji: "🌫️", en: "Foggy", phonetic: "ฟ็อก-กี้", th: "หมอกลง" },
  { emoji: "🌡️", en: "Hot", phonetic: "ฮอท", th: "ร้อน" },
  { emoji: "🧊", en: "Cold", phonetic: "โคลด์", th: "หนาว" },
  { emoji: "💧", en: "Humid", phonetic: "ฮิว-มิด", th: "ชื้น" },
  { emoji: "🌤️", en: "Warm", phonetic: "วอร์ม", th: "อบอุ่น" },
  { emoji: "❄️", en: "Cool", phonetic: "คูล", th: "เย็น" },
];

const SEASONS = [
  { en: "Hot season", phonetic: "ฮอท-ซี-ซั่น", th: "หน้าร้อน" },
  { en: "Rainy season", phonetic: "เร-นี่-ซี-ซั่น", th: "หน้าฝน" },
  { en: "Cool season", phonetic: "คูล-ซี-ซั่น", th: "หน้าหนาว" },
  { en: "Spring", phonetic: "สปริง", th: "ฤดูใบไม้ผลิ" },
  { en: "Summer", phonetic: "ซัม-เม้อร์", th: "ฤดูร้อน" },
  { en: "Autumn / Fall", phonetic: "ออ-ทั่ม / ฟอลล์", th: "ฤดูใบไม้ร่วง" },
  { en: "Winter", phonetic: "วิน-เต้อร์", th: "ฤดูหนาว" },
];

export function WeatherContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>อากาศ · Weather words</Eyebrow>
        <SubHeading>Twelve describing words.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {WEATHER.map((w) => (
            <div
              key={w.en}
              className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
                {w.emoji}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-stone-900">{w.en}</div>
                <div className="thai text-xs text-mint-700">{w.phonetic}</div>
                <div className="thai text-[11px] text-stone-500">{w.th}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ฤดู · Seasons</Eyebrow>
        <SubHeading>Thai has three, English has four.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {SEASONS.map((s) => (
            <EnRow key={s.en} en={s.en} phonetic={s.phonetic} th={s.th} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ใช้ในการสนทนา · In conversation</Eyebrow>
        <Callout label="Common phrases">
          <p>
            <strong>How's the weather today?</strong>{" "}
            <span className="thai text-stone-500">อากาศวันนี้เป็นยังไง</span>
          </p>
          <p className="mt-1">
            <strong>It's hot and sunny.</strong>{" "}
            <span className="thai text-stone-500">อากาศร้อนและแดดออก</span>
          </p>
          <p className="mt-1">
            <strong>It's raining.</strong>{" "}
            <span className="thai text-stone-500">ฝนกำลังตก</span>
          </p>
        </Callout>
      </section>
    </div>
  );
}

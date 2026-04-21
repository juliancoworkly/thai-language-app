import { Callout, Eyebrow, LinkCta, Row, SubHeading } from "./shell";

const PERIODS = [
  {
    label: "Early morning",
    hours: "1 AM — 5 AM",
    thai: "ตี",
    phonetic: "dtii",
    example: "ตีสี่ = 4 AM",
  },
  {
    label: "Morning",
    hours: "6 AM — 11 AM",
    thai: "โมงเช้า",
    phonetic: "moong-cháao",
    example: "หกโมงเช้า = 6 AM",
  },
  {
    label: "Noon",
    hours: "12 PM",
    thai: "เที่ยง",
    phonetic: "thîiang",
    example: "เที่ยงวัน = noon sharp",
  },
  {
    label: "Afternoon",
    hours: "1 PM — 4 PM",
    thai: "บ่าย",
    phonetic: "bàai",
    example: "บ่ายสอง = 2 PM",
  },
  {
    label: "Late afternoon",
    hours: "4 PM — 6 PM",
    thai: "โมงเย็น",
    phonetic: "moong-yen",
    example: "ห้าโมงเย็น = 5 PM",
  },
  {
    label: "Night",
    hours: "7 PM — 11 PM",
    thai: "ทุ่ม",
    phonetic: "thûm",
    example: "สองทุ่ม = 8 PM",
  },
  {
    label: "Midnight",
    hours: "12 AM",
    thai: "เที่ยงคืน",
    phonetic: "thîiang-khɯɯn",
    example: "เที่ยงคืน = midnight",
  },
];

const SOON_WORDS = [
  { thai: "ตอนนี้", phonetic: "dtɔɔn-níi", meaning: "now" },
  { thai: "เดี๋ยวนี้", phonetic: "dǐao-níi", meaning: "right now" },
  { thai: "เมื่อกี้", phonetic: "mɯ̂ɯa-gíi", meaning: "just now" },
  { thai: "เมื่อไหร่", phonetic: "mɯ̂ɯa-rài", meaning: "when?" },
  { thai: "วันนี้", phonetic: "wan-níi", meaning: "today" },
  { thai: "เมื่อวาน", phonetic: "mɯ̂ɯa-waan", meaning: "yesterday" },
  { thai: "พรุ่งนี้", phonetic: "phrûng-níi", meaning: "tomorrow" },
  { thai: "ตอนเช้า", phonetic: "dtɔɔn-cháao", meaning: "in the morning" },
  { thai: "ตอนบ่าย", phonetic: "dtɔɔn-bàai", meaning: "in the afternoon" },
  { thai: "ตอนเย็น", phonetic: "dtɔɔn-yen", meaning: "in the evening" },
  { thai: "ตอนกลางคืน", phonetic: "dtɔɔn-glaang-khɯɯn", meaning: "at night" },
];

export function TimeEssential() {
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <Eyebrow>The six-period clock</Eyebrow>
        <SubHeading>Thai doesn't use AM/PM.</SubHeading>
        <p className="text-stone-600">
          Instead, the day is split into sections. Each uses a different word
          for "o'clock". It feels strange at first. In three days it feels
          obvious.
        </p>
        <div className="grid gap-2">
          {PERIODS.map((p) => (
            <div
              key={p.label}
              className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="thai text-xl font-bold text-stone-900">
                  {p.thai}
                </span>
                <span className="text-sm text-stone-500">{p.phonetic}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-stone-800">
                  {p.label}
                </div>
                <div className="text-[11px] text-stone-400">
                  {p.hours} · {p.example}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Callout label="The trick">
          Read the hour first, then the period. <strong>สามโมงเย็น</strong>{" "}
          (sǎam-moong-yen) is "three o'clock in the late afternoon" which is
          3 PM. <strong>สามทุ่ม</strong> (sǎam-thûm) is 9 PM. Same three,
          different period, different time.
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>When words</Eyebrow>
        <SubHeading>Now, later, yesterday, tomorrow.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {SOON_WORDS.map((w) => (
            <Row
              key={w.thai}
              thai={w.thai}
              phonetic={w.phonetic}
              meaning={w.meaning}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <SubHeading>Say the time out loud.</SubHeading>
        <p className="text-stone-600">
          Telling the time is muscle memory. Use the Conversation game until
          it stops feeling like maths.
        </p>
        <LinkCta href="/games/conversation">💬 Drill in Conversation →</LinkCta>
      </section>
    </div>
  );
}

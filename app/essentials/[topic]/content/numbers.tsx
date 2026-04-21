import { Callout, Eyebrow, LinkCta, Row, SubHeading } from "./shell";

const DIGITS = [
  { n: 0, thai: "ศูนย์", phonetic: "sǔun", tone: "rising" },
  { n: 1, thai: "หนึ่ง", phonetic: "nɯ̀ng", tone: "low" },
  { n: 2, thai: "สอง", phonetic: "sɔ̌ɔng", tone: "rising" },
  { n: 3, thai: "สาม", phonetic: "sǎam", tone: "rising" },
  { n: 4, thai: "สี่", phonetic: "sìi", tone: "low" },
  { n: 5, thai: "ห้า", phonetic: "hâa", tone: "falling" },
  { n: 6, thai: "หก", phonetic: "hòk", tone: "low" },
  { n: 7, thai: "เจ็ด", phonetic: "jèt", tone: "low" },
  { n: 8, thai: "แปด", phonetic: "bpàet", tone: "low" },
  { n: 9, thai: "เก้า", phonetic: "gâao", tone: "falling" },
  { n: 10, thai: "สิบ", phonetic: "sìp", tone: "low" },
];

const TENS = [
  { n: 20, thai: "ยี่สิบ", phonetic: "yîi-sìp" },
  { n: 30, thai: "สามสิบ", phonetic: "sǎam-sìp" },
  { n: 40, thai: "สี่สิบ", phonetic: "sìi-sìp" },
  { n: 50, thai: "ห้าสิบ", phonetic: "hâa-sìp" },
  { n: 60, thai: "หกสิบ", phonetic: "hòk-sìp" },
  { n: 70, thai: "เจ็ดสิบ", phonetic: "jèt-sìp" },
  { n: 80, thai: "แปดสิบ", phonetic: "bpàet-sìp" },
  { n: 90, thai: "เก้าสิบ", phonetic: "gâao-sìp" },
];

const BIG = [
  { n: 100, thai: "ร้อย", phonetic: "rɔ́ɔi", note: "one hundred = หนึ่งร้อย" },
  { n: 1_000, thai: "พัน", phonetic: "phan", note: "one thousand = หนึ่งพัน" },
  { n: 10_000, thai: "หมื่น", phonetic: "mɯ̀ɯn", note: "ten thousand" },
  { n: 100_000, thai: "แสน", phonetic: "sɛ̌ɛn", note: "hundred thousand" },
  { n: 1_000_000, thai: "ล้าน", phonetic: "láan", note: "one million" },
];

export function NumbersEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>0 to 10</Eyebrow>
        <SubHeading>Learn these eleven first.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {DIGITS.map((d) => (
            <Row
              key={d.n}
              thai={d.thai}
              phonetic={d.phonetic}
              meaning={String(d.n)}
              tone={d.tone}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>11 to 19</Eyebrow>
        <SubHeading>Stack สิบ in front.</SubHeading>
        <Callout label="The rule">
          11 is <strong className="thai">สิบเอ็ด</strong> (sìp-èt), not
          sìp-nɯ̀ng. Eleven, twenty-one, thirty-one all end in{" "}
          <strong className="thai">เอ็ด</strong> instead of{" "}
          <strong className="thai">หนึ่ง</strong>. Twelve onward is regular:
          สิบสอง, สิบสาม, สิบสี่…
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>20 to 90</Eyebrow>
        <SubHeading>Twenty is the odd one out.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TENS.map((d) => (
            <Row
              key={d.n}
              thai={d.thai}
              phonetic={d.phonetic}
              meaning={String(d.n)}
            />
          ))}
        </div>
        <Callout label="Why ยี่ not สอง?">
          Twenty uses <strong className="thai">ยี่</strong> (yîi) instead of
          สอง. This is the one exception. Thirty onwards is regular:{" "}
          <strong className="thai">สามสิบ, สี่สิบ, ห้าสิบ…</strong>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Big numbers</Eyebrow>
        <SubHeading>Hundreds, thousands, and up.</SubHeading>
        <div className="grid gap-2 sm:grid-cols-2">
          {BIG.map((b) => (
            <Row
              key={b.n}
              thai={b.thai}
              phonetic={b.phonetic}
              meaning={b.n.toLocaleString()}
              note={b.note}
            />
          ))}
        </div>
        <Callout label="Building real numbers">
          <p className="thai text-lg">สองร้อยห้าสิบ</p>
          <p className="mt-1">sɔ̌ɔng-rɔ́ɔi-hâa-sìp · 250</p>
          <p className="mt-3">Just stack the parts in order, highest first.</p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <SubHeading>Now make them stick.</SubHeading>
        <p className="text-stone-600">
          Numbers come up in every food order, every price tag, every taxi
          fare. The Conversation game is the fastest way to stop hesitating.
        </p>
        <div className="flex flex-wrap gap-3">
          <LinkCta href="/games/conversation">💬 Start conversation drill →</LinkCta>
          <LinkCta href="/games/flashcards">🃏 Number flashcards →</LinkCta>
        </div>
      </section>
    </div>
  );
}

import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

const EXAMPLES = [
  {
    en: "My brother",
    th: "พี่ชายของผม",
    phonetic: "phîi-chaai khɔ̌ɔng phǒm",
    note: "Literally: older-brother of me",
  },
  {
    en: "The teacher's bag",
    th: "กระเป๋าของครู",
    phonetic: "grà-bpǎo khɔ̌ɔng khruu",
    note: "Thing first, then ของ, then the owner",
  },
  {
    en: "My friend's phone",
    th: "โทรศัพท์ของเพื่อนผม",
    phonetic: "thoo-rá-sàp khɔ̌ɔng phɯ̂an phǒm",
    note: "You can chain ของ for layered possession",
  },
];

const DROPPABLE = [
  {
    full: "หนังสือของผม",
    short: "หนังสือผม",
    meaning: "My book",
  },
  {
    full: "บ้านของเพื่อน",
    short: "บ้านเพื่อน",
    meaning: "My friend's house",
  },
];

export function PossessionEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>How Thai says "X's Y"</Eyebrow>
        <SubHeading>One little word: ของ.</SubHeading>
        <p className="text-stone-600">
          English uses <em>apostrophe-s</em> or "of" for possession. Thai uses
          one word, <strong className="thai">ของ</strong> (khɔ̌ɔng), and the
          pattern is always the same.
        </p>
        <Callout label="The pattern">
          <p className="font-mono text-sm text-stone-800">
            [thing] + ของ + [owner]
          </p>
          <p className="mt-2 thai text-lg">หนังสือของผม</p>
          <p className="text-stone-500">book + of + me · my book</p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Worked examples</Eyebrow>
        <div className="space-y-3">
          {EXAMPLES.map((e) => (
            <div
              key={e.th}
              className="rounded-2xl border border-stone-200 bg-white p-5"
            >
              <div className="text-sm font-semibold text-mint-700">{e.en}</div>
              <div className="thai mt-2 text-xl font-bold text-stone-900">
                {e.th}
              </div>
              <div className="mt-1 text-sm text-stone-500">{e.phonetic}</div>
              <div className="mt-3 border-t border-stone-100 pt-3 text-xs text-stone-500">
                {e.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ของ is often optional</Eyebrow>
        <SubHeading>In casual speech, drop it.</SubHeading>
        <p className="text-stone-600">
          Thais usually skip ของ in everyday conversation. The meaning stays
          the same; you just sound more natural.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {DROPPABLE.map((d) => (
            <div
              key={d.full}
              className="rounded-xl border border-stone-200 bg-white p-4"
            >
              <div className="thai text-base text-stone-500 line-through">
                {d.full}
              </div>
              <div className="thai mt-1 text-lg font-semibold text-stone-900">
                {d.short}
              </div>
              <div className="mt-1 text-xs text-stone-500">{d.meaning}</div>
            </div>
          ))}
        </div>
        <Callout label="When to keep ของ">
          <p>
            Use ของ when the sentence would be ambiguous without it, or when
            speaking formally. For quick daily speech, drop it.
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Thai word order</Eyebrow>
        <SubHeading>Subject, then verb, then object. Mostly.</SubHeading>
        <p className="text-stone-600">
          Thai is subject-verb-object, like English. The complications start
          with modifiers:
        </p>
        <Callout label="Order inside a noun phrase">
          <p>
            Modifiers <strong>follow</strong> the noun they describe, which is
            the opposite of English.
          </p>
          <p className="thai mt-2 text-lg">รถสีแดงคันใหญ่</p>
          <p className="text-stone-500">
            car + colour-red + classifier-big · the big red car
          </p>
          <p className="mt-2 text-xs text-stone-500">
            In English: big red car. In Thai: car red big.
          </p>
        </Callout>
        <Callout label="Time before verb">
          <p>
            Time expressions usually come <strong>before</strong> the verb,
            sometimes before the subject.
          </p>
          <p className="thai mt-2 text-lg">เมื่อวานผมไปตลาด</p>
          <p className="text-stone-500">
            yesterday + I + go + market · Yesterday I went to the market
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <LinkCta href="/games/builder">🧩 Build noun phrases →</LinkCta>
      </section>
    </div>
  );
}

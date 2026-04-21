import { Callout, Eyebrow, LinkCta, Row, SubHeading } from "./shell";

const MARKERS = [
  {
    marker: "จะ",
    phonetic: "jà",
    meaning: "will / going to",
    when: "Future. Placed before the verb.",
    example: "ผมจะไป = I will go",
    tone: "low",
  },
  {
    marker: "กำลัง",
    phonetic: "gam-lang",
    meaning: "is / are ...ing",
    when: "In progress right now. Placed before the verb.",
    example: "ผมกำลังกิน = I'm eating",
  },
  {
    marker: "แล้ว",
    phonetic: "lɛ́ɛo",
    meaning: "already / then",
    when: "Completed action. Placed after the verb or at sentence end.",
    example: "ผมกินแล้ว = I already ate",
    tone: "high",
  },
  {
    marker: "ได้",
    phonetic: "dâai",
    meaning: "can / was able / did",
    when: "Ability OR past happening. Sits after the verb.",
    example: "ผมไปได้ = I can go · ผมไปได้ = I went (past)",
    tone: "falling",
  },
  {
    marker: "เคย",
    phonetic: "kəəi",
    meaning: "have ever / used to",
    when: "Past experience. Placed before the verb.",
    example: "ผมเคยไป = I've been there",
  },
  {
    marker: "ยัง",
    phonetic: "yang",
    meaning: "still / not yet",
    when: "Ongoing state. Often pairs with ไม่ for 'not yet'.",
    example: "ผมยังไม่ไป = I haven't gone yet",
  },
];

export function TensesEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>The trick</Eyebrow>
        <SubHeading>Thai verbs don't change shape.</SubHeading>
        <p className="text-stone-600">
          In English, "go" becomes "went" becomes "going". In Thai, the verb{" "}
          <strong className="thai">ไป</strong> (go) stays exactly the same.
          You drop a time word next to it and that's the whole tense system.
          Six markers and you can handle past, present, future, and in-between.
        </p>
        <Callout label="The pattern">
          <p className="font-mono text-sm text-stone-800">
            [subject] [time marker] [verb] ([object])
          </p>
          <p className="mt-2 thai text-lg">ผม จะ ไป ตลาด</p>
          <p className="text-stone-500">I + will + go + market · I'll go to the market</p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>The six markers</Eyebrow>
        <SubHeading>Memorise these and you can time-travel in Thai.</SubHeading>
        <div className="grid gap-3">
          {MARKERS.map((m) => (
            <div
              key={m.marker}
              className="rounded-2xl border border-stone-200 bg-white p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="thai text-2xl font-bold text-stone-900">
                    {m.marker}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      m.tone ? `tone-${m.tone}` : "text-stone-500"
                    }`}
                  >
                    {m.phonetic}
                  </span>
                </div>
                <span className="text-sm font-semibold text-mint-700">
                  {m.meaning}
                </span>
              </div>
              <p className="mt-2 text-sm text-stone-600">{m.when}</p>
              <div className="thai mt-3 border-t border-stone-100 pt-3 text-sm text-stone-800">
                {m.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>Common traps</Eyebrow>
        <Callout label="ได้ does double duty">
          <p>
            After the verb, <strong className="thai">ได้</strong> means
            "can" or "was able". <span className="thai">พูดได้</span>{" "}
            (phûut dâai) = can speak.
          </p>
          <p className="mt-2">
            But <strong className="thai">ได้</strong> in past contexts also
            marks a completed action. Context tells you which meaning applies.
          </p>
        </Callout>
        <Callout label="Avoid stacking markers">
          <p>
            Pick one marker per sentence. Don't say{" "}
            <span className="thai line-through">จะไปแล้ว</span> meaning "will
            already go". Use either จะ (future) or แล้ว (already), not both.
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <LinkCta href="/games/builder">🧩 Build tense sentences →</LinkCta>
      </section>
    </div>
  );
}

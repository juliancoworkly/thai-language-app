import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

const FORMS = [
  {
    form: "ไม่",
    phonetic: "mâi",
    tone: "falling",
    label: "Plain 'not'",
    when: "Negates a verb or adjective in general.",
    example: "ไม่อร่อย = not tasty · ไม่ไป = not going",
    compare: "Default negation.",
  },
  {
    form: "ไม่ได้",
    phonetic: "mâi dâai",
    tone: "falling",
    label: "'Didn't' / 'can't' / 'it's not'",
    when:
      "Past negation, ability negation, or contradicting a statement. Placed before the verb.",
    example: "ผมไม่ได้ไป = I didn't go · พูดไม่ได้ = can't speak",
    compare: "Use when someone thinks you did something and you want to deny it.",
  },
  {
    form: "ยังไม่",
    phonetic: "yang mâi",
    tone: "mid-falling",
    label: "'Not yet'",
    when: "Something hasn't happened but is expected to.",
    example: "ยังไม่มา = hasn't come yet · ยังไม่พร้อม = not ready yet",
    compare: "Implies you're still waiting.",
  },
  {
    form: "ไม่เคย",
    phonetic: "mâi kəəi",
    tone: "falling-mid",
    label: "'Never' / 'haven't ever'",
    when: "Lifetime negation — the experience has never happened.",
    example: "ไม่เคยไปเชียงใหม่ = I've never been to Chiang Mai",
    compare: "The strongest form. Flat no-for-all-time.",
  },
];

export function NegationEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>The four no's</Eyebrow>
        <SubHeading>They all start with ไม่. They all mean something different.</SubHeading>
        <p className="text-stone-600">
          English covers no / don't / didn't / haven't / can't / never with
          different verb shapes and helpers. Thai does it with four short
          phrases and word order. Learn these four and you can refuse,
          correct, deny, and reminisce.
        </p>
      </section>

      <section className="space-y-3">
        {FORMS.map((f) => (
          <div
            key={f.form}
            className="rounded-2xl border border-stone-200 bg-white p-5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <span className="thai text-2xl font-bold text-stone-900">
                  {f.form}
                </span>
                <span className="text-sm font-medium text-stone-500">
                  {f.phonetic}
                </span>
              </div>
              <span className="text-sm font-semibold text-mint-700">
                {f.label}
              </span>
            </div>
            <p className="mt-2 text-sm text-stone-600">{f.when}</p>
            <div className="thai mt-3 border-t border-stone-100 pt-3 text-sm text-stone-800">
              {f.example}
            </div>
            <p className="mt-2 text-xs text-stone-500">{f.compare}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <Eyebrow>Common confusion</Eyebrow>
        <Callout label="ไม่ไป vs ไม่ได้ไป">
          <p>
            <strong className="thai">ไม่ไป</strong> (mâi bpai) = "not going".
            Present/future statement of fact.
          </p>
          <p className="mt-2">
            <strong className="thai">ไม่ได้ไป</strong> (mâi dâai bpai) =
            "didn't go". Past. Also used when someone accuses you of going
            and you're denying it.
          </p>
          <p className="mt-2 text-xs text-stone-500">
            Rule of thumb: if you're talking about something that already
            should have happened, you want ไม่ได้.
          </p>
        </Callout>
        <Callout label="Saying 'no' politely">
          <p>
            A flat <strong className="thai">ไม่</strong> can feel blunt. Soften
            with <strong className="thai">ไม่ครับ / ไม่ค่ะ</strong> or{" "}
            <strong className="thai">ไม่เป็นไร</strong> (it's okay / no
            thanks).
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <LinkCta href="/games/conversation">💬 Practice negation in conversation →</LinkCta>
      </section>
    </div>
  );
}

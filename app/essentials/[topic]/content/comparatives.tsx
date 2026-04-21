import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

const PATTERNS = [
  {
    label: "More than · -er than",
    thai: "[adj] + กว่า + [other thing]",
    phonetic: "...gwàa...",
    example: "ร้านนี้อร่อยกว่าร้านนั้น",
    meaning: "This shop is tastier than that one",
  },
  {
    label: "Most · -est",
    thai: "[adj] + ที่สุด",
    phonetic: "...thîi-sùt",
    example: "ร้านนี้อร่อยที่สุด",
    meaning: "This shop is the tastiest",
  },
  {
    label: "Very / a lot",
    thai: "[adj] + มาก",
    phonetic: "...mâak",
    example: "เผ็ดมาก",
    meaning: "Very spicy",
  },
  {
    label: "A little / not very",
    thai: "[adj] + นิดหน่อย",
    phonetic: "...nít-nɔ̀i",
    example: "เผ็ดนิดหน่อย",
    meaning: "A little spicy",
  },
  {
    label: "Too / excessively",
    thai: "[adj] + เกินไป",
    phonetic: "...gəən bpai",
    example: "แพงเกินไป",
    meaning: "Too expensive",
  },
  {
    label: "As ... as · same",
    thai: "[adj] + เท่ากับ / เหมือน",
    phonetic: "...thâo-gàp / mɯ̌an",
    example: "เขาสูงเท่ากับผม",
    meaning: "He's as tall as me",
  },
];

export function ComparativesEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>Thai is lazy (in a good way)</Eyebrow>
        <SubHeading>No irregular forms. Just add a word.</SubHeading>
        <p className="text-stone-600">
          English makes you memorise big / bigger / biggest, good / better /
          best. Thai doesn't. You stack a comparison word after the adjective
          and you're done.
        </p>
      </section>

      <section className="space-y-3">
        <Eyebrow>Six patterns</Eyebrow>
        <SubHeading>Master these and you can compare anything.</SubHeading>
        <div className="grid gap-3">
          {PATTERNS.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-stone-200 bg-white p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-semibold text-mint-700">
                  {p.label}
                </h3>
                <span className="font-mono text-xs text-stone-400">
                  {p.phonetic}
                </span>
              </div>
              <div className="thai mt-1 text-sm text-stone-500">{p.thai}</div>
              <div className="thai mt-3 border-t border-stone-100 pt-3 text-lg font-semibold text-stone-900">
                {p.example}
              </div>
              <div className="mt-1 text-sm text-stone-700">{p.meaning}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>Putting it together</Eyebrow>
        <Callout label="Restaurant scene">
          <p className="thai">ร้านนี้แพงกว่าร้านนั้น แต่อร่อยที่สุด</p>
          <p className="mt-1 text-stone-500">
            ráan níi phɛɛng gwàa ráan nán, dtɛ̀ɛ à-rɔ̀i thîi-sùt
          </p>
          <p className="mt-2">
            This shop is more expensive than that one, but it's the tastiest.
          </p>
        </Callout>
        <Callout label="Polite complaint">
          <p className="thai">เผ็ดเกินไปนิดหน่อย</p>
          <p className="mt-1 text-stone-500">phèt gəən bpai nít-nɔ̀i</p>
          <p className="mt-2">
            A little too spicy. (Combining 'too' + 'a little'.)
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <LinkCta href="/games/builder">🧩 Build comparison sentences →</LinkCta>
      </section>
    </div>
  );
}

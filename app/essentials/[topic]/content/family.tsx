import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

type Member = {
  thai: string;
  phonetic: string;
  en: string;
  side?: "father" | "mother" | "both";
};

const GENERATIONS: { label: string; members: Member[] }[] = [
  {
    label: "Grandparents · ปู่ ย่า ตา ยาย",
    members: [
      { thai: "ปู่", phonetic: "bpùu", en: "grandfather (father's side)", side: "father" },
      { thai: "ย่า", phonetic: "yâa", en: "grandmother (father's side)", side: "father" },
      { thai: "ตา", phonetic: "dtaa", en: "grandfather (mother's side)", side: "mother" },
      { thai: "ยาย", phonetic: "yaai", en: "grandmother (mother's side)", side: "mother" },
    ],
  },
  {
    label: "Parents & aunts/uncles",
    members: [
      { thai: "พ่อ", phonetic: "phɔ̂ɔ", en: "father", side: "both" },
      { thai: "แม่", phonetic: "mɛ̂ɛ", en: "mother", side: "both" },
      { thai: "ลุง", phonetic: "lung", en: "uncle (older than parent)", side: "both" },
      { thai: "ป้า", phonetic: "bpâa", en: "aunt (older than parent)", side: "both" },
      { thai: "น้า", phonetic: "náa", en: "aunt/uncle (younger than mother)", side: "mother" },
      { thai: "อา", phonetic: "aa", en: "aunt/uncle (younger than father)", side: "father" },
    ],
  },
  {
    label: "Siblings & self",
    members: [
      { thai: "พี่ชาย", phonetic: "phîi-chaai", en: "older brother" },
      { thai: "พี่สาว", phonetic: "phîi-sǎao", en: "older sister" },
      { thai: "น้องชาย", phonetic: "nɔ́ɔng-chaai", en: "younger brother" },
      { thai: "น้องสาว", phonetic: "nɔ́ɔng-sǎao", en: "younger sister" },
    ],
  },
  {
    label: "Partner & children",
    members: [
      { thai: "สามี", phonetic: "sǎa-mii", en: "husband" },
      { thai: "ภรรยา", phonetic: "phan-rá-yaa", en: "wife" },
      { thai: "แฟน", phonetic: "fɛɛn", en: "partner / boyfriend / girlfriend" },
      { thai: "ลูกชาย", phonetic: "lûuk-chaai", en: "son" },
      { thai: "ลูกสาว", phonetic: "lûuk-sǎao", en: "daughter" },
    ],
  },
];

const SIDE_DOT: Record<NonNullable<Member["side"]>, { bg: string; label: string }> = {
  father: { bg: "bg-sky-400", label: "father's side" },
  mother: { bg: "bg-rose-400", label: "mother's side" },
  both: { bg: "bg-mint-500", label: "both sides" },
};

export function FamilyEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>Thai families come labelled</Eyebrow>
        <SubHeading>Age and side are baked into the word.</SubHeading>
        <p className="text-stone-600">
          English lumps everyone together (<em>uncle, aunt, grandma</em>).
          Thai splits them by which side of the family they're on, and whether
          they're older or younger than your parent. This is the mental model
          you need.
        </p>
        <Callout label="Two rules">
          <p>
            <strong>1.</strong> <span className="thai">ปู่ / ย่า</span> are
            your dad's parents. <span className="thai">ตา / ยาย</span> are
            your mum's parents.
          </p>
          <p className="mt-1">
            <strong>2.</strong> <span className="thai">พี่</span> is anyone
            older, <span className="thai">น้อง</span> is anyone younger. Add{" "}
            <span className="thai">ชาย</span> for male and{" "}
            <span className="thai">สาว</span> for female.
          </p>
        </Callout>
      </section>

      {GENERATIONS.map((gen) => (
        <section key={gen.label} className="space-y-3">
          <Eyebrow>{gen.label}</Eyebrow>
          <div className="grid gap-2 sm:grid-cols-2">
            {gen.members.map((m) => (
              <div
                key={m.thai}
                className="flex items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
              >
                <div className="flex items-baseline gap-3">
                  <span className="thai text-xl font-bold text-stone-900">
                    {m.thai}
                  </span>
                  <span className="text-sm text-stone-500">{m.phonetic}</span>
                </div>
                <div className="flex items-center gap-2 text-right">
                  <span className="text-sm text-stone-700">{m.en}</span>
                  {m.side && (
                    <span
                      className={`h-2 w-2 flex-none rounded-full ${SIDE_DOT[m.side].bg}`}
                      title={SIDE_DOT[m.side].label}
                      aria-hidden
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-3">
        <Eyebrow>Tip</Eyebrow>
        <SubHeading>You'll also call strangers by family terms.</SubHeading>
        <p className="text-stone-600">
          Thai hospitality works partly through family labels. A vendor who's
          older than you might be <strong className="thai">พี่</strong>. Your
          grandma's friend is <strong className="thai">ป้า</strong>. It is
          warm, not weird.
        </p>
      </section>

      <section className="space-y-3">
        <Eyebrow>Drill it</Eyebrow>
        <div className="flex flex-wrap gap-3">
          <LinkCta href="/games/flashcards">🃏 Family flashcards →</LinkCta>
          <LinkCta href="/games/matching">🪞 Match the pairs →</LinkCta>
        </div>
      </section>
    </div>
  );
}

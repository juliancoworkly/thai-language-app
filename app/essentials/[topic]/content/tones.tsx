import { Callout, Eyebrow, LinkCta, SubHeading } from "./shell";

const TONES = [
  {
    key: "mid",
    label: "Mid",
    mark: "no mark",
    thai: "maa",
    english: "flat, steady. Speak it like you're saying it to someone you know.",
    example: "มา",
    exampleMeaning: "come",
  },
  {
    key: "low",
    label: "Low",
    mark: "à",
    thai: "màa",
    english: "pitched low and level. Like the start of a disappointed sigh.",
    example: "หมา",
    exampleMeaning: "the word 'ma' in the surname Obama (the low version)",
  },
  {
    key: "falling",
    label: "Falling",
    mark: "â",
    thai: "mâa",
    english: "starts high, drops fast. Like saying \"NO!\" as a command.",
    example: "ม้า",
    exampleMeaning: "horse",
  },
  {
    key: "high",
    label: "High",
    mark: "á",
    thai: "máa",
    english: "pitched at the top of your voice and held there.",
    example: "ม้า",
    exampleMeaning: "(high tone variant)",
  },
  {
    key: "rising",
    label: "Rising",
    mark: "ǎ",
    thai: "mǎa",
    english: "starts low, swoops up. Like asking \"really?\" in English.",
    example: "หมา",
    exampleMeaning: "dog",
  },
];

export function TonesEssential() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>What's a tone?</Eyebrow>
        <SubHeading>The pitch of the syllable changes the word.</SubHeading>
        <p className="text-stone-600">
          English uses pitch for feeling (angry? surprised?). Thai uses pitch
          to pick which <em>word</em> you mean. Same syllable + different pitch
          = different word. Miss the tone, the listener hears something else
          (or nothing at all).
        </p>
        <Callout label="The classic trap">
          <div className="grid gap-1 text-base">
            <p>
              <span className="thai font-bold">มา</span>{" "}
              <span className="tone-mid font-semibold">maa</span> · come (mid
              tone)
            </p>
            <p>
              <span className="thai font-bold">ม้า</span>{" "}
              <span className="tone-high font-semibold">máa</span> · horse
              (high tone)
            </p>
            <p>
              <span className="thai font-bold">หมา</span>{" "}
              <span className="tone-rising font-semibold">mǎa</span> · dog
              (rising tone)
            </p>
          </div>
          <p className="mt-3 text-xs text-stone-500">
            Same letters, three different words. "I'm going to ride the dog"
            is an easy mistake to make.
          </p>
        </Callout>
      </section>

      <section className="space-y-3">
        <Eyebrow>The five tones</Eyebrow>
        <SubHeading>We color-code them everywhere in the app.</SubHeading>
        <div className="grid gap-3">
          {TONES.map((t) => (
            <div
              key={t.key}
              className="rounded-2xl border border-stone-200 bg-white p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`tone-${t.key} text-2xl font-black tracking-tight`}
                  >
                    {t.thai}
                  </span>
                  <span className="text-sm text-stone-500">
                    mark: <code>{t.mark}</code>
                  </span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                  {t.label}
                </span>
              </div>
              <p className="mt-2 text-sm text-stone-600">{t.english}</p>
              <div className="mt-3 flex items-baseline gap-3 border-t border-stone-100 pt-3">
                <span className="thai text-lg font-semibold text-stone-900">
                  {t.example}
                </span>
                <span className="text-sm text-stone-500">
                  {t.exampleMeaning}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>How to practise</Eyebrow>
        <SubHeading>Ears first, then mouth.</SubHeading>
        <p className="text-stone-600">
          You can't produce a tone you can't hear. Start with the Tone Trainer
          game: listen, pick the tone, repeat until pairs like{" "}
          <span className="thai font-semibold">ม้า</span> and{" "}
          <span className="thai font-semibold">หมา</span> sound obviously
          different. Once the ear is tuned, copy out loud.
        </p>
        <LinkCta href="/games/tones">🎵 Open the Tone Trainer →</LinkCta>
      </section>
    </div>
  );
}

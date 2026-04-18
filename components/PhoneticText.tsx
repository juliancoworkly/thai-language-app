import { detectTone, splitSyllables, TONE_COLOR } from "@/lib/tones";

export function PhoneticText({
  phonetic,
  size = "base",
  bold = false,
}: {
  phonetic: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
  bold?: boolean;
}) {
  const sizeClass =
    size === "sm" ? "text-sm" :
    size === "lg" ? "text-lg" :
    size === "xl" ? "text-xl" :
    size === "2xl" ? "text-2xl" :
    "text-base";

  // Split on whitespace first (words), then on "-" for syllables
  const groups = phonetic.split(/\s+/);

  return (
    <span className={`${sizeClass} ${bold ? "font-semibold" : ""}`}>
      {groups.map((group, gi) => (
        <span key={gi}>
          {splitSyllables(group).map((syl, i, arr) => (
            <span key={i} className={TONE_COLOR[detectTone(syl)]}>
              {syl}
              {i < arr.length - 1 ? "-" : ""}
            </span>
          ))}
          {gi < groups.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

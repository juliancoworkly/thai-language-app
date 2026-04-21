import { notFound } from "next/navigation";
import { essentials } from "@/data/essentials";
import { NumbersEssential } from "./content/numbers";
import { DaysMonthsEssential } from "./content/days-months";
import { TimeEssential } from "./content/time";
import { ColorsEssential } from "./content/colors";
import { FamilyEssential } from "./content/family";
import { ClassifiersEssential } from "./content/classifiers";
import { TonesEssential } from "./content/tones";
import { TensesEssential } from "./content/tenses";
import { NegationEssential } from "./content/negation";
import { ComparativesEssential } from "./content/comparatives";
import { PossessionEssential } from "./content/possession";
import { EssentialShell } from "./content/shell";

export function generateStaticParams() {
  return essentials.map((e) => ({ topic: e.id }));
}

const CONTENT: Record<string, () => JSX.Element> = {
  numbers: NumbersEssential,
  "days-months": DaysMonthsEssential,
  time: TimeEssential,
  colors: ColorsEssential,
  family: FamilyEssential,
  classifiers: ClassifiersEssential,
  tones: TonesEssential,
  tenses: TensesEssential,
  negation: NegationEssential,
  comparatives: ComparativesEssential,
  possession: PossessionEssential,
};

export default function EssentialTopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const info = essentials.find((e) => e.id === params.topic);
  const Content = CONTENT[params.topic];
  if (!info || !Content) return notFound();

  return (
    <EssentialShell
      title={info.title}
      titleThai={info.titleThai}
      emoji={info.emoji}
      description={info.description}
      level={info.level}
    >
      <Content />
    </EssentialShell>
  );
}

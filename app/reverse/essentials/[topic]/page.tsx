import { notFound } from "next/navigation";
import { reverseEssentials } from "@/data/reverse-essentials";
import { ReverseEssentialShell } from "./shell";
import { AlphabetContent } from "./content/alphabet";
import { NumbersContent } from "./content/numbers";
import { ColorsContent } from "./content/colors";
import { AnimalsContent } from "./content/animals";
import { FamilyContent } from "./content/family";
import { BodyContent } from "./content/body";
import { DaysMonthsContent } from "./content/days-months";
import { FoodContent } from "./content/food";
import { WeatherContent } from "./content/weather";
import { GreetingsContent } from "./content/greetings";
import { ActionsContent } from "./content/actions";
import { GrammarContent } from "./content/grammar";
import { SchoolContent } from "./content/school";
import { ClothesContent } from "./content/clothes";
import { JobsContent } from "./content/jobs";
import { TensesContent } from "./content/tenses";
import { NegationContent } from "./content/negation";
import { ComparativesContent } from "./content/comparatives";
import { PluralsContent } from "./content/plurals";

export function generateStaticParams() {
  return reverseEssentials.map((e) => ({ topic: e.id }));
}

const CONTENT: Record<string, () => JSX.Element> = {
  alphabet: AlphabetContent,
  numbers: NumbersContent,
  colors: ColorsContent,
  animals: AnimalsContent,
  family: FamilyContent,
  body: BodyContent,
  "days-months": DaysMonthsContent,
  food: FoodContent,
  weather: WeatherContent,
  greetings: GreetingsContent,
  actions: ActionsContent,
  grammar: GrammarContent,
  school: SchoolContent,
  clothes: ClothesContent,
  jobs: JobsContent,
  tenses: TensesContent,
  negation: NegationContent,
  comparatives: ComparativesContent,
  plurals: PluralsContent,
};

export default function ReverseEssentialPage({
  params,
}: {
  params: { topic: string };
}) {
  const info = reverseEssentials.find((e) => e.id === params.topic);
  const Content = CONTENT[params.topic];
  if (!info || !Content) return notFound();

  return (
    <ReverseEssentialShell
      subtitle={info.subtitle}
      title={info.title}
      emoji={info.emoji}
      description={info.description}
    >
      <Content />
    </ReverseEssentialShell>
  );
}

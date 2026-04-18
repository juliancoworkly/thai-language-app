import { scenarios } from "@/data/scenarios";
import LearnClient from "./LearnClient";

export function generateStaticParams() {
  return scenarios.map((s) => ({ scenario: s.id }));
}

export default function LearnPage({ params }: { params: { scenario: string } }) {
  return <LearnClient scenario={params.scenario} />;
}

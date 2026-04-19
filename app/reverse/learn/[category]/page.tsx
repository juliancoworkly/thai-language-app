import { reverseCategories } from "@/data/reverse";
import LearnClient from "./LearnClient";

export function generateStaticParams() {
  return reverseCategories.map((c) => ({ category: c.id }));
}

export default function Page({ params }: { params: { category: string } }) {
  return <LearnClient categoryId={params.category} />;
}

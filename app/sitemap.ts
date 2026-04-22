import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://thaiandenglish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/login", priority: 0.6, changeFrequency: "monthly" },
    { path: "/onboarding", priority: 0.8, changeFrequency: "monthly" },
    { path: "/reverse", priority: 0.9, changeFrequency: "weekly" },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
    { path: "/refund", priority: 0.3, changeFrequency: "monthly" },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

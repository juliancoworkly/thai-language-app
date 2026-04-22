"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { getProfile } from "@/lib/storage";

// Routes that belong to the Thai-learning side (paid).
const THAI_PATHS = ["/thai", "/games", "/learn", "/words", "/essentials", "/scripts"];
// Routes that belong to the Thai-speaker / English-learning side (free).
const ENGLISH_PATHS = ["/reverse"];
// Routes anyone (even unonboarded) can see — these match by prefix, so
// "/privacy/foo" would also be public. Keep this list tight.
const PUBLIC_PATHS = [
  "/",
  "/login",
  "/account",
  "/onboarding",
  "/privacy",
  "/terms",
  "/refund",
];
// Routes that are public at their exact path but gated on sub-routes. For
// /reverse this means Thai speakers can read the landing page without
// onboarding, but actual lessons under /reverse/* still require setup.
const PUBLIC_EXACT = ["/reverse"];

function matchesAny(pathname: string, prefixes: string[]) {
  return prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function RouteGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  useEffect(() => {
    if (matchesAny(pathname, PUBLIC_PATHS)) return;
    if (PUBLIC_EXACT.includes(pathname)) return;

    const profile = getProfile();
    if (!profile?.onboarded) {
      router.replace("/onboarding");
      return;
    }

    const isThaiPath = matchesAny(pathname, THAI_PATHS);
    const isEnglishPath = matchesAny(pathname, ENGLISH_PATHS);

    if (isThaiPath && profile.mode !== "thai") {
      // Thai speaker trying to enter the paid Thai-learning side: send home.
      router.replace("/reverse");
    } else if (isEnglishPath && profile.mode !== "english") {
      // English speaker trying to enter the Thai-speaker English side: send home.
      router.replace("/thai");
    }
  }, [pathname, router]);

  return <>{children}</>;
}

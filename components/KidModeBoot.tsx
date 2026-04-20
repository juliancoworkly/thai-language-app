"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getProfile } from "@/lib/storage";

// Toggles `html.kid-mode` based on the user's profile so CSS picks it up.
// Re-runs on path changes so updates from /account flow through.
export function KidModeBoot() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const p = getProfile();
    const root = document.documentElement;
    if (p?.ageMode === "kid") root.classList.add("kid-mode");
    else root.classList.remove("kid-mode");
  }, [pathname]);
  return null;
}

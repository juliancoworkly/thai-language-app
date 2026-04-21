"use client";

import { playAudio } from "@/lib/tts";

export function AudioButton({
  id,
  thai,
  size = "md",
  label,
}: {
  id: string;
  thai: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}) {
  const sizeClass =
    size === "sm"
      ? "h-7 w-7 text-sm"
      : size === "lg"
      ? "h-12 w-12 text-xl"
      : "h-9 w-9 text-base";

  return (
    <button
      type="button"
      aria-label={label ?? `Play ${thai}`}
      onClick={() => playAudio(id, thai)}
      className={`inline-flex ${sizeClass} items-center justify-center rounded-full bg-mint-500 text-ink-900 shadow-sm transition hover:bg-mint-400 active:scale-95`}
    >
      🔊
    </button>
  );
}

"use client";

// Browser Speech Synthesis. Drop real mp3s in /public/audio/<id>.mp3
// and playAudio() will prefer them over TTS.

type Lang = "th" | "en";

let cachedVoices: SpeechSynthesisVoice[] | null = null;
let chosenThai: SpeechSynthesisVoice | null = null;
let chosenEnglish: SpeechSynthesisVoice | null = null;

// Known female voice names across macOS, iOS, Android, Windows, Chrome.
// Order = preference.
const FEMALE_EN = [
  // Apple (macOS / iOS)
  "Samantha", "Serena", "Karen", "Moira", "Tessa", "Veena", "Fiona",
  "Allison", "Ava", "Susan", "Kate", "Zoe",
  // Google Chrome (Android / desktop)
  "Google US English", "Google UK English Female",
  // Microsoft (Windows / Edge)
  "Microsoft Zira", "Microsoft Aria", "Microsoft Jenny",
  "Microsoft Hazel", "Microsoft Eva", "Microsoft Jessa",
];

// Google's Thai voice (same engine powering Google Translate) is preferred
// first so the output sounds like Translate across Chrome / Android / Edge.
// Apple and Microsoft native voices remain as fallbacks.
const FEMALE_TH = [
  // Google (Chrome / Android / Edge) — same voice family as Google Translate
  "Google \u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
  "Google Thai",
  "Google th-TH",
  "Google th",
  // Apple
  "Kanya", "Narisa",
  // Microsoft
  "Microsoft Pattara", "Microsoft Premwadee", "Microsoft Achara",
];

function matchByNames(voices: SpeechSynthesisVoice[], names: string[]) {
  for (const name of names) {
    const v = voices.find((voice) => voice.name.includes(name));
    if (v) return v;
  }
  return null;
}

function refreshCache() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();

  if (cachedVoices.length > 0) {
    if (!chosenThai) {
      chosenThai =
        matchByNames(cachedVoices, FEMALE_TH) ??
        // Any Google Thai voice (same engine family as Google Translate)
        cachedVoices.find((v) => v.lang.startsWith("th") && /google/i.test(v.name)) ??
        cachedVoices.find((v) => v.lang === "th-TH" && /female|woman|Kanya|Narisa/i.test(v.name)) ??
        cachedVoices.find((v) => v.lang === "th-TH") ??
        cachedVoices.find((v) => v.lang.startsWith("th")) ??
        null;
    }
    if (!chosenEnglish) {
      chosenEnglish =
        matchByNames(cachedVoices, FEMALE_EN) ??
        cachedVoices.find((v) => v.lang.startsWith("en") && /female|woman/i.test(v.name)) ??
        cachedVoices.find((v) => v.lang === "en-US") ??
        cachedVoices.find((v) => v.lang === "en-GB") ??
        cachedVoices.find((v) => v.lang.startsWith("en")) ??
        null;
    }
  }
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  refreshCache();
  window.speechSynthesis.onvoiceschanged = refreshCache;
}

function speak(text: string, lang: Lang, rate: number) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  if (!cachedVoices) refreshCache();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === "th" ? "th-TH" : "en-US";
  u.rate = rate;
  u.volume = 1.0;
  // Thai is tonal — use natural pitch so tones aren't shifted (matching
  // Google Translate's playback). English keeps a slight lift for clarity.
  u.pitch = lang === "th" ? 1.0 : 1.1;
  const voice = lang === "th" ? chosenThai : chosenEnglish;
  if (voice) u.voice = voice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export function speakThai(text: string, rate = 1.0): void {
  speak(text, "th", rate);
}

export function speakEnglish(text: string, rate = 1.0): void {
  speak(text, "en", rate);
}

export async function playAudio(id: string, thaiText: string): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    const res = await fetch(`/audio/${id}.mp3`, { method: "HEAD" });
    if (res.ok) {
      const audio = new Audio(`/audio/${id}.mp3`);
      await audio.play();
      return;
    }
  } catch {
    // fall through
  }
  speakThai(thaiText);
}

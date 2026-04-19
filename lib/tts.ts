"use client";

// Browser Speech Synthesis. Drop real mp3s in /public/audio/<id>.mp3
// and playAudio() will prefer them over TTS.

type Lang = "th" | "en";

let cachedVoices: SpeechSynthesisVoice[] | null = null;
let chosenThai: SpeechSynthesisVoice | null = null;
let chosenEnglish: SpeechSynthesisVoice | null = null;

function refreshCache() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();

  if (cachedVoices.length > 0) {
    if (!chosenThai) {
      chosenThai =
        cachedVoices.find((v) => v.lang === "th-TH" && /Google|Kanya|Premwadee|Narisa/.test(v.name)) ??
        cachedVoices.find((v) => v.lang === "th-TH") ??
        cachedVoices.find((v) => v.lang.startsWith("th")) ??
        null;
    }
    if (!chosenEnglish) {
      chosenEnglish =
        cachedVoices.find((v) => /Google US English|Google UK English/.test(v.name)) ??
        cachedVoices.find((v) => /Samantha|Serena|Karen|Moira|Daniel|Alex/.test(v.name)) ??
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
  const voice = lang === "th" ? chosenThai : chosenEnglish;
  if (voice) u.voice = voice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export function speakThai(text: string, rate = 0.85): void {
  speak(text, "th", rate);
}

export function speakEnglish(text: string, rate = 0.9): void {
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

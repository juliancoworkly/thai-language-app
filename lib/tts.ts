"use client";

// Browser Speech Synthesis fallback for audio.
// When you record real clips, drop them in /public/audio/<id>.mp3 and
// playAudio() will prefer the real file automatically.

function pickVoice(lang: "th" | "en"): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined") return undefined;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return undefined;

  if (lang === "th") {
    return (
      voices.find((v) => v.lang === "th-TH" && /Kanya|Premwadee|Narisa|Google/.test(v.name)) ??
      voices.find((v) => v.lang === "th-TH") ??
      voices.find((v) => v.lang.startsWith("th"))
    );
  }
  // English: prefer natural-sounding named voices over regional defaults
  return (
    voices.find((v) => /Google US English|Google UK English|Samantha|Daniel|Karen|Serena|Moira|Alex/.test(v.name)) ??
    voices.find((v) => v.lang === "en-US") ??
    voices.find((v) => v.lang === "en-GB") ??
    voices.find((v) => v.lang.startsWith("en"))
  );
}

// Voices load asynchronously on some browsers — warm them up on first import.
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export function speakThai(text: string, rate = 0.85): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "th-TH";
  u.rate = rate;
  const v = pickVoice("th");
  if (v) u.voice = v;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export function speakEnglish(text: string, rate = 0.9): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = rate;
  u.pitch = 1;
  const v = pickVoice("en");
  if (v) u.voice = v;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
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
    // fall through to TTS
  }
  speakThai(thaiText);
}

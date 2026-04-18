"use client";

// Browser Speech Synthesis fallback for Thai audio.
// When you record real clips, drop them in /public/audio/<id>.mp3 and
// the AudioButton will prefer the real file automatically.

export function speakThai(text: string, rate = 0.85): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "th-TH";
  u.rate = rate;

  const voices = window.speechSynthesis.getVoices();
  const thaiVoice = voices.find((v) => v.lang === "th-TH" || v.lang.startsWith("th"));
  if (thaiVoice) u.voice = thaiVoice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export function speakEnglish(text: string, rate = 0.95): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = rate;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// Try a real mp3 first, fall back to TTS.
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

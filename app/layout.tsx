import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phuut Thai — Learn everyday Thai",
  description:
    "Learn real conversational Thai through sentences, word-by-word breakdowns, and memory games.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🇹🇭</span>
              <span className="font-bold text-stone-800">Phuut Thai</span>
            </Link>
            <div className="flex items-center gap-1 text-sm">
              <Link href="/words" className="btn-ghost">Word bank</Link>
              <Link href="/games" className="btn-ghost">Games</Link>
              <Link href="/reverse" className="btn-ghost">🔁 EN for Thais</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-10 text-center text-xs text-stone-500">
          Built for everyday Thailand life. Audio uses your browser's Thai voice
          — swap in real recordings by dropping MP3s into <code>/public/audio</code>.
        </footer>
      </body>
    </html>
  );
}

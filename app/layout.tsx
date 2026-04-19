import type { Metadata } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import { Header } from "@/components/Header";
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
        <AuthProvider>
          <Header />
          <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
          <footer className="mx-auto max-w-5xl px-4 py-10 text-center text-xs text-stone-500">
            Built for everyday Thailand life. Audio uses your browser's Thai voice
            — swap in real recordings by dropping MP3s into <code>/public/audio</code>.
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}

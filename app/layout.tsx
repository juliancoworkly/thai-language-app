import type { Metadata, Viewport } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import { Header } from "@/components/Header";
import { KidModeBoot } from "@/components/KidModeBoot";
import { Paywall, TrialBanner } from "@/components/Paywall";
import { RouteGate } from "@/components/RouteGate";
import { ServiceWorkerBoot } from "@/components/ServiceWorkerBoot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thai & English — Phuut Thai",
  description:
    "Real, everyday Thai you'll actually use. With memory games, word-by-word breakdowns, and a free English mode for Thai nationals.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Phuut Thai",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1825",
  width: "device-width",
  initialScale: 1,
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
          <KidModeBoot />
          <ServiceWorkerBoot />
          <RouteGate>
            <Header />
            <TrialBanner />
            <main className="mx-auto max-w-5xl px-4 py-6">
              <Paywall>{children}</Paywall>
            </main>
          </RouteGate>
          <footer className="border-t border-white/5 bg-ink-900 px-6 py-10 text-center text-xs text-stone-400">
            <div className="mx-auto max-w-5xl space-y-3">
              <div className="flex items-center justify-center gap-2 text-mint-400">
                <span className="h-2 w-2 rounded-full bg-mint-400" />
                <span className="font-bold tracking-wide">Phuut Thai</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-[11px]">
                <a href="/" className="hover:text-white">Home</a>
                <a href="/thai" className="hover:text-white">Learn Thai</a>
                <a href="/reverse" className="hover:text-white">Free for Thais</a>
                <a href="/login" className="hover:text-white">Sign in</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-[11px] text-stone-500">
                <a href="/terms" className="hover:text-white">Terms of Service</a>
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                <a href="/refund" className="hover:text-white">Refund Policy</a>
                <a href="mailto:hello@thaiandenglish.com" className="hover:text-white">Contact</a>
              </div>
              <div className="text-[11px]">
                © {new Date().getFullYear()} Cultra Lab Ltd Part. All rights reserved.
              </div>
              <div className="text-[11px] text-stone-500">
                1st Floor, PKCD Building, 9, 8 Muang Naka Rd, Phuket 83000, Thailand
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}

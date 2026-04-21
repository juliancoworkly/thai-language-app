import Link from "next/link";

/* Shared shell for reverse-side (English for Thai speakers) essentials.
   English is primary (big), Thai is the pronunciation guide (smaller). */

export function ReverseEssentialShell({
  subtitle,
  title,
  emoji,
  description,
  children,
}: {
  subtitle: string;
  title: string;
  emoji: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-10 py-4">
      <Link
        href="/reverse/essentials"
        className="thai inline-flex text-sm text-stone-500 hover:text-stone-800"
      >
        ← ทั้งหมด
      </Link>

      <section>
        <span className="section-label text-mint-700 thai">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
          พื้นฐาน · Essential
        </span>
        <div className="mt-3 flex items-start gap-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-50 text-3xl">
            {emoji}
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
              {subtitle}
            </h1>
            <div className="thai mt-1 text-lg text-stone-500">{title}</div>
          </div>
        </div>
        <p className="thai mt-4 max-w-2xl text-stone-600">{description}</p>
      </section>

      {children}
    </div>
  );
}

/* ---- shared atoms for reverse-essentials pages ---- */

/** A row with big English word + Thai phonetic + Thai meaning.
    Used across numbers, colors, animals, food, etc. */
export function EnRow({
  en,
  phonetic,
  th,
  note,
}: {
  en: string;
  phonetic: string;
  th: string;
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 transition hover:border-mint-300">
      <div className="flex items-baseline gap-3">
        <span className="text-xl font-bold text-stone-900">{en}</span>
        <span className="thai text-sm text-mint-700">{phonetic}</span>
      </div>
      <div className="text-right">
        <div className="thai text-sm text-stone-700">{th}</div>
        {note && <div className="text-[11px] text-stone-400">{note}</div>}
      </div>
    </div>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black tracking-tight text-stone-900 sm:text-2xl">
      {children}
    </h2>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label text-mint-700 thai">
      <span className="h-1 w-1 rounded-full bg-mint-500" />
      {children}
    </div>
  );
}

export function Callout({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-mint-500/25 bg-mint-50 p-4 text-sm">
      {label && (
        <div className="thai mb-1 text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
          {label}
        </div>
      )}
      <div className="text-stone-800">{children}</div>
    </div>
  );
}

export function LinkCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="thai inline-flex items-center gap-2 rounded-full bg-mint-500 px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:scale-[1.02] hover:bg-mint-400"
    >
      {children}
    </Link>
  );
}

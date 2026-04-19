import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center space-y-10 py-8">
      <div className="text-center">
        <div className="text-6xl">🇹🇭 ↔ 🇬🇧</div>
        <h1 className="mt-4 text-4xl font-bold text-stone-800">
          Thai &amp; English
        </h1>
        <p className="mt-2 text-lg text-stone-600">
          ภาษาไทยและอังกฤษ — เลือกภาษาที่อยากเรียน
        </p>
        <p className="text-stone-500">What do you want to learn?</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/thai"
          className="group rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
        >
          <div className="text-5xl">🇹🇭</div>
          <div className="mt-4 text-2xl font-bold text-stone-800">
            Learn Thai
          </div>
          <div className="mt-1 text-sm font-medium text-brand-700">
            เรียนภาษาไทย
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Everyday phrases, word-by-word breakdowns, tone training and
            memory games. For English speakers living in Thailand.
          </p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
            Get started →
          </div>
        </Link>

        <Link
          href="/reverse"
          className="group rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
        >
          <div className="text-5xl">🇬🇧</div>
          <div className="mt-4 text-2xl font-bold text-stone-800">
            Learn English
          </div>
          <div className="thai mt-1 text-sm font-medium text-blue-700">
            เรียนภาษาอังกฤษ
          </div>
          <p className="mt-3 text-sm text-stone-600">
            ประโยคอังกฤษที่ใช้ในชีวิตประจำวัน — for Thai speakers who want
            everyday English for shops, taxis, tourists and travel.
          </p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2">
            เริ่มเรียน →
          </div>
        </Link>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center text-sm text-stone-600">
        <p>
          Both sides share the same philosophy: <strong>real sentences you'll
          actually use</strong>, broken down word by word, with games that
          reinforce memory. No streaks nagging you. No cartoon owls.
        </p>
      </div>
    </div>
  );
}

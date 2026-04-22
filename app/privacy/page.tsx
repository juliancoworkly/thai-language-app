export const metadata = {
  title: "Privacy Policy — Phuut Thai",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 py-6 text-stone-800">
      <span className="eyebrow-pill-light">Legal</span>
      <h1 className="display-h2 mt-4 text-stone-900">Privacy Policy</h1>
      <p className="text-sm text-stone-500">Last updated: 22 April 2026</p>

      <section className="rounded-2xl border border-mint-500/30 bg-mint-50 p-5 text-sm">
        <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
          สรุปเป็นภาษาไทย
        </div>
        <ul className="thai mt-3 list-disc space-y-1 pl-5 text-stone-800">
          <li>เราเก็บข้อมูลเท่าที่จำเป็นเพื่อให้แอปทำงานได้ ไม่ขายข้อมูลให้ใคร ไม่มีโฆษณา</li>
          <li>อีเมลของคุณใช้สำหรับล็อกอินด้วยลิงก์เวทมนตร์และใบเสร็จเท่านั้น</li>
          <li>คุณมีสิทธิเข้าถึง แก้ไข ลบ และขอโอนย้ายข้อมูลของคุณได้ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)</li>
          <li>ติดต่อเรื่องข้อมูลส่วนบุคคลที่{" "}
            <a href="mailto:privacy@thaiandenglish.com" className="text-mint-700 underline">
              privacy@thaiandenglish.com
            </a>
          </li>
        </ul>
      </section>

      <p>
        This Privacy Policy explains how <strong>Cultra Lab Limited
        Partnership</strong> (&quot;we&quot;, &quot;us&quot;), registered in
        Thailand at <strong>1st Floor, PKCD Building, 9, 8 Muang Naka Rd,
        Phuket 83000, Thailand</strong>, collects, uses, discloses and protects
        your personal data when you use thaiandenglish.com or the Phuut Thai
        application (the &quot;Service&quot;). This policy is written to comply
        with the <strong>Personal Data Protection Act B.E. 2562 (2019)</strong>{" "}
        (&quot;PDPA&quot;) and, where relevant, the GDPR and UK GDPR.
      </p>

      <h2 className="pt-4 text-xl font-bold">1. Data controller</h2>
      <p>
        The data controller responsible for your personal data under the PDPA
        is Cultra Lab Limited Partnership. For any privacy-related questions
        or requests, contact{" "}
        <a className="text-mint-700 underline" href="mailto:privacy@thaiandenglish.com">
          privacy@thaiandenglish.com
        </a>
        . We are not legally required to appoint a Data Protection Officer
        given our size and the limited scope of personal data we process, but
        the inbox above is monitored as the primary privacy contact.
      </p>

      <h2 className="pt-4 text-xl font-bold">2. What we collect</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Email address</strong>, if you create an account. Used to
          send magic-link sign-in emails and transactional notices
          (e.g. receipts, trial-ending reminders, security alerts).
        </li>
        <li>
          <strong>Learning progress</strong>: the sentences and words you have
          seen, spaced-repetition card states, review counts, game scores.
        </li>
        <li>
          <strong>Profile preferences</strong>: your chosen learning mode,
          interface language, gender (used for Thai pronouns and polite
          particles), level, kid-mode flag, and an optional nickname.
        </li>
        <li>
          <strong>Subscription status</strong>, if you subscribe to paid Thai
          mode: trial / active / cancelled state and billing period end date.
          Payment card details are handled entirely by Paddle and never reach
          our servers.
        </li>
        <li>
          <strong>Basic technical data</strong>: browser user-agent, request
          timestamps, IP address. Stored transiently by our hosting and CDN
          providers (GitHub Pages, Supabase) for security, anti-abuse and
          service reliability, typically for no more than 30 days.
        </li>
      </ul>
      <p className="text-sm text-stone-500">
        We do <strong>not</strong> collect your contacts, precise location,
        microphone audio, photos, or any biometric data. We do not run
        advertising trackers. We do not process special-category (sensitive)
        personal data such as race, religion, health or political opinion.
      </p>

      <h2 className="pt-4 text-xl font-bold">3. Why we use it — and our legal basis</h2>
      <p>
        Under PDPA Section 24, we must identify a lawful basis for each
        purpose of processing. Here is what we do and why:
      </p>
      <div className="overflow-x-auto">
        <table className="mt-2 w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-300 text-left">
              <th className="py-2 pr-4 font-semibold">Purpose</th>
              <th className="py-2 pr-4 font-semibold">Data</th>
              <th className="py-2 font-semibold">Legal basis</th>
            </tr>
          </thead>
          <tbody className="[&_td]:border-b [&_td]:border-stone-200 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top">
            <tr>
              <td>Operating your account and syncing progress across devices</td>
              <td>Email, progress, profile</td>
              <td>Performance of contract (PDPA s.24(3))</td>
            </tr>
            <tr>
              <td>Sending magic-link login emails</td>
              <td>Email</td>
              <td>Performance of contract</td>
            </tr>
            <tr>
              <td>Processing subscription payments</td>
              <td>Email, subscription status</td>
              <td>Performance of contract</td>
            </tr>
            <tr>
              <td>Personalising content (level, pronouns, kid mode)</td>
              <td>Profile</td>
              <td>Performance of contract</td>
            </tr>
            <tr>
              <td>Transactional receipts, security and trial-ending notices</td>
              <td>Email</td>
              <td>Legal obligation + legitimate interest (PDPA s.24(5))</td>
            </tr>
            <tr>
              <td>Fraud prevention, anti-abuse, log retention</td>
              <td>Technical data</td>
              <td>Legitimate interest</td>
            </tr>
            <tr>
              <td>Aggregated, non-identifying usage analysis</td>
              <td>Derived from progress and technical data</td>
              <td>Legitimate interest</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-stone-500">
        We do not rely on consent as a legal basis for the data above, because
        each item is necessary to deliver the Service you signed up for. We
        will only ask for separate consent if we later introduce optional
        processing (for example, product-research emails), and you can
        withdraw that consent at any time.
      </p>

      <h2 className="pt-4 text-xl font-bold">4. Where your data lives</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Supabase</strong> (PostgreSQL, Singapore region): user
          accounts, authentication and progress data. Row-level security
          ensures each user can only read and modify their own row.
        </li>
        <li>
          <strong>Paddle.com Market Ltd</strong> (United Kingdom): payment
          processing and subscription management. Paddle is our Merchant of
          Record, so they are a separate data controller for the payment data
          they hold — see{" "}
          <a
            href="https://www.paddle.com/legal/privacy"
            target="_blank"
            rel="noreferrer"
            className="text-mint-700 underline"
          >
            paddle.com/legal/privacy
          </a>
          .
        </li>
        <li>
          <strong>GitHub Pages</strong> (CDN, US / global): serves the static
          site. Transient request logs only.
        </li>
        <li>
          <strong>Your browser</strong>: a copy of your progress is cached
          locally for offline use; clearing your browser storage clears it.
        </li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">5. Cross-border transfers</h2>
      <p>
        Some of the providers above store or process data outside Thailand.
        Under PDPA Section 28, cross-border transfers are permitted where the
        destination country has adequate data protection standards, or where
        appropriate safeguards are in place. We rely on the following
        safeguards:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Singapore has an adequacy framework with Thailand under the PDPC&apos;s guidelines.</li>
        <li>Paddle&apos;s UK operations are subject to UK GDPR, which the PDPC treats as providing adequate protection.</li>
        <li>Contractual safeguards in each provider&apos;s data-processing agreement.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">6. Who we share with</h2>
      <p>
        We do not sell your data. We share it only with the service providers
        listed in Section 4, each of which is bound by their own privacy
        commitments and a data-processing agreement with us. We never share
        with advertisers, data brokers or marketing networks.
      </p>
      <p>
        We may disclose data if required by Thai law or a valid order from a
        competent Thai authority (for example, the Computer Crime Act B.E.
        2560 sometimes requires service providers to preserve or produce
        specific records). Where permitted, we will notify you.
      </p>

      <h2 className="pt-4 text-xl font-bold">7. Retention</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Account and progress data</strong>: for as long as your account is active.</li>
        <li>
          <strong>After account deletion</strong>: we delete your personal
          data within 30 days, except for tax invoices retained by Paddle for
          up to 7 years as required by accounting and tax law.
        </li>
        <li>
          <strong>Technical logs</strong>: up to 30 days (Supabase), and up to
          90 days under the Computer Crime Act for traffic records.
        </li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">8. Your rights under the PDPA</h2>
      <p>
        If you are a data subject in Thailand, the PDPA gives you the
        following rights. Many of these rights are also granted under GDPR
        and UK GDPR on substantially similar terms, so EU and UK residents
        can exercise the equivalent rights.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Right to be informed</strong> (PDPA s.23) — covered by this policy.</li>
        <li><strong>Right of access</strong> (s.30) — request a copy of the personal data we hold about you.</li>
        <li><strong>Right to rectification</strong> (s.35) — have inaccurate or incomplete data corrected.</li>
        <li><strong>Right to erasure</strong> (s.33) — delete your account and associated data.</li>
        <li><strong>Right to restriction</strong> (s.34) — pause our use of your data in certain circumstances.</li>
        <li><strong>Right to data portability</strong> (s.31) — receive your data in a machine-readable format, or have it sent to another provider.</li>
        <li><strong>Right to object</strong> (s.32) — object to processing based on legitimate interests.</li>
        <li><strong>Right to withdraw consent</strong> (s.19) — where processing is based on consent (e.g. future optional marketing).</li>
        <li>
          <strong>Right to lodge a complaint</strong> with the Personal Data
          Protection Committee of Thailand (PDPC). Contact details are at{" "}
          <a
            href="https://www.pdpc.or.th/"
            target="_blank"
            rel="noreferrer"
            className="text-mint-700 underline"
          >
            pdpc.or.th
          </a>
          .
        </li>
      </ul>
      <p>
        To exercise any of these rights, most of them are self-serve from your
        account page. For anything else, email{" "}
        <a className="text-mint-700 underline" href="mailto:privacy@thaiandenglish.com">
          privacy@thaiandenglish.com
        </a>
        . We aim to respond within 30 days as required by PDPA Section 30(3).
      </p>

      <h2 className="pt-4 text-xl font-bold">9. Breach notification</h2>
      <p>
        In the event of a personal-data breach that poses a risk to your
        rights, we will notify the PDPC within 72 hours as required by PDPA
        Section 37(4), and we will notify you without undue delay if the
        breach presents a high risk to your rights and freedoms.
      </p>

      <h2 className="pt-4 text-xl font-bold">10. Children and minors</h2>
      <p>
        Under the PDPA, a minor under 20 years of age (or who has not married)
        generally cannot give valid consent without parental or guardian
        agreement. The Service is designed for learners of any age, but:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>If you are under 20 in Thailand, please use the Service only with the permission of a parent or legal guardian.</li>
        <li>We do not knowingly collect data from children under 10.</li>
        <li>Kid mode, when selected during onboarding, hides adult-context examples (bar phrases, dating scripts, etc.).</li>
      </ul>
      <p>
        If you believe a minor has created an account without appropriate
        consent, please contact us and we will delete the account promptly.
      </p>

      <h2 className="pt-4 text-xl font-bold">11. Cookies &amp; local storage</h2>
      <p>
        We use the browser&apos;s <code>localStorage</code> to cache your
        progress and preferences for offline use, and Supabase&apos;s
        authentication cookie to keep you signed in. These are strictly
        necessary to operate the Service and do not require consent under the
        PDPA. We do not use tracking, analytics or advertising cookies.
      </p>

      <h2 className="pt-4 text-xl font-bold">12. Changes to this policy</h2>
      <p>
        If we make material changes to this Policy we will notify you by
        email or in-app banner at least 14 days before the changes take
        effect. Minor clarifications will be reflected in the &quot;Last
        updated&quot; date above.
      </p>

      <h2 className="pt-4 text-xl font-bold">13. Contact</h2>
      <address className="not-italic">
        Cultra Lab Limited Partnership<br />
        1st Floor, PKCD Building, 9, 8 Muang Naka Rd<br />
        Phuket 83000, Thailand<br />
        Privacy contact:{" "}
        <a className="text-mint-700 underline" href="mailto:privacy@thaiandenglish.com">
          privacy@thaiandenglish.com
        </a>
        <br />
        General contact:{" "}
        <a className="text-mint-700 underline" href="mailto:hello@thaiandenglish.com">
          hello@thaiandenglish.com
        </a>
      </address>

      <p className="pt-6 text-xs text-stone-500">
        © Cultra Lab Limited Partnership. All rights reserved.
      </p>
    </article>
  );
}

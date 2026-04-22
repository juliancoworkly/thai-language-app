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
          <li>เราเก็บข้อมูลเท่าที่จำเป็นเพื่อให้แอปทำงาน ไม่ขายข้อมูล ไม่มีโฆษณา ไม่มีตัวติดตาม</li>
          <li>อีเมลของคุณใช้สำหรับล็อกอินด้วยลิงก์และใบเสร็จเท่านั้น</li>
          <li>คุณมีสิทธิเข้าถึง แก้ไข ลบ คัดค้าน และโอนย้ายข้อมูลของคุณได้ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)</li>
          <li>ติดต่อเรื่องข้อมูลส่วนบุคคล:{" "}
            <a href="mailto:privacy@thaiandenglish.com" className="text-mint-700 underline">
              privacy@thaiandenglish.com
            </a>
          </li>
        </ul>
      </section>

      <p>
        This Privacy Policy explains how <strong>Cultra Lab Limited
        Partnership</strong> (&quot;we&quot;, &quot;us&quot;), registered
        in Thailand at <strong>1st Floor, PKCD Building, 9, 8 Muang Naka
        Rd, Phuket 83000, Thailand</strong>, collects, uses, discloses
        and protects your personal data when you use thaiandenglish.com
        or the Phuut Thai application (the &quot;Service&quot;). This
        policy is written to comply with the Thai <strong>Personal Data
        Protection Act B.E. 2562 (2019)</strong> (&quot;PDPA&quot;) and,
        where applicable, the EU General Data Protection Regulation
        (GDPR) and the UK GDPR.
      </p>

      <h2 className="pt-4 text-xl font-bold">1. Data controller and contact</h2>
      <p>
        The data controller responsible for your personal data under the
        PDPA is Cultra Lab Limited Partnership. For any privacy-related
        question, request, or complaint, contact{" "}
        <a className="text-mint-700 underline" href="mailto:privacy@thaiandenglish.com">
          privacy@thaiandenglish.com
        </a>
        . We are not legally required to appoint a Data Protection
        Officer (PDPA Section 41) given our size, the limited scope of
        personal data we process, and the absence of large-scale
        monitoring or special-category data. The inbox above is
        monitored as our primary privacy contact.
      </p>

      <h2 className="pt-4 text-xl font-bold">2. What we collect</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Email address</strong>, if you create an account. Used
          to send magic-link sign-in emails and transactional notices
          (receipts, trial-ending reminders, security alerts).
        </li>
        <li>
          <strong>Learning progress</strong>: the sentences and words
          you have seen, spaced-repetition card states, review counts,
          game scores.
        </li>
        <li>
          <strong>Profile preferences</strong>: your chosen learning
          mode, interface language, gender (used for Thai pronouns and
          polite particles), level, kid-mode flag, self-declared age
          bracket, and an optional nickname.
        </li>
        <li>
          <strong>Subscription state</strong>, if you subscribe to paid
          Thai mode: trial / active / cancelled status and billing
          period end date. Payment card details are handled entirely by
          Paddle and never reach our servers.
        </li>
        <li>
          <strong>Basic technical data</strong>: browser user-agent,
          request timestamps, IP address. Stored transiently by our
          hosting and infrastructure providers (GitHub Pages, Supabase)
          for security, anti-abuse and service reliability.
        </li>
      </ul>
      <p className="text-sm text-stone-500">
        We do <strong>not</strong> collect your contacts, precise
        location, microphone audio, photos, or any biometric data. We do
        not run analytics or advertising trackers. We do not process
        special-category (sensitive) personal data such as race,
        religion, health, political opinion or sexual orientation. If
        the scope of processing ever changes, we will update this
        section and notify users in accordance with Section 12.
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
              <td>Legal obligation (tax, consumer-protection) and legitimate interest (PDPA s.24(5))</td>
            </tr>
            <tr>
              <td>Fraud prevention, anti-abuse, minimum traffic-log retention under the Computer Crime Act</td>
              <td>Technical data</td>
              <td>Legal obligation and legitimate interest</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-stone-500">
        We do not rely on consent as a legal basis for the processing
        listed above, because each purpose is necessary to deliver the
        Service you signed up for, required by law, or reflects our
        legitimate interest in running a secure service. If we later
        introduce any processing that requires consent (for example,
        optional product-research emails), we will ask separately and
        you will be able to withdraw consent at any time.
      </p>

      <h2 className="pt-4 text-xl font-bold">4. Where your data is stored and who processes it</h2>
      <p>
        We use the following sub-processors under written data-processing
        agreements. They process personal data on our instructions only.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Supabase</strong> (PostgreSQL, Singapore region) —
          user authentication and progress storage. Row-level security
          ensures each user can only read and modify their own row.
        </li>
        <li>
          <strong>GitHub Pages</strong> (CDN, United States / global) —
          serves the static site. Transient request logs only.
        </li>
        <li>
          <strong>Email delivery provider</strong> (via Supabase Auth) —
          transactional email for magic-link sign-in and account
          notices.
        </li>
      </ul>
      <p>
        <strong>Paddle.com Market Limited</strong> (United Kingdom) acts
        as <em>Merchant of Record</em> for payments and operates as a
        <strong> separate independent data controller</strong> for the
        payment data it collects directly from you. Paddle&apos;s own
        privacy policy applies to that data — see{" "}
        <a
          href="https://www.paddle.com/legal/privacy"
          target="_blank"
          rel="noreferrer"
          className="text-mint-700 underline"
        >
          paddle.com/legal/privacy
        </a>
        .
      </p>
      <p>
        Your browser also caches a local copy of your progress in{" "}
        <code>localStorage</code> for offline use. Clearing your browser
        storage clears this local copy.
      </p>

      <h2 className="pt-4 text-xl font-bold">5. Cross-border transfers</h2>
      <p>
        Some sub-processors above store or process personal data outside
        Thailand. Under PDPA Section 28, cross-border transfers are
        permitted where the destination country has adequate data
        protection standards, or where appropriate safeguards are in
        place. We rely on the following safeguards:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Singapore, where Supabase hosts EU and APAC customer data, has personal-data laws (the PDPA 2012) recognised by the Thai PDPC as offering broadly equivalent protection.</li>
        <li>The United Kingdom, where Paddle operates, is subject to the UK GDPR — recognised by the Thai PDPC as providing adequate protection.</li>
        <li>Contractual safeguards in each provider&apos;s data-processing agreement, including PDPA- and GDPR-aligned obligations.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">6. Who we share with</h2>
      <p>
        We do not sell your personal data. We do not share it with
        advertisers, data brokers, or marketing networks. We disclose it
        only to:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>the sub-processors listed in Section 4, under written data-processing agreements;</li>
        <li>professional advisers (lawyers, accountants, auditors), under duties of confidentiality, where reasonably necessary;</li>
        <li>authorities or courts, where required by Thai law or a valid order from a competent authority (for example, under the Computer Crime Act B.E. 2560 which requires service providers to preserve or produce certain records). Where permitted, we will notify you first;</li>
        <li>a successor entity in a merger, acquisition, reorganisation or asset sale, as described in our Terms of Service, provided the successor is bound by terms substantially equivalent to this Policy.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">7. Retention</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Account and progress data</strong>: for as long as your Account is active.</li>
        <li><strong>After account deletion</strong>: we delete your personal data within 30 days, except for tax invoices retained by Paddle for up to 7 years under UK and Thai accounting and tax law.</li>
        <li><strong>Support / privacy-request emails</strong>: up to 2 years after the request is resolved, for dispute-resolution and audit purposes.</li>
        <li><strong>Infrastructure logs</strong>: up to 30 days (Supabase) and up to 90 days for traffic records where required by the Computer Crime Act.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">8. Your rights under the PDPA</h2>
      <p>
        If you are a data subject in Thailand, the PDPA grants you the
        following rights. Equivalent rights exist under the GDPR and UK
        GDPR on substantially similar terms.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Right to be informed</strong> (PDPA s.23) — covered by this policy.</li>
        <li><strong>Right of access</strong> (s.30) — request a copy of the personal data we hold about you.</li>
        <li><strong>Right to rectification</strong> (s.35) — have inaccurate or incomplete data corrected.</li>
        <li><strong>Right to erasure / account deletion</strong> (s.33) — delete your account and associated data.</li>
        <li><strong>Right to restriction</strong> (s.34) — pause our use of your data in certain circumstances.</li>
        <li><strong>Right to data portability</strong> (s.31) — receive your data in a machine-readable format, or have it sent to another provider.</li>
        <li><strong>Right to object</strong> (s.32) — object to processing based on legitimate interests.</li>
        <li><strong>Right to withdraw consent</strong> (s.19), where processing is based on consent.</li>
        <li>
          <strong>Right to lodge a complaint</strong> with the Personal
          Data Protection Committee of Thailand (PDPC). Contact details
          are at{" "}
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
        To exercise any of these rights, email{" "}
        <a className="text-mint-700 underline" href="mailto:privacy@thaiandenglish.com">
          privacy@thaiandenglish.com
        </a>
        {" "}from the email address on your Account. We may need to ask
        follow-up questions to confirm your identity and scope the
        request. We aim to respond substantively <strong>within 30
        days</strong> as required by PDPA Section 30(3). There is no
        charge for reasonable requests; we may charge a reasonable fee
        or refuse manifestly unfounded or excessive requests to the
        extent permitted by law.
      </p>

      <h2 className="pt-4 text-xl font-bold">9. Breach notification</h2>
      <p>
        In the event of a personal-data breach that poses a risk to your
        rights, we will notify the PDPC within 72 hours as required by
        PDPA Section 37(4), and we will notify you without undue delay
        if the breach presents a high risk to your rights and freedoms.
      </p>

      <h2 className="pt-4 text-xl font-bold">10. Children and minors</h2>
      <p>
        Under the PDPA, a person under 20 years of age who is not
        married is a minor and cannot give valid consent without
        parental or guardian agreement. During onboarding we ask you to
        self-declare whether you are under 18, which controls an
        in-product Kid Mode filter; this is not a legal
        age-verification.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>If you are under 20 and resident in Thailand, please use the Service only with the permission of a parent or legal guardian, who accepts our Terms of Service on your behalf.</li>
        <li>We do not knowingly collect data from children under 10. If we learn that we have, we will delete it without undue delay.</li>
        <li>Kid Mode, when selected, hides adult-context examples (bar phrases, dating scripts, etc.).</li>
        <li>A parent or guardian who believes a minor has created an Account without appropriate consent should contact <a className="text-mint-700 underline" href="mailto:privacy@thaiandenglish.com">privacy@thaiandenglish.com</a> and we will delete the Account promptly.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">11. Cookies &amp; local storage</h2>
      <p>
        We use your browser&apos;s <code>localStorage</code> to cache
        your progress and preferences for offline use, and a Supabase
        authentication cookie to keep you signed in. These are strictly
        necessary to operate the Service and do not require separate
        consent under the PDPA. We do not use analytics, tracking, or
        advertising cookies. If we ever add any non-essential cookie, we
        will request your consent before setting it.
      </p>

      <h2 className="pt-4 text-xl font-bold">12. Changes to this policy</h2>
      <p>
        If we make material changes to this Policy we will notify you by
        email (if you have an Account) or by in-app banner at least{" "}
        <strong>14 days</strong> before they take effect. Minor
        clarifications will be reflected in the &quot;Last updated&quot;
        date at the top of this page.
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

export const metadata = {
  title: "Privacy Policy — Phuut Thai",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 py-6 text-stone-800">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-stone-500">Last updated: 20 April 2026</p>

      <p>
        This Privacy Policy explains how <strong>Cultra Lab Ltd Part</strong>
        (&quot;we&quot;, &quot;us&quot;) collects and uses your information
        when you use thaiandenglish.com or the Phuut Thai application (the
        &quot;Service&quot;). We take privacy seriously and try to keep what
        we store to the minimum needed to make the app work.
      </p>

      <h2 className="pt-4 text-xl font-bold">1. What we collect</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Email address</strong>, if you create an account. Used only
          to send magic-link sign-in emails and occasional transactional
          notices (e.g. receipts, trial-ending reminders).
        </li>
        <li>
          <strong>Learning progress</strong>: the sentences and words you&apos;ve
          seen, spaced-repetition card states, review counts, game scores.
        </li>
        <li>
          <strong>Profile preferences</strong>: your chosen mode, gender (for
          Thai pronouns), level, whether kid mode is on, and optional nickname.
        </li>
        <li>
          <strong>Subscription status</strong> (if applicable): trial or
          active status, billing period end date. Actual payment card details
          are handled by Paddle and never touch our servers.
        </li>
        <li>
          <strong>Basic technical info</strong>: browser, timestamp of each
          request — stored transiently by our hosting and CDN providers
          (GitHub Pages, IONOS, Supabase) for security and reliability.
        </li>
      </ul>
      <p className="text-sm text-stone-500">
        We do <strong>not</strong> collect contacts, location, microphone
        audio, or any biometric data. We do not run advertising trackers.
      </p>

      <h2 className="pt-4 text-xl font-bold">2. How we use it</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>To operate the Service and sync your progress across devices.</li>
        <li>To personalise content to your level and pronoun preferences.</li>
        <li>To process payments (via Paddle) and honor your subscription.</li>
        <li>To send essential emails: magic-link logins, receipts, security notices, optional product updates.</li>
        <li>To improve the app using aggregated, non-personal usage data.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">3. Where your data lives</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Supabase</strong> (PostgreSQL, Singapore region) — user accounts and progress, protected by row-level security.</li>
        <li><strong>Paddle</strong> — payment processing and subscription management (they are our Merchant of Record).</li>
        <li><strong>Your browser</strong> — a copy of your progress is cached locally for offline use; clearing your browser storage clears it.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">4. Who we share with</h2>
      <p>
        We do not sell your data. We share it only with service providers we
        need to run the app: Supabase (hosting and auth), Paddle (payments),
        and email delivery providers for transactional email. Each is bound
        by their own privacy commitments. We never share with advertisers.
      </p>

      <h2 className="pt-4 text-xl font-bold">5. Cookies &amp; local storage</h2>
      <p>
        We use the browser&apos;s localStorage to remember your progress and
        preferences, and Supabase&apos;s auth cookie to keep you signed in.
        We do not use tracking or advertising cookies.
      </p>

      <h2 className="pt-4 text-xl font-bold">6. Data retention</h2>
      <p>
        Your progress and profile are kept as long as your account is active.
        If you delete your account, we delete the associated data within 30
        days, except where we are legally required to retain it (e.g. invoices
        for tax records, retained by Paddle for up to 7 years).
      </p>

      <h2 className="pt-4 text-xl font-bold">7. Your rights</h2>
      <p>
        You can access, correct, export, or delete your data at any time from
        your account page, or by emailing{" "}
        <a className="text-brand-700 underline" href="mailto:hello@thaiandenglish.com">hello@thaiandenglish.com</a>.
        If you are a resident of a jurisdiction with specific data-subject
        rights (EU, UK, etc.), we honor those requests without additional
        verification requirements beyond confirming you control the account.
      </p>

      <h2 className="pt-4 text-xl font-bold">8. Children</h2>
      <p>
        The Service is not directed at children under 13. If you are between
        13 and 18, we ask that you have parental or guardian consent. Kid
        mode, when selected, hides adult-context examples.
      </p>

      <h2 className="pt-4 text-xl font-bold">9. International transfers</h2>
      <p>
        Data may be transferred to and processed in Singapore (Supabase), the
        United Kingdom (Paddle), the United States (email providers), and
        other jurisdictions. We use providers with appropriate safeguards.
      </p>

      <h2 className="pt-4 text-xl font-bold">10. Changes</h2>
      <p>
        If we make material changes to this Policy we will notify you by
        email or in-app banner at least 14 days before the changes take
        effect.
      </p>

      <h2 className="pt-4 text-xl font-bold">11. Contact</h2>
      <p>
        Questions? Email{" "}
        <a className="text-brand-700 underline" href="mailto:hello@thaiandenglish.com">hello@thaiandenglish.com</a>.
      </p>

      <p className="pt-6 text-xs text-stone-500">
        © Cultra Lab Ltd Part. All rights reserved.
      </p>
    </article>
  );
}

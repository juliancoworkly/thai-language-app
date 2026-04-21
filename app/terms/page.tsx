export const metadata = {
  title: "Terms of Service — Phuut Thai",
};

export default function Terms() {
  return (
    <article className="prose mx-auto max-w-3xl space-y-4 py-6 text-stone-800">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-sm text-stone-500">
        Last updated: 20 April 2026
      </p>

      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and
        use of the website <strong>thaiandenglish.com</strong> and the
        associated application &quot;Phuut Thai&quot; (the &quot;Service&quot;),
        operated by <strong>Cultra Lab Limited Partnership</strong> (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;), a Limited Partnership registered
        in Thailand at <strong>1st Floor, PKCD Building, 9, 8 Muang Naka Rd,
        Phuket 83000, Thailand</strong>. By creating an account or using the
        Service you agree to be bound by these Terms. If you do not agree,
        do not use the Service.
      </p>

      <h2 className="pt-4 text-xl font-bold">1. The Service</h2>
      <p>
        Phuut Thai is a language-learning application offering Thai-for-English
        speakers (&quot;Thai mode&quot;) and English-for-Thai speakers
        (&quot;English mode&quot;) content, including sentences, vocabulary,
        audio, and interactive games. We do not guarantee any particular
        fluency outcome — results depend on your own effort and practice.
      </p>

      <h2 className="pt-4 text-xl font-bold">2. Accounts</h2>
      <p>
        You may use the Service without an account in local-only mode, or
        create an account using your email address to sync progress across
        devices. You are responsible for the security of your email inbox
        (which is used for magic-link sign-in) and for all activity on your
        account. You must be at least 13 years old to create an account.
        Users under 18 should have parental or guardian consent.
      </p>

      <h2 className="pt-4 text-xl font-bold">3. Free and Paid Tiers</h2>
      <p>
        The English mode (content designed for Thai nationals learning English)
        is provided <strong>free of charge</strong> and does not require
        payment.
      </p>
      <p>
        The Thai mode (content designed for non-Thai speakers learning Thai)
        is offered on a paid subscription at <strong>THB 1,000 per year</strong>
        (approximately USD 28), preceded by a <strong>3-day free trial</strong>.
        Payment is collected by Paddle.com Market Ltd, our Merchant of Record,
        which handles tax and billing globally.
      </p>
      <p>
        Subscriptions renew automatically each year unless cancelled before
        the renewal date. You can cancel at any time from your account billing
        page; cancellation takes effect at the end of the current billing
        period and no further charges will occur.
      </p>

      <h2 className="pt-4 text-xl font-bold">4. Refunds</h2>
      <p>
        Refund eligibility is described in our{" "}
        <a className="text-mint-700 underline" href="/refund">Refund Policy</a>.
      </p>

      <h2 className="pt-4 text-xl font-bold">5. Acceptable Use</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>You agree not to reverse engineer, scrape, or bulk-download the Service.</li>
        <li>You agree not to share, sell, or sublicense your account access.</li>
        <li>You agree not to use the Service for any unlawful purpose.</li>
        <li>We reserve the right to suspend or terminate accounts that violate these rules.</li>
      </ul>

      <h2 className="pt-4 text-xl font-bold">6. Intellectual Property</h2>
      <p>
        All content in the Service — including the sentence database, audio,
        graphics, code, and design — is the property of Cultra Lab Limited Partnership
        or its licensors and is protected by copyright. You are granted a
        personal, non-transferable, non-exclusive license to use the Service
        for your own language-learning purposes only. Screenshotting individual
        phrases for personal study is fine; republishing or building a
        competing product from our content is not.
      </p>

      <h2 className="pt-4 text-xl font-bold">7. Your Content</h2>
      <p>
        The Service stores learning progress, optional nicknames, and
        preferences. We do not publish user content. You retain ownership of
        any information you submit.
      </p>

      <h2 className="pt-4 text-xl font-bold">8. Disclaimers</h2>
      <p>
        The Service is provided &quot;as is&quot; without warranty of any
        kind. We do not guarantee uninterrupted availability, specific
        linguistic outcomes, or compatibility with every device. Automated
        text-to-speech audio is provided for convenience and may not reflect
        perfect pronunciation.
      </p>

      <h2 className="pt-4 text-xl font-bold">9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Cultra Lab Limited Partnership shall not
        be liable for any indirect, incidental, consequential, or punitive
        damages arising from your use of the Service. Our total liability in
        any event shall not exceed the amount paid by you to us in the twelve
        months preceding the claim.
      </p>

      <h2 className="pt-4 text-xl font-bold">10. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or
        terminate accounts for breach of these Terms, non-payment, or legal
        requirement. Upon termination your access ends; you may export or
        delete your data beforehand via your account page.
      </p>

      <h2 className="pt-4 text-xl font-bold">11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Kingdom of Thailand.
        Disputes shall be submitted to the competent courts of Bangkok,
        Thailand.
      </p>

      <h2 className="pt-4 text-xl font-bold">12. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be
        notified by email or in-app banner at least 14 days before taking
        effect. Continued use after changes constitutes acceptance.
      </p>

      <h2 className="pt-4 text-xl font-bold">13. Contact</h2>
      <address className="not-italic">
        Cultra Lab Limited Partnership<br />
        1st Floor, PKCD Building, 9, 8 Muang Naka Rd<br />
        Phuket 83000, Thailand<br />
        Email: <a className="text-mint-700 underline" href="mailto:hello@thaiandenglish.com">hello@thaiandenglish.com</a>
      </address>

      <p className="pt-6 text-xs text-stone-500">
        © Cultra Lab Limited Partnership. All rights reserved.
      </p>
    </article>
  );
}

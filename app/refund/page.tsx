export const metadata = {
  title: "Refund Policy — Phuut Thai",
};

export default function Refund() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 py-6 text-stone-800">
      <h1 className="text-3xl font-bold">Refund Policy</h1>
      <p className="text-sm text-stone-500">Last updated: 20 April 2026</p>

      <p>
        Thank you for subscribing to Phuut Thai, operated by{" "}
        <strong>Cultra Lab Ltd Part</strong>. This policy describes when
        you can get a refund on the annual Thai-mode subscription. The
        English-for-Thais mode is always free and is not affected by this
        policy.
      </p>

      <h2 className="pt-4 text-xl font-bold">1. Free trial</h2>
      <p>
        Every new subscription starts with a <strong>3-day free trial</strong>.
        If you cancel at any point during the trial, you will not be charged.
        To cancel, go to <strong>Account → Billing</strong> and click cancel,
        or email us before the trial ends.
      </p>

      <h2 className="pt-4 text-xl font-bold">2. After the trial — 14-day goodwill window</h2>
      <p>
        If you were charged at the end of the trial and realise within{" "}
        <strong>14 days</strong> that the product isn&apos;t for you, email{" "}
        <a className="text-brand-700 underline" href="mailto:hello@thaiandenglish.com">hello@thaiandenglish.com</a>{" "}
        with the email address on your account. We will issue a full refund
        via our payment processor (Paddle), no reasons required.
      </p>

      <h2 className="pt-4 text-xl font-bold">3. After 14 days</h2>
      <p>
        Refunds after 14 days are considered on a case-by-case basis. If the
        Service has been materially unavailable or misrepresented, contact
        us and we will resolve it fairly. Otherwise we do not usually offer
        refunds on the remaining annual period, but you can always cancel
        auto-renewal to avoid future charges.
      </p>

      <h2 className="pt-4 text-xl font-bold">4. Cancellation</h2>
      <p>
        You can cancel your subscription at any time from the Account →
        Billing page. Cancelling stops auto-renewal — your access remains
        until the end of the paid period, and no further charges will occur.
      </p>

      <h2 className="pt-4 text-xl font-bold">5. Payment issues</h2>
      <p>
        If a charge shows on your statement you don&apos;t recognise, or
        if you were charged after cancelling, email us and we will
        investigate and refund any error within 5 business days.
      </p>

      <h2 className="pt-4 text-xl font-bold">6. How refunds are issued</h2>
      <p>
        All refunds are processed via Paddle, our Merchant of Record, back to
        the original payment method. Refunds typically appear on your
        statement within 5-10 business days depending on your bank.
      </p>

      <h2 className="pt-4 text-xl font-bold">7. Contact</h2>
      <address className="not-italic">
        Cultra Lab Ltd Part<br />
        1st Floor, PKCD Building, 9, 8 Muang Naka Rd<br />
        Phuket 83000, Thailand<br />
        Email: <a className="text-brand-700 underline" href="mailto:hello@thaiandenglish.com">hello@thaiandenglish.com</a>
      </address>

      <p className="pt-6 text-xs text-stone-500">
        © Cultra Lab Ltd Part. All rights reserved.
      </p>
    </article>
  );
}

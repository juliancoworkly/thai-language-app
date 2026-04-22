export const metadata = {
  title: "Refund Policy — Phuut Thai",
};

export default function Refund() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 py-6 text-stone-800">
      <span className="eyebrow-pill-light">Legal</span>
      <h1 className="display-h2 mt-4 text-stone-900">Refund Policy</h1>
      <p className="text-sm text-stone-500">Last updated: 22 April 2026</p>

      <section className="rounded-2xl border border-mint-500/30 bg-mint-50 p-5 text-sm">
        <div className="thai text-[11px] font-mono uppercase tracking-[0.2em] text-mint-700">
          สรุปเป็นภาษาไทย
        </div>
        <ul className="thai mt-3 list-disc space-y-1 pl-5 text-stone-800">
          <li>ฝั่งฟรี (ภาษาอังกฤษสำหรับคนไทย) ไม่มีค่าใช้จ่ายใดๆ ไม่ต้องขอคืนเงิน</li>
          <li>มีทดลองใช้ฟรี 3 วัน ยกเลิกก่อนหมดเวลาไม่คิดเงิน</li>
          <li>ภายใน 14 วันหลังถูกเรียกเก็บเงิน คืนเงินเต็มจำนวนโดยไม่ต้องให้เหตุผล</li>
          <li>
            ส่งอีเมลถึง{" "}
            <a className="text-mint-700 underline" href="mailto:hello@thaiandenglish.com">
              hello@thaiandenglish.com
            </a>
          </li>
        </ul>
      </section>

      <p>
        This Refund Policy describes when and how you can get a refund on the
        annual Thai-mode subscription offered by{" "}
        <strong>Cultra Lab Limited Partnership</strong>. The
        English-for-Thais mode is always free and is not affected by this
        policy. Nothing in this policy limits any rights you may have under
        the Thai Consumer Protection Act B.E. 2522 or other mandatory
        consumer-protection law.
      </p>

      <h2 className="pt-4 text-xl font-bold">1. Free trial</h2>
      <p>
        Every new subscription starts with a <strong>3-day free trial</strong>
        . If you cancel at any point during the trial, you will not be
        charged. To cancel, go to <strong>Account → Billing</strong> and tap
        Cancel, or email us at least 24 hours before the trial ends so we
        have time to stop the charge.
      </p>

      <h2 className="pt-4 text-xl font-bold">2. 14-day goodwill window</h2>
      <p>
        If you were charged at the end of the trial and decide within{" "}
        <strong>14 days of that first charge</strong> that the product isn&apos;t
        for you, email{" "}
        <a className="text-mint-700 underline" href="mailto:hello@thaiandenglish.com">
          hello@thaiandenglish.com
        </a>
        {" "}with the email address on your account. We will issue a full
        refund via Paddle. No reasons required.
      </p>

      <h2 className="pt-4 text-xl font-bold">3. After 14 days</h2>
      <p>
        Refunds after the 14-day window are considered on a case-by-case
        basis. If the Service has been materially unavailable, misrepresented,
        or defective, contact us and we will resolve it fairly — including
        pro-rata refunds for unused paid periods where appropriate. Outside
        those cases we do not usually refund the remainder of the annual
        period, but you can always cancel auto-renewal to prevent future
        charges.
      </p>

      <h2 className="pt-4 text-xl font-bold">4. Cancellation</h2>
      <p>
        You can cancel your subscription at any time from{" "}
        <strong>Account → Billing</strong>. Cancelling stops auto-renewal:
        your access remains until the end of the paid period, and no further
        charges will occur. No cancellation fee applies.
      </p>

      <h2 className="pt-4 text-xl font-bold">5. Payment issues</h2>
      <p>
        If a charge shows on your statement that you don&apos;t recognise, or
        if you were charged after cancelling, please email us. We will
        investigate and, where an error has occurred, issue a full refund
        within 5 business days.
      </p>

      <h2 className="pt-4 text-xl font-bold">6. How refunds are issued</h2>
      <p>
        All refunds are processed via{" "}
        <strong>Paddle.com Market Ltd</strong>, our Merchant of Record, back
        to the original payment method. Refunds typically appear on your
        statement within 5-10 business days depending on your bank or card
        issuer. We are unable to redirect refunds to a different account or
        payment method.
      </p>

      <h2 className="pt-4 text-xl font-bold">7. If we can&apos;t agree</h2>
      <p>
        We aim to resolve refund requests fairly and quickly. If you feel we
        have not handled your request properly, you have the right to file a
        complaint with the Office of the Consumer Protection Board (OCPB) of
        Thailand at{" "}
        <a
          href="https://www.ocpb.go.th/"
          target="_blank"
          rel="noreferrer"
          className="text-mint-700 underline"
        >
          ocpb.go.th
        </a>
        . For purely payment-related disputes, you can also contact Paddle
        directly via{" "}
        <a
          href="https://paddle.net/"
          target="_blank"
          rel="noreferrer"
          className="text-mint-700 underline"
        >
          paddle.net
        </a>
        .
      </p>

      <h2 className="pt-4 text-xl font-bold">8. Contact</h2>
      <address className="not-italic">
        Cultra Lab Limited Partnership<br />
        1st Floor, PKCD Building, 9, 8 Muang Naka Rd<br />
        Phuket 83000, Thailand<br />
        Email:{" "}
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

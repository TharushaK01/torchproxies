import Link from 'next/link';

export const metadata = {
  title: 'Affiliate Terms | Torch Proxies',
  description: 'Affiliate Program Terms and Conditions for Torch Proxies.',
};

export default function AffiliateTerms() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300 px-6 py-16 md:px-12 lg:px-24 font-['Urbanist'] selection:bg-orange-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-regular tracking-tight text-[#ff5500] uppercase mt-[100px]">
            Affiliate Program Terms
          </h1>
          <p className="mt-2 text-sm text-zinc-400 font-medium">
            Last Updated: December 06, 2024
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="leading-relaxed">
            By signing up as an affiliate and promoting Torch Proxies, you agree to the following terms. Please read them carefully before participating.
          </p>
        </section>

        {/* Section 1: Approval */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            1. Approval and Promotion Rights
          </h2>
          <p className="leading-relaxed">
            All applicants go through an approval process before gaining access to the affiliate program (see Section 7). Upon approval, affiliates may promote Torch Proxies on platforms they own or manage, subject to the promotional guidelines in Section 10.
          </p>
        </section>

        {/* Section 2: Links */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            2. Affiliate Links and Tracking
          </h2>
          <p className="leading-relaxed">
            Approved affiliates receive a unique referral link via their dashboard at{' '}
            <Link href="https://affiliate.torchlabs.xyz" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors">
              affiliate.torchlabs.xyz
            </Link>. Purchases made by users who click your link are tracked and attributed to your account, and the applicable commission structure (Section 3) is applied.
          </p>
        </section>

        {/* Section 3: Commission Structure */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            3. Commission Structure
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-300">
            <li>
              Standard commission starts at 15% on a referral&apos;s first purchase and 8% recurring on all subsequent purchases.
            </li>
            <li>
              Commission rates increase as your referral volume grows, up to 25% for first purchases and 12% for recurring at the top tier.
            </li>
            <li>
              Commission applies to all Torch Proxies products: Standard, Premium, Plan X, and ISP.
            </li>
            <li>
              Unlike programs that cap total lifetime earnings per referral, Torch Proxies does not cap what a single referral can earn you. If your referral keeps buying, you keep getting paid.
            </li>
            <li>
              Special commission arrangements may be agreed separately in writing between Torch Proxies and the affiliate.
            </li>
            <li>
              If a referred purchase is refunded, cancelled, or charged back, the associated commission will be reversed or deducted from the affiliate&apos;s next payout. If the commission has already been paid out before the refund occurs, Torch Proxies reserves the right to deduct the amount from the affiliate&apos;s future earnings.
            </li>
            <li>
              All commissions are subject to Section 4 (Prohibited Use), Section 5 (Non-Payment), and Section 6 (Self-Purchasing) below.
            </li>
          </ul>
        </section>

        {/* Section 4: Prohibited Use */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            4. Prohibited Use of Proxies
          </h2>
          <p className="leading-relaxed">
            Torch Proxies does not support or condone illegal use of proxies by referred customers or affiliates. This includes all activity listed in our Acceptable Use Policy (see general Terms of Service), including but not limited to credential stuffing, DDoS, malware distribution, CSAM, sanctions violations, and unauthorized reselling. Torch Proxies reserves the right to terminate an affiliate&apos;s account at its sole discretion if there is evidence proxies referred through their link were promoted for or used in connection with such activity.
          </p>
        </section>

        {/* Section 5: Non-Payment */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            5. Non-Payment Due to Illegal Promotion
          </h2>
          <p className="leading-relaxed">
            Torch Proxies reserves the right to withhold commissions if there is evidence the affiliate engaged in illegal promotion, fraudulent traffic generation, or unethical conduct as described in Section 10. Any evidence of such activity will result in immediate suspension of the affiliate account and forfeiture of unpaid commissions.
          </p>
        </section>

        {/* Section 6: Self-Purchasing */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            6. Self-Purchasing Prohibited
          </h2>
          <p className="leading-relaxed">
            Affiliates may not use their own affiliate link to make purchases, directly or through a proxy account, family member, or associate. Torch Proxies uses automated self-referral detection to flag suspicious activity. Flagged accounts will be manually reviewed before any commission is withheld or account action is taken. Confirmed self-purchasing or fraudulent referral activity will result in immediate account termination and forfeiture of all unpaid commissions.
          </p>
        </section>

        {/* Section 7: Approval */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            7. Affiliate Program Approval
          </h2>
          <p className="leading-relaxed">
            All applicants must complete the onboarding application, including the promotion-channel questions, before being granted access. Torch Proxies reserves the right to reject any applicant at its sole discretion.
          </p>
        </section>

        {/* Section 8: Cookie Duration */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            8. Cookie Duration and Expiration
          </h2>
          <p className="leading-relaxed">
            Tracking cookies from referred users remain active for 30 days after the initial click. After the 30 days, if no purchase is made, the user will no longer be attributed to the affiliate.
          </p>
        </section>

        {/* Section 9: Payouts */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            9. Payouts
          </h2>
          <p className="leading-relaxed">
            Payouts are made at the end of each calendar month. The minimum amount required to withdraw commissions is $10 USD. To request a payout, affiliates should open a support ticket in the Torch Proxies Discord:{' '}
            <Link href="https://discord.com/invite/JSxDs3fDgV" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors" target="_blank" rel="noopener noreferrer">
              https://discord.com/invite/JSxDs3fDgV
            </Link>
          </p>
          <p className="leading-relaxed">
            All payouts are subject to any transaction, processing, or transfer fees charged by the payment platform used (including but not limited to PayPal, Wise, or similar services). These fees are deducted from the affiliate&apos;s earned commission, not paid separately by Torch Proxies.
          </p>
        </section>

        {/* Section 10: Guidelines */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            10. Platform and Promotional Guidelines
          </h2>
          <p className="leading-relaxed">
            Torch Proxies reserves the right to determine which platforms are suitable for affiliate promotion. Promotion is not permitted on coupon aggregation sites, or targeted at personal friends, family, or colleagues for the purpose of generating referrals rather than genuine promotion. Affiliates must disclose their affiliate relationship where required by applicable law (e.g., FTC guidelines in the US). Affiliates may not bid on &quot;Torch Proxies,&quot; &quot;TorchProxies,&quot; or confusingly similar variations or misspellings as paid search keywords on Google Ads, Bing Ads, or any other pay-per-click platform.
          </p>
        </section>

        {/* Section 11: Changes & Termination */}
        <section className="space-y-4 pt-6 border-t border-zinc-900 pb-12">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            11. Changes to Terms and Termination
          </h2>
          <p className="leading-relaxed">
            Torch Proxies reserves the right to modify these terms at any time. Continued participation constitutes acceptance of updated terms. Torch Proxies may terminate or suspend any affiliate&apos;s participation at any time, for any reason, including breach of these Terms.
          </p>
        </section>

      </div>
    </main>
  );
}
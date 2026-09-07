import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Torch Proxies',
  description: 'Terms of Service and legal agreement for Torch Labs Software LLC.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300 px-6 py-16 md:px-12 lg:px-24 font-['Urbanist'] selection:bg-orange-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-regular tracking-tight text-[#ff5500] uppercase mt-[100px]">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-400 font-medium">
            Last Updated: December 06, 2024
          </p>
        </div>

        {/* Section: Agreement */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Agreement to Our Legal Terms
          </h2>
          <p className="leading-relaxed">
            We are Torch Labs Software LLC, a company registered as Torch Labs (“Company,” “we,” “us,” “our”), a company registered at 30n N Gould St, Sheridan, WY 82801, USA.
          </p>
          <p className="leading-relaxed">
            We operate the website{' '}
            <Link href="https://torchproxies.com/" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors">
              https://torchproxies.com/
            </Link>{' '}
            (the “Site”), as well as any other related products and services that refer or link to these legal terms (the “Legal Terms”) (collectively, the “Services”).
          </p>
          <p className="leading-relaxed">
            You can contact us by email at{' '}
            <a href="mailto:hello@torchlabs.xyz" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors">
              hello@torchlabs.xyz
            </a>.
          </p>
          <p className="leading-relaxed">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Torch Labs, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.{' '}
            <strong className="text-zinc-100 font-semibold">
              IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </strong>
          </p>
          <p className="leading-relaxed">
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the “Last updated” date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          </p>
          <p className="leading-relaxed">
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          </p>
          <p className="leading-relaxed text-zinc-400 italic">
            We recommend that you print a copy of these Legal Terms for your records.
          </p>
        </section>

        {/* Section: Our Services */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Our Services
          </h2>
          <p className="leading-relaxed">
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
          <p className="leading-relaxed">
            The Services are not tailored to comply with industry-specific regulations (e.g., Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </section>

        {/* Section: Intellectual Property */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Intellectual Property Rights
          </h2>
          <p className="leading-relaxed">
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the “Content”), as well as the trademarks, service marks, and logos contained therein (the “Marks”).
          </p>
          <p className="leading-relaxed">
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
          </p>
          <p className="leading-relaxed">
            The Content and Marks are provided in or through the Services “AS IS” for your personal, non-commercial use or internal business purpose only.
          </p>
        </section>

        {/* Section: Your Use */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Your Use of Our Services
          </h2>
          <p className="leading-relaxed">
            Subject to your compliance with these Legal Terms, including the “PROHIBITED ACTIVITIES” section below, we grant you a non-exclusive, non-transferable, revocable license to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-300">
            <li>Access the Services; and</li>
            <li>Download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.</li>
          </ul>
          <p className="leading-relaxed">
            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
          <p className="leading-relaxed">
            If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to:{' '}
            <a href="mailto:hello@torchlabs.xyz" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">
              hello@torchlabs.xyz
            </a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
          </p>
          <p className="leading-relaxed">
            We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
          </p>
          <p className="leading-relaxed">
            Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
          </p>
        </section>

        {/* Section: Your Submissions */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Your Submissions
          </h2>
          <p className="leading-relaxed">
            By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (“Submissions”), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
          </p>
          <p className="leading-relaxed font-semibold text-zinc-100">
            You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:
          </p> 
          <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-300">
            <li>Confirm that you have read and agreed with our “PROHIBITED ACTIVITIES” and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
            <li>Waive any and all moral rights to any such Submission;</li>
            <li>Warrant that any such Submission is original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
            <li>Warrant and represent that your Submissions do not constitute confidential information.</li>
          </ul>
        </section>

        {/* Section: User Representations */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            User Representations and Registration
          </h2>
          <p className="leading-relaxed">
            By using the Services, you represent and warrant that:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-zinc-300">
            <li>All registration information you submit will be true, accurate, current, and complete;</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
            <li>You have the legal capacity and you agree to comply with these Legal Terms;</li>
            <li>You are not a minor in the jurisdiction in which you reside;</li>
            <li>You will not access the Services through automated or non-human means;</li>
            <li>You will not use the Services for any illegal or unauthorized purpose; and</li>
            <li>Your use of the Services will not violate any applicable law or regulation.</li>
          </ul>
        </section>

        {/* Section: Products */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Products
          </h2>
          <p className="leading-relaxed">
            All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
          </p>
        </section>

        {/* Section: Purchases and Payment */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Purchases and Payment
          </h2>
          <p className="leading-relaxed">We accept the following forms of payment:</p>
          <ul className="list-disc list-inside space-y-1 pl-4 text-zinc-300">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>American Express</li>
            <li>Discover</li>
          </ul>
        </section>

        {/* Section: Refunds Policy */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Refunds Policy
          </h2>
          <p className="leading-relaxed">
            All credit top-ups are deemed final and are strictly non-refundable. Furthermore, credits cannot be transferred to any other account under any circumstances. For ISP products, any issues must be reported within twenty-four (24) hours of delivery to qualify for a replacement, which will be provided at no additional cost. For residential products, if less than five percent (5%) of the product has been utilized and dissatisfaction is communicated within twenty-four (24) hours of delivery, a refund will be issued. All refunds shall be processed to the original payment method. For instance, if wallet credits are being used for the transaction, the refund shall be credited back to the user’s wallet.
          </p>
        </section>

        {/* Section: Prohibited Activities */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Prohibited Activities
          </h2>
          <p className="leading-relaxed">
            You may not access or use the Services for any purpose other than that for which we make the Services available.
          </p>
        </section>

        {/* Section: Limitations of Liability */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Limitations of Liability
          </h2>
          <p className="leading-relaxed">
            In no event will we or our directors, employees, or agents be liable for any direct, indirect, consequential damages arising from your use of the Services.
          </p>
        </section>

        {/* Section: Changes */}
        <section className="space-y-4 pt-6 border-t border-zinc-900">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Changes to This Terms of Service
          </h2>
          <p className="leading-relaxed">
            We reserve the right to modify this Terms of Service at any time.
          </p>
        </section>

        {/* Section: Contact Us */}
        <section className="space-y-4 pt-6 border-t border-zinc-900 pb-12">
          <h2 className="text-2xl font-bold tracking-wide text-[#ff5500] uppercase">
            Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <div className="text-zinc-300 space-y-1 pt-2">
            <p className="font-semibold text-white">Torch Labs Software LLC</p>
            <p>30n N Gould St</p>
            <p>Sheridan, WY 82801, USA</p>
            <p>
              Email:{' '}
              <a href="mailto:hello@torchlabs.xyz" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">
                hello@torchlabs.xyz
              </a>
            </p>
            <p>
              Website:{' '}
              <Link href="https://torchproxies.com/" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">
                https://torchproxies.com/
              </Link>
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
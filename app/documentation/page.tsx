"use client";
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag, CreditCard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


interface ResourceCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const Marquee: React.FC = () => (
    <div className="w-full overflow-hidden bg-[#FE4A01] py-3 mt-50 whitespace-nowrap select-none flex">
        {/* Wrapping container that holds both sets of text */}
        <div className="flex animate-marquee text-xs font-semibold tracking-wider text-white uppercase">
            {/* Original Content */}
            <div className="flex items-center space-x-8 pr-8">
                <span>• 99.9% uptime guaranteed</span>
                <span>• Blazing fast proxy speeds</span>
                <span>• Global geo targeting support</span>
                <span>• Secure & anonymous connections</span>
                <span>• Unlimited sessions & rotations</span>
                <span>• Built for scraping & automation</span>
            </div>

            {/* Duplicated Content for Seamless Loop */}
            <div className="flex items-center space-x-8 pr-8" aria-hidden="true">
                <span>• 99.9% uptime guaranteed</span>
                <span>• Blazing fast proxy speeds</span>
                <span>• Global geo targeting support</span>
                <span>• Secure & anonymous connections</span>
                <span>• Unlimited sessions & rotations</span>
                <span>• Built for scraping & automation</span>
            </div>
        </div>

        {/* CSS Keyframe for a flawless seamless loop */}
        <style jsx global>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
    `}</style>
    </div>
);
const ResourceCard = ({ title, description, buttonText, href }: ResourceCardProps) => {
  return (
    <div className="bg-[#0a0a0a] border border-stone-900 rounded-[16px] p-8 md:p-10 flex flex-col justify-between items-start hover:border-stone-800 transition-colors duration-300">
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-stone-400 text-[15px] md:text-[16px] leading-relaxed max-w-md">
          {description}
        </p>
      </div>
      
      <Link 
        href={href}
        className="px-5 py-2.5 border border-orange-600/40 hover:border-orange-500 rounded-xl text-sm font-medium text-orange-500 hover:text-orange-400 bg-transparent transition-all duration-200 active:scale-[0.98]"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default function TorchProxiesLandingPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);


    const reviews = [
        { name: "Alex K.", role: "Lead Scraping Engineer", text: "Absolute game changer for parsing target inventory updates. The success parameters are consistently stable." },
        { name: "Sarah M.", role: "DevOps Architect", text: "IP targeting is granular down to city targets. The latency levels are significantly lower than competitive alternatives." },
        { name: "David L.", role: "Automated Data Analyst", text: "Top tier network infrastructure. The standard volume tier setups maintain premium speeds without bottleneck dropouts." },
    ];

    const faqData = [
        {
            q: "What are residential proxies?",
            a: "Residential proxies are IP addresses assigned by Internet Service Providers (ISPs) to homeowners. They act as intermediaries between your device and the internet, allowing you to browse anonymously and access geo-restricted content."
        },
        {
            q: "How do residential proxies work and how are they different?",
            a: "Residential proxies route your internet traffic through real residential IP addresses, making them appear as normal users to websites. Unlike datacenter proxies, they have higher trust scores and are much harder to detect and block."
        },
        {
            q: "What makes Torch Proxies's residential proxies better than other proxy providers?",
            a: "Our residential proxy network offers unmatched speed, stability, ethical sourcing, and city-level targeting with 24/7 support and transparent pricing."
        },
        {
            q: "What are the ideal use cases for the Standard Residential plan?",
            a: "Perfect for general web scraping, social media management, market research, sneaker copping, and everyday automation tasks."
        },
        {
            q: "Are residential proxies legal to use?",
            a: "Yes, residential proxies are completely legal when used responsibly and in compliance with website terms of service."
        },
        {
            q: "Do you offer free trials?",
            a: "Yes, we offer a free 1GB trial so you can test our network performance before committing."
        },
    ];
    const resources = [
    {
      title: "Dashboard Documentation",
      description: "Set up your account, manage proxies, and use the dashboard with clear step-by-step guides for a smooth experience.",
      buttonText: "View guides",
      href: "/docs/dashboard"
    },
    {
      title: "API Documentation",
      description: "Quickly integrate proxies with simple API examples, detailed references and developer friendly instructions.",
      buttonText: "View guides",
      href: "/docs/api"
    },
    {
      title: "Email Us",
      description: "Have questions or issues? Email our support team and get quick, helpful responses to keep everything working smoothly.",
      buttonText: "View guides",
      href: "mailto:support@torchproxies.com"
    },
    {
      title: "Discord Support",
      description: "Have questions or issues? Email our support team and get quick, helpful responses to keep everything working smoothly.",
      buttonText: "View guides",
      href: "https://discord.gg/torchproxies"
    }
  ];
    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
  <div className="absolute inset-x-0 bottom-40 h-[600px] z-0 pointer-events-none select-none">
     <Image
         src="/images/hero_back.png"
         alt=""
         fill
         priority
         className="object-cover object-bottom opacity-100"
     />
 </div>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <div className="flex items-center justify-center mb-6">
                        <img
                            src="/images/TrustPiolet.png"
                            alt="Excellent 5-star rating on Trustpilot"
                            className="h-6 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>

                    <h1 className="text-[60px] sm:text-6xl lg:text-7xl font-regular tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent">
                        Best Premium Residential   <br />
                        <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">Proxy. Access 100M+ Global IPs</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-stone-400 text-base text-[18px] mb-10 leading-relaxed">
                        Experience faster speeds and enhanced performance. Premium Residential Proxies is built for those who need a little extra power to stay productive and efficient.
                    </p>

                    <div className="mt-[-50px] py-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-400 text-[16px] font-regular">
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Pricing starts from $3.4/GB</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> For demanding users & businesses</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> 24 hour refund policy</div>
                    </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

                            {/* Fast 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    Start free with 1 GB
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                   Start free with 1 GB
                                </span>

                            </div>
                        </button>

                        {/* --- SECONDARY BUTTON: ROLLING TEXT + BORDER INDENT --- */}
                        <button className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]">

                            {/* Fast 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    View Pricing
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white">
                                    View Pricing
                                </span>

                            </div>
                        </button>

                    </div>

                    <div className="flex items-center justify-center gap-2.5 text-stone-400 text-sm sm:text-base font-normal tracking-wide py-6">
                        <CreditCard className="w-4 h-4 text-stone-500" />
                        <span>No credit card needed. Instant access</span>
                    </div>

                    <div className="relative z-10 -mt-40 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                        <Marquee />
                    </div>
                </div>
            </header>

<section className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText={resource.buttonText}
              href={resource.href}
            />
          ))}
        </div>
      </div>
    </section>



            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
            <section className="py-24 bg-stone-950/20 ">
                <div className="text-center mb-16">
                    <span className="text-[#FE4A01] text-xs font-medium tracking-wider block mb-3">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                        Customers prefer Torch Proxies over <br />
                        other proxy brands
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto px-6">

                    {/* Testimonial Slider */}
                    <div className="overflow-hidden">
                        <div className="flex gap-6 animate-marquee">
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl min-w-[340px] md:min-w-[380px]"
                                >
                                    <div className="text-amber-500 text-lg mb-3">★★★★★</div>
                                    <p className="text-stone-300 text-xs leading-relaxed italic mb-4">"{review.text}"</p>
                                    <div className="text-stone-100 font-bold text-xs">{review.name}</div>
                                    <div className="text-stone-500 text-[10px]">{review.role}</div>
                                </div>
                            ))}

                            {/* Duplicate for seamless infinite scrolling */}
                            {reviews.map((review, i) => (
                                <div
                                    key={`dup-${i}`}
                                    className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl min-w-[340px] md:min-w-[380px]"
                                >
                                    <div className="text-amber-500 text-lg mb-3">★★★★★</div>
                                    <p className="text-stone-300 text-xs leading-relaxed italic mb-4">"{review.text}"</p>
                                    <div className="text-stone-100 font-bold text-xs">{review.name}</div>
                                    <div className="text-stone-500 text-[10px]">{review.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 11: FAQ (ACCORDION) ─────────────────────────────── */}
            {/* FAQ SECTION */}
            <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">

                {/* ── 📌 Full-Bleed Middle-Bottom Background Layer ────────────────────── */}
                <div className="absolute inset-x-0 bottom-0 h-[450px] z-0 pointer-events-none select-none">
                    <Image
                        src="/images/contact-bg.png" /* Using the same glow asset path */
                        alt=""
                        fill
                        priority
                        className="object-cover object-bottom opacity-100"
                    />
                </div>

                {/* ── Content Wrapper (Added 'relative z-10' so it sits above the background glow) ── */}
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-medium tracking-widest block mb-3">
                            FAQ
                        </span>
                        <h2 className="text-4xl sm:text-5xl font_regular tracking-tight text-white">
                            Frequently asked questions
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-px">
                        {faqData.map((faq, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="border-b border-stone-800 last:border-none group"
                                >
                                    <button
                                        onClick={() => setActiveFaq(isOpen ? null : index)}
                                        className="w-full text-left py-6 flex items-center justify-between text-lg font-medium text-stone-200 hover:text-white transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-stone-400 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#FE4A01]' : 'group-hover:text-stone-300'}`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                                        <p className="text-stone-400 text-[15px] leading-relaxed pr-10">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Gradient Overlay - Blends beautifully with your new image background */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />
            </section>

        </div>
    );
}
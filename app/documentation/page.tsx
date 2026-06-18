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
  {
    name: "Black Bear",
    role: "Verified Customer",
    text: "If you are buy proxies anywhere you should buy them here. Nice guys who work hard. Communication is good and there is always help where needed. Can't recommend a better company for proxies.",
    stars: 5,
    avatar: "/images/avatars/black-bear.png" // Path to your custom pixel bear photo
  },
  {
    name: "Ishak",
    role: "Verified Customer",
    text: "Torchlabs offers a fantastic proxy service at a very competitive price. The connection speeds are fast, and the service is incredibly reliable. I've had a positive experience with their customer support as well.",
    stars: 5,
    initials: "IS", // Fallback for a soft green initial circle
    avatar: null
  },
  {
    name: "Edith Shamaiah",
    role: "Verified Customer",
    text: "Best proxies in the market! Top notch customer experience!",
    stars: 4,
    initials: "E", // Fallback for a purple initial circle
    avatar: null
  }
];
  

const TrustpilotStars = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex gap-[3px] mb-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-[18px] h-[18px] flex items-center justify-center rounded-[3px] text-[11px] font-bold transition-colors duration-200 ${
            index < rating 
              ? "bg-[#00b67a] text-white" // Active Trustpilot Green box with White Star
              : "bg-stone-800 text-stone-600" // Inactive Dark box with Muted Gray Star
          }`}
        >
          ★
        </div>
      ))}
    </div>
  );
};

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
        <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden font-['Urbanist']">
  <div className="absolute inset-x-0 bottom-40 h-[400px] z-0 pointer-events-none select-none">
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

                    <h1 className="text-[60px] sm:text-[60px] lg:text-[60px] font-regular tracking-tight leading-tight mb-6 bg-gradient-to-b text-white bg-clip-text text-transparent font-['Urbanist']">
                        Documentation & Support  <br />
                    </h1>

                    <p className="max-w-2xl mx-auto text-stone-400 text-base text-[18px] mb-10 leading-relaxed">
                        Get started fast with step-by-step docs, API guides, and 24/7 support via email or Discord. Everything you need to make Torch Proxies work for you.
                    </p>
                </div>
            </header>

<section className="py-16 px-6 bg-[#0a0a0a] font-['Urbanist']">
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
<section className="py-24 bg-stone-950/20 border-t border-stone-900 overflow-hidden font-['Urbanist']">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header Text Nodes */}
        <div className="text-center font-['Urbanist']">
                        <span className="text-[#FE4A01] text-[16px] font-regular tracking-widest block font-['Urbanist']">
                            Testimonials
                        </span>
                    </div>
        <div className="text-center mb-16 font-['Urbanist']">
          <h2 className="text-[42px] sm:text-[42px] font-regular mb-4 tracking-tight leading-[42px] text-white">
            Customers prefer Torch Proxies <br/>over other proxy brands
          </h2>
        </div>

        {/* Outer Infinite Slider Container Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_0%,black_10%,black_90%,transparent_100%)] font-['Urbanist']">
          <div className="flex gap-6 animate-marquee whitespace-normal font-['Urbanist']">
            
            {/* Render 1st Array Instance */}
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-[#070707] border border-stone-900 p-8 rounded-[24px] min-w-[340px] max-w-[360px] md:min-w-[380px] h-[280px]"
              >
                <div>
                  {/* Title & Trustpilot Star Row Block */}
                  <div className="text-white font-bold text-[15px] mb-2 tracking-tight line-clamp-1">
                    {review.text.split('.')[0]}
                  </div>
                  <TrustpilotStars rating={review.stars} />
                  
                  {/* Feedback Text Area */}
                  <p className="text-stone-300 text-[13px] leading-relaxed line-clamp-4 font-normal">
                    "{review.text}"
                  </p>
                </div>

                {/* ─── CLIENT AVATAR & METADATA FOOTER ─── */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-900/50">
                  {review.avatar ? (
                    // Render image block if profile image exists
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    // Fallback to stylized custom Initial Circles from your design requirements
                    <div 
                      className={`w-11 h-11 flex items-center justify-center rounded-full text-stone-950 font-bold text-sm tracking-wider uppercase ${
                        review.initials === "IS" ? "bg-[#c6f6d5]" : "bg-[#7f9cf5] text-white"
                      }`}
                    >
                      {review.initials}
                    </div>
                  )}
                  
                  {/* User Account String Node Labels */}
                  <div className="flex flex-col">
                    <span className="text-stone-200 font-semibold text-[13px] tracking-tight">
                      {review.name}
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      {review.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}

            {/* Duplicate Array Map Loop Instance for Infinite Slider Continuity */}
            {reviews.map((review, i) => (
              <div
                key={`dup-${i}`}
                className="flex flex-col justify-between bg-[#070707] border border-stone-900 p-8 rounded-[24px] min-w-[340px] max-w-[360px] md:min-w-[380px] h-[280px]"
              >
                <div>
                  <div className="text-white font-bold text-[15px] mb-2 tracking-tight line-clamp-1">
                    {review.text.split('.')[0]}
                  </div>
                  <TrustpilotStars rating={review.stars} />
                  <p className="text-stone-300 text-[13px] leading-relaxed line-clamp-4 font-normal">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-900/50">
                  {review.avatar ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className={`w-11 h-11 flex items-center justify-center rounded-full text-stone-950 font-bold text-sm tracking-wider ${review.initials === "IS" ? "bg-[#c6f6d5]" : "bg-[#7f9cf5] text-white"}`}>
                      {review.initials}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-stone-200 font-semibold text-[13px]">
                      {review.name}
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      {review.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>

            {/* ── SECTION 11: FAQ (ACCORDION) ─────────────────────────────── */}
            {/* FAQ SECTION */}
            <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">

                {/* ── 📌 Full-Bleed Middle-Bottom Background Layer ────────────────────── */}
                <div className="absolute inset-x-0 bottom-0 h-[450px] z-0 pointer-events-none select-none font-['Urbanist']">
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
                    <div className="text-center mb-16 font-['Urbanist']">
                        <span className="text-[#FE4A01] text-[16px] font-regular tracking-widest block mb-3 font-['Urbanist']">
                            FAQ
                        </span>
                        <h2 className="text-4xl sm:text-5xl font_regular tracking-tight text-white font-['Urbanist']">
                            Frequently asked questions
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-px font-['Urbanist']">
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
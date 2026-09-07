"use client";

import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface FeatureItemProps {
    text: string | React.ReactNode;
}

// Reusable Checkmark Component
const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
    <div className="flex items-start space-x-3 text-sm text-gray-400">
        <div className="flex-shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-[#00E5A3]" strokeWidth={3} />
        </div>
        <span className="leading-relaxed">{text}</span>
    </div>
);

interface ISPPageClientProps {
    data: {
        slug: string;
        countryName: string;
        countryCode: string;
        ispCount: string;
    };
    dynamicDescriptions: {
        feat1: string;
        feat2: string;
        feat3: string;
        feat4: string;
        feat5: string;
        feat6: string;
    };
}

// ── MARQUEE ANIMATION COMPONENT ──────────────────────────────────────
const MARQUEE_ITEMS = [
  "99.9% uptime guaranteed",
  "Blazing fast proxy speeds",
  "Global geo targeting support",
  "Secure & anonymous connections",
  "Unlimited sessions & rotations",
  "Built for scraping & automation"
];


const Marquee: React.FC = () => (
    
  <div className="w-full overflow-hidden bg-[#FE4A01] py-3.5 whitespace-nowrap select-none flex font-['Urbanist']">
    
{/* Infinite track containing multiple data blocks to prevent viewport gaps */}
    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around text-[14px] font-medium tracking-wider text-white font-['Urbanist']">
      
      {/* Block 1 (Original) */}
      <div className="flex shrink-0 items-center space-x-12 pr-12">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`orig-${index}`} className="flex items-center gap-3.5">
            {/* Perfectly sized, smooth CSS custom bullet circle */}
            <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </span>
        ))}
      </div>

{/* Block 2 (Duplicate) */}
<div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
  {MARQUEE_ITEMS.map((item, index) => (
    <span key={`dup1-${index}`} className="flex items-center gap-3.5">
      <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
      <span>{item}</span>
    </span>
  ))}
</div>

{/* Block 3 (Extra Duplicate) */}
<div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
  {MARQUEE_ITEMS.map((item, index) => (
    <span key={`dup2-${index}`} className="flex items-center gap-3.5">
      <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
      <span>{item}</span>
    </span>
  ))}
</div>
      
    </div>
  </div>
);

// ── MAIN EXPORTABLE INTERFACE MODULE ───────────────────────────────────
export default function ISPPageClient({ data, dynamicDescriptions }: ISPPageClientProps) {
    const router = useRouter();
    const { countryName, countryCode, ispCount } = data;
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    {/* 🛠️ FIX: Mapped descriptions to pull from custom dynamic data with specific clean text overrides */}
    const features = [
        {
            icon: "/images/country.svg",
            title: "Enhanced Privacy",
            desc: dynamicDescriptions?.feat1 || `Secure your online presence with highly reliable residential ${countryName} subnets.`
        },
        {
            icon: "/images/country.svg",
            title: "Data Access & Analysis",
            desc: dynamicDescriptions?.feat2 || `Scrape premium data nodes smoothly without experiencing blocks inside ${countryName}.`
        },
        {
            icon: "/images/country.svg",
            title: "Content Control",
            desc: dynamicDescriptions?.feat3 || "Manage structural content filters and bypass routing configurations dynamically."
        },
        {
            icon: "/images/country.svg",
            title: "Social Media Management",
            desc: dynamicDescriptions?.feat4 || `Unlock localized data streams across regional infrastructure nodes safely.`
        },
        {
            icon: "/images/country.svg",
            title: "Unrestricted Access",
            desc: dynamicDescriptions?.feat4 || `Unlock localized data streams across regional infrastructure nodes safely.`
        },
        {
            icon: "/images/country.svg",
            title: "Market Research",
            desc: dynamicDescriptions?.feat5 || `Analyze competitive regional deployments securely utilizing dynamic ISP allocations.`
        },
    ];

    const topFeatures = features.map(f => f.title);

    const faqData = [
        {
            q: "What are location-based proxies?",
            a: "Location-based proxies are proxies with IP addresses assigned to specific geographical locations. They allow users to appear as if they are accessing the internet from a particular country, city, or region."
        },
        {
            q: "Why is the location of a proxy important?",
            a: "The location of a proxy is important for several reasons, including accessing geo-restricted content, conducting location-specific market research, performing localized SEO analysis, and ensuring compliance with regional data privacy laws."
        },
        {
            q: "How can location-based proxies help with accessing geo-restricted content?",
            a: "Location-based proxies can mask your actual IP address and make it appear as if you are browsing from a specific location. This allows you to access content, services, and websites that are restricted to certain regions."
        },
        {
            q: "How do location-based proxies aid in localized SEO efforts?",
            a: "They allow businesses to see how their website ranks in search engines in different locations, check local competition, and ensure that their SEO strategies are effective across various regions."
        },
        {
            q: "What types of location-based proxies do you offer?",
            a: "We offer a variety of location-based proxies, including Country-specific Proxies, City-specific Proxies, and Regional Proxies assigned to broader spaces."
        },
        {
            q: "How do I select the location of a proxy?",
            a: "You can select the location of a proxy through our proxy dashboard or API. Simply choose the desired country, city, or region from the available options."
        },
        {
            q: "How reliable are location-based proxies?",
            a: "Our location-based proxies are highly reliable, offering consistent performance and uptime. They are sourced from reputable providers and are regularly monitored to ensure they meet quality standards."
        },
        {
            q: "What kind of speed and latency can I expect from location-based proxies?",
            a: "The speed and latency of location-based proxies can vary depending on the specific location and the distance from your actual location. However, we strive to provide high-speed and low-latency connections for optimal performance."
        },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">
            
            {/* ── FLAG BADGE AREA ─────────────────────────────────────────── */}
            <div className="max-w-md mx-auto pt-24 px-4 text-center z-20 relative font-['Urbanist']">
            </div>

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center mt-[80px] px-6 pt-28 pb-12 overflow-hidden space-y-6 font-['Urbanist']">
                <div className="absolute bottom-0 left-0 w-full h-[65vh] z-0">
                    <Image
                        src="/images/hero_back.png"
                        alt=""
                        fill
                        priority
                        className="object-cover object-bottom"
                    />
                    <div className="absolute -bottom-8 left-0 w-full z-10">
                        <Marquee />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto text-center z-10 font-['Urbanist']">
                    <div className="flex items-center justify-center mb-6">
                       <a href="https://www.trustpilot.com/review/torchlabs.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <img
                                src="/images/TrustPiolet.png"
                                alt="Excellent 5-star rating on Trustpilot"
                                className="h-8 w-auto object-contain"
                                loading="lazy"
                            />
                        </a>
                    </div>

                    <h1 className="text-[60px] sm:text-[60px] lg:text-[60px] font-regular tracking-tight leading-[72px] mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">
                        Fast and Secure {countryName} Proxies at Your Fingertips
                    </h1>

                    <p className="max-w-3xl mx-auto text-stone-400 text-base text-[18px] sm:text-[18px] mb-4 leading-relaxed">
                        Effortlessly connect to fast, secure, and reliable proxies in {countryName}, giving you the freedom to browse, test and manage your projects without interruptions.
                    </p>

                    <div className="py-8 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-[16px] font-medium">
                        <div className="flex items-center justify-center gap-2">
                            <Check className="text-orange-500 w-4 h-4" />
                            Pay as you go pricing
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="text-orange-500 w-4 h-4" />
                            Money back guarantee
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="text-orange-500 w-4 h-4" />
                            Dedicated Support
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <button
                            onClick={() => router.push('https://dashboard.torchproxies.com/')}
                            className=" group relative overflow-hidden w-full max-w-[400px] sm:max-w-[400px] h-[56px] px-8 bg-orange-600 hover:bg-orange-500 text-white font-bold text-base rounded-2xl tracking-[0.2px] text-center transition-all duration-200 ease-out shadow-[0_4px_30px_rgba(234,88,12,0.45)] hover:shadow-[0_6px_35px_rgba(234,88,12,0.6)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    Buy {countryName} ISP Proxies
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/95">
                                    Buy {countryName} ISP Proxies
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

{/* ── SECTION 2: PRICING GRIDS ─────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist']">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="flex flex-col items-center text-center w-full mb-8 sm:mb-12">
      <span className="text-[#FE4A01] text-xs sm:text-sm lg:text-[16px] font-medium tracking-widest uppercase block mb-2 sm:mb-3">
        Our products
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight max-w-4xl leading-tight">
        Buy {countryName} ISP Proxies
      </h2>
    </div>

    {/* Top Badges / Bullet Pill Row */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16 text-xs sm:text-sm lg:text-[16px] font-normal text-gray-300">
      {topFeatures.map((f, i) => (
        <div key={i} className="flex items-center gap-2">
          <Check className="text-emerald-400 w-4 h-4 shrink-0" /> 
          <span>{f}</span>
        </div>
      ))}
    </div>

    {/* Product Showcase Card Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      
      {/* Product Details Box */}
      <div className="lg:col-span-7 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-[#070707]">
        <div>
          {/* Card Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <Image
                  src="/images/ispproxies.svg"
                  alt="ISP Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold tracking-tight">ISP</h3>
                <p className="text-xs sm:text-sm lg:text-[16px] text-gray-400 mt-0.5">
                  Static residential proxies with unlimited data.
                </p>
              </div>
            </div>
            
            <div className="self-start bg-orange-950/40 border border-orange-900/50 text-orange-400 text-xs sm:text-[14px] font-medium px-3 py-1.5 rounded-xl whitespace-nowrap">
              From $4/GB per IP
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-3 sm:space-y-4 my-6 sm:my-8 text-xs sm:text-sm lg:text-[16px] leading-relaxed">
            <FeatureItem text="Reliable and Stable Connections" />
            <FeatureItem text="ISP-grade Anonymity" />
            <FeatureItem 
              text={
                <span>
                  Best for <span className="text-gray-300">Crypto, ticketing, web scraping, sneaker drops, social media, Pokémon,</span> and <span className="text-gray-300">Spotify automation</span>.
                </span>
              } 
            />
            <FeatureItem text="Quick Setup and Instant Activation" />
            <FeatureItem text="Versatility Across Applications" />
            <FeatureItem text="24/7 Dedicated Support" />
            <FeatureItem text="Global Coverage with Regional Optimization" />
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#121316] hover:bg-[#181a1f] text-white border border-stone-800 text-sm font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 mt-4 active:scale-[0.99] cursor-pointer">
          Try free now
        </button>
      </div>

      {/* Visual / Image Card */}
      <div className="lg:col-span-5 bg-[#0b0c0e] border border-stone-800 rounded-2xl relative overflow-hidden min-h-[250px] sm:min-h-[350px] lg:min-h-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full mix-blend-lighten">
          <Image 
            src="/images/isp2.png"
            alt="Global ISP Coverage Network Map"
            fill
            className="object-cover object-right-bottom"
            priority
          />
        </div>
      </div>

    </div>

  </div>
</section>

{/* ── SECTION 3: INDUSTRY LEADER INFORMATION ─────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white overflow-hidden font-['Urbanist']">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
      
      {/* Visual / Image Block */}
      <div className="relative group">
        <div className="bg-[#0d0d0d] border border-stone-800 rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          <div className="bg-[#050505] rounded-xl sm:rounded-2xl border border-stone-900/50 overflow-hidden flex items-center justify-center">
            <img 
              src="/images/Industry_leader.png" 
              alt={`Perfect for ${countryName} Scraping & Automation`} 
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl" 
            />
          </div>
        </div>
      </div>

      {/* Content Block */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium tracking-tight leading-tight lg:leading-[1.15]">
          Industry leader in fast proxy services for {countryName}
        </h2>
        
        <p className="text-stone-400 text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed">
          TorchProxies' {countryName} proxies are among the fastest in the market. Reliable, stable, and highly anonymous {countryName} proxies allow you to scrape complex targets at any scale. Get your web scraping and automation tasks done faster with TorchProxies' {countryName} proxy IPs.
        </p>

        {/* Feature List */}
        <ul className="space-y-2.5 text-stone-400 text-xs sm:text-sm lg:text-[16px] font-normal leading-relaxed pt-2">
          <li className="flex items-center gap-2.5">
            <span className="text-[#FE4A01] text-xs">●</span>
            <span>High uptime (up to 99.9%)</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-[#FE4A01] text-xs">●</span>
            <span>Pre-selected and thoroughly tested proxies</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-[#FE4A01] text-xs">●</span>
            <span>Minimal risk of IP blocks</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
{/* ── SECTION 4: BENEFITS BLOCK ─────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist']">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-10 sm:mb-16 lg:mb-20">
      <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight mb-3 sm:mb-4 text-white leading-tight">
        Why Use {countryName} Proxies?
      </h2>
      <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] max-w-3xl mx-auto font-normal leading-relaxed">
        There are countless ways to utilize a {countryName} IP address. Whether you’re accessing local market data, bypassing regional restrictions, or testing apps and games on local servers, our {countryName} proxy servers let you do it all without being physically present.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-x-12 lg:gap-y-16 max-w-6xl mx-auto">
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-4 sm:gap-5 group">

          {/* Icon Container */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(254,74,1,0.2)] transition-transform duration-200 group-hover:scale-105">
            <img 
              src={feat.icon} 
              alt={feat.title} 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Content */}
          <div className="space-y-1.5 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-[23px] font-medium text-white tracking-tight leading-snug">
              {feat.title}
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm lg:text-[16px] leading-relaxed font-normal">
              {feat.desc}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

{/* ── SECTION 5: CALL TO ACTION BANNER ──────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">
  <div className="max-w-7xl mx-auto">
    <div className="relative overflow-hidden bg-[#0a0a0a] rounded-2xl sm:rounded-[40px] p-2 sm:p-4 text-center">
      
      {/* Gradient Card Wrapper */}
      <div 
        className="relative rounded-xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center overflow-hidden border border-stone-800/50" 
        style={{ background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)' }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium tracking-tight text-white mb-4 sm:mb-8 leading-tight lg:leading-[1.1]">
            Take Advantage of {countryName} ISP Proxies
          </h2>

          {/* Subtitle Description */}
          <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] max-w-3xl font-normal leading-relaxed mb-8 sm:mb-12 mx-auto">
            Effortlessly test, deploy, and scale your projects with user friendly, high quality and cost effective ISP proxy infrastructure tailored for any use case.
          </p>

          {/* Action Button Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => router.push('https://dashboard.torchproxies.com/')} 
              className="cursor-pointer group relative w-full sm:w-60 h-12 sm:h-[56px] overflow-hidden bg-white text-black font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:scale-[1.02] active:scale-[0.99]"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-black text-sm sm:text-base">
                  Get Started Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-black text-sm sm:text-base">
                  Get Started Now
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
{/* ── SECTION 6: SEO OVERVIEW TEXT BLOCK ────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white overflow-hidden font-['Urbanist']">
  <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
    
    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-tight">
      Experience the Advantage of TorchProxies <br className="hidden sm:block" />
      {countryName} ISP Proxies
    </h2>

    {/* Paragraphs Wrapper */}
    <div className="space-y-4 sm:space-y-6 text-stone-400 text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed text-left">
      <p>
        Free proxies may seem tempting, but they often lack security and reliability. TorchProxies {countryName} residential proxies ensure fast, secure and stable connections, protecting your data while maintaining high performance.
      </p>
      <p>
        Our premium {countryName} IP addresses are continuously refreshed, offer city-level targeting and come with 24/7 support. Whether you need datacenter or residential proxies, TorchProxies provides trusted, high-speed infrastructure for personal or business use.
      </p>
    </div>

  </div>
</section>
{/* ── SECTION 7: FAQ ACCORDION ────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">
  
  {/* Background Graphic */}
  <div className="absolute inset-x-0 bottom-0 h-[300px] sm:h-[450px] z-0 pointer-events-none select-none">
    <Image 
      src="/images/contact-bg.png" 
      alt="" 
      fill 
      priority 
      className="object-cover object-bottom opacity-100" 
    />
  </div>

  <div className="max-w-4xl mx-auto relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-10 sm:mb-16">
      <span className="text-[#FE4A01] text-xs sm:text-sm font-medium tracking-widest uppercase block mb-2 sm:mb-3">
        FAQ
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
        Frequently asked questions
      </h2>
    </div>

    {/* Accordion List */}
    <div className="space-y-px border-t border-stone-800/80">
      {faqData.map((faq, index) => {
        const isOpen = activeFaq === index;
        return (
          <div key={index} className="border-b border-stone-800 last:border-none group">
            <button 
              onClick={() => setActiveFaq(isOpen ? null : index)} 
              className="w-full text-left py-4 sm:py-6 flex items-center justify-between gap-4 text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors cursor-pointer"
            >
              <span className="pr-2">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 text-stone-400 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#FE4A01]' : 'group-hover:text-stone-300'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 sm:pb-6' : 'max-h-0'}`}>
              <p className="text-stone-400 text-xs sm:text-sm lg:text-[15px] leading-relaxed pr-6 sm:pr-10">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>

  {/* Bottom Overlay Gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />

</section>
        </div>
    );
}
"use client";
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


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


interface Step {
    id: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        id: '01',
        title: 'Create Your Account',
        description: 'Sign up on TorchProxies to unlock reseller tools and API access.',
    },
    {
        id: '02',
        title: 'Add Funds & Get API Key',
        description: 'Deposit as low as $1 and copy your API key to start integrating.',
    },
    {
        id: '03',
        title: 'Start Selling Proxies',
        description: 'Connect the API to your system and begin offering proxies to your clients instantly.',
    },
];



export default function TorchProxiesLandingPage() {
    const router = useRouter();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [selectedTier, setSelectedTier] = useState<string>("5GB");

    const barConfigs = Array.from({ length: 32 }, (_, i) => ({
        id: i,
        isActive: true,
        isDimmed: i >= 30
    }));
    const locations = [
        { code: 'US', name: 'United States', ips: '4,429,824' },
        { code: 'GB', name: 'United Kingdom', ips: '1,449,139' },
        { code: 'DE', name: 'Germany', ips: '1,431,960' },
        { code: 'AU', name: 'Australia', ips: '452,720' },
        { code: 'CA', name: 'Canada', ips: '815,658' },
        { code: 'MX', name: 'Mexico', ips: '4,429,824' },
        { code: 'CN', name: 'China', ips: '4,429,824' },
        { code: 'FR', name: 'France', ips: '4,429,824' },
    ];


    const pricingData = {
        "1GB": { price: "$4.00", total: "$4.00", perGb: "$4/GB" },
        "5GB": { price: "$3.80", total: "$19.00", perGb: "$3.80/GB", popular: true },
        "25GB": { price: "$3.50", total: "$87.50", perGb: "$3.50/GB" },
        "100GB": { price: "$3.00", total: "$300.00", perGb: "$3.00/GB" },
        "500GB": { price: "$2.50", total: "$1,250.00", perGb: "$2.50/GB" },
        "1000GB": { price: "$2.00", total: "$2,000.00", perGb: "$2.00/GB" },
    };
    const [selectedPlan, setSelectedPlan] = useState('1GB');

    // Hardcoded pricing tiers matching the design exactly
    const tiers = [
        { id: '1GB', size: '1GB', price: '$ 5', discount: '0% OFF' },
        { id: '5GB', size: '5GB', price: '$ 4.75', discount: '5.56% OFF' },
        { id: '25GB', size: '25GB', price: '$ 4.50', discount: '11.11% OFF' },
        { id: '100GB', size: '100GB', price: '$ 4.25', discount: '16.67% OFF' },
        { id: '500GB', size: '500GB', price: '$ 4.00', discount: '22.22% OFF' },
        { id: '1000GB', size: '1000GB', price: '$ 3.90', discount: '24.44% OFF' },
    ];
    const features = [
        {
            icon: "/images/api2.svg", // Path matching public/icons/reseller.svg
            title: "Customised for Resellers",
            desc: "Empower your business with an API and dashboard built specifically for resellers."
        },
        {
            icon: "/images/api3.svg",
            title: "Reliable Proxy Supply",
            desc: "We fully control our inventory, ensuring proxies are always available when needed."
        },
        {
            icon: "/images/api4.svg",
            title: "Pay as You Go",
            desc: "Only pay for what you use no monthly fees or commitments required."
        },
        {
            icon: "/images/api5.svg",
            title: "Customer Focused Approach",
            desc: "Get expert support to help you launch, scale and succeed with ease."
        },
        {
            icon: "/images/api6.svg",
            title: "Proxy Pool Control",
            desc: "Handle massive concurrent requests with zero rate limits or throttling"
        },
        {
            icon: "/images/api7.svg",
            title: "Growing Global Pools",
            desc: "Access residential, ISP and datacenter with SOCKS5/HTTPS support."
        }
    ];
    const useCases = ["Social Media", "Web Scraping", "Gaming", "Online Market", "Sneaker"];
    const [activeTab, setActiveTab] = useState<'premium' | 'planX'>('premium');

    const reviews = [
        {
            name: "Black Bear",
            role: "Verified Customer",
            text: "If you are buy proxies anywhere you should buy them here. Nice guys who work hard. Communication is good and there is always help where needed. Can't recommend a better company for proxies.",
            stars: 5,
            avatar: null // Path to your custom pixel bear photo
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
                        className={`w-[18px] h-[18px] flex items-center justify-center rounded-[3px] text-[11px] font-bold transition-colors duration-200 ${index < rating
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
            q: "What makes TorchProxies's residential proxies better than other proxy providers?",
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
    return (
        <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header
                className="relative z-20 min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center mt-[80px] px-6 pt-28 pb-12 overflow-visible space-y-6 font-['Urbanist']"
            >
                {/* Background Image + Marquee */}
                <div className="absolute bottom-0 left-0 w-full h-[65vh] z-0">
                    <Image
                        src="/images/hero_back.png"
                        alt=""
                        fill
                        priority
                        className="object-cover object-bottom"
                    />

                    {/* Marquee */}
                    <div className="absolute -bottom-12 left-0 w-full z-[999]">
                        <Marquee />
                    </div>
                </div>

                {/* Hero Content */}
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
                        The backend infrastructure <br />behind your proxy business

                    </h1>

                    <p className="max-w-4xl mx-auto text-stone-400 text-[16px] sm:text-xl mb-6 leading-relaxed">
                        Use our Proxy API to create sub users, assign data, generate proxies and build your own reseller dashboard or proxy storefront with full control over pricing and UI.
                    </p>

<div className="py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-stone-200 text-[16px] font-medium">
  <div className="flex items-center justify-end gap-2 md:pr-8">
    <Check className="text-orange-500 w-4 h-4 shrink-0" />
    Manage sub users instantly
  </div>

  <div className="flex items-center justify-center gap-2">
    <Check className="text-orange-500 w-4 h-4 shrink-0" />
    Unified access to multiple proxy networks
  </div>

  <div className="flex items-center justify-start gap-2 md:pl-8">
    <Check className="text-orange-500 w-4 h-4 shrink-0" />
    Automate Traffic & Subscription Controls
  </div>
</div>



                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-15 mt-8">
                        {/* Primary Button */}
                        <button
                            onClick={() => router.push('https://dashboard.torchproxies.com/')}
                            className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    Get API access
                                </span>

                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                    Get API access
                                </span>
                            </div>
                        </button>

                        {/* Secondary Button */}
                        <button
                            onClick={() => router.push('https://api.playground.torchproxies.com/introduction/')}
                            className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-400 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    View API docs
                                </span>

                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white">
                                    View API docs
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>
{/* ── SECTION 2: PROXY API OVERVIEW ────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white overflow-hidden font-['Urbanist']">
  <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">

    {/* Row 1: Easy Client Management */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
      
      {/* Visual Side */}
      <div className="relative group order-1 lg:order-1">
        <div className="bg-[#0d0d0d] border border-stone-800/80 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          <div className="bg-[#050505] rounded-xl sm:rounded-2xl border border-stone-900/50 overflow-hidden flex items-center justify-center">
            <img
              src="/images/full_api.png"
              alt="TorchProxies Proxy API Integration Overview"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
          What Is the TorchProxies Proxy API?
        </h2>

        <p className="text-stone-400 text-sm sm:text-base lg:text-lg leading-relaxed">
          The TorchProxies Proxy API is a developer-friendly backend that lets you programmatically manage proxy access for your users. Instead of clicking through a dashboard, you can automate critical operations seamlessly:
        </p>

        {/* Feature Points List */}
        <ul className="space-y-2.5 text-stone-300 text-xs sm:text-sm lg:text-base">
          {[
            "Sub-user creation and management",
            "Traffic limits and GB allocation",
            "Flexible authentication modes",
            "Instant proxy generation & delivery",
            "Provider-specific proxy output formats"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#FE4A01] font-bold select-none">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-stone-400 text-sm sm:text-base lg:text-lg leading-relaxed pt-2">
          This API becomes the engine behind your proxy site, SaaS platform, automation tool, or internal system while TorchProxies handles the IP networks, sourcing, uptime, and quality.
        </p>
      </div>

    </div>

  </div>
</section>


{/* ── SECTION: HOW IT WORKS TIMELINE ──────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

    {/* --- LEFT COLUMN: HEADLINE & CALL TO ACTION --- */}
    <div className="lg:col-span-5 flex flex-col justify-center lg:sticky lg:top-24">
      <span className="text-[#FE4A01] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">
        How it works
      </span>

      <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-tight text-white max-w-md">
        Launch Your Own Proxy Business with TorchProxies
      </h2>

      <p className="text-stone-400 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 max-w-md font-normal leading-relaxed">
        Follow simple steps to launch your proxy business with TorchProxies—no infrastructure or IP blocks needed.
      </p>

      {/* CTA Button Wrapper */}
      <div className="mt-6 sm:mt-8">
        <button
          onClick={() => window.open('https://dashboard.torchproxies.com/', '_blank')}
          className="cursor-pointer group relative w-full sm:w-60 h-[52px] sm:h-[56px] overflow-hidden bg-[#FE4A01] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(254,74,1,0.25)] hover:shadow-[0_0_35px_rgba(254,74,1,0.6)] hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Fast 3D text track wrapper */}
          <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
            {/* Default State Text */}
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
              Start free with 1 GB
            </span>

            {/* Hover State Text */}
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90 text-sm sm:text-base">
              Start free with 1 GB
            </span>
          </div>
        </button>
      </div>
    </div>

    {/* --- RIGHT COLUMN: TIMELINE STEPS --- */}
    <div className="lg:col-span-7 relative pl-0 sm:pl-4 lg:pl-8 w-full mt-6 lg:mt-0">

      {/* Vertical Center Connecting Line */}
      <div
        className="absolute left-[23px] sm:left-[39px] lg:left-[55px] top-6 bottom-6 w-[1px] bg-stone-800"
        aria-hidden="true"
      />

      <div className="space-y-8 sm:space-y-12 relative">
        {steps.map((step) => (
          <div key={step.id} className="flex gap-4 sm:gap-6 items-start group">

            {/* Number Orb */}
            <div className="relative z-10 flex items-center justify-center min-w-[48px] h-[48px] sm:min-w-[56px] sm:h-[56px] rounded-full bg-[#16161a] border border-stone-800/80 shadow-inner transition duration-300 group-hover:border-stone-700 shrink-0">
              <span
                className="text-white text-xl sm:text-[24px] font-thin tracking-tight"
                style={{
                  textShadow: '-1.5px 0px 0px rgba(0, 229, 255, 0.8), 1.5px 0px 0px rgba(255, 152, 0, 0.8)',
                }}
              >
                {parseInt(step.id, 10)}
              </span>
            </div>

            {/* Text Block Content */}
            <div className="pt-1 sm:pt-2">
              <h3 className="text-white text-lg sm:text-xl lg:text-[24px] font-medium tracking-tight mb-1.5 sm:mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-base font-normal leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>

  </div>
</section>



{/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* ── HEADER ─────────────────────────────────────────────── */}
    <div className="text-center mb-10 sm:mb-16 lg:mb-20">
      <span className="text-[#FE4A01] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-2 sm:mb-3">
        Features
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-white leading-tight">
        Why choose TorchProxies?
      </h2>
    </div>

    {/* ── FEATURES GRID ──────────────────────────────────────── */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-x-12 lg:gap-y-16 max-w-6xl mx-auto">
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-4 sm:gap-5 group">

          {/* Icon Badge */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
            <img
              src={feat.icon}
              alt={feat.title || ""}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-1 sm:space-y-1.5 pt-0.5">
            <h3 className="text-base sm:text-lg font-medium text-white tracking-tight leading-snug">
              {feat.title}
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-normal">
              {feat.desc}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>



{/* ── SECTION: API GUIDES FEATURE ─────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">

    {/* Row 1: Clear, Simple API Guides */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

      {/* Text Side */}
      <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
          Powered by Clear, Simple API Guides
        </h2>

        <p className="text-stone-400 text-sm sm:text-base lg:text-lg leading-relaxed">
          Access clear, developer-ready API guides to help you integrate TorchProxies’ Proxy API in minutes. Learn how to manage sub-users, set traffic limits, and generate proxy formats with simple REST calls:
        </p>

        {/* Feature Points List */}
        <ul className="space-y-2.5 text-stone-300 text-xs sm:text-sm lg:text-base pt-1">
          {[
            "Sub-user creation & management",
            "Traffic limits & usage controls",
            "Proxy generation & formats",
            "Provider-specific setup guides"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#FE4A01] font-bold select-none">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side */}
      <div className="relative group order-1 lg:order-2">
        <div className="bg-[#0d0d0d] border border-stone-800/80 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          <div className="bg-[#050505] rounded-xl sm:rounded-2xl border border-stone-900/50 overflow-hidden flex items-center justify-center">
            <img
              src="/images/Simple_API_Guides.png"
              alt="Clear and Simple API Guides Documentation"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

{/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] font-['Urbanist'] overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <div
      className="relative border border-stone-800/80 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgba(254,74,1,0.25) 0%, #0a0a0a 35%, #0a0a0a 65%, rgba(254,74,1,0.25) 100%)',
      }}
    >
      {/* Subtle overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight mb-4 sm:mb-6">
          Create a Fully Branded Proxy Service With TorchProxies API
        </h2>

        <p className="text-stone-300 text-sm sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Build your own dashboard, choose your margins, and offer multiple proxy types under your own brand using our open, flexible API.
        </p>

        <div className="flex items-center justify-center">
          {/* --- PRIMARY BUTTON: ROLLING TEXT --- */}
          <button
            onClick={() => window.open('https://dashboard.torchproxies.com/', '_blank')}
            className="cursor-pointer group relative w-full sm:w-60 h-[52px] sm:h-[56px] overflow-hidden bg-white text-black font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Fast 3D text track wrapper */}
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
              {/* Default State Text */}
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base text-black">
                Get Started Now
              </span>

              {/* Hover State Text */}
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-sm sm:text-base text-black/80">
                Get Started Now
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-950/20 overflow-hidden font-['Urbanist']">
  <div className="max-w-7xl mx-auto">

    {/* Section Header Text Nodes */}
    <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
      <span className="text-[#FE4A01] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-2 sm:mb-3">
        Reviews
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4">
        Customer Reviews
      </h2>
      <p className="text-stone-400 text-xs sm:text-base leading-relaxed">
        See how engineering teams rate our connectivity network performance and proxy API uptime.
      </p>
    </div>

    {/* Outer Infinite Slider Container Track */}
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap py-2">

        {/* First Loop Instance */}
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-[#070707] border border-stone-800/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl w-[280px] sm:w-[360px] md:w-[380px] h-[260px] sm:h-[280px] shrink-0 whitespace-normal"
          >
            <div>
              {/* Review Header & Rating */}
              <div className="text-white font-semibold text-sm sm:text-[15px] mb-2 tracking-tight line-clamp-1">
                {review.text.split('.')[0]}
              </div>
              <div className="mb-3">
                <TrustpilotStars rating={review.stars} />
              </div>

              {/* Feedback Text Area */}
              <p className="text-stone-400 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal">
                "{review.text}"
              </p>
            </div>

            {/* Client Avatar & Metadata Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-stone-900/80 mt-4">
              {review.avatar ? (
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900 shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 ${
                    review.initials === "IS"
                      ? "bg-[#c6f6d5] text-stone-950"
                      : "bg-[#FE4A01] text-white"
                  }`}
                >
                  {review.initials}
                </div>
              )}

              {/* User Identity Info */}
              <div className="flex flex-col min-w-0">
                <span className="text-stone-200 font-semibold text-xs sm:text-[13px] tracking-tight truncate">
                  {review.name}
                </span>
                <span className="text-stone-500 text-[10px] sm:text-[11px] truncate">
                  {review.role}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Duplicate Loop Instance for Seamless Infinite Scroll */}
        {reviews.map((review, i) => (
          <div
            key={`dup-${i}`}
            className="flex flex-col justify-between bg-[#070707] border border-stone-800/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl w-[280px] sm:w-[360px] md:w-[380px] h-[260px] sm:h-[280px] shrink-0 whitespace-normal"
          >
            <div>
              <div className="text-white font-semibold text-sm sm:text-[15px] mb-2 tracking-tight line-clamp-1">
                {review.text.split('.')[0]}
              </div>
              <div className="mb-3">
                <TrustpilotStars rating={review.stars} />
              </div>
              <p className="text-stone-400 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal">
                "{review.text}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-900/80 mt-4">
              {review.avatar ? (
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900 shrink-0">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
              ) : (
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 ${
                    review.initials === "IS"
                      ? "bg-[#c6f6d5] text-stone-950"
                      : "bg-[#FE4A01] text-white"
                  }`}
                >
                  {review.initials}
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="text-stone-200 font-semibold text-xs sm:text-[13px] tracking-tight truncate">
                  {review.name}
                </span>
                <span className="text-stone-500 text-[10px] sm:text-[11px] truncate">
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

{/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-950/20 overflow-hidden font-['Urbanist']">
  <div className="max-w-7xl mx-auto">

    {/* Section Header Text Nodes */}
    <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
      <span className="text-[#FE4A01] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-2 sm:mb-3">
        Reviews
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4">
        Customer Reviews
      </h2>
      <p className="text-stone-400 text-xs sm:text-base leading-relaxed">
        See how engineering teams rate our connectivity network performance and proxy API uptime.
      </p>
    </div>

    {/* Outer Infinite Slider Container Track */}
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap py-2">

        {/* First Loop Instance */}
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-[#070707] border border-stone-800/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl w-[280px] sm:w-[360px] md:w-[380px] h-[260px] sm:h-[280px] shrink-0 whitespace-normal"
          >
            <div>
              {/* Review Header & Rating */}
              <div className="text-white font-semibold text-sm sm:text-[15px] mb-2 tracking-tight line-clamp-1">
                {review.text.split('.')[0]}
              </div>
              <div className="mb-3">
                <TrustpilotStars rating={review.stars} />
              </div>

              {/* Feedback Text Area */}
              <p className="text-stone-400 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal">
                "{review.text}"
              </p>
            </div>

            {/* Client Avatar & Metadata Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-stone-900/80 mt-4">
              {review.avatar ? (
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900 shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 ${
                    review.initials === "IS"
                      ? "bg-[#c6f6d5] text-stone-950"
                      : "bg-[#FE4A01] text-white"
                  }`}
                >
                  {review.initials}
                </div>
              )}

              {/* User Identity Info */}
              <div className="flex flex-col min-w-0">
                <span className="text-stone-200 font-semibold text-xs sm:text-[13px] tracking-tight truncate">
                  {review.name}
                </span>
                <span className="text-stone-500 text-[10px] sm:text-[11px] truncate">
                  {review.role}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Duplicate Loop Instance for Seamless Infinite Scroll */}
        {reviews.map((review, i) => (
          <div
            key={`dup-${i}`}
            className="flex flex-col justify-between bg-[#070707] border border-stone-800/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl w-[280px] sm:w-[360px] md:w-[380px] h-[260px] sm:h-[280px] shrink-0 whitespace-normal"
          >
            <div>
              <div className="text-white font-semibold text-sm sm:text-[15px] mb-2 tracking-tight line-clamp-1">
                {review.text.split('.')[0]}
              </div>
              <div className="mb-3">
                <TrustpilotStars rating={review.stars} />
              </div>
              <p className="text-stone-400 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal">
                "{review.text}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-900/80 mt-4">
              {review.avatar ? (
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900 shrink-0">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
              ) : (
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 ${
                    review.initials === "IS"
                      ? "bg-[#c6f6d5] text-stone-950"
                      : "bg-[#FE4A01] text-white"
                  }`}
                >
                  {review.initials}
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="text-stone-200 font-semibold text-xs sm:text-[13px] tracking-tight truncate">
                  {review.name}
                </span>
                <span className="text-stone-500 text-[10px] sm:text-[11px] truncate">
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

        </div>
    );
}
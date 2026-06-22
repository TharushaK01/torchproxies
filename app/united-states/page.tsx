"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, } from 'lucide-react';
import { Database, RefreshCw, Layers, ShieldCheck, CreditCard } from 'lucide-react';
import Image from "next/image";
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
        { id: '1GB', size: '1GB', price: '$ 4', discount: '6.25% OFF' },
        { id: '5GB', size: '5GB', price: '$ 3.75', discount: '6.25% OFF' },
        { id: '25GB', size: '25GB', price: '$ 3.5', discount: '12.50% OFF' },
        { id: '100GB', size: '100GB', price: '$ 3.25', discount: '18.75% OFF' },
        { id: '500GB', size: '500GB', price: '$ 3', discount: '12.50% OFF' },
        { id: '1000GB', size: '1000GB', price: '$ 2.9', discount: '18.75% OFF' },
    ];
    const features = [
        {
            icon: <Database className="text-white w-4 h-4 text-regular" />,
            title: "Enhanced Privacy",
            desc: "United States has strict internet rules, so residential proxies add extra anonymity. TorchLabs United States residential proxies hide your IP and prevent detection, ideal for social media, SEO and marketing."
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4 text-regular" />,
            title: "Data Access & Analysis",
            desc: "TorchLabs United States residential proxies let you access local market data quickly and reliably, helping you make informed decisions and boosting the success of research or investments."
        },
        {
            icon: <Layers className="text-white w-4 h-4 text-regular" />,
            title: "Content Control",
            desc: "Residential proxies give businesses and personal users the ability to manage online access, control employee activity or block certain sites for children effectively."
        },
        {
            icon: <ShieldCheck className="text-white w-4 h-4 text-regular" />,
            title: "Social Media Management",
            desc: "Access popular United States networks for business or marketing purposes. TorchLabs United States residential proxies let you reach these platforms and drive more engagement to your content."
        },
        {
            icon: <ShieldCheck className="text-white w-4 h-4 text-regular" />,
            title: "Unrestricted Access",
            desc: "Bypass regional restrictions on streaming, apps, or websites. With United States residential IPs, TorchLabs proxies give you seamless access to local content."
        },
        {
            icon: <ShieldCheck className="text-white w-4 h-4 text-regular" />,
            title: "Market Research",
            desc: "United States has strict internet rules, so residential proxies add extra anonymity. TorchLabs United States residential proxies hide your IP and prevent detection, ideal for social media, SEO, and marketing."
        },
    ];
    const topFeatures = features.map(f => f.title);
    const useCases = ["Social Media", "Web Scraping", "Gaming", "Online Market", "Sneaker"];
    const [activeTab, setActiveTab] = useState<'premium' | 'planX'>('premium');

    const reviews = [
        { name: "Alex K.", role: "Lead Scraping Engineer", text: "Absolute game changer for parsing target inventory updates. The success parameters are consistently stable." },
        { name: "Sarah M.", role: "DevOps Architect", text: "IP targeting is granular down to city targets. The latency levels are significantly lower than competitive alternatives." },
        { name: "David L.", role: "Automated Data Analyst", text: "Top tier network infrastructure. The standard volume tier setups maintain premium speeds without bottleneck dropouts." },
    ];

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
            a: "We offer a variety of location-based proxies, including:<br/>Country-specific Proxies – IP addresses assigned to specific countries.<br/>City-specific Proxies – IP addresses from specific cities within a country.<br/>Regional Proxies – IP addresses assigned to broader regions within a country.<br/>We offer a variety of location-based proxies, including:<br/>Country-specific Proxies – IP addresses assigned to specific countries.<br/>City-specific Proxies – IP addresses from specific cities within a country.<br/>Regional Proxies – IP addresses assigned to broader regions within a country."
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
    const plans = [
        {
            name: "Standard",
            desc: "Perfect for everyday online tasks.",
            price: "From $4/GB per month",
            icon: "/images/Standard.svg", // ✅ Updated to your public media directory path
            features: [
                "Premium residential IPs",
                "Rotating and sticky sessions",
                "Target country, state, and city-level",
                "Suitable for general web scraping",
                "Unlimited concurrent sessions",
                "30M+ ethically sourced unique IPs in 195 countries",
                "Easy API access for integration",
            ],
        },
        {
            name: "Premium",
            desc: "For demanding users and businesses.",
            price: "From $4.5/GB per month",
            highlight: "Best Value",
            icon: "/images/Premium.svg", // ✅ Updated to your public media directory path
            featured: true,
            features: [
                "Premium residential IPs",
                "Rotating and sticky sessions",
                "Target country, state, and city-level",
                "Suitable for general web scraping",
                "Unlimited concurrent sessions",
                "90M+ ethically sourced unique IPs in 195 countries",
                "Easy API access for integration",
            ],
        },
        {
            name: "Plan X",
            desc: "Perfect for top tier performance.",
            price: "From $5/GB per month",
            icon: "/images/PlanX.svg", // ✅ Updated to your public media directory path
            features: [
                "Authentic residential proxies with dedicated ISP pools",
                "Rotating and sticky sessions",
                "Target country, state, and city-level",
                "Suitable for general web scraping",
                "Unlimited concurrent sessions",
                "120M+ ethically sourced unique IPs in 195 countries",
                "Easy API access for integration",
            ],
        },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
<header className="relative min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center mt-[80px] px-6 pt-28 pb-12 overflow-hidden space-y-6 font-['Urbanist']">

    <div className="absolute bottom-0 left-0 right-0 h-[65vh] z-0 w-full">

        <Image
            src="/images/hero_back.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom"
        />

        <div className="absolute -bottom-12 left-0 w-full z-10">
            <Marquee />
        </div>

    </div>

    <div className="max-w-6xl mx-auto text-center z-10 font-['Urbanist']">

        <div className="flex items-center justify-center mb-6">
            <a href="https://www.trustpilot.com"
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
            Fast and Secure United States Residential Proxies at Your Fingertips
        </h1>

        <p className="max-w-3xl mx-auto text-stone-400 text-base text-[18px] sm:text-[18px] mb-4 leading-relaxed">
            Effortlessly connect to authentic, ethically sourced residential IPs in United States, giving you the freedom to browse, test, and manage your projects without interruptions
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

        <button
            onClick={() => router.push('https://dashboard.torchproxies.com/')}
            className="group relative overflow-hidden w-full max-w-[400px] sm:max-w-[400px] h-[56px] px-8 bg-orange-600 hover:bg-orange-500 text-white font-bold text-base rounded-2xl tracking-[0.2px] text-center transition-all duration-200 ease-out shadow-[0_4px_30px_rgba(234,88,12,0.45)] hover:shadow-[0_6px_35px_rgba(234,88,12,0.6)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                    Buy United States Residential Proxies
                </span>

                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/95">
                    Buy United States Residential Proxies
                </span>
            </div>
        </button>

        <div className="flex items-center justify-center gap-2.5 text-stone-400 text-sm sm:text-base font-normal tracking-wide pt-4 pb-15">
            <CreditCard className="w-4 h-4 text-stone-500" />
            <span>No credit card needed. Instant access</span>
        </div>

    </div>

</header>

            {/* ── SECTION 2: pricing ─────────── */}
            <section className="bg-[#0a0a0a] text-white py-20 px-6 -mt-[20px] font-['Urbanist']">
                <div className="flex flex-col items-center text-center w-full">
                    <span className="text-orange-500 font-regular text-[16px] mb-4 tracking-widest flex items-center justify-center gap-2">
                        Our products
                    </span>
                    <h2 className="text-[42px] md:text-5xl font-medium mb-6 max-w-4xl">
                        Buy United States Residential Proxies
                    </h2>
                </div>

                {/* Top Bar Features */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm font-regular text-gray-300">
                    {topFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Check className="text-orange-500 w-4 h-4" /> {f}
                        </div>
                    ))}
                </div>

                {/* Pricing Cards Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative p-8 rounded-2xl border-2 flex flex-col justify-between transition-all ${plan.featured
                                ? 'border-orange-600 bg-gradient-to-b from-[#1a0d00] to-black shadow-[0_0_30px_rgba(234,88,12,0.2)]'
                                : 'border-gray-800 bg-[#0a0a0a]'
                                }`}
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-4">

                                    {/* ── Updated Icon Box (Handles image files instead of raw string text emojis) ── */}
                                    <div className="w-20 h-20 rounded-xl flex items-center justify-center p-2.5 shrink-0">
                                        <img
                                            src={plan.icon}
                                            alt={`${plan.name} plan icon`}
                                            className="w-full h-full object-contain filter brightness-110"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm">{plan.desc}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-8">
                                    <span className="bg-[#2a1200] text-orange-500 px-4 py-2 rounded-lg font-bold text-sm">
                                        {plan.price}
                                    </span>
                                    {plan.highlight && (
                                        <span className="bg-[#001a11] text-green-500 px-4 py-2 rounded-lg text-sm font-bold border border-green-900">
                                            {plan.highlight}
                                        </span>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-tight">
                                            <Check className="text-orange-500 w-4 h-4 shrink-0 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => {
                                    if (plan.featured) {
                                        router.push('https://dashboard.torchproxies.com/');
                                    } else {
                                        router.push('https://dashboard.torchproxies.com/');
                                    }
                                }}
                                className={`group relative overflow-hidden w-full h-[52px] px-6 font-bold rounded-xl transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${plan.featured
                                    ? 'bg-orange-600 text-white hover:bg-orange-500 shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.45)]'
                                    : 'bg-transparent text-gray-200 border border-gray-700 hover:border-gray-500 hover:bg-white/5'
                                    }`}
                            >
                                {/* Snappy 3D text track wrapper */}
                                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                    {/* Default State Text */}
                                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                        Try for free
                                    </span>

                                    {/* Hover State Text */}
                                    <span className={`absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] ${plan.featured ? 'text-white/95' : 'text-white'
                                        }`}>
                                        Try for free
                                    </span>

                                </div>
                            </button>
                        </div>
                    ))}
                </div>

            </section>




            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden -mt-[100px] font-['Urbanist']">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/Industry_leader.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-[42px] md:text-5xl md:leading-snug font-medium tracking-tight">
                                Industry leader in fast proxy services for United States
                            </h2>
                            <p className="text-gray-400 text-[16px] font-regular leading-relaxed">
                                TorchLabs' United States proxies are among the fastest in the market. Reliable, stable, and highly anonymous United States proxies allow you to scrape complex targets at any scale. Get your web scraping and automation tasks done faster with TorchLabs' United States proxy IPs.
                            </p>

                            <ul className="text-gray-400 text-lg leading-relaxed">
                                <li>&#9679; High uptime (up to 99.9%)</li>
                                <li>&#9679; Pre selected and thoroughly tested proxies</li>
                                <li>&#9679; Minimal risk of IP blocks</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>


            {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
            <section className="py-24 max-w-7xl mx-auto pb-24 sm:pb-28 mx-[120px] bg-[#0a0a0a] text-white -mt-[100px] font-['Urbanist']">
                {/* ── HEADER ─────────────────────────────────────────────── */}
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">
                        Features
                    </span>
                    <h2 className="text-[42px] sm:text-[40px] font-medium tracking-tight mb-4 text-white">
                        Why Use a United States Residential Proxies?
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-[850px] mx-auto font-normal leading-relaxed">
                        There are countless ways to utilize a United States IP address. Whether you’re accessing local market data, bypassing regional restrictions, or testing apps and games on local servers, our United States proxy servers let you do it all without being physically present.
                    </p>
                </div>

                {/* ── FEATURES GRID ──────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                    {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4 group">

                            {/* Round Solid Orange Icon Badge */}
                            <div className="w-11 h-11 rounded-full bg-[#FE4A01] flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(254,74,1,0.2)] transition-transform duration-200 group-hover:scale-105">
                                {feat.icon}
                            </div>

                            {/* Text Information Elements */}
                            <div className="space-y-1.5">
                                <h4 className="text-[23px] font-medium text-white tracking-tight">
                                    {feat.title}
                                </h4>
                                <p className="text-stone-400 text-[13px] sm:text-sm leading-relaxed font-regular">
                                    {feat.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
            <section className="bg-[#0a0a0a] pb-24 sm:pb-28 mx-[120px] relative overflow-hidden font-['Urbanist']">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[40px] px-8 py-8 text-center">

                        {/* Subtle Radial Glows */}
                        <div
                            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)',

                            }}
                        >

                            <div className="relative z-10 max-w-full mx-auto">
                                <h2 className="text-[48px] md:text-[48px] font-medium tracking-tight mb-8 leading-[1.1]">
                                    Take Advantage of United States Residential Proxies
                                </h2>

                                <p className="text-gray-400 text-[18px] max-w-4xl font-regular md:text-xl leading-relaxed mb-12 mx-auto text-center">
                                    Effortlessly test, deploy, and scale your projects with user-friendly, high quality and cost effective residential proxy infrastructure tailored for any use case
                                </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#ffffff] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:scale-[1.02] active:scale-[0.99]">

                            {/* Fast 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]  text-black">
                                     Get Started Now
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-black">
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

            <section className="bg-[#0a0a0a] text-white pb-24 sm:pb-28 mx-[120px] overflow-hidden  font-['Urbanist']">
                <div className="max-w-7xl mx-auto space-y-32">
                    <h2 className="text-[42px] sm:text-5xl font-regular tracking-tight text-white">
                        Experience the Advantage of TorchLabs <br />United States Residential Proxies
                    </h2>
                    <p className="text-gray-400 text-[18px] max-w-full font-regular md:text-xl  mb-12 text-left -mt-[100px]">
                        Free proxies may seem tempting, but they often lack security and reliability. TorchLabs United States residential proxies ensure fast, secure and stable connections, protecting your data while maintaining high performance.
                    </p>
                    <p className="text-gray-400 text-[18px] max-w-full font-regular md:text-xl leading-relaxed mb-12 text-left">
                        Our premium United States IP addresses are continuously refreshed, offer city-level targeting and come with 24/7 support. Whether you need datacenter or residential proxies, TorchLabs provides trusted, high-speed infrastructure for personal or business use.
                    </p>
                    <p className="text-gray-400 text-[18px] max-w-full font-regular md:text-xl leading-relaxed mb-12 text-left">
                        TorchLabs United States proxies provide unmatched reliability and performance. With continuously updated IPs, high-speed connections, and full customer support, you can confidently carry out personal or business operations without interruptions.
                    </p>
                </div>

            </section>

            {/* ── SECTION 11: FAQ (ACCORDION) ─────────────────────────────── */}
            <section className="pb-24 sm:pb-28 mx-[120px] bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">

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
        {faq.a.split("<br/>").map((line, i, arr) => (
            <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ))}
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
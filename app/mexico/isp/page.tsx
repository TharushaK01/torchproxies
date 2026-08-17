import React, { useState } from 'react';
import { Check, ChevronDown, } from 'lucide-react';
import { Database, RefreshCw, Layers, ShieldCheck, CreditCard } from 'lucide-react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import UseCasesSection from "@/components/home/UseCasesSection"

const ADVANTAGE_CHECKLIST = [
    "Mexican ISP registration on data center infrastructure",
    "High speed, unlimited bandwidth, no mid-session expiry",
    "Built for account management and time-sensitive checkout windows",
    "Built for account management and time-sensitive checkout windows",
] as const;


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
    const FEATURES_DATA = [
        {
            title: "Enhanced Privacy",
            description: "Registered to a real Mexican ISP rather than a data center block, this address reads as ordinary local traffic under Mexico's LFPDPPP standards , and holding one identity avoids the fingerprinting checks a rotating IP invites.",
            icon: "/images/Features.svg"
        },
        {
            title: "Data Access & Analysis",
            description: "Track Mercado Libre and Walmart México pricing continuously without a bandwidth cap , unlimited data at high speed on one Mexican address, with fewer rate-limit interruptions than a rotating pool.",
            icon: "/images/Features.svg"
        },
        {
            title: "Content Control",
            description: "Hold one Mexican address across a long session, so access rules for a household or office connection stay consistent instead of resetting.",
            icon: "/images/Features.svg"
        },
        {
            title: "Unrestricted Access",
            description: "Liga MX broadcasts and Mexican streaming platforms run on a stable, high-speed connection built to hold through a full match without the reconnects a rotating IP can cause.",
            icon: "/images/Features.svg"
        },

        {
            title: "Market Research",
            description: "Run continuous price tracking through El Buen Fin and Hot Sale on unlimited bandwidth , built for sustained monitoring, not single checks.",
            icon: "/images/Features.svg"
        },
        {
            title: "Social Media Management",
            description: "Manage Instagram, Facebook, or WhatsApp Business accounts on a static Mexican IP , a held identity reads as ordinary use, which is what multi-account management actually needs.",
            icon: "/images/Features.svg"
        }
    ];

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
            title: "HTTP & Socks support",
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4 text-regular" />,
            title: "Pay As You Go Pricing  Available",
        },
        {
            icon: <Layers className="text-white w-4 h-4 text-regular" />,
            title: "Authentic IPs",
        }
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
    const ispPlan = {
        name: "ISP",
        desc: "Static residential proxies with unlimited data.",
        price: "From $4/GB per IP",
        icon: "/images/isp-icon.svg",
        features: [
            "Reliable and Stable Connections",
            "ISP-grade Anonymity",
            "Best for Crypto, ticketing, web scraping, sneaker drops, social media, Pokémon, and Spotify automation.",
            "Quick Setup and Instant Activation",
            "Versatility Across Applications",
            "24/7 Dedicated Support",
            "Global Coverage with Regional Optimization",
        ],
    };

    return (
        <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">
            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <section className="relative z-0 w-full pt-20 md:pt-28 pb-24 md:pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-white font-['Urbanist'] min-h-[600px]">

                {/* 1. Background Image Wrapper */}
                <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                    <Image
                        src="/images/hero-cta-bg-mexico.png"
                        alt="Hero CTA Background"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                    {/* Soft Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10 pointer-events-none" />
                </div>

                {/* 2. Main Content Wrapper (Increased z-index to z-30) */}
                <div className="relative z-30 max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-8 mb-8">
                    {/* Trustpilot Badge Header */}
                    <div className="flex items-center justify-center mb-2">
                        <a
                            href="https://www.trustpilot.com/review/torchlabs.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer relative z-30"
                        >
                            <img
                                src="/images/TrustPiolet.png"
                                alt="Excellent 5-star rating on Trustpilot"
                                className="h-8 w-auto object-contain"
                                loading="lazy"
                            />
                        </a>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-[72px] font-normal leading-[1.15] tracking-tight text-white max-w-7xl">
                        Fast Mexico ISP Proxies for Checkout & Account Stability
                    </h1>

                    {/* Subtitle Body Text */}
                    <p className="text-gray-400 text-sm sm:text-base md:text-[20px] leading-relaxed max-w-5xl font-regular pt-1">
                        One static, Mexico-registered IP with data center speed and unlimited bandwidth behind it , built to hold through a full checkout flow or login session that a rotating IP would break.
                    </p>

                    {/* CTA Buttons Container */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 w-full max-w-md sm:max-w-none relative z-30">

                        {/* PRIMARY BUTTON */}
                        <button
                            onClick={() => router.push('https://dashboard.torchproxies.com/')}
                            className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] active:scale-[0.98] touch-manipulation"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] pointer-events-none">
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    Try free now
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                    Try free now
                                </span>
                            </div>
                        </button>

                        {/* SECONDARY BUTTON */}
                        <button
                            onClick={() => {
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-400 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out active:scale-[0.98] touch-manipulation"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] pointer-events-none">
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    See Pricing
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white">
                                    See Pricing
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Bottom Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
                        <div className="bg-[#121824]/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center flex flex-col justify-center space-y-1">
                            <span className="text-xl md:text-[19px] font-black text-white tracking-wide">4,267,587</span>
                            <span className="text-[13px] text-gray-400 font-medium">Mexico residential IPs</span>
                        </div>
                        <div className="bg-[#121824]/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center flex flex-col justify-center space-y-1">
                            <span className="text-xl md:text-[19px] font-black text-white tracking-wide">99.9%</span>
                            <span className="text-[13px] text-gray-400 font-medium">uptime</span>
                        </div>
                        <div className="bg-[#121824]/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center flex flex-col justify-center space-y-1">
                            <span className="text-xl md:text-[19px] font-black text-white tracking-wide">HTTP(S) &amp; SOCKS5</span>
                            <span className="text-[13px] text-gray-400 font-medium">protocols</span>
                        </div>
                        <div className="bg-[#121824]/30 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center flex flex-col justify-center space-y-1">
                            <span className="text-xl md:text-[19px] font-black text-white tracking-wide">24/7</span>
                            <span className="text-[13px] text-gray-400 font-medium">dedicated Support</span>
                        </div>
                    </div>
                </div>

                {/* 3. Marquee Container */}
                <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                    <Marquee />
                </div>

            </section>

            {/* ── SECTION 2: pricing ─────────── */}
            <section id="pricing" className="bg-[#0a0a0a] text-white py-20 px-6 font-['Urbanist'] mb-[20px]">
                <div className="flex flex-col items-center text-center w-full">
                    <span className="text-orange-500 font-regular text-[16px] mb-[12px] tracking-widest flex items-center justify-center gap-2">
                        Our products
                    </span>
                    <h2 className="text-[42px] md:text-5xl font-medium mb-[20px] max-w-4xl">
                        Buy Mexico ISP Proxies
                    </h2>
                </div>

                {/* Top Bar Features */}
                <div className="flex flex-wrap justify-center gap-6 mb-[65px] text-[16px] font-regular text-gray-300">
                    {topFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Check className="text-[#00E5A3] w-4 h-4" /> {f}
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto mb-8 px-4 font-['Urbanist']">
                    <div className="relative p-6 sm:p-8 rounded-3xl border-2 border-[#ff4500]/80 bg-[#060606] shadow-[0_0_50px_rgba(255,69,0,0.18)] transition-all">

                        {/* ── TOP HEADER SECTION ── */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">

                            {/* Left: Icon, Name & Description */}
                            <div className="flex items-center gap-4">
                                {/* Rounded Orange Icon Box */}
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ff4500] flex items-center justify-center p-3 shrink-0 shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                                    <img
                                        src={ispPlan.icon}
                                        alt={`${ispPlan.name} icon`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                        {ispPlan.name}
                                    </h3>
                                    <p className="text-stone-400 text-xs sm:text-sm font-normal">
                                        {ispPlan.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Right: Top-Right Price Badge */}
                            <div className="self-start">
                                <span className="inline-block bg-[#1a0a03] text-[#ff4500] border border-[#ff4500]/30 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap">
                                    {ispPlan.price}
                                </span>
                            </div>
                        </div>

                        {/* ── FEATURE LIST ── */}
                        <ul className="space-y-3.5 mb-8">
                            {ispPlan.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[16px] sm:text-sm text-stone-400 leading-relaxed">
                                    <Check className="text-[#00E5A3] w-4 h-4 shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        {/* ── CTA BUTTON ── */}
                        <button
                            onClick={() => router.push('https://dashboard.torchproxies.com/')}
                            className="group relative overflow-hidden w-full h-[50px] bg-[#121212] border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white font-semibold rounded-xl transition-all duration-200 ease-out active:scale-[0.99] cursor-pointer touch-manipulation"
                        >
                            {/* Snappy 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] pointer-events-none">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-[14px] text-white">
                                    Try for free
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-[14px] text-white">
                                    Try for free
                                </span>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="w-full py-6 px-4 text-gray-300 font-['Urbanist'] select-none flex flex-col items-center justify-center gap-4 text-sm font-medium">

                    {/* Top Row: Value Proposition Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                        {/* Badge 1: Secure Checkout */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/secure.svg"
                                alt="Secure checkout icon"
                                width={18}
                                height={18}
                                className="w-4 h-4 object-contain"
                            />
                            <span>Secure checkout</span>
                        </div>

                        {/* Badge 2: Money Back Guarantee */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/24hrs.svg"
                                alt="Guarantee icon"
                                width={18}
                                height={18}
                                className="w-4 h-4 object-contain"
                            />
                            <span>24 Hour Money Back Guarantee</span>
                        </div>

                        {/* Badge 3: 24/7 Support */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/support.svg"
                                alt="Support icon"
                                width={18}
                                height={18}
                                className="w-4 h-4 object-contain"
                            />
                            <span>24/7 support</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
                        {/* Credit Card Icon */}
                        <Image
                            src="/images/tab.svg"
                            alt="Credit card icon"
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain mr-1"
                        />

                        {/* Text */}
                        <span>We accept</span>

                        {/* Card Logos */}
                        <div className="flex items-center gap-1.5 ml-1 mr-2">
                            <Image src="/images/logo1.svg" alt="Visa" width={28} height={16} className="h-4 w-auto object-contain" />
                        </div>

                        {/* Text */}
                        <span className="mx-1">and</span>

                        {/* Crypto Logos */}
                        <div className="flex items-center gap-1.5 ml-1 mr-2">
                            <Image src="/images/logo2.svg" alt="Bitcoin" width={28} height={28} className="w-auto h-4 object-contain" />
                        </div>
                    </div>

                </div>
            </section>


            <section className="w-full bg-[#0a0a0a] bg-[radial-gradient(ellipse_100%_70%_at_50%_100%,#4A1705_0%,#0a0a0a_100%)] py-16 px-4 text-white font-['Urbanist'] mt-[20px]">
                {/* ── HEADER ─────────────────────────────────────────────── */}
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-[14px] uppercase">
                        Features
                    </span>
                    <h2 className="text-[48px] sm:text-[40px] font-regular tracking-tight mb-[14px] text-white">
                        Built for Real Work, Not Just Browsing
                    </h2>
                </div>


                <div className="w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Urbanist']">

                    {FEATURES_DATA.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#120B09]/90 rounded-2xl p-7 flex flex-col space-y-5.5 transition-all duration-200 hover:border-[#3D1E16]"
                        >
                            {/* Card Header: Icon + Title */}
                            <div className="flex items-center gap-3">
                                {/* Orange Icon Container */}
                                <div className="w-7 h-7 rounded-md bg-[#FF4F00] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,79,0,0.4)]">
                                    <Image
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        width={16}
                                        height={16}
                                        className="w-4 h-4 object-contain brightness-200"
                                    />
                                </div>

                                {/* Title - Uniform font size across all cards */}
                                <h3 className="text-[23px] font-medium text-white tracking-wide">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Description Body Text - Uniform font size & line height */}
                            <p className="text-[#9E918C] text-[14px] leading-[1.65] font-normal">
                                {card.description}
                            </p>
                        </div>
                    ))}

                </div>
            </section>


            <section className="relative w-full bg-[#0a0a0a] bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,#4A1705_0%,#0a0a0a_100%)] text-white py-20 px-4 md:px-8 font-['Urbanist'] overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-10">

                    {/* Section Header */}
                    <div className="space-y-2">
                        <span className="text-[#FF4F00] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            WHY RESIDENTIAL
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-normal leading-[1.15] text-white max-w-4xl tracking-tight">
                            Industry leader in fast proxy services <br className="hidden md:block" />
                            for Mexico
                        </h2>                 
</div>

                    {/* Asymmetric Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                        {/* Left Column: Primary Narrative Card */}
                        <div className="lg:col-span-5 bg-[#0B0B0B] border border-[#FFFFFF]/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 backdrop-blur-sm">
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-4xl font-normal leading-tight text-white tracking-tight">
                                    TorchProxies <br/>
                                    Mexico ISP Proxy <br />
                                    Advantage<br />
                                    
                                </h3>
                                <p className="text-[#A39590] text-base md:text-[17px] leading-relaxed font-normal">
                                    Switch IPs mid-session on a Mercado Libre seller account or a Mexican bank login, and don't be surprised by the lockout that follows. TorchProxies Mexico ISP proxies hold one static, Mexico-registered address for your entire session, no switching, no surprises.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Visual Component Stack */}
                        <div className="lg:col-span-7 flex flex-col gap-6">

                            {/* Top Right: Uptime Card Image (Uploaded from /public folder) */}
                            <div className="relative w-full h-[200px] sm:h-[260px] md:h-[220px] bg-[#0B0B0B] border border-[#FFFFFF]/10 rounded-3xl overflow-hidden backdrop-blur-sm flex items-center justify-center p-4">
                                <Image
                                    src="/images/uptime-card-bg.png" // Replace with your exact public folder path
                                    alt="99% Uptime Tested Metrics Card"
                                    fill
                                    priority
                                    className="object-contain object-center p-2"
                                    sizes="(max-width: 1024px) 100vw, 58vw"
                                />
                            </div>

                            {/* Bottom Right: Value Proposition Checklist Container */}
                            <div className="bg-[#0B0B0B] border border-[#FFFFFF]/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center space-y-5 backdrop-blur-sm">
                                {ADVANTAGE_CHECKLIST.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3.5 group">
                                        <div className="shrink-0 flex items-center justify-center">
                                            <Check
                                                className="w-5 h-5 text-[#22C55E]"
                                                strokeWidth={2.5}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <span className="text-[#858697] text-base md:text-[18px] font-regular leading-normal">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <UseCasesSection />

            {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
            <section className="bg-[#0a0a0a] pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 relative overflow-hidden font-['Urbanist']">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden bg-[#0a0a0a] rounded-2xl sm:rounded-3xl md:rounded-[40px]">

                        {/* Banner Outer Container */}
                        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center overflow-hidden bg-[#0a0a0a]">

                            {/* Background Image Container */}
                            <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                                <Image
                                    src="/images/mexicoctaback.png"
                                    alt="CTA Background"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                    sizes="100vw"
                                />
                                {/* Dark overlay for contrast */}
                                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-20 max-w-full mx-auto">
                                {/* Responsive Heading */}
                                <h2 className="text-2xl sm:text-3xl md:text-[48px] font-medium tracking-tight mb-3 sm:mb-4 leading-[1.2] text-white">
                                    Ready to Connect from the Mexico?
                                </h2>

                                {/* Responsive Subtitle */}
                                <p className="text-gray-300 sm:text-gray-400 text-sm sm:text-base md:text-xl font-normal max-w-3xl leading-relaxed mb-8 sm:mb-10 mx-auto text-center">
                                    Pay-as-you-go pricing, no contracts, money-back guarantee.
                                </p>

                                {/* Button Container */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                                    <button
                                        onClick={() => router.push('https://dashboard.torchproxies.com/')}
                                        className="cursor-pointer group relative w-full sm:w-60 h-[52px] sm:h-[56px] overflow-hidden bg-[#ffffff] text-black font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] active:scale-[0.98] touch-manipulation"
                                    >
                                        {/* 3D text track wrapper with pointer-events-none to pass taps directly to button */}
                                        <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)] pointer-events-none">
                                            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-black font-semibold">
                                                Try free now
                                            </span>

                                            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-black font-semibold">
                                                Try free now
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 11: FAQ (ACCORDION) ─────────────────────────────── */}
            <section className="py-12 sm:py-20 md:pb-28 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">

                {/* ── Content Wrapper ── */}
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-16">
                        <span className="text-[#FE4A01] text-xs font-medium tracking-widest block mb-2 sm:mb-3 uppercase">
                            FAQ
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
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
                                        className="w-full text-left py-4 sm:py-6 flex items-center justify-between text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors cursor-pointer touch-manipulation min-h-[48px]"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="pr-4 leading-snug">{faq.q}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FE4A01]' : 'group-hover:text-stone-300'
                                                }`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-5 sm:pb-6 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-stone-400 text-sm sm:text-[15px] leading-relaxed pr-2 sm:pr-10">
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

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />
            </section>

        </div>
    );
}
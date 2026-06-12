"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, Globe, Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag, CreditCard } from 'lucide-react';
import Flag from 'react-world-flags';
import UseCasesSection from '@/components/home/UseCasesSection';
import Image from "next/image";
import { useRouter } from 'next/navigation';




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
        { code: 'US', name: 'United States', ips: '4,429,824', url: '/united-states' },
        { code: 'GB', name: 'United Kingdom', ips: '1,449,139', url: '/united-kingdom' },
        { code: 'DE', name: 'Germany', ips: '1,431,960', url: '/germany' },
        { code: 'AU', name: 'Australia', ips: '452,720', url: '/australia' },
        { code: 'CA', name: 'Canada', ips: '815,658', url: '/canada' },
        { code: 'MX', name: 'Mexico', ips: '4,429,824', url: '/mexico' },
        { code: 'CN', name: 'China', ips: '4,429,824', url: '/china' },
        { code: 'FR', name: 'France', ips: '4,429,824', url: '/france' },
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
        { id: '1GB', size: '1GB', price: '$ 4', },
        { id: '5GB', size: '5GB', price: '$ 3.75', discount: '6.25% OFF' },
        { id: '25GB', size: '25GB', price: '$ 3.5', discount: '12.50% OFF' },
        { id: '100GB', size: '100GB', price: '$ 3.25', discount: '18.75% OFF' },
        { id: '500GB', size: '500GB', price: '$ 3', discount: '12.50% OFF' },
        { id: '1000GB', size: '1000GB', price: '$ 2.9', discount: '18.75% OFF' },
    ];
    const features = [
        {
            icon: "/images/sr1.svg",
            title: "Reliable Data Collection",
            desc: "Gather essential data safely with minimal detection risk"
        },
        {
            icon: "/images/sr2.svg",
            title: "Auto Rotate IPs",
            desc: "Rotate IPs every 1, 10 or 30 mins to avoid bans"
        },
        {
            icon: "/images/sr3.svg",
            title: "Sticky Sessions",
            desc: "Keep sessions active for consistent, stable scraping"
        },
        {
            icon: "/images/sr4.svg",
            title: "SOCKS5 Supported",
            desc: "Advanced protocol support for speed and flexibility"
        },
        {
            icon: "/images/sr5.svg",
            title: "Unlimited Sessions",
            desc: "Run multiple tasks at once with no session limits"
        },
        {
            icon: "/images/sr6.svg",
            title: "Cost Effective",
            desc: "Affordable plans designed for smaller scale needs"
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
    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden space-y-6 font-['Urbanist']">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden space-y-6 font-['Urbanist']">
<div className="absolute bottom-40 left-0 right-0 h-[60vh] z-0">
    <Image
        src="/images/hero_back.png"
        alt=""
        fill
        priority
        className="object-cover object-bottom"
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
                        Best Standard Residential Proxies <br />
                        <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">Access 30M+ Global IPs</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-stone-400 text-base text-[18px] sm:text-xl mb-10 leading-relaxed">
                        Reliable and steady residential proxies perfect for everyday tasks.A balanced choice to get the job done without breaking the bank.
                    </p>

                    <div className="mt-[-50px] py-10 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-sm font-medium">
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Rotating & Static IPs</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Unlimited Concurrency</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> 195+ Countries Network</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

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
                        <button onClick={() => {
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-400 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]">

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

            {/* ── SECTION 2: Perfect for Every Scraping & Animations ─────────── */}
            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/Scraping.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6 font-['Urbanist']">
                            <h2 className="text-[42px] md:text-5xl font-medium tracking-tight">
                                Perfect for Everyday Scraping & Automation
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                TorchProxies’ Standard Residential proxies provide a simple, reliable solution for routine web tasks. With a large global IP pool and stable performance, this plan is ideal for users who need consistent access for day-to-day scraping, monitoring, and basic automation without the complexity or cost of higher-tier options.
                            </p>
                            <ul className='text-gray-400'>
                                <li>&#9679; Large, diverse residential IP pool</li>
                                <li>&#9679; Reliable performance for common websites</li>
                                <li>&#9679; Easy rotating & sticky session support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: Residential Proxies ────────────────────── */}
            <section id="pricing" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden space-y-6 font-['Urbanist']">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SUB-LABELS ───────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">
                            Residential proxies
                        </span>
                        <h2 className="text-[42px] md:text-5xl font-medium tracking-tight mb-6">
                            Buy Standard Residential Proxies
                        </h2>

                        {/* Top Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-stone-400 text-xs sm:text-sm font-medium">
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Secure checkout with SSL encryption</span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Pay As You Go Pricing</span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Authentic IPs</span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Support both card & crypto</span>
                        </div>
                    </div>

                    {/* ── MAIN CONTENT GRID ───────────────────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">

                        {/* LEFT PANEL: PRODUCT META & SPECIFICATIONS */}
                        <div className="lg:col-span-6 space-y-2 lg:pr-8">
                            <div className="flex items-center gap-4">
                                {/* Product Badge Logo Block */}

                                <div className="relative w-[84px] h-[84px]">
                                    <Image
                                        src="/images/standardresidential.svg" // Path relative to your public folder
                                        alt="Feature Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-[36px] sm:text-[36px] font-bold tracking-tight text-stone-200 leading-none">
                                        Standard
                                    </h3>
                                    <h3 className="text-[36px] sm:text-[36px] font-bold tracking-tight text-stone-200 leading-none mt-1">
                                        Residential Proxies
                                    </h3>
                                </div>
                            </div>

                            <p className="text-stone-400 text-[16px] sm:text-base leading-relaxed">
                                Reliable and affordable with rotating residential proxies and optional static sessions <span className="text-[#FE4A01]">perfect for everyday online tasks.</span>
                            </p>

                            {/* Custom Micro Pill Badge */}
                            <div className="inline-block bg-[#FE4A01]/10 border border-[#FE4A01]/20 px-3 py-1 rounded-md">
                                <span className="text-[#FE4A01] text-[14px] font-semi-bold tracking-wide">From $4/GB per month</span>
                            </div>

                            {/* Feature Checklist */}
                            <ul className="space-y-3.5 pt-4 text-stone-400 text-[16px] font-regular">
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Data never expires</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Can cancel anytime</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Authentic residential IPs</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Suitable for general web scraping</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Target any country, state and city level</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Unlimited concurrent sessions</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Rotating and sticky sessions</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> 30M+ ethically sourced unique IPs in 195 countries</li>
                            </ul>

                            {/* Main Primary CTA Button */}


                            <div className="flex flex-col sm:flex-row items-center justify-left gap-4 mb-2 mt-[32px]">

                                {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                                <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

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
                            </div>
                            {/* <div className="pt-4">
                                <button className="w-full sm:w-auto px-10 py-4 bg-[#FE4A01] hover:bg-[#e04201] text-white font-bold rounded-xl transition-all shadow-[0_15px_35px_rgba(254,74,1,.25)] text-sm">
                                    Start free with 1 GB
                                </button>
                            </div> */}

                            {/* Gateway Merchant Footnote Icons */}
                            <div className="pt-4 flex items-center gap-3 text-[14px] text-stone-500 font-medium select-none">
                                <span>We Support</span>

                                <div className="relative w-[217px] h-[20px] flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                                    <Image
                                        src="/images/supports.svg"
                                        alt="Visa"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span>& more</span>
                            </div>
                        </div>

                        {/* RIGHT PANEL: GRID OF PRICING CARDS */}
                        <div className="grid grid-cols-2 gap-y-4 gap-x-[200px] w-fit ml-[188px]">
                            {tiers.map((tier) => {
                                const isSelected = selectedPlan === tier.id;
                                return (
                                    <div
                                        key={tier.id}
                                        onClick={() => setSelectedPlan(tier.id)}
                                        className={`w-[180px] h-[171px] border rounded-2xl p-5 relative cursor-pointer select-none transition-all duration-200 flex flex-col justify-between ${isSelected
                                            ? 'bg-stone-900/40 border-[#FE4A01] shadow-[0_0_25px_rgba(254,74,1,.1)]'
                                            : 'bg-[#0b0b0d]/50 border-stone-900 hover:border-stone-800/80'
                                            }`}
                                    >
                                        {/* Floating Green Percentage Label */}
                                        <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                                            {tier.discount}
                                        </div>

                                        {/* Volume Metric Display */}
                                        <div className="mt-15">
                                            <span className="text-[32px] font-medium tracking-tight text-stone-200">
                                                {tier.size}
                                            </span>
                                        </div>

                                        {/* Price Metric Formula */}
                                        <div className="mb-2 flex items-baseline gap-1">
                                            <span className="text-[#FE4A01] font-bold text-xl">
                                                {tier.price}
                                            </span>
                                            <span className="text-stone-500 text-xs font-medium">
                                                per GB
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>
            </section>

            {/* ── SECTION 4: GLOBAL LOCATIONS ──────────────────────────────── */}
            <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden space-y-6 font-['Urbanist']">
                {/* Background Map Overlay */}
                <div
                    className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/world-map.png')",
                    }}
                />


                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="text-orange-500 font-regular text-[16px] mb-4 block tracking-widest">
                        Locations
                    </span>
                    <h2 className="text-[42px] md:text-5xl font-medium mb-6">
                        Available in 195+ countries
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-16">
                        We provide you access to a global network of ethical sourced proxy nodes from around the world.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 -mt-[40px]">
                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('/locations')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

                            {/* Fast 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    View all locations
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                    View all locations
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mt-[64px]">
                        {locations.map((loc, index) => (
                            <div
                                key={`${loc.code}-${index}`}
                                // ── CLICK NAVIGATION HANDLER ──
                                onClick={() => router.push(loc.url)}
                                className="flex items-center gap-3.5 bg-[#0b0b0d]/30 border border-stone-900/60 rounded-[12px] p-4 hover:border-stone-800/80 hover:bg-[#0e0e12]/60 transition-all duration-200 group cursor-pointer"
                            >
                                {/* Flag Container */}
                                <div className="w-11 h-9 relative overflow-hidden rounded-[3px] flex-shrink-0 bg-stone-950 shadow-[0_1px_3px_rgba(0,0,0,0.5)] border border-stone-900/20">
                                    <Flag
                                        code={loc.code}
                                        className="w-full h-full object-cover"
                                        fallback={<span className="text-[10px] text-stone-600">🏳️</span>}
                                    />
                                </div>

                                {/* Data Labels Container */}
                                <div className="flex flex-col min-w-0 leading-tight">
                                    <span className="text-[20px] font-semibold text-stone-300 tracking-tight group-hover:text-white transition-colors truncate">
                                        {loc.name}
                                    </span>
                                    <span className="text-[16px] text-stone-600 font-normal mt-0.5 tracking-wide">
                                        {loc.ips} IPs
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Call to Action */}
                    {/* <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                        View all locations
                    </button> */}
                </div>
            </section>

            {/* ── SECTION 5: WHY CHOOSETORCHPROXIES ──────────────────────────────── */}
            <section className="py-24 bg-[#0a0a0a] text-white relative space-y-6 font-['Urbanist']">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SECTION ───────────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">
                            Features
                        </span>
                        <h2 className="text-[42px] sm:text-5xl font-medium tracking-tight text-white mb-4">
                            Built for you dashboard
                        </h2>
                        <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
                            Easily manage, monitor and optimize your proxy operations with a user centric dashboard.
                        </p>
                    </div>

                    {/* ── BENTO BOX GRID LAYOUT ────────────────────────────────── */}
                    {/* Changed grid layout to flex on desktop to enforce exact, explicit layout pixel widths */}
                    <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full max-w-[1204px] mx-auto">

                        {/* CARD 1: TARGET ANY COUNTRY (Left Column - Locked at exactly 591px wide) */}
                        <div className="w-full lg:w-[591px] flex-shrink-0 bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[540px]">
                            <div className="mb-6">
                                <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                    Target Any Country, State or City
                                </h3>
                                <p className="text-stone-400 text-[18px] leading-relaxed font-regular">
                                    Reach your audience anywhere with pinpoint geographic precision.
                                </p>
                            </div>

                            {/* Visual Image / Mockup Area */}
                            <div className="relative w-full h-full max-h-[473px]">
                                <Image
                                    src="/images/targetanycountry.png"
                                    alt="Proxy Dashboard Mockup"
                                    fill
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                        </div>

                        {/* RIGHT SIDE CONTAINER GROUP (Right Column - Locked at exactly 589px wide) */}
                        <div className="w-full lg:w-[589px] flex-shrink-0 flex flex-col gap-6">

                            {/* CARD 2: TRACK MANAGE & CONTROL (Top Right Row) */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col gap-6 justify-between items-start overflow-hidden min-h-[258px]">
                                <div className="max-w-xl shrink-0">
                                    <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                        Track Manage & Stay in Control
                                    </h3>
                                    <p className="text-stone-400 text-[18px] leading-relaxed font-regular">
                                        Monitor usage, switch locations, and stay fully in command of your network.
                                    </p>
                                </div>

                                <div className="relative w-full h-[136px]">
                                    <Image
                                        src="/images/trackmanage.png"
                                        alt="Proxy Dashboard Mockup"
                                        fill
                                        className="object-contain"
                                        priority={false}
                                    />
                                </div>
                            </div>

                            {/* CARD 3: DEVELOPER FRIENDLY SETUP (Bottom Right Row) */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col gap-6 justify-between items-start overflow-hidden min-h-[258px]">
                                <div className="max-w-xl shrink-0">
                                    <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                        Fast, Developer Friendly Setup
                                    </h3>
                                    <p className="text-stone-400 text-[18px] leading-relaxed font-regular">
                                        Get started in minutes with simple integration and powerful API tools.
                                    </p>
                                </div>

                                {/* Visual Image / Mockup Area */}
                                <div className="relative w-full h-[136px]">
                                    <Image
                                        src="/images/fastdeveloper.png"
                                        alt="Proxy Dashboard Mockup"
                                        fill
                                        className="object-contain"
                                        priority={false}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-[#0a0a0a] text-white space-y-6 font-['Urbanist']">
                {/* ── HEADER ─────────────────────────────────────────────── */}
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">
                        Features
                    </span>
                    <h2 className="text-[42px] sm:text-[40px] font-medium tracking-tight mb-4 text-white">
                        Core Features for Everyday Use
                    </h2>
                    <p className="text-stone-400 text-[18px] sm:text-base max-w-2xl mx-auto font-regular leading-relaxed">
                        Reliable, easy-to-use features designed for general scraping, basic automation and small-scale tasks.
                    </p>
                </div>

                {/* ── FEATURES GRID ──────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                    {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4 group">

                            {/* Round Solid Orange Icon Badge */}
                            <div className="rounded-full bg-[#FE4A01] flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(254,74,1,0.2)] transition-transform duration-200 group-hover:scale-105">

                                {/* ✨ Custom SVG Image Implementation wrapper */}
                                <div className="relative w-[56px] h-[56px]">
                                    <Image
                                        src={feat.icon}
                                        alt={`${feat.title} Icon`}
                                        fill
                                        className="object-contain inverted-icon-color" // Optional filter if you need to force custom colors
                                    />
                                </div>

                            </div>

                            {/* Text Information Elements */}
                            <div className="space-y-1.5">
                                <h4 className="text-[23px] font-medium text-white tracking-tight">
                                    {feat.title}
                                </h4>
                                <p className="text-stone-400 text-[16px] sm:text-[16px] leading-relaxed font-regular">
                                    {feat.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
            <section className="bg-[#0a0a0a] py-20 px-6 space-y-6 font-['Urbanist']">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[40px] px-8 py-8 text-center">

                        {/* Subtle Radial Glows */}
                        <div
                            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)',

                            }}
                        >

                            <div className="max-w-5xl relative z-10  mx-auto">
                                <h2 className="max-w-5xl text-[48px] md:text-[48px] font-medium tracking-tight mb-2 leading-[1.1] text-[#FFF6EC]">
                                    Start Your Simple & Reliable Scraping Journey
                                </h2>
                                {/* Added mx-auto to center the block container itself */}
                                <p className="max-w-3xl mx-auto text-gray-400 text-[18px] font-regular md:text-xl leading-relaxed mb-6 text-center">
                                    Get dependable, easy to use residential proxies built for everyday automation, testing, and data collection.
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
                                {/* 
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button className="bg-[#ffffff] hover:bg-[#e63e00] md:text-[16px] text-black px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20">
                                        Get Started Now
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: USE CASES ─────────────────────────────────────── */}
            <main className="bg-[#0a0a0a] min-h-screen text-white space-y-6 font-['Urbanist']">
                {/* Other sections can go here */}

                {/* ── YOUR NEW USE CASES SECTION ── */}
                <UseCasesSection />

                {/* Other sections can go here */}
            </main>

            {/* ── SECTION 9: UPSELL CARDS ──────────────────────────────────── */}
            <section className="py-24 bg-[#0a0a0a] text-white">
                <div className="max-w-[1240px] mx-auto px-6">

                    {/* ── TOP HEADLINE SECTION ────────────────────────────────── */}
                    <div className="text-center mb-12">
                        <h2 className="text-[42px] sm:text-[42px] font-medium tracking-tight text-white mb-2">
                            Looking for more power?
                        </h2>
                        <p className="text-stone-400 text-[18px] font-regular">
                            Fast and reliable rotating residential proxies.
                        </p>
                    </div>

                    {/* ── NAV TAB SYSTEM ──────────────────────────────────────── */}
                    <div className="flex border-b border-stone-900 w-full mb-16">
                        <button
                            onClick={() => setActiveTab('premium')}
                            className={`flex-1 pb-4 px-8 text-sm font-medium transition-all relative ${activeTab === 'premium' ? 'text-[#FE4A01]' : 'text-stone-500 hover:text-stone-300'
                                }`}
                        >
                            Premium Residential Proxies
                            {activeTab === 'premium' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE4A01]" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('planX')}
                            className={`flex-1 pb-4 px-8 text-sm font-medium transition-all relative ${activeTab === 'planX' ? 'text-[#FE4A01]' : 'text-stone-500 hover:text-stone-300'
                                }`}
                        >
                            Plan X Residential Proxies
                            {activeTab === 'planX' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE4A01]" />
                            )}
                        </button>
                    </div>

                    {/* ── TAB DYNAMIC VIEW CONTENT ────────────────────────────── */}
                    {activeTab === 'premium' ? (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Info Column */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="relative inline-block">
                                    <h3 className="text-[40px] font-medium tracking-tight text-white leading-tight text-white">
                                        Premium Residential  <br />Proxies
                                    </h3>
                                    <span className="absolute -top-3 -right-50 bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-[14px] font-medium px-2.5 py-1 rounded-md">
                                        From $4.5/GB
                                    </span>
                                </div>
                                <p className="text-stone-400 text-[16px] font-regular leading-relaxed">
                                    Enhanced speed and reliability with rotating residential proxies and static sessions ideal for demanding users and businesses.
                                </p>
                                <ul className="space-y-3 text-stone-400 text-[16px] font-regular">
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Premium residential IPs</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Rotating and sticky sessions</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Target country, state, and city-level</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Suitable for general web scraping</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Unlimited concurrent sessions</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> 90M+ ethically sourced unique IPs in 195 countries</li>
                                </ul>
                                <div className="flex flex-col sm:flex-row items-center justify-left gap-4 mb-2">

                                    {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                                    <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-[403px] h-[46px] overflow-hidden bg-[#FF4F00] text-white text-[16px] font-medium rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

                                        {/* Fast 3D text track wrapper */}
                                        <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                            {/* Default State Text */}
                                            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                                Upgrade to premium
                                            </span>

                                            {/* Hover State Text */}
                                            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                                Upgrade to premium
                                            </span>

                                        </div>
                                    </button>
                                </div>
                                {/* <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FE4A01] hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm">
                                    Upgrade to premium
                                </button> */}
                            </div>

                            {/* Right Image Column */}
                            <div className="lg:col-span-5 bg-[#0b0b0d] border border-stone-900 rounded-3xl overflow-hidden min-h-[380px]">
                                <img
                                    src="/images/sr5.png"
                                    alt="Premium Residential Proxies"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Info Column */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="relative inline-block">
                                    <h3 className="text-[40px] font-medium tracking-tight text-white leading-tight text-white">
                                        Plan X Residential <br />Proxies
                                    </h3>
                                    <span className="absolute -top-3 -right-50 bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-[14px] font-medium px-2.5 py-1 rounded-md">
                                        From $4.5/GB
                                    </span>
                                </div>
                                <p className="text-stone-400 text-[16px] font-regular leading-relaxed max-w-xl">
                                    Reliable and affordable with rotating residential proxies and optional static sessions perfect for everyday online tasks.
                                </p>
                                <ul className="space-y-3 text-stone-400 text-[16px] font-regular">
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Authentic residential proxies with dedicated ISP pools</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Rotating and sticky sessions</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Target country, state, and city-level</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Suitable for general web scraping</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Unlimited concurrent sessions</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> 120M+ ethically sourced unique IPs in 195 countries</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Easy API access for integration</li>
                                </ul>
                                <div className="flex flex-col sm:flex-row items-center justify-left gap-4 mb-2">

                                    {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                                    <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-[403px] h-[46px] overflow-hidden bg-[#FF4F00] text-white text-[16px] font-medium rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

                                        {/* Fast 3D text track wrapper */}
                                        <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                            {/* Default State Text */}
                                            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                                Upgrade to premium
                                            </span>

                                            {/* Hover State Text */}
                                            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                                Upgrade to premium
                                            </span>

                                        </div>
                                    </button>
                                </div>
                                {/* <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FE4A01] hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm">
                                    Upgrade to premium
                                </button> */}
                            </div>

                            {/* Right Image Column */}
                            <div className="lg:col-span-5 bg-[#0b0b0d] border border-stone-900 rounded-3xl overflow-hidden min-h-[380px]">
                                <img
                                    src="/images/why_plan_x.png"
                                    alt="Premium Residential Proxies"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    )}

                </div>
            </section>

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
            <section className="py-24 bg-stone-950/20  overflow-hidden space-y-6 font-['Urbanist']">
                <div className="max-w-6xl mx-auto px-6">
                    <span className="text-center text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">
                        Testimonials
                    </span>

                    {/* Section Header Text Nodes */}
                    <div className="text-center mb-16">
                        <h2 className="text-[42px] sm:text-5xl font-medium mb-4 tracking-tight text-white">
                            Customers prefer Torchlabs over other<br /> proxy brands
                        </h2>
                    </div>

                    {/* Outer Infinite Slider Container Track */}
                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_0%,black_10%,black_90%,transparent_100%)]">
                        <div className="flex gap-6 animate-marquee whitespace-normal">

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
                                                className={`w-11 h-11 flex items-center justify-center rounded-full text-stone-950 font-bold text-sm tracking-wider uppercase ${review.initials === "IS" ? "bg-[#c6f6d5]" : "bg-[#7f9cf5] text-white"
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
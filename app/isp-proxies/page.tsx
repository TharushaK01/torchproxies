"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, Shield, Zap, Globe, BarChart3, Activity, Sliders } from 'lucide-react';
import Flag from 'react-world-flags';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag, CreditCard } from 'lucide-react';
import UseCasesSection from '@/components/home/UseCasesSection';
import Image from 'next/image';



const Marquee: React.FC = () => (
    <div className="w-full overflow-hidden bg-[#FE4A01] py-3 mt-50 whitespace-nowrap select-none flex">
        {/* Wrapping container that holds both sets of elements */}
        <div className="flex animate-marquee">
            {/* Original Content */}
            <div className="flex items-center space-x-8 pr-8 shrink-0">
                <img src="/images/logo/vodafone.png" alt="99.9% uptime guaranteed" className="h-5 w-auto object-contain" />
                <img src="/images/logo/att.png" alt="Blazing fast proxy speeds" className="h-5 w-auto object-contain" />
                <img src="/images/logo/vocus.png" alt="Global geo targeting support" className="h-5 w-auto object-contain" />
                <img src="/images/logo/virgin.png" alt="Secure & anonymous connections" className="h-5 w-auto object-contain" />
                <img src="/images/logo/t.png" alt="Unlimited sessions & rotations" className="h-5 w-auto object-contain" />
                <img src="/images/logo/comcast.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/verizon.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/colt.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/sparkle.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/orange.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
            </div>

            {/* Duplicated Content for Seamless Loop */}
            <div className="flex items-center space-x-8 pr-8 shrink-0" aria-hidden="true">
                <img src="/images/logo/vodafone.png" alt="99.9% uptime guaranteed" className="h-5 w-auto object-contain" />
                <img src="/images/logo/att.png" alt="Blazing fast proxy speeds" className="h-5 w-auto object-contain" />
                <img src="/images/logo/vocus.png" alt="Global geo targeting support" className="h-5 w-auto object-contain" />
                <img src="/images/logo/virgin.png" alt="Secure & anonymous connections" className="h-5 w-auto object-contain" />
                <img src="/images/logo/t.png" alt="Unlimited sessions & rotations" className="h-5 w-auto object-contain" />
                <img src="/images/logo/comcast.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/verizon.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/colt.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/sparkle.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
                <img src="/images/logo/orange.png" alt="Built for scraping & automation" className="h-5 w-auto object-contain" />
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
        { id: '1GB', size: '5 ISP', price: '$ 2.4', discount: '0% OFF' },
        { id: '5GB', size: '25 ISP', price: '$ 2.3', discount: '4.17% OFF' },
        { id: '25GB', size: '50 ISP', price: '$ 2.3', discount: '4.17% OFF' },
        { id: '100GB', size: '100 ISP', price: '$ 2.3', discount: '4.17% OFF' },
        { id: '500GB', size: '200 ISP', price: '$ 2.3', discount: '4.17% OFF' },
        { id: '1000GB', size: '254 ISP', price: '$ 2.3', discount: '4.17% OFF' },
    ];
    const features = [
        {
            icon: <Database className="text-white w-4 h-4" />,
            title: "Financial Market Insights",
            desc: "Track stocks, forex, and crypto markets in real time with precision"
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4" />,
            title: "Enhanced Gaming ",
            desc: "Enjoy seamless, low-latency gaming with high-speed proxy support"
        },
        {
            icon: <Layers className="text-white w-4 h-4" />,
            title: "Advanced Online Privacy",
            desc: "Maintain session persistence across complex workflows and long tasks"
        },
        {
            icon: <ShieldCheck className="text-white w-4 h-4" />,
            title: "Global Content Access",
            desc: "Unblock and explore global content with fast, stable connections"
        },
        {
            icon: <Infinity className="text-white w-4 h-4" />,
            title: "Compliance Monitoring",
            desc: "Handle massive concurrent requests with zero rate limits or throttling"
        },
        {
            icon: <Tag className="text-white w-4 h-4" />,
            title: "Business Intelligence",
            desc: "Get real-time data to power smart, competitive business decisions"
        }
    ];
    const useCases = ["Social Media", "Web Scraping", "Gaming", "Online Market", "Sneaker"];
    const [activeTab, setActiveTab] = useState<'premium' | 'planX'>('premium');

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
    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
{/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
<header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-1 overflow-hidden bg-[#0a0a0a]">
    
    {/* ── 📌 Full-Bleed Middle-Bottom Background Layer ────────────────────── */}
 <div className="absolute inset-x-0 bottom-35 h-[600px] z-0 pointer-events-none select-none">
    <Image
        src="/images/hero_back.png"
        alt=""
        fill
        priority
        className="object-cover object-bottom opacity-100"
    />
</div>
    {/* Foreground content grid wrapper (Kept relative z-10) */}
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
            ISP Proxies Built for Speed <br />
            <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">& Reliability</span>
        </h1>

        <p className="max-w-3xl mx-auto text-stone-400 text-[18px] sm:text-xl mb-10 leading-relaxed">
            ISP proxies offer residential trust with datacenter speed perfect for fast, reliable, and stealthy long sessions.
        </p>

        <div className="mt-[-50px] py-10 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-[16px] font-regular">
            <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Pricing starts from $3.9/GB</div>
            <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Money back guarantee</div>
            <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Dedicated support</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
            <button className="w-full sm:w-60 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-[18px] text-white font-semi-bold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:scale-[1.01]">
                Start free with 1 GB
            </button>
            <button className="w-full sm:w-60 px-8 py-4 bg-stone-900 hover:bg-stone-800 border text-[18px] border-stone-800 text-stone-200 font-semi-bold rounded-xl transition-all duration-200">
                View Pricing
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

            {/* ── SECTION 3: Residential Proxies ────────────────────── */}
            <section className="py-24 -mt-[100px] bg-[#0a0a0a] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SUB-LABELS ───────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-regular tracking-wider block mb-3">
                            ISP Proxies
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-regular tracking-tight mb-6">
                            Buy ISP proxies
                        </h2>

                        {/* Top Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-stone-400 text-xs sm:text-sm font-medium">
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Secure checkout with SSL encryption</span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Pay As You Go Pricing </span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Reliable & stable connection</span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Support both card & crypto</span>
                        </div>
                    </div>

                    {/* ── MAIN CONTENT GRID ───────────────────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">

                        {/* LEFT PANEL: PRODUCT META & SPECIFICATIONS */}
                        <div className="lg:col-span-6 space-y-6 lg:pr-8">
                            <div className="flex items-center gap-4">
                                {/* Product Badge Logo Block */}
                                <div className="w-14 h-14 rounded-xl bg-[#FE4A01] flex items-center justify-center shadow-[0_10px_30px_rgba(254,74,1,.2)]">
                                    <div className="flex items-center gap-[3px] w-6">
                                        <span className="w-[4px] h-3 bg-white rounded-full block"></span>
                                        <span className="w-[4px] h-5 bg-white rounded-full block"></span>
                                        <span className="w-[4px] h-3 bg-white rounded-full block"></span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[36px] sm:text-3xl font-bold tracking-tight text-stone-200">
                                        ISP Proxies
                                    </h3>

                                </div>
                            </div>

                            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                                Static residential proxies with unlimited data. <span className="text-[#FE4A01]">Ideal for sneaker botting, scraping and automation.</span>
                            </p>

                            {/* Feature Checklist */}
                            <ul className="space-y-3.5 pt-4 text-stone-400 text-[16px] font-regular">
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Available in USA, UK, Canada, Germany, Netherlands, Italy, France, Australia, and Hong Kong</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> ISP grade Anonymity</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Quick Setup and Instant Activation</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Versatility Across Applications</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> 24/7 Dedicated Support</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Global Coverage with Regional Optimization</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Static, Dedicated ISP IPs</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Low Block & CAPTCHA Rates</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Ideal for Always-On Monitors & Long Sessions</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Works seamlessly for scraping, automation tools and stable account sessions across supported regions</li>


                            </ul>

                            {/* Main Primary CTA Button */}
                            <div className="pt-4">
                                <button className="w-full sm:w-auto px-10 py-4 bg-[#FE4A01] hover:bg-[#e04201] text-white font-regular rounded-xl transition-all shadow-[0_15px_35px_rgba(254,74,1,.25)] text-[16px]">
                                    Start free with 1 GB
                                </button>
                            </div>

                            {/* Gateway Merchant Footnote Icons */}
                            <div className="pt-4 flex items-center gap-3 text-xs text-stone-500 font-medium select-none">
                                <span>We Support</span>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/images/support_logo.png"
                                        alt="Supported Payment Methods"
                                        className="h-10 w-auto object-contain opacity-100 px-4 py-2 rounded grayscale brightness-120 hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                    />

                                </div>
                                <span>& more</span>
                            </div>
                        </div>

                        {/* RIGHT PANEL: GRID OF PRICING CARDS */}
                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tiers.map((tier) => {
                                const isSelected = selectedPlan === tier.id;
                                return (
                                    <div
                                        key={tier.id}
                                        onClick={() => setSelectedPlan(tier.id)}
                                        className={`border rounded-2xl p-6 relative cursor-pointer select-none transition-all duration-200 flex flex-col justify-between min-h-[140px] ${isSelected
                                            ? 'bg-stone-900/40 border-[#FE4A01] shadow-[0_0_25px_rgba(254,74,1,.1)]'
                                            : 'bg-[#0b0b0d]/50 border-stone-900 hover:border-stone-800/80'
                                            }`}
                                    >
                                        {/* Floating Green Percentage Label */}
                                        <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-bold px-2 py-0.5 rounded">
                                            {tier.discount}
                                        </div>

                                        {/* Volume Metric Display */}
                                        <div className="mt-2">
                                            <span className="text-[32px] font-medium tracking-tight text-stone-200">
                                                {tier.size}
                                            </span>
                                        </div>

                                        {/* Price Metric Formula */}
                                        <div className="mt-4 flex items-baseline gap-1">
                                            <span className="text-[#FE4A01] font-semi-bold text-[24px]">
                                                {tier.price}
                                            </span>

                                            <span className="text-[#FE4A01] text-[14px] font-regular self-start">
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
            <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden">

                {/* Background Vector */}
                <div
                    className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/world-map.png')",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="text-orange-500 font-medium text-sm mb-4 block tracking-widest">
                        Locations
                    </span>

                    <h2 className="text-4xl md:text-5xl font-regular mb-6">
                        Available in 195+ countries
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        We provide you access to a global network of ethical sourced proxy nodes from around the world.
                    </p>

                    {/* Locations Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {locations.map((loc, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-[#0a0a0a]/80 border border-gray-800 p-5 rounded-2xl hover:border-orange-500/50 transition-all group"
                            >
                                <div className="w-12 h-8 overflow-hidden rounded shadow-sm">
                                    <Flag code={loc.code} className="w-full h-full object-cover" />
                                </div>

                                <div className="text-left">
                                    <h3 className="font-bold text-sm group-hover:text-orange-500 transition-colors">
                                        {loc.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {loc.ips} IPs
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                        View all locations
                    </button>
                </div>
            </section>

            {/* ── SECTION 5: WHY CHOOSETORCHPROXIES ──────────────────────────────── */}
            <section className="py-24 bg-[#0a0a0a] text-white relative">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SECTION ───────────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-bold tracking-wider block mb-3">
                            Features
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                            Simple Ways to Get ISP Proxies
                        </h2>
                        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
                            Get enterprise grade ISP proxies the way that fits your workflow. Whether you prefer a simple dashboard or full API automation, TorchLabs makes it effortless.
                        </p>
                    </div>

                    {/* ── BENTO BOX GRID LAYOUT ────────────────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                        {/* CARD 1: LEFT COLUMN */}
                        <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[540px]">
                            <div className="mb-6">
                                <h3 className="text-[28px] font-regular tracking-tight text-stone-200 mb-3">
                                    No-Code Dashboard
                                </h3>
                                <p className="text-stone-400 text-[18px] leading-relaxed font-normal">
                                    Pick your country and quantity, confirm the monthly subscription and instantly activate your ISP pool. Manage renewals, upgrades and cancellations from one place.
                                </p>
                            </div>

                            {/* Visual Image Area */}
                            <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl h-auto relative overflow-hidden flex items-center justify-center p-4">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FE4A01_1px,transparent_1px)] [background-size:16px_16px]" />

                                <div className="w-full relative z-10 drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                                    <img
                                        src="/images/No_code_ashboard.png"
                                        alt="Standard Residential Proxies Generator Dashboard"
                                        className="w-full h-auto rounded-xl object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CARD 2: RIGHT COLUMN (Extra inner wrapper container div completely removed) */}
                        <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between items-start overflow-hidden min-h-[540px]">
                            <div className="mb-6">
                                <h3 className="text-2xl font-regular tracking-tight text-stone-200 mb-3">
                                    Full API Automation for Developers
                                </h3>
                                <p className="text-stone-400 text-sm leading-relaxed font-normal">
                                    Assign your ISP plan to a sub user, choose user/pass or IP whitelist auth and copy or export your proxy list to plug into bots, scrapers, and automation tools.
                                </p>
                            </div>

                            {/* Visual Image Area */}
                            <div className="w-full relative z-10 drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                                <img
                                    src="/images/full_api.png"
                                    alt="Detailed network usage statistics showing bandwidth used"
                                    className="w-full h-auto object-contain rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-[#0a0a0a] text-white">
                {/* ── HEADER ─────────────────────────────────────────────── */}
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-xs font-bold tracking-wider block mb-3">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-[40px] font-regular tracking-tight mb-4 text-white">
                        Enhanced Features for Heavy & Strict Workloads
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                        Upgraded performance, smarter rotation, and stronger stability built for high-volume scraping and stricter websites.
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
                                <h4 className="text-lg font-regular text-white tracking-tight">
                                    {feat.title}
                                </h4>
                                <p className="text-stone-400 text-[13px] sm:text-sm leading-relaxed font-normal">
                                    {feat.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
            {/* Upgrade CTA Banner */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div
                        className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)',

                        }}
                    >
                        {/* Optional subtle overlay for more depth */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-3xl" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight mb-6 text-white">
                                Get started with Plan X residential proxies<br className="hidden md:block" />
                            </h2>

                            <p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Unlock premium speed, stability and higher success rates for demanding or strict websites.
                            </p>

                            <button className="px-10 py-4 bg-white text-black font-medium rounded-2xl text-lg hover:bg-stone-100 transition-all active:scale-95">
                                Get started now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: USE CASES ─────────────────────────────────────── */}
            <main className="bg-[#0a0a0a] min-h-screen text-white">
                {/* Other sections can go here */}

                {/* ── YOUR NEW USE CASES SECTION ── */}
                <UseCasesSection />

                {/* Other sections can go here */}
            </main>

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
            <section className="py-24 bg-stone-950/20 border-t border-stone-900">
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
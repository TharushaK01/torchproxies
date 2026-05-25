"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, Shield, Zap, Globe, BarChart3, Activity, Sliders } from 'lucide-react';
import { p } from 'framer-motion/m';
import Flag from 'react-world-flags';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag } from 'lucide-react';
import UseCasesSection from '@/components/home/UseCasesSection';



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
      icon: <Database className="text-white w-4 h-4" />,
      title: "Reliable Data Collection",
      desc: "Gather essential data safely with minimal detection risk"
    },
    {
      icon: <RefreshCw className="text-white w-4 h-4" />,
      title: "Auto Rotate IPs",
      desc: "Rotate IPs every 1, 10 or 30 mins to avoid bans"
    },
    {
      icon: <Layers className="text-white w-4 h-4" />,
      title: "Sticky Sessions",
      desc: "Keep sessions active for consistent, stable scraping"
    },
    {
      icon: <ShieldCheck className="text-white w-4 h-4" />,
      title: "SOCKS5 Supported",
      desc: "Advanced protocol support for speed and flexibility"
    },
    {
      icon: <Infinity className="text-white w-4 h-4" />,
      title: "Unlimited Sessions",
      desc: "Run multiple tasks at once with no session limits"
    },
    {
      icon: <Tag className="text-white w-4 h-4" />,
      title: "Cost Effective",
      desc: "Affordable plans designed for smaller scale needs"
    }
  ];
  const useCases = ["Social Media", "Web Scraping", "Gaming", "Online Market", "Sneaker"];
  const [activeTab, setActiveTab] = useState<'premium' | 'planX'>('premium');

const reviews = [
    { name: "Alex K.", role: "Lead Scraping Engineer", text: "Absolute game changer for parsing target inventory updates. The success parameters are consistently stable." },
    { name: "Sarah M.", role: "DevOps Architect", text: "IP targeting is granular down to city targets. The latency levels are significantly lower than competitive alternatives." },
    { name: "David L.", role: "Automated Data Analyst", text: "Top tier network infrastructure. The standard volume tier setups maintain premium speeds without bottleneck dropouts." },
];
    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.2)_0%,transparent_60%)] pointer-events-none" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-6xl mx-auto text-center z-10">
                    <div className="flex items-center justify-center gap-3 mb-6 font-normal text-white">
                        {/* The "Excellent" text */}
                        <span className="text-sm">Excellent</span>

                        {/* Five Star Rating Block */}
                        <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-5 h-5 flex items-center justify-center rounded-sm bg-[#00b67a]"
                                    style={{
                                        // Creates the partial fill effect on the last star (approx 90%)
                                        clipPath: i === 4 ? 'inset(0 10% 0 0)' : 'none',
                                    }}
                                >
                                    {/* Star Icon (Unicode works well for standalone mocks) */}
                                    <span className="text-white text-xs">★</span>
                                </div>
                            ))}
                            {/* Background for the empty part of the last star */}
                            {[...Array(5)].map((_, i) => (
                                i === 4 && (
                                    <div key="last-star-bg" className="absolute w-5 h-5 flex items-center justify-center rounded-sm bg-stone-700 -z-10 ml-[88px]" />
                                )
                            ))}
                        </div>

                        {/* Green Star Logo & "Trustpilot" text */}
                        <div className="flex items-center gap-1.5 ml-1">
                            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#00b67a]">
                                <span className="text-white text-[10px]">★</span>
                            </div>
                            <span className="text-sm">Trustpilot</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent">
                        Best Standard Residential Proxies <br />
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Access 30M+ Global IPs</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-stone-400 text-base sm:text-xl mb-10 leading-relaxed">
                        Reliable and steady residential proxies perfect for everyday tasks.A balanced choice to get the job done without breaking the bank.
                    </p>

                    <div className="mt-[-50px] py-10 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-400 text-sm font-medium">
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Rotating & Static IPs</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Unlimited Concurrency</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> 195+ Countries Network</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="w-full sm:w-60 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:scale-[1.01]">
                            Start free with 1 GB
                        </button>
                        <button className="w-full sm:w-60 px-8 py-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 font-bold rounded-xl transition-all duration-200">
                            View Pricing
                        </button>
                    </div>

                    <div className="relative z-10 -mt-24 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Perfect for Everyday Scraping & Automation
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                TorchProxies’ Standard Residential proxies provide a simple, reliable solution for routine web tasks. With a large global IP pool and stable performance, this plan is ideal for users who need consistent access for day-to-day scraping, monitoring, and basic automation without the complexity or cost of higher-tier options.
                            </p>
                            <ul>
                                <li>&#9679; Large, diverse residential IP pool</li>
                                <li>&#9679; Reliable performance for common websites</li>
                                <li>&#9679; Easy rotating & sticky session support</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: Residential Proxies ────────────────────── */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SUB-LABELS ───────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-bold uppercase tracking-wider block mb-3">
                            Residential proxies
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                            Buy standard residential proxies
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
                                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-200">
                                        Standard
                                    </h3>
                                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-500 leading-tight">
                                        Residential Proxies
                                    </h3>
                                </div>
                            </div>

                            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                                Reliable and affordable with rotating residential proxies and optional static sessions <span className="text-[#FE4A01]">perfect for everyday online tasks.</span>
                            </p>

                            {/* Custom Micro Pill Badge */}
                            <div className="inline-block bg-[#FE4A01]/10 border border-[#FE4A01]/20 px-3 py-1 rounded-md">
                                <span className="text-[#FE4A01] text-xs font-bold tracking-wide">From $4/GB per month</span>
                            </div>

                            {/* Feature Checklist */}
                            <ul className="space-y-3.5 pt-4 text-stone-300 text-sm font-medium">
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
                            <div className="pt-4">
                                <button className="w-full sm:w-auto px-10 py-4 bg-[#FE4A01] hover:bg-[#e04201] text-white font-bold rounded-xl transition-all shadow-[0_15px_35px_rgba(254,74,1,.25)] text-sm">
                                    Start free with 1 GB
                                </button>
                            </div>

                            {/* Gateway Merchant Footnote Icons */}
                            <div className="pt-4 flex items-center gap-3 text-xs text-stone-500 font-medium select-none">
                                <span>We Support</span>
                                <span className="font-bold tracking-wider text-stone-400 text-[10px] bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800">VISA</span>
                                <span className="font-bold tracking-wider text-stone-400 text-[10px] bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800">MC</span>
                                <span className="font-bold tracking-wider text-stone-400 text-[10px] bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800">AMEX</span>
                                <span className="font-bold tracking-wider text-stone-400 text-[10px] bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800">STRIPE</span>
                                <span className="font-bold tracking-wider text-stone-400 text-[10px] bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800">BTC</span>
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
                                        <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                                            {tier.discount}
                                        </div>

                                        {/* Volume Metric Display */}
                                        <div className="mt-2">
                                            <span className="text-2xl font-bold tracking-tight text-stone-200">
                                                {tier.size}
                                            </span>
                                        </div>

                                        {/* Price Metric Formula */}
                                        <div className="mt-4 flex items-baseline gap-1">
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
            <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden">
                {/* Background Map Overlay */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url('/map-dots.png')` }} // Ensure you have a dotted map PNG in /public
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="text-orange-500 font-medium text-sm mb-4 block uppercase tracking-widest">
                        Locations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
                                <div className="w-12 h-8 flex items-center justify-center rounded shadow-sm bg-[#111]">
                                    <Flag className="w-5 h-5 text-orange-500" />
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

                    {/* Call to Action */}
                    <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                        View all locations
                    </button>
                </div>
            </section>

            {/* ── SECTION 5: WHY CHOOSETORCHPROXIES ──────────────────────────────── */}
            <section className="py-24 bg-black text-white relative">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SECTION ───────────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-bold uppercase tracking-wider block mb-3">
                            Features
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                            Why choose Torch Proxies?
                        </h2>
                        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
                            Easily manage, monitor and optimize your proxy operations with a user centric dashboard.
                        </p>
                    </div>

                    {/* ── BENTO BOX GRID LAYOUT ────────────────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                        {/* CARD 1: TARGET ANY COUNTRY (Left Column - Spans 5 cols) */}
                        <div className="lg:col-span-5 bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[540px]">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold tracking-tight text-stone-200 mb-3">
                                    Target Any Country, State or City
                                </h3>
                                <p className="text-stone-400 text-sm leading-relaxed font-normal">
                                    Reach your audience anywhere with pinpoint geographic precision.
                                </p>
                            </div>

                            {/* Visual Image / Mockup Area */}
                            <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl h-80 relative overflow-hidden flex items-center justify-center p-4">
                                {/* Simulated Dotted Map Background Graphic */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FE4A01_1px,transparent_1px)] [background-size:16px_16px]" />

                                {/* White Dashboard Card Component Mockup */}
                                <div className="bg-white text-black rounded-xl p-4 w-full shadow-2xl relative z-10 border border-stone-100 text-[10px] font-medium space-y-3">
                                    <div className="flex items-center gap-1.5 border-b border-stone-100 pb-2">
                                        <span className="w-2 h-2 rounded-full bg-[#FE4A01]" />
                                        <span className="font-bold text-stone-700 text-[9px]">Standard Residential Proxies</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-stone-400 text-[8px]">
                                        <div>Select Quantity <div className="border border-stone-200 rounded p-1 mt-1 text-stone-700">50</div></div>
                                        <div>Select Sub User <div className="border border-stone-200 rounded p-1 mt-1 text-stone-700">user123</div></div>
                                        <div>Auth Format <div className="border border-stone-200 rounded p-1 mt-1 text-stone-700">HTTP</div></div>
                                    </div>
                                    <div>
                                        <span className="text-stone-400 text-[8px]">Selected Country</span>
                                        <div className="text-sm font-bold text-stone-900 mt-0.5">United States of America</div>
                                    </div>
                                    <button className="w-full py-2 bg-[#FE4A01] text-white font-bold rounded-lg text-center text-[10px]">
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE CONTAINER GROUP (Spans 7 cols) */}
                        <div className="lg:col-span-7 flex flex-col gap-6">

                            {/* CARD 2: TRACK MANAGE & CONTROL (Top Right Row) */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center overflow-hidden min-h-[258px]">
                                <div className="max-w-xs shrink-0">
                                    <h3 className="text-2xl font-bold tracking-tight text-stone-200 mb-3">
                                        Track Manage & Stay in Control
                                    </h3>
                                    <p className="text-stone-400 text-sm leading-relaxed font-normal">
                                        Monitor usage, switch locations, and stay fully in command of your network.
                                    </p>
                                </div>

                                {/* Visual Image / Mockup Area */}
                                <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl p-4 h-48 relative flex items-center justify-center overflow-hidden">
                                    {/* Simulated Bandwidth Data Row Assets */}
                                    <div className="bg-white text-black p-3 rounded-xl shadow-xl w-32 shrink-0 absolute left-4 border border-stone-100 flex flex-col">
                                        <span className="text-[8px] text-stone-400 font-bold uppercase">Remaining Data</span>
                                        <span className="text-lg font-black text-[#FE4A01] mt-0.5">30.5GB</span>
                                    </div>
                                    <div className="bg-white text-black p-3 rounded-xl shadow-xl w-44 shrink-0 absolute -right-4 border border-stone-100 space-y-1.5">
                                        <div className="flex justify-between text-[8px] font-bold text-stone-500">
                                            <span>50% used</span>
                                            <span className="text-emerald-500">Operational</span>
                                        </div>
                                        {/* Dynamic Color Pillar Indicator Bar Chart */}
                                        <div className="flex gap-[2px] items-end h-8">
                                            {[...Array(18)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`w-[4px] rounded-full block ${i < 13 ? 'bg-[#FE4A01]' : 'bg-stone-200'}`}
                                                    style={{ height: `${Math.max(30, Math.sin(i) * 100)}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 3: DEVELOPER FRIENDLY SETUP (Bottom Right Row) */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center overflow-hidden min-h-[258px]">
                                <div className="max-w-xs shrink-0">
                                    <h3 className="text-2xl font-bold tracking-tight text-stone-200 mb-3">
                                        Fast, Developer Friendly Setup
                                    </h3>
                                    <p className="text-stone-400 text-sm leading-relaxed font-normal">
                                        Get started in minutes with simple integration and powerful API tools.
                                    </p>
                                </div>

                                {/* Visual Image / Mockup Area */}
                                <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl p-4 h-48 relative flex flex-col gap-2 justify-center overflow-hidden">
                                    {/* Simulated Endpoint Swagger API Method Blocks */}
                                    <div className="bg-white border border-stone-100 px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-2 max-w-[240px] translate-x-2">
                                        <span className="bg-emerald-500 text-white font-black text-[7px] px-1.5 py-0.5 rounded">POST</span>
                                        <span className="text-[7px] font-mono text-stone-500 font-bold">/proxy_api/v1/smart/users/create</span>
                                    </div>
                                    <div className="bg-white border border-stone-100 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 max-w-[160px] self-center relative z-10 font-bold text-stone-800 text-[11px]">
                                        <span className="text-emerald-500">⚙️</span> Swagger Hub
                                    </div>
                                    <div className="bg-white border border-stone-100 px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-2 max-w-[240px] -translate-x-4">
                                        <span className="bg-blue-500 text-white font-black text-[7px] px-1.5 py-0.5 rounded">GET</span>
                                        <span className="text-[7px] font-mono text-stone-500 font-bold">/proxy_api/v1/smart/users/update</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
<section className="py-24 max-w-7xl mx-auto px-6 bg-black text-white">
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="text-center mb-20">
        <span className="text-[#FE4A01] text-xs font-bold uppercase tracking-wider block mb-3">
          Features
        </span>
        <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight mb-4 text-white">
          Core Features for Everyday Use
        </h2>
        <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Reliable, easy-to-use features designed for general scraping, basic automation and small-scale tasks.
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
              <h4 className="text-lg font-bold text-white tracking-tight">
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
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <div className="relative rounded-3xl bg-gradient-to-b from-orange-600 to-amber-700 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.4)_0%,transparent_70%)]" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">Start your efficient proxy and scraping journey</h2>
                        <p className="text-orange-100 text-sm sm:text-base mb-8 opacity-90">
                            Deploy your automated data processing stacks with elite network infrastructure node speeds starting immediately today.
                        </p>
                        <button className="px-8 py-4 bg-white hover:bg-stone-50 text-orange-700 font-extrabold text-base rounded-xl transition-all shadow-xl">
                            Get 1GB Allocation Free
                        </button>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: USE CASES ─────────────────────────────────────── */}
<main className="bg-black min-h-screen text-white">
      {/* Other sections can go here */}
      
      {/* ── YOUR NEW USE CASES SECTION ── */}
      <UseCasesSection />
      
      {/* Other sections can go here */}
    </main>

            {/* ── SECTION 9: UPSELL CARDS ──────────────────────────────────── */}
<section className="py-24 bg-black text-white border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ── TOP HEADLINE SECTION ────────────────────────────────── */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-2">
            Looking for more power?
          </h2>
          <p className="text-stone-400 text-sm font-normal">
            Fast and reliable rotating residential proxies.
          </p>
        </div>

        {/* ── NAV TAB SYSTEM ──────────────────────────────────────── */}
        <div className="flex justify-center border-b border-stone-900 max-w-2xl mx-auto mb-16">
          <button
            onClick={() => setActiveTab('premium')}
            className={`pb-4 px-8 text-sm font-medium transition-all relative ${
              activeTab === 'premium' ? 'text-[#FE4A01]' : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            Premium Residential Proxies
            {activeTab === 'premium' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE4A01]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('planX')}
            className={`pb-4 px-8 text-sm font-medium transition-all relative ${
              activeTab === 'planX' ? 'text-[#FE4A01]' : 'text-stone-500 hover:text-stone-300'
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
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  Premium Residential Proxies
                </h3>
                <span className="bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-[10px] font-bold px-2.5 py-1 rounded-md">
                  From $4.5/GB
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                Enhanced speed and reliability with rotating residential proxies and static sessions ideal for demanding users and businesses.
              </p>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Premium residential IPs</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Rotating and sticky sessions</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Target country, state, and city-level</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Suitable for general web scraping</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Unlimited concurrent sessions</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> 90M+ ethically sourced unique IPs in 195 countries</li>
              </ul>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FE4A01] hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm">
                Upgrade to premium
              </button>
            </div>

            {/* Right Graphics Badge Mockup Column */}
            <div className="lg:col-span-7 bg-[#0b0b0d] border border-stone-900 rounded-3xl p-12 min-h-[380px] flex items-center justify-center relative overflow-hidden">
              <div className="bg-[#FE4A01] rounded-2xl w-80 h-36 relative flex flex-col justify-center items-center text-center p-4 shadow-2xl">
                <div className="absolute -top-3 left-6 bg-white border border-stone-100 px-2 py-1 rounded-md text-[8px] font-bold text-stone-700 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Premium Residential Proxies
                </div>
                <div className="absolute -top-3 right-6 bg-[#00E699] text-black px-2 py-1 rounded-md text-[8px] font-bold flex items-center gap-1">
                  ✓ Premium Residential Proxies
                </div>
                <div className="absolute -left-12 bg-white border border-stone-100 p-2 rounded-xl text-center shadow-md">
                  <div className="text-sm font-black text-stone-900">90M+</div>
                  <div className="text-[7px] text-stone-400 font-medium">verified residential IPs</div>
                </div>
                <div className="absolute -right-8 bg-white border border-stone-100 p-2.5 rounded-xl text-center shadow-md space-y-1 max-w-[85px]">
                  <Globe className="text-[#FE4A01] w-3 h-3 mx-auto" />
                  <div className="text-[7px] text-stone-800 font-bold leading-tight">Target country, state and city level</div>
                </div>
                <div className="absolute -bottom-3 left-12 bg-white border border-stone-100 px-2 py-1 rounded-md text-[8px] font-bold text-stone-700 flex items-center gap-1 shadow-md">
                  <RefreshCw className="text-orange-500 w-2.5 h-2.5" /> Rotation & sticky sessions
                </div>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mb-1 text-orange-600 text-[10px] font-bold shadow">✓</div>
                <h4 className="text-white font-black text-base tracking-wide uppercase">Enhanced features for heavy & strict workloads</h4>
              </div>
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column (Plan X) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  Plan X Residential Proxies
                </h3>
                <span className="bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-[10px] font-bold px-2.5 py-1 rounded-md">
                  From $5.0/GB
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                Authentic residential network proxy connections combined with dedicated exclusive high performance ISP sub pools.
              </p>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Authentic residential proxies with dedicated ISP pools</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Rotating and sticky node sessions</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Target country, state, and city-level</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Suitable for top tier general web scraping</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Unlimited concurrent sessions</li>
                <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> 120M+ premium unique data source node access</li>
              </ul>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FE4A01] hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm">
                Upgrade to Plan X
              </button>
            </div>

            {/* Right Graphics Badge Mockup Column (Plan X Variation) */}
            <div className="lg:col-span-7 bg-[#0b0b0d] border border-stone-900 rounded-3xl p-12 min-h-[380px] flex items-center justify-center relative overflow-hidden">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl w-80 h-36 relative flex flex-col justify-center items-center text-center p-4 shadow-2xl">
                <div className="absolute -top-3 left-6 bg-white border border-stone-100 px-2 py-1 rounded-md text-[8px] font-bold text-stone-700 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-500" /> Plan X Residential
                </div>
                <div className="absolute -left-12 bg-white border border-stone-100 p-2 rounded-xl text-center shadow-md">
                  <div className="text-sm font-black text-stone-900">120M+</div>
                  <div className="text-[7px] text-stone-400 font-medium">ISP unique pools</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mb-1 text-white text-[10px] font-bold shadow">✓</div>
                <h4 className="text-white font-bold text-sm tracking-wide">AUTHENTIC EXCLUSIVE TOP TIER PERFORMANCE</h4>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
<section className="py-24 bg-stone-950/20 border-t border-stone-900">
    <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">Customer Reviews</h2>
            <p className="text-stone-400">See how developer engineering nodes rate our overall connectivity network performance.</p>
        </div>

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
            <section className="py-24 max-w-4xl mx-auto px-6 border-t border-stone-900 mb-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-black mb-4">Frequently Asked Questions</h2>
                    <p className="text-stone-400 text-sm">Clear, direct explanations regarding operational deployment rules.</p>
                </div>

                <div className="space-y-4">
                    {[
                        { q: "What exactly are standard residential proxies?", a: "Standard residential proxies represent real, physical IP configurations leased out directly from consumer internet service providers globally. They possess elite reputation metrics to ensure your automated tracking routines remain unblocked." },
                        { q: "Does the bandwidth volume pool expire at the end of the month?", a: "No, bandwidth balances acquired on individual packages remain completely active up to your utilization limits. Top up anytime." },
                        { q: "Can I filter targeting pools down to distinct cities?", a: "Yes, our operational configuration routes endpoints down across country, state, or city-level parameters instantly inside your panel workspace." },
                        { q: "What communication format protocols are supported natively?", a: "Our nodes support transparent dual HTTP and secure SOCKS5 network request paths automatically without requiring special setup conversions." },
                    ].map((faq, index) => {
                        const isOpen = activeFaq === index;
                        return (
                            <div key={index} className="bg-stone-900/30 border border-stone-800 rounded-xl overflow-hidden transition-all">
                                <button
                                    onClick={() => setActiveFaq(isOpen ? null : index)}
                                    className="w-full text-left p-5 flex items-center justify-between font-bold text-sm text-stone-200 hover:text-white"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-5 text-xs leading-relaxed text-stone-400 border-t border-stone-800/40 pt-3">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
}
"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, Shield, Zap, Globe, BarChart3, Activity, Sliders } from 'lucide-react';
import Flag from 'react-world-flags';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag, CreditCard } from 'lucide-react';
import UseCasesSection from '@/components/home/UseCasesSection';
import Image from 'next/image';
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
            icon: <Database className="text-white w-4 h-4" />,
            title: "High Data Collection",
            desc: "Capture high-volume data with precision, speed & zero compromise"
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4" />,
            title: "Smart IP Rotation",
            desc: "Smart rotation with advanced logic to avoid toughest blocks"
        },
        {
            icon: <Layers className="text-white w-4 h-4" />,
            title: "Advanced Sticky Sessions",
            desc: "Maintain session persistence across complex workflows and long tasks"
        },
        {
            icon: <ShieldCheck className="text-white w-4 h-4" />,
            title: "SOCKS5 & HTTPS Support",
            desc: "Supports SOCKS5, HTTPS, and advanced tunneling for total flexibility"
        },
        {
            icon: <Infinity className="text-white w-4 h-4" />,
            title: "Unlimited Sessions",
            desc: "Handle massive concurrent requests with zero rate limits or throttling"
        },
        {
            icon: <Tag className="text-white w-4 h-4" />,
            title: "Cost Effective",
            desc: "Premium reliability and customization for high-stakes operations"
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
                        Redefining Performance <br />
                        <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">with X Residential</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-[18px] sm:text-xl text-stone-400 mb-10 leading-relaxed">
                        Built for speed and scale  X Residential Proxies offer top-tier performance, unmatched reliability and limitless potential.
                    </p>

                    <div className="mt-[-50px] py-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-sm font-medium">
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Pricing starts from $3.9/GB</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Residential with dedicated ISP pools</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> 24 hour refund policy</div>
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
    }} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]">

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
                                        src="/images/why_plan_x.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight">
                                Why Plan X Residential Proxies Stand Out
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Plan X blends Residential IPs for authenticity with ISP IPs for speed and stability, creating a hybrid network built for high-performance scraping, automation, and content access.
                            </p>
                            <ul className="text-gray-400 text-lg leading-relaxed">
                                <li>&#9679; Fast, stable and highly reliable for demanding tasks.</li>
                                <li>&#9679; A hybrid mix of Residential + ISP IPs for maximum versatility.</li>
                                <li>&#9679; Engineered to support large-scale, resource-intensive workflows with ease.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: Residential Proxies ────────────────────── */}
            <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SUB-LABELS ───────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-regular tracking-wider block mb-3">
                            X Residential Proxies
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-regular tracking-tight mb-6">
                            Buy X residential proxies
                        </h2>

                        {/* Top Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-stone-400 text-xs sm:text-sm font-medium">
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Secure checkout with SSL encryption</span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Pay As You Go Pricing </span>
                            <span className="flex items-center gap-1.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Premium IPs</span>
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
                                    <h3 className="text-2xl sm:text-3xl font-semi-bold tracking-tight text-stone-200">
                                        X Residential
                                    </h3>
                                    <h3 className="text-2xl sm:text-3xl font-semi-bold tracking-tight text-stone-200">
                                        Proxies
                                    </h3>
                                </div>
                            </div>

                            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                                Unmatched speed, stability and flexibility with rotating residential proxies and static sessions <span className="text-[#FE4A01]">for top tier performance.</span>
                            </p>

                            {/* Custom Micro Pill Badge */}
                            <div className="inline-block bg-[#FE4A01]/10 border border-[#FE4A01]/20 px-3 py-1 rounded-md">
                                <span className="text-[#FE4A01] text-xs font-bold tracking-wide">From  $5/GB  per month</span>
                            </div>

                            {/* Feature Checklist */}
                            <ul className="space-y-3.5 pt-4 text-stone-400 text-sm font-medium">
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Data never expires</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Can cancel anytime</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Authentic residential proxies with dedicated ISP pools</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Rotating and sticky sessions</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Target country, state, and city-level</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Suitable for general web scraping</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Unlimited concurrent sessions</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> 120M+ ethically sourced unique IPs in 195 countries</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Easy API access for integration</li>
                                <li className="flex items-center gap-2.5"><Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Sneaker drops, ticketing queues, strict retail sites, social media anti-bot environments, flash sales, bot-driven automation, and mission-critical high-demand ops.</li>


                            </ul>

                            {/* Main Primary CTA Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-left gap-4 mb-2">

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
                        <div id="pricing"  className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                                            <span className="text-[#FE4A01] text-xs font-medium self-start">
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

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

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
                            Built for you dashboard
                        </h2>
                        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
                            Easily manage, monitor and optimize your proxy operations with a user centric dashboard.
                        </p>
                    </div>

                    {/* ── BENTO BOX GRID LAYOUT ────────────────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                        {/* CARD 1: TARGET ANY COUNTRY (Left Column - Spans 5 cols) */}
                        <div className="lg:col-span-6 bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[540px]">
                            <div className="mb-6">
                                <h3 className="text-[28px] font-regular tracking-tight text-stone-200 mb-3">
                                    Target Any Country, State or City
                                </h3>
                                <p className="text-stone-400 text-[18px] leading-relaxed font-normal">
                                    Reach your audience anywhere with pinpoint geographic precision.
                                </p>
                            </div>

                            {/* Visual Image Area */}
                            <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl h-auto relative overflow-hidden flex items-center justify-center p-4">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FE4A01_1px,transparent_1px)] [background-size:16px_16px]" />

                                <div className="w-full relative z-10 drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                                    <img
                                        src="/images/proxy-generator.png"
                                        alt="Standard Residential Proxies Generator Dashboard"
                                        className="w-full h-auto rounded-xl object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE CONTAINER GROUP (Spans 7 cols) */}
                        <div className="lg:col-span-6 flex flex-col gap-6">

                            {/* CARD 2: TRACK MANAGE & CONTROL (Top Right Row) */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col gap-6 justify-between items-start overflow-hidden min-h-[258px]">
                                <div>
                                    <h3 className="text-2xl font-regular tracking-tight text-stone-200 mb-3">
                                        Track Manage & Stay in Control
                                    </h3>
                                    <p className="text-stone-400 text-sm leading-relaxed font-normal">
                                        Monitor usage, switch locations, and stay fully in command of your network.
                                    </p>
                                </div>

                                {/* Visual Image Area */}
                                <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl p-4 h-48 relative flex items-center justify-center overflow-hidden drop-shadow-2xl">
                                    <img
                                        src="/images/usage-status.png"
                                        alt="Detailed network usage statistics showing bandwidth used"
                                        className="w-full h-auto object-contain rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* CARD 3: DEVELOPER FRIENDLY SETUP (Bottom Right Row) */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col gap-6 justify-between items-start overflow-hidden min-h-[258px]">
                                <div>
                                    <h3 className="text-2xl font-regular tracking-tight text-stone-200 mb-3">
                                        Fast, Developer Friendly Setup
                                    </h3>
                                    <p className="text-stone-400 text-sm leading-relaxed font-normal">
                                        Get started in minutes with simple integration and powerful API tools.
                                    </p>
                                </div>

                                {/* Visual Image Area */}
                                <div className="w-full bg-[#111115] border border-stone-900 rounded-2xl p-4 h-48 relative flex items-center justify-center overflow-hidden drop-shadow-2xl">
                                    <img
                                        src="/images/api-setup.png"
                                        alt="Developer friendly Swagger API documentation panel"
                                        className="w-full h-auto object-contain rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
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
            </section>

            {/* ── SECTION 8: USE CASES ─────────────────────────────────────── */}
            <main className="bg-[#0a0a0a] min-h-screen text-white">
                {/* Other sections can go here */}

                {/* ── YOUR NEW USE CASES SECTION ── */}
                <UseCasesSection />

                {/* Other sections can go here */}
            </main>

            {/* ── SECTION 9: UPSELL CARDS ──────────────────────────────────── */}
            <section className="py-24 bg-[#0a0a0a] text-white border-t border-stone-900">
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
                            className={`pb-4 px-8 text-sm font-medium transition-all relative ${activeTab === 'premium' ? 'text-[#FE4A01]' : 'text-stone-500 hover:text-stone-300'
                                }`}
                        >
                            Standard Residential Proxies
                            {activeTab === 'premium' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE4A01]" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('planX')}
                            className={`pb-4 px-8 text-sm font-medium transition-all relative ${activeTab === 'planX' ? 'text-[#FE4A01]' : 'text-stone-500 hover:text-stone-300'
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
                                    <h3 className="text-3xl font-medium tracking-tight text-white">
                                        Standard Residential Proxies
                                    </h3>
                                    <span className="bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-[10px] font-medium px-2.5 py-1 rounded-md">
                                        From $4.5/GB
                                    </span>
                                </div>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    Reliable and affordable with rotating residential proxies and optional static sessions perfect for everyday online tasks.
                                </p>
                                <ul className="space-y-3 text-stone-300 text-sm">
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Premium residential IPs</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Rotating and sticky sessions</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Target country, state, and city-level</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Suitable for general web scraping</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> Unlimited concurrent sessions</li>
                                    <li className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4" /> 90M+ ethically sourced unique IPs in 195 countries</li>
                                </ul>
         <div className="flex flex-col sm:flex-row items-center justify-left gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

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
                            </div>

                            {/* Right Graphics Badge Mockup Column */}
                            <div className="lg:col-span-7 bg-[#0b0b0d] border border-stone-900 rounded-3xl p-12 min-h-[380px] flex items-center justify-center relative overflow-hidden">
                                <div className="bg-[#FE4A01] rounded-2xl w-80 h-36 relative flex flex-col justify-center items-center text-center p-4 shadow-2xl">
                                    <div className="absolute -top-3 left-6 bg-white border border-stone-100 px-2 py-1 rounded-md text-[8px] font-medium text-stone-700 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Premium Residential Proxies
                                    </div>
                                    <div className="absolute -top-3 right-6 bg-[#00E699] text-black px-2 py-1 rounded-md text-[8px] font-medium flex items-center gap-1">
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
                                    <h3 className="text-3xl font-medium tracking-tight text-white">
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
                   <div className="flex flex-col sm:flex-row items-center justify-left gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

                            {/* Fast 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    Upgrade to Plan X
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                                    Upgrade to Plan X
                                </span>

                            </div>
                        </button>
                        </div>
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
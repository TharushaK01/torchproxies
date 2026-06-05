"use client";
import React, { useState, useEffect } from 'react';
import {ChevronDown, Database, RefreshCw, Layers } from 'lucide-react';
import Image from 'next/image';
import FeaturesTabSection from '@/app/sneaker-proxies/FeaturesTabSection';
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

interface Plan {
    name: string;
    price: {
        monthly: string;
        yearly: string;
    };
}

const plans: Plan[] = [
    { name: 'FREE', price: { monthly: '$0', yearly: '$0' } },
    { name: 'BASIC', price: { monthly: '$100', yearly: '$80' } },
    { name: 'PREMIUM', price: { monthly: '$160', yearly: '$130' } },
];
interface FeatureRow {
    title: string;
    free: string | boolean;
    basic: string | boolean;
    premium: string | boolean;
}

// Full array representation matching the exact repeat sequence in the screenshot
const featureMatrix: FeatureRow[] = [
    // Block 1
    { title: 'Pay-as-You-Go Billing for Proxies', free: 'Add credits first', basic: 'Pay end of month', premium: 'Pay end of month' },
    { title: 'Seamless Integration with Porter Proxies Data Center & ISP API', free: false, basic: true, premium: true },
    { title: 'Custom Proxy Pool Configurations', free: false, basic: false, premium: true },
    { title: 'Untraceable Proxy Masking', free: 'Add on', basic: '10 Add on - 25% discount', premium: 'Add on - free setup' },
    { title: 'Remove Torch Labs Branding', free: false, basic: false, premium: 'Add on - 40$/M' },
    { title: 'Pre-configured Residential Proxy APIs with Free Whitelabeling', free: true, basic: true, premium: true },
    { title: 'Advanced Chargeback Protection Mechanism', free: false, basic: true, premium: true },
    { title: 'Fully White Label the Dashboard with Your Domain', free: false, basic: 'Free one time', premium: 'Unlimited' },
    { title: 'Theme Customization Options for Personalized Branding', free: 'Free one time', basic: 'Free one time', premium: 'Unlimited' },
    { title: 'Additional Team Member Seats', free: false, basic: false, premium: true },
    { title: 'Restrict Dashboard Access Using Discord Server Membership or Role', free: false, basic: true, premium: true },

    // Block 2
    { title: 'Pay-as-You-Go Billing for Proxies', free: 'Add credits first', basic: 'Pay end of month', premium: 'Pay end of month' },
    { title: 'Seamless Integration with Porter Proxies Data Center & ISP API', free: false, basic: true, premium: true },
    { title: 'Custom Proxy Pool Configurations', free: false, basic: false, premium: true },
    { title: 'Untraceable Proxy Masking', free: 'Add on', basic: '10 Add on - 25% discount', premium: 'Add on - free setup' },
    { title: 'Remove Torch Labs Branding', free: false, basic: false, premium: 'Add on - 40$/M' },
    { title: 'Pre-configured Residential Proxy APIs with Free Whitelabeling', free: true, basic: true, premium: true },
    { title: 'Advanced Chargeback Protection Mechanism', free: false, basic: true, premium: true },
    { title: 'Fully White Label the Dashboard with Your Domain', free: false, basic: 'Free one time', premium: 'Unlimited' },
    { title: 'Theme Customization Options for Personalized Branding', free: 'Free one time', basic: 'Free one time', premium: 'Unlimited' },
    { title: 'Additional Team Member Seats', free: false, basic: false, premium: true },
    { title: 'Restrict Dashboard Access Using Discord Server Membership or Role', free: false, basic: true, premium: true },

    // Block 3
    { title: 'Pay-as-You-Go Billing for Proxies', free: 'Add credits first', basic: 'Pay end of month', premium: 'Pay end of month' },
    { title: 'Seamless Integration with Porter Proxies Data Center & ISP API', free: false, basic: true, premium: true },
    { title: 'Custom Proxy Pool Configurations', free: false, basic: false, premium: true },
    { title: 'Untraceable Proxy Masking', free: 'Add on', basic: '10 Add on - 25% discount', premium: 'Add on - free setup' },
    { title: 'Remove Torch Labs Branding', free: false, basic: false, premium: 'Add on - 40$/M' },
    { title: 'Pre-configured Residential Proxy APIs with Free Whitelabeling', free: true, basic: true, premium: true },
    { title: 'Advanced Chargeback Protection Mechanism', free: false, basic: true, premium: true },
    { title: 'Fully White Label the Dashboard with Your Domain', free: false, basic: 'Free one time', premium: 'Unlimited' },
    { title: 'Theme Customization Options for Personalized Branding', free: 'Free one time', basic: 'Free one time', premium: 'Unlimited' },
    { title: 'Additional Team Member Seats', free: false, basic: false, premium: true },
    { title: 'Restrict Dashboard Access Using Discord Server Membership or Role', free: false, basic: true, premium: true }
];


interface FeatureItem {
    title: string;
    desc: string;
}

const features: FeatureItem[] = [
    {
        title: 'Device Fingerprinting Beyond IPs',
        desc: "Ad platforms analyze Canvas, WebGL, audio context, and font rendering. Headless browsers and automation leave fingerprints real users don't",
    },
    {
        title: 'Behavioral Signal Analysis',
        desc: 'Real users scroll, pause, hesitate, and browse naturally. Verification bots generate perfect timing and zero interaction, instant detection.',
    },
    {
        title: 'IP Reputation & ASN Databases',
        desc: 'Google Ads and Meta cross-check IPs against MaxMind, IPQualityScore, and internal ASN lists. Datacenter are flagged in real time.',
    },
];

interface ProxyCard {
    title: string;
    description: string;
    price: string;
    badge?: {
        text: string;
        variant: 'popular' | 'enterprise';
    };
    iconType: 'residential' | 'hybrid';
    features: string[];
}


interface ComparisonRow {
    metric: string;
    brightData: string | boolean;
    oxylabs: string | boolean;
    torchProxies: string | boolean; // Your highlighted column
    proxyEmpire: string | boolean;
    nodeMaven: string | boolean;
}

const comparisonData: ComparisonRow[] = [
    {
        metric: 'Price',
        brightData: '$8 per GB',
        oxylabs: '$8 per GB',
        torchProxies: '$4 per GB',
        proxyEmpire: '$4 per GB',
        nodeMaven: '$4 per GB',
    },
    {
        metric: 'Pool Size',
        brightData: '150M+ IPs',
        oxylabs: '175M+ IPs',
        torchProxies: '120M IPs',
        proxyEmpire: '29.5M+ IPs',
        nodeMaven: '30M+ IPs',
    },
    {
        metric: 'Countries',
        brightData: '195 Countries',
        oxylabs: '195+ Countries',
        torchProxies: '195+ Countries',
        proxyEmpire: '170+ Countries',
        nodeMaven: '195+ Countries',
    },
    {
        metric: 'Minimum Purchase',
        brightData: 'Pay as you go\n(No Minimum)',
        oxylabs: 'Pay as you go\n(5GB Min)',
        torchProxies: 'Pay as you go\n(No Minimum)',
        proxyEmpire: 'Pay as you go\n(No Minimum)',
        nodeMaven: 'Pay as you go\n(9 GB Minimum)',
    },
    {
        metric: 'Free Trial',
        brightData: true,
        oxylabs: true,
        torchProxies: true,
        proxyEmpire: false,
        nodeMaven: false,
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
            title: "ML Based Detection Beyond IPs",
            desc: "Nike SNKRS and Adidas Confirmed analyze 50+ behavioral and fingerprinting signals per session not just IP reputation. One burned IP can trigger subnet-wide bans, wiping out hundreds of tasks instantly."
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4" />,
            title: "Behavioral Pattern Analysis",
            desc: "Real users hesitate, scroll, reload and interact unpredictably. Bots generate perfect timing, zero mouse interaction and unnatural checkout flows patterns that machine-learning models detect within seconds."
        },
        {
            icon: <Layers className="text-white w-4 h-4" />,
            title: "IP Reputation & ASN Blacklisting",
            desc: "Footsites and major Shopify stores blacklist entire datacenter ASNs in real time during drops. One burned IP can trigger subnet wide bans, wiping out hundreds of tasks instantly."
        },
    ];
    const useCases = ["Nike SNKRS", "Yeezy", "Footsites" ];
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
    const BRAND_LOGOS = [
        { name: "Shield Proxies", src: "/images/business/shield.png" },
        { name: "Boiling Proxies", src: "/images/business/boiling.png" },
        { name: "Sugar Proxies", src: "/images/business/sugar.png" },
        { name: "Malice Proxies", src: "/images/business/malke.png" },
        { name: "Proxify.gg", src: "/images/business/proxify.png" }
    ];
    const [isMonthly, setIsMonthly] = useState<boolean>(true);

    // Custom logic to swap true/false variables out for exact vector SVGs
    const renderCell = (val: string | boolean) => {
        if (typeof val === 'boolean') {
            return val ? (
                // Circular Orange Check Icon
                <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#FF4F00] flex items-center justify-center text-black">
                        <svg className="w-3 h-3 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
            ) : (
                // Circular Dimmed Cross Close Icon
                <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            );
        }

        // Fallback string printing for dynamic descriptors
        return <span className="text-zinc-400 text-[13px] tracking-wide font-normal">{val}</span>;
    };


    // The exact words cycled in the video
    const words = ["Nike SNKRS", "Yeezy", "Footsites" ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        // 1. Set up an interval to trigger the fade-out right before switching words
        const fadeTimeout = setTimeout(() => {
            setFadeState('fade-out');
        }, 2000); // Word stays visible for 2 seconds

        const changeWordTimeout = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setFadeState('fade-in');
        }, 2300); // 300ms transition delay to finish fading out

        return () => {
            clearTimeout(fadeTimeout);
            clearTimeout(changeWordTimeout);
        };
    }, [currentWordIndex]);



    // Custom helper to render text lines, checkmarks, or X marks
    const renderCellContent = (value: string | boolean, isHighlighted = false) => {
        if (typeof value === 'boolean') {
            return value ? (
                // Green Checkmark
                <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                        <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
            ) : (
                // Muted Gray X Mark
                <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            );
        }

        // Handles line breaks cleanly for text configurations
        return (
            <span className={`text-[13px] whitespace-pre-line tracking-wide font-normal leading-relaxed ${isHighlighted ? 'text-zinc-300' : 'text-zinc-500'
                }`}>
                {value}
            </span>
        );
    };



    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

            <section className="relative bg-[#0a0a0a] text-white min-h-[650px] flex items-center py-20 px-4 md:px-8 overflow-hidden font-sans mt-[100px]">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* --- LEFT COLUMN: CONTENT & CALL TO ACTION --- */}
                    <div className="lg:col-span-7 flex flex-col items-start z-10">

                        {/* Trustpilot Badge Block */}
                        <div className="flex items-center justify-center mb-2">
                            <img
                                src="/images/TrustPiolet.png"
                                alt="Excellent 5-star rating on Trustpilot"
                                className="h-6 w-auto object-contain"
                                loading="lazy"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-[60px] sm:text-5xl lg:text-[56px] font-regular tracking-tight leading-[1.1] max-w-xl text-white mb-1">
                            Best Sneaker Proxies for Limited Drops
                        </h1>

                        {/* Subheading with colored emphasis */}
                        <p className="text-zinc-500 text-base md:text-lg max-w-xl mb-2 font-normal leading-relaxed select-none">
                            Cop limited{' '}
                            <span
                                className={`text-[#FF4F00] font-medium inline-block transition-all duration-300 transform ${fadeState === 'fade-in'
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 -translate-y-1'
                                    }`}
                            >
                                {words[currentWordIndex]}
                            </span>{' '}
                            without IP bans or failed checkouts.
                        </p>

                        {/* Features Inline List */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mb-10 text-[16px] font-regular sm:text-sm text-zinc-300">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#FF4F00] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>0.3s Checkout Speed</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#FF4F00] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>99%+ Success Rate</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#FF4F00] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>99% Ad Visibility Rate</span>
                            </div>
                        </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

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

                    </div>

                    {/* --- RIGHT COLUMN: MAIN COLUMN IMAGE --- */}
                    <div className="lg:col-span-5 relative flex items-center justify-center w-full">
                        {/* Orange ambient glow effect behind the asset artwork */}
                        <div
                            className="absolute w-[300px] h-[300px] bg-[#FF4F00]/15 rounded-full blur-[80px] pointer-events-none select-none"
                            aria-hidden="true"
                        />

                        <div className="relative w-full max-w-[480px] aspect-[4/3]">
                            <Image
                                src="/images/limited_drops.png" 
                                alt="Proxy Network Infrastructure Ad Verification Illustration"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section>


            <section className="bg-[#0a0a0a] text-white py-24 px-4 md:px-8 font-sans">
                <div className="max-w-7xl mx-auto">

                    {/* --- HEADER SECTION --- */}
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-white mb-4 leading-tight">
                            Why You Keep Missing Drops
                        </h2>
                        <p className="text-zinc-500 text-[18px] md:text-base font-regular max-w-4xl mx-auto leading-relaxed">
                            Most resellers don’t lose because of bad bots, they lose because of bad proxy infrastructure.
                                                  </p>
                    </div>

                    {/* --- FEATURES GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 items-start mt-4">
                        {features.map((item, index) => (
                            <div key={index} className="flex flex-col items-start text-left">

                                {/* Flame Icon Container */}
                                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden relative mb-5">
                                    {/* Replacing SVG with Next.js Image Component */}
                                    <Image
                                        src="/images/icon/Flame.svg" // <-- Change this to your exact path inside the public/ directory
                                        alt="Flame Icon"
                                        width={20} // <-- Matches the w-5 (20px) from your original SVG
                                        height={20} // <-- Matches the h-5 (20px) from your original SVG
                                        className="object-contain w-full h-full"
                                        priority
                                    />
                                </div>

                                {/* Feature Title */}
                                <h3 className="text-white text-[20px] font-medium tracking-tight mb-3">
                                    {item.title}
                                </h3>

                                {/* Feature Description */}
                                <p className="text-zinc-500 text-[16px] font-regular leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>
            </section>





            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden -mt-[100px]">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/checkout_success.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-[42px] md:text-5xl md:leading-snug font-medium tracking-tight">
                                Why Detection Kills  Checkout Success
                            </h2>
                            <h4 className="text-[20px] font-medium text-stone-200 mb-4">
                                Silent Blocks & Instant Bans
                            </h4>
                            <p className="text-gray-400 text-[16px] font-regular leading-relaxed">
                                Detected sessions are quietly filtered, stalled or blocked before checkout without error message, just failed carts.
                            </p>
                            <h4 className="text-[20px] font-medium text-stone-200 mb-4">
                                Lost Shopify Queue Positions
                            </h4>
                            <p className="text-gray-400 text-[16px] font-regular leading-relaxed">
                                Unstable or rotating proxies lose queue position instantly, wasting critical minutes on hyped drops.
                            </p>
                            <h4 className="text-[20px] font-medium text-stone-200 mb-4">
                                Burned Proxy Spend
                            </h4>
                            <p className="text-gray-400 text-[16px] font-regular leading-relaxed">
                                Retries, failed checkouts, and banned IPs drain budgets fast,  especially with $12–20/GB residential proxies.
                            </p>

                        </div>
                    </div>
                </div>
            </section>



            {/* ── TOP HEADER SECTION ───────────────────────────────────── */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                    One Proxy Built for Winning Drops
                </h2>
                <p className="text-stone-400 text-sm sm:text-base max-w-4xl mx-auto font-normal">
                    A single proxy type designed to survive SNKRS filters, Footsite bans and Shopify queues without juggling multiple proxy pools.
                </p>
            </div>
            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden -mt-[100px]">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}

                        <div className="relative group">
                            {/* Text Side */}
                            <div className="space-y-6">
                                <h2 className="text-[42px] md:text-5xl font-regular tracking-tight">
                                    Hybrid Sneaker Proxies
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    The proxy infrastructure serious resellers rely on when session stability and identity trust matter more than raw speed.
                                </p>
                                <ul className="text-gray-400 text-lg leading-relaxed">
                                    <li>&#9679; Built specifically for SNKRS, Footsites, Shopify & Adidas Confirmed</li>
                                    <li>&#9679; Maintains stable sessions through queues and checkout</li>
                                    <li>&#9679; Replaces datacenter + residential juggling with one drop-ready proxy type</li>
                                    <li>&#9679; Maintains stable, real user sessions through long queues and drops</li>
                                </ul>

                            </div>
                        </div>
                        <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                            <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                <img
                                    src="/images/limited_drops.png"
                                    alt="Perfect for Everyday Scraping & Automation"
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden -mt-[100px]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-[42px] font-medium text-white mb-4 text-center">
                        Why Hybrid Proxies Win You Drops</h2>
                    <p className="text-gray-400 text-[16px] leading-relaxed text-center max-w-3xl mx-auto mb-16 font">
                        Sneaker platforms evaluate far more than IPs. Hybrid proxies succeed because they align identity trust, session behavior and infrastructure at scale.                       
                         </p>
                </div>
                <div className="max-w-8xl mx-auto -mt-[100px]">
                    <FeaturesTabSection />
                </div>
            </section>

<section className="bg-[#0a0a0a] text-white py-24 px-4 md:px-8 font-sans -mt-[200px] flex flex-col items-center justify-center min-h-screen">
    <div className="w-full max-w-7xl mx-auto">

                    {/* --- HEADER --- */}
<div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-white mb-4">
                The Right Proxies for Sneaker Botting
            </h2>
            <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed">
                Select the proxy type that matches your drop frequency, target platforms and tolerance for failed checkouts
            </p>
        </div>

                    {/* --- MAIN 2-COLUMN ROW SIDE-BY-SIDE --- */}
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

                        {/* LEFT COLUMN: THE PRICING CARD */}
                        <div className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-200 hover:border-zinc-800 w-full min-h-[580px]">
                            <div>
                                {/* Top Row: Icon & Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#FF4F00] flex items-center justify-center text-white">
                                        {/* Defaulting to residential icon structure as per array fallback */}
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2L4 9v11a2 2 0 002 2h12a2 2 0 002-2V9L12 2zm0 3.8l6 5.25V20H6v-8.95L12 5.8zM11 13h2v4h-2v-4z" />
                                        </svg>
                                    </div>

                                    <span className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-md bg-[#002B1B] text-[#00B67A]">
                                        Most Popular
                                    </span>
                                </div>

                                {/* Card Title & Description */}
                                <h3 className="text-[24px] font-medium text-white mb-1.5 tracking-tight">
                                    Hybrid Proxies
                                </h3>
                                <p className="text-zinc-500 text-sm font-normal mb-6 leading-relaxed max-w-sm">
                                    Built for limited drops, queues and high-pressure checkouts
                                </p>

                                {/* Pricing Block */}
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                                        $5/GB
                                    </span>
                                    <span className="text-zinc-600 text-xs">per month</span>
                                </div>

                                {/* Features Checklist */}
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3 text-zinc-400 text-sm font-normal leading-relaxed">
                                        <svg className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>~99% success rate on SNKRS, Shopify & Footsites</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-400 text-sm font-normal leading-relaxed">
                                        <svg className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>ISP-sourced residential IPs that pass ML bot checks</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-400 text-sm font-normal leading-relaxed">
                                        <svg className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>0.3s average response time for faster checkouts</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-400 text-sm font-normal leading-relaxed">
                                        <svg className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Stable sessions that hold queue position</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-400 text-sm font-normal leading-relaxed">
                                        <svg className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>No datacenter fingerprints or instant ASN bans</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Action Button */}
                            <button className="w-full py-3.5 px-4 bg-[#FF4F00] hover:bg-[#e04600] text-white font-medium text-sm rounded-xl transition duration-150 active:scale-[0.98]">
                                Try risk free now
                            </button>
                        </div>

                        {/* RIGHT COLUMN: INFORMATION DISPLAY & TARGET LOGOS */}
                        <div className="flex flex-col justify-center py-4">
                            <h4 className="text-2xl md:text-[28px] font-medium tracking-tight text-white mb-8">
                                What this means for you?
                            </h4>

                            {/* Value Propositions List with Green Check Circles */}
                            <ul className="space-y-5 text-left mb-10">
                                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base font-normal">
                                    <div className="w-[18px] h-[18px] rounded-full bg-[#00B67A] flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-[10px] h-[10px] text-black stroke-[4.5]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span>More carts reach checkout</span>
                                </li>

                                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base font-normal">
                                    <div className="w-[18px] h-[18px] rounded-full bg-[#00B67A] flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-[10px] h-[10px] text-black stroke-[4.5]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span>Fewer retries and burned tasks</span>
                                </li>

                                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base font-normal">
                                    <div className="w-[18px] h-[18px] rounded-full bg-[#00B67A] flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-[10px] h-[10px] text-black stroke-[4.5]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span>Lower cost per successful drop</span>
                                </li>
                            </ul>

                            {/* "Best for" Identifier label */}
                            <div className="text-center lg:text-left">
                                <span className="block text-zinc-500 text-xs font-normal tracking-wide mb-6 text-center">
                                    Best for
                                </span>

                                {/* Flex Logo Wrap matching your mockup configuration */}
                                <div className="flex flex-wrap items-center justify-center">
                                    <Image src="/images/icon/logo_sniker.svg" alt="Amazon" width={385} height={54} className="object-contain" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section className="bg-[#0A0A0A] text-white py-24 px-4 md:px-8 font-sans overflow-hidden">
                <div className="max-w-[1200px] mx-auto">

                    {/* --- HEADER --- */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-[42px] font-medium tracking-tight text-white mb-4">
                            See how we compare with others
                        </h2>
                        <p className="text-zinc-500 text-[18px] md:text-base font-regular tracking-wide">
                            Proof why we are the best option for your use case
                        </p>
                    </div>

                    {/* --- COMPARISON MATRIX GRID --- */}
                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[960px] border-collapse text-center table-fixed">
                            <colgroup><col className="w-[16%] text-left" /><col className="w-[16%]" /><col className="w-[16%]" /><col className="w-[20%]" /><col className="w-[16%]" /><col className="w-[16%]" /></colgroup>

                            <thead>
                                <tr className="align-middle">
                                    {/* Empty corner metric cell */}
                                    <th className="pb-10"></th>

                                    {/* Bright Data Logo */}
                                    <th className="pb-10 px-2">
                                        <div className="relative h-7 w-[200px] max-w-[200px] mx-auto opacity-70 hover:opacity-100 transition">
                                            <Image src="/images/table/1.png" alt="Bright Data Logo" fill className="object-contain" />
                                        </div>
                                    </th>

                                    {/* Oxylabs Logo */}
                                    <th className="pb-10 px-2">
                                        <div className="relative h-7 w-[200px] max-w-[200px] mx-auto opacity-70 hover:opacity-100 transition">
                                            <Image src="/images/table/2.png" alt="Oxylabs Logo" fill className="object-contain" />
                                        </div>
                                    </th>

                                    {/* Highlighted Column Header: TorchProxies */}
                                    <th className="pb-6 px-2 relative">
                                        {/* Floating backdrop card boundary matching image anchor */}
                                        <div className="absolute top-0 left-0 right-0 bottom-[-320px] bg-[#0A0A0A] border border-zinc-900 rounded-2xl z-0 pointer-events-none" />

                                        <div className="relative h-7 w-[200px] max-w-[200px] mx-auto opacity-70 hover:opacity-100 transition">
                                            <Image src="/images/table/torchproxies.png" alt="TorchProxies Logo" fill className="object-contain" />
                                        </div>
                                    </th>

                                    {/* Proxy Empire Logo */}
                                    <th className="pb-10 px-2">
                                        <div className="relative h-7 w-[200px] max-w-[200px] mx-auto opacity-70 hover:opacity-100 transition">
                                            <Image src="/images/table/3.png" alt="Proxy Empire Logo" fill className="object-contain" />
                                        </div>
                                    </th>

                                    {/* Node Maven Logo */}
                                    <th className="pb-10 px-2">
                                        <div className="relative h-7 w-[200px] max-w-[200px] mx-auto opacity-70 hover:opacity-100 transition">
                                            <Image src="/images/table/4.png" alt="Node Maven Logo" fill className="object-contain" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="relative z-10">
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="align-middle">

                                        {/* Left Column: Metric Label */}
                                        <td className="py-7 px-2 text-left text-white text-[18px] font-regular tracking-tight border-b border-zinc-900/40">
                                            {row.metric}
                                        </td>

                                        {/* Competitor: Bright Data */}
                                        <td className="py-7 px-2 border-b border-zinc-900/40">
                                            {renderCellContent(row.brightData)}
                                        </td>

                                        {/* Competitor: Oxylabs */}
                                        <td className="py-7 px-2 border-b border-zinc-900/40">
                                            {renderCellContent(row.oxylabs)}
                                        </td>

                                        {/* Highlighted: TorchProxies Content */}
                                        <td className="py-7 px-2 border-b border-zinc-900/40 relative z-10">
                                            {renderCellContent(row.torchProxies, true)}
                                        </td>

                                        {/* Competitor: Proxy Empire */}
                                        <td className="py-7 px-2 border-b border-zinc-900/40">
                                            {renderCellContent(row.proxyEmpire)}
                                        </td>

                                        {/* Competitor: Node Maven */}
                                        <td className="py-7 px-2 border-b border-zinc-900/40">
                                            {renderCellContent(row.nodeMaven)}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

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
Join 100+ sneaker resellers who use Torch Sneaker Proxies to secure wins                          
  </h2>

                            <p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Eliminate bans, retries, and wasted traffic with hybrid sneaker proxies engineered for SNKRS queues and Footsite protection.
                            </p>

                            <button className="px-10 py-4 bg-[#FE4A01] text-white font-medium rounded-2xl text-lg hover:bg-stone-100 transition-all active:scale-95">
                                Start free with 1GB
                            </button>
                        </div>
                        {/* Features Inline List */}
                       <div className="relative z-10 flex flex-wrap justify-center gap-x-6 gap-y-3 items-center mb-10 mt-10 text-[16px] font-regular sm:text-sm text-white">
                            <div className="flex items-center gap-1.5">
                               <svg className="w-4 h-4 text-[#FE4A01] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>No Credit Card Required </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#FE4A01] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Set up in minutes</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <svg className="w-4 h-4 text-[#FE4A01] stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Works in 195+ countries</span>
                            </div>
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
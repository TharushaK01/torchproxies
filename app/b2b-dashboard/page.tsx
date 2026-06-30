"use client";
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag, CreditCard } from 'lucide-react';
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


interface Plan {
    name: string;
    price: {
        monthly: string;
        yearly: string;
    };
}

const plans: Plan[] = [
    { name: 'FREE', price: { monthly: '$0', yearly: '$0' } },
    { name: 'BASIC', price: { monthly: '$100', yearly: '$1,000' } },
    { name: 'PREMIUM', price: { monthly: '$160', yearly: '$1,600' } },
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


interface FAQItem {
  q: string;
  a: string | string[]; // Allows standard strings or string arrays for bullet points
}

const faqData: FAQItem[] = [
  {
    q: "What is a proxy server?",
    a: "A proxy server acts as an intermediary between your device and the internet. It forwards your internet requests and returns the responses, helping to anonymize your IP address and enhance security."
  },
  {
    q: "What types of proxies do you offer?",
    // Formatted as an array to handle the introduction and separate points cleanly
    a: [
      "We offer several types of proxies including:",
      "Residential Proxies (Supports HTTP and SOCKS5)",
      "ISP Proxies (Supports HTTP and SOCKS5)",
      "DC Proxies (Coming Soon)",
      "Mobile Proxies (Coming Soon)"
    ]
  },
  {
    q: "Are your proxies compatible with all applications and websites?",
    a: "Our proxies are designed to be compatible with most applications and websites. However, some platforms may have advanced detection methods, so results can vary."
  },
  {
    q: "Do your proxies support IP rotation?",
    a: "Yes, our proxies support IP rotation. You can configure the proxies to automatically change IP addresses at specified intervals or after each request to minimize the risk of detection."
  },
  {
    q: "What is the difference between residential and datacenter proxies?",
    a: "Residential proxies use IP addresses assigned by ISPs to homeowners, making them appear more legitimate and less likely to be blocked. Datacenter proxies are hosted in data centers and offer high speed and reliability but are more easily detectable by websites."
  },
  {
    q: "How do I set up your proxies with my software or application?",
    a: "We provide detailed documentation and support to help you configure our proxies with your software or application. Our support team is also available to assist with setup."
  },
  {
    q: "Do you offer a trial period or demo for your proxy services?",
    a: "Yes, we offer a trial period or demo so you can test our proxy services before committing to a purchase."
  },
  {
    q: "How is billing handled for your proxy services?",
    a: "Billing is typically handled on a subscription basis, with various plans available depending on your usage needs. Detailed invoices and usage reports are provided."
  }
];
    const BRAND_LOGOS = [
        { name: "Shield Proxies", src: "/images/business/sheild.png" },
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
    {/* 🛠️ FIX: Changed border-zinc-400 to border-zinc-700/60 for a cleaner dark-mode blend, and text-zinc-600 to text-zinc-200 for a near-white icon */}
    <div className="w-5 h-5 rounded-full border border-zinc-700/60 flex items-center justify-center text-zinc-200">
        <svg className="w-2.5 h-2.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
</div>
            );
        }

        // Fallback string printing for dynamic descriptors
        return <span className="text-zinc-400 text-[13px] tracking-wide font-normal">{val}</span>;
    };

    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

{/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
<header
    id="hero"
    className="relative z-20 min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center mt-[80px] px-6 pt-28 pb-12 overflow-visible space-y-6 font-['Urbanist']"
>

    <div className="absolute bottom-0 left-0 w-full h-[65vh] z-0">
        <Image
            src="/images/hero_back.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom"
        />

        {/* Marquee at bottom of image */}
        <div className="absolute -bottom-8 left-0 w-full z-[999]">
            <Marquee />
        </div>
    </div>

  <div className="max-w-6xl mx-auto text-center z-10 font-['Urbanist']">

        <div className="flex items-center justify-center mb-6">
            <a
                href="https://www.trustpilot.com"
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
            Start your own proxy business <br />with zero upfront costs
         
        </h1>

        <p className="max-w-3xl mx-auto text-stone-400 text-[16px] sm:text-xl mb-6 leading-relaxed">
            We give you a fully branded reseller dashboard, global proxy access and automation tools without infrastructure, server costs or large deposits other require
        </p>

        <div className="py-4 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-[16px] font-regular">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-15 mt-8">
            <div
                onClick={() => router.push('https://dashboard.torchproxies.com/')}
                className="cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                <button className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">

                    {/* Fast 3D text track wrapper */}
                    <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                        {/* Default State Text */}
                        <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                            Get started for free
                        </span>

                        {/* Hover State Text */}
                        <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                            Get started for free
                        </span>

                    </div>
                </button>
            </div>
        </div>

        {/* <div className="flex items-center justify-center gap-2.5 text-stone-400 text-sm sm:text-base font-normal tracking-wide pt-4 pb-2">
            <CreditCard className="w-4 h-4 text-stone-500" />
            <span>No credit card needed. Instant access</span>
        </div> */}
    </div>

</header>


            <section className="bg-[#0a0a0a] -mt-[20px] text-white py-25 px-6 border-t border-stone-950 font-['Urbanist']">
                <div className="max-w-6xl mx-auto text-center">

                    {/* Section Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-stone-100 mb-4">
                        Trusted by Growing Proxy Businesses Worldwide
                    </h2>

                    {/* Subtitle Description */}
                    <p className="max-w-4xl mx-auto text-stone-500 text-xs sm:text-sm font-normal leading-relaxed mb-12 max-w-[85%] sm:max-w-none">
                        From small automation teams to full scale proxy providers, businesses use the TorchLabs Reseller Dashboard as the infrastructure behind their own brands.
                    </p>

                    {/* Brand Logos Flex Grid Asset Matrix */}
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16 lg:gap-x-20 pt-4">
                        {BRAND_LOGOS.map((brand) => (
                            <div
                                key={brand.name}
                                title={brand.name}
                                className="transition-all duration-300 transform hover:scale-[1.03]"
                            >
                                <img
                                    src={brand.src}
                                    alt={`${brand.name} logo`}
                                    // Keeps native logo color but dims them slightly to merge beautifully into the dark background layout
                                    className="h-7 sm:h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="bg-[#0a0a0a] text-white overflow-hidden pb-24 sm:pb-28 mx-[120px] font-['Urbanist']">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/proxy_reseller.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight">
                                A Complete Proxy Reseller Dashboard
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our Reseller Dashboard gives you everything you need to run and sell proxies under your own brand. You get a fully managed backend, built in client management, global proxy access and simple controls to operate your business without hosting infrastructure or buying IPs upfront.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Whether you’re starting from scratch or adding proxies to an existing product, the dashboard handles the heavy lifting so you can focus on customers and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: WHY CHOOSETORCHPROXIES ──────────────────────────────── */}
            <section className="pb-24 sm:pb-28 mx-[120px] bg-[#0a0a0a] text-white relative font-['Urbanist']">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ── TOP HEADER SECTION ───────────────────────────────────── */}
                    <div className="text-center mb-16">
                        <span className="text-[#FE4A01] text-xs font-bold tracking-wider block mb-3">
                            Features
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                            Everything a Reseller Needs in One Dashboard
                        </h2>
                        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
                            Instead of stitching together random tools, We give you a single place to run your proxy business.
                        </p>
                    </div>

                    {/* ── ASYMMETRIC STAGGERED BENTO GRID LAYOUT ─────────────────── */}
                    {/* Parent container establishes a 2-column track on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                        {/* ── COLUMN 1 (Left Track: 1st Card Taller, 2nd Card Shorter) ── */}
                        <div className="flex flex-col gap-6 w-full">

                            {/* CARD 1: Taller Card */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[580px]">
                                <div className="mb-6">
                                    <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                        White label dashboard
                                    </h3>
                                    <p className="text-stone-400 text-[18px] leading-relaxed font-normal">
                                        Your domain, your logo, your colors. Clients log into your panel while we power the backend.
                                    </p>
                                </div>

                                {/* Visual Component Area */}
                                <div className="w-full bg-[#111115]/30 border border-stone-900/50 rounded-2xl h-auto relative overflow-hidden flex items-center justify-center p-4">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FE4A01_1px,transparent_1px)] [background-size:16px_16px]" />
                                    <div className="w-full relative z-10 drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                                        <img
                                            src="/images/white_label.svg"
                                            alt="White label configuration panel dashboard interface illustration"
                                            className="w-full h-auto rounded-xl object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* CARD 2: Shorter Card */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[380px]">
                                <div className="mb-6">
                                    <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                        Client & Usage Management
                                    </h3>
                                    <p className="text-stone-400 text-[18px] leading-relaxed font-normal">
                                        Create sub-users, assign plans and monitor usage without spreadsheets or manual tracking.
                                    </p>
                                </div>

                                {/* Smaller Visual Component Area */}
                                <div className="w-full bg-[#111115]/50 border border-stone-900 rounded-2xl p-4 h-40 relative flex items-center justify-center overflow-hidden drop-shadow-2xl">
                                    <img
                                        src="/images/client_usage.svg"
                                        alt="Client management list component table breakdown snapshot"
                                        className="w-full h-auto object-contain rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                        </div>


                        {/* ── COLUMN 2 (Right Track: 1st Card Shorter, 2nd Card Taller) ── */}
                        <div className="flex flex-col gap-6 w-full">

                            {/* CARD 3: Shorter Card */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[380px]">
                                <div className="mb-6">
                                    <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                        Global Residential & ISP Access
                                    </h3>
                                    <p className="text-stone-400 text-[18px] leading-relaxed font-normal">
                                        Offer high quality residential and ISP proxies with strong uptime ready for scraping, automation.
                                    </p>
                                </div>

                                {/* Button Layout Badge Array Component */}
                                <div className="w-full bg-[#111115]/50 border border-stone-900 rounded-2xl p-4 h-40 relative flex items-center justify-center overflow-hidden drop-shadow-2xl">
                                    <img
                                        src="/images/global_residential.svg"
                                        alt="Client management list component table breakdown snapshot"
                                        className="w-full h-auto object-contain rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* CARD 4: Taller Card */}
                            <div className="bg-[#0b0b0d] border border-stone-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[580px]">
                                <div className="mb-6">
                                    <h3 className="text-[28px] font-medium tracking-tight text-stone-200 mb-3">
                                        Affiliate & Revenue Tracking
                                    </h3>
                                    <p className="text-stone-400 text-[18px] leading-relaxed font-normal">
                                        Built in stats so you can see who's sending traffic, which clients are spending and how your proxy business is growing.
                                    </p>
                                </div>

                                {/* Tall Component Asset Graph Area */}
                                <div className="w-full bg-[#111115]/30 border border-stone-900/50 rounded-2xl h-auto relative overflow-hidden flex items-center justify-center p-4">
                                    <div className="w-full relative z-10 drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                                        <img
                                            src="/images/affiliate_revenue.svg"
                                            alt="Financial balance monitoring graphs displaying conversion stats panel"
                                            className="w-full h-auto rounded-xl object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>



            <section className="bg-[#0a0a0a] text-white py-40 px-4 md:px-8 font-sans -mt-[150px] font-['Urbanist']">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end font-['Urbanist']">

                    {/* --- LEFT SIDE: TITLE & TOGGLE --- */}
                    <div className="lg:col-span-5 font-['Urbanist']">
                        <span className="text-zinc-500 text-xs font-semibold tracking-wider uppercase block mb-2 font-['Urbanist']">
                            Plans
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 font-['Urbanist']">
                            Compare our plans
                        </h2>

                        {/* Toggle Switch */}
                        <div className="inline-flex rounded-full bg-black border border-zinc-800 p-1 font-['Urbanist']">
                            <button
                                onClick={() => setIsMonthly(true)}
                                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${isMonthly
                                        ? 'bg-[#FF4F00] text-white'
                                        : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsMonthly(false)}
                                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${!isMonthly
                                        ? 'bg-[#FF4F00] text-white'
                                        : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: PRICING CARDS --- */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full font-['Urbanist']">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between min-h-[175px] transition-all hover:border-zinc-800 font-['Urbanist']"
                            >
                                {/* Card Label and Price */}
                                <div>
                                    <p className="text-zinc-500 text-xs font-medium tracking-wider uppercase font-['Urbanist']">
                                        {plan.name}
                                    </p>
                                    <p className="text-4xl font-semibold mt-1.5 text-white tracking-tight font-['Urbanist']">
                                        {isMonthly ? plan.price.monthly : plan.price.yearly}
                                    </p>
                                    <p className="text-stone-400 text-[11px] mt-0.5 font-['Urbanist']">
                                        {isMonthly ? 'per month' : 'per month, billed yearly'}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <button className="w-full mt-5 py-2.5 px-4 bg-[#FF4F00] hover:bg-[#e04600] text-white font-medium text-xs rounded-xl transition duration-150 active:scale-[0.98]">
                                    Get started
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </section>



            <div className="bg-[#0a0a0a] py-32 px-4 md:px-8 -mt-[250px] font-['Urbanist']">
                <div className="max-w-7xl mx-auto overflow-x-auto border border-zinc-900 rounded-xl bg-[#050505]">

                    <table className="w-full min-w-[900px] border-collapse text-left table-fixed">
                        {/* Defined col groups to perfectly align columns cleanly */}
                        <colgroup>
                            <col className="w-[46%]" />
                            <col className="w-[18%]" />
                            <col className="w-[18%]" />
                            <col className="w-[18%]" />
                        </colgroup>

                        <tbody>
                            {featureMatrix.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-zinc-900/60 last:border-b-0 hover:bg-zinc-900/10 transition-colors duration-100"
                                >
                                    {/* Feature Description Left Element */}
                                    <td className="py-4 px-6 text-zinc-300 text-[13px] font-normal tracking-wide whitespace-normal leading-relaxed">
                                        {row.title}
                                    </td>

                                    {/* Free Tier Segment */}
                                    <td className="py-4 px-4 text-center align-middle">
                                        {renderCell(row.free)}
                                    </td>

                                    {/* Basic Tier Segment (Slightly tinted background highlight matching your reference) */}
                                    <td className="py-4 px-4 text-center align-middle bg-zinc-950/40">
                                        {renderCell(row.basic)}
                                    </td>

                                    {/* Premium Tier Segment */}
                                    <td className="py-4 px-4 text-center align-middle">
                                        {renderCell(row.premium)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>


            <section className="bg-[#0a0a0a] text-white pb-24 sm:pb-28 mx-[120px] overflow-hidden font-['Urbanist']">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/Launch_faster.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight">
                                Launch faster with a ready to Go, conversion focused landing page
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To help you get to market sooner, We create a polished, modern landing page tailored to your brand and fully aligned with the reseller dashboard.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We handle the layout, structure and UX so you can stay focused on bringing in traffic and growing your customer base.
                            </p>
                            <button onClick={() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }} className="w-[271px] h-[50px] mt-5 py-2.5 px-4 bg-[#FF4F00] text-white font-semi-bold text-[16px] rounded-xl transition duration-150 active:scale-[0.98] shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">
                                Request Landing Page Design
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
            {/* Upgrade CTA Banner */}
            <section className="pb-24 sm:pb-28 mx-[120px] font-['Urbanist']">
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

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
<section className="pb-24 sm:pb-28 mx-[120px] bg-stone-950/20 overflow-hidden font-['Urbanist']">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header Text Nodes */}
        <div className="text-center mb-16">
          <h2 className="text-[42px] sm:text-5xl font-medium mb-4 tracking-tight text-white">
            Customer Reviews
          </h2>
          <p className="text-stone-400">
            See how developer engineering nodes rate our overall connectivity network performance.
          </p>
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
<section className="pb-[80px] sm:pb-[80px] mx-[120px] bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">

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
            <span className="text-[#FE4A01] text-[16px] font-medium tracking-widest block mb-3">
                FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-regular tracking-tight text-white">
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

                        {/* Answer Accordion Body */}
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                            <div className="text-stone-400 text-[15px] leading-relaxed pr-10">
                                {Array.isArray(faq.a) ? (
                                    <div>
                                        {/* 1. Renders the introduction text row */}
                                        <p className="mb-3">{faq.a[0]}</p>
                                        
                                        {/* 2. Renders all following items as clean, separate points */}
                                        <ul className="list-none pl-1 space-y-2 text-stone-400">
                                            {faq.a.slice(1).map((point, pointIdx) => (
                                                <li key={pointIdx} className="flex items-start gap-2.5">
                                                    <span className="text-stone-400 font-semibold select-none">—</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    /* Fallback standard wrapper for normal string descriptions */
                                    <p>{faq.a}</p>
                                )}
                            </div>
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
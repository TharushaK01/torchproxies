"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Database, RefreshCw, Layers } from 'lucide-react';
import Image from 'next/image';
import FeaturesTabSection from '@/app/web-scraping/FeaturesTabSectio';
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
    { title: 'Remove TorchProxies Branding', free: false, basic: false, premium: 'Add on - 40$/M' },
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
    { title: 'Remove TorchProxies Branding', free: false, basic: false, premium: 'Add on - 40$/M' },
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
    { title: 'Remove TorchProxies Branding', free: false, basic: false, premium: 'Add on - 40$/M' },
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
            title: "IP Reputation Blacklisting",
            desc: "Datacenter and low-quality residential IPs are pre-flagged. Entire ASN ranges are blocked before your request is even processed."
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4" />,
            title: "Detection Beyond IPs",
            desc: "Modern sites analyze TLS fingerprints, request headers, and session behavior. Automation patterns trigger blocks even with rotating IPs."
        },
        {
            icon: <Layers className="text-white w-4 h-4" />,
            title: "CAPTCHA & Retry Traps",
            desc: "Blocked requests lead to endless CAPTCHAs and retries, inflating costs while returning unusable data."
        },
    ];
    const useCases = ["Amazon", "eBay", "Shopify", "Craigslist", "Coupang", "Google", "LinkedIn", "Social Media"];
    const [activeTab, setActiveTab] = useState<'premium' | 'planX'>('premium');

    const reviews = [
        { name: "Alex K.", role: "Lead Scraping Engineer", text: "Absolute game changer for parsing target inventory updates. The success parameters are consistently stable." },
        { name: "Sarah M.", role: "DevOps Architect", text: "IP targeting is granular down to city targets. The latency levels are significantly lower than competitive alternatives." },
        { name: "David L.", role: "Automated Data Analyst", text: "Top tier network infrastructure. The standard volume tier setups maintain premium speeds without bottleneck dropouts." },
    ];
type FaqItem = {
    text: string;
    label?: string;
    color?: string;
    step?: number;
    title?: string;
};

type FaqEntry = {
    q: string;
    items: FaqItem[];
};

const faqData: FaqEntry[] = [
{
    q: "What are the best proxy types for web scraping?",
    items: [
        {
            text: "Rotating Residential Proxies — The most reliable choice for highly protected targets: Amazon, Google, LinkedIn, Instagram, Booking.com, Cloudflare-protected sites, and DataDome-protected platforms. Real ISP-assigned IPs that blend into genuine user traffic. Higher cost per GB but dramatically lower ban rates on Tier-1 targets. Best used with session-based rotation (sticky IPs per scrape session)."
        },
        {
            title: "Fast",
            text: "Rotating Datacenter Proxies — Fastest and most cost-effective for lower-protection targets: news sites, Wikipedia, public government databases, job boards like Indeed, and unprotected e-commerce catalogues. Ideal for high-volume scraping where speed matters more than IP legitimacy. Easily detected by Akamai, Cloudflare, and Distil Networks."
        },
        {
            title: "Hybrid",
            text: "ISP (Static Residential) Proxies — Best for sustained, long-running crawls on mid-tier targets: Yelp, Tripadvisor, Zillow, Rightmove, and mid-size e-commerce platforms. Datacenter speed with residential IP registration — keeps sessions stable over hours without the rotation overhead of residential proxies."
        },
    ]
},
{
    q: "What are the best procy types for web scraping",
    items: [
        {
            text: "Rotating Residential Proxies — The most reliable choice for highly protected targets: Amazon, Google, LinkedIn, Instagram, Booking.com, Cloudflare-protected sites, and DataDome-protected platforms. Real ISP-assigned IPs that blend into genuine user traffic. Higher cost per GB but dramatically lower ban rates on Tier-1 targets. Best used with session-based rotation (sticky IPs per scrape session)."
        },
        {
            title: "Fast",
            text: "Rotating Datacenter Proxies — Fastest and most cost-effective for lower-protection targets: news sites, Wikipedia, public government databases, job boards like Indeed, and unprotected e-commerce catalogues. Ideal for high-volume scraping where speed matters more than IP legitimacy. Easily detected by Akamai, Cloudflare, and Distil Networks."
        },
        {
            title: "Hybrid",
            text: "ISP (Static Residential) Proxies — Best for sustained, long-running crawls on mid-tier targets: Yelp, Tripadvisor, Zillow, Rightmove, and mid-size e-commerce platforms. Datacenter speed with residential IP registration , keeps sessions stable over hours without the rotation overhead of residential proxies."
        },
    ]
},
{
    q: "How many procies do I need for web scraping?",
    items: [
        {
            text: "The right number of proxies isn't a fixed figure, it depends on your request volume, how aggressively the target site rate-limits, and your rotation strategy. The key metric to manage is requests per IP per hour , not total proxy count. Keeping this below the site's detection threshold is what prevents bans"
        },
        {
            title: "Strict",
            text: "Google, Amazon, LinkedIn — Keep below 5–10 requests per IP per hour. These platforms run aggressive bot detection and will ban IPs at low thresholds. Use large residential pools with session rotation."
        },
        {
            title: "Moderate",
            text: "E-commerce sites, booking platforms, job boards — Keep below 20–50 requests per IP per hour. Mid-tier rate limiting , residential or ISP proxies with 10–30 minute sticky sessions work well."
        },
        {
            title: "Lenient",
            text: "News sites, public directories, government databases — Keep below 100–200 requests per IP per hour. Low detection risk. Datacenter proxies are sufficient and cost-effective at this tier."
        },
    ]
},
{
    q: "Is proxy or VPN better for web scraping?",
    items: [
        {
            text: "Proxies win for web scraping , without exception at any meaningful scale. A VPN provides a single IP address shared across all your traffic. For scraping, where you need to distribute thousands of requests across thousands of different IPs to avoid detection, a VPN achieves nothing that a proxy doesn't also do while adding encryption overhead, speed penalties, and a single point of failure."
        },
    ]
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
    const words = ["Amazon", "eBay", "Shopify", "Craigslist", "Coupang", "Google", "LinkedIn", "Social Media"];

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
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">

{/* ── SECTION: HERO / WEB SCRAPING ────────────────────────────── */}
<section className="relative bg-[#0a0a0a] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-[100px] font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

    {/* Left Column: Content & Call To Action */}
    <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">

      {/* Trustpilot Badge */}
      <div className="mb-6">
        <a
          href="https://www.trustpilot.com/review/torchlabs.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-opacity hover:opacity-90 cursor-pointer"
        >
          <img
            src="/images/TrustPiolet.png"
            alt="Excellent 5-star rating on Trustpilot"
            className="h-7 sm:h-8 w-auto object-contain"
            loading="lazy"
          />
        </a>
      </div>

      {/* Hero Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] text-white mb-4 max-w-2xl">
        Best Hybrid Proxies for Web Scraping
      </h1>

      {/* Dynamic Subheading */}
      <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl mb-8 font-normal leading-relaxed select-none">
        Scrape{' '}
        <span
          className={`text-[#FE4A01] font-medium inline-block transition-all duration-300 transform ${
            fadeState === 'fade-in'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-1'
          }`}
        >
          {words[currentWordIndex]}
        </span>{' '}
        without bans, CAPTCHAs or wasted retries
      </p>

      {/* Feature Bullet Badges */}
      <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mb-8 sm:mb-10 text-xs sm:text-sm text-zinc-300 font-normal">
        {[
          'Clean & undetectable IPs',
          '99%+ Success Rate',
          '120M+ IPs across 195 countries',
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#FE4A01] shrink-0 stroke-[3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

        {/* Primary CTA Button */}
        <button
          onClick={() => router.push('https://dashboard.torchproxies.com/')}
          className="group relative w-full sm:w-60 h-12 sm:h-14 overflow-hidden bg-[#FE4A01] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(254,74,1,0.25)] hover:shadow-[0_0_35px_rgba(254,74,1,0.5)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
              Start free with 1 GB
            </span>
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90 text-sm sm:text-base">
              Start free with 1 GB
            </span>
          </div>
        </button>

        {/* Secondary CTA Button */}
        <button
          onClick={() => {
            document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative w-full sm:w-60 h-12 sm:h-14 overflow-hidden bg-transparent border border-stone-800 hover:border-stone-600 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out active:scale-[0.98] cursor-pointer"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
              View Pricing
            </span>
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white text-sm sm:text-base">
              View Pricing
            </span>
          </div>
        </button>

      </div>

    </div>

    {/* Right Column: Hero Graphic Artwork */}
    <div className="lg:col-span-5 relative flex items-center justify-center w-full mt-8 lg:mt-0">
      {/* Glow Backdrop */}
      <div
        className="absolute w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-[#FE4A01]/15 rounded-full blur-[80px] pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/3]">
        <Image
          src="/images/WebScraping.png"
          alt="Proxy Network Infrastructure Ad Verification Illustration"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>

  </div>
</section>

{/* ── SECTION: WHY SCRAPING SETUPS FAIL ───────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Header Section */}
    <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
        Why Most Web Scraping Setups Fail
      </h2>
      <p className="text-stone-400 text-xs sm:text-base lg:text-lg font-normal max-w-3xl mx-auto leading-relaxed">
        Most scraping failures aren’t caused by code, they’re caused by IP reputation, detection patterns and unstable sessions.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-start text-left group">

          {/* Flame Icon Container */}
          <div className="w-10 h-10 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-center relative mb-5 transition-colors duration-200 group-hover:border-[#FE4A01]/40">
            <Image
              src="/images/icon/Flame.svg"
              alt="Flame Icon"
              width={20}
              height={20}
              className="object-contain w-5 h-5"
              priority
            />
          </div>

          {/* Feature Title */}
          <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-2 sm:mb-3">
            {item.title}
          </h3>

          {/* Feature Description */}
          <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>
{/* ── SECTION: WHY DETECTION RUINS SCRAPING ACCURACY ────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      
      {/* Visual Side */}
      <div className="relative group order-2 lg:order-1">
        <div className="bg-[#0d0d0d] rounded-2xl sm:rounded-3xl p-3 border border-stone-800/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          <div className="bg-[#050505] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center relative aspect-[4/3] sm:aspect-auto">
            <Image
              src="/images/ScrapingAccuracy.png"
              alt="Why Detection Ruins Scraping Accuracy Visual Illustration"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Text Content Side */}
      <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
          Why Detection Ruins Scraping Accuracy
        </h2>

        <div className="space-y-6">
          {[
            {
              title: "Incomplete or Fake Data",
              desc: "Blocked sessions return CAPTCHA pages, redirects or placeholders instead of real content.",
            },
            {
              title: "Runaway Infrastructure Costs",
              desc: "Retries, proxy rotation and CAPTCHA solving multiply costs without improving results.",
            },
            {
              title: "Missed Coverage at Scale",
              desc: "Unstable proxies make it impossible to scrape consistently across regions, categories or time windows.",
            },
          ].map((point, index) => (
            <div key={index} className="space-y-1.5 sm:space-y-2">
              <h3 className="text-stone-200 font-medium text-base sm:text-lg lg:text-xl tracking-tight">
                {point.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>

  </div>
</section>
{/* ── SECTION: TOP HEADER ───────────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Main Heading */}
    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
      One Proxy Built for Reliable Web Scraping
    </h2>

    {/* Subtitle / Description */}
    <p className="text-stone-400 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
      A single proxy solution designed for teams that scrape at scale and can’t afford blocks, retries, or wasted spend.
    </p>

  </div>
</section>
{/* ── SECTION: HYBRID PROXIES FEATURE ROW ───────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Text Content Side */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
          Hybrid Proxies for Web Scraping
        </h2>

        <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
          Built for modern scraping environments where detection resistance, consistency and cost control matter more than raw bandwidth.
        </p>

        {/* Feature List */}
        <ul className="space-y-3 pt-2">
          {[
            'Fewer blocks, fewer retries, cleaner data',
            'Stable sessions for complex scraping workflows',
            'One proxy type that works across all targets',
            'Better ROI at high request volumes',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-stone-300 text-xs sm:text-sm lg:text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FE4A01] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side */}
      <div className="relative group">
        <div className="bg-[#0d0d0d] rounded-2xl sm:rounded-3xl p-3 border border-stone-800/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
          <div className="bg-[#050505] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center relative">
            <Image
              src="/images/HybridProxiesforWebScraping.png"
              alt="Hybrid Proxies for Web Scraping Feature Visual"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>

    </div>

  </div>
</section>


{/* ── SECTION: WHY HYBRID PROXIES WORK ─────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
        Why Hybrid Proxies Work for Web Scraping
      </h2>
      <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
        Hybrid proxies combine real residential identity with high-performance infrastructure so your scraping runs longer, costs less and fails less often.
      </p>
    </div>

    {/* Features Tab Component Wrapper */}
    <div className="w-full">
      <FeaturesTabSection />
    </div>

  </div>
</section>

{/* ── SECTION: SNEAKER BOTTING PRICING & PROPOSITION ────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div id="pricing-section" className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
        The Right Proxies for Sneaker Botting
      </h2>
      <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
        Choose the right proxy based on whether your target sites use advanced anti-bot protection and how large your monitoring scale is.
      </p>
    </div>

    {/* Main 2-Column Row Side-By-Side */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">

      {/* Left Column: Pricing Card */}
      <div className="bg-[#0A0A0A] border border-stone-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-stone-800 w-full min-h-[580px]">
        <div>
          {/* Top Row: Icon & Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center relative">
              <Image
                src="/images/pr.svg"
                alt="Proxy Feature Icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-md bg-[#002B1B] text-[#00B67A]">
              Most Popular
            </span>
          </div>

          {/* Card Title & Description */}
          <h3 className="text-xl sm:text-2xl font-medium text-white mb-1.5 tracking-tight">
            Hybrid Proxies
          </h3>
          <p className="text-stone-400 text-sm sm:text-base font-normal mb-6 leading-relaxed max-w-sm">
            Built for high volume scraping on both protected and unprotected targets
          </p>

          {/* Pricing Block */}
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              $5/GB
            </span>
            <span className="text-stone-500 text-xs">per month</span>
          </div>

          {/* Features Checklist */}
          <ul className="space-y-4 mb-10">
            {[
              '99% success rate on protected and high-friction sites',
              'ISP sourced residential IPs that pass anti-bot checks',
              'Stable sessions for consistent, large scale scraping',
              'Easy API integration for rapid deployment',
              'Best price-performance at scale',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-stone-300 text-xs sm:text-sm font-normal leading-relaxed">
                <svg className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="w-full mb-2">
          <button 
            onClick={() => router.push('https://dashboard.torchproxies.com/')} 
            className="group relative w-full h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                Try risk free now
              </span>
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                Try risk free now
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Right Column: Information Display & Target Logos */}
      <div className="flex flex-col justify-center py-4">
        <h4 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-tight text-white mb-8 text-center lg:text-left">
          What this means for you?
        </h4>

        {/* Value Propositions List with Green Check Circles */}
        <ul className="space-y-5 text-left mb-10">
          {[
            'More successful requests per GB',
            'Fewer retries, blocks and CAPTCHA loops',
            'Lower cost per usable dataset',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-stone-300 text-xs sm:text-sm lg:text-base font-normal">
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
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Target Logos Container */}
        <div className="text-center lg:text-left">
          <span className="block text-stone-500 text-xs font-normal tracking-wide mb-4">
            Best for
          </span>
          <div className="flex flex-wrap items-center justify-center lg:justify-start">
            <Image 
              src="/images/icon/logo.svg" 
              alt="Supported E-commerce & Target Platforms" 
              width={385} 
              height={54} 
              className="object-contain" 
            />
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
{/* ── SECTION: COMPARISON MATRIX ───────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
        See how we compare with others
      </h2>
      <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
        Proof why we are the best option for your use case
      </p>
    </div>

    {/* Comparison Matrix Table Wrapper */}
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="min-w-[700px] lg:min-w-full relative">
        <table className="w-full border-collapse text-center table-fixed relative z-10">
          <colgroup>
            <col className="w-[20%] text-left" />
            <col className="w-[16%]" />
            <col className="w-[16%]" />
            <col className="w-[16%]" /> {/* Highlighted TorchProxies Column */}
            <col className="w-[16%]" />
            <col className="w-[16%]" />
          </colgroup>

          <thead>
            <tr className="align-middle">
              <th className="pb-8 lg:pb-10"></th>

              <th className="pb-8 lg:pb-10 px-2">
                <div className="relative h-6 w-full max-w-[100px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                  <Image src="/images/table/1.png" alt="Bright Data Logo" fill className="object-contain" />
                </div>
              </th>

              <th className="pb-8 lg:pb-10 px-2">
                <div className="relative h-6 w-full max-w-[100px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                  <Image src="/images/table/2.png" alt="Oxylabs Logo" fill className="object-contain" />
                </div>
              </th>

              {/* Highlighted Column Header */}
              <th className="pb-8 lg:pb-10 px-2 relative">
                <div className="absolute top-[-16px] left-0 right-0 h-[calc(100%+380px)] bg-[#0c0c0e] border border-stone-800/80 rounded-2xl z-0 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.6)]" />
                <div className="relative h-6 w-full max-w-[110px] mx-auto opacity-100 transition z-10">
                  <Image src="/images/table/torchproxies.png" alt="TorchProxies Logo" fill className="object-contain" />
                </div>
              </th>

              <th className="pb-8 lg:pb-10 px-2">
                <div className="relative h-6 w-full max-w-[100px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                  <Image src="/images/table/3.png" alt="Proxy Empire Logo" fill className="object-contain" />
                </div>
              </th>

              <th className="pb-8 lg:pb-10 px-2">
                <div className="relative h-6 w-full max-w-[100px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                  <Image src="/images/table/4.png" alt="Node Maven Logo" fill className="object-contain" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="align-middle">
                <td className="py-4 lg:py-5 px-2 text-left text-stone-300 text-xs sm:text-sm font-medium">
                  {row.metric}
                </td>
                <td className="py-4 lg:py-5 px-2 text-stone-400 text-xs sm:text-sm">
                  {renderCellContent(row.brightData)}
                </td>
                <td className="py-4 lg:py-5 px-2 text-stone-400 text-xs sm:text-sm">
                  {renderCellContent(row.oxylabs)}
                </td>
                
                {/* TorchProxies Content Cell */}
                <td className="py-4 lg:py-5 px-2 text-white text-xs sm:text-sm font-medium relative z-10">
                  {renderCellContent(row.torchProxies, true)}
                </td>

                <td className="py-4 lg:py-5 px-2 text-stone-400 text-xs sm:text-sm">
                  {renderCellContent(row.proxyEmpire)}
                </td>
                <td className="py-4 lg:py-5 px-2 text-stone-400 text-xs sm:text-sm">
                  {renderCellContent(row.nodeMaven)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>
</section>
{/* ── SECTION: INTERACTIVE CTA BANNER ────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <div
      className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-stone-800/60"
      style={{
        background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)',
      }}
    >
      {/* Subtle overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-2xl sm:rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-tight">
          Join teams that scrape websites without getting blocked
        </h2>

        {/* Subtitle */}
        <p className="text-stone-300 text-xs sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Avoid blocks, retries and wasted data by using hybrid proxies built for steady, large-scale web scraping on both protected and open websites.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => router.push('https://dashboard.torchproxies.com/')}
            className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
          >
            {/* 3D text track wrapper */}
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
              {/* Default State Text */}
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                Start free with 1GB
              </span>

              {/* Hover State Text */}
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                Start free with 1GB
              </span>
            </div>
          </button>
        </div>

        {/* Inline Feature Checklist */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center text-xs sm:text-sm text-stone-200 font-normal">
          {[
            'No Credit Card Required',
            'Set up in minutes',
            'Works in 195+ countries',
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#FF4F00] shrink-0 stroke-[3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
{/* ── SECTION: FAQ (ACCORDION) ─────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] relative overflow-hidden">

  {/* Full-Bleed Middle-Bottom Background Layer */}
  <div className="absolute inset-x-0 bottom-0 h-[450px] z-0 pointer-events-none select-none">
    <Image
      src="/images/contact-bg.png"
      alt=""
      fill
      priority
      className="object-cover object-bottom opacity-100"
    />
  </div>

  {/* Content Wrapper */}
  <div className="max-w-4xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-10 sm:mb-16">
      <span className="text-[#FF4F00] text-xs font-semibold tracking-widest uppercase block mb-3">
        FAQ
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
        Frequently asked questions
      </h2>
    </div>

    {/* FAQ Items Accordion */}
    <div className="space-y-px">
      {faqData.map((faq, index) => {
        const isOpen = activeFaq === index;
        return (
          <div
            key={index}
            className="border-b border-stone-800/80 last:border-none group transition-colors duration-200"
          >
            <button
              onClick={() => setActiveFaq(isOpen ? null : index)}
              className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-4 text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors cursor-pointer"
            >
              <span className="pr-2">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#FF4F00]' : 'group-hover:text-stone-300'
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[2000px] pb-6 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-4 pt-1">
                {faq.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    {item.step ? (
                      <span className="bg-[#FF4F00] text-white text-xs font-bold w-6 h-6 sm:w-7 sm:h-7 rounded-full shrink-0 flex items-center justify-center mt-0.5">
                        {item.step}
                      </span>
                    ) : item.label ? (
                      <span
                        className={`${
                          item.color ?? 'bg-stone-800'
                        } text-white text-[11px] font-bold px-2.5 py-1 rounded-md shrink-0 tracking-wide min-w-[85px] sm:min-w-[90px] text-center mt-0.5`}
                      >
                        {item.label}
                      </span>
                    ) : null}

                    <div className="flex-1">
                      {item.title && (
                        <p className="text-stone-300 font-semibold text-xs sm:text-sm mb-1">
                          {item.title}
                        </p>
                      )}
                      <p className="text-stone-400 text-xs sm:text-sm font-normal leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Bottom Gradient Overlay */}
  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />
</section>

        </div>
    );
}

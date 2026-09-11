"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Database, RefreshCw, Layers } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Plan {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
}

const plans: Plan[] = [
  { name: "FREE", price: { monthly: "$0", yearly: "$0" } },
  { name: "BASIC", price: { monthly: "$100", yearly: "$80" } },
  { name: "PREMIUM", price: { monthly: "$160", yearly: "$130" } },
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
  {
    title: "Pay-as-You-Go Billing for Proxies",
    free: "Add credits first",
    basic: "Pay end of month",
    premium: "Pay end of month",
  },
  {
    title: "Seamless Integration with Porter Proxies Data Center & ISP API",
    free: false,
    basic: true,
    premium: true,
  },
  {
    title: "Custom Proxy Pool Configurations",
    free: false,
    basic: false,
    premium: true,
  },
  {
    title: "Untraceable Proxy Masking",
    free: "Add on",
    basic: "10 Add on - 25% discount",
    premium: "Add on - free setup",
  },
  {
    title: "Remove Torch Labs Branding",
    free: false,
    basic: false,
    premium: "Add on - 40$/M",
  },
  {
    title: "Pre-configured Residential Proxy APIs with Free Whitelabeling",
    free: true,
    basic: true,
    premium: true,
  },
  {
    title: "Advanced Chargeback Protection Mechanism",
    free: false,
    basic: true,
    premium: true,
  },
  {
    title: "Fully White Label the Dashboard with Your Domain",
    free: false,
    basic: "Free one time",
    premium: "Unlimited",
  },
  {
    title: "Theme Customization Options for Personalized Branding",
    free: "Free one time",
    basic: "Free one time",
    premium: "Unlimited",
  },
  {
    title: "Additional Team Member Seats",
    free: false,
    basic: false,
    premium: true,
  },
  {
    title: "Restrict Dashboard Access Using Discord Server Membership or Role",
    free: false,
    basic: true,
    premium: true,
  },

  // Block 2
  {
    title: "Pay-as-You-Go Billing for Proxies",
    free: "Add credits first",
    basic: "Pay end of month",
    premium: "Pay end of month",
  },
  {
    title: "Seamless Integration with Porter Proxies Data Center & ISP API",
    free: false,
    basic: true,
    premium: true,
  },
  {
    title: "Custom Proxy Pool Configurations",
    free: false,
    basic: false,
    premium: true,
  },
  {
    title: "Untraceable Proxy Masking",
    free: "Add on",
    basic: "10 Add on - 25% discount",
    premium: "Add on - free setup",
  },
  {
    title: "Remove TorchProxies Branding",
    free: false,
    basic: false,
    premium: "Add on - 40$/M",
  },
  {
    title: "Pre-configured Residential Proxy APIs with Free Whitelabeling",
    free: true,
    basic: true,
    premium: true,
  },
  {
    title: "Advanced Chargeback Protection Mechanism",
    free: false,
    basic: true,
    premium: true,
  },
  {
    title: "Fully White Label the Dashboard with Your Domain",
    free: false,
    basic: "Free one time",
    premium: "Unlimited",
  },
  {
    title: "Theme Customization Options for Personalized Branding",
    free: "Free one time",
    basic: "Free one time",
    premium: "Unlimited",
  },
  {
    title: "Additional Team Member Seats",
    free: false,
    basic: false,
    premium: true,
  },
  {
    title: "Restrict Dashboard Access Using Discord Server Membership or Role",
    free: false,
    basic: true,
    premium: true,
  },

  // Block 3
  {
    title: "Pay-as-You-Go Billing for Proxies",
    free: "Add credits first",
    basic: "Pay end of month",
    premium: "Pay end of month",
  },
  {
    title: "Seamless Integration with Porter Proxies Data Center & ISP API",
    free: false,
    basic: true,
    premium: true,
  },
  {
    title: "Custom Proxy Pool Configurations",
    free: false,
    basic: false,
    premium: true,
  },
  {
    title: "Untraceable Proxy Masking",
    free: "Add on",
    basic: "10 Add on - 25% discount",
    premium: "Add on - free setup",
  },
  {
    title: "Remove TorchProxies Branding",
    free: false,
    basic: false,
    premium: "Add on - 40$/M",
  },
  {
    title: "Pre-configured Residential Proxy APIs with Free Whitelabeling",
    free: true,
    basic: true,
    premium: true,
  },
  {
    title: "Advanced Chargeback Protection Mechanism",
    free: false,
    basic: true,
    premium: true,
  },
  {
    title: "Fully White Label the Dashboard with Your Domain",
    free: false,
    basic: "Free one time",
    premium: "Unlimited",
  },
  {
    title: "Theme Customization Options for Personalized Branding",
    free: "Free one time",
    basic: "Free one time",
    premium: "Unlimited",
  },
  {
    title: "Additional Team Member Seats",
    free: false,
    basic: false,
    premium: true,
  },
  {
    title: "Restrict Dashboard Access Using Discord Server Membership or Role",
    free: false,
    basic: true,
    premium: true,
  },
];

interface FeatureItem {
  title: string;
  desc: string;
}

const features: FeatureItem[] = [
  {
    title: "Device Fingerprinting Beyond IPs",
    desc: "Ad platforms analyze Canvas, WebGL, audio context, and font rendering. Headless browsers and automation leave fingerprints real users don't",
  },
  {
    title: "Behavioral Signal Analysis",
    desc: "Real users scroll, pause, hesitate, and browse naturally. Verification bots generate perfect timing and zero interaction, instant detection.",
  },
  {
    title: "IP Reputation & ASN Databases",
    desc: "Google Ads and Meta cross-check IPs against MaxMind, IPQualityScore, and internal ASN lists. Datacenter are flagged in real time.",
  },
];

interface ProxyCard {
  title: string;
  description: string;
  price: string;
  badge?: {
    text: string;
    variant: "popular" | "enterprise";
  };
  iconType: string;
  features: string[];
}

const proxyCards: ProxyCard[] = [
  {
    title: "Hybrid Proxies",
    description:
      "Built to operate reliably on sites with advanced bot detection and strict traffic controls.",
    price: "$5/GB",
    badge: { text: "Most Popular", variant: "popular" },
    iconType: "/images/hp.svg",
    features: [
      "Built for Cloudflare, Akamai & PerimeterX",
      "99%+ success rates on protected sites",
      "Ideal for 24/7 high-frequency monitoring",
      "Handles large catalogs (10,000+ products) reliably",
      "20–50× better ROI than datacenter proxies (retries included)",
    ],
  },
  {
    title: "Premium Residential Proxies",
    description:
      "Designed for simpler environments and steady monitoring as you scale.",
    price: "$4.5/GB",
    badge: { text: "For Startups", variant: "enterprise" },
    iconType: "/images/pr.svg",
    features: [
      "Real residential IPs for non-Cloudflare sites",
      "Perfect for regional retailers & marketplaces",
      "Designed for first-time price monitoring setups",
      "Reliable for 100–5,000 products",
      "Simple setup with automatic rotation",
    ],
  },
];

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
    metric: "Price",
    brightData: "$8 per GB",
    oxylabs: "$8 per GB",
    torchProxies: "$4 per GB",
    proxyEmpire: "$4 per GB",
    nodeMaven: "$4 per GB",
  },
  {
    metric: "Pool Size",
    brightData: "150M+ IPs",
    oxylabs: "175M+ IPs",
    torchProxies: "120M IPs",
    proxyEmpire: "29.5M+ IPs",
    nodeMaven: "30M+ IPs",
  },
  {
    metric: "Countries",
    brightData: "195 Countries",
    oxylabs: "195+ Countries",
    torchProxies: "195+ Countries",
    proxyEmpire: "170+ Countries",
    nodeMaven: "195+ Countries",
  },
  {
    metric: "Minimum Purchase",
    brightData: "Pay as you go\n(No Minimum)",
    oxylabs: "Pay as you go\n(5GB Min)",
    torchProxies: "Pay as you go\n(No Minimum)",
    proxyEmpire: "Pay as you go\n(No Minimum)",
    nodeMaven: "Pay as you go\n(9 GB Minimum)",
  },
  {
    metric: "Free Trial",
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
    isDimmed: i >= 30,
  }));
  const locations = [
    { code: "US", name: "United States", ips: "4,429,824" },
    { code: "GB", name: "United Kingdom", ips: "1,449,139" },
    { code: "DE", name: "Germany", ips: "1,431,960" },
    { code: "AU", name: "Australia", ips: "452,720" },
    { code: "CA", name: "Canada", ips: "815,658" },
    { code: "MX", name: "Mexico", ips: "4,429,824" },
    { code: "CN", name: "China", ips: "4,429,824" },
    { code: "FR", name: "France", ips: "4,429,824" },
  ];

  const pricingData = {
    "1GB": { price: "$4.00", total: "$4.00", perGb: "$4/GB" },
    "5GB": {
      price: "$3.80",
      total: "$19.00",
      perGb: "$3.80/GB",
      popular: true,
    },
    "25GB": { price: "$3.50", total: "$87.50", perGb: "$3.50/GB" },
    "100GB": { price: "$3.00", total: "$300.00", perGb: "$3.00/GB" },
    "500GB": { price: "$2.50", total: "$1,250.00", perGb: "$2.50/GB" },
    "1000GB": { price: "$2.00", total: "$2,000.00", perGb: "$2.00/GB" },
  };
  const [selectedPlan, setSelectedPlan] = useState("1GB");

  // Hardcoded pricing tiers matching the design exactly
  const tiers = [
    { id: "1GB", size: "5 ISP", price: "$ 2.4", discount: "0% OFF" },
    { id: "5GB", size: "25 ISP", price: "$ 2.3", discount: "4.17% OFF" },
    { id: "25GB", size: "50 ISP", price: "$ 2.3", discount: "4.17% OFF" },
    { id: "100GB", size: "100 ISP", price: "$ 2.3", discount: "4.17% OFF" },
    { id: "500GB", size: "200 ISP", price: "$ 2.3", discount: "4.17% OFF" },
    { id: "1000GB", size: "254 ISP", price: "$ 2.3", discount: "4.17% OFF" },
  ];
  const features = [
    {
      icon: <Database className="text-white w-4 h-4" />,
      title: "TLS Fingerprinting Flags You Instantly",
      desc: "Anti-bot systems inspect your connection the moment it starts. Datacenter proxies use server-grade TLS patterns that stand out before your first request even completes.",
    },
    {
      icon: <RefreshCw className="text-white w-4 h-4" />,
      title: "Datacenter IPs Are Already Blacklisted ",
      desc: "Major platforms rely on IP reputation databases. Most datacenter networks are pre-flagged, so entire IP ranges get blocked not just individual addresses.",
    },
    {
      icon: <Layers className="text-white w-4 h-4" />,
      title: "Bot Behavior Still Gives You Away",
      desc: "Perfect timing, no browser cache, and repeatable patterns signal automation. Even with rotation, most datacenter setups fail after a few requests.",
    },
  ];
  const useCases = [
    "Social Media",
    "Web Scraping",
    "Gaming",
    "Online Market",
    "Sneaker",
  ];
  const [activeTab, setActiveTab] = useState<"premium" | "planX">("premium");

  const reviews = [
    {
      name: "Black Bear",
      role: "Verified Customer",
      text: "If you are buy proxies anywhere you should buy them here. Nice guys who work hard. Communication is good and there is always help where needed. Can't recommend a better company for proxies.",
      stars: 5,
      avatar: null, // Path to your custom pixel bear photo
    },
    {
      name: "Ishak",
      role: "Verified Customer",
      text: "Torchlabs offers a fantastic proxy service at a very competitive price. The connection speeds are fast, and the service is incredibly reliable. I've had a positive experience with their customer support as well.",
      stars: 5,
      initials: "IS", // Fallback for a soft green initial circle
      avatar: null,
    },
    {
      name: "Edith Shamaiah",
      role: "Verified Customer",
      text: "Best proxies in the market! Top notch customer experience!",
      stars: 4,
      initials: "E", // Fallback for a purple initial circle
      avatar: null,
    },
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

  const faqData = [
    {
      q: "What are the best proxies for price monitoring?",
      items: [
        {
          label: "BEST",
          color: "bg-teal-500",
          text: "Rotating Residential Proxies — Real ISP IPs, highest anonymity. Ideal for Amazon, eBay, and Cloudflare-protected stores. Higher cost per GB.",
        },
        {
          label: "FAST",
          color: "bg-cyan-500",
          text: "Rotating Datacenter Proxies — Fastest speeds, lowest cost. Best for general e-commerce and unprotected product feeds. Easier to detect.",
        },
        {
          label: "HYBRID",
          color: "bg-amber-500",
          text: "ISP / Static Residential Proxies — Datacenter infrastructure + residential IP registration. Strong balance of speed, cost, and trust.",
        },
      ],
    },
    {
      q: "How do I avoid CAPTCHAs while tracking prices",
      items: [
        {
          label: "KEY",
          color: "bg-teal-500",
          text: "Rotate IPs per request — Use a residential proxy pool that automatically assigns a new IP for every request or session, making each visit look unique.",
        },
        {
          label: "ESENTIAL",
          color: "bg-cyan-500",
          text: "Randomize request timing — Introduce variable delays (2–8 seconds) between requests to mimic human browsing behaviour and avoid rate-limiting triggers.",
        },
        {
          label: "ADVANCED",
          color: "bg-amber-500",
          text: "Spoof browser fingerprints — Rotate realistic User-Agent headers, accept-language settings, and viewport sizes. Use a headless browser (e.g. Playwright) for JS-heavy sites.",
        },
        {
          label: "CLOUDFLARE",
          color: "bg-red-500",
          text: "Target Cloudflare-protected sites? — Use proxy providers with built-in Cloudflare bypass or a dedicated web unblocker / scraping API endpoint for reliable access.",
        },
      ],
    },
    {
      q: "Why do I need proxies for price monitoring",
      items: [
        {
          label: "SCALE",
          color: "bg-teal-500",
          text: "Monitor thousands of SKUs simultaneously without hitting rate limits, enabling real-time competitive intelligence across entire product catalogues.",
        },
        {
          label: "ACCESS",
          color: "bg-cyan-500",
          text: "Access geo-restricted pricing — Proxies with country-specific IP pools let you see localised prices, regional promotions, and market-specific discounts.",
        },
        {
          label: "ACCURACY",
          color: "bg-amber-500",
          text: "Get true pricing data — Without proxies, sites may detect bots and serve misleading prices or block access entirely, corrupting your competitive data.",
        },
      ],
    },
    {
      q: "Is using proxies for price monitoring legal",
      items: [
        {
          label: "OK",
          color: "bg-teal-500",
          text: "Scraping publicly visible prices, product names, and availability data for competitive intelligence or repricing purposes.",
        },
        {
          label: "AVOID",
          color: "bg-red-500",
          text: "Bypassing login walls, scraping personal data, violating a site's robots.txt directives, or systematically overloading a server (DDoS-like behaviour).",
        },
      ],
    },
  ];
  const BRAND_LOGOS = [
    { name: "Shield Proxies", src: "/images/business/shield.png" },
    { name: "Boiling Proxies", src: "/images/business/boiling.png" },
    { name: "Sugar Proxies", src: "/images/business/sugar.png" },
    { name: "Malice Proxies", src: "/images/business/malke.png" },
    { name: "Proxify.gg", src: "/images/business/proxify.png" },
  ];
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  // Custom logic to swap true/false variables out for exact vector SVGs
  const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        // Circular Orange Check Icon
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full bg-[#FF4F00] flex items-center justify-center text-black">
            <svg
              className="w-3 h-3 stroke-[3.5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      ) : (
        // Circular Dimmed Cross Close Icon
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600">
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      );
    }

    // Fallback string printing for dynamic descriptors
    return (
      <span className="text-zinc-400 text-[13px] tracking-wide font-normal">
        {val}
      </span>
    );
  };

  // The exact words cycled in the video
  const words = [
    "Amazon",
    "eBay",
    "Shopify",
    "Walmart",
    "Target",
    "Best Buy",
    "Alibaba",
    "Booking.com",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    // 1. Set up an interval to trigger the fade-out right before switching words
    const fadeTimeout = setTimeout(() => {
      setFadeState("fade-out");
    }, 2000); // Word stays visible for 2 seconds

    const changeWordTimeout = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setFadeState("fade-in");
    }, 2300); // 300ms transition delay to finish fading out

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(changeWordTimeout);
    };
  }, [currentWordIndex]);

  // Custom helper to render text lines, checkmarks, or X marks
  const renderCellContent = (
    value: string | boolean,
    isHighlighted = false,
  ) => {
    if (typeof value === "boolean") {
      return (
        <div className="relative w-5 h-5 mx-auto">
          {value ? (
            // Replace with your true/checkmark asset path
            <Image
              src="/images/check.svg"
              alt="Yes"
              fill
              className="object-contain"
            />
          ) : (
            // Replace with your false/cross asset path
            <Image
              src="/images/cross.svg"
              alt="No"
              fill
              className="object-contain"
            />
          )}
        </div>
      );
    } // <--- This closes the 'if' block

    // Fallback block: This handles string values (e.g., "$8 per GB") cleanly
    return (
      <span
        className={`text-[13px] whitespace-pre-line tracking-wide font-normal leading-relaxed ${
          isHighlighted ? "text-zinc-300" : "text-zinc-500"
        }`}
      >
        {value}
      </span>
    );
  }; // <--- FIXED: Added this closing brace to finalize the function body

  return (
    <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist'] ">
      {/* ── HERO SECTION: PRICE MONITORING PROXIES ─────────────────── */}
      <section className="relative bg-[#0a0a0a] text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* --- LEFT COLUMN: CONTENT & CALL TO ACTION --- */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 order-2 lg:order-1">
            {/* Trustpilot Badge Block */}
            <div className="flex items-center mb-6">
              <a
                href="https://www.trustpilot.com/review/torchlabs.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-opacity hover:opacity-90"
              >
                <img
                  src="/images/TrustPiolet.png"
                  alt="Excellent 5-star rating on Trustpilot"
                  className="h-7 sm:h-8 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] text-white mb-4">
              Best Proxies for Price Monitoring
            </h1>

            {/* Subheading with Dynamic Animated Word */}
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
              Scrape{" "}
              <span
                className={`text-[#FE4A01] font-medium inline-block transition-all duration-300 transform ${
                  fadeState === "fade-in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                {words[currentWordIndex]}
              </span>{" "}
              prices without getting blocked
            </p>

            {/* Features Inline List */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mb-8 sm:mb-10 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#FE4A01] stroke-[3] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Real-Time Price Accuracy</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#FE4A01] stroke-[3] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>99% Success Rates</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#FE4A01] stroke-[3] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>120M+ IPs Across 195 Countries</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() =>
                  router.push("https://dashboard.torchproxies.com/")
                }
                className="cursor-pointer group relative w-full sm:w-60 h-[52px] sm:h-[56px] overflow-hidden bg-[#FE4A01] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(254,74,1,0.25)] hover:shadow-[0_0_35px_rgba(254,74,1,0.6)] hover:scale-[1.02] active:scale-[0.99]"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                    Try Now
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90 text-sm sm:text-base">
                    Try Now
                  </span>
                </div>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  document
                    .getElementById("pricing-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer group relative w-full sm:w-60 h-[52px] sm:h-[56px] overflow-hidden bg-transparent border border-stone-800 hover:border-stone-600 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]"
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

          {/* --- RIGHT COLUMN: MAIN HERO IMAGE --- */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full order-1 lg:order-2">
            {/* Ambient Orange Background Glow */}
            <div
              className="absolute w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] bg-[#FE4A01]/15 rounded-full blur-[80px] pointer-events-none select-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/3]">
              <Image
                src="/images/best_proxies.png"
                alt="Proxy Network Infrastructure Price Monitoring Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: ANTI-BOT FEATURES ──────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER SECTION --- */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
              Stop Getting Blocked on Amazon &amp; Walmart
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              Amazon and Walmart run enterprise-grade anti-bot systems built to
              detect and block datacenter proxies almost instantly.
            </p>
          </div>

          {/* --- FEATURES GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left group"
              >
                {/* Icon Badge Container */}
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800/80 flex items-center justify-center mb-5 p-2 transition-colors duration-200 group-hover:border-[#FE4A01]/40">
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
                <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-zinc-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: WHY CHEAP PROXIES COST MORE ──────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="relative group order-1">
              <div className="bg-[#0d0d0d] border border-stone-800/80 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="bg-[#050505] rounded-xl sm:rounded-2xl border border-stone-900/50 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/cheap_proxies.png"
                    alt="Why cheap proxies cost you more"
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6 order-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                Why “Cheap” Proxies Cost You More
              </h2>

              <div className="space-y-5 pt-2">
                {/* Point 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-stone-200 mb-1.5 flex items-center gap-2">
                    <span className="text-[#FE4A01] font-bold">—</span>
                    <span>Poisoned Price Data</span>
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm lg:text-base leading-relaxed pl-5">
                    If you scrape a CAPTCHA page or regional redirect instead of
                    the real price, your repricer can push prices to $0 or spike
                    them to unrealistic levels.
                  </p>
                </div>

                {/* Point 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-stone-200 mb-1.5 flex items-center gap-2">
                    <span className="text-[#FE4A01] font-bold">—</span>
                    <span>Missed Flash Sales</span>
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm lg:text-base leading-relaxed pl-5">
                    Seconds matter. While you're retrying failed requests
                    through a burnt IP pool, your competitors are already
                    checking out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: SOLUTIONS HEADER ───────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Eyebrow Tag */}
          <span className="text-[#FE4A01] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-2 sm:mb-3">
            Solutions
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            Our Price Monitoring Solutions
          </h2>

          {/* Subheading / Description */}
          <p className="text-stone-400 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
            We offer two proxy solutions optimized for different price
            monitoring needs and data accuracy requirements. Choose based on
            your product volume, budget, and tolerance for missing or delayed
            price updates.
          </p>
        </div>
      </section>
      {/* ── SECTION: HYBRID PROXIES ─────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                Hybrid Proxies Built for Strict Detection Systems
              </h2>

              <p className="text-stone-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                Built for environments where traffic is actively analyzed and
                blocked if it doesn’t look real.
              </p>

              {/* Feature Points List */}
              <ul className="space-y-2.5 text-stone-300 text-xs sm:text-sm lg:text-base pt-1">
                {[
                  "Best for sites with advanced anti-bot protection (Cloudflare, Akamai, PerimeterX)",
                  "Ideal for high-frequency, accuracy-critical monitoring where blocks are costly",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FE4A01] font-bold select-none shrink-0">
                      —
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Side */}
            <div className="relative group order-1 lg:order-2">
              <div className="bg-[#0d0d0d] border border-stone-800/80 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="bg-[#050505] rounded-xl sm:rounded-2xl border border-stone-900/50 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/hybrid_proxies_built.png"
                    alt="Hybrid Proxies Built for Strict Detection Systems"
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: PREMIUM PROXIES ────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="relative group order-1">
              <div className="bg-[#0d0d0d] border border-stone-800/80 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="bg-[#050505] rounded-xl sm:rounded-2xl border border-stone-900/50 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/premium_proxies.png"
                    alt="Premium Proxies for Easier Monitoring Targets"
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-4 sm:space-y-6 order-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                Premium Proxies for Easier Monitoring Targets
              </h2>

              <p className="text-stone-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                Designed for reliable monitoring on sites with lighter
                enforcement and predictable behavior.
              </p>

              {/* Feature Points List */}
              <ul className="space-y-2.5 text-stone-300 text-xs sm:text-sm lg:text-base pt-1">
                {[
                  "Best for sites without advanced anti-bot protection (eBay, AliExpress, Etsy, Craigslist)",
                  "Ideal for getting started and scaling steadily without extra overhead",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FE4A01] font-bold select-none shrink-0">
                      —
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: PRICING / PROXY OPTIONS ───────────────────────── */}
      <section
        id="pricing-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER --- */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              The Right Proxies for Price Monitoring
            </h2>
            <p className="text-zinc-400 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
              Choose the right proxy based on whether your target sites use
              advanced anti-bot protection and how large your monitoring scale
              is.
            </p>
          </div>

          {/* --- CARDS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {proxyCards.map((card, index) => (
              <div
                key={index}
                className="relative bg-[#0d0d0d] border border-stone-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-stone-700/80 shadow-2xl"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-stone-900 border border-stone-800/80 flex items-center justify-center p-2.5 relative overflow-hidden shrink-0">
                      <Image
                        src={card.iconType}
                        alt={`${card.title} Icon`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Context-Specific Badge */}
                    {card.badge && (
                      <span
                        className={`text-[11px] font-medium tracking-wide px-3 py-1 rounded-md ${
                          card.badge.variant === "popular"
                            ? "bg-[#002B1B] text-[#00B67A] border border-[#00B67A]/30"
                            : "bg-[#1C1600] text-[#FFB800] border border-[#FFB800]/30"
                        }`}
                      >
                        {card.badge.text}
                      </span>
                    )}
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Pricing Block */}
                  <div className="flex items-baseline gap-2 mb-6 sm:mb-8 pb-6 border-b border-stone-800/60">
                    <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                      {card.price}
                    </span>
                    <span className="text-stone-500 text-xs sm:text-sm">
                      per month
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-3 sm:space-y-4 mb-8">
                    {card.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-stone-300 text-xs sm:text-sm lg:text-base leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 text-[#FE4A01] shrink-0 mt-1 stroke-[2.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() =>
                      router.push("https://dashboard.torchproxies.com/")
                    }
                    className="group relative w-full h-12 sm:h-14 overflow-hidden bg-[#FE4A01] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(254,74,1,0.25)] hover:shadow-[0_0_35px_rgba(254,74,1,0.5)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                        Try risk free now
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90 text-sm sm:text-base">
                        Try risk free now
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: COMPARISON MATRIX ─────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* --- HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              See How We Compare With Others
            </h2>
            <p className="text-stone-400 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
              Proof why we are the best option for your use case
            </p>
          </div>

          {/* --- COMPARISON MATRIX CONTAINER --- */}
          <div className="w-full overflow-x-auto scrollbar-none pb-4">
            <div className="min-w-[768px] relative w-full">
              <table className="w-full border-collapse text-center table-fixed relative z-10">
                <colgroup>
                  <col className="w-[20%] text-left" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />{" "}
                  {/* TorchProxies Highlighted Column */}
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                </colgroup>

                <thead>
                  <tr className="align-middle">
                    <th className="pb-8 sm:pb-10"></th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-5 sm:h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/1.png"
                          alt="Bright Data Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-5 sm:h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/2.png"
                          alt="Oxylabs Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </th>

                    {/* ── Highlighted Column Header ── */}
                    <th className="pb-8 sm:pb-10 px-1 relative">
                      <div className="absolute top-[-16px] left-0 right-0 h-[calc(100%+100%)] sm:h-[calc(100%+380px)] bg-[#0d0d0d] border border-stone-800/80 rounded-2xl z-0 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.6)]" />

                      <div className="relative h-5 sm:h-6 w-full max-w-[120px] mx-auto opacity-100 transition z-10">
                        <Image
                          src="/images/table/torchproxies.png"
                          alt="TorchProxies Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-5 sm:h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/3.png"
                          alt="Proxy Empire Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-5 sm:h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/4.png"
                          alt="Node Maven Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="align-middle border-b border-stone-900/40 last:border-b-0"
                    >
                      <td className="py-4 sm:py-5 px-1 text-left text-stone-300 text-xs sm:text-sm font-medium">
                        {row.metric}
                      </td>
                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm">
                        {renderCellContent(row.brightData)}
                      </td>
                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm">
                        {renderCellContent(row.oxylabs)}
                      </td>

                      {/* ── TorchProxies Content Cell ── */}
                      <td className="py-4 sm:py-5 px-1 text-white text-xs sm:text-sm font-medium relative z-10">
                        {renderCellContent(row.torchProxies, true)}
                      </td>

                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm">
                        {renderCellContent(row.proxyEmpire)}
                      </td>
                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm">
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

      {/* ── SECTION: INTERACTIVE CTA BANNER ─────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-stone-800/80 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(254, 74, 1, 0.25) 0%, #0a0a0a 35%, #0a0a0a 65%, rgba(254, 74, 1, 0.25) 100%)",
            }}
          >
            {/* Subtle overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Main Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 sm:mb-6 text-white leading-tight">
                Stop Losing Data. Start Monitoring Reliably
              </h2>

              {/* Subtitle */}
              <p className="text-stone-300 text-xs sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                Join 200+ data teams who switched to TorchProxies for their
                critical e-commerce intelligence.
              </p>

              {/* Action Button Container */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10">
                <button
                  onClick={() =>
                    router.push("https://dashboard.torchproxies.com/")
                  }
                  className="group relative w-full sm:w-64 h-12 sm:h-14 overflow-hidden bg-[#FE4A01] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(254,74,1,0.25)] hover:shadow-[0_0_35px_rgba(254,74,1,0.5)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  {/* Rolling 3D Text Effect Wrapper */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    {/* Default State */}
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                      Try Now
                    </span>
                    {/* Hover State */}
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90 text-sm sm:text-base">
                      Try Now
                    </span>
                  </div>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-stone-300 font-normal">
                {[
                  "No Credit Card Required",
                  "Instant Setup",
                  "24/7 Support",
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#FE4A01] shrink-0 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              Customer Reviews
            </h2>
            <p className="text-stone-400 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
              See how developer engineering nodes rate our overall connectivity
              network performance.
            </p>
          </div>

          {/* Outer Infinite Slider Container Track */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-normal">
              {/* Render Primary + Duplicate Array Instance for Seamless Looping */}
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between bg-[#0d0d0d] border border-stone-800/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl min-w-[280px] max-w-[320px] sm:min-w-[340px] sm:max-w-[360px] md:min-w-[380px] h-[260px] sm:h-[280px] shrink-0 shadow-xl"
                >
                  <div>
                    {/* Review Title Header */}
                    <div className="text-white font-medium text-sm sm:text-base mb-2 tracking-tight line-clamp-1">
                      {review.text.split(".")[0]}
                    </div>

                    {/* Rating Component */}
                    <div className="mb-3">
                      <TrustpilotStars rating={review.stars} />
                    </div>

                    {/* Feedback Body Text */}
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed line-clamp-4 font-normal">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Client Avatar & Footer Metadata */}
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-800/60">
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
                            : "bg-[#7f9cf5] text-white"
                        }`}
                      >
                        {review.initials}
                      </div>
                    )}

                    <div className="flex flex-col min-w-0">
                      <span className="text-stone-200 font-semibold text-xs sm:text-sm tracking-tight truncate">
                        {review.name}
                      </span>
                      <span className="text-stone-500 text-[11px] sm:text-xs truncate">
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
      {/* ── SECTION: FAQ (ACCORDION) ────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] relative overflow-hidden">
        {/* Full-Bleed Background Layer */}
        <div className="absolute inset-x-0 bottom-0 h-[350px] sm:h-[450px] z-0 pointer-events-none select-none">
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
            <span className="text-[#FE4A01] text-xs font-semibold uppercase tracking-widest block mb-2 sm:mb-3">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-px">
            {faqData.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border-b border-stone-800/80 last:border-none group"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left py-4 sm:py-6 flex items-center justify-between text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#FE4A01]"
                          : "group-hover:text-stone-300"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] pb-4 sm:pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="space-y-3 pt-1">
                      {faq.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3"
                        >
                          <span
                            className={`${item.color} text-white text-[11px] font-bold px-2.5 py-1 rounded-md shrink-0 tracking-wide w-fit sm:min-w-[90px] text-center`}
                          >
                            {item.label}
                          </span>
                          <p className="text-stone-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Blend Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />
      </section>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Database, RefreshCw, Layers } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FaqItem = {
  text: string;
  label?: string;
  color?: string;
};

type FaqEntry = {
  q: string;
  items: FaqItem[];
};

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
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
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
  iconType: "residential" | "hybrid" | string;
  features: string[];
}

const proxyCards: ProxyCard[] = [
  {
    title: "Hybrid Proxies",
    description:
      "The easiest and most affordable way to monitor SEO rankings at small to mid scale",
    price: "$4/GB",
    badge: { text: "Most Popular", variant: "popular" },
    iconType: "/images/hybrid_proxies.png",
    features: [
      "95–97% success rates with minimal failed requests",
      "Most popular choice for SEO monitoring",
      "Predictable pricing for budget-conscious teams",
      "Track 5,000+ keywords daily affordably",
      "True local SEO accuracy in all locations",
    ],
  },
  {
    title: "Premium Residential Proxies",
    description:
      "Designed for enterprise SEO operations that need maximum success at massive scale.",
    price: "$5/GB",
    badge: { text: "For Startups", variant: "enterprise" },
    iconType: "/images/pr.svg",
    features: [
      "99% success rate for zero-tolerance operations",
      "Datacenter speed with residential authenticity",
      "Scale to 50,000–100,000+ keywords",
      "From $5/GB with non-expiring traffic",
      "Best price-performance at enterprise volume",
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

  const features = [
    {
      icon: <Database className="text-white w-4 h-4" />,
      title: "Datacenter ASN Blacklisting",
      desc: "Google automatically flags traffic from known hosting providers such as AWS, DigitalOcean, and Vultr. Requests from these ASNs are restricted or challenged before results are served.",
    },
    {
      icon: <RefreshCw className="text-white w-4 h-4" />,
      title: "Browser Fingerprinting Detection ",
      desc: "Google checks whether requests come from a real browser using Canvas, WebGL, and GUI-level signals. If the session lacks a genuine graphical browser signature, a CAPTCHA is triggered.",
    },
    {
      icon: <Layers className="text-white w-4 h-4" />,
      title: "Robotic Request Patterns",
      desc: "Sending queries at perfect intervals (e.g. every 5 seconds) or crawling large keyword lists sequentially signals automation and triggers ML based detection.",
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
      name: "Alex K.",
      role: "Lead Scraping Engineer",
      text: "Absolute game changer for parsing target inventory updates. The success parameters are consistently stable.",
    },
    {
      name: "Sarah M.",
      role: "DevOps Architect",
      text: "IP targeting is granular down to city targets. The latency levels are significantly lower than competitive alternatives.",
    },
    {
      name: "David L.",
      role: "Automated Data Analyst",
      text: "Top tier network infrastructure. The standard volume tier setups maintain premium speeds without bottleneck dropouts.",
    },
  ];

  type FaqItem = {
    text: string;
    label?: string;
    color?: string;
  };

  type FaqEntry = {
    q: string;
    items: FaqItem[];
  };

  const faqData: FaqEntry[] = [
    {
      q: "What are the best proxies for rank tracking?",
      items: [
        {
          text: "The best proxies for rank tracking are rotating residential proxies, specifically geo-targeted ones that return SERPs as a real user would see them in a specific country, city, or device type. Google, Bing, and Baidu aggressively detect and block automated queries from datacenter IPs, making residential proxies the only reliable option for accurate rank data.",
        },
      ],
    },

    {
      q: "How do I choose proxies for SEO monitoring?",
      items: [
        {
          label: "BEST",
          color: "bg-teal-500",
          text: "Rotating Residential Proxies — Ideal for tracking rankings on Google, Bing, Baidu, and Yahoo. Geo-target by country or city to simulate real local searches. Undetectable by anti-bot systems.",
        },
        {
          label: "HYBRID",
          color: "bg-cyan-500",
          text: "ISP (Static Residential) Proxies — Best for sustained rank-tracking crawls on Google Search Console data sources, DuckDuckGo, and Yandex. Combines residential trust with datacenter stability.",
        },
        {
          label: "BUDGET",
          color: "bg-amber-500",
          text: "Rotating Datacenter Proxies — Suitable for tracking rankings on Bing, Yahoo, Ask.com, and AOL Search, where detection is less aggressive. Not recommended for Google.",
        },
      ],
    },
    {
      q: "How do I scrape Google without getting blocked?",
      items: [
        {
          label: "STEP 1",
          color: "bg-teal-500",
          text: "Use rotating residential proxies only — Never use datacenter proxies for Google. Residential IPs from providers like Bright Data, Oxylabs, or Smartproxy are flagged far less frequently.",
        },
        {
          label: "STEP 2",
          color: "bg-teal-500",
          text: "Randomize request timing — Space requests 3–10 seconds apart with random variance. Never send requests at fixed intervals — Google's systems detect mechanical patterns instantly..",
        },
        {
          label: "STEP 2",
          color: "bg-teal-500",
          text: "Rotate User-Agent strings — Cycle through realistic browser UA strings (Chrome, Firefox, Safari across Windows, Mac, mobile) to avoid fingerprint consistency.",
        },
        {
          label: "STEP 2",
          color: "bg-teal-500",
          text: "Limit requests per session — Cap at 10–15 requests per IP per session before rotating. Exceeding this triggers CAPTCHA or soft bans on Google Search.",
        },
        {
          label: "STEP 2",
          color: "bg-teal-500",
          text: "Use a SERP API — Tools like SerpApi, Bright Data SERP API, DataForSEO, and Zenserp handle all proxy rotation, JS rendering, and CAPTCHA solving automatically. Ideal for high-volume scraping.",
        },
      ],
    },
    {
      q: "Should I use residential or dtacenter proxies for SEO monitoring?",
      items: [
        {
          label: "RESIDENTIAL",
          color: "bg-teal-500",
          text: "Use for: Google SERP scraping, rank tracking on Bing and Baidu, local SEO monitoring, Google Maps data collection, and scraping Google Shopping results. Required where anti-bot protection is high.",
        },
        {
          label: "DATACENTER",
          color: "bg-cyan-500",
          text: "Use for: Crawling competitor websites, bulk backlink checking via Majestic, Moz Link Explorer, scraping business directories like Yelp, Crunchbase, or Yellow Pages, and indexing sitemaps.",
        },
        {
          label: "ISP PROXIES",
          color: "bg-amber-500",
          text: "Best middle ground for: Sustained crawls with tools like Screaming Frog, Sitebulb, or DeepCrawl that run long sessions. Residential trust level + datacenter uptime and speed.",
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
    "Local Search Results",
    "Competitor Keywords",
    "SERP Features",
    "Google Rankings",
    "Backlinks",
    "Bing SERPs",
    "Ad Postitions",
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
      return value ? (
        // Green Checkmark
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
            <svg
              className="w-3.5 h-3.5 stroke-[3]"
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
        // Muted Gray X Mark
        <div className="flex justify-center">
          <div className="w-5 h-5 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-100">
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

    // Handles line breaks cleanly for text configurations
    return (
      <span
        className={`text-[13px] whitespace-pre-line tracking-wide font-normal leading-relaxed ${
          isHighlighted ? "text-zinc-300" : "text-zinc-500"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">
      {/* ── SECTION: HERO / SEO MONITORING ──────────────────────────── */}
      <section className="relative bg-[#0a0a0a] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-[100px] overflow-hidden font-['Urbanist']">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Content & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            {/* Trustpilot Badge */}
            <div className="mb-6">
              <a
                href="https://www.trustpilot.com/review/torchlabs.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-90 cursor-pointer"
              >
                <Image
                  src="/images/TrustPiolet.png"
                  alt="Excellent 5-star rating on Trustpilot"
                  width={140}
                  height={32}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.1] text-white mb-4">
              Best Proxies for SEO Monitoring
            </h1>

            {/* Dynamic Subheading */}
            <p className="text-stone-400 text-sm sm:text-base lg:text-lg mb-8 font-normal leading-relaxed select-none max-w-xl">
              Scrape{" "}
              <span
                className={`text-[#FF4F00] font-medium inline-block transition-all duration-300 transform ${
                  fadeState === "fade-in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1"
                }`}
              >
                {words[currentWordIndex]}
              </span>{" "}
              rankings without getting blocked
            </p>

            {/* Key Feature Highlights */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mb-8 text-xs sm:text-sm text-stone-300 font-normal">
              {[
                "Undetectable SERP Scraping",
                "120M+ IPs Across 195 Countries",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#FF4F00] shrink-0 stroke-[3]"
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
                </div>
              ))}
            </div>

            {/* Action Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              {/* Primary CTA Button */}
              <button
                onClick={() =>
                  router.push("https://dashboard.torchproxies.com/")
                }
                className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                    Try Now
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                    Try Now
                  </span>
                </div>
              </button>

              {/* Secondary Outline Button */}
              <button
                onClick={() => {
                  document
                    .getElementById("pricing-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96] cursor-pointer"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                    View Pricing
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white">
                    View Pricing
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Artwork */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            {/* Glow Backdrop */}
            <div
              className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] bg-[#FF4F00]/15 rounded-full blur-[80px] pointer-events-none select-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[480px] aspect-[4/3]">
              <Image
                src="/images/seo_monitoring.png"
                alt="Proxy Network Infrastructure SEO Monitoring Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ── SECTION: RANK TRACKER PROBLEMS GRID ──────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              Why Your Rank Tracker Keeps Getting Flagged
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal max-w-3xl mx-auto leading-relaxed">
              Google’s latest SERP protection systems are designed to detect and
              throttle automated rank tracking even at low volumes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center relative mb-4 sm:mb-5 bg-stone-900/50 border border-stone-800/60">
                  <Image
                    src="/images/icon/Flame.svg"
                    alt="Flame Icon"
                    width={20}
                    height={20}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Feature Title */}
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-stone-400 text-xs sm:text-sm font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── SECTION: WHY CAPTCHA COSTS YOU MORE ────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="relative group order-2 lg:order-1">
              <div className="bg-[#0d0d0d] rounded-3xl p-3 border border-stone-800/60 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="bg-[#050505] rounded-2xl overflow-hidden relative aspect-[4/3] w-full flex items-center justify-center">
                  <Image
                    src="/images/Why_CAPTCHA.png"
                    alt="Why CAPTCHA Detection Costs You More"
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 order-1 lg:order-2 text-left">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Why CAPTCHA Detection Costs You More
              </h2>

              <div className="space-y-6 pt-2">
                {/* Item 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-stone-200 mb-2">
                    Poisoned Ranking Data
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm font-normal leading-relaxed">
                    When traffic is detected, Google serves bot-altered SERPs.
                    SEO decisions are then based on rankings real users never
                    see.
                  </p>
                </div>

                {/* Item 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-stone-200 mb-2">
                    Incomplete SEO Visibility
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm font-normal leading-relaxed">
                    Blocked or throttled requests break continuous SERP
                    tracking, making it impossible to catch algorithm updates or
                    ranking shifts in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── SECTION: SEO MONITORING SOLUTIONS HEADER ──────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            Our SEO Monitoring Solutions
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal max-w-3xl mx-auto leading-relaxed">
            We offer two proxy solutions optimized for different SEO monitoring
            scales and accuracy requirements. Choose based on your keyword
            volume, budget, and tolerance for failed data.
          </p>
        </div>
      </section>
      {/* ── SECTION: HYBRID PROXIES FOR ENTERPRISE OPERATIONS ──────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6 text-left">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Hybrid Proxies for Enterprise Operations
              </h2>

              <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                Designed for high volume SEO monitoring and advanced SERP
                intelligence, where scale, speed and accuracy are
                non-negotiable.
              </p>

              {/* Customized Bullet List */}
              <ul className="space-y-3 pt-2">
                {[
                  "Best for enterprise SEO operations tracking 50,000+ keywords",
                  "Ideal for large agencies with extensive client portfolios",
                  "Built for teams that need maximum speed with residential authenticity",
                  "Supports advanced SERP scraping beyond basic rank tracking",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-stone-300 text-xs sm:text-sm font-normal leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Side */}
            <div className="relative group">
              <div className="bg-[#0d0d0d] rounded-3xl p-3 border border-stone-800/60 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="bg-[#050505] rounded-2xl overflow-hidden relative aspect-[4/3] w-full flex items-center justify-center">
                  <Image
                    src="/images/enterprise_operations.png"
                    alt="Hybrid Proxies for Enterprise Operations"
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── SECTION: STANDARD PROXIES FOR SMB MONITORING ──────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="relative group order-2 lg:order-1">
              <div className="bg-[#0d0d0d] rounded-3xl p-3 border border-stone-800/60 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="bg-[#050505] rounded-2xl overflow-hidden relative aspect-[4/3] w-full flex items-center justify-center">
                  <Image
                    src="/images/Standard_Proxies.png"
                    alt="Standard Proxies for Small to Medium Scale Monitoring"
                    fill
                    priority
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 order-1 lg:order-2 text-left">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Standard Proxies for Small to Medium Scale Monitoring
              </h2>

              <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                Designed for reliable monitoring on sites with lighter
                enforcement and predictable behavior.
              </p>

              {/* Customized Bullet List */}
              <ul className="space-y-3 pt-2">
                {[
                  "Best for sites without advanced anti-bot protection (eBay, AliExpress, Etsy, Craigslist)",
                  "Ideal for getting started and scaling steadily without extra overhead",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-stone-300 text-xs sm:text-sm font-normal leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ── SECTION: PRICING / PROXY SELECTION ──────────────────────── */}
      <section
        id="pricing-section"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              The Right Proxies for SEO Monitoring
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal max-w-3xl mx-auto leading-relaxed">
              Select the proxy type that matches your keyword volume, budget,
              and accuracy requirements without overpaying or sacrificing data
              quality.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {proxyCards.map((card, index) => (
              <div
                key={index}
                className="relative bg-[#0d0d0d] border border-stone-800/80 hover:border-stone-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Container */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center relative overflow-hidden bg-stone-900/50 border border-stone-800/60 p-2.5">
                      <Image
                        src={card.iconType}
                        alt={`${card.title} Icon`}
                        fill
                        priority
                        className="object-contain p-2.5"
                      />
                    </div>

                    {/* Badge */}
                    {card.badge && (
                      <span
                        className={`text-[11px] font-medium tracking-wide px-3 py-1 rounded-md ${
                          card.badge.variant === "popular"
                            ? "bg-[#002B1B] text-[#00B67A]"
                            : "bg-[#1C1600] text-[#FFB800]"
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
                  <p className="text-stone-400 text-xs sm:text-sm font-normal mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Pricing Block */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                      {card.price}
                    </span>
                    <span className="text-stone-500 text-xs font-normal">
                      per month
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {card.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-stone-300 text-xs sm:text-sm font-normal leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 text-[#FF4F00] shrink-0 mt-0.5 stroke-[3]"
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      router.push("https://dashboard.torchproxies.com/")
                    }
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
            ))}
          </div>
        </div>
      </section>
      {/* ── SECTION: COMPARISON MATRIX ──────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              See how we compare with others
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm lg:text-base font-normal tracking-wide leading-relaxed">
              Proof why we are the best option for your use case
            </p>
          </div>

          {/* Comparison Matrix Table Wrapper */}
          <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-stone-800">
            <div className="min-w-[768px] relative w-full">
              <table className="w-full border-collapse text-center table-fixed relative z-10">
                <colgroup>
                  <col className="w-[20%] text-left" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" /> {/* Highlighted Column */}
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                </colgroup>

                <thead>
                  <tr className="align-middle">
                    <th className="pb-8 sm:pb-10"></th>

                    {/* Competitor Logos */}
                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/1.png"
                          alt="Bright Data Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/2.png"
                          alt="Oxylabs Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </th>

                    {/* Highlighted TorchProxies Column Header */}
                    <th className="pb-8 sm:pb-10 px-1 relative">
                      <div
                        className="absolute top-[-16px] left-0 right-0 bottom-[-16px] bg-[#0c0c0e] border border-stone-800/80 rounded-2xl z-0 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        aria-hidden="true"
                      />
                      <div className="relative h-6 w-full max-w-[120px] mx-auto opacity-100 transition-opacity z-10">
                        <Image
                          src="/images/table/torchproxies.png"
                          alt="TorchProxies Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/3.png"
                          alt="Proxy Empire Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </th>

                    <th className="pb-8 sm:pb-10 px-1">
                      <div className="relative h-6 w-full max-w-[110px] mx-auto opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Image
                          src="/images/table/4.png"
                          alt="Node Maven Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="align-middle">
                      {/* Metric Label */}
                      <td className="py-4 sm:py-5 px-1 text-left text-stone-300 text-xs sm:text-sm font-medium">
                        {row.metric}
                      </td>

                      {/* Competitors Data */}
                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm font-normal">
                        {renderCellContent(row.brightData)}
                      </td>

                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm font-normal">
                        {renderCellContent(row.oxylabs)}
                      </td>

                      {/* TorchProxies Cell */}
                      <td className="py-4 sm:py-5 px-1 text-white text-xs sm:text-sm font-medium relative z-10">
                        {renderCellContent(row.torchProxies, true)}
                      </td>

                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm font-normal">
                        {renderCellContent(row.proxyEmpire)}
                      </td>

                      <td className="py-4 sm:py-5 px-1 text-stone-400 text-xs sm:text-sm font-normal">
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
      {/* ── SECTION: INTERACTIVE CTA BANNER ──────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist'] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-stone-800/60 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)",
            }}
          >
            {/* Background Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white mb-4 sm:mb-6">
                Stop Guessing Rankings. <br className="hidden sm:inline" />
                Start Monitoring SERPs Reliably.
              </h2>

              {/* Subtitle */}
              <p className="text-stone-300 text-xs sm:text-sm lg:text-base font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
                Monitor rankings, local results, and SERP features at scale
                without triggering “unusual traffic” warnings.
              </p>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10">
                <button
                  onClick={() =>
                    router.push("https://dashboard.torchproxies.com/")
                  }
                  className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                      Get started now
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                      Get started now
                    </span>
                  </div>
                </button>
              </div>

              {/* Feature Checkmarks List */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 items-center text-xs sm:text-sm text-stone-300 font-normal">
                {[
                  "No Credit Card Required",
                  "Instant Setup",
                  "24/7 Support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#FF4F00] shrink-0 stroke-[3]"
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── SECTION: FAQ (ACCORDION) ───────────────────────────────── */}
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
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest block mb-2 sm:mb-3">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
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
                  className="border-b border-stone-800/80 last:border-none group"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left py-5 sm:py-6 flex items-center justify-between text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    <span className="pr-4 leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-stone-400 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#FF4F00]"
                          : "group-hover:text-stone-300"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[500px] pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-3">
                      {faq.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          {item.label && (
                            <span
                              className={`${
                                "color" in item ? item.color : ""
                              } text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shrink-0 tracking-wide min-w-[90px] text-center`}
                            >
                              {item.label}
                            </span>
                          )}
                          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
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

        {/* Bottom Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}

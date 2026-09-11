"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Check, ChevronDown } from "lucide-react";
import Flag from "react-world-flags";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UseCasesSection = dynamic(
  () => import("@/components/home/UseCasesSection"),
);

const MARQUEE_ITEMS = [
  "99.9% uptime guaranteed",
  "Blazing fast proxy speeds",
  "Global geo targeting support",
  "Secure & anonymous connections",
  "Unlimited sessions & rotations",
  "Built for scraping & automation",
];

const Marquee: React.FC = () => (
  <div className="w-full overflow-hidden bg-[#FE4A01] py-3.5 whitespace-nowrap select-none flex">
    {/* Infinite track containing multiple data blocks to prevent viewport gaps */}
    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around text-[14px] font-medium tracking-wider text-white font-archivo">
      {/* Block 1 (Original) */}
      <div className="flex shrink-0 items-center space-x-12 pr-12">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`orig-${index}`} className="flex items-center gap-3.5">
            {/* Perfectly sized, smooth CSS custom bullet circle */}
            <div
              className="w-2.5 h-2.5 rounded-full bg-white shrink-0"
              aria-hidden="true"
            />
            <span>{item}</span>
          </span>
        ))}
      </div>

      {/* Block 2 (Duplicate) */}
      <div
        className="flex shrink-0 items-center space-x-12 pr-12"
        aria-hidden="true"
      >
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`dup1-${index}`} className="flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span>{item}</span>
          </span>
        ))}
      </div>

      {/* Block 3 (Extra Duplicate) */}
      <div
        className="flex shrink-0 items-center space-x-12 pr-12"
        aria-hidden="true"
      >
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
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>("5GB");

  const barConfigs = Array.from({ length: 32 }, (_, i) => ({
    id: i,
    isActive: true,
    isDimmed: i >= 30,
  }));
  const locations = [
    {
      code: "US",
      name: "United States",
      ips: "4,429,824",
      url: "/united-states",
    },
    {
      code: "GB",
      name: "United Kingdom",
      ips: "1,449,139",
      url: "/united-kingdom",
    },
    { code: "DE", name: "Germany", ips: "1,431,960", url: "/germany" },
    { code: "AU", name: "Australia", ips: "452,720", url: "/australia" },
    { code: "CA", name: "Canada", ips: "815,658", url: "/canada" },
    { code: "MX", name: "Mexico", ips: "4,429,824", url: "/mexico" },
    { code: "CN", name: "China", ips: "4,429,824", url: "/china" },
    { code: "FR", name: "France", ips: "4,429,824", url: "/france" },
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
    { id: "1GB", size: "1GB", price: "$ 5" },
    { id: "5GB", size: "5GB", price: "$ 4.75", discount: "5.56% OFF" },
    { id: "25GB", size: "25GB", price: "$ 4.50", discount: "11.11% OFF" },
    { id: "100GB", size: "100GB", price: "$ 4.25", discount: "16.67% OFF" },
    { id: "500GB", size: "500GB", price: "$ 4.00", discount: "22.22% OFF" },
    { id: "1000GB", size: "1000GB", price: "$ 3.90", discount: "24.44% OFF" },
  ];
  const features = [
    {
      icon: "/images/sr1.svg",
      title: "High Data Collection",
      desc: "Collect cleaner, more accurate data at scale with low detection rates",
    },
    {
      icon: "/images/sr2.svg",
      title: "Smart IP Rotation",
      desc: "Auto rotate IPs with intelligent timing to mimic real user behaviour",
    },
    {
      icon: "/images/sr3.svg",
      title: "Advanced Sticky Sessions",
      desc: "Maintain long, uninterrupted sessions for login heavy or dynamic sites",
    },
    {
      icon: "/images/sr4.svg",
      title: "SOCKS5 & HTTPS Support",
      desc: "Dual protocol support for maximum flexibility and compatibility",
    },
    {
      icon: "/images/sr5.svg",
      title: "Unlimited Sessions",
      desc: "Run high volume tasks across unlimited threads without slowdowns",
    },
    {
      icon: "/images/sr6.svg",
      title: "Cost Effective",
      desc: "Balanced pricing with enhanced features ideal for growing projects",
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
      q: "What are residential proxies?",
      a: "Residential proxies are IP addresses assigned by Internet Service Providers (ISPs) to homeowners. They act as intermediaries between your device and the internet, allowing you to browse anonymously and access geo-restricted content.",
    },
    {
      q: "How do residential proxies work and how are they different?",
      a: "Residential proxies route your internet traffic through real residential IP addresses, making them appear as normal users to websites. Unlike datacenter proxies, they have higher trust scores and are much harder to detect and block.",
    },
    {
      q: "What makes TorchProxies's residential proxies better than other proxy providers?",
      a: "Our residential proxy network offers unmatched speed, stability, ethical sourcing, and city-level targeting with 24/7 support and transparent pricing.",
    },
    {
      q: "What are the ideal use cases for the Plan X Residential plan?",
      a: "Perfect for general web scraping, social media management, market research, sneaker copping, and everyday automation tasks.",
    },
    {
      q: "Are residential proxies legal to use?",
      a: "Yes, residential proxies are completely legal when used responsibly and in compliance with website terms of service.",
    },
    {
      q: "Do you offer free trials?",
      a: "Yes, we offer a free 1GB trial so you can test our network performance before committing.",
    },
  ];
  return (
    <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden space-y-6 font-['Urbanist']">
      {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
      <header className="relative min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center px-6 pt-[190px] pb-24 space-y-6 font-['Urbanist']">
        <div className="absolute bottom-0 left-0 right-0 h-[65vh] z-0 w-full">
          <Image
            src="/images/hero_back.png"
            alt=""
            fill
            priority
            className="object-contain object-bottom w-full"
          />
          {/* Marquee at bottom of image */}
          <div className="absolute -bottom-12 left-0 w-full z-10">
            <Marquee />
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center z-10 font-['Urbanist']">
          <div className="flex items-center justify-center mb-6">
            <a
              href="https://www.trustpilot.com/review/torchlabs.xyz"
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

          <h1 className="text-[60px] sm:text-[60px] lg:text-[60px] font-regular tracking-tight leading-[72px] mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent">
            Redefining Performance <br />
            <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">
              with X Residential
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-stone-400 text-base text-[18px] sm:text-[18px] mb-4 leading-relaxed">
            Built for speed and scale X Residential Proxies offer top-tier
            performance, unmatched reliability and, limitless potential.
          </p>

          <div className="py-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-[16px] font-medium">
            <div className="flex items-center justify-center gap-2">
              <Check className="text-orange-500 w-4 h-4" /> Pricing starts from
              $3.9/GB
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-orange-500 w-4 h-4" /> Residential with
              dedicated ISP pools
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-orange-500 w-4 h-4" /> 24 hour refund
              policy
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
            {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
            <button
              onClick={() => router.push("https://dashboard.torchproxies.com/")}
              className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
            >
              {/* Fast 3D text track wrapper */}
              <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                {/* Default State Text */}
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                  Start free with 500 MB
                </span>

                {/* Hover State Text */}
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                  Start free with 500 MB
                </span>
              </div>
            </button>

            {/* --- SECONDARY BUTTON: ROLLING TEXT + BORDER INDENT --- */}
            <button
              onClick={() => {
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-400 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]"
            >
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

          <div className="flex items-center justify-center gap-2.5 text-stone-400 text-sm sm:text-base font-normal tracking-wide pt-4 pb-15">
            <CreditCard className="w-4 h-4 text-stone-500" />
            <span>No credit card needed. Instant access</span>
          </div>
        </div>
      </header>

      {/* ── SECTION 2: Perfect for Every Scraping & Animations ─────────── */}
      <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden font-['Urbanist']">
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
            <div className="space-y-6 font-['Urbanist']">
              <h2 className="text-[42px] md:text-[42px] font-medium tracking-tight">
                Why Plan X Residential Proxies Stand Out
              </h2>
              <p className="text-gray-400 text-[18px] leading-relaxed">
                Plan X blends Residential IPs for authenticity with ISP IPs for
                speed and stability, creating a hybrid network built for
                high-performance scraping, automation, and content access.
              </p>
              <ul className="text-gray-400 text-[16px] leading-relaxed">
                <li>
                  &#9679; Fast, stable and highly reliable for demanding tasks.
                </li>
                <li>
                  &#9679; A hybrid mix of Residential + ISP IPs for maximum
                  versatility.
                </li>
                <li>
                  &#9679; Engineered to support large-scale, resource-intensive
                  workflows with ease.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Residential Proxies ────────────────────── */}
      <section
        id="pricing"
        className="py-12 sm:py-16 lg:py-24 bg-[#0a0a0a] text-white relative overflow-hidden font-['Urbanist']"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── TOP HEADER SUB-LABELS ───────────────────────────────── */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#FE4A01] text-sm sm:text-base font-normal tracking-wider block mb-2 sm:mb-3">
              X Residential Proxies
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight mb-4 sm:mb-6">
              Buy X residential proxies
            </h2>

            {/* Top Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-stone-400 text-xs sm:text-sm lg:text-base font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Secure
                checkout with SSL encryption
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="text-emerald-400 w-4 h-4 stroke-[3]" /> Pay As
                You Go Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="text-emerald-400 w-4 h-4 stroke-[3]" />{" "}
                Premium IPs
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="text-emerald-400 w-4 h-4 stroke-[3]" />{" "}
                Support both card & crypto
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT PANEL: PRODUCT META & SPECIFICATIONS */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-4">
              <div className="flex items-center gap-4">
                {/* Product Badge Logo Block */}
                <div className="relative w-16 h-16 sm:w-[84px] sm:h-[84px] shrink-0">
                  <Image
                    src="/images/standardresidential.svg"
                    alt="Feature Icon"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-stone-200 leading-tight">
                    X Residential Proxies
                  </h3>
                </div>
              </div>

              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Unmatched speed, stability and flexibility with rotating
                residential proxies and static sessions{" "}
                <span className="text-[#FE4A01]">
                  for top tier performance.
                </span>
              </p>

              {/* Custom Micro Pill Badge */}
              <div className="inline-block bg-[#FE4A01]/10 border border-[#FE4A01]/20 px-3 py-1 rounded-md">
                <span className="text-[#FE4A01] text-xs sm:text-sm font-semibold tracking-wide">
                  From $/5GB per month
                </span>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-2 text-stone-400 text-sm sm:text-base font-normal">
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Data never expires
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Can cancel anytime
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Authentic residential proxies with dedicated ISP pools
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Rotating and sticky sessions
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Target country, state, and city-level
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Suitable for general web scraping
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Unlimited concurrent sessions
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  120M+ ethically sourced unique IPs in 195 countries
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Easy API access for integration
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-emerald-400 w-4 h-4 stroke-[3] shrink-0 mt-1" />{" "}
                  Sneaker drops, ticketing queues, strict retail sites, social
                  media anti-bot environments, flash sales, bot-driven
                  automation, and mission-critical high-demand ops.
                </li>
              </ul>

              {/* Primary CTA Button */}
              <div className="pt-4 pb-2">
                <button
                  onClick={() =>
                    router.push("https://dashboard.torchproxies.com/")
                  }
                  className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                      Start free with 500 MB
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90 text-sm sm:text-base">
                      Start free with 500 MB
                    </span>
                  </div>
                </button>
              </div>

              {/* Gateway Merchant Footnote Icons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone-500 font-medium select-none">
                <span>We Support</span>
                <div className="relative w-[180px] sm:w-[217px] h-[20px] shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/supports.svg"
                    alt="Payment Methods"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span>& more</span>
              </div>
            </div>

            {/* RIGHT PANEL: GRID OF PRICING CARDS */}
            <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 w-full">
              {tiers.map((tier) => {
                const isSelected = selectedPlan === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`min-h-[150px] sm:min-h-[170px] border rounded-2xl p-4 sm:p-5 relative cursor-pointer select-none transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "bg-stone-900/40 border-[#FE4A01] shadow-[0_0_25px_rgba(254,74,1,.1)]"
                        : "bg-[#0b0b0d]/50 border-stone-900 hover:border-stone-800/80"
                    }`}
                  >
                    {/* Floating Green Percentage Label */}
                    {tier.discount && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                        {tier.discount}
                      </div>
                    )}

                    {/* Volume Metric Display */}
                    <div className="mt-6 sm:mt-8">
                      <span className="text-2xl sm:text-[32px] font-medium tracking-tight text-stone-200 block">
                        {tier.size}
                      </span>
                    </div>

                    {/* Price Metric Formula */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#FE4A01] font-bold text-xl sm:text-[24px]">
                        {tier.price}
                      </span>
                      <span className="text-[#FE4A01] text-xs sm:text-[14px] font-medium">
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
            We provide you access to a global network of ethical sourced proxy
            nodes from around the world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mb-[100px]">
            {locations.map((loc, index) => (
              <div
                key={`${loc.code}-${index}`}
                // ── CLICK NAVIGATION HANDLER ──
                onClick={() => router.push(loc.url)}
                className="flex items-center gap-3.5 bg-[#0b0b0d]/30 border border-stone-900/60 rounded-[12px] p-4 hover:border-stone-800/80 hover:bg-[#0e0e12]/60 transition-all duration-200 group cursor-pointer"
              >
                {/* Flag Container */}
                <div className="w-14 h-9 relative overflow-hidden rounded-[3px] flex-shrink-0 bg-stone-950 shadow-[0_1px_3px_rgba(0,0,0,0.5)] border border-stone-900/20">
                  <Flag
                    code={loc.code}
                    className="w-full h-full object-cover"
                    fallback={
                      <span className="text-[10px] text-stone-600">🏳️</span>
                    }
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 -mt-[40px]">
            {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
            <button
              onClick={() => router.push("/countries")}
              className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
            >
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
          {/*  */}
          {/* Call to Action */}
          {/* <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform">
                                    View all locations
                                </button> */}
        </div>
      </section>

      {/* ── SECTION 5: WHY CHOOSE TORCHPROXIES ──────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0a0a0a] text-white relative font-['Urbanist']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── TOP HEADER SECTION ───────────────────────────────────── */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#FE4A01] text-xs sm:text-sm font-normal tracking-wider block mb-2 sm:mb-3">
              Features
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white mb-3 sm:mb-4">
              Built for you dashboard
            </h2>
            <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] max-w-2xl mx-auto font-normal leading-relaxed">
              Easily manage, monitor and optimize your proxy operations with a
              user centric dashboard.
            </p>
          </div>

          {/* ── BENTO BOX GRID LAYOUT ────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto items-stretch">
            {/* CARD 1: TARGET ANY COUNTRY (Left Column) */}
            <div className="bg-[#0b0b0d] border border-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[420px] sm:min-h-[500px] lg:min-h-[540px]">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-tight text-stone-200 mb-2 sm:mb-3">
                  Target Any Country, State or City
                </h3>
                <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] leading-relaxed font-normal">
                  Reach your audience anywhere with pinpoint geographic
                  precision.
                </p>
              </div>

              {/* Visual Image / Mockup Area */}
              <div className="relative w-full h-56 sm:h-72 lg:h-full min-h-[220px] sm:min-h-[280px]">
                <Image
                  src="/images/targetanycountry.png"
                  alt="Proxy Dashboard Mockup"
                  fill
                  className="object-contain object-center lg:object-bottom"
                  priority={false}
                />
              </div>
            </div>

            {/* RIGHT SIDE CONTAINER GROUP (Right Column) */}
            <div className="flex flex-col gap-6 w-full">
              {/* CARD 2: TRACK MANAGE & CONTROL (Top Right Row) */}
              <div className="bg-[#0b0b0d] border border-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[240px] sm:min-h-[258px]">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-tight text-stone-200 mb-2 sm:mb-3">
                    Track Manage & Stay in Control
                  </h3>
                  <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] leading-relaxed font-normal">
                    Monitor usage, switch locations, and stay fully in command
                    of your network.
                  </p>
                </div>

                <div className="relative w-full h-28 sm:h-32 lg:h-[136px] mt-4">
                  <Image
                    src="/images/trackmanage.png"
                    alt="Proxy Dashboard Mockup"
                    fill
                    className="object-contain object-bottom"
                    priority={false}
                  />
                </div>
              </div>

              {/* CARD 3: DEVELOPER FRIENDLY SETUP (Bottom Right Row) */}
              <div className="bg-[#0b0b0d] border border-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[240px] sm:min-h-[258px]">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-tight text-stone-200 mb-2 sm:mb-3">
                    Fast, Developer Friendly Setup
                  </h3>
                  <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] leading-relaxed font-normal">
                    Get started in minutes with simple integration and powerful
                    API tools.
                  </p>
                </div>

                <div className="relative w-full h-28 sm:h-32 lg:h-[136px] mt-4">
                  <Image
                    src="/images/fastdeveloper.png"
                    alt="Proxy Dashboard Mockup"
                    fill
                    className="object-contain object-bottom"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a0a0a] text-white font-['Urbanist']">
        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="text-[#FE4A01] text-xs sm:text-sm lg:text-base font-normal tracking-wider block mb-2 sm:mb-3">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] max-w-4xl font-medium mx-auto leading-tight tracking-tight mb-3 sm:mb-4 text-white">
            Enhanced Features for Heavy & Strict Workloads
          </h2>
          <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] max-w-2xl mx-auto font-normal leading-relaxed">
            Upgraded performance, smarter rotation, and stronger stability built
            for high-volume scraping and stricter websites.
          </p>
        </div>

        {/* ── FEATURES GRID ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 lg:gap-x-12 md:gap-y-12 lg:gap-y-16 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="flex items-start gap-4 group">
              {/* Round Solid Orange Icon Badge */}
              <div className="rounded-full bg-[#FE4A01] flex items-center justify-center shrink-0 p-2.5 sm:p-3 shadow-[0_4px_14px_rgba(254,74,1,0.2)] transition-transform duration-200 group-hover:scale-105">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-[44px] lg:h-[44px]">
                  <Image
                    src={feat.icon}
                    alt={`${feat.title} Icon`}
                    fill
                    className="object-contain inverted-icon-color"
                  />
                </div>
              </div>

              {/* Text Information Elements */}
              <div className="space-y-1 sm:space-y-1.5">
                <h3 className="text-lg sm:text-xl lg:text-[23px] font-medium text-white tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
      <section className="bg-[#0a0a0a] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-['Urbanist']">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center overflow-hidden border border-stone-900"
            style={{
              background:
                "linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)",
            }}
          >
            {/* Optional subtle overlay for more depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-2xl sm:rounded-3xl" />

            <div className="max-w-5xl relative z-10 mx-auto">
              <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium tracking-tight mb-3 sm:mb-4 leading-[1.15] text-[#FFF6EC]">
                Get started with Plan X residential proxies
                <br className="hidden md:block" />
              </h2>

              <p className="max-w-3xl mx-auto text-stone-400 text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed mb-6 sm:mb-8 text-center">
                Unlock premium speed, stability and higher success rates for
                demanding or strict websites.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                <button
                  onClick={() =>
                    router.push("https://dashboard.torchproxies.com/")
                  }
                  className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#ffffff] text-black font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:scale-[1.02] active:scale-[0.99]"
                >
                  {/* Fast 3D text track wrapper */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    {/* Default State Text */}
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-black text-sm sm:text-base">
                      Get Started Now
                    </span>

                    {/* Hover State Text */}
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-black text-sm sm:text-base">
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
      <section className="bg-[#0a0a0a] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-['Urbanist']">
        <div className="max-w-7xl mx-auto">
          {/* Other sections can go here */}

          {/* ── YOUR NEW USE CASES SECTION ── */}
          <UseCasesSection />

          {/* Other sections can go here */}
        </div>
      </section>
      {/* ── SECTION 9: UPSELL CARDS ──────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-['Urbanist']">
        <div className="max-w-7xl mx-auto">
          {/* ── TOP HEADLINE SECTION ────────────────────────────────── */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white mb-2 sm:mb-3">
              Looking for more power?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base lg:text-[18px] font-normal">
              Fast and reliable rotating residential proxies.
            </p>
          </div>

          {/* ── NAV TAB SYSTEM ──────────────────────────────────────── */}
          <div className="flex border-b border-stone-900 w-full mb-8 sm:mb-12 lg:mb-16 overflow-x-auto">
            <button
              onClick={() => setActiveTab("premium")}
              className={`flex-1 min-w-[160px] pb-3 sm:pb-4 px-4 sm:px-8 text-xs sm:text-sm font-medium transition-all relative ${
                activeTab === "premium"
                  ? "text-[#FE4A01]"
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              Standard Residential Proxies
              {activeTab === "premium" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE4A01]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("planX")}
              className={`flex-1 min-w-[160px] pb-3 sm:pb-4 px-4 sm:px-8 text-xs sm:text-sm font-medium transition-all relative ${
                activeTab === "planX"
                  ? "text-[#FE4A01]"
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              Premium Residential Proxies
              {activeTab === "planX" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FE4A01]" />
              )}
            </button>
          </div>

          {/* ── TAB DYNAMIC VIEW CONTENT ────────────────────────────── */}
          {activeTab === "premium" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-tight text-white leading-tight">
                    Standard Residential Proxies
                  </h3>
                  <span className="bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
                    From $4.5/GB
                  </span>
                </div>

                <p className="text-stone-400 text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed">
                  Reliable and affordable with rotating residential proxies and
                  optional static sessions perfect for everyday online tasks.
                </p>

                <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-sm sm:text-base font-normal">
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" /> Data
                    never expires
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" /> Can
                    cancel anytime
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Authentic residential IPs
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Suitable for general web scraping
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Target any country, state and city level
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Unlimited concurrent sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Rotating and sticky sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" /> 30M+
                    ethically sourced unique IPs in 195+ Countries
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    onClick={() =>
                      router.push("https://dashboard.torchproxies.com/")
                    }
                    className="cursor-pointer group relative w-full sm:max-w-[400px] h-[46px] overflow-hidden bg-[#FF4F00] text-white text-sm sm:text-base font-medium rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                        Upgrade to premium
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                        Upgrade to premium
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 bg-[#0b0b0d] border border-stone-900 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[380px]">
                <img
                  src="/images/Scraping.png"
                  alt="Standard Residential Proxies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-medium tracking-tight text-white leading-tight">
                    Premium Residential Proxies
                  </h3>
                  <span className="bg-[#FE4A01]/10 border border-[#FE4A01]/20 text-[#FE4A01] text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
                    From $4.5/GB
                  </span>
                </div>

                <p className="text-stone-400 text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed max-w-xl">
                  Enhanced speed and reliability with rotating residential
                  proxies and static sessions ideal for demanding users and
                  businesses.
                </p>

                <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-sm sm:text-base font-normal">
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Premium residential IPs
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Rotating and sticky sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Target country, state, and city-level
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Suitable for general web scraping
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" />{" "}
                    Unlimited concurrent sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="text-emerald-500 w-4 h-4 shrink-0" /> 30M+
                    ethically sourced unique IPs in 195 countries
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    onClick={() =>
                      router.push("https://dashboard.torchproxies.com/")
                    }
                    className="cursor-pointer group relative w-full sm:max-w-[400px] h-[46px] overflow-hidden bg-[#FF4F00] text-white text-sm sm:text-base font-medium rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                        Upgrade to premium
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                        Upgrade to premium
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 bg-[#0b0b0d] border border-stone-900 rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[380px]">
                <img
                  src="/images/standardresidential.png"
                  alt="Premium Residential Proxies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-stone-950/20 overflow-hidden font-['Urbanist']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header Text Nodes */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-[#FE4A01] text-sm sm:text-base font-medium tracking-wider uppercase block mb-2 sm:mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Customers prefer TorchProxies over other proxy brands
            </h2>
          </div>

          {/* Outer Infinite Slider Container Track */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-normal">
              {/* Render 1st Array Instance */}
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between bg-[#070707] border border-stone-900 p-5 sm:p-8 rounded-2xl sm:rounded-[24px] w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 min-h-[260px] sm:min-h-[280px]"
                >
                  <div className="space-y-2.5">
                    {/* Title & Trustpilot Star Row Block */}
                    <div className="text-white font-bold text-sm sm:text-[15px] tracking-tight line-clamp-1">
                      {review.text.split(".")[0]}
                    </div>
                    <TrustpilotStars rating={review.stars} />

                    {/* Feedback Text Area */}
                    <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal pt-1">
                      "{review.text}"
                    </p>
                  </div>

                  {/* ─── CLIENT AVATAR & METADATA FOOTER ─── */}
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-900/50 mt-4">
                    {review.avatar ? (
                      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900 shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full text-stone-950 font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 ${
                          review.initials === "IS"
                            ? "bg-[#c6f6d5]"
                            : "bg-[#7f9cf5] text-white"
                        }`}
                      >
                        {review.initials}
                      </div>
                    )}

                    {/* User Account String Node Labels */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-stone-200 font-semibold text-xs sm:text-[13px] tracking-tight truncate">
                        {review.name}
                      </span>
                      <span className="text-stone-500 text-[10px] sm:text-[11px] truncate">
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
                  className="flex flex-col justify-between bg-[#070707] border border-stone-900 p-5 sm:p-8 rounded-2xl sm:rounded-[24px] w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 min-h-[260px] sm:min-h-[280px]"
                >
                  <div className="space-y-2.5">
                    <div className="text-white font-bold text-sm sm:text-[15px] tracking-tight line-clamp-1">
                      {review.text.split(".")[0]}
                    </div>
                    <TrustpilotStars rating={review.stars} />

                    <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal pt-1">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-stone-900/50 mt-4">
                    {review.avatar ? (
                      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-stone-800 bg-stone-900 shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full text-stone-950 font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 ${
                          review.initials === "IS"
                            ? "bg-[#c6f6d5]"
                            : "bg-[#7f9cf5] text-white"
                        }`}
                      >
                        {review.initials}
                      </div>
                    )}

                    <div className="flex flex-col min-w-0">
                      <span className="text-stone-200 font-semibold text-xs sm:text-[13px] tracking-tight truncate">
                        {review.name}
                      </span>
                      <span className="text-stone-500 text-[10px] sm:text-[11px] truncate">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">
        {/* ── 📌 Full-Bleed Middle-Bottom Background Layer ────────────────────── */}
        <div className="absolute inset-x-0 bottom-0 h-[300px] sm:h-[450px] z-0 pointer-events-none select-none">
          <Image
            src="/images/contact-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom opacity-100"
          />
        </div>

        {/* ── Content Wrapper ── */}
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-[#FE4A01] text-xs sm:text-sm font-medium tracking-widest uppercase block mb-2 sm:mb-3">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white leading-tight">
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
                    className="w-full text-left py-4 sm:py-6 flex items-center justify-between gap-4 text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors"
                  >
                    <span className="pr-2">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-stone-400 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#FE4A01]"
                          : "group-hover:text-stone-300"
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-4 sm:pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-stone-400 text-sm sm:text-[15px] leading-relaxed pr-2 sm:pr-8">
                      {faq.a}
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

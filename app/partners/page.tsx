"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";
import { Check, ChevronDown, Star } from "lucide-react";


interface WordPressPost {
  id: number;
  title: { rendered: string } | string;
  slug: string;
  jetpack_featured_media_url?: string;
  featured_media_src_url?: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

interface ProcessedBlog {
  id: number;
  title: string;
  image: string;
  tag: string;
  slug: string;
}

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

// ── Types ──────────────────────────────────────────────────────────
type Category =
  | "All"
  | "Antidetect Browsers"
  | "Automation & Security"
  | "Captcha Solvers"
  | "Cloud Services";

interface Partner {
  id: string;
  name: string;
  category: Category;
  logo: string;
  description: string;
  features?: string[];
  websiteUrl?: string;
}

interface Review {
  name: string;
  role: string;
  text: string;
  stars: number;
  avatar?: string;
  initials?: string;
}

// ── Dummy Data ──────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  "All",
  "Antidetect Browsers",
  "Automation & Security",
  "Captcha Solvers",
  "Cloud Services",
];

const PARTNERS: Partner[] = [
  {
    id: "gee-lark",
    name: "GeeLark",
    category: "Antidetect Browsers",
    logo: "/images/partners/geelark.png",
    description:
      "GeeLark is an antidetect phone environment browser designed to create cloud phone instances, allowing users to manage multiple social accounts or e-commerce stores easily and safely, avoiding detection and bans.",
    features: [
      "Real cloud phones — not emulators",
      "Bulk account setup & management",
      "Custom proxy configuration",
      "Seamless team collaboration",
    ],
  },
  {
    id: "undetectable",
    name: "Undetectable Browser",
    category: "Antidetect Browsers",
    logo: "/images/partners/undetectable.png",
    description:
      "Undetectable Browser is a professional multi-accounting software for affiliate marketing, crypto, e-commerce, and web scraping. Create unlimited browser profiles with unique fingerprints.",
    features: ["Local profile storage option", "Mass profile creation"],
  },
  {
    id: "hidemyacc",
    name: "Hidemyacc",
    category: "Antidetect Browsers",
    logo: "/images/partners/hidemyacc.png",
    description:
      "Hidemyacc allows you to create multiple browser profiles with distinct hardware fingerprints, ensuring completely anonymous online activity and multi-account management.",
  },
  {
    id: "mulligan",
    name: "Mulligan Antidetect Browser",
    category: "Antidetect Browsers",
    logo: "/images/partners/mulligan.png",
    description:
      "Advanced browser anti-detection technology for enterprise web scraping, automation, and privacy protection.",
  },
  {
    id: "capsolver",
    name: "CapSolver",
    category: "Captcha Solvers",
    logo: "/images/partners/capsolver.png",
    description:
      "CapSolver is an AI-powered CAPTCHA solving service that automatically solves reCAPTCHA v2/v3, hCaptcha, FunCAPTCHA, and Cloudflare Turnstile with ultra-fast speed.",
  },
  {
    id: "capsolver-ai",
    name: "Capsolver AI",
    category: "Captcha Solvers",
    logo: "/images/partners/capsolver-ai.png",
    description:
      "Next-gen automated solution for resolving complex security challenges and CAPTCHA algorithms at scale.",
    features: [
      "99.9% solution accuracy",
      "API integrations for Python, Node & Golang",
      "Pay-per-successful-request pricing",
    ],
  },
  {
    id: "2captcha",
    name: "2Captcha",
    category: "Captcha Solvers",
    logo: "/images/partners/2captcha.png",
    description:
      "2Captcha is a human-powered and automated CAPTCHA recognition service that solves web challenges in real-time.",
  },
  {
    id: "linken-sphere",
    name: "Linken Sphere",
    category: "Antidetect Browsers",
    logo: "/images/partners/linken-sphere.png",
    description:
      "A high-security antidetect browser built for safe multi-account operations, affiliate marketing, and automated workflows.",
  },
  {
    id: "automa-test",
    name: "Automatest",
    category: "Automation & Security",
    logo: "/images/partners/automatest.png",
    description:
      "Comprehensive web automation, security auditing, and performance testing tool designed for developer workflows.",
  },
  {
    id: "vmlogin",
    name: "VMLogin Antidetect Browser",
    category: "Antidetect Browsers",
    logo: "/images/partners/vmlogin.png",
    description:
      "Virtual browser environment software to run and manage multiple virtual isolated browser profiles on a single computer.",
  },
  {
    id: "scrappy",
    name: "Scrappy",
    category: "Automation & Security",
    logo: "/images/partners/scrappy.png",
    description:
      "Cloud web scraping infrastructure tool providing reliable data extraction, proxy rotation, and headful browser rendering.",
  },
  {
    id: "pro2-house",
    name: "Pro2 House",
    category: "Cloud Services",
    logo: "/images/partners/pro2house.png",
    description:
      "Dedicated server infrastructure and high-speed cloud hosting configured specifically for proxy distribution and data gathering.",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Alex V.",
    role: "Data Lead @ DataPulse",
    text: "Best residential proxy performance we've tested. Speeds are fast and IP quality is unbeatable.",
    stars: 5,
    initials: "AV",
  },
  {
    name: "Isabella S.",
    role: "E-commerce Founder",
    text: "Switched to TorchProxies for our scraping infrastructure and our success rate doubled immediately.",
    stars: 5,
    initials: "IS",
  },
  {
    name: "Marcus K.",
    role: "Automation Engineer",
    text: "Super clean dashboard and instantaneous proxy rotation. Customer support is top notch.",
    stars: 5,
    initials: "MK",
  },
];

const FAQ_DATA = [
  {
    q: "Can I receive my commission in platform credits instead of cash?",
    a: "Yes. If you choose to receive your earnings as Torch Credits, your commission rates will receive a +10% bonus over the standard cash payout rates. This option maximizes your value and allows you to reinvest directly into our proxy services at a discounted rate.",
  },
{
    q: "What is the minimum payout threshold?",
    a: (
      <div>
        <p className="mb-2">
          The minimum cash payout is $10. If your earnings fall below this threshold, you can either:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-stone-400">
          <li>Roll over the amount to the next month, or</li>
          <li>
            Convert it into Torch Credits, which can be used to purchase our services with exclusive discounts not available on the public website.
          </li>
        </ul>
      </div>
    ),
  },
  {
    q: "Are there any withdrawal fees?",
    a: "Yes, a small transaction fee will be applied based on your selected payout method (e.g., PayPal, Wise, etc.). This fee is deducted from your total payout.",
  },
  {
    q: "What is the Leaderboard Bonus?",
    a: "Each month, the top 3 performing affiliates receive an additional +5% bonus on their monthly payout. This bonus is calculated on top of their existing commission rate and is a great way to maximize your earnings.",
  },
{
    q: "What marketing materials are available to affiliates?",
    a: (
      <div>
        <p className="mb-2">
          All affiliates gain access to our Monthly Promo Packs, which include:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-stone-400">
          <li>Branded banners</li>
          <li>
            Seasonal social media content
          </li>
            <li>
            High-converting creatives
            <br/>
            These resources are designed to help you improve performance and increase conversions.
          </li>

        </ul>
      </div>
    ),
  },
{
    q: "Why should I convert small earnings into Torch Credits?",
    a: (
      <div>
        <p className="mb-2">
          Torch Credits offer:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-stone-400">
          <li>Higher value (+10% commission bonus)</li>
          <li>
            Access to exclusive discounts on proxy products
          </li>
            <li>
            Faster reinvestment into services that drive more referrals
            <br/>
            This helps affiliates scale their efforts without waiting for a cash payout.
          </li>

        </ul>
      </div>
    ),
  },
    {
    q: "When are commissions calculated and paid out?",
    a: "Commissions are calculated on a 30-day rolling basis and are paid out monthly. Payments will be made once your balance exceeds $10 or upon your request if you opt for Torch Credits.",
  },
];


// Helper for Trustpilot stars
const TrustpilotStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 my-1">
    {[...Array(rating)].map((_, i) => (
      <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
        <Star className="w-3 h-3 text-white fill-white" />
      </div>
    ))}
  </div>
);

export default function PartnersPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const filteredPartners =
    activeCategory === "All"
      ? PARTNERS
      : PARTNERS.filter((partner) => partner.category === activeCategory);
      
const [blogs, setBlogs] = useState<ProcessedBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

useEffect(() => {
  async function fetchWPBlogs() {
    try {
      // Constructs the request to fetch 3 posts with media embedded (_embed)
      const wpBaseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://cms.torchproxies.com/wp-json/wp/v2";
      const res = await fetch(`${wpBaseUrl}/posts?_embed&per_page=3`);

      if (res.ok) {
        const rawPosts: any[] = await res.json();

        if (Array.isArray(rawPosts)) {
          const formattedPosts: ProcessedBlog[] = rawPosts.map((post) => {
            // Extract & clean title
            const rawTitle = post.title?.rendered || "";
            const cleanTitle = rawTitle
              .replace(/&#8211;/g, "-")
              .replace(/&#8217;/g, "'")
              .replace(/&amp;/g, "&");

            // Extract featured image from _embedded WP media payload
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              post.jetpack_featured_media_url ||
              "";

            // Extract primary category name
            const tag =
              post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";

            return {
              id: post.id,
              title: cleanTitle,
              image: image,
              tag: tag,
              slug: post.slug || "",
            };
          });

          setBlogs(formattedPosts);
        }
      }
    } catch (error) {
      console.error("Failed to fetch WordPress blog posts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  fetchWPBlogs();
}, []);

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className={`${urbanist.className} bg-[#0a0a0a] text-white font-['Urbanist'] min-h-screen`}>
      
      {/* ── SECTION 1: PAGE HEADER ────────────────────────────────────────── */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-medium tracking-tight mb-4 text-white">
          Our Partners
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base lg:text-[18px] max-w-2xl mx-auto leading-relaxed mb-6">
          TorchProxies partners with industry leaders to bring you tools that work seamlessly with our proxy network.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FE4A01]" />
            <span>Trusted partner integrations</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FE4A01]" />
            <span>Priority documentation & setup</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FE4A01]" />
            <span>Exclusive discount offers</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CATEGORY FILTER & PARTNER GRID ────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-[#FE4A01] text-xs sm:text-sm uppercase tracking-widest font-medium block mb-2">
            Category
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6">
            Select category
          </h2>

          {/* Interactive Category Buttons */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FE4A01] text-white shadow-[0_0_15px_rgba(254,74,1,0.4)]"
                      : "bg-[#141414] text-zinc-400 border border-stone-800/80 hover:text-white hover:border-stone-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#0e0e0e] border border-stone-800/80 hover:border-stone-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
            >
              <div>
                {/* Logo Box */}
                <div className="w-24 h-12 relative mb-6 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                  {partner.name}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>

                {/* Features List (If Available) */}
                {partner.features && (
                  <div className="mt-4 pt-4 border-t border-stone-800/60 space-y-2">
                    {partner.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#FE4A01] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: INTERACTIVE CTA BANNER ──────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white font-['Urbanist']">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center overflow-hidden border border-stone-900"
            style={{
              background:
                "linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-2xl sm:rounded-3xl pointer-events-none" />

            <div className="max-w-5xl relative z-10 mx-auto">
              <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium tracking-tight mb-3 sm:mb-4 leading-tight sm:leading-[1.1] text-[#FFF6EC]">
                Start your efficient proxy and <br className="hidden md:block" />
                scraping journey
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed mb-6 sm:mb-8 text-center">
                Effortlessly test, deploy and expand your web data projects with user-friendly, high quality and cost-effective infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => router.push("https://dashboard.torchproxies.com/")}
                  className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-white text-black font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:scale-[1.02] active:scale-[0.99]"
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-black">
                      Get Started Now
                    </span>
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

      {/* ── SECTION 4: TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-950/20 overflow-hidden font-['Urbanist']">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#FE4A01] text-xs sm:text-sm lg:text-[16px] font-medium tracking-wider uppercase block mb-2 sm:mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium mb-3 sm:mb-4 tracking-tight text-white leading-tight">
              Customers prefer TorchProxies over other<br className="hidden sm:block" /> proxy brands
            </h2>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-normal">
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between bg-[#070707] border border-stone-900 p-6 sm:p-8 rounded-2xl sm:rounded-[24px] min-w-[280px] sm:min-w-[340px] max-w-[360px] md:min-w-[380px] h-[260px] sm:h-[280px] shrink-0"
                >
                  <div>
                    <div className="text-white font-bold text-sm sm:text-[15px] mb-2 tracking-tight line-clamp-1">
                      {review.text.split(".")[0]}
                    </div>
                    <TrustpilotStars rating={review.stars} />
                    <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal mt-2">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-stone-900/50">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#FE4A01] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0">
                      {review.initials}
                    </div>
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

              {/* Loop Duplicate for Seamless Marquee */}
              {REVIEWS.map((review, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex flex-col justify-between bg-[#070707] border border-stone-900 p-6 sm:p-8 rounded-2xl sm:rounded-[24px] min-w-[280px] sm:min-w-[340px] max-w-[360px] md:min-w-[380px] h-[260px] sm:h-[280px] shrink-0"
                >
                  <div>
                    <div className="text-white font-bold text-sm sm:text-[15px] mb-2 tracking-tight line-clamp-1">
                      {review.text.split(".")[0]}
                    </div>
                    <TrustpilotStars rating={review.stars} />
                    <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal mt-2">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-stone-900/50">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#FE4A01] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0">
                      {review.initials}
                    </div>
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

      {/* ── SECTION 5: READ OUR BLOGS ─────────────────────────────────────── */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#FE4A01] text-xs sm:text-sm uppercase tracking-widest font-medium block mb-2">
            Blogs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white">
            Read our blogs
          </h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-stone-900 bg-[#0e0e0e] h-[320px] animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              const hasImageFailed = failedImages[blog.id] || !blog.image;

              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-900 bg-[#0e0e0e] hover:border-stone-800 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-stone-900 via-stone-950 to-black flex items-center justify-center">
                    {!hasImageFailed ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        onError={() => handleImageError(blog.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-stone-700 font-bold text-3xl tracking-tighter select-none opacity-40">
                        TORCH
                      </div>
                    )}

                    {blog.tag && (
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white border border-white/10 z-10">
                        {blog.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-[#FE4A01] transition-colors leading-snug">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>

      {/* ── SECTION 6: FAQ ────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist']">
        <div className="absolute inset-x-0 bottom-0 h-[300px] sm:h-[450px] z-0 pointer-events-none select-none">
          <Image
            src="/images/contact-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom opacity-100"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#FE4A01] text-xs sm:text-sm lg:text-[16px] font-medium tracking-widest uppercase block mb-2 sm:mb-3">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white leading-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-px">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border-b border-stone-800 last:border-none group"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left py-4 sm:py-6 flex items-center justify-between text-base sm:text-lg font-medium text-stone-200 hover:text-white transition-colors gap-4 cursor-pointer"
                  >
                    <span className="pr-2">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-[#FE4A01]" : "group-hover:text-stone-300"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-4 sm:pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-stone-400 text-xs sm:text-sm lg:text-[15px] leading-relaxed pr-6 sm:pr-10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />
      </section>

    </div>
  );
}
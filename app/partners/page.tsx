"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";
import { ChevronDown, Star } from "lucide-react";

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
  | "Cloud Services"
  | "Proxy Benchmarking Tools";

interface Partner {
  id: string;
  name: string;
  category: Category;
  logo: string;
  description: string;
  features?: string[];
  websiteUrl?: string; // New optional field for direct links
}

interface Review {
  name: string;
  role: string;
  text: string;
  stars: number;
  avatar?: string;
  initials?: string;
}

// ── Data ────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  "All",
  "Antidetect Browsers",
  "Automation & Security",
  "Captcha Solvers",
  "Cloud Services",
];

const PARTNERS: Partner[] = [
  // ── UPDATED GEELARK DATA ──
  {
    id: "gee-lark",
    name: "GeeLark",
    category: "Antidetect Browsers",
    logo: "/images/partners/geelark.jpg",
    description:
      "GeeLark is the first antidetect phone, designed for multi-accounting in mobile apps. By providing access to remote Android phones with unique fingerprints, GeeLark is ideal for managing multiple accounts on mobile and capturing mobile traffic efficiently, eliminating the needs for physical phones.",
    features: [
      "Real Android phones hosted in the cloud, each with randomized device fingerprints",
      "Control several cloud phones from one computer",
      "AI features for easily creating engaging content",
      "Automation tools, including the synchronizer, RPA and API",
      "Use of camera and live streaming supported",
      "Smooth performance and high compatibility without taking up local disk space",
      "Flexible subscriptions, including a free plan",
    ],
    websiteUrl: "https://www.geelark.com/",
  },
  // ── END UPDATED GEELARK DATA ──
  {
    id: "undetectable",
    name: "Undetectable Browser",
    category: "Antidetect Browsers",
    logo: "/images/partners/detectable.png",
    description:
      "Undetectable browser – a professional anti-detect browser for real fingerprints with high trust. Uptime 99,99%. Has API, mass extension installation, profile creation, cookie-bot. An ideal tool for comfortable work with a large number of profiles and increased anonymity, for multi-accounting, crypto wallets, and parsing.",
    features: [
      "TORCHPROXIES20 – 20% discount on the purchase of any monthly license",
    ],
    websiteUrl:
      "https://undetectable.io/?utm_source=torchproxies&utm_medium=affiliate",
  },
  {
    id: "hidemium",
    name: "Hidemium",
    category: "Antidetect Browsers",
    logo: "/images/partners/hidemium.png",
    description:
      " Hidemium, an anti-detect solution, ensures a highly secure environment for managing numerous accounts. It shields your device and real IP effectively, preventing WebRTC leaks. With automated functions, simply drag and drop buttons to execute browser tasks, mimicking real user behavior effortlessly.",
    websiteUrl: "#",
  },
  {
    id: "MuLogin Antidetect Browser",
    name: "MuLogin Antidetect Browser",
    category: "Antidetect Browsers",
    logo: "/images/partners/mulligan.png",
    description:
      "Stay undetected with MuLogin — the leading anti-detect browser with real device fingerprint emulation and anti-tracking technology. Try it free!",
    websiteUrl: "#",
  },
  {
    id: "Cloaking House",
    name: "Cloaking House",
    category: "All",
    logo: "/images/partners/capsolver.png",
    description:
      "CaptchaAI is an advanced AI-powered CAPTCHA-solving service built to save you time and resources by automatically solving reCAPTCHA, image CAPTCHAs, and more with high accuracy. Designed for developers and automation users, it delivers reliable, scalable performance at the most affordable price on the market.",
    websiteUrl: "#",
  },
  {
    id: "capsolver-ai",
    name: "Capsolver AI",
    category: "Captcha Solvers",
    logo: "/images/partners/captcha.png",
    description:
      "CaptchaAI is an advanced AI-powered CAPTCHA-solving service built to save you time and resources by automatically solving reCAPTCHA, image CAPTCHAs, and more with high accuracy. Designed for developers and automation users, it delivers reliable, scalable performance at the most affordable price on the market.",
    features: [
      "Special Offer for Torch Proxies Users",
      "Get up to 15% OFF all plans — no hidden fees, no limits.",
      "Solve smarter. Spend less. Scale faster.",
    ],
    websiteUrl: "https://captchaai.com/lp/torchproxies-special-offer.289953",
  },
  {
    id: "FlashID",
    name: "FlashID",
    category: "Antidetect Browsers",
    logo: "/images/partners/flashid.png",
    description:
      "Featuring Cloud Phone & Anti-Detect Browser technology, FlashID offers an all-in-one solution for secure multi-account management and automation. The tool of choice for global e-commerce and social media teams to scale safely and grow faster.",
    websiteUrl: "#",
  },
  {
    id: "linken-sphere",
    name: "Linken Sphere",
    category: "Antidetect Browsers",
    logo: "/images/partners/linken-sphere.png",
    description:
      " Linken Sphere – an anti-detect browser for secure, scalable work with any anti-fraud systems. Create sessions with one click, bulk-import data, and manage profiles securely. Convenient proxy manager, role-based team access controls, private proxies at competitive prices, traffic-usage optimization, and other tools that simplify your workflow.",
    websiteUrl:
      "https://ls.app/?utm_source=torchproxies&utm_medium=partner&utm_campaign=listing",
  },
  {
    id: "duoplus.net",
    name: "duoplus.net",
    category: "Antidetect Browsers",
    logo: "/images/partners/duoplus.png",
    description: "",
    features: [
      "1st antidetect cloud phone to manage your multiple mobile social media accounts without any association",
      "promo code: Use “torchlabs” code to get one-month free cloud phone",
    ],
    websiteUrl: "https://www.duoplus.net/share/torchlabs",
  },

  {
    id: "vmlogin",
    name: "VMLogin Antidetect Browser",
    category: "Antidetect Browsers",
    logo: "/images/partners/Vmlogin.png",
    description:
      " Advanced anti-detect browser for secure multi-account management — real browser environments, unique fingerprints, automation API, and team collaboration. Stable, secure, and ideal for stealth marketing and account scaling. 3-day FREE trial available.",
    websiteUrl: "https://www.vmlogin.us/?ref=torchproxies",
  },
  {
    id: "scrappy",
    name: "Scrappy",
    category: "All",
    logo: "/images/partners/Scrappey.png",
    description:
      "Scrappey.com simplifies web scraping with a robust API that handles anti-bot measures and CAPTCHAs, along with features like rotating proxies and headless browsing for seamless extraction. It offers transparent pricing plans suitable for individuals, startups, and enterprises, with features like concurrent requests, premium proxies, and JavaScript rendering, and hassle-free cancellation options.",
    websiteUrl: "https://scrappey.com/",
  },
  {
    id: "Pay2.House",
    name: "Pay2.House",
    category: "All",
    logo: "/images/partners/pay2house.png",
    description:
      "virtual cards for stable and reliable work with advertising platforms, including Facebook, Google, TikTok, as well as online services. Trusted BINs ensure high approval rates, cards support Apple Pay and most international sites, while mass issuance and API make scaling and automation effortless.",
    websiteUrl:
      "https://pay2.house/?utm_source=torchproxies&utm_medium=referral&utm_campaign=torchproxies",
  },
  {
    id: "Proxyvero",
    name: "Proxyvero",
    category: "Proxy Benchmarking Tools",
    logo: "/images/partners/proxyvero.png",
    description:
      "ProxyVero is an independent proxy analytics and benchmarking platform. We test proxy providers using real-world scenarios and continuously collect performance data to help users compare providers based on measurable results, pricing, reliability, and use-case fit. Our goal is to make proxy data more transparent and help users make clearer decisions.",
    websiteUrl:
      "https://www.proxyvero.com/?utm_source=torchproxies&utm_medium=partner&utm_campaign=partners_page",
  },
  {
    id: "MostLogin",
    name: "MostLogin",
    category: "Proxy Benchmarking Tools",
    logo: "/images/partners/MostLogin.png",
    description:
      "MostLogin is an all-in-one system: Antidetect Browser + Cloud Phone + Free IP Proxy + MCP + RPA + API + Team Collaboration.\nPromo code: L8YOUTK9S4 (Get 10% off on browser profiles)",
    websiteUrl: "https://www.mostlogin.com/?invite-code=friendlylink1",
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
          The minimum cash payout is $10. If your earnings fall below this
          threshold, you can either:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-stone-400">
          <li>Roll over the amount to the next month, or</li>
          <li>
            Convert it into Torch Credits, which can be used to purchase our
            services with exclusive discounts not available on the public
            website.
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
          <li>Seasonal social media content</li>
          <li>
            High-converting creatives
            <br />
            These resources are designed to help you improve performance and
            increase conversions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    q: "Why should I convert small earnings into Torch Credits?",
    a: (
      <div>
        <p className="mb-2">Torch Credits offer:</p>
        <ul className="list-disc pl-5 space-y-1 text-stone-400">
          <li>Higher value (+10% commission bonus)</li>
          <li>Access to exclusive discounts on proxy products</li>
          <li>
            Faster reinvestment into services that drive more referrals
            <br />
            This helps affiliates scale their efforts without waiting for a cash
            payout.
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
        const wpBaseUrl =
          process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
          "https://cms.torchproxies.com/wp-json/wp/v2";

        const res = await fetch(`${wpBaseUrl}/posts?_embed&per_page=3`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`WordPress API returned status: ${res.status}`);
        }

        const rawPosts: any[] = await res.json();

        if (Array.isArray(rawPosts)) {
          const formattedPosts: ProcessedBlog[] = rawPosts.map((post) => {
            const rawTitle = post.title?.rendered || "";
            const cleanTitle = rawTitle
              .replace(/&#8211;/g, "-")
              .replace(/&#8217;/g, "'")
              .replace(/&amp;/g, "&");

            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              post.jetpack_featured_media_url ||
              "";

            const tag = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";

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
      } catch (error) {
        console.error("Failed to fetch WordPress blog posts:", error);
        setBlogs([]); // Explicitly set empty array so UI doesn't break or stay stuck
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
    <div
      className={`${urbanist.className} bg-[#0a0a0a] text-white font-['Urbanist'] min-h-screen`}
    >
      {/* ── SECTION 1: PAGE HEADER ────────────────────────────────────────── */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-medium tracking-tight mb-4 text-white">
          Our Partners
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base lg:text-[18px] max-w-2xl mx-auto leading-relaxed mb-6">
          TorchProxies partners with industry leaders to bring you tools that
          work seamlessly with our proxy network.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
            <span>Trusted partner integrations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
            <span>Priority documentation & setup</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
            <span>Exclusive discount offers</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CATEGORY FILTER & PARTNER GRID ────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-[#FE4A01] text-xs sm:text-sm tracking-widest font-medium block mb-2">
            Category
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6">
            Select category
          </h2>

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
          {filteredPartners.map((partner) => {
            // UI CONDITION: GeeLark gets specific styling based on final design
            const isGeeLark = partner.id === "gee-lark";
            const hasLink = Boolean(partner.websiteUrl);
            const CardWrapper = hasLink ? "a" : "div";

            return (
              <CardWrapper
                key={partner.id}
                {...(hasLink
                  ? {
                      href: partner.websiteUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`bg-[#0e0e0e] border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  isGeeLark
                    ? "border-[#FE4A01] shadow-[0_0_15px_rgba(254,74,1,0.1)]"
                    : "border-stone-800/80 hover:border-stone-700"
                }`}
              >
                <div>
                  {/* Logo Box */}
                  <div className="w-48 h-28 relative mb-6 rounded-lg pl-0 pr-2 flex items-center justify-start overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain object-left p-1"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                    {partner.name}
                  </h3>
                  {/* <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 whitespace-pre-line">
                    {partner.description}
                    
                  </p> */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {partner.description.split("\n").map((line, index) =>
                      index === 0 ? (
                        <span key={index} className="block">
                          {line}
                        </span>
                      ) : (
                        <strong
                          key={index}
                          className="block text-white font-bold mt-2"
                        >
                          {line}
                        </strong>
                      ),
                    )}
                  </p>

                  {/* ── UPDATED FEATURES RENDERING ── */}
                  {partner.features && (
                    <div className="mt-4 pt-4 border-t border-stone-800/60">
                      {isGeeLark ? (
                        // UI: GeeLark uses Bullets and "Highlighted features" title
                        <>
                          <p className="text-sm font-medium text-white mb-3 tracking-tight">
                            Highlighted features:
                          </p>
                          <ul className="list-disc list-outside pl-4 space-y-1.5 marker:text-[#ffffff]">
                            {partner.features.map((feat, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-zinc-300 leading-relaxed"
                              >
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        // UI: Normal partners use Dots (Updated UI)
                        <div className="space-y-2">
                          {partner.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-zinc-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white block mt-1.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {/* ── END UPDATED FEATURES RENDERING ── */}
                </div>

                {/* Optional website link button for GeeLark card */}
                {isGeeLark && partner.websiteUrl && (
                  // <Link
                  //   href={partner.websiteUrl}
                  //   target="_blank"
                  //   className="inline-block mt-6 text-sm font-medium text-[#FE4A01] hover:text-[#ff6b2b] hover:underline transition-colors"
                  // >
                  //   Visit {partner.name} Website
                  // </Link>
                  <span className="inline-block mt-6 text-sm font-medium text-[#FE4A01] group-hover:text-[#ff6b2b] group-hover:underline transition-colors"></span>
                )}
              </CardWrapper>
            );
          })}
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
                Start your efficient proxy and{" "}
                <br className="hidden md:block" />
                scraping journey
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed mb-6 sm:mb-8 text-center">
                Effortlessly test, deploy and expand your web data projects with
                user-friendly, high quality and cost-effective infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() =>
                    router.push("https://dashboard.torchproxies.com/")
                  }
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
              Customers prefer TorchProxies over other
              <br className="hidden sm:block" /> proxy brands
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
                        isOpen
                          ? "rotate-180 text-[#FE4A01]"
                          : "group-hover:text-stone-300"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 pb-4 sm:pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="text-stone-400 text-xs sm:text-sm lg:text-[15px] leading-relaxed pr-6 sm:pr-10">
                      {faq.a}
                    </div>
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

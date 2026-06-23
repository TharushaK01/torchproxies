"use client";
import React, { useState } from 'react';
import { Check, ChevronDown,} from 'lucide-react';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag,} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

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

interface Step {
    id: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        id: '01',
        title: 'Create Your Account',
        description: 'Sign up on TorchLabs to unlock reseller tools and API access.',
    },
    {
        id: '02',
        title: 'Add Funds & Get API Key',
        description: 'Deposit as low as $1 and copy your API key to start integrating.',
    },
    {
        id: '03',
        title: 'Start Selling Proxies',
        description: 'Connect the API to your system and begin offering proxies to your clients instantly.',
    },
];


const FeatureCard = ({ title, description, imageSrc, imageAlt }: FeatureCardProps) => {
    return (
        <div className="bg-[#0e0e0e]/40 border border-stone-900 rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden group hover:border-stone-800 transition-all duration-300">
            {/* Text Header Content */}
            <div className="mb-12 max-w-lg">
                <h3 className="text-[28px] md:text-[28px] font-medium text-white mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-stone-400 text-[18px] md:text-[18px] leading-relaxed font-regular">
                    {description}
                </p>
            </div>

            {/* Visual Mockup Container Layer */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#070707]/60 border border-stone-950/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,74,1,0.03)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-w-7xl) 50vw, 100vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};


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


    const cards = [
        {
            title: "Proxy Dashboard",
            description: "A centralized platform for resellers to manage inventory, monitor client usage, and streamline proxy distribution at scale.",
            imageSrc: "/images/proxy_dashboard.png", // Replace with your actual dashboard mockup path
            imageAlt: "Torch Proxies dashboard visual analytics management screen interface screenshot overview"
        },
        {
            title: "Proxy API",
            description: "A developer-friendly API that enables resellers to automate proxy delivery and integrate seamlessly with existing systems.",
            imageSrc: "/images/proxy_api.png", // Replace with your actual API/Swagger mockup path
            imageAlt: "Torch Proxies Swagger documentation panel showing active API endpoint request loops structure parameters"
        }
    ];


    return (
        <div className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">
{/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
<header className="relative z-20 min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center mt-[80px] px-6 pt-28 pb-12 overflow-visible space-y-6 font-['Urbanist']">

    <div className="absolute bottom-0 left-0 w-full h-[65vh] z-0">

        <Image
            src="/images/hero_back.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom"
        />

        {/* Marquee at bottom of image */}
        <div className="absolute -bottom-12 left-0 w-full z-[999]">
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
            B2B reseller solutions <br />
        </h1>

        <p className="max-w-3xl mx-auto text-stone-400 text-base text-[18px] sm:text-[18px] mb-4 leading-relaxed">
            Supercharge your operations with our all in one toolkit featuring a powerful Proxy API, a free Discord Proxy Bot and a user friendly Dashboard. Everything you need to scale smarter.
        </p>

        <div className="py-8 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-[16px] font-medium">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-15">

            <button
                onClick={() => router.push('https://dashboard.torchproxies.com/')}
                className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]"
            >

                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                        Explore B2B products
                    </span>

                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                        Explore B2B products
                    </span>

                </div>
            </button>

        </div>

    </div>

</header>

            <section className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden font-['Urbanist'] mt-[60px]">
                {/* Background Ambient Glow Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(254,74,1,0.02)_0%,transparent_75%)] pointer-events-none" />

                {/* Max Content Structural Wrapper */}
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {cards.map((card, index) => (
                            <FeatureCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                imageSrc={card.imageSrc}
                                imageAlt={card.imageAlt}
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* ── SECTION 7: INTERACTIVE CTA BANNER ────────────────────────── */}
            {/* Upgrade CTA Banner */}
            <section className="pb-[80px] sm:pb-[80px] mx-[120px] font-['Urbanist']">
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
                               Want a custom dashboard?<br className="hidden md:block" />
                            </h2>

                            <p className="text-stone-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
                                We build tailored proxy dashboards for resellers, giving them the tools to track inventory, monitor client usage, and manage distribution with ease.
                            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

                        {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
                        <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#ffffff] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:scale-[1.02] active:scale-[0.99]">

                            {/* Fast 3D text track wrapper */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">

                                {/* Default State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]  text-black">
                                     Get started now
                                </span>

                                {/* Hover State Text */}
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-black">
                                    Get started now
                                </span>

                            </div>
                        </button>
                        </div>
{/* 
                            <button className="px-10 py-4 bg-white text-black font-medium rounded-2xl text-lg hover:bg-stone-100 transition-all active:scale-95">
                                Get started now
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
<section className="pb-[80px] sm:pb-[80px] mx-[120px] bg-stone-950/20  overflow-hidden font-['Urbanist']">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header Text Nodes */}
        <div className="text-center mb-16">
            <span className="text-[#FE4A01] text-[16px] font-medium tracking-widest block mb-3">
                           Testimonials
                        </span>
          <h2 className="text-[42px] sm:text-5xl font-medium mb-4 tracking-tight text-white">
            Customers prefer Torch Proxies over <br/>other proxy brands
          </h2>

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
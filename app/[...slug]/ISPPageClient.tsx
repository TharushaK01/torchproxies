"use client";

import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface FeatureItemProps {
    text: string | React.ReactNode;
}

// Reusable Checkmark Component
const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
    <div className="flex items-start space-x-3 text-sm text-gray-400">
        <div className="flex-shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-[#00E5A3]" strokeWidth={3} />
        </div>
        <span className="leading-relaxed">{text}</span>
    </div>
);

interface ISPPageClientProps {
    data: {
        slug: string;
        countryName: string;
        countryCode: string;
        ispCount: string;
    };
    dynamicDescriptions: {
        feat1: string;
        feat2: string;
        feat3: string;
        feat4: string;
        feat5: string;
        feat6: string;
    };
}

// ── MARQUEE ANIMATION COMPONENT ──────────────────────────────────────
const Marquee: React.FC = () => {
    return (
        <div className="w-full overflow-hidden bg-[#FE4A01] py-3 mt-50 whitespace-nowrap select-none flex">
            <div className="flex animate-marquee text-xs font-semibold tracking-wider text-white uppercase">
                <div className="flex items-center space-x-8 pr-8">
                    <span>• 99.9% uptime guaranteed</span>
                    <span>• Blazing fast proxy speeds</span>
                    <span>• Global geo targeting support</span>
                    <span>• Secure & anonymous connections</span>
                    <span>• Unlimited sessions & rotations</span>
                    <span>• Built for scraping & automation</span>
                </div>
                <div className="flex items-center space-x-8 pr-8" aria-hidden="true">
                    <span>• 99.9% uptime guaranteed</span>
                    <span>• Blazing fast proxy speeds</span>
                    <span>• Global geo targeting support</span>
                    <span>• Secure & anonymous connections</span>
                    <span>• Unlimited sessions & rotations</span>
                    <span>• Built for scraping & automation</span>
                </div>
            </div>
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
};

// ── MAIN EXPORTABLE INTERFACE MODULE ───────────────────────────────────
export default function ISPPageClient({ data, dynamicDescriptions }: ISPPageClientProps) {
    const router = useRouter();
    const { countryName, countryCode, ispCount } = data;
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    {/* 🛠️ FIX: Mapped descriptions to pull from custom dynamic data with specific clean text overrides */}
    const features = [
        {
            icon: "/images/country.svg",
            title: "Enhanced Privacy",
            desc: dynamicDescriptions?.feat1 || `Secure your online presence with highly reliable residential ${countryName} subnets.`
        },
        {
            icon: "/images/country.svg",
            title: "Data Access & Analysis",
            desc: dynamicDescriptions?.feat2 || `Scrape premium data nodes smoothly without experiencing blocks inside ${countryName}.`
        },
        {
            icon: "/images/country.svg",
            title: "Content Control",
            desc: dynamicDescriptions?.feat3 || "Manage structural content filters and bypass routing configurations dynamically."
        },
        {
            icon: "/images/country.svg",
            title: "Social Media Management",
            desc: dynamicDescriptions?.feat4 || `Unlock localized data streams across regional infrastructure nodes safely.`
        },
        {
            icon: "/images/country.svg",
            title: "Unrestricted Access",
            desc: dynamicDescriptions?.feat4 || `Unlock localized data streams across regional infrastructure nodes safely.`
        },
        {
            icon: "/images/country.svg",
            title: "Market Research",
            desc: dynamicDescriptions?.feat5 || `Analyze competitive regional deployments securely utilizing dynamic ISP allocations.`
        },
    ];

    const topFeatures = features.map(f => f.title);

    const faqData = [
        {
            q: "What are location-based proxies?",
            a: "Location-based proxies are proxies with IP addresses assigned to specific geographical locations. They allow users to appear as if they are accessing the internet from a particular country, city, or region."
        },
        {
            q: "Why is the location of a proxy important?",
            a: "The location of a proxy is important for several reasons, including accessing geo-restricted content, conducting location-specific market research, performing localized SEO analysis, and ensuring compliance with regional data privacy laws."
        },
        {
            q: "How can location-based proxies help with accessing geo-restricted content?",
            a: "Location-based proxies can mask your actual IP address and make it appear as if you are browsing from a specific location. This allows you to access content, services, and websites that are restricted to certain regions."
        },
        {
            q: "How do location-based proxies aid in localized SEO efforts?",
            a: "They allow businesses to see how their website ranks in search engines in different locations, check local competition, and ensure that their SEO strategies are effective across various regions."
        },
        {
            q: "What types of location-based proxies do you offer?",
            a: "We offer a variety of location-based proxies, including Country-specific Proxies, City-specific Proxies, and Regional Proxies assigned to broader spaces."
        },
        {
            q: "How do I select the location of a proxy?",
            a: "You can select the location of a proxy through our proxy dashboard or API. Simply choose the desired country, city, or region from the available options."
        },
        {
            q: "How reliable are location-based proxies?",
            a: "Our location-based proxies are highly reliable, offering consistent performance and uptime. They are sourced from reputable providers and are regularly monitored to ensure they meet quality standards."
        },
        {
            q: "What kind of speed and latency can I expect from location-based proxies?",
            a: "The speed and latency of location-based proxies can vary depending on the specific location and the distance from your actual location. However, we strive to provide high-speed and low-latency connections for optimal performance."
        },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">
            
            {/* ── FLAG BADGE AREA ─────────────────────────────────────────── */}
            <div className="max-w-md mx-auto pt-24 px-4 text-center z-20 relative font-['Urbanist']">
            </div>

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center px-6 pt-28 pb-12 overflow-hidden space-y-6 font-['Urbanist']">
                <div className="absolute bottom-0 left-0 w-full h-[65vh] z-0">
                    <Image
                        src="/images/hero_back.png"
                        alt=""
                        fill
                        priority
                        className="object-cover object-bottom"
                    />
                    <div className="absolute -bottom-8 left-0 w-full z-10">
                        <Marquee />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto text-center z-10 font-['Urbanist']">
                    <div className="flex items-center justify-center mb-6">
                        <img
                            src="/images/TrustPiolet.png"
                            alt="Excellent 5-star rating on Trustpilot"
                            className="h-6 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>

                    <h1 className="max-w-[1600px] mx-auto sm:text-[40px] text-[40px] lg:text-[55px] font-regular tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">
                        Fast and Secure {countryName} Proxies at Your Fingertips
                    </h1>

                    <p className="max-w-[1600px] mx-auto text-stone-400 text-[18px] sm:text-xl mb-4 leading-relaxed">
                        Effortlessly connect to fast, secure, and reliable proxies in {countryName}, giving you the freedom to browse, test and manage your projects without interruptions.
                    </p>

                    <div className="py-4 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-sm font-medium">
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

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
                        <button
                            onClick={() => router.push('https://dashboard.torchproxies.com/')}
                            className="group relative overflow-hidden w-full max-w-[400px] sm:max-w-[400px] h-[56px] px-8 bg-orange-600 hover:bg-orange-500 text-white font-bold text-base rounded-2xl tracking-[0.2px] text-center transition-all duration-200 ease-out shadow-[0_4px_30px_rgba(234,88,12,0.45)] hover:shadow-[0_6px_35px_rgba(234,88,12,0.6)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                                    Buy {countryName} Residential Proxies
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/95">
                                    Buy {countryName} Residential Proxies
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* ── SECTION 2: PRICING GRIDS ─────────────────────────────────── */}
            <section className="bg-[#0a0a0a] text-white py-20 px-6 font-['Urbanist']">
                <div className="flex flex-col items-center text-center w-full">
                    <span className="text-orange-500 font-regular text-[16px] mb-4 tracking-widest flex items-center justify-center gap-2">Our products</span>
                    <h2 className="text-[42px] md:text-5xl font-medium mb-6 max-w-4xl">Buy {countryName} ISP Proxies</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm font-regular text-gray-300">
                    {topFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Check className="text-orange-500 w-4 h-4" /> {f}
                        </div>
                    ))}
                </div>

                <div className="bg-[#0a0a0a] w-full max-w-7xl mx-auto px-4 py-12 text-white font-['Urbanist']">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-7 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative w-12 h-12 flex-shrink-0">
                                            <Image
                                                src="/images/ispproxies.svg"
                                                alt="ISP Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold tracking-tight font-['Urbanist']">ISP</h2>
                                            <p className="text-sm text-gray-400 mt-0.5 font-['Urbanist']">Static residential proxies with unlimited data.</p>
                                        </div>
                                    </div>
                                    <div className="bg-orange-950/40 border border-orange-900/50 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap font-['Urbanist']">
                                        From $4/GB per IP
                                    </div>
                                </div>

                                <div className="space-y-4 my-8 font-['Urbanist']">
                                    <FeatureItem text="Reliable and Stable Connections" />
                                    <FeatureItem text="ISP-grade Anonymity" />
                                    <FeatureItem 
                                        text={
                                            <span>
                                                Best for <span className="text-gray-300">Crypto, ticketing, web scraping, sneaker drops, social media, Pokémon,</span> and <span className="text-gray-300">Spotify automation</span>.
                                            </span>
                                        } 
                                    />
                                    <FeatureItem text="Quick Setup and Instant Activation" />
                                    <FeatureItem text="Versatility Across Applications" />
                                    <FeatureItem text="24/7 Dedicated Support" />
                                    <FeatureItem text="Global Coverage with Regional Optimization" />
                                </div>
                            </div>

                            <button className="w-full bg-[#121316] hover:bg-[#181a1f] text-white border border-zinc-800 text-sm font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 mt-4 active:scale-[0.99] font-['Urbanist']">
                                Try free now
                            </button>
                        </div>

                        <div className="md:col-span-5 bg-[#0b0c0e] border border-zinc-800 rounded-2xl relative overflow-hidden min-h-[350px] md:min-h-full flex items-center justify-center">
                            <div className="absolute inset-0 w-full h-full mix-blend-lighten">
                                <Image 
                                    src="/images/isp2.png"
                                    alt="Global ISP Coverage Network Map"
                                    fill
                                    className="object-cover object-right-bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: INDUSTRY LEADER INFORMATION ─────────────────────── */}
            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden -mt-[100px] font-['Urbanist']">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">
                                    <img src="/images/Industry_leader.png" alt={`Perfect for ${countryName} Scraping & Automation`} className="w-full h-auto object-cover rounded-2xl" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-[42px] md:text-5xl md:leading-snug font-medium tracking-tight">
                                Industry leader in fast proxy services for {countryName}
                            </h2>
                            <p className="text-gray-400 text-[16px] font-regular leading-relaxed">
                                TorchProxies' {countryName} proxies are among the fastest in the market. Reliable, stable, and highly anonymous {countryName} proxies allow you to scrape complex targets at any scale. Get your web scraping and automation tasks done faster with TorchProxies' {countryName} proxy IPs.
                            </p>
                            <ul className="text-gray-400 text-lg leading-relaxed">
                                <li>&#9679; High uptime (up to 99.9%)</li>
                                <li>&#9679; Pre selected and thoroughly tested proxies</li>
                                <li>&#9679; Minimal risk of IP blocks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: BENEFITS BLOCK ─────────────────────────────────── */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-[#0a0a0a] text-white -mt-[100px] font-['Urbanist']">
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">Features</span>
                    <h2 className="text-[42px] sm:text-[40px] font-medium tracking-tight mb-4 text-white">
                        Why Use {countryName} Residential Proxies?
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-[850px] mx-auto font-normal leading-relaxed">
                        There are countless ways to utilize a {countryName} IP address. Whether you’re accessing local market data, bypassing regional restrictions, or testing apps and games on local servers, our {countryName} proxy servers let you do it all without being physically present.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                    {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                            <div className="w-15 h-15 flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(254,74,1,0.2)] transition-transform duration-200 group-hover:scale-105">
                                <img src={feat.icon} alt={feat.title} className="w-15 h-15 object-contain" />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[23px] font-medium text-white tracking-tight">{feat.title}</h4>
                                <p className="text-stone-400 text-[13px] sm:text-sm leading-relaxed font-regular">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 5: CALL TO ACTION BANNER ──────────────────────────── */}
            <section className="bg-[#0a0a0a] py-20 px-6 mt-[-100px] relative overflow-hidden font-['Urbanist']">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[40px] px-8 py-8 text-center">
                        <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)' }}>
                            <div className="relative z-10 max-w-full mx-auto">
                                <h2 className="text-[48px] md:text-[48px] font-medium tracking-tight mb-8 leading-[1.1]">
                                    Take Advantage of {countryName} ISP Proxies
                                </h2>
                                <p className="text-gray-400 text-[18px] max-w-4xl font-regular md:text-xl leading-relaxed mb-12 mx-auto">
                                    Effortlessly test, deploy, and scale your projects with user friendly, high quality and cost effective ISP proxy infrastructure tailored for any use case.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
                                    <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#ffffff] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:scale-[1.02] active:scale-[0.99]">
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
                </div>
            </section>

            {/* ── SECTION 6: SEO OVERVIEW TEXT BLOCK ────────────────────────── */}
            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden -mt-[100px] font-['Urbanist']">
                <div className="max-w-7xl mx-auto space-y-12">
                    <h2 className="text-[42px] sm:text-5xl font-regular tracking-tight text-white">
                        Experience the Advantage of TorchProxies <br />{countryName} ISP Proxies 
                    </h2>
                    <p className="text-gray-400 text-[18px] font-regular md:text-xl leading-relaxed text-left">
                        Free proxies may seem tempting, but they often lack security and reliability. TorchProxies {countryName} residential proxies ensure fast, secure and stable connections, protecting your data while maintaining high performance.
                    </p>
                    <p className="text-gray-400 text-[18px] font-regular md:text-xl leading-relaxed text-left">
                        Our premium {countryName} IP addresses are continuously refreshed, offer city-level targeting and come with 24/7 support. Whether you need datacenter or residential proxies, TorchProxies provides trusted, high-speed infrastructure for personal or business use.
                    </p>
                </div>
            </section>

            {/* ── SECTION 7: FAQ ACCORDION ────────────────────────── */}
            <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden -mt-[100px] font-['Urbanist']">
                <div className="absolute inset-x-0 bottom-0 h-[450px] z-0 pointer-events-none select-none">
                    <Image src="/images/contact-bg.png" alt="" fill priority className="object-cover object-bottom opacity-100" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="text-[#FE4A01] text-xs font-medium tracking-widest block mb-3">FAQ</div>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white">Frequently asked questions</h2>
                    </div>

                    <div className="space-y-px">
                        {faqData.map((faq, index) => {
                            const isOpen = activeFaq === index;
                            return (
                                <div key={index} className="border-b border-stone-800 last:border-none group">
                                    <button onClick={() => setActiveFaq(isOpen ? null : index)} className="w-full text-left py-6 flex items-center justify-between text-lg font-medium text-stone-200 hover:text-white transition-colors">
                                        <span>{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-stone-400 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#FE4A01]' : 'group-hover:text-stone-300'}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                                        <p className="text-stone-400 text-[15px] leading-relaxed pr-10">{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none z-0" />
            </section>
        </div>
    );
}
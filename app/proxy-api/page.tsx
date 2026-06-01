"use client";
import React, { useState } from 'react';
import { Check, ChevronDown, Shield, Zap, Globe, BarChart3, Activity, Sliders } from 'lucide-react';
import Flag from 'react-world-flags';
import { Database, RefreshCw, Layers, ShieldCheck, Infinity, Tag, CreditCard } from 'lucide-react';
import UseCasesSection from '@/components/home/UseCasesSection';
import Image from 'next/image';


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



export default function TorchProxiesLandingPage() {
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
    return (
        <div className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

            {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
 <div className="absolute inset-x-0 bottom-35 h-[600px] z-0 pointer-events-none select-none">
    <Image
        src="/images/hero_back.png"
        alt=""
        fill
        priority
        className="object-cover object-bottom opacity-100"
    />
</div>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <div className="flex items-center justify-center mb-6">
                        <img
                            src="/images/TrustPiolet.png"
                            alt="Excellent 5-star rating on Trustpilot"
                            className="h-6 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>

                    <h1 className="text-[60px] sm:text-6xl lg:text-7xl font-regular tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent">
                        The Backend infrastructure <br />
                        <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">behind your proxy business</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-[18px] sm:text-xl text-stone-400 mb-10 leading-relaxed">
                        Use our Proxy API to create sub users, assign data, generate proxies and build your own reseller dashboard or proxy storefront with full control over pricing and UI.
                    </p>

                    <div className="mt-[-50px] py-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 text-sm font-regular">
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Manage sub users instantly</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Unified access to multiple proxy networks</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Automate Traffic & Subscription Controls</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
                        <button className="w-full sm:w-60 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semi-bold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:scale-[1.01]">
                            Get API access
                        </button>
                        <button className="w-full sm:w-60 px-8 py-4 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 font-bold rounded-xl transition-all duration-200">
                            View API docs
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 text-stone-400 text-sm sm:text-base font-normal tracking-wide py-6">
                        <CreditCard className="w-4 h-4 text-stone-500" />
                        <span>No credit card needed. Instant access</span>
                    </div>

                    <div className="relative z-10 -mt-40 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                        <Marquee />
                    </div>
                </div>
            </header>

            {/* ── SECTION 2: Perfect for Every Scraping & Animations ─────────── */}
            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/full_api.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight">
                                What Is the TorchLabs Proxy API?
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                The TorchLabs Proxy API is a developer-friendly backend that lets you programmatically manage proxy access for your users. Instead of clicking through a dashboard, you can automate:
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                This API becomes the engine behind your proxy site, SaaS platform, automation tool, or internal system while TorchLabs handles the IP networks, sourcing, uptime and quality.
                            </p>
                            <ul className="text-gray-400 text-lg leading-relaxed">
                                <li>&#9679; Sub user creation</li>
                                <li>&#9679; Traffic limits (GB allocation)</li>
                                <li>&#9679; Authentication modes</li>
                                <li>&#9679; Proxy generation & delivery</li>
                                <li>&#9679; Provider specific proxy formats</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>


<section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* --- LEFT COLUMN: HEADLINE & CALL TO ACTION --- */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full sticky top-24">
          <span className="text-[#FF4F00] text-[16px] font-regular tracking-wider mb-3">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.15] text-white max-w-md">
            Launch Your Own Proxy Business with TorchLabs in Just three Simple Steps
          </h2>
          <p className="text-zinc-500 text-[18px] md:text-base mt-4 max-w-md font-regular leading-relaxed">
            Follow four simple steps to launch your proxy business with TorchLabs, no infrastructure or IP blocks needed.
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FF4F00] hover:bg-[#e04600] text-white font-semi-bold text-[18px] rounded-xl transition duration-150 active:scale-[0.98] shadow-[0_8px_30px_rgb(255,79,0,0.2)]">
              Become an affiliate now
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: TIMELINE STEPS --- */}
        <div className="lg:col-span-7 relative pl-2 sm:pl-6 lg:pl-12 w-full">
          
          {/* Vertical Center Connecting Line */}
          <div 
            className="absolute left-[34px] sm:left-[50px] lg:left-[74px] top-8 bottom-8 w-[1px] bg-zinc-900" 
            aria-hidden="true" 
          />

          <div className="space-y-12 relative">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 sm:gap-8 items-start group">
                
                {/* Number Orb */}
                <div className="relative z-10 flex items-center justify-center min-w-[52px] h-[52px] rounded-full bg-[#050505] border border-zinc-900 shadow-[0_0_15px_rgba(255,255,255,0.02)] transition duration-300 group-hover:border-zinc-800">
                  <span className="text-white text-[24px] font-semibold tracking-wide font-mono">
                    {step.id}
                  </span>
                </div>

                {/* Text Block Content */}
                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-medium tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-[18px] font-regular leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>



            {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-[#0a0a0a] text-white">
                {/* ── HEADER ─────────────────────────────────────────────── */}
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-xs font-bold tracking-wider block mb-3">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-[40px] font-regular tracking-tight mb-4 text-white">
                        Enhanced Features for Heavy & Strict Workloads
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                       Upgraded performance, smarter rotation, and stronger stability built for high-volume scraping and stricter websites.
                    </p>
                </div>

                {/* ── FEATURES GRID ──────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                    {features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4 group">

                            {/* Round Solid Orange Icon Badge */}
                            <div className="w-11 h-11 rounded-full bg-[#FE4A01] flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(254,74,1,0.2)] transition-transform duration-200 group-hover:scale-105">
                                {feat.icon}
                            </div>

                            {/* Text Information Elements */}
                            <div className="space-y-1.5">
                                <h4 className="text-lg font-regular text-white tracking-tight">
                                    {feat.title}
                                </h4>
                                <p className="text-stone-400 text-[13px] sm:text-sm leading-relaxed font-normal">
                                    {feat.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>



            {/* ── SECTION 2: Perfect for Every Scraping & Animations ─────────── */}
            <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Row 1: Easy Client Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight">
                                Powered by Clear, Simple API Guides
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Access clear, developer-ready API guides to help you integrate TorchLabs’ Proxy API in minutes. Learn how to manage sub-users, set traffic limits, and generate proxy formats with simple REST calls.
                            </p>
                            <ul className="text-gray-400 text-lg leading-relaxed">
                                <li>&#9679; Sub user creation & management</li>
                                <li>&#9679; Traffic limits & usage controls</li>
                                <li>&#9679; Proxy generation & formats</li>
                                <li>&#9679; Provider-Specific Setup Guides</li>
                            </ul>

                        </div>

                        {/* Visual Side */}
                        <div className="relative group">
                            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">

                                    <img
                                        src="/images/Simple_API_Guides.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>


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
                                Get started with Plan X residential proxies<br className="hidden md:block" />
                            </h2>

                            <p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Unlock premium speed, stability and higher success rates for demanding or strict websites.
                            </p>

                            <button className="px-10 py-4 bg-white text-black font-medium rounded-2xl text-lg hover:bg-stone-100 transition-all active:scale-95">
                                Get started now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
            <section className="py-24 bg-stone-950/20 border-t border-stone-900">
                <div className="text-center mb-16">
                    <span className="text-[#FE4A01] text-xs font-medium tracking-wider block mb-3">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
                        Customers prefer Torch Proxies over <br />
                        other proxy brands
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto px-6">

                    {/* Testimonial Slider */}
                    <div className="overflow-hidden">
                        <div className="flex gap-6 animate-marquee">
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl min-w-[340px] md:min-w-[380px]"
                                >
                                    <div className="text-amber-500 text-lg mb-3">★★★★★</div>
                                    <p className="text-stone-300 text-xs leading-relaxed italic mb-4">"{review.text}"</p>
                                    <div className="text-stone-100 font-bold text-xs">{review.name}</div>
                                    <div className="text-stone-500 text-[10px]">{review.role}</div>
                                </div>
                            ))}

                            {/* Duplicate for seamless infinite scrolling */}
                            {reviews.map((review, i) => (
                                <div
                                    key={`dup-${i}`}
                                    className="bg-stone-900/40 border border-stone-800 p-6 rounded-2xl min-w-[340px] md:min-w-[380px]"
                                >
                                    <div className="text-amber-500 text-lg mb-3">★★★★★</div>
                                    <p className="text-stone-300 text-xs leading-relaxed italic mb-4">"{review.text}"</p>
                                    <div className="text-stone-100 font-bold text-xs">{review.name}</div>
                                    <div className="text-stone-500 text-[10px]">{review.role}</div>
                                </div>
                            ))}
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
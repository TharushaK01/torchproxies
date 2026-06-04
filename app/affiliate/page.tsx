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
    title: 'Step One',
    description: 'Create your affiliate account and access your unique refferal link.',
  },
  {
    id: '02',
    title: 'Step Two',
    description: 'Share it across your content, community or ads. We’ll track every click and sale.',
  },
  {
    id: '03',
    title: 'Step Three',
    description: 'Earn commission from every sale. Payouts are processed every 30 days.',
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
            title: "60 Day Cookie Window",
            desc: "Tracks referrals longer to help you earn even after delayed purchases."
        },
        {
            icon: <RefreshCw className="text-white w-4 h-4" />,
            title: "High Commission Rates",
            desc: "Earn higher commissions on every first-time sale you successfully refer."
        },
        {
            icon: <Layers className="text-white w-4 h-4" />,
            title: "Recurring Lifetime Earnings",
            desc: "Keep earning continuously whenever your referred users renew."
        },
        {
            icon: <ShieldCheck className="text-white w-4 h-4" />,
            title: "Fast 30-Day Payouts",
            desc: "Receive automatic payouts every month without manual follow ups."
        },
        {
            icon: <Infinity className="text-white w-4 h-4" />,
            title: "Tiered Commission Boost",
            desc: "Unlock better earning rates as your referral revenue grows monthly."
        },
        {
            icon: <Tag className="text-white w-4 h-4" />,
            title: "Monthly Promo Packs",
            desc: "Access fresh creative assets monthly to support stronger promotions."
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
                        Join our affiliate program &<br />
                        <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">start earning with every click</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-[18px] sm:text-xl text-stone-400 mb-10 leading-relaxed">
                        Industry leading commissions, fast payouts and lifetime earnings. It’s time to monetise your traffic like never before
                    </p>

                    <div className="mt-[-50px] py-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-[10px] text-stone-200 text-sm font-regular">
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> High commission rates</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Fast payouts</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> Recurring Earnings</div>
                        <div className="flex items-center justify-center gap-2"><Check className="text-orange-500 w-4 h-4" /> No payout limits</div>
                    </div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
  
  {/* --- PRIMARY BUTTON: ROLLING TEXT + GLOW EXPANSION --- */}
  <button className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">
    
    {/* Fast 3D text track wrapper */}
    <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
      
      {/* Default State Text */}
      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
        Start earning now
      </span>
      
      {/* Hover State Text */}
      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
        Start earning now
      </span>
      
    </div>
  </button>
  
  {/* --- SECONDARY BUTTON: ROLLING TEXT + BORDER INDENT --- */}
  <button className="group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]">
    
    {/* Fast 3D text track wrapper */}
    <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
      
      {/* Default State Text */}
      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
        View program
      </span>
      
      {/* Hover State Text */}
      <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white">
        View program
      </span>
      
    </div>
  </button>

</div>

                    <div className="flex items-center justify-center gap-2.5 text-stone-400 text-sm sm:text-base font-normal tracking-wide py-6">
                        <CreditCard className="w-4 h-4 text-stone-500" />
                        <span>No credit card needed. Instant access</span>
                    </div>

                    <div className="relative z-10 -mt-30 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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
                                        src="/images/unlock_exceptional.png"
                                        alt="Perfect for Everyday Scraping & Automation"
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-regular tracking-tight">
                                Unlock Exceptional Earnings with Industry Leading Commissions
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                               Join the TorchLabs Affiliate Program and earn more with every referral. Build sustainable income while promoting top-tier proxy solutions trusted by professionals.
                            </p>
                            <ul className="text-gray-400 text-lg leading-relaxed">
                                <li>&#9679; Every 30 days payout frequency</li>
                                <li>&#9679; Up to 25% first person commisions</li>
                                <li>&#9679; 60 days cookie duration</li>
                                <li>&#9679; Up to 12% recurring commissions</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>


            {/* ── SECTION 6: CORE FEATURES ─────────────────────────────────── */}
            <section className="py-24 max-w-7xl mx-auto px-6 bg-[#0a0a0a] text-white">
                {/* ── HEADER ─────────────────────────────────────────────── */}
                <div className="text-center mb-20">
                    <span className="text-[#FE4A01] text-xs font-bold tracking-wider block mb-3">
                        Our Process
                    </span>
                    <h2 className="text-3xl sm:text-[40px] font-regular tracking-tight mb-4 text-white">
                        A program that rewards growth
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                       Whether you're just starting out or scaling fast, TorchLabs supports you with a tiered system designed to maximize your earnings.
                    </p>
                </div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    
    {/* Card 1: Starter */}
    <div className="border border-stone-800 bg-[#0a0a0a]/50 rounded-3xl p-10 flex flex-col items-center">
        {/* Container wrapping your public folder image asset */}
        <div className="w-24 h-24 relative flex items-center justify-center mb-6">
            <Image 
                src="/images/starter.png" // Path relative to your public folder
                alt="Starter Trophy"
                width={96}   // Matches your w-24 layout constraints
                height={96}  // Matches your h-24 layout constraints
                className="object-contain"
                priority
            />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">Starter</h3>
        <p className="text-stone-400 text-sm leading-relaxed max-w-[240px]">
            Get paid with automatic payouts released every thirty days.
        </p>
    </div>

    {/* Card 2: Rising */}
    <div className="border border-stone-800 bg-[#0a0a0a]/50 rounded-3xl p-10 flex flex-col items-center">
        {/* Container wrapping your public folder image asset */}
        <div className="w-24 h-24 relative flex items-center justify-center mb-6">
            <Image 
                src="/images/rising.png" // Path relative to your public folder
                alt="Rising Trophy"
                width={96} 
                height={96}
                className="object-contain"
                priority
            />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">Rising</h3>
        <p className="text-stone-400 text-sm leading-relaxed max-w-[240px]">
            Level up your earnings with better commissions as performance grows.
        </p>
    </div>

    {/* Card 3: Pro */}
    <div className="border border-stone-800 bg-[#0a0a0a]/50 rounded-3xl p-10 flex flex-col items-center">
        {/* Container wrapping your public folder image asset */}
        <div className="w-24 h-24 relative flex items-center justify-center mb-6">
            <Image 
                src="/images/pro.png" // Path relative to your public folder
                alt="Pro Trophy"
                width={96} 
                height={96}
                className="object-contain drop-shadow-[0_0_12px_rgba(254,74,1,0.4)]" // Keeps the glowing neon effect on the image container
                priority
            />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">Pro</h3>
        <p className="text-stone-400 text-sm leading-relaxed max-w-[240px]">
            Maximize your profits with elite-level commissions and perks.
        </p>
    </div>

</div>


<div className="mt-16 w-full overflow-x-auto rounded-3xl border border-stone-800 bg-[#0a0a0a]/30 backdrop-blur-sm">
    <table className="w-full min-w-[768px] border-collapse text-left text-sm text-stone-300">
        
        {/* Table Header */}
        <thead>
            <tr className="border-b border-stone-800 bg-black/40">
                {/* Empty top-left corner cell */}
                <th className="p-6 w-1/4"></th>
                
                {/* Starter Header */}
                <th className="p-6 w-1/4 font-normal text-white">
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/images/starter_.png" // Path to your public folder asset
                            alt="Starter Trophy"
                            width={20} 
                            height={20}
                            className="object-contain"
                        />
                        <span className="font-medium">Starter</span>
                        <span className="text-xs text-stone-500">(Tier 1)</span>
                    </div>
                </th>
                
                {/* Rising Header */}
                <th className="p-6 w-1/4 font-normal text-white">
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/images/rising_.png" // Path to your public folder asset
                            alt="Rising Trophy"
                            width={20} 
                            height={20}
                            className="object-contain"
                        />
                        <span className="font-medium">Rising</span>
                        <span className="text-xs text-stone-500">(Tier 2)</span>
                    </div>
                </th>
                
                {/* Pro Header */}
                <th className="p-6 w-1/4 font-normal text-white">
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/images/pro_.png" // Path to your public folder asset
                            alt="Pro Trophy"
                            width={20} 
                            height={20}
                            className="object-contain"
                        />
                        <span className="font-medium">Pro</span>
                        <span className="text-xs text-stone-500">(Tier 3)</span>
                    </div>
                </th>
            </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-stone-900">
            
            {/* Row 1: First Purchase Commission */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">First Purchase Commission</td>
                <td className="p-6 text-white font-medium">15%</td>
                <td className="p-6 text-white font-medium">20%</td>
                <td className="p-6 text-white font-medium">25%</td>
            </tr>

            {/* Row 2: Recurring Commission */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Recurring Commission</td>
                <td className="p-6 text-white font-medium">8%</td>
                <td className="p-6 text-white font-medium">10%</td>
                <td className="p-6 text-white font-medium">12%</td>
            </tr>

            {/* Row 3: Benchmark Revenue */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Benchmark Revenue (30 Days)</td>
                <td className="p-6 text-emerald-500 font-medium">(No minimum)</td>
                <td className="p-6 text-emerald-500 font-medium">$5000</td>
                <td className="p-6 text-emerald-500 font-medium">$10,000</td>
            </tr>

            {/* Row 4: Payouts */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Payouts</td>
                <td className="p-6 text-stone-300">Every 30 days</td>
                <td className="p-6 text-stone-300">Every 30 days</td>
                <td className="p-6 text-stone-300">Every 30 days</td>
            </tr>

        </tbody>
    </table>
</div>


            </section>



<section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* --- LEFT COLUMN: HEADLINE & CALL TO ACTION --- */}
        {/* 👉 FIXED: Changed `sticky` to `lg:sticky` and `h-full` to `lg:h-full` */}
        <div className="lg:col-span-5 flex flex-col justify-center h-auto lg:h-full lg:sticky top-24">
          <span className="text-[#FF4F00] text-[16px] font-regular tracking-wider mb-3">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.15] text-white max-w-md">
            Start earning in 3 simple steps. no experience Needed
          </h2>
          <p className="text-zinc-500 text-[18px] md:text-base mt-4 max-w-md font-regular leading-relaxed">
            From signup to payouts, we made the process effortless so you can focus on what matters, promoting and profiting
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
          {/* 👉 BONUS FIX: Added `hidden lg:block` or adjusted responsive left positions to keep the timeline track centered behind the orbs on mobile */}
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
                        Why us
                    </span>
                    <h2 className="text-3xl sm:text-[40px] font-regular tracking-tight mb-4 text-white">
                        What Makes TorchLabs Stand Out
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                       We’ve built our affiliate program to outperform typical industry standards, with better payouts, faster rewards and tools that help you succeed long term.
                    </p>
                </div>

{/* --- START OF PROGRAM COMPARISON TABLE SECTION --- */}
<div className="mt-16 w-full overflow-x-auto rounded-3xl border border-stone-800 bg-[#0a0a0a]/30 backdrop-blur-sm">
    <table className="w-full min-w-[768px] border-collapse text-left text-sm text-stone-300">
        
        {/* Table Header */}
        <thead>
            <tr className="border-b border-stone-800 bg-black/40">
                {/* Empty top-left cell */}
                <th className="p-6 w-[34%]"></th>
                
                {/* Typical Programs Column */}
                <th className="p-6 w-[33%] font-normal">
                    <div className="flex flex-col gap-1">
                        <span className="text-lg font-medium text-white tracking-tight">Typical Programs</span>
                        <span className="text-xs text-stone-500">Average commission rates</span>
                    </div>
                </th>
                
                {/* Torchlabs Affiliate Column */}
                <th className="p-6 w-[33%] font-normal">
                    <div className="flex flex-col gap-1">
                        {/* Brand Orange Accent Color */}
                        <span className="text-lg font-medium text-[#FE4A01] tracking-tight">Torchlabs Affiliate</span>
                        <span className="text-xs text-stone-500">High commission rates</span>
                    </div>
                </th>
            </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-stone-900">
            
            {/* Row 1: Max first commission */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Max first commission</td>
                <td className="p-6 text-stone-400">10 - 20%</td>
                <td className="p-6 text-white font-medium">Up to 25%</td>
            </tr>

            {/* Row 2: Recurring Commission */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Recurring Commission</td>
                <td className="p-6 text-stone-400">5 - 10%</td>
                <td className="p-6 text-white font-medium">Up to 12%</td>
            </tr>

            {/* Row 3: Cookie Duration */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Cookie Duration</td>
                <td className="p-6 text-stone-400">30 days or less</td>
                <td className="p-6 text-white font-medium">60 days</td>
            </tr>

            {/* Row 4: Payouts */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Payouts</td>
                <td className="p-6 text-stone-400">35 - 50 days</td>
                <td className="p-6 text-white font-medium">Every 30 days</td>
            </tr>

            {/* Row 5: Bonus incentives */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Bonus incentives</td>
                <td className="p-6 text-stone-400">Rare or none</td>
                <td className="p-6 text-white font-medium">Top 3 monthly</td>
            </tr>

            {/* Row 6: Marketing Assets */}
            <tr>
                <td className="p-6 font-medium text-stone-400 bg-black/10">Marketing Assets</td>
                <td className="p-6 text-stone-400">Often unavailable</td>
                <td className="p-6 text-white font-medium">Monthly packs</td>
            </tr>

        </tbody>
    </table>
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
                        Why Partner with TorchLabs?
                    </h2>
                    <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                       Built for long term earners, not one time promoters. Here’s what makes our affiliate program stand out
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
                                Earn More With Every Referral<br className="hidden md:block" />
                            </h2>

                            <p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Join the TorchLabs Affiliate Program and get paid for every customer you bring in. Fast payouts. High commissions. Zero hassle.
                            </p>

                            <button className="px-10 py-4 bg-white text-black font-medium rounded-2xl text-lg hover:bg-stone-100 transition-all active:scale-95">
                                Start earning now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 10: TESTIMONIALS ─────────────────────────────────── */}
            <section className="py-24 bg-stone-950/20 ">
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
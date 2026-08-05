'use client';

import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Globe, 
  ArrowRight, 
  Star 
} from 'lucide-react';


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

interface TimelineItem {
  year: string;
  points: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2021',
    points: [
      'Torch Proxies was founded with a mission to deliver proxies that actually work.',
      'Launched our first product, Sneaker Proxies, built for high-demand limited drops.',
    ],
  },
  {
    year: '2022',
    points: [
      'Grew our team to 5 employees and crossed 500+ customers.',
      'Expanded our lineup with the launch of Residential and ISP Proxies.',
    ],
  },
  {
    year: '2023',
    points: [
      'Expanded our network into 20+ countries worldwide.',
      'Strengthened our Residential and ISP proxy pools for larger scale scraping and automation.',
    ],
  },
  {
    year: '2024',
    points: [
      'Crossed 1,500+ customers as demand continued to grow.',
      'Opened a new office and expanded our team to support global growth.',
    ],
  },
  {
    year: '2025',
    points: [
      'Released 3+ enterprise-grade products for mission-critical, high-volume use cases.',
      'Completed a major dashboard upgrade and won Startup-Nation\'s Best Award.',
    ],
  },
  {
    year: '2026',
    points: [
      'Expanded globally with the launch of Mobile Proxies and grew our team to 15+ employees.',
      'Reached 3,500+ customers worldwide.',
    ],
  },
];


// Load Urbanist font from Google Fonts
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-urbanist',
});

// Review Card Data
const reviews = [
  {
    name: 'Henry Paul',
    avatar: '/images/bulpic/henry.png', // Placeholder path
    review: 'Had a great experience with them. Firstly, their proxies are of high quality. They are stable, don\'t change IP frequently, perfect for web scraping. Also, they have very low score on scamalytics, and ip2location making them ideal for geo-restricted content. Proxies are fast too, response time is <0.5 sec in my case.',
  },
  {
    name: 'Henry Paul',
    avatar: '/images/bulpic/henry.png', // Placeholder path
    review: 'Had a great experience with them. Firstly, their proxies are of high quality. They are stable, don\'t change IP frequently, perfect for web scraping. Also, they have very low score on scamalytics, and ip2location making them ideal for geo-restricted content. Proxies are fast too, response time is <0.5 sec in my case.',
  },
  {
    name: 'Henry Paul',
    avatar: '/images/bulpic/henry.png', // Placeholder path
    review: 'Had a great experience with them. Firstly, their proxies are of high quality. They are stable, don\'t change IP frequently, perfect for web scraping. Also, they have very low score on scamalytics, and ip2location making them ideal for geo-restricted content. Proxies are fast too, response time is <0.5 sec in my case.',
  },
];

export default function AboutUsPage() {
    // Center index state
  const [centerIndex, setCenterIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Triple the array to create a seamless infinite loop
  const extendedData = [...timelineData, ...timelineData, ...timelineData];

  useEffect(() => {
    // Rotate every 6 seconds (between 5s and 10s as requested)
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCenterIndex((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite rewind reset silently without animation
  useEffect(() => {
    if (centerIndex >= timelineData.length * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCenterIndex(timelineData.length);
      }, 700); // match duration-700
      return () => clearTimeout(timeout);
    }
  }, [centerIndex]);

  // Calculate slide offset so the active card is centered in the 3-box window
  // Each card width is 33.333% + gap compensation
  const offset = (centerIndex - 1) * 33.3333;

  return (
    <main className={`${urbanist.className} min-h-screen text-white selection:text-white font-sans mt-[160px] font-['Urbanist']`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center font-['Urbanist']">
        <div className="md:col-span-7 space-y-6">
          {/* Trustpilot Badge */}
            <Image
              src="/images/TrustPiolet.png"
              alt="Trustpilot rating"
              width={250}
              height={24}
            />


          {/* Heading */}
          <h1 className="text-[60px] md:text-[60px]">
            <span className="text-white font-regular">About </span> 
            <span className="text-white font-bold">Torch</span>
            <span className="text-white font-thin">Proxies</span>
          </h1>

          {/* Subheading with Orange Highlight */}
          <p className="text-[24px] md:text-[24px] font-medium text-gray-200 leading-snug">
            Our proxy infrastructure built for people who {' '}
            <span className="text-[#ff4500]">can't afford downtime.</span>
          </p>

          {/* Paragraph Body */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
Torch Proxies started with a simple frustration,  proxies that looked good on paper and fell apart the moment real traffic hit them. So we built a network designed around one job. Staying up, staying fast, and staying out of your way.
          </p>
        </div>

        {/* Silver Flame Graphic */}
        <div className="md:col-span-5 flex justify-center md:justify-end relative">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] relative">
            <Image
              src="/images/heroflame.png"
              alt="TorchProxies Silver Flame Icon"
              fill
              priority
              className="object-contain filter drop-shadow-[0_0_50px_rgba(255,255,255,0.08)]"
            />
          </div>
        </div>
      </section>

      {/* Ticker / Banner Strip */}

      <Marquee />

      {/* 2. WHY WE EXIST SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 font-['Urbanist']">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Orange Accent Box */}
          <div className="md:col-span-4 bg-[#0a0a0c] border border-[#ff4500]/40 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4500]/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <h2 className="text-[4xl] md:text-[80px] font-extrabold text-[#ff4500] leading-none mb-6">
                WHY<br />WE<br />EXIST
              </h2>
            </div>
            <ul className="space-y-3 text-xs md:text-[15px] font-semibold text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500]" />
                Uncompromising Quality
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500]" />
                Truly Unlimited Bandwidth
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500]" />
                Reliable Groundwork
              </li>
            </ul>
          </div>

          {/* Right Text Column */}
          <div className="md:col-span-8 bg-[#0b0c0e] border border-[#1d2026] rounded-2xl p-8 md:p-10 flex flex-col justify-center space-y-5">
            <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
              OUR STORY
            </span>
            <h3 className="text-[48px] md:text-[48px] font-regular text-white">
              Why Torch Proxies exists ?
            </h3>
            <p className="text-gray-400 text-[15px] md:text-[15px] leading-relaxed">
              Most proxy providers sell you an IP address. We think that's the wrong product. What businesses actually need is a connection that holds  through a scraping job, a ticket drop, a sneaker release, or a thousand concurrent sessions without babysitting it.
            </p>
            <p className="text-gray-400 text-[15px] md:text-[15px] leading-relaxed">
              Torch Proxies was built by people who'd been burned by unreliable networks themselves: dropped sessions mid-scrape, blocked IPs mid-checkout, support tickets that went nowhere.
            </p>
            <p className="text-gray-400 text-[15px] md:text-[15px] leading-relaxed">
              That's why everything we build gets judged against one question.
Does this hold up under real, high-volume, no-room-for-error traffic? If it doesn't, it doesn't ship.
            </p>
          </div>

        </div>
      </section>

      {/* 3. TORCH PROXIES BY NUMBERS */}
      <section className="max-w-7xl mx-auto px-6 py-12 font-['Urbanist']">
        <div className="text-center mb-10">
          <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
            By the Numbers
          </span>
          <h2 className="text-3xl md:text-[48px] font-regular text-white mt-1">
            Torch Proxies, by numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-white">3000 +</div>
            <p className="text-xs text-gray-400 tracking-wider">Satisfied Customers</p>
          </div>

          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-white">15 +</div>
            <p className="text-xs text-gray-400 tracking-wider">Years combined experience</p>
          </div>

          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-white">10 Gbps</div>
            <p className="text-xs text-gray-400 tracking-wider">Per Node Network Speed</p>
          </div>
        </div>
      </section>

<section className={`${urbanist.className} w-full text-white py-28 px-4 md:px-8 font-sans overflow-hidden font-['Urbanist']`}>
{/* <section className={`${urbanist.className} w-full bg-[#050507] text-white py-28 px-4 md:px-8 font-sans`}> */}
      <div className="max-w-6xl mx-auto">
        
        {/* Title & Subtitle */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl md:text-[48px] font-regular tracking-tight text-white">
            Growing strong since 2021
          </h2>
        </div>

        {/* Carousel Container */}
<div className="relative w-full">
  {/* Outer container with padding so glow effects and scaled borders do not get clipped */}
  <div className="w-full overflow-hidden py-8 px-2">
    
    {/* Gradient Horizontal Axis Line */}
    <div 
      className="absolute top-[40px] left-0 right-0 h-0.5 z-0"
      style={{
        background: 'linear-gradient(to right, #2a2d36, #ff4500, #2a2d36)',
      }}
    />

    {/* Sliding Track */}
    <div
      className={`flex transition-transform ${
        isTransitioning ? 'duration-700 ease-in-out' : 'duration-0'
      }`}
      style={{
        transform: `translateX(-${offset}%)`,
      }}
    >
      {extendedData.map((item, index) => {
        const isCenter = index === centerIndex;

        return (
          <div
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCenterIndex(index);
            }}
            className="w-1/3 flex-shrink-0 px-3 cursor-pointer group select-none"
          >
            {/* Node Icon on Timeline */}
            <div className="relative flex justify-center items-center h-5 mb-4 z-10">
              
              {/* Active Center Glow & Flame Icon */}
              {isCenter ? (
                <div className="relative flex items-center justify-center">
                  {/* Soft Orange Glow */}
                  <div className="absolute w-12 h-12 rounded-full bg-[#ff4500] opacity-50 blur-md animate-pulse" />
                  {/* Outer Orange Circle */}
                  <div className="relative w-6 h-6 rounded-full bg-[#ff4500] flex items-center justify-center shadow-[0_0_12px_#ff4500]">
                    <Flame className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                </div>
              ) : (
                /* Inactive White Node Circle */
                <div className="w-3.5 h-3.5 rounded-full bg-white transition-all duration-300 group-hover:scale-125" />
              )}
            </div>

            {/* Year Label */}
            <div className="text-center mb-6">
              <span
                className={`text-base font-bold transition-colors duration-300 ${
                  isCenter ? 'text-[#ff4500] text-lg' : 'text-gray-400'
                }`}
              >
                {item.year}
              </span>
            </div>

            {/* Content Box */}
            <div
              className={`rounded-2xl p-6 min-h-[200px] transition-all duration-500 flex flex-col justify-start ${
                isCenter
                  ? 'bg-[#0e1015] border-2 border-[#ff4500] shadow-[0_0_25px_rgba(255,69,0,0.15)] scale-[1.02]'
                  : 'bg-[#0a0b0e] border border-[#1d2028] opacity-60 hover:opacity-80'
              }`}
            >
              <ul className="space-y-3 text-xs md:text-sm text-gray-300 leading-relaxed list-disc list-inside">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="marker:text-gray-400">
                    <span className="-ml-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        );
      })}
    </div>
  </div>
</div>

      </div>
    </section>



      {/* 4. WHAT YOU GET WITH TORCHPROXIES (4 ICONS FROM LUCIDE LIBRARY) */}
      <section className="max-w-7xl mx-auto px-6 py-20 font-['Urbanist']">
        <div className="text-center mb-12">
          <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-[48px] font-regular text-white mt-1">
            What you get with TorchProxies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0e1015] border border-[#1b1e28] rounded-xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#24130d] border border-[#ff4500]/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#ffffff]" />
            </div>
            <h3 className="text-[20px] font-bold text-[#ff4500]">
              Reliability <span className="text-[#ffffff]">you don't have to check on</span>
            </h3>
            <p className="text-[15px] font-regular text-gray-400 leading-relaxed">
              99.9% uptime isn't a marketing number for us — it's the baseline we build every product against. Rotating or sticky sessions, your connection holds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0e1015] border border-[#1b1e28] rounded-xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#24130d] border border-[#ff4500]/30 flex items-center justify-center">
              <Image
  src="/images/FastRunnerIcon.svg" // Replace with the actual name of your SVG or PNG file
  alt="Running Man Icon"
  width={20} // Corresponding to w-5 (1.25rem = 20px)
  height={20} // Corresponding to h-5 (1.25rem = 20px)
  className="text-[#ff4500]" // Keep the orange color
/>
            </div>
            <h3 className="text-[20px] font-bold text-[#ff4500]">
              Speed <span className="text-[#ffffff]">that keeps up with automation</span>
            </h3>
            <p className="text-[15px] font-regular text-gray-400 leading-relaxed">
              Real 10 Gbps lines mean your scrapers, bots, and checkout tools run at the speed you built them for, not the speed your proxy allows.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0e1015] border border-[#1b1e28] rounded-xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#24130d] border border-[#ff4500]/30 flex items-center justify-center">
                            <Image
  src="/images/lock.svg" // Replace with the actual name of your SVG or PNG file
  alt="Lock Icon"
  width={20} // Corresponding to w-5 (1.25rem = 20px)
  height={20} // Corresponding to h-5 (1.25rem = 20px)
  className="text-[#ff4500]" // Keep the orange color
/>
            </div>
            <h3 className="text-[20px] font-bold text-[#ff4500]">
              Ethically sourced <span className="text-[#ffffff]">always</span>
            </h3>
            <p className="text-[15px] font-regular  text-gray-400 leading-relaxed">
              Every IP in our network is sourced with consent and monitored for integrity. Fast doesn't mean careless.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0e1015] border border-[#1b1e28] rounded-xl p-6 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#24130d] border border-[#ff4500]/30 flex items-center justify-center">
                            <Image
  src="/images/www.svg" // Replace with the actual name of your SVG or PNG file
  alt="Globe Icon"
  width={20} // Corresponding to w-5 (1.25rem = 20px)
  height={20} // Corresponding to h-5 (1.25rem = 20px)
  className="text-[#ff4500]" // Keep the orange color
/>
            </div>
            <h3 className="text-[20px] font-bold text-[#ff4500]">
              Coverage <span className="text-[#ffffff]"> that goes down to the city</span>
            </h3>
            <p className="text-[15px] font-regular  text-gray-400 leading-relaxed">
              157+ countries with city and ASN-level targeting, so "close enough" location data is never good enough for us to ship it.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BUILT FOR PEOPLE WHO MOVE FAST */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-4 font-['Urbanist']">
        <span className="text-[#ff4500] text-xs font-bold tracking-widest uppercase">
          Mission
        </span>
        <h2 className="text-3xl md:text-[48px] font-regular text-white">
          Built for people who move fast
        </h2>
        <p className="text-gray-400 text-xs md:text-[17px] font-regular eading-relaxed max-w-2xl mx-auto">
We're not building proxies for casual browsing. We're building for the automation, scraping, and multi-account workflows where a single dropped connection costs real money , a missed drop, a failed scrape, a blocked account.
        </p>
        <p className="text-gray-400 text-xs md:text-[17px] font-regular leading-relaxed max-w-2xl mx-auto">
That means our priorities are simple: unlimited concurrency so you're never throttled, real 10 Gbps lines so speed isn't the bottleneck, and a network large enough — 157+ countries, city-level targeting  that "we don't have that location" is never the answer.
        </p>
      </section>

      {/* 6. ONE NETWORK, EVERY WORKFLOW & PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
              Proxies You Can Rely On
            </span>
            <h2 className="text-3xl md:text-[44px] font-regular text-white leading-tight">
              One network, every workflow
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
Torch Proxies powers web scraping, price and SEO monitoring, ad verification, sneaker checkouts, ticket drops, social media management, and gaming — with the same infrastructure underneath. Whatever you're automating, the proxy shouldn't be the thing that breaks it.

            </p>

            {/* Tag Badges Grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Web Scraping',
                'SEO Tracking',
                'Price Monitoring',
                'Sneaker Drops',
                'Ad Verification',
                'Ticket Releases',
                'Market Research',
                'Account Management',
                'Gaming',
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#12141a] border border-[#232733] text-gray-300 text-xs px-3.5 py-1.5 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Packages with Orange Front Arrow Icons */}
          <div className="lg:col-span-7 space-y-3">
            {[
              {
                title: 'Data Center Proxies',
                desc: 'Reliable and affordable with rotating residential proxies and optional static sessions perfect for everyday online tasks.',
              },
              {
                title: 'Premium Residential',
                desc: 'Enhanced speed and reliability with rotating residential proxies and static sessions ideal for demanding users and businesses.',
              },
              {
                title: 'Static Residential',
                desc: 'Plan X blends residential IPs for authenticity with ISP IPs for speed and stability, creating a hybrid network built for high-performance scraping, automation, and content access.',
              },
              {
                title: 'ISP Proxies',
                desc: 'Static residential proxies with unlimited data. Ideal for sneaker botting, scraping and automation.',
              },
              {
                title: 'Custom Tailored',
                desc: 'Access fast mobile IPs with sticky sessions and precise targeting optimized for scraping, automation, and social media workflows',
                badge: 'Coming Soon',
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className="bg-[#0e1015] border border-[#1b1e28] rounded-xl p-4 flex items-center justify-between gap-4 hover:border-[#ff4500]/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Orange background with white icon inside */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff5500] to-[#e03e00] flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-950/40">
                    <Image
                      src="/images/products.svg"
                      alt="Arrow Right Icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[20px] font-regular text-white">{pkg.title}</h3>
                      {pkg.badge && (
                        <span className="bg-[#FFF44F30] text-[#FFF44F] text-[10px] font-regular px-1.5 py-0.5 rounded-full border border-[#FFF44F]/30">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] text-gray-400 mt-0.5">{pkg.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HONEST REVIEWS FROM REAL TORCHPROXIES CUSTOMERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-[44px] font-regular text-white mt-1">
            Honest Reviews From Real TorchProxies Customers
          </h2>
        </div>

        {/* Client Logos as single image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/images/Brandlogo.svg"
            alt="Client Logos"
            width={1200}
            height={60}
            className="h-auto max-w-full object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e1015] border border-[#1c1f2a] rounded-xl p-5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header: User & Trustpilot Logo */}
                <div className="flex items-center justify-start border-b border-[#1f222e] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full relative overflow-hidden">
                      <Image
                        src="/images/reiveocustomerpfilie.svg"
                        alt={`${item.name}'s avatar`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[16px] font-semibold text-white whitespace-nowrap">{item.name}</span>
                  </div>
                  {/* Trustpilot logo badge */}
                  <Image
                    src="/images/halftrustpiolet.svg"
                    alt="Trustpilot rating"
                    width={120}
                    height={20}
                  />
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot CTA Link below reviews */}
        <div className="text-center mt-8">
          <a
            href="https://www.trustpilot.com/review/torchlabs.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#ff4500] hover:underline font-semibold tracking-wide"
          >
            Read all our reviews on Trustpilot.com →
          </a>
        </div>
      </section>

    </main>
  );
}
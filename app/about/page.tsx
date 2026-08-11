'use client';

import React, { useState, useEffect } from 'react';
import { obvia } from '../about/fonts';
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
import DepthCarousel from '../../components/DepthCarousel';
import { motion } from 'framer-motion';



    const reviews = [
        {
            name: "Black Bear",
            role: "Verified Customer",
            text: "If you are buy proxies anywhere you should buy them here. Nice guys who work hard. Communication is good and there is always help where needed. Can't recommend a better company for proxies.",
            stars: 5,
            avatar: null// Path to your custom pixel bear photo
        },
        {
            name: "Ishak",
            role: "Verified Customer",
            text: "Torch Proxies offers a fantastic proxy service at a very competitive price. The connection speeds are fast, and the service is incredibly reliable. I've had a positive experience with their customer support as well.",
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


const journeyData = [
  {
    year: '2021',
    points: [
      'Torch Proxies was founded with a mission to deliver proxies that actually work.',
      'Launched our first product, Sneaker Proxies, built for high demand limited drops.'
    ],
    image: '/images/2021.png' // Replace with your image
  },
  {
    year: '2022',
    points: [
      'Grew our team to 5 employees and crossed 890+ customers.',
      'Expanded our lineup with the launch of Residential and ISP Proxies.'
    ],
    image: '/images/2022.png'
  },
  {
    year: '2023',
    points: [
      'Expanded our network into 20+ countries worldwide.',
      'Strengthened our Residential and ISP proxy pools for larger scale scraping and automation.'
    ],
    image: '/images/2023.png'
  },
  {
    year: '2024',
    points: [
      'Crossed 1,370+ customers as demand continued to grow.',
      'Opened a new office and expanded our team to support the growth.'
    ],
    image: '/images/2024.png'
  },
  {
    year: '2025',
    points: [
      'Released 5+ enterprise-grade products for mission-critical, high-volume use cases.',
      'Completed a major dashboard upgrade and won Startup Nations Best Award.'
    ],
    image: '/images/2025.png'
  },
  {
    year: '2026',
    points: [
      'Expanded globally with the launch of Mobile Proxies and grew our team to 15+ employees.',
      'Reached 3,700+ customers worldwide.'
    ],
    image: '/images/2026.png'
  }
];


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

const TrustpilotStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.round(rating);

  return (
    <div className="mb-2 flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < fullStars ? 'text-[#ffb703]' : 'text-stone-700'}`}
          fill={index < fullStars ? '#ffb703' : 'none'}
        />
      ))}
    </div>
  );
};

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

export default function AboutUsPage() {



  const avatars = [
    { top: "38%", left: "12%", delay: 1.35, src: "/images/avatars/person-1.svg" },
    { top: "26%", left: "22%", delay: 1.62, src: "/images/avatars/person-2.svg" },
    { top: "18%", left: "42%", delay: 1.85, src: "/images/avatars/person-3.svg" },
    { top: "22%", right: "24%", delay: 2.12, src: "/images/avatars/person-4.svg" },
    { top: "36%", right: "12%", delay: 2.35, src: "/images/avatars/person-5.svg" },
    { top: "58%", left: "16%", delay: 1.48, src: "/images/avatars/person-6.svg" },
    { top: "68%", left: "32%", delay: 1.72, src: "/images/avatars/person-7.svg" },
    { top: "66%", right: "22%", delay: 2.05, src: "/images/avatars/person-8.svg" },
  ];




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
    <main className={`${urbanist.variable} ${obvia.variable} min-h-screen text-white selection:text-white mt-[160px]`}>

      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          {/* Trustpilot Badge */}
          <Image
            src="/images/TrustPiolet.png"
            alt="Trustpilot rating"
            width={250}
            height={24}
          />
          {/* Heading */}
          <h1 className="text-[60px] md:text-[60px] leading-tight">
            <span className="text-white font-bold font-obvia">Torch</span>
            <span className="text-white font-thin font-obvia">Proxies</span>
          </h1>
          <p className="text-[76px] md:text-[76px] leading-tight">
            <span className="text-white font-obvia">Built for people who </span>
            <span className="font-obvia text-[#FE4A01]"> can't afford downtime.</span>
          </p>
        </div>

        {/* Silver Flame Graphic */}
        <div className="md:col-span-4 flex justify-center md:justify-end relative">
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
      <section className="relative w-full py-20 px-6 overflow-hidden bg-black flex justify-center items-center font-sans">
        {/* 1. Background Gradient Effects */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            background: `
      radial-gradient(ellipse 200% 150% at 50% -20%, #FE4A01 0%, #FE4A01 35%, rgba(0, 0, 0, 0.95) 70%, rgba(0, 0, 0, 0.95) 98%, #000000 100%)
    `
          }}
        />

        {/* 2. Main Content Card */}
        <div className="relative z-10 max-w-5xl w-full bg-[#070708] border border-[#1b1b1e] rounded-[32px] p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="max-w-4xl space-y-6">
            {/* Subtitle / Category Tag */}
            <span className="block text-[#ff4500] text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase">
              OUR STORY
            </span>

            {/* Main Heading */}
            <h2 className="text-[30px] sm:text-[36px] md:text-[48px] leading-tight font-normal text-white tracking-tight">
              Why Torch Proxies exists ?
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-400 text-sm md:text-[18px] leading-relaxed font-normal pt-2">
              Torch Proxies started in the sneaker resale world, where speed and uptime weren't optional  where  a flagged IP meant a missed drop, not just an inconvenience. Running proxies and bots at scale to compete for limited releases surfaced a simple truth, the real value wasn't in buying the product, it was in the infrastructure that made buying possible. That observation became the foundation for Torch Proxies.          </p>

            {/* Paragraph 2 */}
            <p className="text-gray-400 text-sm md:text-[18px] leading-relaxed font-normal">
              Today, every business runs on data, but reliable infrastructure isn't equal.  We built Torch Proxies to close that gap, proxy networks tuned for the task at hand, not one-size-fits all pools, held to one standard, reliable under real, high-volume traffic, or it doesn't ship.          </p>
          </div>
        </div>
      </section>

      {/* 3. TORCH PROXIES BY NUMBERS */}
      <section className="max-w-7xl mx-auto px-6 py-12 font-['Urbanist']">
        <div className="text-center mb-10">
          <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
            Torch proxies By the Numbers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-[#FE4A01]">3800+</div>
            <p className="text-xs text-gray-400 tracking-wider">Clients worldwide</p>
          </div>

          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-[#FE4A01]">15 +</div>
            <p className="text-xs text-gray-400 tracking-wider">Team members and growing</p>
          </div>

          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-[#FE4A01]">06+</div>
            <p className="text-xs text-gray-400 tracking-wider">In business</p>
          </div>

          <div className="bg-[#0e1015] border border-[#1a1d26] rounded-xl p-8 text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-[#FE4A01]">97 %</div>
            <p className="text-xs text-gray-400 tracking-wider">User retention</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-24 text-white font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: Title & Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="block text-[#FE4A01] text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase">
              Our Journey
            </span>

            <h2 className="text-4xl md:text-[48px] font-regular tracking-tight text-white leading-[1.1]">
              Growing strong<br />since 2021
            </h2>

            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-normal pt-2">
              Torch Proxies started in the sneaker botting trenches, where one flagged IP meant a missed drop. That same discipline — zero tolerance for failure under pressure, carried over as developers brought us into web scraping, ticket automation, and everything after. The use cases changed; the standard never did.          </p>
          </div>

          {/* RIGHT COLUMN: Depth Carousel Component */}
          <div className="lg:col-span-6 relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            <DepthCarousel
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              autoplay={false}
              loop
              cardWidth={340}
              cardHeight={420}
              radius={20}
              tint="#05060a"
              duration={700}
              ease="power3.out"
              autoplayDelay={3200}
              showControls
              showIndicators={false}
              items={journeyData.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full h-full bg-[#08090c] border border-[#1b1e26] rounded-[24px] p-6 flex flex-col justify-between overflow-hidden shadow-2xl select-none"
                >
                  {/* Year Header & Bullet Points */}
                  <div className="space-y-4">
                    <span className="text-3xl md:text-4xl font-extrabold text-[#FE4A01] block">
                      {item.year}
                    </span>
                    <ul className="space-y-2.5 text-xs md:text-sm text-gray-300 font-normal leading-relaxed">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Image / Graphic */}
                  <div className="relative w-full h-[160px] rounded-xl overflow-hidden mt-4 border border-[#1b1e26]/60">
                    <Image
                      src={item.image}
                      alt={`${item.year} journey`}
                      fill
                      className="object-cover"
                      sizes="340px"
                    />
                  </div>
                </div>
              ))}
            />
          </div>

        </div>
      </section>

      {/* <section className={`${urbanist.className} w-full text-white py-28 px-4 md:px-8 font-sans overflow-hidden font-['Urbanist']`}>
        {/* <section className={`${urbanist.className} w-full bg-[#050507] text-white py-28 px-4 md:px-8 font-sans`}> */}
      {/* <div className="max-w-6xl mx-auto"> */}

      {/* Title & Subtitle */}
      {/* <div className="text-center mb-16 space-y-2">
            <span className="text-[#ff4500] text-[13px] font-bold tracking-widest uppercase">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-[48px] font-regular tracking-tight text-white">
              Growing strong since 2021
            </h2>
          </div> */}

      {/* Carousel Container */}
      {/* <div className="relative w-full"> */}
      {/* Outer container with padding so glow effects and scaled borders do not get clipped */}
      {/* <div className="w-full overflow-hidden py-8 px-2"> */}

      {/* Gradient Horizontal Axis Line */}
      {/* <div
                className="absolute top-[40px] left-0 right-0 h-0.5 z-0"
                style={{
                  background: 'linear-gradient(to right, #2a2d36, #ff4500, #2a2d36)',
                }}
              /> */}

      {/* Sliding Track */}
      {/* <div
                className={`flex transition-transform ${isTransitioning ? 'duration-700 ease-in-out' : 'duration-0'
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
                    > */}
      {/* Node Icon on Timeline */}
      {/* <div className="relative flex justify-center items-center h-5 mb-4 z-10"> */}

      {/* Active Center Glow & Flame Icon */}
      {/* {isCenter ? (
                          <div className="relative flex items-center justify-center"> */}
      {/* Soft Orange Glow */}
      {/* <div className="absolute w-12 h-12 rounded-full bg-[#ff4500] opacity-50 blur-md animate-pulse" /> */}
      {/* Outer Orange Circle */}
      {/* <div className="relative w-6 h-6 rounded-full bg-[#ff4500] flex items-center justify-center shadow-[0_0_12px_#ff4500]">
                              <Flame className="w-3.5 h-3.5 text-white fill-white" />
                            </div>
                          </div>
                        ) : ( */}
      {/* /* Inactive White Node Circle */}
      {/* <div className="w-3.5 h-3.5 rounded-full bg-white transition-all duration-300 group-hover:scale-125" />
                        )}
                      </div> */}

      {/* Year Label */}
      {/* <div className="text-center mb-6">
                        <span
                          className={`text-base font-bold transition-colors duration-300 ${isCenter ? 'text-[#ff4500] text-lg' : 'text-gray-400'
                            }`}
                        >
                          {item.year}
                        </span>
                      </div> */}

      {/* Content Box */}
      {/* <div
                        className={`rounded-2xl p-6 min-h-[200px] transition-all duration-500 flex flex-col justify-start ${isCenter
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

        </div> */}
      {/* </section>  */}



      <section className="w-full max-w-7xl mx-auto px-6 py-20 text-white">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-[44px] font-normal tracking-tight text-white mb-10">
          What you get with TorchProxies
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Top Card 1: Reliability */}
          <div className="bg-[#0b0c0e] border border-[#1b1e26] rounded-[24px] p-8 hover:border-[#ff4500]/40 transition-colors duration-300">
            <div className="space-y-4">
              <h3 className="text-xl md:text-[22px] font-medium leading-snug text-white">
                Reliability you don&apos;t have to check on
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reach precise locations with city-level accuracy for faster, reliable connections.
              </p>
            </div>
          </div>

          {/* Top Card 2: Ethically Sourced */}
          <div className="bg-[#0b0c0e] border border-[#1b1e26] rounded-[24px] p-8 hover:border-[#ff4500]/40 transition-colors duration-300">
            <div className="space-y-4">
              <h3 className="text-xl md:text-[22px] font-medium leading-snug text-white">
                Ethically sourced, always
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reach precise locations with city-level accuracy for faster, reliable connections.
              </p>
            </div>
          </div>

          {/* Top Card 3: Speed */}
          <div className="bg-[#0b0c0e] border border-[#1b1e26] rounded-[24px] p-8 hover:border-[#ff4500]/40 transition-colors duration-300">
            <div className="space-y-4">
              <h3 className="text-xl md:text-[22px] font-medium leading-snug text-white">
                Speed that keeps up with automation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reach precise locations with city-level accuracy for faster, reliable connections.
              </p>
            </div>
          </div>

          {/* Bottom Card 1: Coverage (Takes 1 column) */}
          <div className="bg-[#0b0c0e] border border-[#1b1e26] rounded-[24px] p-8 hover:border-[#ff4500]/40 transition-colors duration-300">
            <div className="space-y-4">
              <h3 className="text-xl md:text-[22px] font-medium leading-snug text-white">
                Coverage that goes down to the city
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                157+ countries with city and ASN-level targeting, so &quot;close enough&quot; location data is never good enough for us to ship it.
              </p>
            </div>
          </div>

          {/* Bottom Card 2: Animated Globe Graphic Card (Spans 2 columns) */}
          <div className="md:col-span-2 bg-[#0b0c0e] border border-[#1b1e26] rounded-[24px] p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8">

<motion.div
  className="md:col-span-3 w-full bg-[#0b0c0e] border border-[#1b1e26] rounded-[24px] p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between"
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.01, 1] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  {/* ===== LEFT SIDE – Stats ===== */}
  <div className="space-y-3 z-20 w-full md:w-auto">
    {/* Residential IPs */}
<div className="flex flex-col gap-5 z-20">
  {/* 1. Residential IPs Card (Staggered Right) */}
  <motion.div
    initial={{ width: 140, height: 60, opacity: 0, x: -20 }}
    animate={{ width: 190, height: 72, opacity: 1, x: 0 }}
    transition={{
      width: { duration: 2.2, ease: [0, 0, 0.58, 1] },
      height: { duration: 2.2, ease: [0, 0, 0.58, 1] },
      opacity: { duration: 0.5 },
      x: { duration: 0.6, ease: "easeOut" },
    }}
    /* Added ml-12 to push the top card to the right */
    className="ml-12 relative bg-[#1c1d22] border border-[#2a2c35] rounded-2xl px-4 py-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center gap-3 overflow-hidden"
  >
    {/* Vertical Orange Accent Line */}
    <div className="w-[2.5px] h-full min-h-[38px] bg-[#FE4A01] rounded-full flex-shrink-0" />

    {/* Text Content */}
    <div className="flex flex-col justify-center">
      <span className="text-[12px] text-gray-400 font-normal leading-none mb-1">
        Residential IPs
      </span>
      <span className="text-xl font-bold text-white tracking-tight leading-none">
        4,429,824+
      </span>
    </div>
  </motion.div>

  {/* 2. ISP IPs Card (Aligned Left) */}
  <motion.div
    initial={{ width: 140, height: 60, opacity: 0, x: -20 }}
    animate={{ width: 190, height: 72, opacity: 1, x: 0 }}
    transition={{
      width: { duration: 2.2, delay: 0.05, ease: [0, 0, 0.58, 1] },
      height: { duration: 2.2, delay: 0.05, ease: [0, 0, 0.58, 1] },
      opacity: { duration: 0.5, delay: 0.1 },
      x: { duration: 0.6, delay: 0.1, ease: "easeOut" },
    }}
    className="relative bg-[#1c1d22] border border-[#2a2c35] rounded-2xl px-4 py-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center gap-3 overflow-hidden"
  >
    {/* Vertical Orange Accent Line */}
    <div className="w-[2.5px] h-full min-h-[38px] bg-[#FE4A01] rounded-full flex-shrink-0" />

    {/* Text Content */}
    <div className="flex flex-col justify-center">
      <span className="text-[12px] text-gray-400 font-normal leading-none mb-1">
        ISP IPs
      </span>
      <span className="text-xl font-bold text-white tracking-tight leading-none">
        5,604,857 +
      </span>
    </div>
  </motion.div>
</div>
  </div>

  {/* ===== RIGHT SIDE ===== */}
  {/* CHANGED: Reduced container height from h-[320px] to h-[230px] */}
  <div className="relative w-full md:w-[460px] h-[180px] flex items-center justify-center mt-6 md:mt-0">
    {/* Soft glow behind the globe */}
    <div className="absolute bottom-0 right-10 w-72 h-32 rounded-full bg-[#ff4500]/10 blur-3xl pointer-events-none" />

    {/* Half Globe Image */}
    {/* CHANGED: Scaled globe down to match new shorter height */}
    <div className="absolute bottom-[-80px] right-[-10px] w-[500px] h-[190px] overflow-hidden">
      <Image
        src="/images/half-globe.png"
        alt="Half Globe"
        width={1200}
        height={700}
        className="object-cover object-top select-none pointer-events-none"
        priority
      />
    </div>

    {/* Center Pin */}
    <div className="absolute z-30 flex flex-col items-center" style={{ top: "18%" }}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#ff4500] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-[0_0_16px_#ff4500aa] mb-0.5 mt-20"
      >
        Real IPs
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <svg width="18" height="22" viewBox="0 0 24 32" fill="none">
          <path
            d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
            fill="#ff4500"
          />
          <circle cx="12" cy="12" r="5" fill="#0b0c0e" />
        </svg>
      </motion.div>

      <span className="mt-0.5 text-[10px] font-semibold text-white bg-black/70 px-2 py-0.5 rounded border border-gray-700/60">
        TorchProxies
      </span>
    </div>

    {/* Labels */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute top-0 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] text-gray-300 font-medium px-2.5 py-0.5 rounded-full border border-gray-700/50 mt-12"
    >
      24/7 support
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="absolute top-8 left-4 bg-black/80 text-[10px] text-gray-300 font-medium px-2.5 py-0.5 rounded-full border border-gray-700/50 mt-12"
    >
      High Speed
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="absolute top-8 right-4 bg-black/80 text-[10px] text-gray-300 font-medium px-2.5 py-0.5 rounded-full border border-gray-700/50 mt-12"
    >
      195 Countries
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.65 }}
      className="absolute bottom-[10px] -left-4 bg-black/80 text-[10px] text-gray-300 font-medium px-2.5 py-0.5 rounded-full border border-gray-700/50 mt-12"
    >
      90M+ IP Pool
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="absolute bottom-[2px] right-2 bg-black/80 text-[10px] text-gray-300 font-medium px-2.5 py-0.5 rounded-full border border-gray-700/50 mt-12"
    >
      99.9% uptime
    </motion.div>

    {/* Avatar Circles */}
    {avatars.map((pos, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: [0.6, 1.1, 1],
          y: [0, -4, 0],
          x: [0, i % 2 === 0 ? 3 : -3, 0],
        }}
        transition={{
          opacity: { duration: 0.4, delay: pos.delay * 0.3 },
          scale: {
            duration: 0.5,
            delay: pos.delay * 0.3,
            times: [0, 0.7, 1],
            ease: [0, 0, 0.58, 1],
          },
          y: {
            repeat: Infinity,
            duration: 3.2 + i * 0.2,
            ease: "easeInOut",
            delay: pos.delay * 0.2,
          },
          x: {
            repeat: Infinity,
            duration: 4 + i * 0.15,
            ease: "easeInOut",
            delay: pos.delay * 0.15,
          },
        }}
        className="absolute w-8 h-8 rounded-full border-2 border-[#ff4500]/80 overflow-hidden shadow-lg z-20 mt-13"
        style={{
          top: pos.top,
          left: pos.left,
          right: pos.right,
        }}
      >
        <Image
          src={pos.src}
          alt="User avatar"
          fill
          className="object-cover"
          sizes="32px"
        />
      </motion.div>
    ))}
  </div>
</motion.div>






          </div>
        </div>
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
{/* Right Column: Packages */}
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
      desc: 'Static residential proxies with unlimited data. Ideal for sneaker botting, scraping and automation.',
    },
    {
      title: 'Custom Tailored',
      desc: 'Access fast mobile IPs with sticky sessions and precise targeting optimized for scraping, automation, and social media workflows',
      badge: 'Coming Soon',
    },
  ].map((pkg, idx, array) => {
    // Check if it is the last item
    const isLastItem = idx === array.length - 1;

    return (
      <div
        key={idx}
        /* ADDED: Dynamic opacity-40 and grayscale for the last item */
        className={`bg-[#0e1015] border border-[#1b1e26] rounded-xl p-4 flex items-center justify-between gap-4 transition-all duration-300 ${
          isLastItem
            ? 'opacity-40 hover:opacity-60 border-dashed border-[#232733]' 
            : 'hover:border-[#ff4500]/40'
        }`}
      >
        <div className="flex items-center gap-4">
          {/* Orange background with white icon inside */}
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md ${
              isLastItem
                ? 'bg-[#1e1410] border border-[#ff5500]/20'
                : 'bg-gradient-to-br from-[#ff5500] to-[#e03e00] shadow-orange-950/40'
            }`}
          >
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
                <span className="bg-[#FFF44F20] text-[#FFF44F] text-[10px] font-regular px-2 py-0.5 rounded-full border border-[#FFF44F]/30">
                  {pkg.badge}
                </span>
              )}
            </div>
            <p className="text-[14px] text-gray-400 mt-0.5">{pkg.desc}</p>
          </div>
        </div>
      </div>
    );
  })}
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
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={i < review.stars ? "fill-yellow-400 text-yellow-400" : "text-stone-700"}
                                                />
                                            ))}
                                        </div>

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
                                                className={`w-11 h-11 flex items-center justify-center rounded-full text-stone-950 font-bold text-sm tracking-wider uppercase ${review.initials === "IS" ? "bg-[#c6f6d5]" : "bg-[#7f9cf5] text-white"
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
"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Flag from 'react-world-flags';
import Link from 'next/link';


interface LocationData {
  country: string;
  ips: string;
  code: string;
  url: string;
}

interface LocationDataSet {
  residential: LocationData[];
  isp: LocationData[];
}

interface CountryItem {
  name: string;
  ips: string;
  code: string;
  url: string;
}

interface LocationsData {
  residential: CountryItem[];
  isp: CountryItem[];
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

export default function TorchProxiesLandingPage() {
  const router = useRouter();
    
  // ── SEPARATED STATES TO FIX LOCKING TOGGLE BUG ──────────────────
  const [topLocationsTab, setTopLocationsTab] = useState<'residential' | 'isp'>('residential');
  const [otherLocationsTab, setOtherLocationsTab] = useState<'residential' | 'isp'>('residential');

  const locationsData: LocationDataSet = {
    residential: [
      { country: "United States", ips: "4,421,924 IPs", code: "US", url: '/united-states' },
      { country: "United Kingdom", ips: "549,121 IPs", code: "GB", url: '/united-kingdom' },
      { country: "Germany", ips: "1,421,960 IPs", code: "DE",  url: '/germany' },
      { country: "Australia", ips: "452,720 IPs", code: "AU", url: '/australia' },
      { country: "Canada", ips: "815,558 IPs", code: "CA", url: '/canada' },
      { country: "Mexico", ips: "4,421,924 IPs", code: "MX", url: '/mexico' },
      { country: "China", ips: "4,421,924 IPs", code: "CN", url: '/china' },
      { country: "France", ips: "4,421,924 IPs", code: "FR", url: '/france'  },
    ],
    isp: [
      { country: "United States", ips: "1,250,400 IPs", code: "US",  url: '/united-states' },
      { country: "United Kingdom", ips: "185,200 IPs", code: "GB", url: '/united-kingdom' },
      { country: "Germany", ips: "430,150 IPs", code: "DE",  url: '/germany' },
      { country: "Australia", ips: "92,400 IPs", code: "AU", url: '/australia'  },
      { country: "Canada", ips: "210,900 IPs", code: "CA", url: '/canada' },
      { country: "Mexico", ips: "312,000 IPs", code: "MX", url: '/mexico' },
      { country: "China", ips: "890,500 IPs", code: "CN", url: '/china' },
      { country: "France", ips: "520,300 IPs", code: "FR", url: '/france'  },
    ],
  };

 const locations: LocationsData = {
    residential: [
      { name: "South Korea", ips: "4,421,924 IPs", code: "KR", url: '/south-korea' },
      { name: "Ireland", ips: "4,421,924 IPs", code: "IE", url: '/ireland'  },
      { name: "Iran", ips: "4,421,924 IPs", code: "IR", url: '/iran'  },
      { name: "Chile", ips: "4,421,924 IPs", code: "CL", url: '/chile'  },
      { name: "Argentina", ips: "4,421,924 IPs", code: "AR", url: '/argentina'  },
      { name: "Brazil", ips: "1,421,960 IPs", code: "BR" , url: '/brazil' },
      { name: "Belgium", ips: "155,240 IPs", code: "BE", url: '/belgium'  },
      { name: "Czechia", ips: "210,500 IPs", code: "CZ" , url: '/czechia' },
      { name: "Israel", ips: "4,421,924 IPs", code: "IL", url: '/israel'  },
      { name: "Italy", ips: "4,421,924 IPs", code: "IT" , url: '/italy' },
      { name: "kenya", ips: "4,421,924 IPs", code: "KE", url: '/kenya'  },
      { name: "Malaysia", ips: "4,421,924 IPs", code: "MY", url: '/malaysia'  },
      { name: "Nigeria", ips: "4,421,924 IPs", code: "NG", url: '/nigeria'  },
      { name: "Norway", ips: "4,421,924 IPs", code: "NO", url: '/norway'  },
      { name: "Pakistan", ips: "4,421,924 IPs", code: "PK", url: '/pakistan'  },
      { name: "Peru", ips: "4,421,924 IPs", code: "PE", url: '/peru'  },
      { name: "Philippines", ips: "4,421,924 IPs", code: "PH", url: '/philippines'  },
      { name: "Poland", ips: "4,421,924 IPs", code: "PL", url: '/poland'  },
      { name: "Portugal", ips: "4,421,924 IPs", code: "PT", url: '/portugal'  },
      { name: "Russia", ips: "4,421,924 IPs", code: "RU", url: '/russia'  },
      { name: "Spain", ips: "4,421,924 IPs", code: "SG", url: '/spain'  },
      { name: "Switzerland", ips: "4,421,924 IPs", code: "CH", url: '/switzerland'  },
      { name: "Taiwan", ips: "4,421,924 IPs", code: "TW", url: '/taiwan'  },
      { name: "Thailand", ips: "4,421,924 IPs", code: "TH", url: '/thailand'  },
      { name: "Turkey", ips: "4,421,924 IPs", code: "TR" , url: '/turkey' },
      { name: "Ukraine", ips: "4,421,924 IPs", code: "UA", url: '/ukraine'  },
      { name: "Vietnam", ips: "4,421,924 IPs", code: "VN", url: '/vietnam'  },
      { name: "Venezuela", ips: "4,421,924 IPs", code: "VE", url: '/venezuela'  },
      { name: "Netherlands", ips: "4,421,924 IPs", code: "NL", url: '/netherlands'  },
      { name: "Finland", ips: "4,421,924 IPs", code: "FI", url: '/finland'  },
      { name: "Denmark", ips: "4,421,924 IPs", code: "DK", url: '/denmark'  },
      { name: "Indonesia", ips: "4,421,924 IPs", code: "ID" , url: '/indonesia' }
    ],
    isp: [
      { name: "South Korea", ips: "4,421,924 IPs", code: "KR" , url: '/south-korea' },
      { name: "Ireland", ips: "4,421,924 IPs", code: "IE" , url: '/ireland' },
      { name: "Iran", ips: "4,421,924 IPs", code: "IR" , url: '/iran' },
      { name: "Chile", ips: "4,421,924 IPs", code: "CL" , url: '/chile' },
      { name: "Argentina", ips: "4,421,924 IPs", code: "AR", url: '/argentina'  },
      { name: "Brazil", ips: "1,421,960 IPs", code: "BR", url: '/brazil'  },
      { name: "Belgium", ips: "155,240 IPs", code: "BE", url: '/belgium'  },
      { name: "Czechia", ips: "210,500 IPs", code: "CZ", url: '/czechia'  },
      { name: "Israel", ips: "4,421,924 IPs", code: "IL" , url: '/israel' },
      { name: "Italy", ips: "4,421,924 IPs", code: "IT" , url: '/italy' },
      { name: "Kenya", ips: "4,421,924 IPs", code: "KE", url: '/kenya'  },
      { name: "Malaysia", ips: "4,421,924 IPs", code: "MY", url: '/malaysia'  },
      { name: "Nigeria", ips: "4,421,924 IPs", code: "NG", url: '/nigeria'  },
      { name: "Norway", ips: "4,421,924 IPs", code: "NO", url: '/norway'  },
      { name: "Pakistan", ips: "4,421,924 IPs", code: "PK", url: '/pakistan'  },
      { name: "Peru", ips: "4,421,924 IPs", code: "PE", url: '/peru'  },
      { name: "Philippines", ips: "4,421,924 IPs", code: "PH", url: '/philippines'  },
      { name: "Poland", ips: "4,421,924 IPs", code: "PL", url: '/poland'  },
      { name: "Portugal", ips: "4,421,924 IPs", code: "PT" , url: '/portugal' },
      { name: "Russia", ips: "4,421,924 IPs", code: "RU", url: '/russia'  },
      { name: "Spain", ips: "4,421,924 IPs", code: "ES", url: '/spain'  },
      { name: "Switzerland", ips: "4,421,924 IPs", code: "CH", url: '/switzerland'  },
      { name: "Taiwan", ips: "4,421,924 IPs", code: " TW" , url: '/taiwan' },
      { name: "Thailand", ips: "4,421,924 IPs", code: "TH", url: '/thailand'  },
      { name: "Turkey", ips: "4,421,924 IPs", code: "TR", url: '/turkey'  },
      { name: "Ukraine", ips: "4,421,924 IPs", code: "UA", url: '/ukraine'  },
      { name: "Vietnam", ips: "4,421,924 IPs", code: "VN" , url: '/vietnam' },
      { name: "Venezuela", ips: "4,421,924 IPs", code: "VE", url: '/venezuela'  },
      { name: "Netherlands", ips: "4,421,924 IPs", code: "NL" , url: '/netherlands' },
      { name: "Finland", ips: "4,421,924 IPs", code: "FI", url: '/finland'  },
      { name: "Denmark", ips: "4,421,924 IPs", code: "DK", url: '/denmark'  },
      { name: "Indonesia", ips: "4,421,924 IPs", code: "ID", url: '/indonesia'  }
    ]
};
  const [activeTab, setActiveTab] = useState<'residential' | 'isp'>('residential');

  const activeList = locations[otherLocationsTab] || [];
  
  return (
    <div className="bg-[#0a0a0a] text-white font-urbanist antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden font-['Urbanist']">

        {/* ── SECTION 1: HERO CONTAINER ────────────────────────────────── */}
<header className="relative z-20 min-h-[95vh] sm:min-h-0 flex flex-col items-center justify-center px-6 pt-28 pb-12 overflow-visible font-['Urbanist']">

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

    <div className="max-w-6xl mx-auto text-center z-10">
        <div className="flex items-center justify-center mb-6">
            <img
                src="/images/TrustPiolet.png"
                alt="Excellent 5-star rating on Trustpilot"
                className="h-6 w-auto object-contain"
                loading="lazy"
            />
        </div>

        <h1 className="text-[60px] sm:text-6xl lg:text-7xl font-normal tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-stone-200 to-stone-500 bg-clip-text text-transparent">
            Available in 190+ countries <br />
            <span className="bg-gradient-to-b from-white via-stone-200 to-stone-200 bg-clip-text text-transparent">
                worldwide
            </span>
        </h1>

        <p className="max-w-3xl mx-auto text-stone-400 text-[18px] sm:text-xl mb-10 leading-relaxed">
            Power your online activities with fast, secure and reliable proxies that work seamlessly across regions worldwide, keeping you connected no matter where you are.
        </p>

        <div className="py-4 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-stone-200 font-medium">
            <div className="flex items-center justify-center gap-2">
                <Check className="text-orange-500 w-4 h-4" /> Pay as you go pricing
            </div>
            <div className="flex items-center justify-center gap-2">
                <Check className="text-orange-500 w-4 h-4" /> Money back guarantee
            </div>
            <div className="flex items-center justify-center gap-2">
                <Check className="text-orange-500 w-4 h-4" /> Dedicated Support
            </div>
        </div>

    </div>

</header>

        {/* ── SECTION 2: TOP LOCATIONS (Uses topLocationsTab) ────────────────── */}
<section className="py-24 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
  {/* Radial glow background effect */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(254,74,1,0.02)_0%,transparent_70%)] pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
    
    <h2 className="text-4xl md:text-[42px] font-medium tracking-tight text-center mb-10 text-white">
      Top locations
    </h2>

    {/* Tab Toggles */}
    <div className="inline-flex bg-[#0f0f11] border border-stone-900 rounded-full p-1.5 mb-16 select-none">
      <button
        onClick={() => setTopLocationsTab('residential')}
        className={`px-6 py-2.5 rounded-full text-[14px] font-normal tracking-wide transition-all duration-200 ${
          topLocationsTab === 'residential'
            ? 'bg-[#FE4A01] text-white shadow-[0_4px_12px_rgba(254,74,1,0.2)]'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        Residential Proxies
      </button>
      <button
        onClick={() => setTopLocationsTab('isp')}
        className={`px-6 py-2.5 rounded-full text-[14px] font-normal tracking-wide transition-all duration-200 ${
          topLocationsTab === 'isp'
            ? 'bg-[#FE4A01] text-white shadow-[0_4px_12px_rgba(254,74,1,0.2)]'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        ISP Proxies
      </button>
    </div>

    {/* Dynamic & Clickable Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {locationsData[topLocationsTab].map((loc, index) => (
        <Link
          key={index}
          href={loc.url || '#'}
          className="flex items-center gap-4 bg-[#0d0d0f]/40 border border-stone-900/80 rounded-[16px] p-5 hover:border-[#FE4A01]/30 hover:bg-[#0e0e12]/90 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
{/* Flag Wrapper */}
{/* 🛠️ Changed w-15 to w-16 or w-20 to give it a wider aspect ratio */}
<div className="w-16 h-10 relative overflow-hidden rounded-md flex-shrink-0 bg-stone-950/40 transition-transform duration-300 group-hover:scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center">
  <Flag 
    code={loc.code} 
    /* 🛠️ Changed object-cover to object-contain so it never crops */
    className="max-w-full max-h-full object-contain" 
    fallback={<span className="text-xs text-stone-600">🏳️</span>}
  />
</div>

          {/* Location Content */}
          <div className="flex flex-col min-w-0 text-left">
            <span className="text-[20px] font-semibold text-stone-200 tracking-tight group-hover:text-white transition-colors truncate">
              {loc.country}
            </span>
            <span className="text-[16px] text-stone-500 group-hover:text-[#FE4A01]/90 font-normal tracking-wide mt-0.5 transition-colors">
              {loc.ips}
            </span>
          </div>
        </Link>
      ))}
    </div>

  </div>
</section>

        {/* ── SECTION 3: OTHER LOCATIONS (Uses otherLocationsTab) ────────────────── */}
  <section className="py-20 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
  {/* 1. Radial glow asset */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(254,74,1,0.04)_0%,transparent_70%)] pointer-events-none select-none" />

  {/* 2. Full-Width Background Image Asset (Moved here) */}
  <div className="absolute inset-x-0 bottom-0 h-[450px] z-0 pointer-events-none select-none">
    <Image
      src="/images/contact-bg.png"
      alt=""
      fill
      priority
      className="object-cover object-bottom opacity-100"
    />
  </div>

  {/* 3. Centered Content Container */}
  <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
    
    <h2 className="text-4xl md:text-[42px] font-medium tracking-tight text-center mb-10 text-stone-100">
      Other Locations
    </h2>

    {/* Tabs wrapper */}
    <div className="inline-flex bg-[#0f0f11] border border-stone-900/90 rounded-full p-1.5 mb-14 select-none">
      <button
        onClick={() => setOtherLocationsTab('residential')}
        className={`px-5 py-2 rounded-full text-[14px] font-normal tracking-wider transition-all duration-200 ${
          otherLocationsTab === 'residential'
            ? 'bg-[#FE4A01] text-white shadow-[0_3px_10px_rgba(254,74,1,0.25)]'
            : 'text-stone-500 hover:text-stone-300'
        }`}
      >
        Residential Proxies
      </button>
      <button
        onClick={() => setOtherLocationsTab('isp')}
        className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-200 ${
          otherLocationsTab === 'isp'
            ? 'bg-[#FE4A01] text-white shadow-[0_3px_10px_rgba(254,74,1,0.25)]'
            : 'text-stone-500 hover:text-stone-300'
        }`}
      >
        ISP Proxies
      </button>
    </div>

    {/* Locations Grid layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
      {activeList.map((loc, index) => (
        <Link
          href={loc.url}
          key={`${otherLocationsTab}-${loc.code}-${index}`}
          className="flex items-center gap-3.5 bg-[#0b0b0d]/30 border border-stone-900/60 rounded-[12px] p-4 hover:border-stone-800/80 hover:bg-[#0e0e12]/60 transition-all duration-200 group cursor-pointer block"
        >
{/* Flag Wrapper */}
{/* 🛠️ Changed w-15 to w-16 or w-20 to give it a wider aspect ratio */}
<div className="w-16 h-10 relative overflow-hidden rounded-md flex-shrink-0  transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
  <Flag 
    code={loc.code} 
    /* 🛠️ Changed object-cover to object-contain so it never crops */
    className="max-w-full max-h-full object-contain" 
    fallback={<span className="text-xs text-stone-600">🏳️</span>}
  />
</div>

          <div className="flex flex-col min-w-0 leading-tight">
            <span className="text-[20px] font-semibold text-stone-300 tracking-tight group-hover:text-white transition-colors truncate">
              {loc.name}
            </span>
            <span className="text-[16px] text-stone-600 font-normal mt-0.5 tracking-wide">
              {loc.ips}
            </span>
          </div>
        </Link>
      ))}
    </div>

  </div>
</section>

    </div>
  );
}
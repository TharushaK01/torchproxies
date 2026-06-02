interface TabContent {
  heading: string;
  subheading: string;
  bullets: string[];
  footerQuestion: string;
  footerAnswer: string;
}

interface FeatureTab {
  id: string;
  label: string;
  content: TabContent;
}

const featureTabs: FeatureTab[] = [
  {
    id: "ip-bans",
    label: "Avoid IP Bans",
    content: {
      heading: "Most blocks happen before scraping even starts.",
      subheading: "Hybrid proxies use real ISP-backed identities that websites trust.",
      bullets: [
        "ISP-sourced IPs that look like real users",
        "No datacenter fingerprints that trigger instant blocks",
        "99% success rate even on heavily protected sites"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "Your requests go through instead of getting silently blocked."
    }
  },
  {
    id: "scraping-costs",
    label: "Lower Scraping Costs",
    content: {
      heading: "Retries, bans and failed requests are what make scraping expensive, not bandwidth.",
      subheading: "Maximize efficiency to keep your web data overhead completely optimized.",
      bullets: [
        "From $5/GB with for fewer retries",
        "Up to 60% cheaper than traditional residential proxies",
        "Non-expiring traffic means nothing goes to waste"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "You spend less money to get the same or better results."
    }
  },
  {
    id: "every-site",
    label: "One Proxy for Every Site",
    content: {
      heading: "Managing multiple proxy types adds complexity and failure points.",
      subheading: "Hybrid proxies handle everything seamlessly with a single lightweight integration.",
      bullets: [
        "Works on both easy, static sites and strict, protected platforms",
        "No switching between datacenter and residential pools",
        "Residential trust combined with datacenter-level speed and efficiency"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "Simpler infrastructure and fewer things to maintain."
    }
  },
  {
    id: "captchas",
    label: "Fewer CAPTCHAs",
    content: {
      heading: "CAPTCHAs are triggered by suspicious IP reputation and automation signals.",
      subheading: "Our clean pools drastically reduce the friction your scrapers encounter.",
      bullets: [
        "Clean ISP reputation lowers CAPTCHA frequency",
        "Real residential authentication signals embedded automatically",
        "No need for expensive third-party CAPTCHA-solving services"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "More uninterrupted scraping and cleaner, faster data delivery."
    }
  }
];


import React, { useState } from 'react';

export default function FeaturesTabSection() {
  const [activeTab, setActiveTab] = useState<string>(featureTabs[0].id);

  // Retrieve the current tab's unique display content block
  const currentTab = featureTabs.find((tab) => tab.id === activeTab) || featureTabs[0];

  return (
    <section className="bg-[#0a0a0a] text-stone-200 py-24 px-6 md:px-12 flex items-center justify-center min-h-[600px]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        
        {/* Left Side: Interactive Tab Triggers */}
        <div className="col-span-1 md:col-span-4 flex flex-col space-y-2.5">
          {featureTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left text-[#FFFFFF] px-5 py-3.5 text-[16px] font-medium tracking-wide rounded-xl border transition-all duration-200 outline-none
                  ${
                    isActive
                      ? 'bg-[#FF4F00] text-white border-[#FF4F00] shadow-[0_0_25px_rgba(255,79,0,0.25)]'
                      : 'bg-[#141414] text-[#FF4F00] text-[16px] font-mediu border-stone-900/40 hover:bg-[#1a1a1a] hover:text-stone-200'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right Side: Dynamic Content Display Panel */}
        <div className="col-span-1 md:col-span-8 space-y-6 min-h-[280px] flex flex-col justify-between transition-opacity duration-150">
          
          {/* Main Headings */}
          <div className="space-y-3">
            <h3 className="text-stone-100 font-regular text-[16px] md:text-xl leading-snug">
              {currentTab.content.heading}
            </h3>
          </div>

          {/* Bulleted Functional Offerings */}
          <ul className="space-y-3.5 py-2 -mt-40">
            {currentTab.content.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-stone-300 text-[16px] font-normal">
                {/* Custom Minimalist Orange Dot Marker */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] font-regular mt-1 flex-shrink-0 shadow-[0_0_8px_#FF4F00]" />
                <span className="leading-normal">{bullet}</span>
              </li>
            ))}
          </ul>

            <h5 className="font-regular text-[16px] text-[#878B91] tracking-wider -mt-40">
              {currentTab.content.footerQuestion}
            </h5>
            <p className="text-[16px] font-regular text-[#FFFFFF] leading-relaxed -mt-50">
              {currentTab.content.footerAnswer}
            </p>

        </div>
      </div>
    </section>
  );
}
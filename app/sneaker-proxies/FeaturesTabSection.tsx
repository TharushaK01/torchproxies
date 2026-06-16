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
    label: "Stay Unbanned on Drop Day",
    content: {
      heading: "Sneaker sites don’t just check IPs. They evaluate whether your session looks like a real shopper.",
      subheading: "Hybrid proxies use real ISP-backed identities that websites trust.",
      bullets: [
        "ISP-backed residential identities that blend in naturally",
        "ISP-backed residential identities that blend in naturally",
        "Fresh, never-burned IP pools built for drops",
        "Proven 99% success rate on strict platforms"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "More tasks make it to checkout instead of dying silently."
    }
  },
  {
    id: "scraping-costs",
    label: "Spend Less. Win More Checkouts",
    content: {
      heading: "Most proxy spend is lost on failed requests, burned IPs, and forced retries.",
      subheading: "Maximize efficiency to keep your web data overhead completely optimized.",
      bullets: [
        "$5/GB with high success = fewer wasted requests",
        "60% cheaper than traditional residential proxies",
        "20–50× better ROI than datacenter after retry costs",
        "Non-expiring traffic so unused data is never lost"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "Lower costs per checkout and higher profit per drop."
    }
  },
  {
    id: "every-site",
    label: "Run Every Site With One Setup",
    content: {
      heading: "Instead of managing datacenter for speed and residential for trust, you use one solution that does both.",
      subheading: "Hybrid proxies handle everything seamlessly with a single lightweight integration.",
      bullets: [
        "Works across SNKRS, Adidas Confirmed, Footsites, Shopify, Supreme, YeezySupply",
        "Checkout-level speed with residential legitimacy",
        "Fewer configs, fewer mistakes, cleaner runs"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "Less setup stress and more consistent performance on drop day."
    }
  },
  {
    id: "captchas",
    label: "Get Through Queues Without Friction",
    content: {
      heading: "Queues punish instability. Rotating or weak proxies lose position fast.",
      subheading: "Our clean pools drastically reduce the friction your scrapers encounter.",
      bullets: [
        "Clean ISP reputation reduces CAPTCHA triggers",
        "Long-lived, stable sessions for queue-based drops",
        "No CAPTCHA-solving tools or manual intervention needed"
      ],
      footerQuestion: "What this means for you?",
      footerAnswer: "You stay in line while others get pushed out."
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
<div className="col-span-1 md:col-span-8 flex flex-col transition-opacity duration-150 min-h-[280px]">
  
  {/* 1. Main Heading */}
  <div>
    <h3 className="text-stone-100 font-regular text-[16px] md:text-xl leading-snug">
      {currentTab.content.heading}
    </h3>
  </div>

  {/* 2. Bulleted Functional Offerings (Margin-top controls gap between heading and list) */}
  <ul className="mt-5 space-y-3.5">
    {currentTab.content.bullets.map((bullet, idx) => (
      <li key={idx} className="flex items-start gap-3 text-stone-300 text-[16px] font-normal">
        {/* Custom Minimalist White Dot Marker */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] mt-2 flex-shrink-0" />
        <span className="leading-normal">{bullet}</span>
      </li>
    ))}
  </ul>

  {/* 3. Footer Question (Push down or uniform gap) */}
  <h5 className="mt-6 font-regular text-[16px] text-[#878B91] tracking-wider">
    {currentTab.content.footerQuestion}
  </h5>

  {/* 4. Footer Answer */}
  <p className="mt-2 text-[16px] font-regular text-[#FFFFFF] leading-relaxed">
    {currentTab.content.footerAnswer}
  </p>

</div>
      </div>
    </section>
  );
}
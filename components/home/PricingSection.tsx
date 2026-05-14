import React from 'react';
import { Check } from 'lucide-react'; 

const PricingSection = () => {
  const topFeatures = [
    "HTTP & Socks",
    "Secure checkout with SSL encryption",
    "Pay As You Go Pricing Available",
    "Authentic IPs",
    "Support both card & crypto",
  ];

  const plans = [
    {
      name: "Standard",
      desc: "Perfect for everyday online tasks.",
      price: "From $4/GB per month",
      icon: "🟠", // Replace with your custom SVG or Image
      features: [
        "Premium residential IPs",
        "Rotating and sticky sessions",
        "Target country, state, and city-level",
        "Suitable for general web scraping",
        "Unlimited concurrent sessions",
        "30M+ ethically sourced unique IPs in 195 countries",
        "Easy API access for integration",
      ],
    },
    {
      name: "Premium",
      desc: "For demanding users and businesses.",
      price: "From $4.5/GB per month",
      highlight: "Best Value",
      icon: "🟧",
      featured: true,
      features: [
        "Premium residential IPs",
        "Rotating and sticky sessions",
        "Target country, state, and city-level",
        "Suitable for general web scraping",
        "Unlimited concurrent sessions",
        "90M+ ethically sourced unique IPs in 195 countries",
        "Easy API access for integration",
      ],
    },
    {
      name: "Plan X",
      desc: "Perfect for top tier performance.",
      price: "From $5/GB per month",
      icon: "💠",
      features: [
        "Authentic residential proxies with dedicated ISP pools",
        "Rotating and sticky sessions",
        "Target country, state, and city-level",
        "Suitable for general web scraping",
        "Unlimited concurrent sessions",
        "120M+ ethically sourced unique IPs in 195 countries",
        "Easy API access for integration",
      ],
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6">
      {/* Top Bar Features */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 text-sm font-medium text-gray-300">
        {topFeatures.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="text-orange-500 w-4 h-4" /> {f}
          </div>
        ))}
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-2xl border-2 transition-all ${
              plan.featured 
                ? 'border-orange-600 bg-gradient-to-b from-[#1a0d00] to-black shadow-[0_0_30px_rgba(234,88,12,0.2)]' 
                : 'border-gray-800 bg-[#0a0a0a]'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-2xl">
                 {plan.icon}
               </div>
               <div>
                 <h3 className="text-xl font-bold">{plan.name}</h3>
                 <p className="text-gray-400 text-sm">{plan.desc}</p>
               </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className="bg-[#2a1200] text-orange-500 px-4 py-2 rounded-lg font-bold text-sm">
                {plan.price}
              </span>
              {plan.highlight && (
                <span className="bg-[#001a11] text-green-500 px-4 py-2 rounded-lg text-sm font-bold border border-green-900">
                  {plan.highlight}
                </span>
              )}
            </div>

            <ul className="space-y-4">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-tight">
                  <Check className="text-orange-500 w-4 h-4 shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Large Blocks */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ISP Section */}
        <div className="lg:col-span-3 bg-[#0a0a0a] border-2 border-gray-800 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-2xl">⚡</div>
              <div>
                <h3 className="text-xl font-bold">ISP</h3>
                <p className="text-gray-400 text-sm">Static residential proxies with unlimited data.</p>
              </div>
            </div>
            <span className="bg-[#2a1200] text-orange-500 px-4 py-2 rounded-lg font-bold text-sm">From $2.3/IP</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Reliable and Stable Connections",
              "ISP-grade Anonymity",
              "Best for Crypto, ticketing, web scraping, and automation",
              "Quick Setup and Instant Activation",
              "Versatility Across Applications",
              "24/7 Dedicated Support",
              "Global Coverage with Regional Optimization"
            ].map((text, i) => (
              <div key={i} className="flex gap-3 text-sm text-gray-300">
                 <Check className="text-orange-500 w-4 h-4 shrink-0 mt-0.5" /> {text}
              </div>
            ))}
          </div>
        </div>

        {/* Custom Plan Section */}
        <div className="lg:col-span-2 bg-[#0a0a0a] border-2 border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-4">Need a <br /> custom plan?</h2>
            <p className="text-gray-400 mb-8">No worries, we'll build your Residential & ISP proxy plan today.</p>
            <div className="flex gap-3 text-sm text-gray-300 mb-8">
               <Check className="text-orange-500 w-4 h-4 shrink-0 mt-0.5" />
               For enterprise that needs additional data, security, control and more support
            </div>
          </div>
          <button className="w-full border border-gray-700 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all">
            Request custom plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
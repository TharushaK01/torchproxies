"use client";
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PricingSection = () => {
  const router = useRouter();

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
      icon: "/images/Premium.svg",
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
      icon: "/images/ISP.svg",
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
      icon: "/images/Standard.svg",
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

  const handleNavigate = () => {
    router.push('https://dashboard.torchproxies.com/');
  };

  return (
    <section 
      id="pricing" 
      className="bg-[#0a0a0a] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 font-['Urbanist'] max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center w-full">
        <span className="text-orange-500 font-normal text-sm md:text-base mb-3 tracking-widest flex items-center justify-center gap-2">
          Our Products
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 max-w-4xl leading-tight">
          Choose Your Residential &amp; ISP Proxy Plan
        </h2>
      </div>

      {/* Top Bar Features */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 md:mb-16 text-xs sm:text-sm font-medium text-gray-300">
        {topFeatures.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="text-[#07CC99] w-4 h-4 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-6 sm:p-8 rounded-2xl border-2 flex flex-col justify-between transition-all ${
              plan.featured
                ? 'border-orange-600 bg-gradient-to-b from-[#1a0d00] to-black shadow-[0_0_30px_rgba(234,88,12,0.2)]'
                : 'border-gray-800 bg-[#0a0a0a]'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={plan.icon}
                    alt={`${plan.name} plan icon`}
                    fill
                    className="object-contain filter brightness-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{plan.desc}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="bg-[#2a1200] text-orange-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm">
                  {plan.price}
                </span>
                {plan.highlight && (
                  <span className="bg-[#001a11] text-green-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border border-green-900">
                    {plan.highlight}
                  </span>
                )}
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm text-gray-300 leading-tight">
                    <Check className="text-[#07CC99] w-4 h-4 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleNavigate}
              className={`group relative overflow-hidden w-full h-[48px] sm:h-[52px] px-6 font-bold rounded-xl transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${
                plan.featured
                  ? 'bg-orange-600 text-white hover:bg-orange-500 shadow-[0_4px_20px_rgba(234,88,12,0.3)]'
                  : 'bg-transparent text-gray-200 border border-gray-700 hover:border-gray-500 hover:bg-white/5'
              }`}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                  Try for free
                </span>
                <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-sm sm:text-base text-white">
                  Try for free
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Custom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        {/* ISP Section */}
        <div className="lg:col-span-3 bg-[#0a0a0a] border-2 border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl shrink-0">
                  <Image
                    src="/images/PlanX.svg"
                    alt="ISP plan icon"
                    fill
                    className="object-contain filter brightness-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">ISP</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Static residential proxies with unlimited data.</p>
                </div>
              </div>
              <span className="bg-[#2a1200] text-orange-500 px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm self-start sm:self-auto">
                From $2.3 Per IP
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {[
                "Reliable and Stable Connections",
                "ISP-grade Anonymity",
                "Best for Crypto, ticketing, web scraping, and automation",
                "Quick Setup and Instant Activation",
                "Versatility Across Applications",
                "24/7 Dedicated Support",
                "Global Coverage with Regional Optimization"
              ].map((text, i) => (
                <div key={i} className="flex gap-3 text-xs sm:text-sm text-gray-300">
                  <Check className="text-[#07CC99] w-4 h-4 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNavigate}
            className="group relative overflow-hidden w-full h-[48px] sm:h-[52px] px-6 bg-transparent text-gray-200 border border-gray-700 hover:border-gray-500 font-bold rounded-xl hover:bg-white/5 transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                Try for free
              </span>
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-sm sm:text-base text-white">
                Try for free
              </span>
            </div>
          </button>
        </div>

        {/* Custom Plan Section */}
        <div className="lg:col-span-2 bg-[#0a0a0a] border-2 border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Need a custom plan?
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl leading-snug mb-6">
              No worries, we&apos;ll build your Residential &amp; ISP proxy plan today.
            </p>
            <div className="flex gap-3 text-xs sm:text-sm text-gray-300">
              <Check className="text-[#07CC99] w-4 h-4 shrink-0 mt-0.5" />
              <span>For enterprise that needs additional data, security, control and more support</span>
            </div>
          </div>

          <button
            onClick={handleNavigate}
            className="group relative overflow-hidden w-full h-[48px] sm:h-[52px] px-6 bg-transparent text-gray-200 border border-gray-700 hover:border-gray-500 font-bold rounded-xl hover:bg-white/5 transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
                Get a quote
              </span>
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-sm sm:text-base text-white">
                Get a quote
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ClientManagement = () => {
  const router = useRouter();
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-32">

        <div className="text-center mb-16">
          <span className="text-[#FE4A01] text-[16px] font-regular tracking-wider block mb-3">
            B2B Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4 max-w-3xl text-center mx-auto">
            Simplify and scale your business with our easy to use tools.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-normal">

            Our Proxy Dashboard and Proxy API help resellers manage and distribute proxies efficiently.
          </p>
          <button
            onClick={() => router.push('/b2b-dashboard')}
            className="
    group relative overflow-hidden 
    bg-gradient-to-r from-orange-600 to-orange-500 
    px-8 rounded-xl font-bold text-white shadow-lg shadow-orange-900/20 
    mb-12 mt-5 w-[240px] h-[56px] cursor-pointer
    hover:scale-[1.01] active:scale-[0.99] transition-all duration-200
  "
          >
            {/* 🛠️ FIXED: Changed group-hover to rotateX(-90deg) */}
            <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(-90deg)]">

              {/* Default State Text (Visible Initially) */}
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                Explore B2B products
              </span>

              {/* 🛠️ FIXED: Changed waiting layer starting position to rotateX(90deg) */}
              <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(12px)] text-white/95">
                Explore B2B products
              </span>

            </div>
          </button>
        </div>

        {/* Row 1: Easy Client Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative group">
            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-3 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="bg-[#050505] rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center">
                {/* Official B2B Dashboard Representation Asset */}
                <img
                  src="/images/b2bDashboard.png"
                  alt="Torch B2B Client Management Dashboard"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Labels */}
            {/* <Label tag="Centralized Proxy Management" className="top-4 left-12" />
            <Label tag="Realtime usage and analytics" className="top-1/3 -right-4 translate-x-4" />
            <Label tag="Reseller-Friendly Setup" className="bottom-1/4 -left-8" />
            <Label tag="Instant Plan & Balance Controls" className="-bottom-4 right-12" /> */}
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-[28px] md:text-5xl font-medium tracking-tight">
              Easy Client Management
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We provide a centralized platform where resellers can easily manage proxy inventory, monitor client usage, and streamline proxy distribution, all in one place.
            </p>
          </div>
        </div>

        {/* Row 2: Quick Proxy Delivery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side (Order Reversed on Large Screens) */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-[28px] md:text-5xl font-medium tracking-tight">
              Quick Proxy Delivery
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our API allows developers to automate proxy delivery, integrate with your current systems, and simplify the reselling process, so you can scale effortlessly.
            </p>
          </div>

          {/* Visual Side: Swagger UI Mockup */}
          <div className="order-1 lg:order-2 relative group">
            <img
              src="/images/ProxyAPI.png"
              alt="Proxy API"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Floating Label Component
const Label = ({ tag, className }: { tag: string; className: string }) => (
  <div className={`absolute z-20 flex items-center gap-2 bg-[#ff4500] text-white text-[10px] md:text-xs font-bold px-3 py-2 rounded-full whitespace-nowrap shadow-xl border border-white/20 ${className}`}>
    <CheckCircle2 size={14} className="fill-white text-[#ff4500]" />
    {tag}
  </div>
);

// Reusable API Endpoint Row
const Endpoint = ({ method, path, color }: { method: string; path: string; color: string }) => (
  <div className="bg-black/50 border border-gray-800 rounded px-3 py-2 flex items-center gap-3">
    <span className={`text-[10px] font-black ${color}`}>{method}</span>
    <span className="text-[9px] text-gray-400 font-mono truncate">{path}</span>
  </div>
);

export default ClientManagement;
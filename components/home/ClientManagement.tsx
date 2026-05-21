import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ClientManagement = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">

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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
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
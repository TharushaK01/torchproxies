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
            <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
               {/* Simplified Dashboard Mockup */}
               <div className="bg-[#050505] rounded-2xl p-6 border border-gray-900 min-h-[350px]">
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-16 bg-[#111] rounded-xl border border-gray-800" />
                    ))}
                  </div>
                  <div className="h-40 bg-[#111] rounded-xl border border-gray-800 w-full mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-[#111] rounded-xl border border-gray-800" />
                    <div className="h-24 bg-[#111] rounded-xl border border-gray-800" />
                  </div>
               </div>
            </div>

            {/* Floating Labels */}
            <Label tag="Centralized Proxy Management" className="top-4 left-1/4" />
            <Label tag="Realtime usage and analytics" className="top-1/3 right-0 translate-x-1/4" />
            <Label tag="Reseller-Friendly Setup" className="bottom-1/4 left-0 -translate-x-1/4" />
            <Label tag="Instant Plan & Balance Controls" className="bottom-8 right-1/4" />
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
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px]">S</div>
                <span className="font-bold text-xl tracking-tight">Swagger</span>
              </div>
              
              <div className="flex gap-4">
                {/* Left Sidebar Mock */}
                <div className="w-1/3 space-y-2">
                  {['Smart Proxies', 'Packetstream', 'Oxylabs', 'IPRoyal', 'Brightdata'].map((name, i) => (
                    <div key={i} className={`text-[10px] p-2 rounded border border-gray-800 text-center ${i === 0 ? 'bg-gray-100 text-black font-bold' : 'bg-transparent text-gray-500'}`}>
                      {name}
                    </div>
                  ))}
                </div>
                
                {/* API Endpoints Mock */}
                <div className="flex-grow space-y-3">
                  <Endpoint method="POST" path="/proxy_api/v1/smart/users/create" color="text-green-400" />
                  <Endpoint method="POST" path="/proxy_api/v1/smart/users/update" color="text-green-400" />
                  <Endpoint method="GET" path="/proxy_api/v1/smart/users" color="text-blue-400" />
                  <Endpoint method="GET" path="/proxy_api/v1/smart/users/{user-id}/usage" color="text-blue-400" />
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <Label tag="Developer friendly" className="-top-4 right-1/4" />
            <Label tag="Flexible for Any Use Case" className="top-1/4 -right-8 translate-x-4" />
            <Label tag="Fully Automated" className="bottom-1/4 -right-4" />
            <Label tag="Works Across All Proxy Types" className="-bottom-4 left-1/4" />
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
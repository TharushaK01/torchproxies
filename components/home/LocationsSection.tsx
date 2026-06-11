"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Flag from 'react-world-flags'; 

const LocationsSection = () => {
  const router = useRouter();
  const locations = [
  { code: 'US', name: 'United States', ips: '4,429,824', url: '/united-states' },
  { code: 'GB', name: 'United Kingdom', ips: '1,449,139', url: '/united-kingdom' },
  { code: 'DE', name: 'Germany', ips: '1,431,960', url: '/germany' },
  { code: 'AU', name: 'Australia', ips: '452,720', url: '/australia' },
  { code: 'CA', name: 'Canada', ips: '815,658', url: '/canada' },
  { code: 'MX', name: 'Mexico', ips: '4,429,824', url: '/mexico' },
  { code: 'CN', name: 'China', ips: '4,429,824', url: '/china' },
  { code: 'FR', name: 'France', ips: '4,429,824', url: '/france' },
];
  return (
            <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden space-y-6 font-['Urbanist']">

                {/* Background Vector */}
                <div
                    className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/world-map.png')",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="text-orange-500 font-regular text-[16px] mb-4 block tracking-widest">
                        Locations
                    </span>

                    <h2 className="text-4xl md:text-5xl font-regular mb-6">
                        Available in 195+ countries
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mb-16">
                        We provide you access to a global network of ethical sourced proxy nodes from around the world.
                    </p>
                    
<button 
  onClick={() => router.push('/countries')} 
  className="
    group relative overflow-hidden
    bg-gradient-to-r from-orange-600 to-orange-500 
    px-8 h-[56px] rounded-xl font-bold text-white 
    shadow-lg shadow-orange-900/20 
     transition-all duration-200 ease-out
    cursor-pointer mb-12 w-60 h-50
  "
>
  {/* Snappy 3D text track wrapper */}
  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
    
    {/* Default State Text (Visible Initially) */}
    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
      View all locations
    </span>
    
    {/* Hover State Text (Rolls in cleanly from below) */}
    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/95">
      View all locations
    </span>
    
  </div>
</button>

                    {/* Locations Grid */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {locations.map((loc, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-[#0a0a0a]/80 border border-gray-800 p-5 rounded-2xl hover:border-orange-500/50 transition-all group"
                            >
                                <div className="w-12 h-8 overflow-hidden rounded shadow-sm">
                                    <Flag code={loc.code} className="w-full h-full object-cover" />
                                </div>

                                <div className="text-left">
                                    <h3 className="font-bold text-sm group-hover:text-orange-500 transition-colors">
                                        {loc.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {loc.ips} IPs
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
  {locations.map((loc, index) => (
    <div
      key={`${loc.code}-${index}`}
      // ── CLICK NAVIGATION HANDLER ──
      onClick={() => router.push(loc.url)}
      className="flex items-center gap-3.5 bg-[#0b0b0d]/30 border border-stone-900/60 rounded-[12px] p-4 hover:border-stone-800/80 hover:bg-[#0e0e12]/60 transition-all duration-200 group cursor-pointer"
    >
      {/* Flag Container */}
      <div className="w-11 h-9 relative overflow-hidden rounded-[3px] flex-shrink-0 bg-stone-950 shadow-[0_1px_3px_rgba(0,0,0,0.5)] border border-stone-900/20">
        <Flag 
          code={loc.code} 
          className="w-full h-full object-cover" 
          fallback={<span className="text-[10px] text-stone-600">🏳️</span>}
        />
      </div>

      {/* Data Labels Container */}
      <div className="flex flex-col min-w-0 leading-tight">
        <span className="text-[20px] font-semibold text-stone-300 tracking-tight group-hover:text-white transition-colors truncate">
          {loc.name}
        </span>
        <span className="text-[16px] text-stone-600 font-normal mt-0.5 tracking-wide">
          {loc.ips} IPs
        </span>
      </div>
    </div>
  ))}
</div>

                </div>
            </section>
  );
};

export default LocationsSection;
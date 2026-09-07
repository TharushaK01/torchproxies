"use client";
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
    <section className="relative bg-[#0a0a0a] text-white py-12 sm:py-20 overflow-hidden font-['Urbanist'] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Background Vector */}
      <div
        className="absolute inset-0 opacity-30 sm:opacity-40 bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('/images/world-map.png')",
        }}
      />

      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-orange-500 font-normal text-sm sm:text-base mb-3 block tracking-widest">
          Locations
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 leading-tight max-w-3xl">
          Available in 195+ Countries
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16">
          We provide you access to a global network of ethically sourced proxy nodes from around the world.
        </p>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full mb-10">
          {locations.map((loc, index) => (
            <div
              key={`${loc.code}-${index}`}
              onClick={() => router.push(loc.url)}
              className="flex items-center gap-3.5 bg-[#0b0b0d]/60 border border-stone-900/80 rounded-xl p-3.5 sm:p-4 hover:border-stone-800 hover:bg-[#0e0e12]/80 transition-all duration-200 group cursor-pointer text-left"
            >
              {/* Flag Container */}
              <div className="w-12 sm:w-14 h-8 sm:h-9 relative overflow-hidden rounded flex-shrink-0 bg-stone-950 shadow-sm border border-stone-900/40">
                <Flag 
                  code={loc.code} 
                  className="w-full h-full object-cover" 
                  fallback={<span className="text-xs text-stone-600 flex items-center justify-center h-full">🏳️</span>}
                />
              </div>

              {/* Data Labels Container */}
              <div className="flex flex-col min-w-0 leading-tight">
                <span className="text-base sm:text-lg font-semibold text-stone-300 tracking-tight group-hover:text-white transition-colors truncate">
                  {loc.name}
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-normal mt-0.5 tracking-wide">
                  {loc.ips} IPs
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button 
          onClick={() => router.push('/countries')} 
          className="
            group relative overflow-hidden
            bg-gradient-to-r from-orange-600 to-orange-500 
            px-8 h-[52px] sm:h-[56px] w-full sm:w-60 rounded-xl font-bold text-white 
            shadow-lg shadow-orange-900/20 
            transition-all duration-200 ease-out hover:scale-[1.01] active:scale-[0.99]
            cursor-pointer
          "
        >
          {/* Snappy 3D text track wrapper */}
          <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
            
            {/* Default State Text */}
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-sm sm:text-base">
              View all locations
            </span>
            
            {/* Hover State Text */}
            <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-sm sm:text-base text-white/95">
              View all locations
            </span>
            
          </div>
        </button>

      </div>
    </section>
  );
};

export default LocationsSection;
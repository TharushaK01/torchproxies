import React from 'react';
import Flag from 'react-world-flags'; 
const LocationsSection = () => {
  const locations = [
    { code: 'US', name: 'United States', ips: '4,429,824' },
    { code: 'GB', name: 'United Kingdom', ips: '1,449,139' },
    { code: 'DE', name: 'Germany', ips: '1,431,960' },
    { code: 'AU', name: 'Australia', ips: '452,720' },
    { code: 'CA', name: 'Canada', ips: '815,658' },
    { code: 'MX', name: 'Mexico', ips: '4,429,824' },
    { code: 'CN', name: 'China', ips: '4,429,824' },
    { code: 'FR', name: 'France', ips: '4,429,824' },
  ];

  return (
            <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden">

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
                    
                    <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform mb-12">
                        View all locations
                    </button>

                    {/* Locations Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
                    </div>

                </div>
            </section>
  );
};

export default LocationsSection;
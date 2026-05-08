import React from 'react';

const FeaturesGrid = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Panel 1: Connect Worldwide */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 overflow-hidden relative min-h-[400px]">
          <h3 className="text-2xl font-bold mb-4 max-w-[250px]">
            Connect worldwide, down to any city.
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-[350px]">
            Reach precise locations with city-level accuracy for faster, reliable connections.
          </p>
          {/* Globe Illustration Placeholder */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[300px]">
             <img src="/globe-dots.png" alt="Globe" className="opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Panel 2: Infrastructure Status */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">No drops, no delays. Steady connections every time</h3>
            <p className="text-gray-400 text-sm mb-6">Enjoy a stable connection with 99.6% uptime for smooth, reliable use.</p>
          </div>
          
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold">Proxy Infrastructure</span>
              <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">Operational</span>
            </div>
            {/* Uptime Bars */}
            <div className="flex gap-[3px] h-16 items-end mb-4">
              {[...Array(35)].map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-full ${i > 25 ? 'bg-orange-900/40' : 'bg-orange-500'} h-full`}
                  style={{ height: `${Math.random() * 40 + 60}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-tighter">
              <span>30 days ago</span>
              <span className="text-gray-300">99.99% uptime</span>
              <span>Today</span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center bg-[#111] px-4 py-3 rounded-xl border border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4 bg-orange-600 rounded-full" />
              <span className="text-sm">Status</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </div>

        {/* Panel 3: Proxy Range */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">A wide range of proxies to fit every need.</h3>
          <p className="text-gray-400 text-sm mb-8">Choose from residential and ISP proxies for reliable, tailored connections.</p>
          
          <div className="space-y-3">
            {['Datacenter Proxies', 'ISP Proxies', 'Residential Proxies'].map((type, i) => (
              <div key={i} className={`p-4 rounded-xl border flex justify-between items-center ${type === 'Residential Proxies' ? 'border-orange-500/50 bg-[#1a110a]' : 'border-gray-800 bg-[#111]'}`}>
                <div className="flex items-center gap-3">
                   <div className={`w-1.5 h-4 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-pink-500' : 'bg-orange-500'}`} />
                   <span className="text-sm font-medium">{type}</span>
                </div>
                <span className="text-xs text-green-500">{i === 1 ? '12 Products' : i === 2 ? '3 Products' : '1 Product'}</span>
              </div>
            ))}
          </div>
          
          {/* Sub-cards for Residential */}
          <div className="mt-4 pl-4 border-l border-gray-800 space-y-2">
            {['Standard Residential', 'Premium Residential'].map((sub, i) => (
              <div key={i} className="p-3 bg-[#111] rounded-xl border border-gray-800 flex justify-between items-center">
                <span className="text-xs font-semibold">{sub}</span>
                <span className="text-[10px] bg-orange-950 text-orange-400 px-2 py-1 rounded">From $4/GB</span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 4: Support UI */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Get expert help anytime anywhere.</h3>
          <p className="text-gray-400 text-sm mb-12">Reach us via Discord or email for quick, reliable support whenever you need it.</p>
          
          <div className="flex-grow flex flex-col justify-end">
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 relative">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-xl">🔥</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-orange-500 font-bold text-sm">Torch Proxies Support Team</span>
                    <span className="text-[10px] text-gray-500">12.29</span>
                  </div>
                  <p className="text-lg font-medium leading-tight">Welcome to Torch Proxies, how may we help you today?</p>
                </div>
              </div>
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-orange-600 rounded-r-full" />
            </div>
            
            <div className="mt-4 flex gap-2">
               <div className="bg-[#111] p-3 rounded-xl border border-gray-800 flex items-center justify-center">📎</div>
               <div className="flex-grow bg-[#111] border border-gray-800 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">I need help setting up my account |</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs">↑</div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
"use client";

import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

const FeaturesGrid = () => {
  const [barConfigs, setBarConfigs] = useState<{ targetHeight: number; isActive: boolean }[]>([]);
  const [typedText, setTypedText] = useState('');
  const fullMessage = "I need help setting up my account";

  useEffect(() => {
    // Generates 30 bars to match design layout
    const configs = [...Array(30)].map((_, i) => ({
      targetHeight: i === 12 ? 40 : i === 22 ? 55 : Math.random() * 30 + 70,
      isActive: i !== 12 && i !== 22, 
    }));
    setBarConfigs(configs);
  }, []);

  // Typewriter Simulator Loop
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeLoop = () => {
      if (!isDeleting) {
        setTypedText(fullMessage.substring(0, index + 1));
        index++;

        if (index === fullMessage.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeLoop();
          }, 3500);
          return;
        }
      } else {
        setTypedText(fullMessage.substring(0, index - 1));
        index--;

        if (index === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeLoop, 600);
          return;
        }
      }

      timeoutId = setTimeout(typeLoop, isDeleting ? 40 : 85);
    };

    typeLoop();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-6 font-['Urbanist'] pb-16 sm:pb-28 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-10 sm:mb-16">
        <span className="text-orange-500 font-normal text-sm sm:text-base mb-3 block tracking-widest">
          Features
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 leading-tight">
          Why Choose Torch Proxies?
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Panel 1: Connect Worldwide */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-10 overflow-hidden relative min-h-[420px] sm:min-h-[500px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium mb-3 sm:mb-4 max-w-[300px] leading-tight text-white">
              Connect worldwide, down to any city.
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-[380px] relative z-10">
              Reach precise locations with city-level accuracy for faster, reliable connections.
            </p>
          </div>

          {/* Globe Illustration */}
          <div className="relative w-full h-[220px] sm:h-[280px] pointer-events-none select-none mt-4">
            <Image
              src="/images/globe-dots.png"
              alt="Globe Map Tracking Lines"
              fill
              className="object-contain opacity-80 object-bottom"
            />
          </div>
        </div>

        {/* Panel 2: Infrastructure Status */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              No drops, no delays. Steady connections every time
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Enjoy a stable connection with 99.6% uptime for smooth, reliable use.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="relative z-10">
              <div 
                className="absolute top-0 left-2 right-2 bottom-[-10px] bg-[#15171A] border border-[#202329] rounded-[20px] pointer-events-none z-0" 
                style={{ boxShadow: '0 8px 18px rgba(0,0,0,.6)' }}
                aria-hidden="true"
              />
              
              <div 
                className="relative z-10 bg-[#0E0E11] border border-[#2A2E35] rounded-[20px] p-4 sm:p-5"
                style={{ boxShadow: '0 12px 28px rgba(0,0,0,.45)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="m-0 font-normal text-lg sm:text-2xl text-[#F2F4F6]">
                    Proxy Infrastructure
                  </h4>
                  <span className="text-[#28E090] font-normal text-sm sm:text-xl">
                    Operational
                  </span>
                </div>

                {/* Bars Container */}
                <div 
                  className="flex items-end gap-1 sm:gap-2 h-[100px] sm:h-[130px] pt-4 px-1 pb-3 sm:pb-4"
                  aria-label="30 days uptime"
                >
                  {barConfigs.map((config, i) => {
                    const totalBars = barConfigs.length;
                    const isLastTwoBars = i >= totalBars - 2;

                    return (
                      <m.span
                        key={i}
                        className={`flex-1 block rounded-md ${
                          i >= 20 ? 'max-[480px]:hidden' : i >= 24 ? 'max-[640px]:hidden' : ''
                        }`}
                        initial={{ 
                          height: '100%', 
                          opacity: 0,
                          background: 'rgba(86, 34, 18, 0.2)'
                        }}
                        whileInView={{ 
                          opacity: isLastTwoBars ? 0.35 : (config.isActive ? 1 : 0.75),
                          background: config.isActive && !isLastTwoBars
                            ? 'linear-gradient(to bottom, #FF9C3A, #FF6A1A, #D64900)' 
                            : 'rgb(86, 34, 18)',
                          boxShadow: config.isActive && !isLastTwoBars
                            ? '0 6px 14px rgba(255,106,26,.45)' 
                            : 'none'
                        }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                          duration: 0.25,
                          delay: i * 0.02,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}
                  {barConfigs.length === 0 && [...Array(30)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`flex-1 block bg-[#562212] opacity-75 h-full rounded-md ${
                        i >= 20 ? 'max-[480px]:hidden' : i >= 24 ? 'max-[640px]:hidden' : ''
                      }`} 
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-normal text-[#F2F4F6]">
                  <span className="whitespace-nowrap opacity-80">30 days ago</span>
                  <span 
                    className="flex-1 h-[1px] mx-1 sm:mx-2 opacity-30"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, #8e939a 0 10px, transparent 10px 18px)' }}
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap opacity-90 font-medium">99.99% uptime</span>
                  <span 
                    className="flex-1 h-[1px] mx-1 sm:mx-2 opacity-30"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, #8e939a 0 10px, transparent 10px 18px)' }}
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap opacity-80">Today</span>
                </div>
              </div>
            </div>

            {/* Status Row */}
            <div 
              className="bg-[#0E0E11] border border-[#2A2E35] rounded-2xl p-3 sm:p-4 flex items-center justify-between"
              style={{ boxShadow: '0 12px 28px rgba(0,0,0,.45)' }}
            >
              <div className="flex items-center gap-3">
                <span 
                  className="w-1.5 h-6 rounded-md bg-[#FF6A1A]" 
                  style={{ boxShadow: '0 0 14px rgba(255,106,26,.5)' }}
                  aria-hidden="true"
                />
                <span className="text-base sm:text-xl font-normal text-[#F2F4F6]">Status</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <span 
                  className="w-3 h-3 rounded-full" 
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, #3CFFBF 0%, #28E090 60%, #0aa86b 100%)',
                    boxShadow: '0 0 8px rgba(40,224,144,.7)',
                    animation: 'pulseGlow 1.5s infinite ease-in-out'
                  }}
                />
                <span className="text-base sm:text-xl font-normal text-[#F2F4F6]">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3: Proxy Range */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[500px] sm:min-h-[520px] group">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-white">
              A wide range of proxies to fit every need.
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Choose from residential and ISP proxies for reliable, tailored connections.
            </p>
          </div>

          <div className="relative w-full h-[360px] mx-auto mt-2 flex items-start justify-center">
            {/* Datacenter Proxies Layer */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[92%] sm:w-[480px] bg-[#0E0E11] border border-[#2a2e35] rounded-2xl transition-all duration-500 ease-out opacity-100 z-[1] top-[28px] group-hover:top-[0px]"
              style={{ boxShadow: '0 12px 24px rgba(0,0,0,.45)' }}
            >
              <div className="relative flex items-center justify-between p-3.5 sm:p-4 pl-6 sm:pl-7">
                <span className="absolute left-3 sm:left-4 top-3.5 bottom-3.5 w-1.5 rounded-full bg-[#5B45FF]" style={{ boxShadow: '0 0 14px rgba(91,69,255,.45)' }} />
                <h4 className="text-base sm:text-xl font-normal text-[#E6E9ED] m-0">Datacenter Proxies</h4>
                <span className="text-[#2BE3A5] text-xs sm:text-sm">1 Product</span>
              </div>
            </div>

            {/* ISP Proxies Layer */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[95%] sm:w-[495px] bg-[#0E0E11] border border-[#2a2e35] rounded-2xl transition-all duration-500 ease-out opacity-100 z-[2] top-[70px] group-hover:top-[56px]"
              style={{ boxShadow: '0 16px 32px rgba(0,0,0,.45)' }}
            >
              <div className="relative flex items-center justify-between p-3.5 sm:p-4 pl-6 sm:pl-7">
                <span className="absolute left-3 sm:left-4 top-3.5 bottom-3.5 w-1.5 rounded-full bg-[#FF30B3]" style={{ boxShadow: '0 0 14px rgba(255,48,179,.45)' }} />
                <h4 className="text-base sm:text-xl font-normal text-[#E6E9ED] m-0">ISP Proxies</h4>
                <span className="text-[#2BE3A5] text-xs sm:text-sm">12 Products</span>
              </div>
            </div>

            {/* Residential Proxies Layer */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-full sm:w-[530px] bg-[#0E0E11] border border-[#2a2e35] rounded-2xl sm:rounded-[24px] p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3.5 z-[3] top-[112px]"
              style={{ boxShadow: '0 24px 48px rgba(0,0,0,.6)' }}
            >
              <div className="relative flex items-center justify-between px-2 py-1 pl-4 sm:pl-5">
                <span className="absolute left-1 top-1 bottom-1 w-1.5 rounded-full bg-[#FF6A1A]" style={{ boxShadow: '0 0 14px rgba(255,106,26,.45)' }} />
                <h4 className="text-lg sm:text-xl font-normal text-[#E6E9ED] m-0">Residential Proxies</h4>
                <span className="text-[#2BE3A5] text-xs sm:text-base">3 Products</span>
              </div>

              {[
                { name: 'Standard Residential', sub: 'Everyday online tasks.', price: 'From $4/GB' },
                { name: 'Premium Residential', sub: 'Demanding users.', price: 'From $4.5/GB' },
                { name: 'Plan X Residential', sub: 'High performance.', price: 'From $5/GB' }
              ].map((product, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 p-2.5 sm:p-3 border border-[#2a2e35] rounded-xl bg-[#0E0E11]">
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-base font-normal text-[#E6E9ED] truncate">{product.name}</span>
                    <span className="text-[10px] sm:text-xs text-[#AFB6C0] truncate">{product.sub}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#FF8C4A] px-2.5 py-1.5 rounded-lg border border-[#3a2b23] bg-gradient-to-b from-[#2a1d17] to-[#1f1713] shrink-0 whitespace-nowrap">
                    {product.price} <span className="opacity-50 text-[9px] sm:text-[10px]">/ mo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 4: Support UI */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] sm:min-h-[520px]">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">
              Get expert help anytime anywhere.
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-12">
              Reach us on Discord or by email for quick, reliable support whenever you need it.
            </p>
          </div>

          <div className="flex-grow flex flex-col justify-end gap-4 sm:gap-6 relative">
            <div className="relative pb-2 sm:pb-4">
              {/* Stack Backdrop Frame */}
              <div 
                className="absolute left-3 right-3 bottom-0 h-[70px] sm:h-[86px] bg-[#0E0E11] border border-[#1E2025] rounded-2xl z-0 pointer-events-none"
              />

              {/* Support Card Frame */}
              <div 
                className="relative bg-[#0E0E11] border border-[#27272A] rounded-2xl sm:rounded-[28px] p-4 sm:p-6 z-10"
                style={{ boxShadow: '0 16px 40px rgba(0,0,0,.45)' }}
              >
                <span className="absolute left-3 sm:left-6 top-4 bottom-4 w-1 sm:w-1.5 bg-[#FF6A1A] rounded-full" style={{ boxShadow: '0 0 16px rgba(255,106,26,.5)' }} />

                <div className="flex items-center justify-between pl-3 sm:pl-4">
                  <div className="flex items-center gap-2 sm:gap-3.5">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0F1114] border border-[#23262C] flex items-center justify-center shrink-0">
                      <svg className="animate-[flameSway_2.2s_ease-in-out_infinite] origin-[50%_80%]" viewBox="0 0 64 64" width="18" height="18">
                        <defs>
                          <linearGradient id="gradOuter" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF8A1F"/><stop offset="55%" stopColor="#FF6A1A"/><stop offset="100%" stopColor="#F13507"/>
                          </linearGradient>
                          <linearGradient id="gradInner" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFD24A"/><stop offset="70%" stopColor="#FF9E1A"/><stop offset="100%" stopColor="#FF7A1A"/>
                          </linearGradient>
                        </defs>
                        <path className="animate-[flameFlicker_1.2s_ease-in-out_infinite]" d="M34 4c3 8-3 14-8 22-3.8 6-5 9.6-5 14.2C21 49.8 27.2 56 36 56s16-6.2 16-15.8c0-9.5-4.7-17.1-11.4-24.1 1 6.8-3.6 11.2-7 17-1.9 3.2-2.6 5.2-2.6 7.2 0 1.6.3 3.1 1.1 4.7-3.8-2-6.1-5.2-6.1-9.6 0-4.4 2-7.8 4.6-12 3-5 4.7-9 3.4-13.4z" fill="url(#gradOuter)"/>
                        <path className="animate-[flameFlicker_0.95s_ease-in-out_infinite_100ms]" d="M35 23c-4 5-8 9-8 14.3 0 5.4 4.2 9.7 9.8 9.7 5.9 0 10.2-4.6 10.2-10.4 0-4.8-2.7-8.8-6.5-12.4 .4 3.4-1.8 5.6-3.8 8.7-1 1.6-1.4 2.7-1.4 3.8 0 .8.2 1.6.6 2.5-2-.9-3.2-2.7-3.2-4.9 0-2.2 1-3.9 2.2-5.9 1.5-2.4 2.3-4.4 1.9-6.4z" fill="url(#gradInner)"/>
                      </svg>
                    </span>
                    <span className="text-[#FF6A1A] font-bold text-sm sm:text-xl truncate">Torch Support</span>
                  </div>
                  <span className="text-[#A2A9B3] text-xs sm:text-sm">12:29</span>
                </div>
                <p className="m-0 mt-3 pl-3 sm:pl-4 text-sm sm:text-xl font-medium leading-snug text-[#C8CDD4]">
                  Welcome to Torch Proxies, how may we help you today?
                </p>
              </div>
            </div>

            {/* Input Element Box */}
            <div className="relative h-14 sm:h-16 lg:h-20 bg-[#14161A] border border-[#24272D] rounded-2xl flex items-center justify-between px-3 sm:px-4">
              <span className="w-1 h-6 sm:h-8 rounded-lg mr-2 bg-[#FF6A1A] shrink-0" />
              
              <div className="flex-1 flex items-center min-w-0 text-[#E9EDF0] text-xs sm:text-sm lg:text-base font-normal tracking-wide whitespace-nowrap overflow-hidden">
                <span className="truncate">{typedText}</span>
                <span className="text-[#FF6A1A] font-light animate-[pulse_1s_steps(2,start)_infinite]">|</span>
              </div>

              <div className="flex items-center gap-2 pl-2">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1A1C1F] border border-[#2A2E35] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14m0-14l6 6m-6-6l-6 6" stroke="#FF6A1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Animations */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 4px rgba(40,224,144,.3); }
          50% { box-shadow: 0 0 16px rgba(40,224,144,.7), 0 0 8px rgba(40,224,144,.5); }
        }
        @keyframes flameSway {
          0% { transform: rotate(-1.1deg) scale(1); }
          50% { transform: rotate(1.2deg) scale(1.025); }
          100% { transform: rotate(-1.1deg) scale(1); }
        }
        @keyframes flameFlicker {
          0% { filter: brightness(1) drop-shadow(0 0 4px rgba(255,120,32,0.25)); }
          45% { filter: brightness(1.12) drop-shadow(0 0 8px rgba(255,120,32,0.45)); }
          75% { filter: brightness(0.95) drop-shadow(0 0 3px rgba(255,120,32,0.2)); }
          100% { filter: brightness(1); }
        }
      `}</style>
    </section>
  );
};

export default FeaturesGrid;
"use client";

import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';

const FeaturesGrid = () => {
  const [barConfigs, setBarConfigs] = useState<{ targetHeight: number; isActive: boolean }[]>([]);
  const [typedText, setTypedText] = useState('');
  const fullMessage = "I need help setting up my account";

  useEffect(() => {
    // Generates 30 bars to match the dashboard video design layout perfectly
    const configs = [...Array(30)].map((_, i) => ({
      targetHeight: i === 12 ? 40 : i === 22 ? 55 : Math.random() * 30 + 70,
      isActive: i !== 12 && i !== 22, 
    }));
    setBarConfigs(configs);
  }, []);

  // Panel 4: Typewriter Simulator Loop Effect
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
          }, 3500); // Pause at full string before deleting
          return;
        }
      } else {
        setTypedText(fullMessage.substring(0, index - 1));
        index--;

        if (index === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeLoop, 600); // Quick pause before restarting loop
          return;
        }
      }

      timeoutId = setTimeout(typeLoop, isDeleting ? 40 : 85);
    };

    typeLoop();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Panel 1: Connect Worldwide */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-10 overflow-hidden relative min-h-[500px]">
          <h3 className="text-3xl font-bold mb-4 max-w-[300px] leading-tight text-white">
            Connect worldwide, down to any city.
          </h3>
          <p className="text-gray-400 text-base mb-8 max-w-[380px] relative z-10">
            Reach precise locations with city-level accuracy for faster, reliable connections.
          </p>

          {/* Globe Illustration */}
          <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-[600px] pointer-events-none select-none">
            <img
              src="/images/globe-dots.png"
              alt="Globe Map Tracking Lines"
              className="w-full h-auto opacity-80 object-contain"
            />
          </div>
        </div>

        {/* Panel 2: Infrastructure Status */}
<div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between">
  <div>
    <h3 className="text-2xl font-bold mb-2">No drops, no delays. Steady connections every time</h3>
    <p className="text-gray-400 text-sm mb-6">Enjoy a stable connection with 99.6% uptime for smooth, reliable use.</p>
  </div>

  <div className="flex flex-col gap-[12px] w-full">
    <div className="relative mb-[10px] z-10">
      <div 
        className="absolute top-0 left-[10px] right-[10px] bottom-[-10px] bg-[#15171A] border border-[#202329] rounded-[20px] pointer-events-none z-0" 
        style={{ boxShadow: '0 8px 18px rgba(0,0,0,.6)' }}
        aria-hidden="true"
      />
      
      <div 
        className="relative z-10 bg-[#0E0E11] border border-[#2A2E35] rounded-[20px] p-[18px_18px_14px]"
        style={{ boxShadow: '0 12px 28px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.02)' }}
      >
        <div className="flex items-center justify-between mb-[10px]">
          <h2 className="m-0 font-normal text-2xl tracking-[0.2px] text-[#F2F4F6] max-[560px]:text-[22px]">
            Proxy Infrastructure
          </h2>
          <span className="text-[#28E090] font-normal text-xl max-[560px]:text-[18px]">
            Operational
          </span>
        </div>

        {/* Height Container handles vertical line styling */}
        <div 
          className="flex items-end gap-[6px] md:gap-[8px] h-[130px] max-[560px]:h-[100px] pt-4 px-1 pb-[18px] max-[560px]:pb-[14px]"
          aria-label="30 days uptime"
        >
          {barConfigs.map((config, i) => {
            const totalBars = barConfigs.length;
            // Identifies exactly the last two bars in the array (representing "Today")
            const isLastTwoBars = i >= totalBars - 2;

            return (
              <m.span
                key={i}
                className={`flex-1 block rounded-[6px] ${
                  i >= 24 ? 'max-[560px]:hidden' : ''
                }`}
                // 1. Static structural base state
                initial={{ 
                  height: '100%', 
                  opacity: 0,
                  background: 'rgba(86, 34, 18, 0.2)',
                  boxShadow: '0 0 0px rgba(0,0,0,0)'
                }}
                // 2. Swapped "animate" to "whileInView" to trigger only when scrolled into view
                whileInView={{ 
                  opacity: isLastTwoBars ? 0.35 : (config.isActive ? 1 : 0.75),
                  background: config.isActive && !isLastTwoBars
                    ? 'linear-gradient(to bottom, #FF9C3A, #FF6A1A, #D64900)' 
                    : 'rgb(86, 34, 18)', // The last two bars get the dark background color
                  boxShadow: config.isActive && !isLastTwoBars
                    ? '0 6px 14px rgba(255,106,26,.45), inset 0 -3px 6px rgba(0,0,0,.3)' 
                    : 'none'
                }}
                // 3. Prevent the animation from re-triggering constantly when scrolling up and down
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.25,
                  delay: i * 0.03, // Cascades smoothly from left to right
                  ease: "easeOut"
                }}
              />
            );
          })}
          {barConfigs.length === 0 && [...Array(30)].map((_, i) => (
            <span 
              key={i} 
              className={`flex-1 block bg-[#562212] opacity-75 h-full rounded-[6px] ${i >= 24 ? 'max-[560px]:hidden' : ''}`} 
            />
          ))}
        </div>

        <div className="flex items-center gap-2.5 max-[560px]:gap-2 text-base max-[560px]:text-sm font-normal text-[#F2F4F6]">
          <span className="whitespace-nowrap opacity-80">30 days ago</span>
          <span 
            className="flex-1 h-[1px] mx-2.5 opacity-30"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, #8e939a 0 10px, transparent 10px 18px)' }}
            aria-hidden="true"
          />
          <span className="whitespace-nowrap opacity-90 font-medium">99.99% uptime</span>
          <span 
            className="flex-1 h-[1px] mx-2.5 opacity-30"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, #8e939a 0 10px, transparent 10px 18px)' }}
            aria-hidden="true"
          />
          <span className="whitespace-nowrap opacity-80">Today</span>
        </div>
      </div>
    </div>

    {/* Status Row */}
    <div 
      className="bg-[#0E0E11] border border-[#2A2E35] rounded-[16px] p-[12px_14px] flex items-center justify-between"
      style={{ boxShadow: '0 12px 28px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.02)' }}
    >
      <div className="flex items-center gap-3">
        <span 
          className="w-[6px] h-[26px] rounded-[8px] bg-[#FF6A1A]" 
          style={{ boxShadow: '0 0 14px rgba(255,106,26,.5)' }}
          aria-hidden="true"
        />
        <span className="text-xl max-[560px]:text-[18px] font-normal text-[#F2F4F6]">Status</span>
      </div>
      
      <div className="flex items-center gap-2.5">
        <span 
          className="w-3.5 h-3.5 rounded-full" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, #3CFFBF 0%, #28E090 60%, #0aa86b 100%)',
            boxShadow: '0 0 8px rgba(40,224,144,.7)',
            animation: 'pulseGlow 1.5s infinite ease-in-out'
          }}
        />
        <span className="text-xl max-[560px]:text-[18px] font-normal text-[#F2F4F6]">Online</span>
      </div>
    </div>
  </div>
</div>

        {/* Panel 3: Proxy Range - Integrated Stacked Cascade Layout */}
        <div 
          className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[520px] group"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">A wide range of proxies to fit every need.</h3>
            <p className="text-gray-400 text-sm mb-4">Choose from residential and ISP proxies for reliable, tailored connections.</p>
          </div>

          <div className="relative w-full h-[360px] mx-auto mt-4 flex items-start justify-center">
            {/* 1. Datacenter Proxies (Bottom Layer) */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[90%] md:w-[480px] bg-[#0E0E11] border border-[#2a2e35] rounded-2xl transition-all duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 z-[1] top-[28px] group-hover:top-[0px]"
              style={{ boxShadow: '0 12px 24px rgba(0,0,0,.45)' }}
            >
              <div className="relative flex items-center justify-between p-4 pl-7">
                <span className="absolute left-4 top-3.5 bottom-3.5 w-[7px] rounded-full bg-[#5B45FF]" style={{ boxShadow: '0 0 14px rgba(91,69,255,.45)' }} />
                <h4 className="text-[20px] font-normal text-[#E6E9ED] m-0">Datacenter Proxies</h4>
                <span className="text-[#2BE3A5] text-sm">1 Product</span>
              </div>
            </div>

            {/* 2. ISP Proxies (Middle Layer) */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[92%] md:w-[495px] bg-[#0E0E11] border border-[#2a2e35] rounded-2xl transition-all duration-[500ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 z-[2] top-[70px] group-hover:top-[56px]"
              style={{ boxShadow: '0 16px 32px rgba(0,0,0,.45)' }}
            >
              <div className="relative flex items-center justify-between p-4 pl-7">
                <span className="absolute left-4 top-3.5 bottom-3.5 w-[7px] rounded-full bg-[#FF30B3]" style={{ boxShadow: '0 0 14px rgba(255,48,179,.45)' }} />
                <h4 className="text-[20px] font-normal text-[#E6E9ED] m-0">ISP Proxies</h4>
                <span className="text-[#2BE3A5] text-sm">12 Products</span>
              </div>
            </div>

            {/* 3. Residential Proxies (Front Layer) */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-full md:w-[530px] bg-[#0E0E11] border border-[#2a2e35] rounded-[24px] p-4 flex flex-col gap-3.5 z-[3] top-[112px]"
              style={{
                boxShadow: '0 24px 48px rgba(0,0,0,.6), inset 0 0 0 1px rgba(255,255,255,.02)',
              }}
            >
              <div className="relative flex items-center justify-between px-2 py-1 pl-5">
                <span className="absolute left-1 top-1 bottom-1 w-[7px] rounded-full bg-[#FF6A1A]" style={{ boxShadow: '0 0 14px rgba(255,106,26,.45)' }} />
                <h4 className="text-[22px] font-normal text-[#E6E9ED] m-0">Residential Proxies</h4>
                <span className="text-[#2BE3A5] text-base">3 Products</span>
              </div>

              {[
                { name: 'Standard Residential', sub: 'Perfect for everyday online tasks.', price: 'From $4/GB', img: 'Frame-1000004310.svg' },
                { name: 'Premium Residential', sub: 'For demanding users and businesses.', price: 'From $4.5/GB', img: 'Frame-1000004310-1.svg' },
                { name: 'Plan X Residential', sub: 'High performance with flexible limits.', price: 'From $5/GB', img: 'Frame-1000004310-2.svg' }
              ].map((product, idx) => (
                <div key={idx} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 border border-[#2a2e35] rounded-xl bg-[#0E0E11] hover:border-gray-700 transition-colors duration-200">
                  <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl overflow-hidden bg-[#16171b]">
                    <img 
                      src={`https://v4.trytorchlabs.com/wp-content/uploads/2025/09/${product.img}`} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-normal text-[#E6E9ED]">{product.name}</span>
                    <span className="text-sm text-[#AFB6C0] mt-0.5">{product.sub}</span>
                  </div>
                  <div className="text-xs text-[#FF8C4A] px-3 py-2 rounded-xl border border-[#3a2b23] bg-gradient-to-b from-[#2a1d17] to-[#1f1713] shadow-md whitespace-nowrap">
                    {product.price} <span className="opacity-50 text-[10px]">/ mo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 4: Support UI - High Fidelity Modern Remake */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between min-h-[520px]">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Get expert help anytime anywhere.</h3>
            <p className="text-gray-400 text-sm mb-[48px]">Reach us via Discord or email for quick, reliable support whenever you need it.</p>
          </div>

          <div className="flex-grow flex flex-col justify-end gap-6 relative">
            {/* Layered Support Bubble Frame Container */}
            <div className="relative pb-4">
              {/* Stack Illusion Lower Depth Shadow Offset Card Backdrop */}
              <div 
                className="absolute left-[18px] right-[18px] bottom-0 h-[86px] bg-[#0E0E11] border border-[#1E2025] rounded-[20px] z-0 pointer-events-none"
                style={{ filter: 'drop-shadow(0 14px 24px rgba(0,0,0,.55))' }}
              />

              {/* Core Conversation Shield Content Component */}
              <div 
                className="relative bg-[#0E0E11] border border-[#27272A] rounded-[28px] p-[26px] pb-[34px] pl-[34px] pr-[34px] z-10"
                style={{ boxShadow: '0 16px 40px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.02)' }}
              >
                {/* Left Glowing Accent Neon Stripe */}
                <span className="absolute left-[34px] top-[22px] bottom-[22px] width-[8px] w-2 bg-[#FF6A1A] rounded-full style-glow" style={{ boxShadow: '0 0 16px rgba(255,106,26,.5)' }} />

                <div className="flex items-center justify-between pl-6">
                  <div className="flex items-center gap-3.5">
                    {/* Animated Support Icon Frame Base */}
                    <span className="w-10 h-10 rounded-full bg-[#0F1114] border border-[#23262C] flex items-center justify-center overflow-visible">
                      <svg className="animate-[flameSway_2.2s_ease-in-out_infinite] origin-[50%_80%]" viewBox="0 0 64 64" width="22" height="22" style={{ filter: 'drop-shadow(0 0 6px rgba(255,106,26,.65)) drop-shadow(0 0 10px rgba(255,106,26,.25))' }}>
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
                    <span className="text-[#FF6A1A] font-bold text-xl md:text-2xl tracking-tight">Torch Proxies Support Team</span>
                  </div>
                  <span className="text-[#A2A9B3] text-sm md:text-base tracking-[.3px]">12.29</span>
                </div>
                <p className="m-0 mt-4 pl-6 text-xl md:text-2xl font-semibold leading-[1.18] text-[#C8CDD4] tracking-tight">Welcome to Torch Proxies, how may we help you today?</p>
              </div>
            </div>

            {/* Bottom Keyboard Entry Bar Segment */}
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-center">
              {/* Media Attachment Clip Icon */}
              <button className="hidden sm:flex items-center justify-center w-[72px] md:w-[110px] xl:w-[148px] h-16 md:h-20 xl:h-[96px] bg-[#14161A] border border-[#24272D] rounded-[26px]" style={{ boxShadow: '0 12px 28px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.02)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M8.5 12.5l5.4-5.4a3.2 3.2 0 114.5 4.5l-7.3 7.3A5.2 5.2 0 014.8 8.6l6.6-6.6" stroke="#A5ACB8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Typewriter Input Element Box */}
              <div className="relative h-16 md:h-20 xl:h-[96px] bg-[#14161A] border border-[#24272D] rounded-[26px] flex items-center justify-between px-5" style={{ boxShadow: '0 12px 28px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.02)' }}>
                <span className="w-1.5 h-[34px] md:h-[42px] xl:h-[46px] rounded-lg mr-3.5 bg-[#FF6A1A]" style={{ boxShadow: '0 0 18px rgba(255,106,26,.6)' }} />
                
                <div className="flex-1 flex items-center min-w-0 text-[#E9EDF0] text-sm md:text-lg xl:text-xl font-normal tracking-[0.2px] whitespace-nowrap overflow-hidden">
                  <span className="truncate">{typedText}</span>
                  <span className="text-[#FF6A1A] font-light animate-[pulse_1s_steps(2,start)_infinite]">|</span>
                </div>

                <div className="flex items-center gap-3.5 pl-3.5">
                  <span className="text-[#FF6A1A] text-lg md:text-2xl font-bold select-none">|</span>
                  <button className="w-10 h-10 xl:w-14 xl:h-14 rounded-xl bg-[#1A1C1F] border border-[#2A2E35] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14m0-14l6 6m-6-6l-6 6" stroke="#FF6A1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Physics Keyframe Injections */}
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
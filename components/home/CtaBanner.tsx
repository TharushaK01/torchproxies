"use client";

import React from 'react';

const CtaBanner = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-[#0a0a0a] border border-gray-800 rounded-[40px] px-8 py-8 text-center">
          
          {/* Subtle Radial Glows */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-[42px] font-bold tracking-tight mb-8 leading-[1.1]">
              Start your efficient proxy and scraping journey
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              Effortlessly test, deploy and expand your web data projects with user-friendly, high quality and cost-effective infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#ff4500] hover:bg-[#e63e00] md:text-[16px] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20">
                Get Started Now
              </button>
              <button className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-10 py-4 rounded-xl font-bold transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
"use client";

import React from 'react';

const CtaBanner = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[40px] px-8 py-8 text-center">

          {/* Subtle Radial Glows */}
          <div
            className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)',

            }}
          >

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[48px] md:text-[48px] font-medium tracking-tight mb-8 leading-[1.1]">
                Start your efficient proxy and scraping journey
              </h2>

              <p className="text-gray-400 text-[18px] font-regular md:text-xl leading-relaxed mb-12">
                Effortlessly test, deploy and expand your web data projects with user-friendly, high quality and cost-effective infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#ffffff] hover:bg-[#e63e00] md:text-[16px] text-black px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
"use client";

import { useRouter } from 'next/navigation';

const CtaBanner = () => {
  const router = useRouter();

  return (
    <section className="bg-[#0a0a0a] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 font-['Urbanist'] pb-16 sm:pb-28 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-[#0a0a0a] rounded-3xl sm:rounded-[40px]">
        {/* Subtle Radial Glow Card */}
        <div
          className="relative rounded-3xl p-6 sm:p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #ff3c006c 0%, #0a0a0a 30%, #0a0a0a 80%, #ff3c006c 100%)',
          }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 sm:mb-8 leading-tight sm:leading-[1.1]">
              Start your efficient proxy and scraping journey
            </h2>

            <p className="text-gray-400 text-sm sm:text-lg md:text-xl font-normal leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto">
              Effortlessly test, deploy and expand your web data projects with user-friendly, high quality and cost-effective infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => router.push('/locations')}
                className="
                  group relative overflow-hidden cursor-pointer
                  w-full sm:w-[240px] h-[52px] sm:h-[56px] px-8 sm:px-10 rounded-xl font-bold 
                  bg-white text-black text-base
                  shadow-lg shadow-orange-900/20 
                  hover:scale-[1.01] active:scale-[0.99] 
                  transition-all duration-200
                "
              >
                {/* Snappy 3D text track wrapper */}
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(-90deg)]">
                  {/* Default State Text */}
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)] text-black">
                    Get Started Now
                  </span>

                  {/* Hover State Text */}
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(12px)] text-black">
                    Get Started Now
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
'use client';

import Image from 'next/image';

export default function TopAnnouncementBar() {
  return (
    <>
      {/* Inline Keyframes for 3D Spin Animation */}
      <style jsx>{`
        @keyframes coinSpin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        .animate-coin-spin-3d {
          animation: coinSpin 5s linear infinite;
        }
      `}</style>

      <div
        className="w-full h-[64px] flex items-center justify-center px-4 relative z-10 text-white font-['Urbanist'] shadow-md"
        style={{
          background: `linear-gradient(90deg, 
            #BF3800 0%, 
            #E55905 9%, 
            #FF8C33 18%, 
            #F26108 27%, 
            #B23300 36%, 
            #FF7314 45%, 
            #FF9947 54%, 
            #F26108 63%, 
            #B23300 72%, 
            #FF7A1A 81%, 
            #FF8C33 90%, 
            #BF3800 100%
          )`,
        }}
      >
        <div className="flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg font-medium tracking-wide text-center">
          <span>
            Starter Commissions Just Went <strong className="font-bold">From 15% &rarr; 30%</strong>. Same Referrals, Double The Pay
          </span>

          {/* 3D Spinning Coin Container */}
          <div className="w-[36px] h-[36px] flex-shrink-0" style={{ perspective: '800px' }}>
            <div 
              className="w-full h-full relative animate-coin-spin-3d"
              style={{
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
              }}
            >
              {/* Front Face */}
              <div 
                className="absolute inset-0 w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/coin-7.png"
                  alt="Coin Front"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Back Face (Mirrored 180deg) */}
              <div 
                className="absolute inset-0 w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/coin-7.png"
                  alt="Coin Back"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
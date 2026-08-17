import React from 'react';
import Image from 'next/image';

export default function TopAnnouncementBar() {
  return (
    <div
      className="w-full h-[64px] flex items-center justify-center px-4 relative z-50 text-white font-['Urbanist'] shadow-md"
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

        {/* 3D Spinning Custom Coin Image Container */}
        <div className="relative w-8 h-8 flex-shrink-0 [perspective:1000px]">
          <div className="w-full h-full animate-spin-3d">
            <Image
              src="/images/coin-7.png"
              alt="Gold Coin"
              width={32}
              height={32}
              className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
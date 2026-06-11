import Image from "next/image";

const MARQUEE_ITEMS = [
  "99.9% uptime guaranteed",
  "Blazing fast proxy speeds",
  "Global geo targeting support",
  "Secure & anonymous connections",
  "Unlimited sessions & rotations",
  "Built for scraping & automation"
];

const Marquee: React.FC = () => (
  <div className="w-full overflow-hidden bg-[#FE4A01] py-3.5 whitespace-nowrap select-none flex">
    
{/* Infinite track containing multiple data blocks to prevent viewport gaps */}
    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around text-xs font-bold tracking-wider text-white uppercase font-archivo">
      
      {/* Block 1 (Original) */}
      <div className="flex shrink-0 items-center space-x-12 pr-12">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`orig-${index}`} className="flex items-center gap-3.5">
            {/* Perfectly sized, smooth CSS custom bullet circle */}
            <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </span>
        ))}
      </div>

      {/* Block 2 (Duplicate) */}
      <div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`dup1-${index}`}>• {item}</span>
        ))}
      </div>

      {/* Block 3 (Extra Duplicate - Safely fills extra wide/4K viewports) */}
      <div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`dup2-${index}`}>• {item}</span>
        ))}
      </div>
      
    </div>
  </div>
);

export default function YourSectionComponent() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-40 -mt-[280px] px-4 sm:px-6 overflow-hidden space-y-6 font-['Urbanist']">
      
      {/* Background Layer */}
      <div className="absolute inset-x-0 bottom-0 -top-[45px] h-[calc(90%+0px)] z-0 pointer-events-none select-none">
        <Image
          src="/images/Background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-100%"
        />
      </div>

      {/* Dashboard Image */}
      <div className="relative z-10 max-w-7xl mx-auto rounded-2xl border border-gray-900/50 overflow-hidden flex items-center justify-center mt-[60px]">
        <img
          src="/images/dashboard_home.png"
          alt="Perfect for Everyday Scraping & Automation"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Marquee Wrapper */}
      <div className="relative z-10 -mt-11 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Marquee />
      </div>

    </section>
  );
}
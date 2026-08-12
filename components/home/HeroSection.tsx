// // "use client";

// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import { Urbanist } from "next/font/google";
// // import { Check } from "lucide-react";
// // import ShapeGrid from "@/components/ShapeGrid";



// // const MARQUEE_ITEMS = [
// //   "99.9% uptime guaranteed",
// //   "Blazing fast proxy speeds",
// //   "Global geo targeting support",
// //   "Secure & anonymous connections",
// //   "Unlimited sessions & rotations",
// //   "Built for scraping & automation"
// // ];


// // const Marquee: React.FC = () => (

// //   <div className="w-full overflow-hidden bg-[#FE4A01] py-3.5 whitespace-nowrap select-none flex font-['Urbanist']">

// //     {/* Infinite track containing multiple data blocks to prevent viewport gaps */}
// //     <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around text-[14px] font-medium tracking-wider text-white font-['Urbanist']">

// //       {/* Block 1 (Original) */}
// //       <div className="flex shrink-0 items-center space-x-12 pr-12">
// //         {MARQUEE_ITEMS.map((item, index) => (
// //           <span key={`orig-${index}`} className="flex items-center gap-3.5">
// //             {/* Perfectly sized, smooth CSS custom bullet circle */}
// //             <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" aria-hidden="true" />
// //             <span>{item}</span>
// //           </span>
// //         ))}
// //       </div>

// //       {/* Block 2 (Duplicate) */}
// //       <div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
// //         {MARQUEE_ITEMS.map((item, index) => (
// //           <span key={`dup1-${index}`} className="flex items-center gap-3.5">
// //             <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
// //             <span>{item}</span>
// //           </span>
// //         ))}
// //       </div>

// //       {/* Block 3 (Extra Duplicate) */}
// //       <div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
// //         {MARQUEE_ITEMS.map((item, index) => (
// //           <span key={`dup2-${index}`} className="flex items-center gap-3.5">
// //             <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
// //             <span>{item}</span>
// //           </span>
// //         ))}
// //       </div>

// //     </div>
// //   </div>
// // );


// // // Load Google Font Urbanist
// // const urbanist = Urbanist({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "600", "700", "800"],
// //   variable: "--font-urbanist",
// // });

// // const STATS = [
// //   "Rotating & Static IPs",
// //   "Unlimited Concurrency",
// //   "195+ Countries",
// // ];

// // export default function HeroSection() {
// //   const router = useRouter();

// //   return (
// //     <section
// //       className={`${urbanist.className} relative min-h-screen w-full bg-[#0b0c10] text-white flex items-center overflow-x-hidden py-16 font-['Urbanist']`}
// //     >
// //       {/* ── 1. BACKGROUND SHAPE GRID ANIMATION ────────────────────────────── */}
// //       <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
// //         <ShapeGrid
// //           speed={0.5}
// //           squareSize={40}
// //           direction="diagonal"
// //           borderColor="#2F293A"
// //           hoverFillColor="#222"
// //           shape="square"
// //           hoverTrailAmount={0}
// //         />
// //       </div>

// //       {/* Ambient Radial Background Glow */}
// //       <div className="absolute left-[-10%] top-[20%] z-0 h-[500px] w-[500px] rounded-full bg-[#ea580c] opacity-10 blur-[150px] pointer-events-none" />

// //       {/* ── 2. HERO CONTAINER GRID ───────────────────────────────────────── */}
// //       <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-[113px]">

// //         {/* ── LEFT COLUMN: Broader layout (col-span-8) ── */}
// //         <div className="lg:col-span-8 z-10 space-y-8 pr-0 lg:pr-6">

// //           {/* Trustpilot Rating Badge */}
// //           <div className="flex items-center gap-2">
// //             <a
// //               href="https://www.trustpilot.com/review/torchlabs.xyz"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-block transition-opacity hover:opacity-90"
// //             >
// //               <Image
// //                 src="/images/TrustPiolet.png"
// //                 alt="Trustpilot 5 Star Rating"
// //                 width={200}
// //                 height={40}
// //                 priority
// //                 className="h-8 w-auto object-contain"
// //               />
// //             </a>
// //           </div>

// //           {/* Headline matching screenshot sizing */}
// //           <h1 className="text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[105px] xl:text-[120px]">
// //             <span className="text-[#ff4500]">One</span> proxy <br />
// //             network. <br />
// //             <span className="text-[#ff4500]">Every</span> use case.
// //           </h1>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-wrap items-center gap-4 pt-2">
// //             {/* Outline Button: See Pricing */}
// //             <button
// //               onClick={() => router.push("/pricing")}
// //               className="h-[54px] rounded-xl border border-stone-700 bg-transparent px-16 text-[18px] font-semibold text-white transition-all duration-200 hover:border-stone-500 hover:bg-white/5 active:scale-95 cursor-pointer"
// //             >
// //               See Pricing
// //             </button>

// //             {/* Filled Orange Button: Start with Free Trial */}
// //             <button
// //               onClick={() => router.push("https://dashboard.torchproxies.com/")}
// //               className="h-[54px] rounded-xl bg-gradient-to-r from-[#ff4500] to-[#ea580c] px-8 text-base font-semibold text-white shadow-[0_0_30px_rgba(255,69,0,0.35)] transition-all duration-200 hover:shadow-[0_0_40px_rgba(255,69,0,0.55)] hover:brightness-110 active:scale-95 cursor-pointer"
// //             >
// //               Start with Free Trial
// //             </button>
// //           </div>

// //           {/* Feature Checklist */}
// //           <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-[16px] font-regular text-stone-300">
// //             {STATS.map((stat, idx) => (
// //               <div key={idx} className="flex items-center gap-2">
// //                 <Check className="h-4 w-4 text-[#ff4500] stroke-[3]" />
// //                 <span>{stat}</span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Client Brand Logos */}
// //           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-8 w-full">
// //             <span className="text-[16px] text-stone-400 font-regular whitespace-nowrap">
// //               Trusted by teams worldwide
// //             </span>

// //             <div className="flex items-center">
// //               <Image
// //                 src="/images/teamsworldwide.svg"
// //                 alt="Trusted client logos"
// //                 width={400}
// //                 height={40}
// //                 className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
// //               />
// //             </div>
// //           </div>

// //         </div>

// //         {/* ── RIGHT COLUMN: Compact width (col-span-4) with half-visible cutout ── */}
// //         <div className="lg:col-span-4 relative flex items-center h-[450px] lg:h-[620px] w-full">
// //           {/* Subtle Ambient Glow behind dashboard */}
// //           <div className="absolute -inset-4 rounded-3xl bg-[#ff4500]/10 blur-3xl pointer-events-none" />

// //           {/* Wrapper for clipping the dashboard screenshot precisely */}
// //           <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] sm:w-[170%] lg:w-[220%] xl:w-[240%] pointer-events-none">
// //             <div className="rounded-2xl border border-stone-800/80 bg-[#0d0e12] p-1.5 shadow-2xl overflow-hidden">
// //               <Image
// //                 src="/images/heroimage2.png"
// //                 alt="TorchProxies Dashboard Showcase"
// //                 width={1200}
// //                 height={800}
// //                 priority
// //                 className="rounded-xl w-full h-auto object-cover object-left"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Urbanist } from "next/font/google";
// import { Check } from "lucide-react";
// import ShapeGrid from "@/components/ShapeGrid";

// const MARQUEE_ITEMS = [
//   "99.9% uptime guaranteed",
//   "Blazing fast proxy speeds",
//   "Global geo targeting support",
//   "Secure & anonymous connections",
//   "Unlimited sessions & rotations",
//   "Built for scraping & automation",
// ];

// const Marquee: React.FC = () => (
//   <div className="w-full overflow-hidden bg-[#FE4A01] py-3.5 whitespace-nowrap select-none flex font-['Urbanist']">
//     {/* Infinite track containing multiple data blocks to prevent viewport gaps */}
//     <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around text-[14px] font-medium tracking-wider text-white font-['Urbanist']">
//       {/* Block 1 (Original) */}
//       <div className="flex shrink-0 items-center space-x-12 pr-12">
//         {MARQUEE_ITEMS.map((item, index) => (
//           <span key={`orig-${index}`} className="flex items-center gap-3.5">
//             {/* Perfectly sized, smooth CSS custom bullet circle */}
//             <div
//               className="w-2.5 h-2.5 rounded-full bg-white shrink-0"
//               aria-hidden="true"
//             />
//             <span>{item}</span>
//           </span>
//         ))}
//       </div>

//       {/* Block 2 (Duplicate) */}
//       <div
//         className="flex shrink-0 items-center space-x-12 pr-12"
//         aria-hidden="true"
//       >
//         {MARQUEE_ITEMS.map((item, index) => (
//           <span key={`dup1-${index}`} className="flex items-center gap-3.5">
//             <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
//             <span>{item}</span>
//           </span>
//         ))}
//       </div>

//       {/* Block 3 (Extra Duplicate) */}
//       <div
//         className="flex shrink-0 items-center space-x-12 pr-12"
//         aria-hidden="true"
//       >
//         {MARQUEE_ITEMS.map((item, index) => (
//           <span key={`dup2-${index}`} className="flex items-center gap-3.5">
//             <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
//             <span>{item}</span>
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// // Load Google Font Urbanist
// const urbanist = Urbanist({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-urbanist",
// });

// const STATS = [
//   "Rotating & Static IPs",
//   "Unlimited Concurrency",
//   "195+ Countries",
// ];

// export default function HeroSection() {
//   const router = useRouter();

//   return (
//     <section
//       className={`${urbanist.className} relative min-h-screen w-full bg-[#0b0c10] text-white flex flex-col justify-between overflow-x-hidden pt-16 pb-0 font-['Urbanist']`}
//     >
//       {/* ── 1. BACKGROUND SHAPE GRID ANIMATION ────────────────────────────── */}
//       <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
//         <ShapeGrid
//           speed={0.5}
//           squareSize={40}
//           direction="diagonal"
//           borderColor="#2F293A"
//           hoverFillColor="#222"
//           shape="square"
//           hoverTrailAmount={0}
//         />
//       </div>

//       {/* Ambient Radial Background Glow */}
//       <div className="absolute left-[-10%] top-[20%] z-0 h-[500px] w-[500px] rounded-full bg-[#ea580c] opacity-10 blur-[150px] pointer-events-none" />

//       {/* ── 2. HERO CONTAINER GRID ───────────────────────────────────────── */}
//       <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-[113px]">
//         {/* ── LEFT COLUMN: Broader layout (col-span-8) ── */}
//         <div className="lg:col-span-8 z-10 space-y-8 pr-0 lg:pr-6">
//           {/* Trustpilot Rating Badge */}
//           <div className="flex items-center gap-2">
//             <a
//               href="https://www.trustpilot.com/review/torchlabs.xyz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block transition-opacity hover:opacity-90"
//             >
//               <Image
//                 src="/images/TrustPiolet.png"
//                 alt="Trustpilot 5 Star Rating"
//                 width={200}
//                 height={40}
//                 priority
//                 className="h-8 w-auto object-contain"
//               />
//             </a>
//           </div>

//           {/* Headline matching screenshot sizing */}
//           <h1 className="text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[105px] xl:text-[120px]">
//             <span className="text-[#ff4500]">One</span> proxy <br />
//             network. <br />
//             <span className="text-[#ff4500]">Every</span> use case.
//           </h1>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             {/* Outline Button: See Pricing */}
// <button
//   onClick={() => {
//     document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
//   }}
//   className="h-[54px] rounded-xl border border-stone-700 bg-transparent px-16 text-[18px] font-semibold text-white transition-all duration-200 hover:border-stone-500 hover:bg-white/5 active:scale-95 cursor-pointer"
// >
//   See Pricing
// </button>

//             {/* Filled Orange Button: Start with Free Trial */}
//             <button
//               onClick={() => router.push("https://dashboard.torchproxies.com/")}
//               className="h-[54px] rounded-xl bg-gradient-to-r from-[#ff4500] to-[#ea580c] px-8 text-base font-semibold text-white shadow-[0_0_30px_rgba(255,69,0,0.35)] transition-all duration-200 hover:shadow-[0_0_40px_rgba(255,69,0,0.55)] hover:brightness-110 active:scale-95 cursor-pointer"
//             >
//               Start with Free Trial
//             </button>
//           </div>

//           {/* Feature Checklist */}
//           <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-[16px] font-regular text-stone-300">
//             {STATS.map((stat, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <Check className="h-4 w-4 text-[#ff4500] stroke-[3]" />
//                 <span>{stat}</span>
//               </div>
//             ))}
//           </div>

//           {/* Client Brand Logos */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-8 w-full">
//             <span className="text-[16px] text-stone-400 font-regular whitespace-nowrap">
//               Trusted by teams worldwide
//             </span>

//             <div className="flex items-center">
//               <Image
//                 src="/images/teamsworldwide.svg"
//                 alt="Trusted client logos"
//                 width={400}
//                 height={40}
//                 className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ── RIGHT COLUMN: Compact width (col-span-4) with half-visible cutout ── */}
//         <div className="lg:col-span-4 relative flex items-center h-[450px] lg:h-[620px] w-full">
//           {/* Subtle Ambient Glow behind dashboard */}
//           <div className="absolute -inset-4 rounded-3xl bg-[#ff4500]/10 blur-3xl pointer-events-none" />

//           {/* Wrapper for clipping the dashboard screenshot precisely */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] sm:w-[170%] lg:w-[220%] xl:w-[240%] pointer-events-none">
//             <div className="rounded-2xl border border-stone-800/80 bg-[#0d0e12] p-1.5 shadow-2xl overflow-hidden">
//               <Image
//                 src="/images/heroimage2.png"
//                 alt="TorchProxies Dashboard Showcase"
//                 width={1200}
//                 height={800}
//                 priority
//                 className="rounded-xl w-full h-auto object-cover object-left"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── 3. MARQUEE AT BOTTOM OF HERO SECTION ────────────────────────── */}
//       <div className="relative z-10 w-full mt-[160px] pointer-events-none overflow-hidden">
//         <Marquee />
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";
import { Check } from "lucide-react";
import PixelBlast from "@/components/PixelBlast"; // Swapped import

const MARQUEE_ITEMS = [
  "99.9% uptime guaranteed",
  "Blazing fast proxy speeds",
  "Global geo targeting support",
  "Secure & anonymous connections",
  "Unlimited sessions & rotations",
  "Built for scraping & automation",
];

const Marquee: React.FC = () => (
  <div className="w-full overflow-hidden bg-[#FE4A01] py-3.5 whitespace-nowrap select-none flex font-['Urbanist']">
    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around text-[14px] font-medium tracking-wider text-white font-['Urbanist']">
      {/* Block 1 */}
      <div className="flex shrink-0 items-center space-x-12 pr-12">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`orig-${index}`} className="flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </span>
        ))}
      </div>

      {/* Block 2 */}
      <div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`dup1-${index}`} className="flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span>{item}</span>
          </span>
        ))}
      </div>

      {/* Block 3 */}
      <div className="flex shrink-0 items-center space-x-12 pr-12" aria-hidden="true">
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`dup2-${index}`} className="flex items-center gap-3.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const STATS = [
  "Rotating & Static IPs",
  "Unlimited Concurrency",
  "195+ Countries",
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      className={`${urbanist.className} relative min-h-screen w-full bg-[#0b0c10] text-white flex flex-col justify-between overflow-x-hidden pt-16 pb-0 font-['Urbanist']`}
    >
      {/* ── 1. BACKGROUND PIXEL BLAST ANIMATION ──────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <PixelBlast
          variant="triangle"
          pixelSize={4}
          color="#592814"
          patternScale={3.5}
          patternDensity={0.7}
          enableRipples={false}
          rippleSpeed={0.5}
          rippleThickness={0.05}
          rippleIntensityScale={1.5}
          speed={0.4}
          transparent={false}
          edgeFade={0}
        />
      </div>
      {/* Ambient Radial Background Glow */}
      <div className="absolute left-[-10%] top-[20%] z-0 h-[500px] w-[500px] rounded-full bg-[#ea580c] opacity-10 blur-[150px] pointer-events-none" />

      {/* ── 2. HERO CONTAINER GRID ───────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-[113px]">
        
        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-8 z-10 space-y-8 pr-0 lg:pr-6">
          {/* Trustpilot Badge */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.trustpilot.com/review/torchlabs.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/TrustPiolet.png"
                alt="Trustpilot 5 Star Rating"
                width={200}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-medium leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[105px] xl:text-[120px]">
            <span className="text-[#ff4500]">One</span> proxy <br />
            network. <br />
            <span className="text-[#ff4500]">Every</span> use case.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* --- SECONDARY BUTTON --- */}
            <button onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-transparent border border-stone-400 hover:border-stone-400 text-stone-200 hover:text-white hover:bg-white/5 font-semibold rounded-xl transition-all duration-200 ease-out hover:scale-[0.98] active:scale-[0.96]">
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                        See Pricing
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white">
                        See Pricing
                    </span>
                </div>
            </button>
                  <button onClick={() => router.push('https://dashboard.torchproxies.com/')} className="cursor-pointer group relative w-full sm:w-60 h-[56px] overflow-hidden bg-[#FF4F00] text-white font-semibold rounded-xl transition-all duration-200 ease-out shadow-[0_0_20px_rgba(255,79,0,0.25)] hover:shadow-[0_0_35px_rgba(255,79,0,0.6)] hover:scale-[1.02] active:scale-[0.99]">
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(12px)]">
                        Start with Free Trial
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(12px)] text-white/90">
                        Start with Free Trial
                    </span>
                </div>
            </button>
          </div>

          {/* Feature Checklist */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-[16px] font-regular text-stone-300">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#ff4500] stroke-[3]" />
                <span>{stat}</span>
              </div>
            ))}
          </div>

          {/* Client Brand Logos */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-8 w-full">
            <span className="text-[16px] text-stone-400 font-regular whitespace-nowrap">
              Trusted by teams worldwide
            </span>

            <div className="flex items-center">
              <Image
                src="/images/teamsworldwide.svg"
                alt="Trusted client logos"
                width={400}
                height={40}
                className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="lg:col-span-4 relative flex items-center h-[450px] lg:h-[620px] w-full">
          <div className="absolute -inset-4 rounded-3xl bg-[#ff4500]/10 blur-3xl pointer-events-none" />

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] sm:w-[170%] lg:w-[220%] xl:w-[240%] pointer-events-none">
            <div className="rounded-2xl border border-stone-800/80 bg-[#0d0e12] p-1.5 shadow-2xl overflow-hidden">
              <Image
                src="/images/heroimage2.png"
                alt="TorchProxies Dashboard Showcase"
                width={1200}
                height={800}
                priority
                className="rounded-xl w-full h-auto object-cover object-left"
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── 3. MARQUEE AT BOTTOM ────────────────────────── */}
      <div className="relative z-10 w-full mt-[160px] pointer-events-none overflow-hidden">
        <Marquee />
      </div>
    </section>
  );
}
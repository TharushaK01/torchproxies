"use client";
import { useHasMounted } from "@/hooks/useHasMounted";
import { m } from "framer-motion";
import Link from "next/link";

const BRANDS = [
  {
    name: "L'Oréal",
    svg: (
      <svg viewBox="0 0 80 20" fill="currentColor" className="h-4 sm:h-5">
        <text y="16" fontSize="14" fontFamily="serif" fontWeight="bold">
          L'ORÉAL
        </text>
      </svg>
    ),
  },
  {
    name: "McGill",
    svg: (
      <svg viewBox="0 0 60 20" fill="currentColor" className="h-4 sm:h-5">
        <text y="16" fontSize="13" fontFamily="serif">
          McGill
        </text>
      </svg>
    ),
  },
  {
    name: "three.js",
    svg: (
      <svg
        viewBox="0 0 70 20"
        fill="currentColor"
        className="h-4 sm:h-5"
      >
        <text y="15" fontSize="12" fontFamily="monospace">
          three.js
        </text>
      </svg>
    ),
  },
  {
    name: "ramp",
    svg: (
      <svg viewBox="0 0 50 20" fill="currentColor" className="h-4 sm:h-5">
        <text
          y="15"
          fontSize="13"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          ramp
        </text>
      </svg>
    ),
  },
];

const STATS = [
  { value: "Rotating & Static IPs" },
  { value: "Unlimited Concurrency" },
  { value: "195+ Countries" },
];
{/* ── Stats Bar ───────────────────────────────── */ }


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   }),
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

export default function HeroSection() {
  const hasMounted = useHasMounted(); // ← add this

  // ← add this guard — renders plain version until client is ready
  if (!hasMounted) return (
    <section className="relative flex flex-col items-center justify-center 
                        overflow-hidden bg-[#0a0a0a] px-4 sm:px-6 
                        pt-10 sm:pt-14 pb-16 sm:pb-24 min-h-[90vh]">
      {/* static placeholder — same height, no animations */}
    </section>
  );
  return (
    <section
      className="
        relative overflow-hidden bg-[#0a0a0a]
        min-h-screen
        flex flex-col items-center justify-center
        px-4 sm:px-6 lg:px-8
        pt-16 sm:pt-20
        pb-24 sm:pb-28
      "
    >
      {/* ── Background Glow ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute top-[-5%] left-1/2 -translate-x-1/2
            w-[500px] h-[400px]
            sm:w-[700px] sm:h-[500px]
            lg:w-[900px] lg:h-[600px]
            bg-[radial-gradient(ellipse_at_center,rgba(180,50,5,0.35)_0%,transparent_70%)]
          "
        />

        <div
          className="
            absolute top-[35%] left-1/2 -translate-x-1/2
            w-[300px] h-[180px]
            sm:w-[500px] sm:h-[260px]
            lg:w-[600px] lg:h-[300px]
            bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.08)_0%,transparent_70%)]
          "
        />
      </div>

      {/* ── Trustpilot ───────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative z-10
          flex flex-wrap items-center justify-center gap-2
          mb-8 sm:mb-10
          text-[11px] sm:text-xs
          text-stone-400
          text-center
        "
      >
        <span className="font-medium text-white">Excellent</span>

        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#00b67a"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <span>Trustpilot</span>
      </m.div>

      {/* ── Hero Content ─────────────────────────── */}
      <m.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="
          relative z-10
          w-full
          max-w-5xl
          mx-auto
          text-center
          mb-8 sm:mb-10
        "
      >
        <m.p
          custom={0}
          variants={fadeUp}
          className="
    text-stone-300
    text-[60px]
    font-light
    mb-3
    tracking-wide
  "
        >
          Best proxies for
        </m.p>

        <m.h1
          custom={1}
          variants={fadeUp}
          style={{
            fontFamily: "'Arial Black', 'Helvetica', sans-serif",
          }}
          className="
            text-white
            uppercase
            font-black
            leading-[0.9]
            tracking-[-0.04em]

            text-[clamp(42px,16vw,120px)]
          "
        >
          INDIVIDUALS
        </m.h1>

        <m.p
          custom={2}
          variants={fadeUp}
          className="
            mt-5 sm:mt-6
            mx-auto
            max-w-[90%] sm:max-w-2xl
            text-sm sm:text-base
            leading-relaxed
            text-stone-400
          "
        >
          Residential & isp proxies for Shopify, sneaker, ticket sites with city<br />
          targeting, asn diversity, auto retry, real 10 gbps lines.
        </m.p>
      </m.div>

      {/* ── Stats Bar ───────────────────────────────── */}
      <m.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mb-10 sm:mb-12 px-4"
      >
        <div
          className="
      flex flex-wrap md:flex-nowrap
      items-center justify-center
      gap-y-3 gap-x-6 sm:gap-x-10

      px-5 sm:px-8
      py-4 sm:py-5
    "
        >
          {STATS.map((stat, i) => (
            <m.div
              key={stat.value}
              custom={i}
              variants={fadeUp}
              className="flex items-center gap-2 text-sm sm:text-base"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-orange-500 shrink-0"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-stone-200 font-medium whitespace-nowrap">
                {stat.value}
              </span>
            </m.div>
          ))}
        </div>
      </m.div>
      {/* ── CTA ─────────────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.55,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          justify-center
          gap-3
          w-full
          max-w-md sm:max-w-none
          mb-14 sm:mb-16
        "
      >
        {/* Primary CTA */}
        {/* <Link
          href="https://dashboard.torchproxies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative
            w-full sm:w-auto
            text-center

            rounded-xl
            bg-orange-500
            hover:bg-orange-600

            px-6 sm:px-7
            py-3.5

            text-sm font-semibold text-white

            transition-all duration-200

            shadow-[0_0_25px_rgba(234,88,12,0.45)]
            hover:shadow-[0_0_40px_rgba(234,88,12,0.65)]
          "
        >
          <span className="relative z-10">Get Started Today</span>
        </Link> */}

        {/* Secondary CTA */}
        {/* <button
          className="
            flex items-center justify-center gap-2
            w-full sm:w-auto

            rounded-xl
            border border-white/10
            bg-white/[0.04]

            px-4 py-3.5

            text-sm text-stone-300

            hover:border-white/20
            transition-all duration-200
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>

          <span>Specify your location</span>

          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button> */}
      </m.div>

      {/* ── Brands ───────────────────────────────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8 }}
        className="
          relative z-10
          flex flex-col items-center
          gap-5
          w-full
        "
      >
        <p
          className="
            text-[14px] sm:text-base
            tracking-[0.01em]
            text-stone-300
            text-center
          "
        >
          Trusted by industry leaders
        </p>

        <div
          className="
            flex flex-wrap items-center justify-center
            gap-x-6 gap-y-4
            sm:gap-x-10
          "
        >
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              title={brand.name}
              className="
                text-stone-600
                hover:text-stone-400
                transition-colors duration-300
              "
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </m.div>

      {/* ── Scroll Indicator ────────────────────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="
          absolute bottom-6 sm:bottom-8
          left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1.5
        "
      >
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <svg
          // width="20"
          // height="20"
          // viewBox="0 0 24 24"
          // fill="none"
          // stroke="currentColor"
          // strokeWidth="1.5"
          // className="text-stone-700"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </m.div>
      </m.div>
    </section>
  );
}
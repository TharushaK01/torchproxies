"use client";
import { useState, useEffect } from "react";
import { useHasMounted } from "@/hooks/useHasMounted";
import { m, type Variants, AnimatePresence } from "framer-motion";

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

const WORDS = ["INDIVIDUALS", "BUSINESSES"];

const fadeUp: Variants = {
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

const textCycleVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  const hasMounted = useHasMounted();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-24 min-h-[90vh]">
      {/* static placeholder */}
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
      <div className="flex items-center justify-center mb-6">
        <img
          src="/images/TrustPiolet.png"
          alt="Excellent 5-star rating on Trustpilot"
          className="h-6 w-auto object-contain"
          loading="lazy"
        />
      </div>

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
            font-regular
            mb-3
            tracking-wide
          "
        >
          Best proxies for
        </m.p>

        {/* Text Container with Fixed Layout height to prevent layout shifts */}
        <div className="relative h-[clamp(42px,16vw,120px)] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <m.h1
              key={WORDS[index]}
              variants={textCycleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                fontFamily: "'Arial Black', 'Helvetica', sans-serif",
              }}
              className="
                absolute
                text-white
                uppercase
                font-normal
                leading-[0.9]
                tracking-[-0.04em]
                text-[clamp(42px,16vw,100px)]
              "
            >
              {WORDS[index]}
            </m.h1>
          </AnimatePresence>
        </div>

        <m.p
          custom={2}
          variants={fadeUp}
          className="
            mt-5 sm:mt-6
            mx-auto
            max-w-[90%] sm:max-w-2xl
            text-[18px]
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
        className="w-full max-w-4xl mb-4 px-4"
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-10 px-5 sm:px-8 py-4 sm:py-5">
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

      {/* ── CTA Button container updated ─────────────────────────────────── */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.55,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex items-center justify-center w-full mb-20 px-4"
      >
        <button
          className="
            w-full max-w-[290px] sm:max-w-[320px] py-4 px-8 
            bg-orange-600 hover:bg-orange-500 text-white 
            font-bold text-base rounded-2xl tracking-[0.2px]
            transition-all duration-200 ease-out text-center
            shadow-[0_4px_30px_rgba(234,88,12,0.45)]
            hover:shadow-[0_6px_35px_rgba(234,88,12,0.6)]
            hover:scale-[1.01] active:scale-[0.99]
          "
        >
          Start free with 1 GB
        </button>
      </m.div>

      {/* ── Brands ───────────────────────────────── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-5 w-full"
      >
        <p className="text-[12px] sm:text-base font-normal tracking-wide text-stone-200 text-center opacity-100">
          Trusted by teams worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
              <img
                src="/images/HeroLogo.png" // Corrected typo "TrustPiolet" to "Trustpilot"
                alt="Excellent 5-star rating on Trustpilot"
                className="h-6 w-auto object-contain transition-opacity duration-200 hover:opacity-80 cursor-pointer"
                loading="lazy"
              />

            </div>
      </m.div>
    </section>
  );
}
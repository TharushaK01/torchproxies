"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Residential Proxies", href: "/products/residential" },
      { label: "Datacenter Proxies", href: "/products/datacenter" },
      { label: "ISP Proxies", href: "/products/isp" },
      { label: "Hybrid Proxies", href: "/products/hybrid" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    dropdown: [
      { label: "North America", href: "/locations/north-america" },
      { label: "Europe", href: "/locations/europe" },
      { label: "Asia Pacific", href: "/locations/asia-pacific" },
    ],
  },
  {
    label: "B2B Reseller",
    href: "/reseller",
    dropdown: [
      { label: "Reseller Program", href: "/reseller/program" },
      { label: "White Label", href: "/reseller/white-label" },
      { label: "Enterprise", href: "/reseller/enterprise" },
    ],
  },
  {
    label: "Usecases",
    href: "/use-cases",
    dropdown: [
      { label: "Web Scraping", href: "/use-cases/web-scraping" },
      { label: "Ad Verification", href: "/use-cases/ad-verification" },
      { label: "Account Management", href: "/use-cases/account-management" },
      { label: "SEO Monitoring", href: "/use-cases/seo-monitoring" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Documentation", href: "/resources/docs" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? ""
            : ""
          }
        `}
      >
        <nav className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between">

          {/* ── Logo (far left) ───────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Flame glow */}
              <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 
                              blur-md group-hover:opacity-35 transition-opacity duration-300" />
              {/* Flame SVG */}
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className="relative z-10">
                <path
                  d="M11 0C11 0 6 6 6 12C6 15.3 8.2 18 11 18C13.8 18 16 15.3 16 12C16 6 11 0 11 0Z"
                  fill="url(#flameGrad)"
                />
                <path
                  d="M11 10C11 10 8.5 12.5 8.5 14.5C8.5 15.9 9.6 17 11 17C12.4 17 13.5 15.9 13.5 14.5C13.5 12.5 11 10 11 10Z"
                  fill="white"
                  opacity="0.9"
                />
                <rect x="9.5" y="17" width="3" height="4" rx="1.5" fill="#f97316" opacity="0.8"/>
                <defs>
                  <linearGradient id="flameGrad" x1="11" y1="0" x2="11" y2="18" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fb923c"/>
                    <stop offset="100%" stopColor="#ea580c"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              <span className="text-orange-500">Torch</span>Proxies
            </span>
          </Link>

          {/* ── Center pill nav ───────────────────────────── */}
          <div className="hidden lg:flex items-center">
            {/* Pill container */}
            <div className="flex items-center gap-0.5 
                            bg-[#FFFFFF1C] border border-white/0 rounded-xl 
                            px-1.5 py-1.5">

              {/* Nav links with dropdowns */}
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setTimeout(() => setOpenDropdown(null), 150)}
                >
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium
                      transition-all duration-200 whitespace-nowrap
                      ${pathname.startsWith(link.href)
                        ? "text-stone-400 bg-white/0"
                        : "text-stone-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {link.label}
                    {/* Chevron */}
                    <svg
                      width="11" height="11" viewBox="0 0 12 12" fill="none"
                      className={`transition-transform duration-200 opacity-50
                        ${openDropdown === link.label ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  {/* Dropdown panel */}
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52 z-50">
                      <div className="bg-[#111] border border-white/10 rounded-xl 
                                      shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm 
                                       text-stone-400 hover:text-white hover:bg-white/5 
                                       transition-colors duration-150
                                       border-b border-white/5 last:border-0"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 flex-shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Dashboard button — inside the pill */}
              <Link
                href="https://dashboard.torchproxies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 px-4 py-1.5 rounded-lg text-sm font-semibold text-white
                           bg-orange-500 hover:bg-orange-600 transition-all duration-200
                           shadow-[0_0_16px_rgba(234,88,12,0.4)] 
                           hover:shadow-[0_0_24px_rgba(234,88,12,0.6)]
                           whitespace-nowrap"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* ── Contact Us (far right) ─────────────────────── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg
                         border border-white/20 hover:border-white/40
                         hover:bg-white/5 transition-all duration-200
                         whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg 
                       hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 
                              ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 
                              ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 
                              ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* ── Mobile menu ───────────────────────────────── */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden 
                         ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-3 py-3 rounded-lg 
                             text-sm font-medium text-stone-300 hover:text-white 
                             hover:bg-white/5 transition-colors"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Link>
                <div className="ml-4 mt-0.5 space-y-0.5">
                  {link.dropdown?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm 
                                 text-stone-500 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-500/50" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col gap-2 border-t border-white/5 mt-2">
              <Link
                href="https://dashboard.torchproxies.com"
                className="px-4 py-3 text-sm font-semibold text-center text-white 
                           rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors
                           shadow-[0_0_20px_rgba(234,88,12,0.3)]"
              >
                Dashboard
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-semibold text-center text-white 
                           rounded-xl border border-white/20 hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-[0px]" />
    </>
  );
}
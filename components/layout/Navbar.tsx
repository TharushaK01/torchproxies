"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    isMegaMenu: true,
dropdown: [
      {
        section: "Residential Proxies",
        items: [
          {
            label: "Standard Residential",
            description: "Perfect for everyday online tasks.",
            href: "/products/residential",
            price: "$2.9/GB",
          },
          {
            label: "Premium Residential",
            description: "For demanding users and businesses.",
            href: "/products/premium",
            price: "$3.4/GB",
          },
          {
            label: "Plan X Residential",
            description: "For demanding users and businesses.",
            href: "/products/plan-x",
            price: "$3.9/GB",
            badge: "Most Popular",
          },
        ],
      },
      {
        section: "ISP Proxies",
        items: [
          {
            label: "ISP Proxies",
            description: "Static residential proxies with unlimited data.",
            href: "/products/isp",
            price: "$2.3/IP",
          },
        ],
      },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-transparent backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-4 h-auto flex items-center justify-between">
          
          {/* ── Logo (far left) ───────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 blur-md group-hover:opacity-35 transition-opacity duration-300" />
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className="relative z-10">
                <path d="M11 0C11 0 6 6 6 12C6 15.3 8.2 18 11 18C13.8 18 16 15.3 16 12C16 6 11 0 11 0Z" fill="url(#flameGrad)" />
                <path d="M11 10C11 10 8.5 12.5 8.5 14.5C8.5 15.9 9.6 17 11 17C12.4 17 13.5 15.9 13.5 14.5C13.5 12.5 11 10 11 10Z" fill="white" opacity="0.9" />
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
            <div className="flex items-center gap-0.5 bg-[#FFFFFF0A] backdrop-blur-md border border-white/5 rounded-xl px-1.5 py-1.5">
              
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      pathname.startsWith(link.href)
                        ? "text-stone-200 bg-white/5"
                        : "text-stone-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <svg
                      width="11" height="11" viewBox="0 0 12 12" fill="none"
                      className={`transition-transform duration-200 opacity-50 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  {/* Dropdown UI Container */}
                  {link.dropdown && openDropdown === link.label && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 ${link.isMegaMenu ? 'w-[520px]' : 'w-52'}`}>
                      <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden p-4 space-y-5">
                        
                        {/* Case A: Custom Rich Mega Menu Layout (Products) */}
                        {link.isMegaMenu ? (
                          link.dropdown.map((subSection, sectionIdx) => (
                            <div key={sectionIdx} className="space-y-2">
                              <h4 className="text-stone-400 font-semibold text-xs tracking-wider px-2">
                                {subSection.section}
                              </h4>
                              
                              <div className="space-y-1">
                                {subSection.items?.map((item: any, itemIdx: number) => (
                                  <Link
                                    key={itemIdx}
                                    href={item.href}
                                    className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.03] transition-colors duration-150 group"
                                  >
                                    <div className="flex items-center gap-3">
                                      {/* Product Icon Mock */}
                                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0 shadow-inner">
                                        <div className="w-4 h-4 bg-white/30 rounded-sm transform rotate-45 group-hover:scale-110 transition-transform" />
                                      </div>
                                      
                                      <div>
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-semibold text-stone-200 group-hover:text-white">
                                            {item.label}
                                          </span>
                                          {item.badge && (
                                            <span className="text-[10px] bg-[#022c22] text-[#34d399] border border-[#065f46] font-medium px-2 py-0.5 rounded-full">
                                              {item.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-stone-500 font-normal leading-normal mt-0.5 max-w-[240px]">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Pricing Structure Display */}
                                    <div className="text-right flex flex-col items-end gap-0.5 pr-2">
                                      <span className="text-[10px] uppercase text-stone-500 tracking-wider font-medium">From</span>
                                      <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                                        {item.price}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          /* Case B: Standard Single-column Layout (Fallbacks) */
                          <div className="flex flex-col space-y-0.5">
                            {link.dropdown.map((item: any) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2.5 px-3 py-2 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Dashboard Action */}
              <Link
                href="https://dashboard.torchproxies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 px-4 py-1.5 rounded-lg text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 shadow-[0_0_16px_rgba(234,88,12,0.4)] whitespace-nowrap"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* ── Contact Us (far right) ─────────────────────── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* ── Mobile menu ───────────────────────────────── */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1 max-h-[85vh] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/[0.03] last:border-none pb-2 mb-2">
                <div className="text-stone-200 font-semibold text-xs tracking-wider px-3 py-2 uppercase opacity-60">
                  {link.label}
                </div>
                <div className="ml-2 space-y-0.5">
                  {link.isMegaMenu ? (
                    link.dropdown.flatMap((s) => s.items).map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs font-bold text-orange-400">{item.price}</span>
                      </Link>
                    ))
                  ) : (
                    link.dropdown?.map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-2 border-t border-white/5 mt-2">
              <Link href="https://dashboard.torchproxies.com" className="px-4 py-3 text-sm font-semibold text-center text-white rounded-xl bg-orange-500">
                Dashboard
              </Link>
              <Link href="/contact" className="px-4 py-3 text-sm font-semibold text-center text-white rounded-xl border border-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
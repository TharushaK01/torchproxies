"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    menuType: "products-mega",
    dropdown: [
      {
        section: "Residential Proxies",
        items: [
          {
            label: "Standard Residential",
            description: "Perfect for everyday online tasks.",
            href: "/standard-residential-proxies",
            price: "$2.9/GB",
          },
          {
            label: "Premium Residential",
            description: "For demanding users and businesses.",
            href: "/premium-residential-proxies",
            price: "$3.4/GB",
          },
          {
            label: "Plan X Residential",
            description: "For demanding users and businesses.",
            href: "/plan-x-residential",
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
            href: "/isp-proxies",
            price: "$2.3/IP",
          },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    menuType: "locations-grid",
    dropdown: {
      section: "Residential Proxies",
      countries: [
        { name: "United States", ips: "4,429,824 IPs", code: "us", href: "/locations/us" },
        { name: "Germany", ips: "4,429,824 IPs", code: "de", href: "/locations/de" },
        { name: "United Kingdom", ips: "4,429,824 IPs", code: "gb", href: "/locations/uk" },
        { name: "Australia", ips: "4,429,824 IPs", code: "au", href: "/locations/au" },
        { name: "Canada", ips: "4,429,824 IPs", code: "ca", href: "/locations/ca" },
        { name: "Mexico", ips: "4,429,824 IPs", code: "mx", href: "/locations/mx" },
        { name: "China", ips: "4,429,824 IPs", code: "cn", href: "/locations/cn" },
        { name: "France", ips: "4,429,824 IPs", code: "fr", href: "/locations/fr" },
      ]
    }
  },
  {
    label: "B2B Reseller",
    href: "/reseller",
    menuType: "reseller-mega",
    dropdown: {
      leftItems: [
        {
          label: "B2B Dashboard",
          description: "Centralized platform to manage proxy inventory, client usage, and distribution.",
          href: "/b2b-dashboard",
          tag: "Starting at $0",
          tagColor: "text-orange-400 bg-orange-950/40 border border-orange-900/50",
        },
        {
          label: "Proxy API",
          description: "A developer friendly API that enables resellers to automate proxy delivery",
          href: "/proxy-api",
          tag: "Developer friendly",
          tagColor: "text-emerald-400 bg-emerald-950/40 border border-emerald-900/50",
        }
      ],
      rightCard: {
        title: "Get a custom dashboard designed",
        description: "We build tailored proxy dashboards for resellers to track inventory, monitor clients, and manage distribution easily.",
        priceTag: "Starting at $250",
        href: "/reseller/custom-dashboard"
      }
    }
  },
  {
    label: "Usecases",
    href: "/use-cases",
    menuType: "usecases-mega",
    dropdown: [
      {
        section: "Market Research",
        items: [
          { label: "Price Monitoring", href: "/use-cases/price-monitoring" },
          { label: "SEO Monitoring", href: "/use-cases/seo-monitoring" },
          { label: "Ad Verifications", href: "/ad-verification" },
        ]
      },
      {
        section: "Scraping",
        items: [
          { label: "Web Scraping", href: "/use-cases/web-scraping" }
        ]
      },
      {
        section: "Sneaker",
        items: [
          { label: "Sneaker Proxies", href: "/use-cases/sneaker-proxies" }
        ]
      },
      {
        section: "Tickets",
        items: [
          { label: "Ticketmaster", href: "/use-cases/ticketmaster" }
        ]
      }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    menuType: "resources-mega",
    dropdown: {
      leftSide: [
        {
          label: "Affiliate Program",
          description: "Industry leading commissions, fast payouts and lifetime earnings. It's time to monetise your traffic like never before",
          href: "/resources/affiliate"
        },
        {
          label: "Reseller Program",
          description: "Grow your own proxy business with our reseller API and dashboard. Automate delivery, manage clients and scale with enterprise grade reliability.",
          href: "/reseller/program"
        }
      ],
      rightSide: [
        { section: "Residential Proxies", label: "Blog", href: "/resources/blog" },
        { section: "", label: "Documentation", href: "/resources/docs" }
      ]
    }
  },
];

function CountryFlagMock({ code }: { code: string }) {
  // Simple clean fallback emojis styled with beautiful containers matching the screenshot
  const flags: Record<string, string> = {
    us: "🇺🇸", de: "🇩🇪", gb: "🇬🇧", au: "🇦🇺", ca: "🇨🇦", mx: "🇲🇽", cn: "🇨🇳", fr: "🇫🇷"
  };
  return (
    <div className="w-[52px] h-[38px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-2xl select-none flex-shrink-0 shadow-inner">
      {flags[code] || "🌐"}
    </div>
  );
}

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
          
          {/* ── Logo ──────────────────────────────────────── */}
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

          {/* ── Center Navigation Pill ─────────────────────── */}
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

                  {/* Dropdown Card Components Selector */}
                  {link.dropdown && openDropdown === link.label && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 ${
                      link.menuType === "products-mega" ? "w-[540px]" : 
                      link.menuType === "locations-grid" ? "w-[620px]" :
                      link.menuType === "reseller-mega" ? "w-[720px]" :
                      link.menuType === "usecases-mega" ? "w-[580px]" :
                      link.menuType === "resources-mega" ? "w-[680px]" : "w-52"
                    }`}>
                      <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden p-5">
                        
                        {/* CASE 1: Products Layout */}
                        {link.menuType === "products-mega" && Array.isArray(link.dropdown) && (
                          <div className="space-y-5">
                            {(link.dropdown as any[]).map((subSection, sectionIdx) => (
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
                            ))}
                          </div>
                        )}

                        {/* CASE 2: Locations Flag Grid Layout */}
                        {link.menuType === "locations-grid" && !Array.isArray(link.dropdown) && (
                          <div className="space-y-4">
                            <h4 className="text-stone-400 font-semibold text-xs tracking-wider px-1">
                              {(link.dropdown as any).section}
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                              {(link.dropdown as any).countries.map((country: any, idx: number) => (
                                <Link
                                  href={country.href}
                                  key={idx}
                                  className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.03] transition-all duration-150 group"
                                >
                                  <div className="flex items-center gap-3.5">
                                    <CountryFlagMock code={country.code} />
                                    <div className="flex flex-col">
                                      <span className="text-sm font-bold text-stone-200 group-hover:text-white transition-colors">
                                        {country.name}
                                      </span>
                                      <span className="text-xs text-stone-500 font-normal mt-0.5">
                                        {country.ips}
                                      </span>
                                    </div>
                                  </div>
                                  <svg
                                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    className="text-stone-600 group-hover:text-stone-400 group-hover:translate-x-0.5 transition-all mr-1"
                                  >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* CASE 3: B2B Reseller Board Layout */}
                        {link.menuType === "reseller-mega" && !Array.isArray(link.dropdown) && (
                          <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-7 space-y-5">
                              <h4 className="text-stone-400 font-semibold text-xs tracking-wider uppercase opacity-50 px-1">Reseller Products</h4>
                              <div className="space-y-4">
                                {(link.dropdown as any).leftItems.map((item: any, idx: number) => (
                                  <Link href={item.href} key={idx} className="block group p-1 rounded-xl hover:bg-white/[0.01]">
                                    <div className="flex items-start gap-3.5">
                                      <div className="w-10 h-10 rounded-xl bg-orange-600/90 flex items-center justify-center flex-shrink-0 text-white shadow-md mt-0.5">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                      </div>
                                      <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="text-sm font-bold text-stone-200 group-hover:text-orange-400 transition-colors">{item.label}</span>
                                          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${item.tagColor}`}>{item.tag}</span>
                                        </div>
                                        <p className="text-xs text-stone-400 leading-relaxed font-light">{item.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-span-5 bg-[#231510] border border-orange-950/40 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                              <div className="space-y-2">
                                <h4 className="text-stone-100 font-bold text-base leading-snug">{(link.dropdown as any).rightCard.title}</h4>
                                <p className="text-xs text-stone-400 leading-relaxed font-light">{(link.dropdown as any).rightCard.description}</p>
                              </div>
                              <div className="space-y-2.5">
                                <span className="block text-xs font-semibold text-orange-400">{(link.dropdown as any).rightCard.priceTag}</span>
                                <Link href={(link.dropdown as any).rightCard.href} className="block w-full text-center text-xs font-semibold text-stone-300 border border-stone-700 hover:border-stone-500 bg-transparent py-2.5 rounded-xl transition-all">
                                  Learn more
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* CASE 4: Use Cases Layout */}
                        {link.menuType === "usecases-mega" && Array.isArray(link.dropdown) && (
                          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                            {(link.dropdown as any[]).map((col, idx) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="text-stone-500 font-medium text-xs tracking-wide border-b border-white/5 pb-1 mb-1.5">{col.section}</h4>
                                <div className="space-y-1">
                                  {col.items.map((item: any, iIdx: number) => (
                                    <Link href={item.href} key={iIdx} className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/[0.03] text-stone-300 hover:text-white transition-all group">
                                      <div className="w-[38px] h-[38px] rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md shadow-black/50">
                                        <div className="w-4 h-4 rounded-md bg-orange-600 group-hover:scale-110 transition-transform" />
                                      </div>
                                      <span className="text-sm font-bold tracking-wide">{item.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CASE 5: Resources Column Splits Layout */}
                        {link.menuType === "resources-mega" && !Array.isArray(link.dropdown) && (
                          <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-7 space-y-7">
                              {(link.dropdown as any).leftSide.map((program: any, idx: number) => (
                                <div key={idx} className="space-y-3">
                                  <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-stone-200">{program.label}</h4>
                                    <p className="text-xs text-stone-400 font-light leading-relaxed">{program.description}</p>
                                  </div>
                                  <Link href={program.href} className="inline-block text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 px-5 py-2.5 rounded-xl shadow-md transition-all">
                                    Learn more
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div className="col-span-5 space-y-4 border-l border-white/5 pl-5">
                              {(link.dropdown as any).rightSide.map((item: any, idx: number) => (
                                <div key={idx} className="space-y-2">
                                  {item.section && <h5 className="text-[11px] uppercase font-semibold text-stone-500 tracking-wider mb-1">{item.section}</h5>}
                                  <Link href={item.href} className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/[0.03] text-stone-200 hover:text-white group transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v21H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>
                                    </div>
                                    <span className="text-sm font-bold tracking-wide">{item.label}</span>
                                  </Link>
                                </div>
                              ))}
                            </div>
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

          {/* ── Contact Us Button ──────────────────────────── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* ── Mobile Hamburger Action ────────────────────── */}
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

        {/* ── Mobile Context Drawer ───────────────────────── */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1 max-h-[85vh] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/[0.03] last:border-none pb-2 mb-2">
                <div className="text-stone-200 font-semibold text-xs tracking-wider px-3 py-2 uppercase opacity-60">
                  {link.label}
                </div>
                <div className="ml-2 space-y-0.5">
                  {link.menuType === "products-mega" && Array.isArray(link.dropdown) ? (
                    (link.dropdown as any[]).flatMap((s) => s.items).map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs font-bold text-orange-400">{item.price}</span>
                      </Link>
                    ))
                  ) : link.menuType === "locations-grid" && !Array.isArray(link.dropdown) ? (
                    (link.dropdown as any).countries.map((country: any) => (
                      <Link
                        key={country.href}
                        href={country.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white"
                      >
                        <span>{country.name}</span>
                        <span className="text-xs opacity-50">{country.ips}</span>
                      </Link>
                    ))
                  ) : link.menuType === "usecases-mega" && Array.isArray(link.dropdown) ? (
                    (link.dropdown as any[]).flatMap((s) => s.items).map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))
                  ) : link.menuType === "reseller-mega" && !Array.isArray(link.dropdown) ? (
                    (link.dropdown as any).leftItems.map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))
                  ) : (
                    (!Array.isArray(link.dropdown) && (link.dropdown as any)?.rightSide) && (link.dropdown as any).rightSide.map((item: any) => (
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
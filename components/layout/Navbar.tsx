"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Flag from 'react-world-flags';
import Image from 'next/image';
import ContactSection from '../contact/ContactSection';

const NAV_LINKS = [
  {
    label: "Products",
    href: "/#",
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
            icon: "/images/icon/Standard.svg",
          },
          {
            label: "Premium Residential",
            description: "For demanding users and businesses.",
            href: "/premium-residential-proxies",
            price: "$3.4/GB",
            icon: "/images/icon/Premium.svg",
          },
          {
            label: "Plan X Residential",
            description: "For demanding users and businesses.",
            href: "/plan-x-residential",
            price: "$3.9/GB",
            badge: "Most Popular",
            icon: "/images/icon/PlanX.svg",
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
            icon: "/images/icon/ISP.svg",
          },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/countries",
    menuType: "locations-grid",
    dropdown: {
      section: "Residential Proxies",
      countries: [
        { name: "United States", ips: "4,429,824 IPs", code: "us", href: "/united-states" },
        { name: "Germany", ips: "4,429,824 IPs", code: "de", href: "/germany" },
        { name: "United Kingdom", ips: "4,429,824 IPs", code: "gb", href: "/united-kingdom" },
        { name: "Australia", ips: "4,429,824 IPs", code: "au", href: "/australia" },
        { name: "Canada", ips: "4,429,824 IPs", code: "ca", href: "/canada" },
        { name: "Mexico", ips: "4,429,824 IPs", code: "mx", href: "/mexico" },
        { name: "China", ips: "4,429,824 IPs", code: "cn", href: "/china" },
        { name: "France", ips: "4,429,824 IPs", code: "fr", href: "/france" },
      ]
    }
  },
  {
    label: "B2B Reseller",
    href: "/b2b-reseller",
    menuType: "reseller-mega",
    dropdown: {
      leftItems: [
        {
          label: "B2B Dashboard",
          description: "Centralized platform to manage proxy inventory, client usage, and distribution.",
          href: "/b2b-dashboard",
          tag: "Starting at $0",
          tagColor: "text-orange-400 bg-orange-950/40 border border-orange-900/50",
          icon: "/images/icon/b2b.svg", // Add path to your SVG
        },
        {
          label: "Proxy API",
          description: "A developer friendly API that enables resellers to automate proxy delivery",
          href: "/proxy-api",
          tag: "Developer friendly",
          tagColor: "text-emerald-400 bg-emerald-950/40 border border-emerald-900/50",
          icon: "/images/icon/proxyapi.svg", // Add path to your SVG
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
    label: "Use cases",
    href: "/#",
    menuType: "usecases-mega",
    dropdown: [
      {
        section: "Market Research",
        items: [
          { label: "Price Monitoring", href: "/price-monitoring", icon: "/images/icon/pricemonitoring.svg" },
          { label: "SEO Monitoring", href: "/seo-monitoring", icon: "/images/icon/seomonitoring.svg" },
          { label: "Ad Verifications", href: "/ad-verification", icon: "/images/icon/adverification.svg" },
        ]
      },
      {
        section: "Scraping",
        items: [
          { label: "Web Scraping", href: "/web-scraping", icon: "/images/icon/webscraping.svg" }
        ]
      },
      {
        section: "Sneaker",
        items: [
          { label: "Sneaker Proxies", href: "/sneaker-proxies", icon: "/images/icon/sneakerproxies.svg" }
        ]
      },
      {
        section: "Tickets",
        items: [
          { label: "Ticketmaster", href: "/ticketmaster-proxies", icon: "/images/icon/ticketmaster.svg" }
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
          href: "/affiliate"
        },
        {
          label: "Reseller Program",
          description: "Grow your own proxy business with our reseller API and dashboard. Automate delivery, manage clients and scale with enterprise grade reliability.",
          href: "/b2b-reseller"
        }
      ],
      rightSide: [
        {
          section: "Residential Proxies",
          label: "Blog",
          href: "/blog",
          icon: "/images/icon/blog.svg"
        },
        {
          section: "",
          label: "Documentation",
          href: "/documentation",
          icon: "/images/icon/documentation.svg"
        }
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
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
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
        className={`fixed top-0 left-0 right-0 z-100 overflow-visible transition-all duration-300 font-['Urbanist'] ${scrolled
          ? "bg-transparent"
          : "bg-transparent"
          }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-4 h-auto flex items-center justify-between overflow-visible font-['Urbanist']">

          {/* ── Logo ──────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-0 group shrink-0">
            <div className="relative w-[141px] h-[27px] flex items-center justify-center">
              {/* Animated Orange background glow frame */}
              <div className="absolute inset-0 rounded-full opacity-20 blur-md group-hover:opacity-35 transition-opacity duration-300" />

              {/* ── Your Custom SVG File ────────────────────── */}
              <img
                src="/images/navlogo.svg"
                alt="TorchProxies Logo"
                className="relative z-10 w-[141px] h-[27px] object-contain"
              />
            </div>
          </Link>

          {/* ── Center Navigation Pill ─────────────────────── */}
          <div className="hidden lg:flex items-center overflow-visible">
            <div className="flex items-center gap-0.5 bg-[#FFFFFF0A] backdropkey={link.label}-blur-md border border-white/5 rounded-xl px-1.5 py-1.5 overflow-visible">

              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative overflow-visible"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${pathname.startsWith(link.href)
                      ? "text-stone-200 bg-white/5"
                      : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                    <svg
                      width="11" height="11" viewBox="0 0 12 12" fill="none"
                      className={`transition-transform duration-200 opacity-50 ${openDropdown === link.label ? "rotate-180" : ""
                        }`}
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Dropdown Card Components Selector */}
                  {link.dropdown && openDropdown === link.label && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[200] ${link.menuType === "products-mega" ? "w-[540px]" :
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
                                      {/* Left Side: Icon and Text Content */}
                                      <div className="flex items-center gap-3 flex-1">
                                        {/* Dynamically Render Custom Icon from Public Folder */}
                                        {/* Icon Container Block */}
                                        <div className="w-18 h-18 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner overflow-hidden relative p-2.5">
                                          {item.icon ? (
                                            <img
                                              src={item.icon}
                                              alt={item.label}
                                              className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-150"
                                            />
                                          ) : (
                                            <div className="w-4 h-4 bg-white/30 rounded-sm transform rotate-45" />
                                          )}
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

                                      {/* Right Side: Clean Alignment & Vertical Divider */}
                                      <div className="flex items-center h-12 pl-4 border-l border-white/[0.08]">
                                        <div className="text-right flex flex-col items-end gap-1 w-20">
                                          <span className="text-[14px] text-stone-200 tracking-wider font-medium">From</span>
                                          <span className="text-xs font-bold text-stone-100 bg-[#2b1a14] border border-[#44281e] px-3 py-1.5 rounded-md min-w-[72px] text-center">
                                            {item.price}
                                          </span>
                                        </div>
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
                                  <div className="flex items-center gap-4">
                                    {/* Wrapper to control sizes perfectly without distorting or cropping */}
                                    <div className="w-12 flex items-center justify-center flex-shrink-0">
                                      <Flag
                                        code={country.code.toUpperCase()}
                                        style={{
                                          width: '100%',
                                          height: 'auto',
                                          borderRadius: 4,
                                          objectFit: 'contain'
                                        }}
                                      />
                                    </div>

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

{/* ── CASE 3: B2B Reseller Board Layout ────────────────────────────────── */}
{link.menuType === "reseller-mega" && !Array.isArray(link.dropdown) && (
  /* Adjusted layout structure container grid sizing and gap alignments */
  <div className="grid grid-cols-12 gap-6 items-stretch p-2 bg-[#0d0d0f]">
    
    {/* Left Column Container: Reseller Products List */}
    <div className="col-span-7 flex flex-col justify-between py-1">
      <div className="space-y-4">
        <h4 className="text-stone-500 font-medium text-xs tracking-wider uppercase px-1">
          Reseller Products
        </h4>
        
        <div className="space-y-3">
          {(link.dropdown as any).leftItems.map((item: any, idx: number) => (
            <Link
              href={item.href}
              key={idx}
              className="relative block group p-4 rounded-2xl hover:bg-white/[0.02] bg-[#0d0d0f]/50 border border-transparent hover:border-white/[0.05] transition-all duration-150"
            >
              {/* Corner Positioned Status Tag Badges */}
              <span className={`absolute top-4 right-4 text-[11px] font-medium px-2.5 py-0.5 rounded-md ${
                item.tag.includes('$0')
                  ? 'bg-orange-950/40 text-[#FF4F00] border border-orange-900/30'
                  : 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/30'
              }`}>
                {item.tag}
              </span>

              {/* Stacked Vertical Content Track */}
              <div className="flex flex-col items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                      priority
                    />
                  ) : (
                    <div className="w-6 h-6 bg-white/10 rounded-lg" />
                  )}
                </div>

                <div className="space-y-1">
                  <span className="block text-[15px] font-semibold text-white tracking-tight">
                    {item.label}
                  </span>
                  <p className="text-[13px] text-stone-400 leading-normal font-normal max-w-[340px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Right Column Container: Featured Callout Card Panel Layout */}
    {/* Styled to exactly resemble the uploaded image asset specifications */}
    {(link.dropdown as any).rightCard && (
      <div className="col-span-5 bg-[#40281e] rounded-[24px] p-8 flex flex-col justify-between min-h-[380px]">
        
        {/* Upper Heading Text Block */}
        <div className="space-y-4">
          <h4 className="text-white font-semi-bold text-[22px] tracking-tight leading-[1.2]">
            {(link.dropdown as any).rightCard.title}
          </h4>
          <p className="text-[14px] text-stone-300 leading-relaxed font-normal opacity-90">
            {(link.dropdown as any).rightCard.description}
          </p>
        </div>

        {/* Lower Actions Section */}
        <div className="space-y-4 pt-4">
          <div>
            {/* Outline Styled Dark Contrast Badge */}
            <span className="inline-block text-[13px] font-semibold text-[#FF4F00] bg-[#2a1710] border border-[#FF4F00] px-4 py-2 rounded-xl text-center">
              {(link.dropdown as any).rightCard.priceTag}
            </span>
          </div>
          
          {/* Outlined Action Link Trigger */}
          <Link
            href={(link.dropdown as any).rightCard.href}
            className="block w-full text-center text-[15px] font-medium text-white border border-stone-400 hover:border-white bg-transparent py-3.5 rounded-xl transition-colors duration-150"
          >
            Learn more
          </Link>
        </div>

      </div>
    )}
  </div>
)}

                        {/* CASE 4: Use Cases Layout */}
                        {link.menuType === "usecases-mega" && Array.isArray(link.dropdown) && (
                          <div className="grid grid-cols-2 gap-x-12 p-8 rounded-[24px] max-w-2xl text-left select-none">

                            {/* ── LEFT COLUMN: Market Research (Index 0) ── */}
                            {link.dropdown[0] && (
                              <div className="space-y-4">
                                <h4 className="text-stone-500 font-medium text-[13px] tracking-wide pl-1">
                                  {link.dropdown[0].section}
                                </h4>
                                <div className="flex flex-col gap-y-3">
                                  {link.dropdown[0].items.map((item: any, idx: number) => (
                                    <Link
                                      key={idx}
                                      href={item.href}
                                      className="flex items-center gap-4 p-1 rounded-xl transition-all group"
                                    >
                                      {/* White Soft-Shadow Icon Box */}
                                      <div className="w-18 h-18 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-[0_5px_14px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.15)] relative p-2.5 transition-transform duration-200 group-hover:scale-105">
                                        <Image
                                          src={item.icon}
                                          alt={item.label}
                                          width={24}
                                          height={24}
                                          className="object-contain w-full h-full"
                                          priority
                                        />
                                      </div>
                                      <span className="text-[15px] font-bold text-white tracking-wide">
                                        {item.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* ── RIGHT COLUMN: Split Sub-sections (Index 1 onwards) ── */}
                            <div className="flex flex-col gap-y-6">
                              {link.dropdown.slice(1).map((subSection: any, idx: number) => (
                                <div key={idx} className="space-y-3">
                                  <h4 className="text-stone-500 font-medium text-[13px] tracking-wide pl-1">
                                    {subSection.section}
                                  </h4>
                                  {subSection.items.map((item: any, iIdx: number) => (
                                    <Link
                                      key={iIdx}
                                      href={item.href}
                                      className="flex items-center gap-4 p-1 rounded-xl transition-all group"
                                    >
                                      {/* White Soft-Shadow Icon Box */}
                                      <div className="w-18 h-18 rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-[0_5px_14px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.15)] relative p-2.5 transition-transform duration-200 group-hover:scale-105">
                                        <Image
                                          src={item.icon}
                                          alt={item.label}
                                          width={24}
                                          height={24}
                                          className="object-contain w-full h-full"
                                          priority
                                        />
                                      </div>
                                      <span className="text-[15px] font-bold text-white tracking-wide">
                                        {item.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>

                          </div>
                        )}
                        {/* CASE 5: Resources Column Splits Layout */}
                        {link.menuType === "resources-mega" && !Array.isArray(link.dropdown) && (
                          <div className="grid grid-cols-12 gap-6">
                            {/* Left Side: Programs */}
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

                            {/* Right Side: Links with Images */}
                            <div className="col-span-5 space-y-4 border-l border-white/5 pl-5">
                              {(link.dropdown as any).rightSide.map((item: any, idx: number) => (
                                <div key={idx} className="space-y-2">
                                  {item.section && (
                                    <h5 className="text-[11px] uppercase font-semibold text-stone-500 tracking-wider mb-1">
                                      {item.section}
                                    </h5>
                                  )}
                                  <Link href={item.href} className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/[0.03] text-stone-200 hover:text-white group transition-all">

                                    {/* White or Gradient Canvas for Image/Icon */}
                                    <div className="w-18 h-18 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden relative p-2">
                                      {item.icon ? (
                                        <Image
                                          src={item.icon}
                                          alt={item.label}
                                          width={22}
                                          height={22}
                                          className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-150"
                                          priority
                                        />
                                      ) : (
                                        /* Fallback default SVG book icon if item.icon is missing */
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone-700">
                                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1H20v21H6.5A2.5 2.5 0 0 1 4 19.5z" />
                                        </svg>
                                      )}
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
                href="https://dashboard.torchproxies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 px-4 py-1.5 rounded-lg text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200 shadow-[0_0_16px_rgba(234,88,12,0.4)] whitespace-nowrap"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* ── Contact Us Button ──────────────────────────── */}
          <div className="hidden lg:flex items-center overflow-visible">
            <button
              onClick={() => setIsContactOpen(true)}
              className="
      group/navbtn relative overflow-hidden cursor-pointer
      w-[124px] h-[42px] rounded-xl font-semibold text-sm text-white
      border border-stone-800 bg-stone-900/50 hover:bg-stone-900 
      hover:border-stone-600 transition-all duration-200 ease-out
      hover:scale-[1.02] active:scale-[0.98]
    "
            >
              {isMounted ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover/navbtn:[transform:rotateX(-90deg)]">

                  {/* Default State Text (Visible Initially) */}
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(10px)] text-gray-200 whitespace-nowrap">
                    Contact Us
                  </span>

                  {/* Hover State Text (Rolls up cleanly from below) */}
                  <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(10px)] text-white whitespace-nowrap">
                    Contact Us
                  </span>

                </div>
              ) : (
                <span className="whitespace-nowrap">Contact Us</span>
              )}
            </button>
          </div>
          {/* ─── RENDER CONTACT MODAL SHELL CONDITIONALLY ─── */}
          <ContactSection
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)} // 👈 Closes the modal cleanly when '✕' is clicked
          />
          {/* <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
            </Link> */}


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
        <div className={`lg:hidden transition-all duration-300 overflow-hidden font-['Urbanist'] ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1 max-h-[85vh] overflow-y-auto font-['Urbanist']">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/[0.03] last:border-none pb-2 mb-2">
                <div className="text-stone-200 font-semibold text-xs tracking-wider px-3 py-2 uppercase opacity-60 font-['Urbanist']">
                  {link.label}
                </div>
                <div className="ml-2 space-y-0.5 font-['Urbanist']">
                  {link.menuType === "products-mega" && Array.isArray(link.dropdown) ? (
                    (link.dropdown as any[]).flatMap((s) => s.items).map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white font-['Urbanist']"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs font-bold text-orange-400 font-['Urbanist']">{item.price}</span>
                      </Link>
                    ))
                  ) : link.menuType === "locations-grid" && !Array.isArray(link.dropdown) ? (
                    (link.dropdown as any).countries.map((country: any) => (
                      <Link
                        key={country.href}
                        href={country.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white font-['Urbanist']"
                      >
                        <span>{country.name}</span>
                        <span className="text-xs opacity-50 font-['Urbanist']">{country.ips}</span>
                      </Link>
                    ))
                  ) : link.menuType === "usecases-mega" && Array.isArray(link.dropdown) ? (
                    (link.dropdown as any[]).flatMap((s) => s.items).map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white font-['Urbanist']"
                      >
                        {item.label}
                      </Link>
                    ))
                  ) : link.menuType === "reseller-mega" && !Array.isArray(link.dropdown) ? (
                    (link.dropdown as any).leftItems.map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white font-['Urbanist']"
                      >
                        {item.label}
                      </Link>
                    ))
                  ) : (
                    (!Array.isArray(link.dropdown) && (link.dropdown as any)?.rightSide) && (link.dropdown as any).rightSide.map((item: any) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-400 hover:text-white font-['Urbanist']"
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-2 border-t border-white/5 mt-2 font-['Urbanist']">
              <Link href="https://dashboard.torchproxies.com" className="px-4 py-3 text-sm font-semibold text-center text-white rounded-xl bg-orange-500 font-['Urbanist']">
                Dashboard
              </Link>
              <Link href="/contact" className="px-4 py-3 text-sm font-semibold text-center text-white rounded-xl border border-white/20 font-['Urbanist']">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
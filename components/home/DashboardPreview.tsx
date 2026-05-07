"use client";

import { m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Mini sidebar nav items ───────────────────────────────────
const SIDEBAR_ITEMS = [
  { icon: "⊞", label: "Dashboard", active: true },
  { icon: "◈", label: "Proxies", active: false },
  { icon: "↗", label: "Traffic", active: false },
  { icon: "⚙", label: "Settings", active: false },
];

// ── Stat cards ───────────────────────────────────────────────
const STATS = [
  { label: "Active Connections", value: "1,284", change: "+12%", up: true },
  { label: "Bandwidth Used",     value: "82.6 GB", change: "+5%",  up: true },
  { label: "Requests Today",     value: "428K",   change: "-2%",  up: false },
  { label: "Avg Latency",        value: "13.5ms", change: "-8%",  up: true  },
];

// ── Proxy rows ───────────────────────────────────────────────
const PROXY_ROWS = [
  { type: "Residential Proxy", location: "US · New York",   status: "Active",  speed: "Fast"   },
  { type: "ISP Proxy",         location: "UK · London",     status: "Active",  speed: "Fast"   },
  { type: "Datacenter Proxy",  location: "DE · Frankfurt",  status: "Idle",    speed: "Medium" },
  { type: "Mobile Proxy",      location: "JP · Tokyo",      status: "Active",  speed: "Fast"   },
];

// ── Chart bars (fake uptime data) ────────────────────────────
const CHART_BARS = [
  40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 92,
  78, 85, 90, 95, 88, 92, 96, 98, 94, 97, 95, 99,
];

export default function DashboardPreview() {
  return (
   <section className="relative bg-[#0a0a0a] py-16 sm:py-40 -mt-[280px] px-4 sm:px-6 overflow-hidden">

      {/* ── Background glow ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[400px] sm:w-[800px] h-[300px] sm:h-[500px]
                        bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section label ─────────────────────────────── */}
        <m.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center justify-center gap-2 mb-4"
        >
        </m.div>

        {/* ── Dashboard mockup ──────────────────────────── */}
        <m.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Outer glow frame */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b 
                          from-orange-500/20 via-white/5 to-transparent pointer-events-none" />

          {/* Dashboard window chrome */}
          <div className="relative bg-[#0f0f0f] border border-white/8 rounded-2xl 
                          overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

            {/* ── Window title bar ──────────────────────── */}
            <div className="flex items-center gap-2 px-4 py-3 
                            bg-[#141414] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 bg-white/5 border border-white/8 
                                rounded-md px-3 py-1 text-[10px] sm:text-xs text-stone-500">
                  <span>🔒</span>
                  <span>dashboard.torchproxies.com</span>
                </div>
              </div>
            </div>

            {/* ── Main dashboard layout ─────────────────── */}
            <div className="flex min-h-[320px] sm:min-h-[420px] md:min-h-[500px]">

              {/* Sidebar — hidden on very small, shown sm+ */}
              <div className="hidden sm:flex flex-col w-14 md:w-48 
                              bg-[#0c0c0c] border-r border-white/5 
                              py-4 flex-shrink-0">
                {/* Logo area */}
                <div className="flex items-center gap-2 px-3 mb-6">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-orange-500 rounded-lg 
                                  flex items-center justify-center flex-shrink-0
                                  shadow-[0_0_10px_rgba(234,88,12,0.5)]">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M6 0C6 0 3 3.5 3 6C3 7.7 4.3 9 6 9C7.7 9 9 7.7 9 6C9 3.5 6 0 6 0Z"
                            fill="white" opacity="0.9" />
                    </svg>
                  </div>
                  <span className="hidden md:block text-white text-xs font-bold tracking-tight">
                    Torch<span className="text-orange-500">Labs</span>
                  </span>
                </div>

                {/* Nav items */}
                <nav className="flex flex-col gap-1 px-2">
                  {SIDEBAR_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-2 py-2 rounded-lg cursor-pointer
                        transition-colors duration-150 group
                        ${item.active
                          ? "bg-orange-500/15 text-orange-400"
                          : "text-stone-600 hover:text-stone-400 hover:bg-white/4"
                        }`}
                    >
                      <span className="text-sm flex-shrink-0">{item.icon}</span>
                      <span className="hidden md:block text-xs font-medium truncate">
                        {item.label}
                      </span>
                      {item.active && (
                        <span className="hidden md:block ml-auto w-1 h-1 rounded-full bg-orange-500" />
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* ── Main content area ─────────────────── */}
              <div className="flex-1 overflow-hidden">

                {/* Top bar */}
                <div className="flex items-center justify-between 
                                px-3 sm:px-5 py-3 
                                border-b border-white/5 bg-[#0f0f0f]">
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">Dashboard</p>
                    <p className="text-stone-600 text-[10px] sm:text-xs">Welcome back 👋</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 
                                    rounded-full px-2 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400 text-[10px] font-medium hidden sm:block">
                        All systems online
                      </span>
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500/20 
                                    border border-orange-500/30 flex items-center justify-center">
                      <span className="text-orange-400 text-[10px] font-bold">T</span>
                    </div>
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="p-3 sm:p-4 md:p-5 space-y-4 overflow-auto 
                                max-h-[280px] sm:max-h-[380px] md:max-h-[440px]">

                  {/* ── Stat cards grid ─────────────────── */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-[#141414] border border-white/5 rounded-xl 
                                   p-2.5 sm:p-3 md:p-4"
                      >
                        <p className="text-stone-500 text-[9px] sm:text-[10px] mb-1.5 truncate">
                          {stat.label}
                        </p>
                        <p className="text-white text-sm sm:text-base md:text-lg font-bold">
                          {stat.value}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className={`text-[9px] sm:text-[10px] font-medium
                            ${stat.up ? "text-green-400" : "text-red-400"}`}>
                            {stat.change}
                          </span>
                          <span className="text-stone-600 text-[9px] hidden sm:block">
                            vs yesterday
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Chart ───────────────────────────── */}
                  <div className="bg-[#141414] border border-white/5 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-white text-xs font-semibold">Proxy Infrastructure</p>
                        <p className="text-stone-600 text-[10px] mt-0.5">Uptime last 30 days</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 
                                      rounded-full px-2 py-0.5">
                        <span className="w-1 h-1 rounded-full bg-green-500" />
                        <span className="text-green-400 text-[9px] font-medium">Operational</span>
                      </div>
                    </div>
                    {/* Bar chart */}
                    <div className="flex items-end gap-0.5 sm:gap-1 h-16 sm:h-20 md:h-24">
                      {CHART_BARS.map((h, i) => (
                        <m.div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            background: h > 85
                              ? "rgba(234,88,12,0.8)"
                              : h > 70
                              ? "rgba(234,88,12,0.4)"
                              : "rgba(234,88,12,0.2)",
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.02,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </div>
                    {/* X-axis labels */}
                    <div className="flex justify-between mt-2">
                      <span className="text-stone-700 text-[9px]">30 days ago</span>
                      <span className="text-stone-700 text-[9px]">99.9% uptime</span>
                      <span className="text-stone-700 text-[9px]">Today</span>
                    </div>
                  </div>

                  {/* ── Proxy table ─────────────────────── */}
                  <div className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 
                                    px-3 sm:px-4 py-2.5 border-b border-white/5">
                      <span className="text-stone-600 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium">
                        Type
                      </span>
                      <span className="text-stone-600 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium hidden sm:block">
                        Location
                      </span>
                      <span className="text-stone-600 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium">
                        Status
                      </span>
                      <span className="text-stone-600 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium">
                        Speed
                      </span>
                    </div>
                    {/* Table rows */}
                    {PROXY_ROWS.map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-3 sm:grid-cols-4 gap-2 
                                   px-3 sm:px-4 py-2.5 border-b border-white/5 
                                   last:border-0 hover:bg-white/[0.02] transition-colors"
                      >
                        <span className="text-white text-[10px] sm:text-xs font-medium truncate">
                          {row.type}
                        </span>
                        <span className="text-stone-500 text-[10px] sm:text-xs hidden sm:block truncate">
                          {row.location}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0
                            ${row.status === "Active" ? "bg-green-500" : "bg-stone-600"}`}
                          />
                          <span className={`text-[10px] sm:text-xs
                            ${row.status === "Active" ? "text-green-400" : "text-stone-500"}`}>
                            {row.status}
                          </span>
                        </div>
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 
                                           rounded bg-orange-500/10 text-orange-400 border 
                                           border-orange-500/20 whitespace-nowrap">
                            {row.speed}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Bottom reflection fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 
                          bg-gradient-to-t from-[#0a0a0a] to-transparent 
                          rounded-b-2xl pointer-events-none" />
        </m.div>

        {/* ── Bottom trust stats ────────────────────────── */}
        <m.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6 
                     max-w-lg sm:max-w-2xl mx-auto"
        >
          {/* {[
            { value: "99.9%",  label: "Uptime SLA"        },
            { value: "195+",   label: "Countries"          },
            { value: "100M+",  label: "Residential IPs"   },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1">
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))} */}
        </m.div>
      </div>
    </section>
  );
}
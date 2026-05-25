"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type ProxyStatus = "verifying" | "blocked" | "applied" | "queued";

// ── 1. SOCIAL MEDIA MOCKUP (Applying Proxies UI) ───────────────────
const TL_APPLY_ORDER: Array<{ id: string; initial: ProxyStatus; name: string; country: string; app: string; plan: string }> = [
  { id: "john", initial: "verifying", name: "John Doe", country: "Germany", app: "Instagram", plan: "Premium USA East Coast" },
  { id: "cho", initial: "blocked", name: "Cho Lee", country: "China", app: "TikTok", plan: "Premium USA West Coast" },
  { id: "amy", initial: "queued", name: "Amy Smith", country: "France", app: "Instagram", plan: "Premium USA Central" },
  { id: "liam", initial: "queued", name: "Liam Park", country: "Japan", app: "TikTok", plan: "Premium USA East Coast" },
  { id: "sofia", initial: "queued", name: "Sofia Nguyen", country: "Vietnam", app: "Instagram", plan: "Premium USA South" },
  { id: "marco", initial: "queued", name: "Marco Rossi", country: "Italy", app: "TikTok", plan: "Premium USA Central" },
  { id: "ava", initial: "queued", name: "Ava Patel", country: "India", app: "Instagram", plan: "Premium USA East Coast" },
  { id: "noah", initial: "queued", name: "Noah Kim", country: "South Korea", app: "TikTok", plan: "Premium USA West Coast" },
];

function SocialMediaMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statuses, setStatuses] = useState<Record<string, ProxyStatus>>(
    TL_APPLY_ORDER.reduce((acc, p) => ({ ...acc, [p.id]: p.initial }), {})
  );
  const [progressStage, setProgressStage] = useState("apply");
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timers = [];
    const currentPerson = TL_APPLY_ORDER[currentIndex];

    if (currentPerson.initial === "blocked" || currentPerson.initial === "queued") {
      setStatuses((prev) => ({ ...prev, [currentPerson.id]: currentPerson.initial }));
      setProgressStage("generate");

      timers.push(
        setTimeout(() => {
          setStatuses((prev) => ({ ...prev, [currentPerson.id]: "verifying" }));
          setProgressStage("apply");
        }, 700)
      );

      timers.push(
        setTimeout(() => {
          setStatuses((prev) => ({ ...prev, [currentPerson.id]: "applied" }));
          setProgressStage("connect");
        }, 1900)
      );
    } else {
      setStatuses((prev) => ({ ...prev, [currentPerson.id]: "verifying" }));
      setProgressStage("apply");

      timers.push(
        setTimeout(() => {
          setStatuses((prev) => ({ ...prev, [currentPerson.id]: "applied" }));
          setProgressStage("connect");
        }, 1200)
      );
    }

    timers.push(
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % TL_APPLY_ORDER.length;
          const nextPerson = TL_APPLY_ORDER[nextIndex];

          setStatuses((prev) => ({
            ...prev,
            [nextPerson.id]: nextPerson.initial === "verifying" ? "verifying" : nextPerson.initial,
          }));
          return nextIndex;
        });
      }, 2600)
    );

    return () => timers.forEach(clearTimeout);
  }, [currentIndex]);

  const getRowTranslation = () => {
    if (!rowRef.current) return 0;
    const row = rowRef.current.querySelector(".tl-applyproxies-row");
    if (!row) return 0;
    const styles = window.getComputedStyle(row);
    const marginBottom = parseFloat(styles.marginBottom || "0");
    const rowStep = row.clientHeight + marginBottom;
    return currentIndex * rowStep;
  };

  const getBadgeText = (status: "verifying" | "blocked" | "applied" | "queued") => {
    if (status === "verifying") return "Verifying";
    if (status === "blocked") return "Blocked";
    if (status === "applied") return "Applied";
    return "Queued";
  };

  return (
    <div className="tl-applyproxies-wrapper w-full h-full">
      <style>{`
        .tl-applyproxies-wrapper {
          --tl-applyproxies-box-bg: transparent;
          --tl-applyproxies-panel-bg: transparent;
          --tl-applyproxies-stroke: #1c1c1c;
          --tl-applyproxies-line: #2a2a2a;
          --tl-applyproxies-text: #ffffff;
          --tl-applyproxies-muted: #858697;
          --tl-applyproxies-accent: #fe4a01;
          --tl-applyproxies-title-size: 14px;
          --tl-applyproxies-pill-size: 11px;
          --tl-applyproxies-name-size: 12px;
          --tl-applyproxies-meta-size: 10.5px;
          --tl-applyproxies-badge-size: 11px;
          --tl-applyproxies-label-size: 10px;
          --tl-applyproxies-ring-size: 14px;
          font-family: Inter, system-ui, -apple-system, sans-serif;
        }
        .tl-applyproxies-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
        .tl-applyproxies-inner { padding: 12px; display: grid; gap: 10px; color: var(--tl-applyproxies-text); height: 100%; justify-content: stretch; }
        .tl-applyproxies-header-chip { height: 30px; padding: 5px 8px; border: 1px solid var(--tl-applyproxies-stroke); border-radius: 10px; background: #0b0b0b; display: flex; align-items: center; justify-content: space-between; }
        .tl-applyproxies-title { font-size: var(--tl-applyproxies-title-size); font-weight: 700; color: var(--tl-applyproxies-accent); }
        .tl-applyproxies-ring { width: var(--tl-applyproxies-ring-size); height: var(--tl-applyproxies-ring-size); border-radius: 50%; background: radial-gradient(closest-side, #0b0b0b 74%, transparent 76% 100%), conic-gradient(var(--tl-applyproxies-accent) 26%, rgba(255, 255, 255, 0.1) 0); mask: radial-gradient(closest-side, transparent 62%, #000 63%); animation: tl-applyproxies-spin 1.1s linear infinite; }
        @keyframes tl-applyproxies-spin { to { transform: rotate(360deg); } }
        .tl-applyproxies-pills { display: flex; gap: 6px; }
        .tl-applyproxies-pill { padding: 4px 10px; font-size: var(--tl-applyproxies-pill-size); color: #fff; background: #0b0b0b; border: 1px solid var(--tl-applyproxies-stroke); border-radius: 999px; line-height: 1; cursor: pointer; }
        .tl-applyproxies-rows-window { height: 56px; overflow: hidden; border-radius: 12px; }
        .tl-applyproxies-rows-list { transition: transform 0.45s ease; will-change: transform; }
        .tl-applyproxies-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; background: #0b0b0b; border: 1px solid var(--tl-applyproxies-stroke); border-radius: 12px; padding: 8px; margin-bottom: 6px; }
        .tl-applyproxies-left { display: flex; gap: 8px; align-items: center; min-width: 0; flex: 1 1 auto; }
        .tl-applyproxies-avatar { width: 18px; height: 18px; border-radius: 50%; border: 1px solid var(--tl-applyproxies-stroke); background: radial-gradient(circle at 50% 50%, #fff 42%, transparent 43%), radial-gradient(circle at 36% 36%, #fff 6%, transparent 7%), #0b0b0b; flex: 0 0 auto; }
        .tl-applyproxies-info { min-width: 0; }
        .tl-applyproxies-name { font-size: var(--tl-applyproxies-name-size); font-weight: 700; color: #fff; line-height: 1.1; }
        .tl-applyproxies-meta { font-size: var(--tl-applyproxies-meta-size); color: var(--tl-applyproxies-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .tl-applyproxies-meta .tl-applyproxies-sep { font-style: normal; padding: 0 6px; color: #5c5c66; }
        .tl-applyproxies-badge { font-size: var(--tl-applyproxies-badge-size); padding: 5px 10px; line-height: 1; border-radius: 999px; border: 1px solid var(--tl-applyproxies-stroke); background: #0b0b0b; color: var(--tl-applyproxies-muted); max-width: 92px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .tl-applyproxies-badge-accent { color: var(--tl-applyproxies-accent); border-color: rgba(254, 74, 1, 0.3); }
        .tl-applyproxies-steps { margin-top: auto; }
        .tl-applyproxies-rail { position: relative; height: 16px; display: flex; align-items: center; margin: 0 2px 2px; }
        .tl-applyproxies-rail::before { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 2px; transform: translateY(-50%); background: var(--tl-applyproxies-line); border-radius: 2px; }
        .tl-applyproxies-fill { position: absolute; left: 0; top: 50%; transform: translateY(-50%); height: 2px; background: var(--tl-applyproxies-accent); border-radius: 2px; box-shadow: 0 0 6px rgba(254, 74, 1, 0.45); transition: width 0.4s ease; }
        .tl-applyproxies-dot { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 9px; height: 9px; border-radius: 50%; background: #2b2b2b; border: 1px solid var(--tl-applyproxies-stroke); box-shadow: 0 0 0 2px #0b0b0b inset; transition: background 0.3s ease; }
        .tl-applyproxies-dot-filled { background: var(--tl-applyproxies-accent); border-color: transparent; box-shadow: 0 0 8px rgba(254, 74, 1, 0.65), 0 0 0 2px #0b0b0b inset; }
        .tl-applyproxies-labels { display: flex; justify-content: space-between; padding: 0 2px; font-size: var(--tl-applyproxies-label-size); color: var(--tl-applyproxies-muted); }
      `}</style>

      <div className="tl-applyproxies-inner">
        <div className="tl-applyproxies-header-chip">
          <span className="tl-applyproxies-title">Applying proxies</span>
          <span className="tl-applyproxies-ring" aria-hidden="true"></span>
        </div>

        <div className="tl-applyproxies-pills">
          <button className="tl-applyproxies-pill">Instagram</button>
          <button className="tl-applyproxies-pill">TikTok</button>
        </div>

        <div className="tl-applyproxies-rows-window">
          <div
            className="tl-applyproxies-rows-list"
            ref={rowRef}
            style={{ transform: `translateY(-${getRowTranslation()}px)` }}
          >
            {TL_APPLY_ORDER.map((person) => {
              const currentStatus = statuses[person.id];
              const isAccent = currentStatus === "verifying" || currentStatus === "applied";
              return (
                <div key={person.id} className="tl-applyproxies-row">
                  <div className="tl-applyproxies-left">
                    <div className="tl-applyproxies-avatar"></div>
                    <div className="tl-applyproxies-info">
                      <div className="tl-applyproxies-name">{person.name}</div>
                      <div className="tl-applyproxies-meta">
                        {person.country} <i className="tl-applyproxies-sep">|</i>
                        {person.app} <i className="tl-applyproxies-sep">|</i>
                        {person.plan}
                      </div>
                    </div>
                  </div>
                  <div className={`tl-applyproxies-badge ${isAccent ? "tl-applyproxies-badge-accent" : ""}`}>
                    {getBadgeText(currentStatus)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="tl-applyproxies-steps">
          <div className="tl-applyproxies-rail">
            <span
              className="tl-applyproxies-fill"
              style={{ width: progressStage === "generate" ? "0%" : progressStage === "apply" ? "50%" : "100%" }}
            ></span>
            <span className="tl-applyproxies-dot tl-applyproxies-dot-filled" style={{ left: "0%" }}></span>
            <span
              className={`tl-applyproxies-dot ${progressStage === "apply" || progressStage === "connect" ? "tl-applyproxies-dot-filled" : ""}`}
              style={{ left: "50%" }}
            ></span>
            <span
              className={`tl-applyproxies-dot ${progressStage === "connect" ? "tl-applyproxies-dot-filled" : ""}`}
              style={{ left: "100%" }}
            ></span>
          </div>
          <div className="tl-applyproxies-labels">
            <span>Generate</span>
            <span>Apply</span>
            <span>Connect</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. WEB SCRAPING MOCKUP (Proxy Flow Scraper) ────────────────────
const BROWSER_ICONS = [
  { id: "chrome", path: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/chrome/chrome.svg" },
  { id: "firefox", path: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/firefox/firefox.svg" },
  { id: "edge", path: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/edge/edge.svg" },
  { id: "brave", path: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/brave/brave.svg" },
  { id: "safari", path: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.4.0/safari/safari.svg" }
];

function WebScrapingMockup() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % BROWSER_ICONS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="proxy-flow-wrapper w-full h-full relative p-5">
      <style>{`
        .proxy-flow-wrapper * { box-sizing: border-box; }
        .node {
          position: absolute;
          width: 84px;
          height: 84px;
          border-radius: 20px;
          background: #0b0b0b;
          border: 1px solid #1C1C1C;
          display: grid;
          place-items: center;
        }
        .node-left { left: 16px; top: 50px; }
        .node-right { right: 16px; top: 50px; }
        .node::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          box-shadow: 0 0 0 1px rgba(255,106,26,0.08) inset;
          pointer-events: none;
        }
        .lines {
          position: absolute;
          left: 100px;
          right: 100px;
          top: 0;
          bottom: 0;
          pointer-events: none;
        }
        .line {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: #2A2A2A;
        }
        .line:nth-child(1) { top: 70px; }
        .line:nth-child(2) { top: 92px; }
        .line:nth-child(3) { top: 114px; }
        .pulse {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #FF6A1A;
          box-shadow: 0 0 15px rgba(255,106,26,0.8), 0 0 30px rgba(255,106,26,0.4);
          animation: travel 2s cubic-bezier(.22,.61,.36,1) infinite;
        }
        .line:nth-child(2) .pulse { animation-delay: .2s; }
        .line:nth-child(3) .pulse { animation-delay: .4s; }
        @keyframes travel {
          0% { left: 0%; opacity: 0; filter: blur(1px); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; filter: blur(1px); }
        }
        .icon-wrap {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
        }
        .flame-svg {
          width: 44px;
          height: 44px;
          fill: #FF6A1A;
          filter: drop-shadow(0 0 20px rgba(255,106,26,0.8)) drop-shadow(0 0 36px rgba(255,106,26,0.4));
          animation: flicker 1.3s infinite ease-in-out alternate;
        }
        @keyframes flicker {
          0% { transform: scale(1) rotate(-1deg); opacity: 0.95; }
          50% { transform: scale(1.05) rotate(1deg); opacity: 1; }
          100% { transform: scale(0.98) rotate(-1deg); opacity: 0.95; }
        }
        .icon-stack {
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
        }
        .browser-icon-img {
          position: absolute;
          width: 44px;
          height: 44px;
          opacity: 0;
          transform: scale(0.9) rotate(-2deg);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .browser-icon-img.active {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
      `}</style>
      <div className="node node-left">
        <div className="icon-wrap">
          <svg className="flame-svg" viewBox="0 0 24 24">
            <path d="M12 2S9.38 5.61 9.38 8.46c0 1.7.97 3.32 2.62 4.11 1.65-.79 2.62-2.41 2.62-4.11C14.62 5.61 12 2 12 2zm1 14.18c2.28-.56 4-2.46 4-4.82 0-3.32-3-5.36-3-5.36s-.74 1.33-1.63 2.94c-.7 1.27-1.37 2.76-1.37 4.15 0 2.36 1.72 4.26 4 4.82zM12 22c4.42 0 8-3.58 8-8 0-3.69-2.5-6.8-5.88-7.75C13.44 8.44 12 10.22 12 12c0 1.93 1.57 3.5 3.5 3.5S19 13.93 19 12c0-.39-.07-.77-.18-1.12C19.54 11.83 20 12.86 20 14c0 4.41-3.59 8-8 8s-8-3.59-8-8c0-2.44 1.1-4.63 2.83-6.13C6.31 9.07 6 10.5 6 12c0 4.42 3.58 8 8 8z" />
          </svg>
        </div>
      </div>

      <div className="lines">
        <div className="line"><span className="pulse"></span></div>
        <div className="line"><span className="pulse"></span></div>
        <div className="line"><span className="pulse"></span></div>
      </div>

      <div className="node node-right">
        <div className="icon-stack">
          {BROWSER_ICONS.map((browser, k) => (
            <img
              key={browser.id}
              src={browser.path}
              alt={browser.id}
              className={`browser-icon-img ${k === activeIdx ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 3. GAMING MOCKUP (Original Network Testing Panel) ──────────────
function GamingMockup() {
  const servers = [
    { name: "US-East", ping: 12, status: "optimal" },
    { name: "EU-West", ping: 28, status: "optimal" },
    { name: "Asia-SEA", ping: 45, status: "good" },
    { name: "US-West", ping: 18, status: "optimal" },
  ];
  const [pings, setPings] = useState(servers.map((s) => s.ping));

  useEffect(() => {
    const t = setInterval(() => {
      setPings(servers.map((s) => s.ping + Math.floor(Math.random() * 6 - 3)));
    }, 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5 p-4 bg-[#0b0b0b]">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-stone-400 font-mono tracking-wider">PROXY NETWORK — GAMING MODE</span>
      </div>
      {servers.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-16 text-[10px] text-stone-400 font-mono">{s.name}</div>
          <div className="flex-1 bg-white/5 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700
                ${pings[i] < 20 ? "bg-green-500" : pings[i] < 40 ? "bg-orange-400" : "bg-yellow-500"}`}
              style={{ width: `${Math.max(20, 100 - pings[i] * 1.5)}%` }}
            />
          </div>
          <div className={`text-[10px] font-mono w-10 text-right
            ${pings[i] < 20 ? "text-green-400" : pings[i] < 40 ? "text-orange-400" : "text-yellow-400"}`}>
            {pings[i]}ms
          </div>
        </div>
      ))}
      <div className="mt-1 bg-white/3 rounded-lg border border-white/5 px-2.5 py-2 flex items-center justify-between">
        <span className="text-[10px] text-stone-500">Avg latency</span>
        <span className="text-[10px] font-bold text-green-400">
          {Math.round(pings.reduce((a, b) => a + b, 0) / pings.length)}ms
        </span>
      </div>
    </div>
  );
}

// ── 4. ONLINE MARKET PLACE MOCKUP (Stream Aggregator) ─────────────
const MARKETPLACES = ["Amazon", "HomeDepot", "Popmart", "Vinted", "ASOS", "Ebay", "Alibaba", "Etsy"];

function MarketplaceMockup() {
  const rows = 3;
  const stepDelay = 2.2;

  return (
    <div className="mpg-wrapper w-full h-full">
      <style>{`
        :root {
          --mpg-orange: #fe4a01;
          --mpg-text: #f7f7f7;
        }
        .mpg-card {
          width: 100%;
          height: 100%;
          background: transparent;
          padding: 8px 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        .mpg-card * { box-sizing: border-box; }
        .mpg-header-pill {
          margin: 0 0 6px;
          padding: 4px 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff7f32, #fe4a01);
          color: #fff;
          font-weight: 600;
          font-size: 10px;
          text-align: center;
          width: fit-content;
        }
        .mpg-stage {
          position: relative;
          flex: 1;
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          background: radial-gradient(circle at center, #0a0a0a 0%, #000000 70%);
        }
        .mpg-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 0);
          background-size: 30px 30px;
          opacity: 0.35;
          pointer-events: none;
        }
        .mpg-center-line {
          position: absolute;
          top: 22%;
          bottom: 22%;
          left: 50%;
          width: 5px;
          margin-left: -2.5px;
          border-radius: 999px;
          background: var(--mpg-orange);
          box-shadow: 0 0 20px rgba(254, 74, 1, 0.95);
          z-index: 2;
        }
        .mpg-top-plane { position: absolute; top: 22%; left: 0; right: 0; height: 0; pointer-events: none; }
        .mpg-top-plane::before, .mpg-top-plane::after {
          content: ""; position: absolute; top: 0; height: 2px; width: 52%;
          background: var(--mpg-orange); box-shadow: 0 0 12px rgba(254, 74, 1, 0.7);
        }
        .mpg-top-plane::before { left: 50%; transform-origin: left center; transform: rotateZ(-4deg); }
        .mpg-top-plane::after { right: 50%; transform-origin: right center; transform: rotateZ(4deg); }
        
        .mpg-bottom-plane { position: absolute; bottom: 22%; left: 0; right: 0; height: 0; pointer-events: none; }
        .mpg-bottom-plane::before, .mpg-bottom-plane::after {
          content: ""; position: absolute; bottom: 0; height: 2px; width: 52%;
          background: var(--mpg-orange); box-shadow: 0 0 12px rgba(254, 74, 1, 0.7);
        }
        .mpg-bottom-plane::before { left: 50%; transform-origin: left center; transform: rotateZ(4deg); }
        .mpg-bottom-plane::after { right: 50%; transform-origin: right center; transform: rotateZ(-4deg); }

        .mpg-left-stream, .mpg-right-stream {
          position: absolute; top: 10%; bottom: 10%; left: 0; right: 0; z-index: 3; pointer-events: none;
        }
        .mpg-chip {
          position: absolute; left: -10%; padding: 3px 12px; border-radius: 999px;
          background: radial-gradient(circle at top, #2a2d35, #151820);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.85); color: var(--mpg-text);
          font-size: 8px; font-weight: 500; white-space: nowrap; letter-spacing: 0.02em;
          opacity: 0; transform: translateX(-100%);
          animation: mpg-chipToCenter 9s linear infinite;
        }
        .mpg-chip[data-row="0"] { top: 34%; }
        .mpg-chip[data-row="1"] { top: 50%; transform: translateX(-100%) translateX(-4px); }
        .mpg-chip[data-row="2"] { top: 66%; transform: translateX(-100%) translateX(-8px); }

        .mpg-file {
          position: absolute; top: 52%; left: 50%; width: 34px; height: 28px; border-radius: 8px;
          background: linear-gradient(180deg, #ffab59, #fe4a01); box-shadow: 0 8px 14px rgba(0, 0, 0, 0.85);
          transform: translate(-50%, -50%) scale(0.9); opacity: 0;
          animation: mpg-fileToRight 9s linear infinite;
        }
        .mpg-file::before {
          content: ""; position: absolute; left: 5px; right: 5px; top: -5px; height: 15px;
          border-radius: 5px; background: linear-gradient(180deg, #ffffff, #f1f1f1);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
        }
        .mpg-file::after {
          content: ""; position: absolute; left: 0; top: 4px; height: 11px; width: 60%;
          border-radius: 8px 6px 0 0; background: linear-gradient(180deg, #ffb66e, #ff7f32);
        }

        @keyframes mpg-chipToCenter {
          0% { left: -10%; opacity: 0; }
          25% { opacity: 1; }
          49% { left: 49%; opacity: 1; }
          50% { left: 49%; opacity: 0; }
          100% { left: 49%; opacity: 0; }
        }
        @keyframes mpg-fileToRight {
          0% { left: 50%; transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
          49% { left: 50%; transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
          50% { left: 50%; transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
          90% { left: 120%; transform: translate(-50%, -50%) scale(0.7); opacity: 1; }
          100% { left: 135%; transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
        }
      `}</style>
      <div className="mpg-card">
        <div className="mpg-header-pill">Get Scraped Data</div>
        <div className="mpg-stage">
          <div className="mpg-center-line"></div>
          <div className="mpg-top-plane"></div>
          <div className="mpg-bottom-plane"></div>

          <div className="mpg-left-stream">
            {MARKETPLACES.map((name, index) => (
              <div
                key={`chip-${index}`}
                className="mpg-chip"
                data-row={index % rows}
                style={{ animationDelay: `${index * stepDelay}s` }}
              >
                {name}
              </div>
            ))}
          </div>

          <div className="mpg-right-stream">
            {MARKETPLACES.map((_, index) => (
              <div
                key={`file-${index}`}
                className="mpg-file"
                style={{ animationDelay: `${index * stepDelay}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 5. SNEAKER WEBSITES MOCKUP (Hype Release Tracking) ─────────────
const SNEAKER_ITEMS = [
  { id: 1, type: "lobster", name: "Nike SB Dunk Low Orange Lobster", size: "US 10.5", price: "$350", status: "success" },
  { id: 2, type: "travis", name: "Jordan 1 Retro Low OG Travis Scott", size: "US 9", price: "$620", status: "failed" },
  { id: 3, type: "lobster", name: "Nike SB Dunk Low Orange Lobster", size: "US 11", price: "$350", status: "success" },
  { id: 4, type: "travis", name: "Jordan 1 Retro Low OG Travis Scott", size: "US 10", price: "$620", status: "success" }
];

function SneakerMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SNEAKER_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getTranslation = () => {
    if (!listRef.current) return 0;
    const item = listRef.current.querySelector<HTMLDivElement>(".sb-item");
    if (!item) return 0;
    const styles = window.getComputedStyle(item);
    const gap = 10;
    return currentIndex * (item.clientHeight + gap);
  };

  return (
    <div className="sb-outer-card w-full h-full p-3 bg-[#0b0b0b]">
      <style>{`
        :root {
          --sb-orange: #fe4a01;
          --sb-bg-inner: transparent;
          --sb-bg-row: #101012;
          --sb-text-main: #f5f5f7;
          --sb-text-muted: #8e8f99;
          --sb-green: #3be69b;
          --sb-red: #ff4e6a;
        }
        .sb-outer-card * { box-sizing: border-box; }
        .sb-inner-card { background: var(--sb-bg-inner); border-radius: 10px; height: 100%; display: flex; flex-direction: column; }
        .sb-tabs { display: flex; gap: 8px; border-radius: 12px; padding: 4px; margin-bottom: 12px; background: #060607; border: 1px solid #18181d; }
        .sb-tab { padding: 6px 12px; background: transparent; border: none; font-size: 11px; color: var(--sb-text-muted); border-radius: 8px; font-weight: 500; }
        .sb-tab--active { background: #141418; color: var(--sb-text-main) !important; }
        .sb-tabs .sb-tab:nth-child(2) { color: var(--sb-orange); }
        .sb-list-window { height: 96px; overflow: hidden; position: relative; width: 100%; }
        .sb-list { display: flex; flex-direction: column; gap: 10px; position: absolute; width: 100%; top: 0; left: 0; transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform; }
        .sb-item { display: grid; grid-template-columns: auto 1fr auto; gap: 10px; background: var(--sb-bg-row); border-radius: 12px; border: 1px solid #19191f; padding: 6px 12px; min-height: 48px; align-items: center; }
        .sb-thumb { width: 56px; height: 34px; border-radius: 8px; background: #f3f3f5; display: flex; justify-content: center; align-items: center; overflow: hidden; position: relative; }
        .sb-shoe { position: relative; width: 38px; height: 14px; }
        .sb-shoe::before { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 6px; background: #15151c; border-radius: 12px 12px 8px 8px; }
        .sb-shoe::after { content: ""; position: absolute; bottom: 4px; left: 3px; width: 28px; height: 9px; background: #f3f3f6; border-radius: 10px 14px 4px 8px; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.25); }
        .sb-shoe--lobster::after { background: linear-gradient(90deg, #ff9152 0%, #fe4a01 100%); }
        .sb-shoe--travis::after { background: linear-gradient(90deg, #1c1c24 30%, #a4917d 100%); }
        .sb-details { display: flex; flex-direction: column; min-width: 0; }
        .sb-name { font-size: 11px; font-weight: 600; color: var(--sb-text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .sb-meta { font-size: 9px; color: var(--sb-text-muted); margin-top: 1px; }
        .sb-status { font-size: 10px; font-weight: 700; text-align: right; }
        .sb-status--success { color: var(--sb-green); }
        .sb-status--failed { color: var(--sb-red); }
      `}</style>

      <div className="sb-inner-card">
        <div className="sb-tabs">
          <button className="sb-tab">Profiles</button>
          <button className="sb-tab sb-tab--active">Tasks (Active)</button>
          <button className="sb-tab">Proxies</button>
        </div>

        <div className="sb-list-window">
          <div
            className="sb-list"
            ref={listRef}
            style={{ transform: `translateY(-${getTranslation()}px)` }}
          >
            {SNEAKER_ITEMS.map((item) => (
              <div key={item.id} className="sb-item">
                <div className="sb-thumb">
                  <div className={`sb-shoe sb-shoe--${item.type}`}></div>
                </div>
                <div className="sb-details">
                  <span className="sb-name">{item.name}</span>
                  <span className="sb-meta">{item.size} • {item.price}</span>
                </div>
                <div className={`sb-status sb-status--${item.status}`}>
                  {item.status === "success" ? "Checkout Success" : "Retrying... (403)"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN LAYOUT ARCHITECTURE ───────────────────────────────────────
const useCases = [
  {
    title: "Social Media",
    description: "Manage multiple profiles with ease while staying secure across all major social platforms.",
    mockup: <SocialMediaMockup />,
  },
  {
    title: "Web Scraping",
    description: "Collect large amounts of reliable data without detection, ensuring smooth research processes.",
    mockup: <WebScrapingMockup />,
  },
  {
    title: "Gaming",
    description: "Improve connection speed and stability for seamless online matches with lower latency worldwide.",
    mockup: (
      <Image
        src="/images/Gaming.png"
        alt="Gaming proxy latency overview"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    ),
  },
  {
    title: "Online Market Place",
    description: "Track competitor pricing, stock changes and customer trends efficiently on major ecommerce platforms.",
    mockup: <MarketplaceMockup />,
  },
  {
    title: "Sneaker Websites",
    description: "Boost your chances of checking out limited releases on high-demand sneaker store sites.",
    mockup: <SneakerMockup />,
  },
];

const UseCasesSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6">
      <div className="text-center mb-16">
        <span className="text-[#FE4A01] text-xs font-medium tracking-wider block mb-3">
          Use cases
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4">
          Where our proxies can help
        </h2>
        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-normal">

          Use our Residential & ISP proxies for your every online need
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] border border-gray-800 rounded-[32px] p-8 flex flex-col
                       transition-all hover:border-orange-500/30 group"
          >
            {/* Animated Mockup Container */}
            <div className="bg-[#111] rounded-2xl border border-gray-800 h-48 mb-8
                            overflow-hidden relative flex items-center justify-center">
              {useCase.mockup}
            </div>

            <h3 className="text-2xl font-medium mb-4">{useCase.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {useCase.description}
            </p>
          </div>
        ))}

        {/* Final Panel Placeholder */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-[32px] p-10
                        flex flex-col justify-center">
          <h3 className="text-2xl font-medium mb-6">Explore other Use Cases</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-30">
            From streaming and market research to SEO, ad verification and travel
            data gathering. Whatever your use case, we have you covered.
          </p>
          <button className="self-start px-20 py-3 bg-transparent text-white rounded-xl font-medium border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300">
            View other use cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
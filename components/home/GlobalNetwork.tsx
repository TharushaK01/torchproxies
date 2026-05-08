"use client";

import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import CountUp from 'react-countup';
import { Tooltip } from 'react-tooltip';

// Using a more stable CDN for the map data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryProxyData: Record<string, string> = {
  "Kazakhstan": "(10,000+ IPs)",
  "United States of America": "(4M+ IPs)",
  "United Kingdom": "(1.5M+ IPs)",
  "Germany": "(1.4M+ IPs)",
};

const GlobalNetwork = () => {
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState("");

  // Fix for Next.js Hydration: Only render map after component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[600px] bg-black" />;

  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 relative min-h-[800px]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Strong global IP network
      </h2>

      <div className="max-w-7xl mx-auto relative h-[500px]">
        {/* Important: Set width/height on the container */}
        <div className="w-full h-full">
          <ComposableMap 
            projectionConfig={{ scale: 140 }} 
            width={800} 
            height={400}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const isHoveredSpecific = countryProxyData[countryName];
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const countText = isHoveredSpecific || "Detecting IPs...";
                        setContent(`${countryName}: ${countText}`);
                      }}
                      onMouseLeave={() => setContent("")}
                      data-tooltip-id="map-tooltip"
                      data-tooltip-content={content}
                      style={{
                        default: { fill: "#1a1a1a", outline: "none", stroke: "#333", strokeWidth: 0.5 },
                        hover: { fill: "#ff45001a", outline: "none", stroke: "#ff4500", strokeWidth: 1.5 },
                        pressed: { fill: "#ff4500", outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        <Tooltip id="map-tooltip" className="z-50 !bg-black !border !border-gray-800" />

        {/* Stats Section */}
        <div className="absolute bottom-0 left-0 space-y-8">
            <div>
                <div className="text-orange-500 text-6xl font-bold">
                    <CountUp end={100000000} separator="'" duration={3} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">Proxies</p>
            </div>
            <div>
                <div className="text-orange-500 text-6xl font-bold">
                    <CountUp end={190} suffix="+" duration={3} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">Countries around the globe</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
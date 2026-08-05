'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';

// Load Urbanist font from Google Fonts
const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
});

// Sample testimonials for the carousel
const reviews = [
  {
    id: 1,
    name: 'Henry Paul',
    title: 'Clean and reliable provider',
    content:
      'Had a great experience with them. Firstly, their proxies are of high quality. They are stable, don\'t change ip frequently, perfect for webscraping. Also, they have very low score on scamalytics, and ip2location making them ideal for geo-restricted content. Proxies are fast too, response time is <0.5 sec in my case.',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    title: 'Outstanding customer support & performance',
    content:
      'The speed and uptime are unmatched. Any time we had a question, their support team resolved it within minutes. Highly recommended for heavy automated workloads.',
  },
  {
    id: 3,
    name: 'Alex Rivera',
    title: 'Best proxy solution for scrapers',
    content:
      'Switched from another major provider and saved 40% while getting noticeably faster response times and far fewer blocked requests.',
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'Top-tier stability',
    content:
      'Extremely consistent IP pools and minimal dropouts. Has significantly streamlined our data pipeline with zero headaches.',
  },
];

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={`${urbanist.className} min-h-screen bg-[#050507] text-white flex flex-col items-center justify-center p-4 md:p-10 font-['Urbanist'] mt-[50px]`}>
      
      {/* Top Trustpilot Rating Badge */}
      <div className="mb-8 mt-12 md:mt-0">
        <a href="https://www.trustpilot.com/review/torchlabs.xyz" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/TrustPiolet.png"
            alt="Excellent 5-star rating on Trustpilot"
            width={200}
            height={50}
            priority
          />
        </a>
      </div>

      {/* Main Header */}
      <h1 className="text-[60px] md:text-5xl font-regular tracking-tight text-center mb-2 font-['Urbanist']">
        Get in touch
      </h1>
      <p className="text-gray-200 text-center mb-10 text-[24px] md:text-lg">
        Have a question about Torch Proxies?
      </p>

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-[#0b0c10] border border-[#1f222a] rounded-2xl p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl font-['Urbanist']">
        
        {/* LEFT COLUMN - Hero / Proof Section */}
        <div className="lg:col-span-5 rounded-xl bg-gradient-to-br from-[#c33800] via-[#5c1c02] to-[#120d18] p-6 md:p-8 flex flex-col justify-between border border-[#301c13] relative overflow-hidden min-h-[550px]">
          
          {/* Top Headline */}
          <div>
            <h2 className="text-[43px] md:text-4xl font-semibold leading-tight mb-8 text-white text-center">
              Join 3500 + Satisfied Customer Today!
            </h2>

            {/* Client Logos Area */}
            <div className="mb-8 flex justify-center">
              {/* If you have a single image containing all logos: */}
              <Image 
                src="/images/client-logos.png" // Replace with your local image path
                alt="Client Logos" 
                width={320} 
                height={80} 
                className="h-auto object-contain max-w-[280px]"
              />
              
              {/* Alternate fallback SVG / text layout if image isn't available: */}
              {/* 
              <div className="grid grid-cols-2 gap-4 items-center opacity-90 text-sm font-semibold tracking-wider">
                <div>L&apos;ORÉAL PARIS</div>
                <div>McGill UNIVERSITY</div>
                <div>descript</div>
                <div>ramp</div>
              </div> 
              */}
            </div>
          </div>

          {/* Bottom Review Carousel */}
          <div className="w-full">
            {/* Review Card */}
            <div className="bg-[#0f1115]/90 backdrop-blur-md rounded-xl p-5 border border-[#222630] text-sm shadow-xl min-h-[220px] flex flex-col justify-between transition-all duration-300">
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#f84d00] flex items-center justify-center font-bold text-xs">
                      {reviews[currentSlide].name.charAt(0)}
                    </div>
                    <span className="font-semibold text-white">
                      {reviews[currentSlide].name}
                    </span>
                  </div>

                  {/* Trustpilot Mini Rating */}
                  <div className="flex items-center">
                    <Image
                      src="/images/TrustPiolet.png"
                      alt="Trustpilot Logo"
                      width={155}
                      height={18}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Review Content */}
                <h3 className="font-semibold text-white mb-1.5">
                  &ldquo;{reviews[currentSlide].title}&rdquo;
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed line-clamp-5">
                  {reviews[currentSlide].content}
                </p>
              </div>
            </div>

            {/* Carousel Navigation Indicators */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-6 bg-white' : 'w-2 bg-gray-600/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <div className="lg:col-span-7 p-2 md:p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-regular text-white mb-1">
            Get in touch with our experts.
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Complete this form to speak with the TorchProxies sales team.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name Input */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#16181e] border border-[#232731] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f84d00] transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full bg-[#16181e] border border-[#232731] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f84d00] transition-colors"
              />
            </div>

            {/* Expected traffic volumes Input */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Expected traffic volumes<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#16181e] border border-[#232731] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f84d00] transition-colors"
              />
            </div>

            {/* Your message Textarea */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Your message
              </label>
              <p className="text-[11px] text-gray-500 mb-1.5">
                Please add any details that might help us with understanding your use case so we can assist you better
              </p>
              <textarea
                rows={4}
                className="w-full bg-[#16181e] border border-[#232731] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f84d00] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-[#ff4500] to-[#f84d00] hover:from-[#e03d00] hover:to-[#e03d00] text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-orange-950/30 transition-all duration-200 active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
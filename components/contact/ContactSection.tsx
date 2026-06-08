"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";

interface ContactSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSection = ({ isOpen, onClose }: ContactSectionProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-all duration-300">
      
      <section className="relative overflow-hidden w-full max-w-5xl bg-[#0a0a0a] border border-stone-900 text-white rounded-[32px] p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Background Image Accent */}
        <div className="absolute inset-x-0 bottom-0 h-[250px] z-0 pointer-events-none select-none">
          <Image
            src="/images/contact-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-bottom opacity-40"
          />
        </div>

        {/* Close Toggle Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 text-stone-500 hover:text-stone-200 transition-colors cursor-pointer text-xl w-8 h-8 flex items-center justify-center rounded-full bg-stone-900/50"
        >
          ✕
        </button>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-orange-500 font-medium text-sm tracking-wider block mb-1">
                CONTACT US
              </span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                Get in touch
              </h2>
            </div>
            <p className="text-stone-400 text-base leading-relaxed max-w-sm">
              Have a question about Torch Proxies? Get in touch with our experts to learn how we can help.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-sm text-stone-300">
                Mail us at: <span className="text-orange-500 font-medium ml-1">support@torchproxies.com</span>
              </p>
            </div>
          </div>

          {/* Right Column: Form Fields */}
          <div className="lg:col-span-7">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Your name</label>
                  <input type="text" placeholder="Type here..." className="w-full bg-transparent border-b border-stone-800 py-2 outline-none focus:border-orange-500 transition-colors text-sm" />
                </div>
                <div className="relative group">
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Your email</label>
                  <input type="email" placeholder="Type here..." className="w-full bg-transparent border-b border-stone-800 py-2 outline-none focus:border-orange-500 transition-colors text-sm" />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Expected traffic volumes</label>
                <input type="text" placeholder="Type here..." className="w-full bg-transparent border-b border-stone-800 py-2 outline-none focus:border-orange-500 transition-colors text-sm" />
              </div>

              <div className="relative group">
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1">Your message</label>
                <textarea rows={3} placeholder="Type here..." className="w-full bg-transparent border-b border-stone-800 py-2 outline-none focus:border-orange-500 transition-colors text-sm resize-none" />
              </div>

              {/* 3D Animated Submit Button */}
              <button
                type="submit"
                className="group/submitbtn relative overflow-hidden cursor-pointer w-full h-[52px] rounded-2xl font-semibold text-base text-white bg-orange-600 hover:bg-orange-500 transition-all duration-200"
              >
                {isMounted ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d] group-hover/submitbtn:[transform:rotateX(-90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:translateZ(14px)]">Send message</span>
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(14px)] text-white/90">Send message</span>
                  </div>
                ) : (
                  <span>Send message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
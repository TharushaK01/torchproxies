"use client";

import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="text-orange-500 font-medium text-sm block mb-2">
              Contact Us
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Get in touch
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Have a question about Torch Proxies? Get in touch with our experts to learn how we can help.
          </p>

          <div className="pt-4">
            <p className="font-bold text-lg">
              Mail us at: <span className="text-gray-300 font-medium ml-2">support@torchproxies.com</span>
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-8 bg-[#0a0a0a] border border-gray-800 rounded-[32px] p-8 md:p-12">
          <form className="space-y-10">
            {/* Top Row: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-widest">
                  Your name
                </label>
                <input 
                  type="text" 
                  placeholder="Type here..."
                  className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
                />
              </div>
              <div className="relative group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-widest">
                  Your email
                </label>
                <input 
                  type="email" 
                  placeholder="Type here..."
                  className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
                />
              </div>
            </div>

            {/* Middle Row: Traffic Volumes */}
            <div className="relative group">
              <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-widest">
                Expected traffic volumes
              </label>
              <input 
                type="text" 
                placeholder="Type here..."
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
              />
            </div>

            {/* Bottom Row: Message */}
            <div className="relative group">
              <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-widest">
                Your message
              </label>
              <textarea 
                rows={4}
                placeholder="Type here..."
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-[#ff4500] hover:bg-[#e63e00] text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-orange-900/20 active:scale-[0.98]"
            >
              Send message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
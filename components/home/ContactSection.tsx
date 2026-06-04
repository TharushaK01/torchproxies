"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import React from 'react';

const ContactSection = () => {
  const router = useRouter();
  return (

    <section className="relative overflow-hidden bg-[#0a0a0a] text-white py-24 px-6">

      <div className="absolute inset-x-0 bottom-0 h-[450px] z-0 pointer-events-none select-none">
        <Image
          src="/images/contact-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom opacity-100"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Side: Contact Info */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="text-orange-500 font-regular text-[16px] block mb-2">
              Contact Us
            </span>
            <h2 className="text-[42px] md:text-6xl font-medium tracking-tight">
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
        <div className="lg:col-span-8 bg-[#0a0a0a]/90 backdrop-blur-sm border border-gray-800 rounded-[32px] p-8 md:p-12">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

            {/* Top Row: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="block text-[16px] font-medium text-gray-500 mb-2 tracking-widest">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700"
                />
              </div>
              <div className="relative group">
                <label className="block text-[16px] font-medium text-gray-500 mb-2 tracking-widest">
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
              <label className="block text-[16px] font-medium text-gray-500 mb-2 tracking-widest">
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
              <label className="block text-[16px] font-medium text-gray-500 mb-2 tracking-widest">
                Your message
              </label>
              <textarea
                rows={4}
                placeholder="Type here..."
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700 resize-none"
              />
            </div>

            {/* 🛠️ Submit Button (Isolated Hover Scope) */}
            <button
              type="submit"
              className="overflow-hidden cursor-pointer
    w-full h-[52px] rounded-2xl font-semibold text-base text-white
    bg-[#ff4500] shadow-lg shadow-orange-900/20 
  ">
                  Send message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
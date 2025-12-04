"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

/**
 * Cover.tsx
 * - Splash shows for 4s, then hero uses the same video (not sticky)
 * - tickerRef null-safe (no TS18047)
 * - Added: features, testimonials, CTA, contact, footer
 *
 * Requires: framer-motion
 * npm i framer-motion
 */

const services = [
  { icon: CodeBracketIcon, title: "Web Development", desc: "React/Next.js, performant and accessible." },
  { icon: DevicePhoneMobileIcon, title: "Mobile Apps", desc: "React Native / Flutter cross-platform apps." },
  { icon: CloudIcon, title: "Cloud & DevOps", desc: "CI/CD, infra as code and monitoring." },
  { icon: CpuChipIcon, title: "AI & Automation", desc: "ML models, automation and pipelines." },
  { icon: ShieldCheckIcon, title: "Security", desc: "Secure-by-design audits & reviews." },
  { icon: AdjustmentsHorizontalIcon, title: "UI/UX", desc: "Design systems and delightful experiences." },
];

const testimonials = [
  { name: "Asha R.", text: "Delivered on time with great communication." },
  { name: "Rahul K.", text: "Transformed our product — conversion up 42%." },
  { name: "Priya S.", text: "Professional and deeply technical." },
];

const clients = ["Company A", "Company B", "Company C", "Company D", "Company E"];

export default function Cover(): JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  const tickerRef = useRef<HTMLDivElement | null>(null);
  const [prefersDark, setPrefersDark] = useState(false);
const [current, setCurrent] = useState(0);

  const goTo = (index: number) => setCurrent(index);
  // Splash 4s
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // detect theme (just for demo; adapt to your theme provider)
  useEffect(() => {
    const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setPrefersDark(dark);
  }, []);

  // AUTO SCROLL TICKER (null-safe & cleanup)
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let x = 0;
    const speed = 0.8; // px per frame
    let rafId = 0;

    const tick = () => {
      x += speed;
      // protect against zero width
      const width = ticker.scrollWidth || 0;
      if (width > 0 && x >= width / 2) x = 0;
      // assign scroll
      ticker.scrollLeft = x;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [tickerRef.current]);

  return (
    <div className="min-h-screen w-full relative font-sans bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* SPLASH (4s) */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video src="/ve.mp4" autoPlay muted playsInline className="w-full h-full object-cover" />
        </div>
      )}

      {/* HERO - video ONLY inside cover */}
      {!showSplash && (
        <header className="relative w-full h-[75vh] overflow-hidden">
          <video
            src="/ve.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
            {/* Left */}
            <div className="flex-1 max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center px-4 py-2 rounded-full font-medium text-[#F54E02] bg-[#F54E02]/10"
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                Ready to transform?
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                Let's Build Something <span className="text-[#F54E02]">Extraordinary</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} className="mt-4 text-lg text-gray-100/90 max-w-xl">
                Product design, engineering and cloud ops — end-to-end delivery that ships product-market fit.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F54E02] text-white font-semibold shadow hover:scale-[1.03] transition transform">
                  Start Project <ArrowRightIcon className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/30 transition">
                  View Work
                </button>
              </motion.div>
            </div>

            {/* Right - emblem/card */}
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.35 }} className="flex-1 mt-10 md:mt-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-[#F54E02]/20 to-[#F54E02]/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#F54E02]">S</span>
                </div>
              </div>
            </motion.div>
          </div>
        </header>
      )}

      {/* CLIENT TICKER */}
      <section className="py-6 bg-transparent">
  <div className="container mx-auto px-6 overflow-hidden relative">
    
    {/* Infinite Scrolling Track */}
    <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
      {[...clients, ...clients, ...clients].map((c, i) => (
        <div 
          key={i} 
          className="text-black dark:text-white font-semibold text-lg opacity-80 hover:opacity-100 transition"
        >
          {c}
        </div>
      ))}
    </div>

  </div>

  {/* Animation Styles */}
  <style jsx>{`
    .animate-scroll {
      display: inline-flex;
      animation: scroll 18s linear infinite;
    }
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>


      {/* SERVICES */}
      <section id="services" className="py-20 container mx-auto px-6">
  
  {/* Centered Title Section */}
  <div className="mb-14 text-center">
    <h3 className="text-lg font-semibold text-[#F54E02]">What We Do</h3>
    <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
      Services That Drive <span className="text-[#F54E02]">Innovation</span>
    </h2>
    <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      We build robust end-to-end digital products — design, engineering, and operations.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {services.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.03 }}
        className="
          group relative p-8 rounded-2xl
          bg-white/70 dark:bg-gray-900/60
          backdrop-blur-xl border border-gray-100 dark:border-gray-800
          shadow-lg hover:shadow-2xl
          transition-all duration-300
          overflow-hidden
        "
      >
        {/* Gradient Pattern Hover */}
        <div className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-br from-[#F54E02]/10 to-[#ff8d4c]/20 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
        " />

        {/* Sheen Light */}
        <div className="
          absolute -top-16 left-0 w-full h-24 
          bg-gradient-to-b from-white/50 to-transparent
          dark:from-white/10
          opacity-0 group-hover:opacity-100
          blur-2xl transition duration-300
        " />

        {/* Glow Dot */}
        <div className="
          absolute -bottom-12 -right-10 w-28 h-28 
          bg-[#F54E02]/20 rounded-full blur-2xl 
          transition group-hover:animate-pulse
        " />

        {/* Icon */}
        <div className="
          mb-5 p-4 rounded-xl bg-[#F54E02]/10 
          text-[#F54E02] w-fit
          group-hover:scale-110 transition
        ">
          <s.icon className="w-10 h-10" />
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold mb-2 relative z-10">
          {s.title}
        </h4>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 relative z-10">
          {s.desc}
        </p>

      </motion.div>
    ))}
  </div>

</section>


      {/* FEATURES / PROCESS (compact) */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-sm font-semibold text-[#F54E02]">Our Process</h3>
            <h2 className="text-3xl font-extrabold mt-3">From Idea to <span className="text-[#F54E02]">Impact</span></h2>
            <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-[#F54E02] text-white rounded-lg flex items-center justify-center font-bold">1</div>
                <div>
                  <div className="font-bold">Discovery</div>
                  <div className="text-sm">Deeply understand users, outcomes and constraints.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-[#F54E02] text-white rounded-lg flex items-center justify-center font-bold">2</div>
                <div>
                  <div className="font-bold">Build & Iterate</div>
                  <div className="text-sm">Ship fast, test assumptions, iterate quickly.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {["Speed & Quality", "Scalable Architecture", "Design Systems"].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="p-6 bg-white dark:bg-gray-800 border rounded-xl shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F54E02]/20 flex items-center justify-center text-[#F54E02] font-bold">{i + 1}</div>
                  <div>
                    <h4 className="font-bold">{t}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Tangible outcomes backed by data and engineering discipline.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
   <section className="py-20 container mx-auto px-6">

  {/* Center Titles */}
  <div className="text-center space-y-2 mb-12">
    <h3 className="text-lg font-semibold text-[#F54E02]">Testimonials</h3>
    <h2 className="text-3xl md:text-4xl font-extrabold">What clients say</h2>
  </div>

  {/* Slider Container */}
  <div className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-500 gap-6 md:gap-8"
      style={{ transform: `translateX(-${current * (100)}%)` }}
    >
      {testimonials.map((t, i) => (
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          className="
            group min-w-full md:min-w-[32%] 
            p-8 md:p-6 rounded-2xl 
            bg-white/70 dark:bg-gray-900/70
            backdrop-blur-xl shadow-lg border border-white/10
            hover:shadow-2xl hover:scale-[1.03]
            transition-all duration-300 overflow-hidden
          "
        >
          {/* Hover Gradient */}
          <div className="
            absolute inset-0 opacity-0 group-hover:opacity-100 
            bg-gradient-to-br from-[#F54E02]/10 to-[#ff8d4c]/20
            transition-opacity duration-300
          " />

          {/* Top Sheen */}
          <div className="
            absolute -top-12 left-0 w-full h-24 
            bg-gradient-to-b from-white/40 to-transparent 
            dark:from-white/10 
            opacity-0 group-hover:opacity-100 
            blur-2xl transition duration-300
          " />

          <p className="text-gray-800 dark:text-gray-200 relative z-10 leading-relaxed text-[15px] md:text-base">
            “{t.text}”
          </p>

          <cite className="block mt-6 text-sm font-semibold text-gray-600 dark:text-gray-400 relative z-10">
            — {t.name}
          </cite>

          {/* Glow Circle */}
          <div className="
            absolute -bottom-10 -right-8 w-28 h-28 
            bg-[#F54E02]/20 rounded-full blur-2xl 
            group-hover:animate-pulse
          "></div>
        </motion.blockquote>
      ))}
    </div>
  </div>

  {/* Navigation Dots */}
  <div className="flex justify-center mt-10 gap-4">
    {testimonials.map((_, i) => (
      <button
        key={i}
        onClick={() => goTo(i)}
        className={`
          w-3.5 h-3.5 rounded-full transition-all
          ${current === i 
            ? "bg-[#F54E02] scale-125 shadow-md" 
            : "bg-gray-400 dark:bg-gray-600 opacity-70"}
        `}
      />
    ))}
  </div>

</section>



<section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#fff7f0] dark:from-black dark:to-[#1a0b00] text-center">

  {/* Floating gradient blobs */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#F54E02]/20 blur-3xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-orange-500/10 blur-3xl rounded-full animate-[bounce_6s_infinite]"></div>

  <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">

    {/* Heading */}
    <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F54E02] to-[#ff9750] bg-clip-text text-transparent animate-fadeIn">
      Ready to launch?
    </h3>

    {/* Subtitle */}
    <p className="text-gray-700 dark:text-gray-300 max-w-xl animate-slideUp">
      Tell us about your idea and we'll help you ship it.
    </p>

    {/* Button */}
    <a
      href="#contact"
      className="
        group relative px-10 py-4 text-white font-semibold rounded-xl 
        bg-gradient-to-r from-[#F54E02] to-[#ff7a30] 
        shadow-lg shadow-orange-500/30
        transition-all duration-300
        hover:shadow-xl hover:shadow-orange-500/50
        hover:scale-[1.08]
      "
    >
      <span className="relative z-10">Get Started</span>

      {/* Button glow ring */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#F54E02] to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>
    </a>

  </div>
</section>


      

      
    </div>
  );
}

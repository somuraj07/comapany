"use client";

import { useEffect, useRef, useState } from "react";
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
} from "@heroicons/react/24/outline";

import {
  ArrowUpRightIcon,
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarSquareIcon,
  ShieldExclamationIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import ProcessSection from "./Process";

type HeroIcon = React.ElementType;

interface ServiceCardProps {
  icon: HeroIcon;
  title: string;
  description: string;
  animationDelay: number;
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: HeroIcon;
  delay: number;
}

interface SimpleDataProps {
  icon: HeroIcon;
  text: string;
}

interface StatProps {
  value: string;
  label: string;
}

const servicesData: ServiceCardProps[] = [
  { 
    icon: CpuChipIcon, 
    title: "Software Solutions", 
    description: "Custom software solutions tailored to your business needs, ensuring scalability, efficiency, and reliability.", 
    animationDelay: 0 
  },
  { 
    icon: DevicePhoneMobileIcon, 
    title: "App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.", 
    animationDelay: 100 
  },
  { 
    icon: CodeBracketIcon, 
    title: "Web Development", 
    description: "Modern, responsive web applications using React, Next.js, and Node.js that are fast, secure, and scalable.", 
    animationDelay: 200 
  },
  { 
    icon: ChartBarSquareIcon, 
    title: "Digital Marketing", 
    description: "Comprehensive digital marketing strategies including SEO, SEM, social media, and content marketing to grow your brand.", 
    animationDelay: 300 
  },
  { 
    icon: AdjustmentsHorizontalIcon, 
    title: "UI/UX Design", 
    description: "User-centered designs that are visually appealing, intuitive, and enhance user engagement.", 
    animationDelay: 400 
  },
];

const clients = ["Company A", "Company B", "Company C", "Company D", "Company E"];

// -------------------- COMPONENTS --------------------
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, animationDelay }) => (
  <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 overflow-hidden group border border-gray-100/50">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)' }} />
    <div className="relative z-10 p-4 mb-4 inline-flex items-center justify-center rounded-xl bg-orange-50/70 group-hover:bg-orange-100 transition-colors duration-300">
      <Icon className="w-6 h-6 text-orange-600" />
    </div>
    <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="relative z-10 text-gray-600 mb-4 text-sm">{description}</p>
    <a href="#" className="relative z-10 flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700 transition duration-300">
      Learn More <ArrowUpRightIcon className="w-4 h-4 ml-1" />
    </a>
  </div>
);

// -------------------- MAIN COVER COMPONENT --------------------
export default function Cover() {
  const [showSplash, setShowSplash] = useState(true);
  const tickerRef = useRef<HTMLDivElement | null>(null);

  // Splash auto-hide after 4s
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Infinite ticker scroll
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    let x = 0;
    const speed = 0.8;
    let rafId: number;
    const step = () => {
      x += speed;
      if (x >= ticker.scrollWidth / 2) x = 0;
      ticker.scrollLeft = x;
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [tickerRef.current]);

  return (
    <div className="min-h-screen w-full relative font-sans bg-white text-gray-900 transition-colors">

      {/* SPLASH VIDEO */}
      {showSplash && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white cursor-pointer"
          onClick={() => setShowSplash(false)}
        >
          <video src="/ve.mp4" autoPlay muted playsInline className="w-full h-full object-cover" />
        </div>
      )}

      {/* HERO SECTION */}
      {!showSplash && (
        <header className="relative w-full h-[75vh] overflow-hidden">
          <video src="/ve.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
            {/* Hero Content */}
            <div className="flex-1 max-w-2xl">
              <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="inline-flex items-center px-4 py-2 rounded-full font-medium text-[#F54E02] bg-[#F54E02]/10">
                <SparklesIcon className="w-4 h-4 mr-2" /> Ready to transform?
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Let's Build Something <span className="text-[#F54E02]">Extraordinary</span></motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} className="mt-4 text-lg text-gray-800/90 max-w-xl">Product design, engineering and cloud ops — end-to-end delivery that ships product-market fit.</motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F54E02] text-white font-semibold shadow hover:scale-[1.03] transition transform">Start Project <ArrowRightIcon className="w-4 h-4" /></button>
                <button className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-900 font-semibold hover:bg-gray-50 transition">View Work</button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex-1 mt-10 md:mt-0 flex items-center justify-center"
            >
              {/* PNG Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <img
                  src="/4.png"
                  alt="Hero"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </header>
      )}

      {/* CLIENT TICKER */}
      <section className="py-6 bg-transparent">
        <div className="container mx-auto px-6 overflow-hidden relative">
          <div className="flex items-center gap-10 animate-scroll whitespace-nowrap" ref={tickerRef}>
            {[...clients, ...clients, ...clients].map((c, i) => <div key={i} className="text-gray-900 font-semibold text-lg opacity-80 hover:opacity-100 transition">{c}</div>)}
          </div>
        </div>
        <style jsx>{`.animate-scroll { display: inline-flex; animation: scroll 18s linear infinite; } @keyframes scroll {0%{transform:translateX(0);}100%{transform:translateX(-50%);}}`}</style>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-orange-600 uppercase mb-2">What We Do</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-0">Services That Drive <span className="text-orange-600">Innovation</span></h2>
            <a href="#" className="flex items-center text-gray-600 font-medium hover:text-orange-600 transition duration-300 group">View All Services <ArrowUpRightIcon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>
      <ProcessSection/>
    </div>
  );
}

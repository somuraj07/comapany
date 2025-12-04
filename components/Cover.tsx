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
  { icon: CodeBracketIcon, title: "Web Development", description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, fast, and secure.", animationDelay: 0 },
  { icon: DevicePhoneMobileIcon, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.", animationDelay: 100 },
  { icon: CloudIcon, title: "Cloud Solutions", description: "Cloud architecture, migration, and DevOps services on AWS, Azure, and Google Cloud Platform.", animationDelay: 200 },
  { icon: CpuChipIcon, title: "AI & Machine Learning", description: "Intelligent solutions powered by machine learning, natural language processing, and computer vision.", animationDelay: 300 },
  { icon: ShieldCheckIcon, title: "Cybersecurity", description: "Comprehensive security audits, penetration testing, and secure coding practices to protect your assets.", animationDelay: 400 },
  { icon: AdjustmentsHorizontalIcon, title: "UI/UX Design", description: "User-centered design that creates intuitive, engaging, and visually stunning digital experiences.", animationDelay: 500 },
];

const processStepsData: ProcessStepProps[] = [
  { number: 1, title: "Discovery", description: "We dive deep into understanding your business, goals, and challenges through comprehensive consultations.", icon: ChatBubbleBottomCenterTextIcon, delay: 0 },
  { number: 2, title: "Strategy", description: "Our team crafts a tailored roadmap with technical architecture, timelines, and measurable milestones.", icon: LightBulbIcon, delay: 150 },
  { number: 3, title: "Development", description: "Agile development with regular demos, iterative feedback, and transparent communication throughout.", icon: CodeBracketIcon, delay: 300 },
  { number: 4, title: "Launch & Scale", description: "Seamless deployment with ongoing support, optimization, and scaling strategies for long term success.", icon: RocketLaunchIcon, delay: 450 },
];

const principles: SimpleDataProps[] = [
  { icon: RocketLaunchIcon, text: "Innovation-Driven Solutions" },
  { icon: UserGroupIcon, text: "Client-Centric Approach" },
  { icon: ChartBarSquareIcon, text: "Results-Oriented Delivery" },
  { icon: ShieldExclamationIcon, text: "Quality Assurance" },
];

const stats: StatProps[] = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Asha R.", text: "Delivered on time with great communication." },
  { name: "Rahul K.", text: "Transformed our product — conversion up 42%." },
  { name: "Priya S.", text: "Professional and deeply technical." },
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

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon: Icon, delay }) => (
  <div className="relative p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-500 hover:-translate-y-1">
    <div className="absolute -top-4 left-4 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">{number}</div>
    <div className="flex items-start mb-6 pt-4">
      <div className="p-3 inline-flex items-center justify-center rounded-xl bg-orange-50/70 border border-orange-200">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
      <div className="w-3 h-3 bg-orange-400 rounded-full ml-auto mt-2" />
    </div>
    <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title}<span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-2" /></h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// -------------------- MAIN COVER COMPONENT --------------------
export default function Cover() {
  const [showSplash, setShowSplash] = useState(true);
  const [prefersDark, setPrefersDark] = useState(false);
  const [current, setCurrent] = useState(0);
  const tickerRef = useRef<HTMLDivElement | null>(null);

  const goTo = (index: number) => setCurrent(index);

  useEffect(() => { const t = setTimeout(() => setShowSplash(false), 4000); return () => clearTimeout(t); }, []);
  useEffect(() => { setPrefersDark(window.matchMedia("(prefers-color-scheme: dark)").matches); }, []);
  useEffect(() => {
    const ticker = tickerRef.current; if (!ticker) return;
    let x = 0; const speed = 0.8; let rafId = 0;
    const tick = () => { x += speed; const width = ticker.scrollWidth || 0; if (width > 0 && x >= width / 2) x = 0; ticker.scrollLeft = x; rafId = requestAnimationFrame(tick); };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [tickerRef.current]);

  return (
    <div className="min-h-screen w-full relative font-sans bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* SPLASH */}
      {showSplash && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black"><video src="/ve.mp4" autoPlay muted playsInline className="w-full h-full object-cover" /></div>}

      {/* HERO */}
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
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} className="mt-4 text-lg text-gray-100/90 max-w-xl">Product design, engineering and cloud ops — end-to-end delivery that ships product-market fit.</motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F54E02] text-white font-semibold shadow hover:scale-[1.03] transition transform">Start Project <ArrowRightIcon className="w-4 h-4" /></button>
                <button className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/30 transition">View Work</button>
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
                  src="/4.png" // <-- your PNG path here
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
            {[...clients, ...clients, ...clients].map((c, i) => <div key={i} className="text-black dark:text-white font-semibold text-lg opacity-80 hover:opacity-100 transition">{c}</div>)}
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

      {/* ... Rest of your sections (About Us, Partner, Process, Testimonials) remain the same ... */}
    </div>
  );
}

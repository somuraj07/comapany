"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRightIcon, SparklesIcon, CodeBracketIcon, DevicePhoneMobileIcon, 
  CloudIcon, CpuChipIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, 
  ArrowUpRightIcon, RocketLaunchIcon, UserGroupIcon, ChartBarSquareIcon, 
  ShieldExclamationIcon, LightBulbIcon, ChatBubbleBottomCenterTextIcon 
} from "@heroicons/react/24/outline";

// ------------------------------
// Type Definitions
// ------------------------------
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

interface StatProps {
  value: string;
  label: string;
}

interface ClientProps {
  name: string;
  offer: string;
}

// ------------------------------
// Helper Components
// ------------------------------
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, animationDelay }) => (
  <div 
    className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 overflow-hidden group border border-gray-100/50"
    style={{ animationDelay: `${animationDelay}ms` }}
  >
    <div 
      className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)' }}
    />
    <div className="relative z-10 p-4 mb-4 inline-flex items-center justify-center rounded-xl bg-orange-50/70 group-hover:bg-orange-100 transition-colors duration-300">
      <Icon className="w-6 h-6 text-orange-600" />
    </div>
    <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="relative z-10 text-gray-600 mb-4 text-sm">{description}</p>
    <a href="#" className="relative z-10 flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700 transition duration-300">
      Learn More
      <ArrowUpRightIcon className="w-4 h-4 ml-1" />
    </a>
  </div>
);

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon: Icon, delay }) => (
  <div 
    className="relative p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-500 hover:-translate-y-1"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute -top-4 left-4 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>
    <div className="flex items-start mb-6 pt-4">
      <div className="p-3 inline-flex items-center justify-center rounded-xl bg-orange-50/70 border border-orange-200">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
      <div className="w-3 h-3 bg-orange-400 rounded-full ml-auto mt-2" />
    </div>
    <h3 className="text-xl font-extrabold text-gray-900 mb-2">
      {title}
      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-2" />
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// ------------------------------
// Main Component
// ------------------------------
const Cover: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Sample data
  const services: ServiceCardProps[] = [
    { icon: CodeBracketIcon, title: "Web Development", description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js.", animationDelay: 0 },
    { icon: DevicePhoneMobileIcon, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.", animationDelay: 100 },
    { icon: CloudIcon, title: "Cloud Solutions", description: "Cloud architecture, migration, and DevOps services on AWS, Azure, and Google Cloud Platform.", animationDelay: 200 },
    { icon: CpuChipIcon, title: "AI & Machine Learning", description: "Intelligent solutions powered by ML, NLP, and computer vision.", animationDelay: 300 },
    { icon: ShieldCheckIcon, title: "Cybersecurity", description: "Comprehensive security audits and secure coding practices.", animationDelay: 400 },
    { icon: AdjustmentsHorizontalIcon, title: "UI/UX Design", description: "User-centered design for intuitive, engaging digital experiences.", animationDelay: 500 },
  ];

  const processSteps: ProcessStepProps[] = [
    { number: 1, title: "Discovery", description: "We dive deep into understanding your business, goals, and challenges.", icon: ChatBubbleBottomCenterTextIcon, delay: 0 },
    { number: 2, title: "Strategy", description: "Crafting a tailored roadmap with technical architecture, timelines, and milestones.", icon: LightBulbIcon, delay: 150 },
    { number: 3, title: "Development", description: "Agile development with regular demos and iterative feedback.", icon: CodeBracketIcon, delay: 300 },
    { number: 4, title: "Launch & Scale", description: "Seamless deployment with ongoing support and scaling strategies.", icon: RocketLaunchIcon, delay: 450 },
  ];

  const stats: StatProps[] = [
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const clients: ClientProps[] = [
    { name: "Company A", offer: "50% Off" },
    { name: "Company B", offer: "30% Off" },
    { name: "Company C", offer: "70% Off" },
    { name: "Company D", offer: "20% Off" },
    { name: "Company E", offer: "60% Off" },
  ];

  // Splash timer
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll ticker
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let scrollAmount = 0;
    const speed = 1; // px per frame
    let reqId: number;

    const scrollTicker = () => {
      scrollAmount += speed;
      if (scrollAmount >= ticker.scrollWidth / 2) scrollAmount = 0;
      ticker.scrollLeft = scrollAmount;
      reqId = requestAnimationFrame(scrollTicker);
    };
    reqId = requestAnimationFrame(scrollTicker);

    return () => cancelAnimationFrame(reqId);
  }, []);

  return (
    <div className="min-h-screen relative font-sans">
      {/* ---------------- Navbar ---------------- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md py-4 px-6 flex justify-between items-center text-white">
        <span className="text-2xl font-bold">MyBrand</span>
        <ul className="flex gap-6 font-medium">
          <li><a href="#services" className="hover:text-orange-500">Services</a></li>
          <li><a href="#process" className="hover:text-orange-500">Process</a></li>
          <li><a href="#stats" className="hover:text-orange-500">Stats</a></li>
          <li><a href="#clients" className="hover:text-orange-500">Clients</a></li>
        </ul>
      </nav>

      {/* ---------------- Splash Video ---------------- */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video 
            src="/ve.mp4" 
            autoPlay 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* ---------------- HEADER / HERO ---------------- */}
      <header className={`relative z-10 ${!showSplash ? "" : "hidden"}`}>
        <video 
          src="/ve.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 min-h-[75vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 text-white">
          {/* Left Column */}
          <div className="flex-1 text-left">
            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-orange-600/20 rounded-full shadow-sm animate-pulse-slow mb-4">
              <SparklesIcon className="w-5 h-5 mr-2 text-orange-500" />
              Ready to Transform?
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Let's Build Something <span className="text-orange-500">Extraordinary</span> Together
            </h1>

            <p className="text-lg md:text-xl mb-10 max-w-xl">
              Whether you're a startup or enterprise, we turn your vision into reality with innovative solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="flex items-center px-8 py-4 text-white font-bold bg-orange-500 rounded-lg shadow-xl hover:bg-orange-600 transition transform hover:scale-105 active:scale-95">
                Start Your Project <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 text-orange-500 font-bold bg-white/30 border border-white/40 rounded-lg shadow-lg hover:bg-white/50 transition transform hover:scale-105 active:scale-95">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-orange-100/20 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-6xl font-bold text-orange-500">S</span>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- MAIN CONTENT (NO VIDEO) ---------------- */}
      <main className="relative z-10 mt-[75vh]">
        {/* ---------------- CLIENT TICKER ---------------- */}
        <section id="clients" className="py-6 bg-gray-100">
          <div className="overflow-hidden">
            <div ref={tickerRef} className="flex whitespace-nowrap gap-12 px-4">
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="inline-block bg-white px-6 py-4 rounded-xl shadow-md">
                  <span className="font-bold text-gray-800">{client.name}</span>
                  <span className="ml-2 text-orange-500 font-semibold">{client.offer}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-orange-500 uppercase mb-2">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight">
              Services That Drive <span className="text-orange-500">Innovation</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-semibold text-orange-500 uppercase mb-2">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight">
              From Idea to <span className="text-orange-500">Impact</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-orange-50 shadow hover:shadow-lg transition transform hover:-translate-y-1">
                <p className="text-5xl font-extrabold text-orange-500 mb-2">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Cover;

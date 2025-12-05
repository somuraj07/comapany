"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Shield, Star } from "lucide-react";
import { CodeBracketIcon, DevicePhoneMobileIcon, CloudIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

// Sample data
const services = [
  { icon: CodeBracketIcon, title: "Web Development", desc: "Modern web apps with React, Next.js, Node.js." },
  { icon: DevicePhoneMobileIcon, title: "Mobile Apps", desc: "Cross-platform apps for iOS and Android." },
  { icon: CloudIcon, title: "Cloud Solutions", desc: "AWS, Azure, GCP architecture and DevOps." },
];

const testimonials = [
  { name: "Alice", text: "Excellent service and great communication!" },
  { name: "Bob", text: "Highly recommend their team for any project." },
  { name: "Charlie", text: "Professional and efficient delivery!" },
];

const clients = ["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix", "Tesla"];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Infinite client ticker animation
  useEffect(() => {
    let scrollX = 0;
    const ticker = tickerRef.current;
    if (!ticker) return;
    const step = () => {
      scrollX += 0.5; // speed
      if (scrollX >= ticker.scrollWidth / 2) scrollX = 0;
      ticker.scrollLeft = scrollX;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Building the Future, <span className="text-orange-500">One Solution</span><br /> at a Time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg"
        >
          Founded in 2014, Shraddha IT Services evolved into a trusted global technology partner powering digital innovation.
        </motion.p>
      </section>

      {/* ================= STATS ================= */}
     <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mx-auto mb-24 p-10 rounded-3xl bg-white shadow-xl border max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-8"
>
  {[ 
    { value: "50+", label: "Team Members" },
    { value: "200+", label: "Projects Completed" },
    { value: "99%", label: "Client Retention" }
  ].map((stat, index) => (
    <motion.div
      whileHover={{ scale: 1.12, y: -6 }}
      key={index}
      className="group relative text-center transition cursor-pointer rounded-2xl overflow-hidden p-6 bg-white shadow-sm"
    >
      {/* Gradient hover overlay */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-50
        bg-gradient-to-br from-orange-200/40 via-orange-100/20 to-transparent
        rounded-2xl transition-opacity duration-300 pointer-events-none
      "></div>

      <div className="relative z-10">
        <div className="text-4xl font-extrabold text-orange-500 drop-shadow-sm">
          {stat.value}
        </div>
        <div className="text-gray-500 mt-1 text-sm font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  ))}
</motion.section>


      {/* ================= MISSION ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center mt-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl overflow-hidden shadow-xl transition hover:scale-[1.03]"
        >
          <div className="
            absolute inset-0 opacity-0 group-hover:opacity-40
            bg-gradient-to-br from-orange-200/40 via-orange-100/20 to-transparent
            transition-opacity duration-300
          "></div>
          <Image src="/teamwork.jpg" width={650} height={450} alt="Team working" className="w-full h-auto object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-orange-500 font-semibold tracking-wide">Our Mission</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-tight">
            Empowering Businesses Through <span className="text-orange-500">Technology</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mt-5 leading-relaxed"
          >
            Our mission is to democratize access to world-class technology solutions. Every business deserves the power to thrive in the digital world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-4 leading-relaxed"
          >
            From SaaS products to enterprise systems, we transform ideas into robust digital solutions that accelerate growth, efficiency, and innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="mt-28 text-center px-6 pb-24">
        <h3 className="text-orange-500 font-semibold">Our Values</h3>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          What <span className="text-orange-500">Drives Us</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mt-14">
          {[
            { icon: <Lightbulb size={40} />, label: "Innovation" },
            { icon: <Heart size={40} />, label: "Passion" },
            { icon: <Shield size={40} />, label: "Integrity" },
            { icon: <Star size={40} />, label: "Excellence" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, y: -6, rotate: 1 }}
              className="group relative flex flex-col items-center p-6 rounded-2xl border shadow-md bg-white transition cursor-pointer overflow-hidden"
            >
              {/* Gradient hover overlay */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-50
                bg-gradient-to-br from-orange-200/40 via-orange-100/20 to-transparent
                transition-opacity duration-300 pointer-events-none
              "></div>

              <div className="text-orange-500 relative z-10">{item.icon}</div>
              <p className="mt-3 font-semibold relative z-10 text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Shield, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold leading-tight"
        >
          Building the Future, <span className="text-orange-500">One Solution</span>
          <br /> at a Time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto mt-6 text-gray-500"
        >
          Founded in 2014, Shraddha IT Services has grown from a small team of passionate developers
          into a full-service technology partner trusted by businesses worldwide.
        </motion.p>
      </section>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-20 p-8 rounded-2xl shadow-sm max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white border"
      >
        {[
          { value: "50+", label: "Team Members" },
          { value: "200+", label: "Projects Completed" },
          { value: "15+", label: "Industry Awards" },
          { value: "99%", label: "Client Retention" }
        ].map((stat, index) => (
          <motion.div
            whileHover={{ scale: 1.08 }}
            key={index}
            className="text-center cursor-pointer"
          >
            <div className="text-3xl font-bold text-orange-500">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="/teamwork.jpg"
            width={600}
            height={400}
            alt="Team working"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-orange-500 font-semibold">Our Mission</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Empowering Businesses Through <span className="text-orange-500">Technology</span>
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Our mission is to democratize access to world-class technology solutions. We believe every
            business, regardless of size, deserves cutting-edge tools to compete in the digital age.
          </p>
          <p className="text-gray-500 mt-4 leading-relaxed">
            From startups to enterprises, we partner with visionary leaders to transform ideas into impactful
            digital experiences that drive growth, efficiency, and innovation.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="mt-24 text-center px-6 pb-20">
        <h3 className="text-orange-500 font-semibold">Our Values</h3>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">What <span className="text-orange-500">Drives Us</span></h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
          {[
            { icon: <Lightbulb className="text-orange-500" size={40} />, label: "Innovation" },
            { icon: <Heart className="text-orange-500" size={40} />, label: "Passion" },
            { icon: <Shield className="text-orange-500" size={40} />, label: "Integrity" },
            { icon: <Star className="text-orange-500" size={40} />, label: "Excellence" }
          ].map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer border"
            >
              {item.icon}
              <p className="mt-3 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
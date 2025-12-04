"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code, Server, Layers } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-orange-500 font-semibold"
      >
        Our Services
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold mt-2"
      >
        Comprehensive IT <span className="text-orange-500">Solutions</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 max-w-2xl mt-4"
      >
        From concept to deployment, we offer end-to-end technology services tailored to your unique
        business needs. Let us help you build the future.
      </motion.p>

      {/* Service Block 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        {/* Left Icon Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Animated Glow Circle */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute w-64 h-64 rounded-full border-2 border-orange-300 opacity-30"
          ></motion.div>

          {/* Icon Box */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 bg-orange-50 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-orange-200 cursor-pointer"
          >
            <Globe className="text-orange-500" size={40} />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h4 className="text-orange-500 font-semibold text-sm">01</h4>
          <h3 className="text-3xl font-bold mt-2">Web Development</h3>
          <p className="text-gray-500 mt-4">
            Custom web applications built with modern technologies that scale with your business.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "React, Next.js, Vue.js Development",
              "Node.js & Python Backend",
              "RESTful & GraphQL APIs",
              "Progressive Web Apps (PWA)",
              "E-commerce Solutions",
              "CMS Development",
            ].map((item, i) => (
              <motion.span
                whileHover={{ scale: 1.05, backgroundColor: "#fff7ed" }}
                key={i}
                className="px-4 py-2 rounded-full border text-sm text-gray-600 hover:border-orange-400 transition cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Service Block 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-28">
        {/* Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h4 className="text-orange-500 font-semibold text-sm">02</h4>
          <h3 className="text-3xl font-bold mt-2">Mobile App Development</h3>
          <p className="text-gray-500 mt-4">
            Native and cross-platform mobile apps that deliver exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "iOS & Android Native Apps",
              "React Native Development",
              "Flutter Applications",
              "App Store Optimization",
              "Mobile UI/UX Design",
              "Backend Integration",
            ].map((item, i) => (
              <motion.span
                whileHover={{ scale: 1.05, backgroundColor: "#fff7ed" }}
                key={i}
                className="px-4 py-2 rounded-full border text-sm text-gray-600 hover:border-orange-400 transition cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Animated Glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute w-64 h-64 rounded-full border-2 border-orange-300 opacity-30"
          ></motion.div>

          {/* Icon Box */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 bg-orange-50 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-orange-200 cursor-pointer"
          >
            <Smartphone className="text-orange-500" size={40} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}  
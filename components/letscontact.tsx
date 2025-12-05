"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LetsPage() {
  return (
    <section className="py-28 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F54E02]/10 via-white to-white -z-10" />

      {/* Animated glowing orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-[#F54E02]/30 blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F54E02]/10 border border-[#F54E02]/20 mb-8 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F54E02]" />
            <span className="text-sm font-medium text-[#333]">Ready to Transform?</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-[#F54E02] via-[#F54E02]/60 to-[#F54E02] bg-clip-text text-transparent">
              Extraordinary
            </span>{" "}
            Together
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Whether you're a startup looking to launch your first product or an enterprise
            seeking digital transformation, we're here to turn your vision into reality.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary button */}
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F54E02] text-white px-8 py-4 rounded-xl text-lg font-semibold
                hover:bg-[#ff6a24] hover:shadow-[0_0_25px_rgba(245,78,2,0.6)] transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Outline button */}
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-[#F54E02] text-[#F54E02] px-8 py-4 rounded-xl text-lg font-semibold
                hover:bg-[#F54E02]/10 hover:shadow-[0_0_20px_rgba(245,78,2,0.3)] transition-all"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600 text-sm"
          >
            {["Free Consultation", "24/7 Support", "100% Satisfaction Guaranteed"].map(
              (label, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0CC251]" />
                  <span>{label}</span>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

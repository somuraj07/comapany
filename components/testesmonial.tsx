"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Smith",
    text: "Shraddha IT Services delivered outstanding solutions that exceeded our expectations.",
  },
  {
    name: "Emily Johnson",
    text: "Their professionalism and attention to detail helped our project succeed effortlessly.",
  },
  {
    name: "Michael Lee",
    text: "Innovative ideas and seamless execution — highly recommend their team for digital solutions.",
  },
  {
    name: "Sophia Brown",
    text: "Their strategies boosted our online presence and engagement significantly.",
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
      >
        What <span className="text-orange-500">Our Clients</span> Say
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 15 }}
            transition={{ duration: 0.6 }}
            className={`absolute top-0 left-0 w-full flex flex-col items-center justify-center p-6 sm:p-10 rounded-2xl transition-all shadow-lg ${
              current === index
                ? "z-10 bg-gradient-to-br from-orange-50 via-white to-orange-50 scale-100 shadow-2xl"
                : "z-0 bg-white scale-95 shadow-md"
            } hover:scale-105`}
          >
            <p className="text-gray-700 text-base sm:text-lg font-medium italic text-center">
              "{testimonial.text}"
            </p>
            <h3 className="text-orange-500 font-semibold text-base sm:text-lg mt-4">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-3 mt-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx ? "bg-orange-500 scale-125 shadow-lg" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

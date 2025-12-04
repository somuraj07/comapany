"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="text-orange-500" />,
      title: "Visit Us - Marathalli",
      text: "Marathalli, Bengaluru, Karnataka, India",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5946!2d77.6752!3d12.9591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f6a1abef:0xdeb6b45!2sMarathalli,%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000",
      width: "100%",
      height: "200px",
    },
    {
      icon: <MapPin className="text-orange-500" />,
      title: "Visit Us - JNTUA",
      text: "JNTUA, Anantapur, Andhra Pradesh, India",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.12345!2d77.6050!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb1234:0xabcdef1234567890!2sJNTUA,%20Anantapur!5e0!3m2!1sen!2sin!4v1700000000001",
      width: "100%",
      height: "200px",
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.p className="text-orange-500 font-semibold tracking-wide">
          Get In Touch
        </motion.p>
        <motion.h1 className="text-5xl font-extrabold mt-2 leading-tight">
          Let's Start a <span className="text-orange-500">Conversation</span>
        </motion.h1>
        <motion.p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Have a project in mind? Reach out and let’s create something amazing together.
        </motion.p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div className="bg-white dark:bg-gray-800 shadow-2xl border border-orange-200 dark:border-orange-400 rounded-3xl p-10 relative overflow-hidden">
          {/* Glow */}
          <motion.div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 dark:bg-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
          <motion.div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-300 dark:bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse" />

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500 rounded-2xl flex items-center justify-center shadow-md">
              <Mail className="text-orange-500 dark:text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>

          {/* Compact Form */}
          <div className="grid grid-cols-2 gap-4">
            {["Your Name *", "Email Address *", "Phone Number", "Company Name"].map(
              (label, i) => (
                <div className="flex flex-col text-sm" key={i}>
                  <label className="font-medium">{label}</label>
                  <input
                    type="text"
                    placeholder={label}
                    className="mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition"
                  />
                </div>
              )
            )}
          </div>

          <div className="flex flex-col text-sm mt-4">
            <label className="font-medium">Your Message *</label>
            <textarea
              rows={3}
              placeholder="Tell us about your project..."
              className="mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-13 bg-orange-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
          >
            Send Message <Send size={18} />
          </motion.button>
        </motion.div>

        {/* Contact Info + Maps */}
        <motion.div className="space-y-8">
          {contactInfo.map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500 rounded-2xl flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-300 whitespace-pre-line">{item.text}</p>
                </div>
              </div>

              {item.mapSrc && (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="rounded-2xl overflow-hidden shadow-xl border border-orange-200 dark:border-orange-400"
                  style={{ width: item.width, height: item.height }}
                >
                  <iframe
                    src={item.mapSrc}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="p-2 flex items-center gap-2 text-orange-600 font-semibold bg-orange-50 dark:bg-orange-900/20 text-sm">
                    <MapPin size={16} /> {item.text.split(",")[0]}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

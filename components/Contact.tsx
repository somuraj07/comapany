"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="text-orange-500" />,
      title: "Visit Us",
      text: "Bengaluru, Karnataka, India",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.99750230249!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f6a1abef:0xdeb6b45!2sBengaluru!5e0!3m2!1sen!2sin!4v1700000000000",
    },
    {
      icon: <MapPin className="text-orange-500" />,
      title: "Visit Us",
      text: "Anantapur, Andhra Pradesh, India",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.12345!2d77.6050!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb1234:0xabcdef1234567890!2sAnantapur!5e0!3m2!1sen!2sin!4v1700000000001",
    },
    {
      icon: <Phone className="text-orange-500" />,
      title: "Call Us",
      text: "+91 98765 43210\n+91 98765 43211",
    },
    {
      icon: <Mail className="text-orange-500" />,
      title: "Email Us",
      text: "hello@shradha.com\nsupport@shradha.com",
    },
    {
      icon: <Clock className="text-orange-500" />,
      title: "Working Hours",
      text: "Mon-Fri: 8 AM - 6 PM\nSat: 10 AM - 2 PM",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 px-6 py-24 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-orange-500 font-semibold tracking-wide"
        >
          Get In Touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold mt-2 leading-tight"
        >
          Let's Start a <span className="text-orange-500">Conversation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg"
        >
          Have a project in mind? Want to learn more about our services? Reach out and
          let’s create something amazing together.
        </motion.p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl border border-orange-200 rounded-3xl p-10 relative overflow-hidden"
        >
          {/* Glow Effects */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"
          />

          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-30"
          />

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shadow-md">
              <Mail className="text-orange-500" size={24} />
            </div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-6">
            {["Your Name *", "Email Address *", "Phone Number", "Company Name"].map(
              (label, i) => (
                <div className="flex flex-col text-sm" key={i}>
                  <label className="font-medium">{label}</label>
                  <input
                    type="text"
                    placeholder={label}
                    className="mt-1 border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none bg-white shadow-sm hover:shadow-md transition"
                  />
                </div>
              )
            )}
          </div>

          {/* Message Box */}
          <div className="flex flex-col text-sm mt-6">
            <label className="font-medium">Your Message *</label>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="mt-1 border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none bg-white shadow-sm hover:shadow-md transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-8 bg-orange-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            Send Message <Send size={18} />
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {contactInfo.map((item, i) => (
            <div key={i} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500 whitespace-pre-line">{item.text}</p>
                </div>
              </motion.div>

              {item.mapSrc && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-xl border border-orange-200"
                >
                  <iframe
                    src={item.mapSrc}
                    className="w-full h-56"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="p-4 flex items-center gap-2 text-orange-600 font-semibold bg-orange-50">
                    <MapPin size={18} /> {item.text.split(",")[0]}
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

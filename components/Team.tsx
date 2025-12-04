"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sujan",
    role: "Founder & CEO",
    image: "/team/sujan.jpg", // replace with your image
  },
  {
    name: "Shradha Reddy",
    role: "Lead Developer",
    image: "/team/shradha.jpg",
  },
  {
    name: "Ravi Kumar",
    role: "UI/UX Designer",
    image: "/team/ravi.jpg",
  },
  {
    name: "Ananya Das",
    role: "Marketing Head",
    image: "/team/ananya.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="w-full bg-gray-50 px-6 py-24 max-w-7xl mx-auto">
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
          Meet the Team
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold mt-2 leading-tight"
        >
          The People Behind <span className="text-orange-500">Our Success</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 mt-4 max-w-3xl mx-auto text-lg"
        >
          Our talented team makes everything possible. Scroll to see the amazing
          people driving our mission forward.
        </motion.p>
      </motion.div>

      {/* Horizontal Scroll Team Section */}
      <motion.div
        className="flex space-x-12 overflow-x-auto scrollbar-hide py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[280px] bg-white rounded-3xl p-6 flex-shrink-0 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4 mx-auto border-4 border-orange-100 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-gray-500 text-center">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Sujan", role: "Founder & CEO", image: "/33.png" },
  { name: "Shradha Reddy", role: "Lead Developer", image: "/22.png" },
  { name: "Ravi Kumar", role: "UI/UX Designer", image: "/11.png" },
  { name: "Ananya Das", role: "Marketing Head", image: "/11.png" },
];

export default function TeamSection() {
  return (
    <div className="w-full bg-white px-6 sm:px-12 py-24 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-orange-500 font-semibold tracking-wide">Meet The Innovators</p>
        <h2 className="text-4xl font-extrabold mt-2">The People Behind Our Mission</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          We are proud of our team — experienced, dedicated and passionate about building solutions.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >

            {/* Profile Image */}
            <div className="w-full bg-gray-100 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[260px] object-cover rounded-lg"
                style={{ aspectRatio: "3 / 4" }}
              />
            </div>

            {/* Info */}
            <div className="p-4 sm:p-6 text-center relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">{member.role}</p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

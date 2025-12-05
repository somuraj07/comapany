"use client";

import { motion } from "framer-motion";

/* -----------------------------
       TEAM DATA
----------------------------- */
const team = [
  {
    name: "Sai Sujan",
    role: "CEO",
    image: "/sujan.png", // replace with your PNG path
  },
  
  {
    name: "Roopa",
    role: "Head of Operations",
    image: "/rupa.png", // replace with your PNG path
  },
  {
    name: "Sreedhar",
    role: "Business Development Manager",
    image: "/sridhar.png", // replace with your PNG patnavh
  },
];


/* -----------------------------
       MAIN COMPONENT
----------------------------- */
export default function AboutPage() {
  const primaryColor = "#f54e02"; // custom color

  return (
    <main className="min-h-screen bg-background">
      {/* HERO / TITLE SECTION */}
      <section className="pt-10 pb-16 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
          Meet Our{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${primaryColor}, #ff8a00)`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Team
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The talented individuals behind Shraddha IT Services, driving innovation and excellence.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className="py-2 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(245,78,2,0.05)] to-transparent -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative w-56 aspect-square rounded-3xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground text-center">
                  {member.name}
                </h3>
                <p
                  className="text-sm text-center"
                  style={{ color: primaryColor }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

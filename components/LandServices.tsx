"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Palette,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

/* ------------------------------------
       PAGE METADATA (Next.js)
------------------------------------ */
export const metadata = {
  title: "Our Services | Shraddha IT Services",
  description:
    "Explore our comprehensive IT services including web development, mobile apps, cloud solutions, AI & ML, cybersecurity, and more.",
};

/* ------------------------------------
       INLINE BUTTON
------------------------------------ */
function Button({
  children,
  variant = "default",
  size = "md",
  asChild = false,
}: {
  children: any;
  variant?: "hero" | "default";
  size?: "lg" | "md";
  asChild?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300";

  const variants = {
    hero: "bg-[#f54e02] text-white hover:bg-[#f54e02]/90",
    default: "bg-card text-foreground border border-border hover:bg-accent",
  };

  const sizes = {
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-base",
  };

  const className = `${base} ${variants[variant]} ${sizes[size]}`;

  if (asChild) {
    return React.cloneElement(children, {
      className: `${children.props.className ?? ""} ${className}`,
    });
  }

  return <button className={className}>{children}</button>;
}

/* ------------------------------------
       SERVICES DATA
------------------------------------ */
const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "We build custom software solutions to automate processes, improve efficiency, and grow your business.",
    features: [
      "Custom Software Development",
      "Enterprise Applications",
      "Automation Solutions",
      "Backend & Frontend Integration",
      "API Development",
      "Maintenance & Support",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile apps for iOS and Android to provide seamless user experiences.",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "Flutter Apps",
      "App Store Deployment",
      "UI/UX Optimization",
      "Backend Integration",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Developing responsive, fast, and modern websites that deliver excellent user experiences.",
    features: [
      "Responsive Websites",
      "Next.js & React Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
      "SEO-Friendly Design",
    ],
  },
  {
    icon: Lightbulb,
    title: "Digital Marketing",
    description:
      "Helping your brand grow online through targeted marketing strategies and campaigns.",
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Email Campaigns",
      "Content Strategy",
      "Paid Ads Management",
      "Brand Awareness",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces that create memorable experiences.",
    features: [
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "User Research",
      "Design Systems",
      "Usability Testing",
    ],
  },
];

/* ------------------------------------
       MAIN COMPONENT
------------------------------------ */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="pt-2 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f54e02]/10 via-background to-background -z-10" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[#f54e02] font-semibold mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f54e02] to-yellow-500">
                Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From concept to deployment, we offer end-to-end technology services
              tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-2">
        <div className="container mx-auto px-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* ICON */}
                  <div className="lg:w-2/5 relative">
                    <div className="relative aspect-square max-w-md mx-auto">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-8 rounded-full border-4 border-dashed border-[#f54e02]/30"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.6 }}
                          className="w-32 h-32 rounded-3xl flex items-center justify-center bg-gradient-to-tr from-[#f54e02]/30 via-yellow-400/30 to-[#f54e02]/20"
                        >
                          <Icon className="w-16 h-16 text-[#f54e02]" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="lg:w-3/5">
                    <span className="text-[#f54e02] font-semibold mb-2 block text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:bg-[#f54e02]/10 transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-[#f54e02]" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

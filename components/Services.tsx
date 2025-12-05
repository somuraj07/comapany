"use client";
import { motion, MotionValue } from "framer-motion";
import { Code, Smartphone, Globe, Megaphone, Layers } from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Software Development",
      desc: "Tailor-made software built to solve complex business problems.",
      icon: <Code size={40} className="text-orange-500" />,
      points: ["Custom software", "ERP solutions", "Automation tools", "API Integrations", "Cloud platforms"],
    },
    {
      number: "02",
      title: "App Development",
      desc: "Beautiful and scalable mobile apps for iOS & Android.",
      icon: <Smartphone size={40} className="text-orange-500" />,
      points: ["iOS & Android Apps", "React Native / Flutter", "Backend integration", "UI/UX for mobile", "Store optimization"],
    },
    {
      number: "03",
      title: "Web Development",
      desc: "High-performance and scalable web applications.",
      icon: <Globe size={40} className="text-orange-500" />,
      points: ["Next.js / React", "SEO optimized sites", "E-commerce", "CMS", "Progressive Web Apps"],
    },
    {
      number: "04",
      title: "Digital Marketing",
      desc: "Grow your brand with targeted digital marketing.",
      icon: <Megaphone size={40} className="text-orange-500" />,
      points: ["SEO & SEM", "Social media", "Brand strategy", "Lead generation", "Content planning"],
    },
    {
      number: "05",
      title: "UI / UX Design",
      desc: "Modern, clean and user-centric product interfaces.",
      icon: <Layers size={40} className="text-orange-500" />,
      points: ["Wireframes", "Product strategy", "Design systems", "Prototyping", "Mobile-first design"],
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 px-6 py-20 max-w-6xl mx-auto">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center"
      >
        Our <span className="text-orange-500">Services</span>
      </motion.h1>

      <div className="mt-20 flex flex-col gap-28">
        {services.map((service, index) => (
          <ServiceRow key={index} service={service} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}

type Service = {
  number: string;
  title: string;
  desc: string;
  icon: ReactElement;
  points: string[];
};

function ServiceRow({ service, reverse }: { service: Service; reverse: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}>

      {/* Animated Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-64 h-64 flex items-center justify-center"
      >
        {/* Rotating dotted circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 border-[3px] border-orange-300 border-dashed rounded-full"
        />

        {/* Icon perfectly centered */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 bg-orange-50 rounded-2xl shadow-lg flex items-center justify-center z-10"
        >
          {service.icon}
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h4 className="text-orange-500 font-semibold">{service.number}</h4>
        <h3 className="text-3xl font-bold mt-1">{service.title}</h3>
        <p className="text-gray-500 mt-4">{service.desc}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          {service.points.map((p: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | MotionValue<number> | MotionValue<string> | null | undefined, i: Key | null | undefined) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border rounded-full text-gray-700 text-sm hover:border-orange-400 transition"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

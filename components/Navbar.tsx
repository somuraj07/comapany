"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About Us", route: "/about" },
    { label: "Services", route: "/service" },
    { label: "Team", route: "/team" },
    { label: "Contact", route: "/contact" },
  ];

  const handleNavigation = (route: string) => router.push(route);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-black shadow-md sticky top-0 z-50 transition-all backdrop-blur-md"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
        <img src="/logo1.png" alt="Shraddha Logo S" className="w-40 h-11" />
      </motion.div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`cursor-pointer relative text-gray-900 dark:text-white hover:text-[#F54E02] transition-colors duration-300 font-semibold`}
            onClick={() => handleNavigation(item.route)}
          >
            <motion.span whileHover={{ scale: 1.05 }}>{item.label}</motion.span>
            {/* Underline */}
            <motion.div
              className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#F54E02] rounded-full"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </li>
        ))}
      </ul>

      {/* Theme Toggle & Get Started */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-[#F54E02] text-gray-700 dark:text-gray-300 shadow-md transition-all duration-300"
        >
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 font-semibold text-white bg-[#F54E02] rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
          onClick={() => router.push("/contact")}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}

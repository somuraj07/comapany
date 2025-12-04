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

  // Nav items with target routes
  const navItems = [
    { label: "Home", route: "/" },
    { label: "About Us", route: "/about" },
    { label: "Services", route: "/service" },
    { label: "Team", route: "/team" },
    { label: "Contact", route: "/contact" },
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-black shadow-md sticky top-0 z-10"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
        <img src="/logo1.png" alt="Shraddha Logo S" className="w-40 h-11" />
      </motion.div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        {navItems.map((item) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.1, color: "#f97316" }}
            className={`cursor-pointer ${
              item.label === "Home"
                ? "text-orange-500 dark:text-orange-500"
                : "text-gray-900 dark:text-white"
            } hover:text-orange-500 transition-colors duration-200`}
            onClick={() => handleNavigation(item.route)}
          >
            {item.label}
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle & Get Started */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-1 rounded-full text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300"
        >
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-white bg-orange-500 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-colors duration-300"
          onClick={() => router.push("/contact")}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}

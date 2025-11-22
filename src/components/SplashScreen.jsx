import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/pixel-perfect.png";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState("light");

  // 🔹 Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // 🔹 Hide splash after delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className={`fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden ${
            theme === "dark" ? "bg-black" : "bg-[#feffef]"
          }`}
        >
          {/* 🌿 Abstract gradient background */}
          <div className="absolute inset-0">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 bg-yellow-300 -top-32 -left-20"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 bg-pink-400 bottom-0 right-0"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-25 bg-blue-400 top-20 right-1/3"></div>
          </div>

          {/* 🎥 Logo */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className={`mt-2 text-4xl md:text-6xl font-semibold tracking-widest bebas-neue ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            PIXEL PERFECT STUDIO
          </motion.h1>

          {/* 🖋 Studio Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40}}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className={`mt-2 text-lg md:text-3xl font-extralight tracking-widest island-moments-regular ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <span className="text-red-500">D</span>ilshad <span className="text-red-500">f</span>otography
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

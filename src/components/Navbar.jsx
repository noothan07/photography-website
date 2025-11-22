import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/pixel-perfect.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to light if neither
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    
    // Check system preference as fallback
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return systemPreference;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    // Apply theme class immediately on mount
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  // Update theme
  useEffect(() => {
    // Update DOM and localStorage when theme changes
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleBookNow = () => {
    const phoneNumber = "9573585975";
    const message = encodeURIComponent("Hi! I’d like to book a photo shoot 📸");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // ✨ Active link style function
  const linkClass = ({ isActive }) =>
    `relative text-gray-800 dark:text-gray-100 font-semibold transition hover:text-yellow-500 
    ${isActive ? "text-yellow-500 dark:text-yellow-500  after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-500 after:rounded-full" : ""}`;

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[80%]
      flex items-center justify-between px-6 py-3
      backdrop-blur-[10px] bg-[#00000000]
      border border-black/20 dark:border-white/20 
      rounded-full z-50 transition-all duration-300 dark:shadow-lg poppins"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-gray-800 dark:text-gray-100">
        <img
          src={logo}
          alt="pixel perfect studio"
          className="w-40 h-10 object-contain"
        />
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-8">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Desktop Right Side */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full
          bg-white/40 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600/40
          backdrop-blur-md hover:scale-105 transition press"
        >
          {theme === "dark" ? (
            <span className="text-yellow-400 text-xl">☀️</span>
          ) : (
            <span className="text-indigo-400 text-xl">🌙</span>
          )}
        </button>

        <button
          onClick={handleBookNow}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500
          text-white font-semibold hover:scale-105 hover:shadow-md transition duration-300 press"
        >
          Book Now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg text-gray-500 hover:bg-white/20 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[80px] left-0 w-full px-6 py-6 flex flex-col items-center gap-4
            dark:bg-[#000000] bg-[#feffef] border border-gray-300 dark:border-gray-800
            rounded-4xl shadow-lg lg:hidden backdrop-blur-md"
          >
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/services"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex justify-center items-center w-full gap-3 mt-3">
              <button
                onClick={toggleTheme}
                className="px-5 py-1.5 flex items-center justify-center rounded-full
                bg-[#00000019] dark:bg-gray-700/40 border border-gray-300
                dark:border-gray-800 hover:scale-105 transition duration-300 press"
              >
                {theme === "dark" ? (
                  <span className="text-yellow-500 text-xl">Light ☀️</span>
                ) : (
                  <span className="text-indigo-300 text-xl">Dark 🌙</span>
                )}
              </button>

              <button
                onClick={handleBookNow}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-500
                text-white font-semibold backdrop-blur-md hover:scale-105 hover:shadow-md transition press"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 4, label: "YEARS OF EXPERIENCE" },
  { value: 150, label: "WEDDINGS & EVENTS" },
  { value: 80, label: "HAPPY CLIENTS" },
];

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  // 👀 Observe when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Count animation
  useEffect(() => {
    if (visible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCounts(stats.map((s) => Math.floor(s.value * progress)));
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(stats.map((s) => s.value));
        }
      }, interval);
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-40 text-white bg-white dark:bg-[#111100] overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_25%,black_75%,transparent)]"
    >
      {/* 🟠 Abstract dotted background */}
      <div className="absolute top-0 right-0 md:w-48 w-35 h-35 rotate-45 md:h-48 bg-[radial-gradient(circle,_rgba(255,193,7,0.8)_1px,_transparent_2px)] [background-size:12px_12px] opacity-80 dark:opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 md:w-48 w-35 h-35 rotate-45 md:h-48 bg-[radial-gradient(circle,_rgba(255,193,7,0.8)_1px,_transparent_2px)] [background-size:12px_12px] opacity-80 dark:opacity-40 pointer-events-none"></div>

      <motion.h1 className="font-bold poppins text-3xl md:text-5xl text-center text-black dark:text-gray-50 mb-15"
          initial={{ opacity: 0, y:30 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:true}}
          >
            Our Achievements</motion.h1>

      {/* 🧡 Content */}
      <motion.div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-10 text-center md:text-left"
          initial={{ opacity: 0, y:30 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:true}}
        >
        {/* Left Section */}
        <div className="flex flex-col md:items-start w-full md:w-auto border md:border-none dark:border-white/35 border-yellow-200 rounded-2xl py-2 dark:bg-[#1e1e00] bg-[#fffef1] md:dark:bg-transparent md:bg-transparent">
          <div className="flex items-baseline justify-center md:justify-start">
            <h2 className="text-[4rem] md:text-[6rem] font-extrabold text-[#ffc107] leading-none">
              {counts[0]}
            </h2>
            <span className="text-[2rem] font-bold text-[#ffc107] ml-2">+</span>
          </div>
          <p className="text-lg md:text-2xl font-semibold text-[#ffc107]">
            {stats[0].label}
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:items-start w-full md:w-auto border md:border-none dark:border-white/35 border-yellow-200 rounded-2xl py-2 dark:bg-[#1e1e00] bg-[#fffef1] md:dark:bg-transparent md:bg-transparent">
          <div className="flex items-baseline justify-center md:justify-start">
            <h2 className="text-[4rem] md:text-[6rem] font-extrabold  leading-none stroke">
              {counts[1]}
            </h2>
            <span className="text-[2rem] font-bold text-[#ffc107] ml-2 stroke1">+</span>
          </div>
          <p className="text-lg md:text-2xl font-semibold text-[#ffc107] stroke1">
            {stats[1].label}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:items-start w-full md:w-auto border md:border-none dark:border-white/35 border-yellow-200 rounded-2xl py-2 dark:bg-[#1e1e00] bg-[#fffef1] md:dark:bg-transparent md:bg-transparent">
          <div className="flex items-baseline justify-center md:justify-start">
            <h2 className="text-[4rem] md:text-[6rem] font-extrabold text-[#ffc107] leading-none">
              {counts[2].toLocaleString()}
            </h2>
            <span className="text-[2rem] font-bold text-[#ffc107] ml-2">+</span>
          </div>
          <p className="text-lg md:text-2xl font-semibold text-[#ffc107]">
            {stats[2].label}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

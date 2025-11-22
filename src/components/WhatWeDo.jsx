import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AbstractDots from "../components/AbstractDots.jsx";

const services = [
  {
    title: "Wedding Photography",
    imgUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "birthday photography",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276505/qzqhz2hqb8cgbmaeyfaa.jpg",
  },
  {
    title: "Fashion Shoots",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762278307/ekyhhfuvqcgxsaz2olqt.jpg",
  },
  {
    title: "Event Coverage",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762278307/bsdx7oegsanopog0tkgc.jpg",
  },
  {
    title: "cinematography",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276506/uzp9njol00i5go5fwsnp.jpg",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null); // 👈 Track hover state

  // ⏱️ Auto change every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 🎯 Show hover image if hovered, otherwise active one
  const active = hoverIndex !== null ? services[hoverIndex] : services[activeIndex];

  return (
    <section className="w-full h-full relative overflow-hidden text-white pt-16 md:py-16 px-6 md:px-12 lg:px-40">

      {/* 🔤 Title Section */}
      <div className="text-center md:text-left md:mb-10">
        <motion.h2 className="text-4xl md:text-6xl font-extrabold text-center poppins text-black dark:text-white"
          initial={{ opacity: 0, y:30 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:true}}
          >
          WHAT <span className="text-yellow-500">WE DO</span>
        </motion.h2>

        <motion.p className="text-gray-500 mt-3 text-sm md:text-base text-center pb-10"
          initial={{ opacity: 0, y:30 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:true}}>
          We provide various types of services including photography,
          videography, and more.
        </motion.p>

      </div>

      {/* 📸 Main Layout */}
      <motion.div className="flex flex-col lg:flex-row items-center lg:items-start gap-10"
          initial={{ opacity: 0, y:30 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:true}}
          >
        {/* 🖼️ Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.imgUrl}
              src={active.imgUrl}
              alt={active.title}
              
              className="rounded-2xl shadow-lg w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
            />
          </AnimatePresence>
        </div>

        {/* 🧭 Right Side Service List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 roboto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoverIndex(i)} // 👈 Change preview image
              onMouseLeave={() => setHoverIndex(null)} // 👈 Reset to auto-slide
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/services"
                onClick={() => setActiveIndex(i)}
                className={`flex justify-between items-center w-full px-8 py-4 md:py-5 md:my-1  rounded-full text-left text-base sm:text-lg font-semibold transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-200"
                }`}
              >
                {service.title}
                <ArrowRight
                  size={20}
                  className={`transition-transform duration-300 ${
                    i === activeIndex ? "rotate-0" : "rotate-45"
                  }`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

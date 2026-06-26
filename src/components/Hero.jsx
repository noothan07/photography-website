import React from "react";
import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center items-center h-[70vh] sm:h-[90vh] md:h-[120vh] w-full bg-studio md:overflow-hidden overflow-visible"
      id="home"
      >
      {/* 🟡 Decorative dotted backgrounds */}
      {/* Top-left pattern */}
      <div className="absolute hidden md:block md:-left-20 -left-10 top-10 md:w-[300px] w-[150px] md:h-72 h-[150px] rounded-full opacity-30 bg-[radial-gradient(#ffb17a_2px,transparent_3px)] dark:bg-[radial-gradient(#ffa726_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Top-right pattern */}
      <div className="absolute hidden md:block md:-right-20 -right-10 md:top-60 md:w-[300px] w-[150px] md:h-72 h-[150px] rounded-full opacity-30 bg-[radial-gradient(#ffb17a_2px,transparent_3px)] dark:bg-[radial-gradient(#ffa726_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* 🏠 Hero content */}
      <div className="flex flex-col justify-center items-center text-center pt-40 md:mt-28 md:pt-5  pb-10 md:pb-5 lg:pb-2 dark:text-white ">
        <motion.div 
          initial={{ opacity: 0, y:-20 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:false}}
          >
          <p className="font-bold">THE</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
          >
          <p className="font-bold bebas-neue text-5xl md:text-7xl lg:tracking-wide dark:text-gray-200">
            PIXEL PERFECT STUDIO
          </p>
        </motion.div>

        <motion.div
         className="flex justify-center items-center gap-3 font-bold"
         initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:false }}
        >
          <p>BY</p>
          <p className="island-moments-regular font-extralight text-lg md:text-3xl dark:text-white text-black"><span className="text-red-500">D</span>ilshad <span className="text-red-500">p</span>hotography</p>
        </motion.div>
      </div>

      {/* 🌀 Circular gallery section */}
      <motion.div className="w-full h-[50vh] md:h-[80vh] lg:h-[70vh] relative"
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <CircularGallery
          bend={2}
          textColor="#d1d5db"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </motion.div>

      {/* ✨ Buttons */}
      <div className="flex gap-4 justify-center items-center mt-10 lg:mt-10 mb-5 lg:mb-10">
        <a
          href="#contact"
          className="md:px-5 md:py-3 px-3 py-2 text-[14px] active:scale-[0.95] duration-200 md:text-lg font-bold roboto bg-yellow-300 rounded-lg text-black hover:bg-yellow-400"
        >
          BOOK A SESSION
        </a>
        <Link
          to="/gallery"
          className="roboto md:px-5 md:py-3 px-3 py-2 text-[14px] active:text-yellow-400 active:scale-[0.95] duration-200 md:text-lg text-black border border-yellow-300 rounded-lg dark:text-white font-bold hover:text-yellow-400"
        >
          EXPLORE ►
        </Link>
      </div>
    </section>
  );
}

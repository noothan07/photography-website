import React from "react";
import { motion } from "framer-motion";
import AbstractDots from "../components/AbstractDots.jsx";

export default function Services() {
  const data = [
  {
    title: "Wedding Photography",
    mobileDescription:
      "Capturing the magical moments of your special day with elegance and timeless beauty.",
    description:
      "From emotional vows to joyful celebrations, we capture every candid and elegant detail of your wedding — creating timeless memories you’ll cherish forever.",
    imgUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Birthday Shoots",
    mobileDescription:
      "Celebrate your special day with vibrant and joyful birthday portraits and candid moments.",
    description:
      "Every birthday tells a story — full of color, laughter, and life. We bring out the joy and excitement in every shot, making your celebrations unforgettable.",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276505/qzqhz2hqb8cgbmaeyfaa.jpg",
  },
  {
    title: "Pre-Wedding Shoots",
    mobileDescription:
      "Romantic storytelling sessions that capture your love journey before the big day.",
    description:
      "Pre-wedding shoots that beautifully narrate your love story with dreamy backdrops, natural emotions, and cinematic frames — a perfect beginning to your forever.",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276506/bawgsbnt3rm13vtwkrry.jpg",
  },
  {
    title: "Outdoor Couple Shoots",
    mobileDescription:
      "Capture the chemistry and connection between couples in breathtaking outdoor locations.",
    description:
      "Let nature be the witness to your love story — from golden sunsets to lush greenery, we craft intimate outdoor couple portraits full of warmth and emotion.",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Candid Photography",
    mobileDescription:
      "Stylish, bold, and creative shoots that highlight fashion, confidence, and individuality.",
    description:
      "We specialize in spontaneous, expressive photography that captures raw emotions and real moments — blending creativity with authenticity for unforgettable shots.",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762277300/ud3kw53asizvheo6vibm.jpg",
  },
  {
    title: "baby photoshoot",
    mobileDescription:
      "Fun and playful sessions capturing the innocence, laughter, and pure joy of childhood.",
    description:
      "With bright colors, fun props, and pure smiles — we create joyful portraits that reflect the magic and innocence of childhood perfectly.",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276506/af3psrq9xkxiixavl6ec.jpg",
  },
  {
    title: "Drone Aerial Photography",
    mobileDescription:
      "A stunning bird’s-eye perspective for weddings, real estate, and cinematic projects.",
    description:
      "Take your visuals to new heights with breathtaking aerial photography — perfect for grand events, landscapes, and creative storytelling from above.",
    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276506/lom5etkmpi18eqa8hxnh.jpg",
  },
  {
    title: "cimematography",
    mobileDescription:
      "Crafting cinematic stories that capture emotions, moments, and memories in motion.",
    description:
      "Our cinematography turns your special moments into timeless films — blending creativity, storytelling, and emotion to bring every frame to life beautifully.",

    imgUrl:
      "https://res.cloudinary.com/dtosuksvd/image/upload/f_auto,c_fill,q_80,w_1000/v1762276506/uzp9njol00i5go5fwsnp.jpg",
  },
];




  // Framer Motion variants for smooth animations
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full relative overflow-hidden  py-16 pt-30 px-4 sm:px-10 md:px-20">

      {/* 🟠 Abstract Background */}
            <AbstractDots color="#ffa726" count={100} />
            <div className="absolute top-30 right-0 md:w-48 w-35 h-35 rotate-45 md:h-48 bg-[radial-gradient(circle,_rgba(255,193,7,0.8)_1px,_transparent_2px)] [background-size:12px_12px] opacity-80 dark:opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-110 left-0 md:w-48 w-35 h-35 rotate-45 md:h-48 bg-[radial-gradient(circle,_rgba(255,193,7,0.8)_1px,_transparent_2px)] [background-size:12px_12px] opacity-80 dark:opacity-40 pointer-events-none"></div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-wide poppins">
          OUR SERVICES
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm md:text-base">
          Professional photography services to capture every emotion and moment.
        </p>
      </div>

      {/* Services list */}
      <div className="flex flex-col gap-20">
        {data.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true,amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left Side - Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.img
                src={service.imgUrl}
                alt={service.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-yellow-400 mb-3 roboto">
                {service.title}
              </h2>
              {/* Mobile description */}
              <p className="md:hidden text-gray-600 dark:text-gray-300 leading-relaxed schibsted-grotesk">
                {service.mobileDescription}
              </p>
              
              {/* Desktop description */}
              <p className="hidden md:block text-gray-600 dark:text-gray-300 leading-relaxed schibsted-grotesk">
                {service.description}
              </p>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



import React from "react";
import { motion } from "framer-motion";
import { Camera, Heart, Sparkles, Users } from "lucide-react";
import founderImg from "../assets/images/dilshad-image.jpg";
import StatsSection from "../components/StatsSection";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const whyChoose = [
  {
    icon: <Camera size={30} />,
    title: "All Types of Photography",
    desc: "From weddings to portraits, we capture every story beautifully.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "Creative Touch",
    desc: "Each shot is edited with passion and a cinematic vibe.",
  },
  {
    icon: <Heart size={30} />,
    title: "Client Happiness",
    desc: "Your smile is our success — 100% satisfaction guaranteed.",
  },
  {
    icon: <Users size={30} />,
    title: "Friendly Team",
    desc: "We make you feel comfortable and confident during every shoot.",
  },
];

export default function About() {
  return (
    <section className="text-gray-800 dark:text-gray-100 pb-40">
      
      <div className=" w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:px-35 px-5 pt-40 md:pb-30 pb-10">
        {/* 🌿 Abstract gradient background
          <div className="absolute inset-0 ">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 bg-yellow-300 -top-32 -left-20"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 bg-pink-400 bottom-0 right-0"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 bg-blue-400 top-20 right-1/3"></div>
          </div> */}
        
        {/* Left Text Section */}
        <div
          className="flex-1"
        >
          <h2
            className="text-2xl md:text-4xl font-bold mb-10 md:text-left text-center" 
          >
            Hey there, I'm{" "}
            <span className="text-yellow-500">Dilshad Sheik .</span>{" "}
             The founder of Pixel Perfect studio 👋
          </h2>

          <p className="text-lg leading-relaxed mb-6  md:text-left text-justify">
            Welcome to <span className="font-semibold">Pixel Perfect Studio </span>
            your friendly neighborhood creative space where we turn your
            favorite moments into stunning visual stories. Founded in{" "}
            <span className="text-yellow-500">October 2025</span>, our mission
            to make every picture a memory worth framing!
          </p>

          <p className="mb-8 text-gray-600 dark:text-gray-300 hidden md:block">
            Whether it’s a wedding, a portrait, a product, or a grand event —
            we’re here to make it unforgettable with our creative lens,
            cinematic tones, and heartfelt storytelling. 💛
          </p>

          <Link
            to="/gallery"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-full shadow-lg press"
          >
            explore my work
          </Link>
        </div>

        {/* Right Image Section */}
        <div
          className="flex-1 flex justify-center z-10"
        >
          <img
            src={founderImg}
            alt="Founder"
            className="rounded-2xl w-100 h-100 object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* ==== Stats Section Placeholder ==== */}
      <StatsSection />

      {/* Why Choose Us */}
      <div className="md:px-30">
        <h1 className=" pt-5 text-center text-black dark:text-white font-bold text-4xl md:text-5xl poppins">why choose us</h1>
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto px-6">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 shadow-md flex flex-col items-center text-center border dark:border-white/35 border-yellow-200 rounded-2xl py-2 dark:bg-[#ffffff1b] bg-[#fffef1]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
            >
              <div className="text-yellow-500 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

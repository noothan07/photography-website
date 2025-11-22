import React from "react";
import { motion } from "framer-motion";

// Props:
// - testimonials: array of testimonial objects
// - duration: scroll animation speed
// - className: optional tailwind classes
const TestimonialsColumn = ({ testimonials, duration = 10, className = "" }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {/* Duplicate testimonials for seamless scroll */}
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, place }, i) => (
              <div
                className="p-6 sm:p-8 md:p-10 rounded-3xl border dark:border-white/30 shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight">{place}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;

import React from "react";
import { motion } from "framer-motion"; // Use framer-motion in React
import TestimonialsColumn from "./TestimonialsColumn"; // Import the column component

// ======== TESTIMONIAL DATA ========
// Change these objects to add/remove testimonials or change images/text
const testimonials = [
  {
    text: "Our wedding album is absolutely stunning! The way they captured every emotional moment, from traditional ceremonies to candid moments, was exceptional. The pre-wedding shoot in traditional attire was magical!",
    image: "https://ui-avatars.com/api/?name=L&background=FF6B6B&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Lakshmi Devi",
    place: "visakhapatnam",
  },
  {
    text: "The birthday photoshoot for my daughter's first birthday was perfect! They were so patient with the kids and captured beautiful moments during the ceremony and celebrations.",
    image: "https://ui-avatars.com/api/?name=V&background=4ECDC4&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Venkata Rao",
    place: "anakapalle",
  },
  {
    text: "Amazing candid photography during our family function! Every natural expression and joy was captured beautifully. The traditional family portraits were equally impressive.",
    image: "https://ui-avatars.com/api/?name=P&background=45B7D1&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Padmavathi",
    place: "gajuwaka",
  },
  {
    text: "They did an outstanding job at our house warming ceremony. The photos of the pooja and family gathering are precious memories we'll cherish forever.",
    image: "https://ui-avatars.com/api/?name=S&background=96CEB4&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Surya Prakash",
    place: "hyderabad",
  },
  {
    text: "The corporate event coverage was professional and comprehensive. They captured every keynote speaker and networking moment perfectly.",
    image: "https://ui-avatars.com/api/?name=S&background=D4A5A5&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Sunitha",
    place: "rajahmundry",
  },
  {
    text: "Our engagement ceremony photos turned out better than we imagined! The traditional elements and modern touches were perfectly balanced.",
    image: "https://ui-avatars.com/api/?name=A&background=9B6B6B&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Anitha",
    place: "atchutapuram",
  },
  {
    text: "The half-saree function photography was exceptional! They captured all the rituals and celebration moments beautifully.",
    image: "https://ui-avatars.com/api/?name=R&background=6B95B8&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Ramesh Kumar",
    place: "parawada",
  },
  {
    text: "Excellent work during our Sankranti celebrations! The festive moments, rangoli, and family gatherings were captured perfectly.",
    image: "https://ui-avatars.com/api/?name=S&background=7EB19F&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Saraswathi",
    place: "Gopalapatnam",
  },
  {
    text: "The baby shower photoshoot was beautiful! They captured all the special moments and traditional customs with great attention to detail.",
    image: "https://ui-avatars.com/api/?name=K&background=B8866B&color=fff&size=150&font-size=0.5&length=1&bold=true",
    name: "Krishna Murthy",
    place: "yelamanchili",
  },
];

// Split into columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background relative dark:text-gray-200">
      <div className="container z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border dark:border-white/30 py-1 px-4 rounded-lg">Testimonials</div>
          </div>
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 mb-5 roboto">
            What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">customers</span> say
          </h2>
        </motion.div>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden dark:border-white/30">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

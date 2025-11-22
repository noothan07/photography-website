import React, { useState } from "react";
import {motion} from 'framer-motion';
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com"; // ✅ Install this: npm install emailjs-com

export default function Contact() {
  // ✅ Form state (to store form input)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hi! I’d like to book a photo shoot 📸",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👇 Replace with your own EmailJS service, template, and public key
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Something went wrong. Please try again!");
          console.error(error);
        }
      );
  };

  return (
    <section className="relative py-12 pt-25  px-6 transition-colors duration-300 " id='contact'>
      <motion.h1 className="text-center font-bold poppins dark:text-white text-4xl md:text-6xl pb-15 gradient-yellow-light"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once:true}}>
              GET IN TOUCH
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8  rounded-2xl">

        {/* ==================== LEFT SIDE (FORM) ==================== */}
        <div className="bg-yellow-100 p-5 md:p-15 rounded-2xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-4 border-yellow-800 w-fit pb-2">
            Contact us
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete=""
              className="w-full p-3 md:p-5 rounded-lg border-none focus:ring-2 focus:ring-yellow-800 outline-none bg-[#feffef] text-black"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-5 rounded-lg border-none focus:ring-2 focus:ring-yellow-800 bg-[#feffef] outline-none text-black"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 md:p-5 rounded-lg border-none focus:ring-2 focus:ring-yellow-800 bg-[#feffef] outline-none  text-black"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder=""
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 md:p-5 rounded-lg border-none focus:ring-2 bg-[#feffef] focus:ring-yellow-800 outline-none text-black"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-neutral-900 dark:bg-yellow-500 dark:text-white text-white px-6 py-2 w-full rounded-lg font-semibold roboto text-xl hover:opacity-80 transition-all press"
            >
              send message
            </button>
          </form>
        </div>

        {/* ==================== RIGHT SIDE (MAP & DETAILS) ==================== */}
        <div className="space-y-6  flex flex-col justify-center border rounded-2xl border-amber-100 md:border-0 bg-yellow-100 md:bg-transparent">
          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80">
            <iframe
              title="Pixel Perfect Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.9591704150731!2d83.08338376956415!3d17.562960698959678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396d2f5daea521%3A0xf2b659dab13492!2sPixel%20perfect%20studio!5e0!3m2!1sen!2sin!4v1761473189256!5m2!1sen!2si" // 🔸 Replace this with your studio’s Google Map link
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className=" text-neutral-800 dark:text-black md:dark:text-amber-50 flex flex-col justify-center items-start gap-4 px-4 md:px-0 pb-6 md:pb-10">
            <h3 className="text-2xl font-bold">Pixel Perfect Studio</h3>

            <div className="flex items-start gap-2">
              <MapPin className="text-yellow-800 w-5 h-5 mt-1" />
              <p>pixel perfect studio, Vadacheepurupalli, visakhapatnam, Andhra Pradesh</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="text-yellow-800 w-5 h-5" />
              <p>+91 9573585975</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-yellow-800 w-5 h-5" />
              <p>dilshadphotography23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

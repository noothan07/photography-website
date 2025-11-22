import React from "react";
import logo from "../assets/logo/pixel-perfect.png";
import { Instagram } from "lucide-react";
import { FaYoutube, FaWhatsapp } from "react-icons/fa"; // ✅ from react-icons

function Footer() {
  const handleBookNow = () => {
    const phoneNumber = "9573585975";
    const message = encodeURIComponent("Hi! I’d like to book a call for photography 📸");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <footer className="h-full w-full bg-white dark:bg-[#ffffff19] pt-5 pb-10 md:pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-3 justify-center items-center md:px-10 md:py-10 dark:text-gray-200 border-b pb-5 border-amber-300">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center lg:items-start md:gap-4">
          <div className="flex gap-3 items-center justify-center lg:justify-start">
            <img
              src={logo}
              alt="Pixel Perfect Studio Logo"
              className="lg:w-50 lg:h-20 h-20 w-40 object-contain"
            />
            <button
              onClick={handleBookNow}
              className="px-5 py-3 font-bold roboto bg-yellow-300 rounded-lg text-black hover:bg-yellow-400 press"
            >
              BOOK A CALL
            </button>
          </div>
          <div className="w-90 md:w-3/4 lg:w-100 flex">
            <p>
              The end-to-end photography service, designed to capture and deliver all types of
              occasions and events.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col justify-center items-center lg:items-start md:border-l-2 md:pl-10 border-amber-300">
          <h1 className="font-bold text-xl poppins pb-2">CONTACT</h1>
          <p>Phone: 9573585975</p>
          <p>Email: dilshadpotography23@gmail.com</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center lg:items-start md:border-l-2 md:pl-10 border-amber-300">
          <h1 className="font-bold text-xl poppins pb-2">SOCIALS</h1>
          <div className="flex gap-2 mt-2">
            {/* Instagram */}
            <a
              href="https://instagram.com/dilshad__fotography__"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-pink-600 border active:text-pink-600 p-2 rounded-sm press"
            >
              <Instagram size={28} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@DILSHADPHOTOGRAPHY1431"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-red-500 active:text-red-500 border p-2 rounded-sm press"
            >
              <FaYoutube size={28} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9573585975"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-green-500 active:text-green-500 border p-2 rounded-sm press"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center hover:text-yellow-500 pt-10 press">
        <a href="https://noothan-portfolio.vercel.app" target="_blank">
          © 2025 design and developed by <strong>Noothan Nagala</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

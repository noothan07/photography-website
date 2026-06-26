import { FaWhatsapp } from "react-icons/fa";

const PHONE = "9573585975";

const MESSAGE = encodeURIComponent(
  "Hi! I visited your photography website and I'd like to enquire about your photography services."
);

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-10 right-10 sm:bottom-10 sm:right-10 z-[9999] group"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-green-500/40 blur-2xl animate-pulse"></div>

      {/* Ripple */}
      <div className="absolute inset-0 rounded-full border-2 border-green-400/40 animate-ping"></div>

      {/* Floating Button */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          sm:h-16
          sm:w-16
          lg:h-[60px]
          lg:w-[60px]
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-green-400
          via-green-500
          to-green-600
          text-white
          shadow-[0_15px_45px_rgba(34,197,94,0.45)]
          backdrop-blur-xl
          transition-all
          duration-500
          ease-out
          group-hover:scale-110
          group-hover:-translate-y-2
          group-hover:rotate-6
          group-hover:shadow-[0_25px_70px_rgba(34,197,94,0.65)]
          active:scale-95
          animate-float
        "
      >
        <FaWhatsapp className="text-[30px] sm:text-[36px]" />
      </div>

      {/* Tooltip */}
      <div
        className="
          hidden
          md:flex
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          rounded-full
          bg-black/90
          backdrop-blur-xl
          px-4
          py-2
          text-sm
          font-medium
          text-white
          whitespace-nowrap
          opacity-0
          translate-x-4
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      >
        📷 Chat with us
      </div>
    </a>
  );
}
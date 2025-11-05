import React from "react";
import { motion } from "framer-motion";

export default function BookNowSection() {
  return (
    <section
      id="book-now"
      className="relative w-full bg-black text-[#d4af37] p-2 overflow-hidden"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/60 to-black pointer-events-none"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center glass-card rounded-3xl py-16 px-6 md:px-20 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-glow">
          Ready for Your Transformation?
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          Experience beauty, luxury, and style at <span className="text-[#d4af37] font-semibold">Naksh Salon</span>.  
          Book your appointment today and step into elegance.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#d4af37] text-black px-10 py-4 rounded-full font-semibold text-lg shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.9)]"
        >
          Book Now
        </motion.a>
      </motion.div>

      {/* Floating Glow Particles (Optional aesthetic effect) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-20 w-3 h-3 rounded-full bg-[#d4af37]/60 blur-md"
          animate={{ y: [0, -20, 0], opacity: [1, 0.6, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 right-24 w-4 h-4 rounded-full bg-[#d4af37]/70 blur-lg"
          animate={{ y: [0, 20, 0], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-black text-[#d4af37] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111111]/70 to-black pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:w-1/2"
        >
          {/* Image 1 */}
          <div className="glass-card rounded-2xl overflow-hidden h-64">
            <img
              src="/1.webp"
              alt="Salon Experience"
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 2 */}
          <div className="glass-card rounded-2xl overflow-hidden mt-8">
            <img
              src="5.avif"
              alt="Luxury Care"
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 3 */}
          <div className="glass-card rounded-2xl overflow-hidden col-span-2">
            <img
              src="/4.jpeg"
              alt="Makeup Studio"
              className="object-cover w-full h-72 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#d4af37] text-glow">
            Discover Timeless Beauty
          </h2>

          <p className="text-gray-300 leading-relaxed">
            At <span className="text-[#d4af37] font-medium">Naksh Salon</span>,
            we redefine beauty as an art form. Our expert stylists combine
            precision, creativity, and care to bring out your most radiant self
            — every time you visit.
          </p>

          <p className="text-gray-400">
            Step into a space where sophistication meets serenity. Whether
            you're preparing for an occasion or indulging in a little
            self-love, we make sure every detail reflects elegance.
          </p>
          <p className="text-gray-400">
            Step into a space where sophistication meets serenity. Whether
            you're preparing for an occasion or indulging in a little
            self-love, we make sure every detail reflects elegance.
          </p>

        </motion.div>
      </div>
    </section>
  );
}

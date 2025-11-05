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
              src="/interior.jpg"
              alt="Professional hair styling at Naksh Salon in Sikar"
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 2 */}
          <div className="glass-card rounded-2xl overflow-hidden mt-8">
            <img
              src="/interior2.jpg"
              alt="Luxury beauty care at Naksh Unisex Salon Sikar"
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Image 3 */}
          <div className="glass-card rounded-2xl overflow-hidden col-span-2">
            <img
              src="/interior3.jpg"
              alt="Bridal and makeup services at Naksh Salon Sikar"
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
            Discover Timeless Beauty at Naksh Unisex Salon
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Welcome to{" "}
            <span className="text-[#d4af37] font-medium">
              Naksh Unisex Salon – Sikar’s best salon for men and women
            </span>
            , where beauty meets perfection. From precision haircuts and expert
            coloring to rejuvenating skincare and bridal makeup, our professional
            stylists are dedicated to enhancing your natural charm.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We believe every client deserves a premium salon experience. Our
            modern setup blends comfort with creativity, offering personalized
            hair and beauty treatments that reflect your unique style. Whether
            it’s a glam makeover, party look, or routine grooming, we ensure
            every visit makes you feel confident, refreshed, and radiant.
          </p>

          <p className="text-gray-400 leading-relaxed">
            As a trusted{" "}
            <span className="text-[#d4af37] font-medium">
              beauty and hair salon in Sikar
            </span>
            , Naksh Salon brings together luxury, hygiene, and artistry under
            one roof. Step in, relax, and let our experts craft a look that truly
            defines you — because your beauty deserves the best touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

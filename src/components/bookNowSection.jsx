import React from "react";
import { motion } from "framer-motion";

export default function BookNowSection() {
  return (
    <section
      id="book-now"
      className="relative w-full bg-black text-[#d4af37] py-16 px-6 md:px-20 overflow-hidden"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <meta itemProp="name" content="Book Appointment - Naksh Unisex Salon" />
      <meta itemProp="description" content="Book your beauty appointment at Naksh Unisex Salon Sikar for hair styling, makeup, facial and Nail Services" />
      
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/60 to-black pointer-events-none"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-3xl py-16 px-6 md:px-12 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready for Your Beauty Transformation in Sikar?
        </h2>

        <p className="text-gray-300 text-xl mb-8 max-w-3xl leading-relaxed">
          Experience premium beauty, luxury grooming, and expert styling at{" "}
          <span className="text-[#d4af37] font-semibold">Naksh Unisex Salon Sikar</span>.  
          Book your appointment today and step into elegance at Rajasthan's finest salon.
        </p>

        {/* Services Quick List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-2xl">
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#d4af37]">✓</span>
            <span>Hair Styling</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#d4af37]">✓</span>
            <span>Bridal Makeup</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#d4af37]">✓</span>
            <span>Facial Treatments</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#d4af37]">✓</span>
            <span>Nail Services</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#d4af37]">✓</span>
            <span>Hair Coloring</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#d4af37]">✓</span>
            <span>Men's Grooming</span>
          </div>
        </div>

        {/* Multiple Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d4af37] text-black px-4 py-4 rounded-full font-semibold text-lg shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] flex items-center space-x-2"
            aria-label="Book Appointment at Naksh Salon Sikar"
          >
            <span>📅</span>
            <span>Book Appointment</span>
          </motion.a>

          <motion.a
            href="tel:+918690900970"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#d4af37] text-[#d4af37] px-4 py-4 rounded-full font-semibold text-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300 flex items-center space-x-2"
            aria-label="Call Naksh Salon Sikar at +91-8690900970"
          >
            <span>📞</span>
            <span>Call Now</span>
          </motion.a>

          <motion.a
            href="https://wa.me/918690900970?text=Hi! I want to book an appointment at Naksh Salon Sikar."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-500 text-green-400 px-4 py-4 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
            aria-label="Message Naksh Salon Sikar on WhatsApp"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </motion.a>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-gray-400 text-sm max-w-2xl">
          <p>
            <strong>📍 Location:</strong> Shri Yash Tower Road, Opposite Apple Imagine Store, Near Pawan Travels, Sikar, Rajasthan - 332001
          </p>
          <p className="mt-2">
            <strong>🕒 Open:</strong> 10:00 AM - 8:00 PM (All Days) <br />
            <strong> 📞 Phone:</strong> <a href="tel:+918690900970" className="text-[#d4af37] underline">+91 86909 00970</a>
          </p>
        </div>
      </motion.div>

      {/* Floating Glow Particles (Optional aesthetic effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#d4af37]/50 blur-sm"
          animate={{ y: [0, -15, 0], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Hidden SEO Content */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>Book Appointment - Naksh Unisex Salon Sikar</h1>
        <p>Book your beauty appointment at Naksh Unisex Salon in Sikar, Rajasthan for professional hair styling, bridal makeup, facial treatments, nail services and complete grooming solutions. Best salon in Sikar for men and women beauty services.</p>
        <p>Contact: +91-8690900970 | Address: Sikar, Rajasthan | Services: Haircut, Makeup, Facial, Hair Color, Nail Services</p>
      </div>
    </section>
  );
}
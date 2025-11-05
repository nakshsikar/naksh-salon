import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

// Generate 50 dummy testimonials
const generateTestimonials = () => {
  const names = [
    "Aarav", "Ishita", "Rohan", "Priya", "Neha", "Karan", "Ritika", "Sahil",
    "Simran", "Manav", "Tanya", "Ananya", "Rahul", "Sanya", "Aditi",
    "Mihir", "Sneha", "Vikram", "Avni", "Krishna", "Tara", "Dev",
    "Pooja", "Ravi", "Maya", "Aarohi", "Rishi", "Kriti", "Nikhil", "Nisha",
    "Rhea", "Ira", "Arjun", "Meera", "Kabir", "Sana", "Raj", "Naina",
    "Vani", "Rehan", "Aisha", "Om", "Dia", "Aditya", "Kiara", "Yash",
    "Radhika", "Tanvi", "Aryan", "Lavanya"
  ];

  return names.map((name, i) => ({
    name: `${name} ${["Sharma", "Patel", "Mehta", "Kapoor", "Singh"][i % 5]}`,
    text:
      "Absolutely loved my experience at Naksh Salon! The staff was professional, and my transformation was simply stunning.",
    rating: Math.floor(Math.random() * 2) + 4, // 4–5 stars
  }));
};

const testimonials = generateTestimonials();

export default function TestimonialsSection() {
  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-[#d4af37]" : "text-gray-600"}
      >
        ★
      </span>
    ));

  return (
    <section
      id="testimonials"
      className="relative w-full py-10 bg-black text-[#d4af37] overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111111]/60 to-black pointer-events-none"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-glow">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-3 p-5">
          250+ happy clients who trust Naksh Salon for their glow ✨
        </p>
      </motion.div>

      {/* Swiper Carousel */}
      <div className="relative z-10 px-6 md:px-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-center h-full"
              >
                <p className="text-gray-300 italic leading-relaxed mb-3">
                  “{t.text}”
                </p>
                <div className="flex justify-center mt-1 text-lg">
                  {renderStars(t.rating)}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[#d4af37]">
                  {t.name}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

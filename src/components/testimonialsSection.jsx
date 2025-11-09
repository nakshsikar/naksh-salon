import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

// Generate 50 unique testimonials
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

  const testimonials = [
    "The hair treatment I received was absolutely fantastic! My hair has never felt so healthy and shiny. Highly recommended!",
    "Outstanding service! The stylists really listened to what I wanted and delivered beyond my expectations. Will definitely be back!",
    "Best salon experience ever! The ambiance was so relaxing and the staff made me feel like a VIP throughout my visit.",
    "I'm amazed by the precision haircut I got here. They understood exactly what would suit my face shape and lifestyle.",
    "The keratin treatment transformed my frizzy hair into smooth, manageable locks. Worth every penny!",
    "Professional team with amazing skills! My coloring came out even better than I imagined. Love my new look!",
    "From the welcoming staff to the perfect finish, everything was flawless. This salon knows how to pamper their clients.",
    "The facial I received was incredibly rejuvenating. My skin is glowing and feels so refreshed. Thank you!",
    "Attention to detail is remarkable here. They spent time understanding my needs and delivered perfection.",
    "Worth the wait for an appointment! The hair styling for my wedding was absolutely dreamy and lasted all day.",
    "The manicure and pedicure service was exceptional. My hands and feet have never looked better!",
    "Great consultation process! They suggested a hairstyle that I would have never considered but now absolutely love.",
    "The staff is so talented and friendly. They made me feel comfortable and confident throughout the service.",
    "My haircut and blow-dry lasted perfectly for weeks! The techniques they use are truly effective.",
    "Clean, hygienic, and professional environment. Felt completely safe and well taken care of during my visit.",
    "The bridal makeup was stunning! They enhanced my features beautifully without making it look overdone.",
    "Reasonable pricing for such high-quality service. Found my go-to salon for all my beauty needs!",
    "The hair spa treatment was so relaxing and effective. My hair feels stronger and looks shinier than ever.",
    "They work magic with hair color! The balayage turned out exactly like the reference picture I showed.",
    "Excellent customer service from booking to completion. The team is well-trained and genuinely caring.",
    "The skin treatment addressed all my concerns effectively. Can see visible improvement in just one session.",
    "Perfect place for a complete makeover! They transformed my look and boosted my confidence tremendously.",
    "The threading and waxing services were painless and precise. Best I've experienced in the city!",
    "My keratin treatment results are amazing! No more spending hours straightening my hair every day.",
    "The stylists are true artists! They created a hairstyle that perfectly complements my personality.",
    "Hygiene standards are top-notch. All tools are properly sterilized and the salon is spotlessly clean.",
    "The hair treatment has solved my hair fall issues significantly. Grateful for the expert advice!",
    "Made me look years younger with a simple haircut and color! Friends are asking for salon recommendations.",
    "The staff remembers your preferences from previous visits. That personal touch makes all the difference!",
    "Quick service without compromising on quality. Perfect for busy professionals who want to look good.",
    "The premium products they use really make a difference in the results. Can feel the quality difference.",
    "My go-to place for all special occasions. They always make me look my best for every event!",
    "The scalp treatment was revolutionary! Solved my dandruff issues that I've had for years.",
    "Worth traveling across the city for! The quality of service is unmatched by any other salon nearby.",
    "The makeup artist understood exactly what would work for my skin tone and features. Pure talent!",
    "Regular customer for over a year now. Consistent quality and excellent service every single time.",
    "The hair cut has grown out beautifully! A sign of a truly skilled hairstylist who understands hair growth.",
    "They offer great advice on hair and skin care maintenance between salon visits. Very helpful!",
    "The facial massage techniques are so relaxing! Felt all my stress melting away during the session.",
    "Perfect for both men and women! My husband and I both get our services done here regularly.",
    "The highlights look so natural and blended perfectly! Exactly what I wanted for a sun-kissed look.",
    "The staff is knowledgeable about the latest trends and techniques. Always up-to-date with fashion.",
    "My curly hair has never looked better! They know exactly how to handle and style different hair types.",
    "The bridal package is comprehensive and worth every rupee! Made my wedding day absolutely perfect.",
    "They use eco-friendly products which is important to me. Great results while being environmentally conscious!",
    "The blowout lasted for four days! Unbelievable quality and staying power of their styling.",
    "Patient with kids too! Took my daughter for her first haircut and they made it a wonderful experience.",
    "The color correction service saved my hair from a disastrous DIY coloring attempt. True experts!",
    "Always leave the salon feeling more confident and beautiful. That's the sign of a great salon!",
    "The loyalty program is fantastic! Great discounts and benefits for regular customers like me."
  ];

  return names.map((name, i) => ({
    name: `${name} ${["Sharma", "Patel", "Mehta", "Kapoor", "Singh"][i % 5]}`,
    text: testimonials[i],
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
          250+ happy clients who trust Naksh Unisex Salon for their glow ✨
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
                  "{t.text}"
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
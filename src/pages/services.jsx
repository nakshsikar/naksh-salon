import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// WhatsApp redirect number
const WHATSAPP_NUMBER = "919876543210"; // replace with your number (without +)

const menServices = [
  {
    id: "mens-haircut",
    title: "Men's Haircut & Styling",
    short:
      "Precision haircuts and grooming tailored for modern men. Styled to perfection for any occasion.",
  },
  {
    id: "mens-hair-color",
    title: "Men's Hair Color & Highlights",
    short:
      "Professional hair coloring, highlights, and gray coverage using high-quality salon products.",
  },
  {
    id: "mens-beard",
    title: "Beard Grooming & Shaping",
    short:
      "Sharp beard trims, contouring, and luxurious beard care treatments for a clean, masculine look.",
  },
  {
    id: "mens-facial",
    title: "Men's Facial & Skin Care",
    short:
      "Deep cleansing facials designed for men’s skin to remove impurities and restore glow.",
  },
  {
    id: "mens-spa",
    title: "Men's Spa & Massage",
    short:
      "Relaxing head, neck, and shoulder massages for ultimate stress relief and relaxation.",
  },
];

const womenServices = [
  {
    id: "womens-haircut",
    title: "Women's Haircut & Styling",
    short:
      "Trendy cuts, blow-dry styling, and luxury hair spa treatments for all hair types.",
  },
  {
    id: "womens-color",
    title: "Hair Color & Balayage",
    short:
      "Premium color, balayage, and highlights to enhance your look with depth and shine.",
  },
  {
    id: "womens-makeup",
    title: "Bridal & Occasion Makeup",
    short:
      "HD, airbrush, and bridal makeup by expert artists for flawless beauty on your special day.",
  },
  {
    id: "womens-facial",
    title: "Facial & Skin Treatments",
    short:
      "Rejuvenating facials, skin brightening, and anti-aging treatments using premium products.",
  },
  {
    id: "womens-spa",
    title: "Spa & Body Therapies",
    short:
      "Relaxing body massages, scrubs, and aroma therapies to refresh your body and mind.",
  },
];

export default function Services() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Services | Naksh Unisex Salon - Hair, Beauty & Spa Experts</title>
        <meta
          name="description"
          content="Discover Naksh Unisex Salon's premium services for men and women — including haircuts, styling, spa, facials, makeup, and grooming. Book your appointment today!"
        />
        <meta
          name="keywords"
          content="unisex salon services, best salon for men and women, haircuts, spa, beauty treatments, makeup, facial, grooming, Naksh Salon"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-black text-gray-200 min-h-screen py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] tracking-wide">
              Our Premium Services
            </h1>
            <p className="text-gray-400 mt-3">
              Explore luxury beauty and grooming experiences for both men & women.
            </p>
          </motion.div>

          {/* Men Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-[#d4af37] mb-6 border-b border-[#d4af37]/30 pb-2">
              For Men
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {menServices.map((s) => (
                <article
                  key={s.id}
                  className="bg-white/5 border border-[#d4af37]/20 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition"
                >
                  <h3 className="text-2xl font-semibold text-[#d4af37]">{s.title}</h3>
                  <p className="text-gray-300 mt-3">{s.short}</p>
                  <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
                    <li>Expert Consultation</li>
                    <li>Premium Products</li>
                    <li>Personalized Aftercare Advice</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book a ${s.title} service at Naksh Salon.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0c95c] transition inline-block"
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          {/* Women Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-[#d4af37] mb-6 border-b border-[#d4af37]/30 pb-2">
              For Women
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {womenServices.map((s) => (
                <article
                  key={s.id}
                  className="bg-white/5 border border-[#d4af37]/20 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition"
                >
                  <h3 className="text-2xl font-semibold text-[#d4af37]">{s.title}</h3>
                  <p className="text-gray-300 mt-3">{s.short}</p>
                  <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
                    <li>Personalized Consultation</li>
                    <li>Luxury Products & Care</li>
                    <li>Customized Styling & Aftercare</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book a ${s.title} service at Naksh Salon.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0c95c] transition inline-block"
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

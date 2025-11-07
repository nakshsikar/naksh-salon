import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What beauty services does Naksh Salon Sikar offer?",
      answer:
        "Naksh Unisex Salon in Sikar offers complete beauty and grooming services including professional haircuts, bridal makeup, facial treatments, nail art services, hair coloring, nail extensions, beard grooming, and complete beauty solutions for both men and women in Rajasthan.",
    },
    {
      question:
        "Do I need to book an appointment in advance at Naksh Salon Sikar?",
      answer:
        "Yes, we recommend booking your appointment in advance to ensure your preferred time slot with our expert stylists in Sikar. This is especially important for bridal makeup, special occasions, and weekend appointments at our Rajasthan salon.",
    },
    {
      question: "Are your beauty products safe for all skin types in Sikar?",
      answer:
        "Absolutely! At Naksh Salon Sikar, we use only premium, dermatologically-tested products suitable for all skin types. Our products are carefully selected to ensure safety, quality, and complete satisfaction for our clients in Rajasthan.",
    },
    {
      question: "Do you provide bridal makeup packages for Sikar weddings?",
      answer:
        "Yes! We specialize in customized bridal makeup packages for Sikar weddings. Our packages include pre-bridal consultations, trial sessions, complete bridal makeup, hairstyling, and traditional Rajasthani wedding looks to make your special day unforgettable.",
    },
    {
      question:
        "Can I get a personalized beauty consultation at Naksh Salon Sikar?",
      answer:
        "Of course! Our certified stylists in Sikar provide personalized consultations to understand your needs, skin type, and preferences. We suggest the best beauty treatments and styles that suit your personality and lifestyle in Rajasthan.",
    },
    {
      question: "What are the salon timings at Naksh Unisex Salon Sikar?",
      answer:
        "Naksh Unisex Salon in Sikar is open from 10:00 AM to 8:00 PM, all days of the week including Sundays and holidays. We're conveniently located in Sikar, Rajasthan to serve your beauty needs.",
    },
    {
      question: "Do you offer men's grooming services in Sikar?",
      answer:
        "Yes, we offer complete men's grooming services including haircuts, beard styling, facial treatments, hair coloring, and nail care services. Naksh Salon is the preferred unisex salon for men's grooming in Sikar, Rajasthan.",
    },
    {
      question: "What makes Naksh Salon the best beauty salon in Sikar?",
      answer:
        "Naksh Unisex Salon stands out in Sikar due to our certified experts, premium products, modern techniques, hygienic environment, personalized service, and affordable pricing. We're committed to making you look and feel your best in Rajasthan.",
    },
  ];

  // ✅ Single, valid FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://nakshsalon.com/#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* No structured data here — handled in Home.jsx */}

      <section className="relative w-full bg-black text-[#d4af37] py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-black opacity-80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Get answers to common questions about our beauty services in{" "}
            <strong>Sikar, Rajasthan</strong>
          </p>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => toggleFAQ(index)}
              className="group bg-white/5 backdrop-blur-md border border-[#d4af37]/20 hover:border-[#d4af37]/50 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all shadow-md hover:shadow-lg"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-snug tracking-wide pr-4 flex-1">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-bold text-[#d4af37] transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

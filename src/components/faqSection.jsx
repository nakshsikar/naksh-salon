import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Naksh Salon offer?",
      answer:
        "We offer a full range of beauty and grooming services including hair styling, makeup, facials, spa treatments, nail art, and more — all personalized for your style.",
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer:
        "Yes, we recommend booking your appointment in advance to ensure your preferred time slot with our stylists is available.",
    },
    {
      question: "Are your products safe for all skin types?",
      answer:
        "Absolutely! We use only premium, dermatologically-tested products suitable for all skin types, ensuring safety and satisfaction.",
    },
    {
      question: "Do you provide bridal or party makeup packages?",
      answer:
        "Yes! We offer customized bridal, pre-wedding, and event makeup packages designed to make your special day unforgettable.",
    },
    {
      question: "Can I get a personalized consultation before choosing a service?",
      answer:
        "Of course! Our stylists will guide you through a personalized consultation to understand your needs and suggest the best options.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-black py-15  md:px-10 text-[#d4af37] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/60 to-black pointer-events-none"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-glow">Frequently Asked Questions</h2>
        <p className="text-gray-400 mt-3 p-2">
          Have questions? We’ve got you covered 💬
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6 p-2">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
              <span
                className={`text-2xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
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
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

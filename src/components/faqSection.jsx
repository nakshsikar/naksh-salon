import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What beauty services does Naksh Salon Sikar offer?",
      answer: "Naksh Unisex Salon in Sikar offers complete beauty and grooming services including professional haircuts, bridal makeup, facial treatments, Nail Services, hair coloring, Nail Services, beard grooming, and complete beauty solutions for both men and women in Rajasthan.",
    },
    {
      question: "Do I need to book an appointment in advance at Naksh Salon Sikar?",
      answer: "Yes, we recommend booking your appointment in advance to ensure your preferred time slot with our expert stylists in Sikar. This is especially important for bridal makeup, special occasions, and weekend appointments at our Rajasthan salon.",
    },
    {
      question: "Are your beauty products safe for all skin types in Sikar?",
      answer: "Absolutely! At Naksh Salon Sikar, we use only premium, dermatologically-tested products suitable for all skin types. Our products are carefully selected to ensure safety, quality, and complete satisfaction for our clients in Rajasthan.",
    },
    {
      question: "Do you provide bridal makeup packages for Sikar weddings?",
      answer: "Yes! We specialize in customized bridal makeup packages for Sikar weddings. Our packages include pre-bridal consultations, trial sessions, complete bridal makeup, hairstyling, and traditional Rajasthani wedding looks to make your special day unforgettable.",
    },
    {
      question: "Can I get a personalized beauty consultation at Naksh Salon Sikar?",
      answer: "Of course! Our certified stylists in Sikar provide personalized consultations to understand your needs, skin type, and preferences. We suggest the best beauty treatments and styles that suit your personality and lifestyle in Rajasthan.",
    },
    {
      question: "What are the salon timings at Naksh Unisex Salon Sikar?",
      answer: "Naksh Unisex Salon in Sikar is open from 10:00 AM to 8:00 PM, all days of the week including Sundays and holidays. We're conveniently located in Sikar, Rajasthan to serve your beauty needs.",
    },
    {
      question: "Do you offer men's grooming services in Sikar?",
      answer: "Yes, we offer complete men's grooming services including haircuts, beard styling, facial treatments, hair coloring, and Nail Services. Naksh Salon is the preferred unisex salon for men's grooming in Sikar, Rajasthan.",
    },
    {
      question: "What makes Naksh Salon the best beauty salon in Sikar?",
      answer: "Naksh Unisex Salon stands out in Sikar due to our certified experts, premium products, modern techniques, hygienic environment, personalized service, and affordable pricing. We're committed to making you look and feel your best in Rajasthan.",
    }
  ];

  // Structured Data for FAQ Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <section
        id="faq"
        className="relative w-full bg-black py-16 px-6 md:px-20 text-[#d4af37] overflow-hidden"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/60 to-black pointer-events-none"></div>

        {/* Heading with Local SEO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Frequently Asked Questions - Naksh Salon Sikar
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get answers to common questions about our beauty services in <strong>Sikar, Rajasthan</strong>
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-6 cursor-pointer hover:border-[#d4af37]/40 transition-all"
              onClick={() => toggleFAQ(index)}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div className="flex justify-between items-center">
                <h3 
                  className="text-lg md:text-xl font-semibold text-white pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl transition-transform duration-300 flex-shrink-0 ${
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
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p 
                      className="text-gray-300 mt-4 leading-relaxed text-lg"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mt-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Contact Naksh Unisex Salon in Sikar directly for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918690900970"
                className="bg-[#d4af37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e0c95c] transition"
                aria-label="Call Naksh Salon Sikar"
              >
                📞 Call +91-8690900970
              </a>
              <a
                href="https://wa.me/918690900970"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-black transition"
                aria-label="WhatsApp Naksh Salon Sikar"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hidden SEO Content */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>FAQ - Naksh Unisex Salon Sikar Beauty Services</h1>
          <p>Frequently asked questions about hair styling, bridal makeup, facial treatments, Nail Services and beauty solutions at Naksh Unisex Salon in Sikar, Rajasthan. Get information about appointments, pricing, services and more.</p>
        </div>
      </section>
    </>
  );
}

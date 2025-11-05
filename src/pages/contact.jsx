import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check if all fields are filled
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.service.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        type: "error",
        msg: "Please fill all required fields before submitting.",
      });
      return;
    }

    setStatus({ type: "loading", msg: "Sending..." });

    const currentYear = new Date().getFullYear();
    emailjs
      .send(
        "service_v6wpigq",
        "template_ix4xz3c",
        { ...form, year: currentYear },
        "xT812jFctcGuHma95"
      )
      .then(
        () => {
          setStatus({ type: "success", msg: "Message sent successfully! We'll contact you soon." });
          setForm({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus({ type: "error", msg: "Failed to send message. Please call us directly." });
        }
      );
  };

  // Structured Data for Contact Page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Naksh Unisex Salon Sikar",
    "description": "Get in touch with Naksh Unisex Salon for hair styling, bridal makeup, facial and Nail Services in Sikar, Rajasthan",
    "url": "https://nakshsalon.in/contact",
    "mainEntity": {
      "@type": "BeautySalon",
      "name": "Naksh Unisex Salon",
      "telephone": "+91-8690900970",
      "email": "info@nakshsalon.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shri Yash Tower Road, Opposite Apple Imagine Store, Near Pawan Travels",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan",
        "postalCode": "332001",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 10:00-20:00",
      "areaServed": "Sikar",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beauty Services"
      }
    }
  };

  return (
    <>
      {/* ✅ Enhanced SEO Meta Tags */}
      <Helmet>
        <title>Contact Naksh Salon Sikar | Best Hair, Beauty & Nail Services in Rajasthan</title>
        <meta
          name="description"
          content="Contact Naksh Unisex Salon Sikar for professional haircuts, bridal makeup, facial, spa & beauty services. Call +91-8690900970 or visit Shri Yash Tower Road, Sikar."
        />
        <meta
          name="keywords"
          content="contact naksh salon, salon in sikar contact, beauty parlour sikar, hair salon sikar, bridal makeup contact, facial appointment sikar, spa booking rajasthan"
        />
        <meta name="author" content="Naksh Unisex Salon" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakshsalon.in/contact" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Naksh Salon Sikar | Best Beauty Services in Rajasthan" />
        <meta property="og:description" content="Get in touch with Naksh Unisex Salon Sikar for hair, makeup, facial and Nail Services. Call +91-8690900970 for appointments." />
        <meta property="og:url" content="https://nakshsalon.in/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Contact Naksh Salon Sikar" />
        <meta name="twitter:description" content="Professional beauty services in Sikar. Call +91-8690900970 for appointments." />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </script>

      {/* ✨ Contact Section */}
      <section className="bg-black text-[#d4af37] min-h-screen mt-5 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-semibold">Contact Naksh Salon Sikar</h1>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Get in touch with Sikar's best unisex salon for premium hair styling, 
              bridal makeup, facial treatments, and relaxing Nail Services.
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-[#d4af37]/20 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-6">Visit Our Salon in Sikar</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">📍</span>
                  <div>
                    <h3 className="font-semibold text-white">Salon Address</h3>
                    <p className="text-gray-300">
                      Shri Yash Tower Road, Near Pawan Travels, Opposite Apple Imagine Store<br />
               Sikar, Rajasthan – 332001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">📞</span>
                  <div>
                    <h3 className="font-semibold text-white">Phone Number</h3>
                    <a href="tel:+918690900970" className="text-gray-300 hover:text-[#d4af37] transition">
                      +91 8690900970, 7877705277
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">🕒</span>
                  <div>
                    <h3 className="font-semibold text-white">Opening Hours</h3>
                    <p className="text-gray-300">
                      Monday - Sunday: 10:00 AM - 8:00 PM<br />
                      Open All Days
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#d4af37] mr-3 mt-1">💬</span>
                  <div>
                    <h3 className="font-semibold text-white">Quick Connect</h3>
                    <a 
                      href="https://wa.me/918690900970?text=Hi! I want to book an appointment at Naksh Salon Sikar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#d4af37] transition block"
                    >
                      WhatsApp: +91 8690900970
                    </a>
                  </div>
                </div>
              </div>

              {/* Services Quick List */}
              <div className="mt-8">
                <h3 className="font-semibold text-white mb-3">Popular Services in Sikar:</h3>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                  <span>• Haircut & Styling</span>
                  <span>• Bridal Makeup</span>
                  <span>• Facial Treatment</span>
                  <span>• Hair Coloring</span>
                  <span>• Nail Services</span>
                  <span>• Beard Grooming</span>
                </div>
              </div>
            </motion.div>

            {/* ✉️ Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-[#d4af37]/20 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-6">Book Your Appointment</h2>

              <div className="grid gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition"
                  required
                  aria-label="Your Full Name"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition"
                  required
                  aria-label="Your Email Address"
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition"
                  required
                  aria-label="Your Phone Number"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition"
                  required
                  aria-label="Select Service"
                >
                  <option value="">Select Service *</option>
                  <option value="Haircut & Styling">Haircut & Styling</option>
                  <option value="Bridal & Makeup">Bridal & Makeup</option>
                  <option value="Facial Treatment">Facial Treatment</option>
                  <option value="Nail Art & Design">Nail Art & Design</option>
                  <option value="Hair Coloring">Hair Coloring</option>
                  <option value="Beard Grooming">Beard Grooming</option>
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message or Special Requirements *"
                className="w-full mt-4 p-3 rounded-md bg-black/40 border border-white/10 text-gray-200 min-h-[120px] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition"
                required
                aria-label="Your Message"
              />

              <button 
                type="submit" 
                className="w-full bg-[#d4af37] text-black py-3 rounded-md font-semibold hover:bg-[#e0c95c] transition-all mt-6"
                disabled={status?.type === "loading"}
              >
                {status?.type === "loading" ? "Sending..." : "Send Message & Book Appointment"}
              </button>

              {status && (
                <div className={`mt-4 text-center text-sm ${
                  status.type === "error" ? "text-red-400" : 
                  status.type === "success" ? "text-green-400" : "text-gray-300"
                }`}>
                  {status.msg}
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* 🗺️ Google Map Section */}
      <section className="w-full bg-black text-[#d4af37] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Find Us in Sikar</h2>
          
          {/* 🗺️ Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              title="Naksh Unisex Salon Location in Sikar, Rajasthan"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Shri%20Yash%20Tower%20Road,%20Opposite%20Apple%20Imagine%20Store,%20Near%20Pawan%20Travels,%20Sikar,%20Rajasthan+(Naksh%20Unisex%20Salon)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>

          {/* 🏷️ Salon Info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">📍 Naksh Unisex Salon Sikar</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Shri Yash Tower Road, Near Pawan Travels, Opposite Apple Imagine Store<br />
               Sikar, Rajasthan – 332001
            </p>
            <p className="mt-4 text-gray-400">
              Open Daily: 10:00 AM – 8:00 PM | 
              Call: <a href="tel:+918690900970" className="text-[#d4af37] underline hover:text-yellow-400 ml-1">+91 8690900970, 7877705277</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
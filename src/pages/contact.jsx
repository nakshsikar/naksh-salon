import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_v6wpigq",
  TEMPLATE_ID: "template_ix4xz3c",
  PUBLIC_KEY: "xT812jFctcGuHma95",
};

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    location: "",
    msg: null,
    isSubmitting: false,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.gender || !form.age || !form.location) {
      setForm((prev) => ({ ...prev, msg: "⚠️ Please fill all fields before submitting." }));
      return;
    }

    setForm((prev) => ({ ...prev, isSubmitting: true, msg: "📨 Sending your message..." }));

    try {
      const currentYear = new Date().getFullYear();

      const templateParams = {
        to_email: "naksh.sikar@gmail.com",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        gender: form.gender,
        age: form.age,
        location: form.location,
        message: `
📩 New Contact Request from Naksh Salon Website

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
🚻 Gender: ${form.gender}
🎂 Age: ${form.age}
📍 Location: ${form.location}

Sent via Naksh Unisex Salon Website - ${currentYear}
        `,
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.text === "OK") {
        setForm({
          name: "",
          email: "",
          phone: "",
          gender: "",
          age: "",
          location: "",
          msg: "✅ Thank you! Your message has been sent successfully.",
          isSubmitting: false,
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setForm((prev) => ({
        ...prev,
        msg: "❌ Failed to send message. Please try again later.",
        isSubmitting: false,
      }));
    }
  };

  // Schema Markup (SEO)
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Naksh Salon",
    "description": "Contact Naksh Salon Sikar for beauty services, nail training, and hair treatments in Rajasthan.",
    "url": "https://nakshsalon.com/contact",
    "telephone": "+91-8690900970",
    "email": "naksh.sikar@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shri Yash Tower Road, Near Pawan Travels, Sikar",
      "addressLocality": "Sikar",
      "addressRegion": "Rajasthan",
      "postalCode": "332001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.6094",
      "longitude": "75.1399",
    },
    "openingHours": "Mo-Su 10:00-20:00",
  };

  return (
    <>
      <Helmet>
        <title>Contact Naksh Salon Sikar | Book Appointment & Inquiries</title>
        <meta
          name="description"
          content="Get in touch with Naksh Salon Sikar, Rajasthan for appointments, beauty consultations, and training inquiries. Fill our quick contact form today!"
        />
        <meta
          name="keywords"
          content="contact naksh salon, sikar beauty salon contact, naksh unisex salon phone number, salon near me, salon appointment sikar, hair & beauty services"
        />
        <meta name="author" content="Naksh Salon" />
        <link rel="canonical" href="https://nakshsalon.com/contact" />
        <meta property="og:title" content="Contact Naksh Salon Sikar | Beauty & Training Inquiries" />
        <meta property="og:description" content="Contact Naksh Unisex Salon Sikar for salon appointments, nail training, or hair care services." />
        <meta property="og:url" content="https://nakshsalon.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Naksh Unisex Salon Sikar" />
        <meta name="twitter:description" content="Reach out to Naksh Unisex Salon for beauty services and salon training programs in Sikar." />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>

      <section className="bg-black text-[#d4af37] min-h-screen py-16 px-6 md:px-20 mt-10">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37]">Contact Naksh Salon</h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
            Have questions or want to book an appointment? Fill the form below or reach out directly — we’d love to hear from you.
          </p>
        </motion.header>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-[#d4af37] mb-5">Get In Touch</h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className="w-full p-3 mb-4 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className="w-full p-3 mb-4 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
            />

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="w-full p-3 mb-4 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
            />

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
            >
              <option value="">Select Gender *</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              placeholder="Your Age *"
              className="w-full p-3 mb-4 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Your City / Location *"
              className="w-full p-3 mb-6 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
            />

            <button
              type="submit"
              disabled={form.isSubmitting}
              className="w-full bg-[#d4af37] text-black py-3 rounded-md font-medium hover:bg-[#c29d2d] transition-all disabled:opacity-50"
            >
              {form.isSubmitting ? "Sending..." : "Submit"}
            </button>

            {form.msg && (
              <p
                className={`text-sm mt-4 text-center ${
                  form.msg.includes("✅")
                    ? "text-green-400"
                    : form.msg.includes("❌")
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {form.msg}
              </p>
            )}
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Our Salon</h2>
            <p className="text-gray-300 mb-2">
              <strong>Naksh Salon</strong>
            </p>
            <p className="text-gray-300 mb-2">📞 +91-8690900970, 7877705277</p>
            <p className="text-gray-300 mb-6">✉️ naksh.sikar@gmail.com</p>

            <iframe
              title="Naksh Salon Sikar Location"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Shri Yash Tower Road, Sikar&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-[#d4af37]/20"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}

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
          setStatus({ type: "success", msg: "Message sent successfully!" });
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
          setStatus({ type: "error", msg: "Failed to send message." });
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Naksh Unisex Salon | Best Hair, Beauty & Spa Services in Sikar
        </title>
        <meta
          name="description"
          content="Get in touch with Naksh Unisex Salon for expert hair styling, bridal makeup, facial treatments, and spa services. Call or message us today for appointments, offers, and beauty consultations."
        />
      </Helmet>

      {/* ✨ Contact Section */}
      <section className="bg-black text-[#d4af37] min-h-screen mt-5 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-semibold">Get in Touch</h1>
            <p className="text-gray-400 mt-3">
              Questions or booking requests? Send us a message.
            </p>
          </motion.header>

          {/* ✉️ Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name *"
                className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200"
                required
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200"
                required
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone *"
                className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200"
                required
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="p-3 rounded-md bg-black/40 border border-white/10 text-gray-200"
                required
              >
                <option value="">Interested Service *</option>
                <option value="Haircut & Styling">Haircut & Styling</option>
                <option value="Bridal & Makeup">Bridal & Makeup</option>
                <option value="Facial Treatment">Facial Treatment</option>
                <option value="Spa & Relaxation">Spa & Relaxation</option>
              </select>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message *"
              className="w-full mt-4 p-3 rounded-md bg-black/40 border border-white/10 text-gray-200 min-h-[120px]"
              required
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
              <button type="submit" className="btn-gold w-full sm:w-auto py-3">
                Send Message
              </button>
              <div className="text-sm text-gray-300 mt-4 sm:mt-0 sm:ml-4">
                {status?.type === "loading" && "Sending..."}
                {status?.type === "error" && (
                  <span className="text-red-400">{status.msg}</span>
                )}
                {status?.type === "success" && (
                  <span className="text-green-400">{status.msg}</span>
                )}
              </div>
            </div>
          </form>

          {/* 📞 Contact Details */}
          <div className="mt-12 text-center space-y-4">
            <h2 className="text-2xl font-semibold text-[#d4af37]">
              Contact Information
            </h2>
            <p className="text-gray-300">
              Call us at:{" "}
              <a href="tel:+918690900970" className="text-[#d4af37]">
                +91 86909 00970
              </a>{" "}
              |{" "}
              <a href="tel:+917877705277" className="text-[#d4af37]">
                +91 78777 05277
              </a>
            </p>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:naksh.sikar@gmail.com"
                className="text-[#d4af37]"
              >
                naksh.sikar@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 🗺️ Google Map Section */}
      <section className="w-full">
        <iframe
          title="Naksh Unisex Salon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.505329992925!2d75.13474377479692!3d27.60948477627573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cb68fdbf6b73f%3A0x6d5e41cfd646f18b!2sNaksh%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1730717182000!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </section>
    </>
  );
}

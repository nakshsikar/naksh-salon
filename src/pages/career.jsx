import React, { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    id: "nail-academy-learner",
    title: "Nail Academy Learner",
    desc: "Join our nail academy to master creative nail art and extension techniques under expert guidance. No prior experience required.",
  },
  {
    id: "skin-treatment-learner",
    title: "Skin Treatment Learner",
    desc: "Learn advanced facials, peels, and skincare procedures from certified professionals. Perfect for beginners interested in beauty care.",
  },
  {
    id: "hair-chemical-learner",
    title: "Hair Chemical Learner",
    desc: "Get hands-on training in hair coloring, keratin, smoothening, and chemical treatments with step-by-step professional support.",
  },
];


export default function Career() {
  const [apply, setApply] = useState({
    jobId: "",
    name: "",
    email: "",
    phone: "",
    resume: null,
    msg: null,
  });

  const handleChange = (e) =>
    setApply({ ...apply, [e.target.name]: e.target.value });
  const handleFile = (e) =>
    setApply({ ...apply, resume: e.target.files[0] });

  const handleApply = (e) => {
    e.preventDefault();
    if (
      !apply.jobId ||
      !apply.name ||
      !apply.email ||
      !apply.phone ||
      !apply.resume
    ) {
      setApply((prev) => ({
        ...prev,
        msg: "⚠️ Please fill out all required fields before submitting.",
      }));
      return;
    }

    setApply((prev) => ({
      ...prev,
      msg: "✅ Application submitted successfully! We'll get in touch soon.",
    }));
  };

  return (
    <section
      className="bg-black text-[#d4af37] min-h-screen mt-10 py-16 px-6 md:px-20"
      id="careers"
    >
      {/* SEO Header */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#d4af37]">
          Careers at Naksh Salon
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Be a part of the creative Naksh Unisex Salon team. Learn, grow, and
          inspire in a professional and nurturing salon environment.
        </p>
      </motion.header>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Job Listings */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">
            Current Openings
          </h2>
          {jobs.map((j) => (
            <motion.div
              key={j.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all p-5 rounded-2xl mb-4 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#d4af37]">
                {j.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm md:text-base">
                {j.desc}
              </p>
              <button
                onClick={() => setApply((prev) => ({ ...prev, jobId: j.id }))}
                className="mt-4 bg-[#d4af37] text-black px-5 py-2 rounded-md font-medium hover:bg-[#c29d2d] transition-all"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.form
          onSubmit={handleApply}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[#d4af37] mb-5">
            Apply for a Role
          </h2>

          <select
            name="jobId"
            value={apply.jobId}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
          >
            <option value="">Select Role *</option>
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>
                {j.title}
              </option>
            ))}
          </select>

          <input
            name="name"
            value={apply.name}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
          />

          <input
            name="email"
            type="email"
            value={apply.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
          />

          <input
            name="phone"
            type="tel"
            value={apply.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
          />

          {/* File Upload */}
          <label className="block mb-4">
            <span className="text-gray-300 text-sm mb-1 block">
              Upload Resume (PDF/DOC) *
            </span>
            <input
              type="file"
              onChange={handleFile}
              required
              className="w-full file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#d4af37] file:text-black hover:file:bg-[#c29d2d] text-gray-200 cursor-pointer"
              accept=".pdf,.doc,.docx"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#d4af37] text-black py-3 rounded-md font-medium hover:bg-[#c29d2d] transition-all"
          >
            Submit Application
          </button>

          {apply.msg && (
            <p className="text-sm mt-4 text-gray-300 text-center">
              {apply.msg}
            </p>
          )}
        </motion.form>
      </div>

      {/* SEO Footer Summary */}
      <div className="mt-16 text-center text-gray-400 text-sm max-w-2xl mx-auto">
        <p>
          Join <strong>Naksh Unisex Salon</strong> as a{" "}
          <strong>Nail Academy Trainer</strong>,{" "}
          <strong>Skin Treatment Specialist</strong>, or{" "}
          <strong>Hair Chemical Expert</strong>. Grow your career in a
          professional environment that values creativity, skill, and customer
          excellence.
        </p>
      </div>
    </section>
  );
}

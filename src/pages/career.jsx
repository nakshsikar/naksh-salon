import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const jobs = [
  {
    id: "nail-academy-learner",
    title: "Nail Academy Learner",
    desc: "Join our nail academy in Sikar to master creative Nail Services and extension techniques under expert guidance. No prior experience required.",
    location: "Sikar, Rajasthan",
    type: "Training Program",
    experience: "Freshers Welcome"
  },
  {
    id: "skin-treatment-learner",
    title: "Skin Treatment Learner",
    desc: "Learn advanced facials, peels, and skincare procedures from certified professionals at Naksh Salon Sikar. Perfect for beginners interested in beauty care.",
    location: "Sikar, Rajasthan",
    type: "Training Program", 
    experience: "No Experience Needed"
  },
  {
    id: "hair-chemical-learner",
    title: "Hair Chemical Learner",
    desc: "Get hands-on training in hair coloring, keratin, smoothening, and chemical treatments at our Sikar salon with step-by-step professional support.",
    location: "Sikar, Rajasthan",
    type: "Training Program",
    experience: "Beginner Friendly"
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

  // Structured Data for Job Postings
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Career Opportunities at Naksh Unisex Salon",
    "description": "Job openings and training programs at Naksh Unisex Salon in Sikar, Rajasthan",
    "url": "https://nakshsalon.in/career",
    "numberOfItems": jobs.length,
    "itemListElement": jobs.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": job.desc,
        "datePosted": "2024-12-01",
        "validThrough": "2025-03-01",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Naksh Unisex Salon",
          "sameAs": "https://nakshsalon.in"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sikar",
            "addressRegion": "Rajasthan",
            "postalCode": "332001"
          }
        },
        "experienceRequirements": {
          "@type": "OccupationalExperienceRequirements",
          "monthsOfExperience": 0
        }
      }
    }))
  };

  return (
    <>
      {/* ✅ Enhanced SEO Meta Tags */}
      <Helmet>
        <title>Careers at Naksh Salon Sikar | Beauty Jobs & Training Programs Rajasthan</title>
        <meta
          name="description"
          content="Join Naksh Unisex Salon Sikar - Career opportunities in beauty industry. Nail Services training, skin treatment courses, hair chemical programs in Rajasthan."
        />
        <meta
          name="keywords"
          content="beauty jobs sikar, salon careers rajasthan, nail academy training, skin treatment courses, hair chemical programs, beauty industry jobs, naksh salon careers"
        />
        <meta name="author" content="Naksh Unisex Salon" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakshsalon.in/career" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Careers at Naksh Salon Sikar | Beauty Industry Jobs & Training" />
        <meta property="og:description" content="Join Naksh Unisex Salon in Sikar - Career opportunities in Nail Services, skin treatment and hair chemical training programs." />
        <meta property="og:url" content="https://nakshsalon.in/career" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Careers at Naksh Salon Sikar" />
        <meta name="twitter:description" content="Beauty industry jobs and training programs at Naksh Unisex Salon in Sikar, Rajasthan." />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(jobPostingSchema)}
      </script>

      <section
        className="bg-black text-[#d4af37] min-h-screen mt-10 py-16 px-6 md:px-20"
        id="careers"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <meta itemProp="name" content="Careers - Naksh Unisex Salon Sikar" />
        <meta itemProp="description" content="Career opportunities and training programs at Naksh Unisex Salon in Sikar, Rajasthan" />
        
        {/* SEO Header */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#d4af37]" itemProp="headline">
            Careers at Naksh Salon Sikar
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
            Join Rajasthan's premier unisex salon in <strong>Sikar</strong>. Learn, grow, and 
            build your career in the beauty industry with expert training and professional development.
          </p>
        </motion.header>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Job Listings */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">
              Current Openings in Sikar
            </h2>
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all p-6 rounded-2xl mb-6 shadow-lg"
                itemScope
                itemType="https://schema.org/JobPosting"
              >
                <h3 className="text-xl font-semibold text-[#d4af37]" itemProp="title">
                  {job.title}
                </h3>
                
                {/* Job Meta Info */}
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-300">
                  <span className="bg-[#d4af37]/20 px-2 py-1 rounded" itemProp="jobLocation">
                    📍 {job.location}
                  </span>
                  <span className="bg-[#d4af37]/20 px-2 py-1 rounded" itemProp="employmentType">
                    {job.type}
                  </span>
                  <span className="bg-[#d4af37]/20 px-2 py-1 rounded">
                    {job.experience}
                  </span>
                </div>

                <p className="text-gray-300 mt-3 text-sm md:text-base" itemProp="description">
                  {job.desc}
                </p>
                
                <button
                  onClick={() => setApply((prev) => ({ ...prev, jobId: job.id }))}
                  className="mt-4 bg-[#d4af37] text-black px-5 py-2 rounded-md font-medium hover:bg-[#c29d2d] transition-all"
                  aria-label={`Apply for ${job.title} position`}
                >
                  Apply Now
                </button>

                {/* Hidden SEO Metadata */}
                <meta itemProp="datePosted" content="2024-12-01" />
                <meta itemProp="hiringOrganization" content="Naksh Unisex Salon" />
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <motion.form
            onSubmit={handleApply}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border h-130 border-[#d4af37]/20 p-6 rounded-2xl shadow-lg sticky top-24"
          >
            <h2 className="text-2xl font-semibold text-[#d4af37] mb-5">
              Apply for Beauty Career in Sikar
            </h2>

            <select
              name="jobId"
              value={apply.jobId}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
              aria-label="Select Job Role"
            >
              <option value="">Select Training Program *</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title} - {job.location}
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
              aria-label="Your Full Name"
            />

            <input
              name="email"
              type="email"
              value={apply.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
              aria-label="Your Email Address"
            />

            <input
              name="phone"
              type="tel"
              value={apply.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none"
              aria-label="Your Phone Number"
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
                aria-label="Upload your resume"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-black py-3 rounded-md font-medium hover:bg-[#c29d2d] transition-all"
              aria-label="Submit job application"
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

        {/* Benefits Section for SEO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-[#d4af37]/20 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-[#d4af37] mb-6 text-center">
            Why Join Naksh Salon Sikar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="text-center">
              <h3 className="font-semibold text-[#d4af37] mb-2">Expert Training</h3>
              <p>Learn from certified professionals in Sikar's best salon environment</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[#d4af37] mb-2">Career Growth</h3>
              <p>Opportunities for advancement in Rajasthan's beauty industry</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[#d4af37] mb-2">Modern Facilities</h3>
              <p>Work with latest equipment and premium products in Sikar</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[#d4af37] mb-2">Supportive Team</h3>
              <p>Join a collaborative environment that values your growth</p>
            </div>
          </div>
        </motion.div>

        {/* SEO Footer Summary */}
        <div className="mt-12 text-center text-gray-400 text-sm max-w-2xl mx-auto">
          <p className="text-lg">
            Build your beauty career with <strong>Naksh Unisex Salon Sikar</strong> - 
            Rajasthan's leading salon for <strong>Nail Services training</strong>,{" "}
            <strong>skin treatment programs</strong>, and{" "}
            <strong>hair chemical courses</strong>. Start your journey in Sikar's 
            most professional beauty environment today.
          </p>
        </div>
      </section>
    </>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const jobs = [
  {
    id: "nail-academy-learner",
    title: "Nail Academy Learner",
    desc: "Join our nail academy in Sikar to master creative Nail Services and extension techniques under expert guidance. No prior experience required.",
    location: "Sikar, Rajasthan",
    type: "FULL_TIME",
    experience: "Freshers Welcome",
    validThrough: "2025-03-01",
  },
  {
    id: "skin-treatment-learner",
    title: "Skin Treatment Learner",
    desc: "Learn advanced facials, peels, and skincare procedures from certified professionals at Naksh Salon Sikar. Perfect for beginners interested in beauty care.",
    location: "Sikar, Rajasthan",
    type: "FULL_TIME",
    experience: "No Experience Needed",
    validThrough: "2025-03-01",
  },
  {
    id: "hair-chemical-learner",
    title: "Hair Chemical Learner",
    desc: "Get hands-on training in hair coloring, keratin, smoothening, and chemical treatments at our Sikar salon with step-by-step professional support.",
    location: "Sikar, Rajasthan",
    type: "FULL_TIME",
    experience: "Beginner Friendly",
    validThrough: "2025-03-01",
  },
];

const WHATSAPP_NUMBER = "918690900970";

export default function Career() {
  const [apply, setApply] = useState({
    jobId: "",
    name: "",
    email: "",
    phone: "",
    msg: null,
    isSubmitting: false,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => setApply({ ...apply, [e.target.name]: e.target.value });

  const openPopup = (jobId) => {
    setApply((prev) => ({ ...prev, jobId, msg: null }));
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setApply({
      jobId: "",
      name: "",
      email: "",
      phone: "",
      msg: null,
      isSubmitting: false,
    });
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (!apply.jobId || !apply.name || !apply.email || !apply.phone) {
      setApply((prev) => ({
        ...prev,
        msg: "⚠️ Please fill out all required fields before submitting.",
      }));
      return;
    }

    setApply((prev) => ({ ...prev, isSubmitting: true, msg: "📱 Opening WhatsApp..." }));

    try {
      const selectedJob = jobs.find((job) => job.id === apply.jobId);
      const message = `🚀 *NEW CAREER APPLICATION - NAKSH SALON SIKAR* 🚀

*Applicant Information:*
📛 *Full Name:* ${apply.name}
📧 *Email:* ${apply.email}
📞 *Phone:* ${apply.phone}

*Application Details:*
🎯 *Training Program:* ${selectedJob?.title}
📍 *Location:* ${selectedJob?.location}
📋 *Program Type:* ${selectedJob?.type}
💼 *Experience Level:* ${selectedJob?.experience}

*Additional Information:*
I'm interested in joining the ${selectedJob?.title} program at Naksh Salon Sikar. Please contact me for more details about the application process.

_This application was submitted via Naksh Salon Website_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      setApply((prev) => ({
        ...prev,
        isSubmitting: false,
        msg: "✅ WhatsApp opened! Please send the pre-filled message to complete your application.",
      }));

      setTimeout(() => closePopup(), 3000);
    } catch (error) {
      console.error("WhatsApp Error:", error);
      setApply((prev) => ({
        ...prev,
        isSubmitting: false,
        msg: "❌ Failed to open WhatsApp. Please try again or contact us directly.",
      }));
    }
  };

  return (
    <>
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
        <link rel="canonical" href="https://nakshsalon.com/career" />

        {/* ✅ Structured Data for Each Job */}
        {jobs.map((job) => (
          <script key={job.id} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "JobPosting",
              "title": job.title,
              "description": job.desc,
              "datePosted": "2024-12-01",
              "validThrough": job.validThrough,
              "employmentType": job.type,
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Naksh Unisex Salon",
                "sameAs": "https://nakshsalon.com",
                "logo": "https://nakshsalon.com/logo.png",
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Shri Yash Tower Road, Near Pawan Travels",
                  "addressLocality": "Sikar",
                  "addressRegion": "Rajasthan",
                  "postalCode": "332001",
                  "addressCountry": "IN",
                },
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": 0,
                  "unitText": "MONTH",
                },
              },
              "applicantLocationRequirements": {
                "@type": "Country",
                "name": "India",
              },
              "identifier": {
                "@type": "PropertyValue",
                "name": "Naksh Unisex Salon",
                "value": job.id,
              },
            })}
          </script>
        ))}
      </Helmet>

      {/* ---------- PAGE CONTENT BELOW ---------- */}

      <section className="bg-black text-[#d4af37] min-h-screen mt-10 py-16 px-6 md:px-20" id="careers">
        <motion.header initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#d4af37]">
            Careers at Naksh Salon Sikar
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg">
            Join Rajasthan's premier unisex salon in <strong>Sikar</strong>. Learn, grow, and build your career in the beauty industry with expert training.
          </p>
        </motion.header>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">Current Openings in Sikar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all p-6 rounded-2xl shadow-lg flex flex-col h-full">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-3">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-300">
                  <span className="bg-[#d4af37]/20 px-2 py-1 rounded text-xs">📍 {job.location}</span>
                  <span className="bg-[#d4af37]/20 px-2 py-1 rounded text-xs">{job.experience}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{job.desc}</p>
                <button
                  onClick={() => openPopup(job.id)}
                  className="w-full bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c29d2d] transition-all text-sm"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePopup}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-br from-black to-gray-900 border border-[#d4af37]/30 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              
              <div className="border-b border-[#d4af37]/20 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#d4af37]">Apply via WhatsApp</h2>
                <button onClick={closePopup} className="text-gray-400 hover:text-[#d4af37] text-2xl font-bold">×</button>
              </div>

              {/* ✅ New confirmation message at top */}
              <div className="bg-[#d4af37]/10 text-gray-300 text-sm text-center px-6 py-3 border-b border-[#d4af37]/20">
                📩 We’ve received your message. Our team will review it and respond within <strong>24–48 hours</strong>.
              </div>

              <form onSubmit={handleApply} className="p-6">
                <input name="name" value={apply.name} onChange={handleChange} placeholder="Full Name *" required className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4"/>
                <input name="email" type="email" value={apply.email} onChange={handleChange} placeholder="Email Address *" required className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4"/>
                <input name="phone" type="tel" value={apply.phone} onChange={handleChange} placeholder="Phone Number *" required className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-6"/>

                <button type="submit" disabled={apply.isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-all disabled:opacity-50 flex justify-center gap-2">
                  {apply.isSubmitting ? "Opening WhatsApp..." : "📱 Send via WhatsApp"}
                </button>

                {apply.msg && (
                  <p className={`text-sm mt-4 text-center ${
                    apply.msg.includes("✅") ? "text-green-400" : 
                    apply.msg.includes("⚠️") ? "text-yellow-400" : "text-gray-300"
                  }`}>{apply.msg}</p>
                )}

                {/* ✅ Resume reminder below form */}
                <p className="mt-6 text-gray-400 text-xs text-center border-t border-[#d4af37]/10 pt-3 italic">
                  📄 When visiting our salon, please bring a copy of your updated resume.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// WhatsApp Configuration
const WHATSAPP_NUMBER = "918690900970"; // Your WhatsApp number with country code

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

  const handleChange = (e) =>
    setApply({ ...apply, [e.target.name]: e.target.value });

  const openPopup = (jobId) => {
    setApply(prev => ({ ...prev, jobId, msg: null }));
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
    
    // Validation
    if (!apply.jobId || !apply.name || !apply.email || !apply.phone) {
      setApply((prev) => ({
        ...prev,
        msg: "⚠️ Please fill out all required fields before submitting.",
      }));
      return;
    }

    setApply((prev) => ({ ...prev, isSubmitting: true, msg: "📱 Opening WhatsApp..." }));

    try {
      // Get selected job details
      const selectedJob = jobs.find(job => job.id === apply.jobId);

      // Create WhatsApp message
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

      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      // Show success message
      setApply((prev) => ({
        ...prev,
        isSubmitting: false,
        msg: "✅ WhatsApp opened! Please send the pre-filled message to complete your application.",
      }));

      // Auto close popup after 3 seconds
      setTimeout(() => {
        closePopup();
      }, 3000);

    } catch (error) {
      console.error('WhatsApp Error:', error);
      setApply((prev) => ({
        ...prev,
        isSubmitting: false,
        msg: "❌ Failed to open WhatsApp. Please try again or contact us directly.",
      }));
    }
  };

  // Structured Data for Job Postings
  const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Career Opportunities at Naksh Unisex Salon",
  "description": "Job openings and training programs at Naksh Unisex Salon in Sikar, Rajasthan",
  "url": "https://nakshsalon.com/career",
  "numberOfItems": jobs.length,
  "itemListElement": jobs.map((job, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "JobPosting",
      "title": job.title,
      "description": job.desc,
      "datePosted": "2024-12-01",
      // ✅ Fixed: validThrough (required by Google)
      "validThrough": "2025-03-01",
      // ✅ Fixed: proper employmentType
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Naksh Unisex Salon",
        "sameAs": "https://nakshsalon.com",
        "logo": "https://nakshsalon.com/logo.png"
      },
      // ✅ Fixed: jobLocation now includes address (required)
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shri Yash Tower Road, Near Pawan Travels",
          "addressLocality": "Sikar",
          "addressRegion": "Rajasthan",
          "postalCode": "332001",
          "addressCountry": "IN"
        }
      },
      // ✅ Fixed: baseSalary included (even if unpaid training)
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "value": 0,
          "unitText": "MONTH"
        }
      },
      // ✅ Optional but improves context
      "experienceRequirements": {
        "@type": "OccupationalExperienceRequirements",
        "monthsOfExperience": 0
      },
      "applicantLocationRequirements": {
        "@type": "Country",
        "name": "India"
      },
      "identifier": {
        "@type": "PropertyValue",
        "name": "Naksh Unisex Salon",
        "value": job.id
      }
    }
  }))
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
        <meta property="og:title" content="Careers at Naksh Salon Sikar | Beauty Industry Jobs & Training" />
        <meta property="og:description" content="Join Naksh Unisex Salon in Sikar - Career opportunities in Nail Services, skin treatment and hair chemical training programs." />
        <meta property="og:url" content="https://nakshsalon.com/career" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Careers at Naksh Salon Sikar" />
        <meta name="twitter:description" content="Beauty industry jobs and training programs at Naksh Unisex Salon in Sikar, Rajasthan." />
      </Helmet>

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

        <div className="max-w-6xl mx-auto">
          {/* Job Listings - Full Width Now */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">
              Current Openings in Sikar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-md border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all p-6 rounded-2xl shadow-lg flex flex-col h-full"
                  itemScope
                  itemType="https://schema.org/JobPosting"
                >
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3" itemProp="title">
                    {job.title}
                  </h3>
                  
                  {/* Job Meta Info */}
                  <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-300">
                    <span className="bg-[#d4af37]/20 px-2 py-1 rounded text-xs" itemProp="jobLocation">
                      📍 {job.location}
                    </span>
                    <span className="bg-[#d4af37]/20 px-2 py-1 rounded text-xs" itemProp="employmentType">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 flex-grow" itemProp="description">
                    {job.desc}
                  </p>

                  <div className="mt-auto">
                    <span className="bg-[#d4af37]/20 px-2 py-1 rounded text-xs text-gray-300 block mb-3">
                      {job.experience}
                    </span>
                    
                    <button
                      onClick={() => openPopup(job.id)}
                      className="w-full bg-[#d4af37] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c29d2d] transition-all text-sm"
                      aria-label={`Apply for ${job.title} position`}
                    >
                      Apply Now
                    </button>
                  </div>

                  {/* Hidden SEO Metadata */}
                  <meta itemProp="datePosted" content="2024-12-01" />
                  <meta itemProp="hiringOrganization" content="Naksh Unisex Salon" />
                </motion.div>
              ))}
            </div>
          </div>
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

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closePopup}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-gradient-to-br from-black to-gray-900 border border-[#d4af37]/30 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="border-b border-[#d4af37]/20 p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-[#d4af37]">
                      Apply via WhatsApp
                    </h2>
                    <button
                      onClick={closePopup}
                      className="text-gray-400 hover:text-[#d4af37] transition-all text-2xl font-bold"
                      aria-label="Close modal"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    {jobs.find(job => job.id === apply.jobId)?.title} - Sikar
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleApply} className="p-6">
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-md">
                    <p className="text-green-300 text-sm text-center">
                      📱 After filling this form, we'll review the details it may take 24Hrs. <br />Just click send!
                    </p>
                  </div>

                  <input
                    name="name"
                    value={apply.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    disabled={apply.isSubmitting}
                    className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none disabled:opacity-50"
                    aria-label="Your Full Name"
                  />

                  <input
                    name="email"
                    type="email"
                    value={apply.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    disabled={apply.isSubmitting}
                    className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none disabled:opacity-50"
                    aria-label="Your Email Address"
                  />

                  <input
                    name="phone"
                    type="tel"
                    value={apply.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    disabled={apply.isSubmitting}
                    className="w-full p-3 bg-black/50 border border-[#d4af37]/20 rounded-md text-gray-200 mb-4 focus:ring-2 focus:ring-[#d4af37]/40 outline-none disabled:opacity-50"
                    aria-label="Your Phone Number"
                  />

                  {/* Note about resume */}
                  <div className="mb-6 p-3 bg-blue-900/20 border border-blue-500/30 rounded-md">
                    <p className="text-blue-300 text-xs text-center">
                      💡 <strong>Resume Note:</strong> After sending the WhatsApp message, you can share your resume file directly in the same chat.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={apply.isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-label="Submit application via WhatsApp"
                  >
                    {apply.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <span>📱</span>
                        Send via WhatsApp
                      </>
                    )}
                  </button>

                  {apply.msg && (
                    <p className={`text-sm mt-4 text-center ${
                      apply.msg.includes('✅') ? 'text-green-400' : 
                      apply.msg.includes('❌') ? 'text-red-400' : 
                      apply.msg.includes('⚠️') ? 'text-yellow-400' : 'text-gray-300'
                    }`}>
                      {apply.msg}
                    </p>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
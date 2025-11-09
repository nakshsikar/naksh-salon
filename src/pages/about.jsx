import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function About() {
  // Structured Data for About Page
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Naksh Unisex Salon Sikar",
    "description": "Learn about Naksh Unisex Salon - best unisex salon in Sikar offering premium hair, skin, and beauty services for men and women.",
    "url": "https://nakshsalon.com/about",
    "mainEntity": {
      "@type": "BeautySalon",
      "name": "Naksh Unisex Salon",
      "description": "Premium unisex salon in Sikar offering hair styling, bridal makeup, facial and beauty services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan",
        "postalCode": "332001",
        "streetAddress": "Shri Yash Tower Road, Opposite Apple Imagine Store, Near Pawan Travels"
      },
      "telephone": "+91-8690900970",
      "openingHours": "Mo-Su 10:00-20:00"
    }
  };

  return (
    <>
      {/* 🧠 Enhanced SEO Meta Tags */}
      <Helmet>
        <title>About Naksh Unisex Salon Sikar | Best Unisex Salon for Hair, Skin & Beauty Care</title>
        <meta
          name="description"
          content="Naksh Unisex Salon Sikar - Luxury unisex salon offering premium haircuts, bridal makeup, facial, spa & beauty services. Expert stylists ✅ Affordable prices ✅ Book +91-8690900970"
        />
        <meta
          name="keywords"
          content="about Naksh Unisex Salon, best salon in sikar, unisex salon sikar, beauty parlour sikar, hair salon sikar, bridal makeup sikar, facial sikar, spa sikar, Naksh Unisex Salon about us"
        />
        <meta name="author" content="Naksh Unisex Salon" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakshsalon.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Naksh Unisex Salon Sikar | Best Unisex Salon for Hair & Beauty" />
        <meta property="og:description" content="Learn about Naksh Unisex Salon - premium unisex salon in Sikar offering hair styling, bridal makeup, facial and beauty services for men and women." />
        <meta property="og:url" content="https://nakshsalon.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="About Naksh Unisex Salon Sikar | Best Unisex Salon" />
        <meta name="twitter:description" content="Premium unisex salon in Sikar offering hair, skin and beauty services for men and women." />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(aboutPageSchema)}
      </script>

      <section className="min-h-screen bg-black text-gray-300 pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading with SEO-rich content */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-8 text-center tracking-wide"
          >
            About <span className="text-white">Naksh Unisex Salon Sikar</span>
          </motion.h1>

          {/* Intro Section with Local SEO Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-[#d4af37]/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
          >
            <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Welcome to Naksh Unisex Salon - Best Salon in Sikar</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Welcome to <span className="text-[#d4af37] font-semibold">Naksh Unisex Salon Sikar</span> — 
              Rajasthan's premium <span className="text-[#d4af37]">unisex salon</span> where beauty meets luxury. 
              As the <strong>best salon in Sikar</strong>, we bring you world-class grooming, styling, 
              and wellness experiences designed to elevate your personality and confidence.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              Located in the heart of <strong>Sikar, Rajasthan</strong>, Naksh Unisex Salon specializes in 
              modern haircuts, advanced skincare, bridal makeovers and spa therapies.  
              Our team of <strong>expert stylists in Sikar</strong> blend art, innovation, and comfort 
              to create transformations that last.
            </p>
          </motion.div>

          {/* Our Vision with Local Focus */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#d4af37]">Our Vision for Sikar</h2>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to become <strong>Sikar's most trusted unisex beauty destination</strong>.  
                We aim to bring luxury, comfort, and confidence to the people of <strong>Sikar, Rajasthan</strong> — 
                offering a space where everyone can express their best selves with style and grace.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As the <strong>leading salon in Sikar</strong>, we're committed to setting new standards 
                in beauty and grooming services for both men and women in the community.
              </p>
            </div>
            <img
              src="/our-vision.jpg"
              alt="Our Vision - Naksh Unisex Salon Sikar - Best Salon in Sikar Rajasthan"
              className="rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.15)] border border-[#d4af37]/20"
            />
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse"
          >
            <img
              src="/our-mission.jpg"
              alt="Our Mission - Naksh Unisex Salon Experience in Sikar - Beauty Services Rajasthan"
              className="rounded-2xl"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#d4af37]">Our Mission in Sikar</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to deliver <strong>top-notch beauty and grooming services in Sikar</strong> 
                for both men and women, focusing on innovation, hygiene, and excellence.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We stay ahead with the latest trends to serve the <strong>Sikar community</strong> with 
                premium salon experiences. Because at <span className="text-[#d4af37]">Naksh Unisex Salon Sikar</span>, 
                your satisfaction defines our success.
              </p>
            </div>
          </motion.div>

          {/* Why Choose Us - SEO Rich Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white/5 backdrop-blur-lg border border-[#d4af37]/20 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-semibold text-[#d4af37] text-center mb-8">Why Choose Naksh Unisex Salon in Sikar?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Expert Stylists</h3>
                <p className="text-gray-300">Our team of professional stylists in Sikar are trained in the latest hair and beauty techniques.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Premium Services</h3>
                <p className="text-gray-300">From bridal makeup to hair spa, we offer complete beauty solutions in Sikar.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Hygiene First</h3>
                <p className="text-gray-300">We maintain the highest standards of cleanliness and sanitation.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Affordable Luxury</h3>
                <p className="text-gray-300">Premium salon experiences at competitive prices in Sikar.</p>
              </div>
            </div>
          </motion.div>

          {/* Closing with Local SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Visit <span className="text-[#d4af37]">Naksh Unisex Salon Sikar</span> today — 
              your trusted <strong>unisex salon in Sikar, Rajasthan</strong> where artistry, 
              creativity, and comfort come together. Experience why we're called the 
              <strong> best salon in Sikar</strong>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
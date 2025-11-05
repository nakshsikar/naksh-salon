import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// WhatsApp redirect number
const WHATSAPP_NUMBER = "918690900970";

const menServices = [
  {
    id: "mens-haircut",
    title: "Men's Haircut & Styling",
    short: "Precision haircuts and grooming tailored for modern men. Styled to perfection for any occasion.",
    keywords: "mens haircut sikar, barber near me, hair styling for men, grooming salon sikar"
  },
  {
    id: "mens-hair-color",
    title: "Men's Hair Color & Highlights",
    short: "Professional hair coloring, highlights, and gray coverage using high-quality salon products.",
    keywords: "hair color for men, gray coverage, mens highlights, hair coloring sikar"
  },
  {
    id: "mens-beard",
    title: "Beard Grooming & Shaping",
    short: "Sharp beard trims, contouring, and luxurious beard care treatments for a clean, masculine look.",
    keywords: "beard grooming sikar, beard trim, beard styling, mens grooming"
  },
  {
    id: "mens-facial",
    title: "Men's Facial & Skin Care",
    short: "Deep cleansing facials designed for men's skin to remove impurities and restore glow.",
    keywords: "mens facial sikar, skin care for men, grooming services, facial treatment"
  },
  {
  id: "mens-nail",
  title: "Men's Nail Care",
  short: "Professional nail grooming, cleaning, and basic nail care services for well-groomed hands.",
}
];

const womenServices = [
  {
    id: "womens-haircut",
    title: "Women's Haircut & Styling",
    short: "Trendy cuts, blow-dry styling, and luxury hair nail treatments for all hair types.",
    keywords: "womens haircut sikar, hair styling, hair spa, beauty salon sikar"
  },
  {
    id: "womens-color",
    title: "Hair Color & Balayage",
    short: "Premium color, balayage, and highlights to enhance your look with depth and shine.",
    keywords: "hair color sikar, balayage, highlights, hair coloring services"
  },
  {
    id: "womens-makeup",
    title: "Bridal & Occasion Makeup",
    short: "HD, airbrush, and bridal makeup by expert artists for flawless beauty on your special day.",
    keywords: "bridal makeup sikar, occasion makeup, makeup artist, wedding makeup"
  },
  {
    id: "womens-facial",
    title: "Facial & Skin Treatments",
    short: "Rejuvenating facials, skin brightening, and anti-aging treatments using premium products.",
    keywords: "facial sikar, skin treatment, beauty services, skin care"
  },
  {
  id: "womens-nail",
  title: "Nail Art & Design",
  short: "Creative nail art, designs, extensions, and premium nail care services for beautiful hands.",
}
];

export default function Services() {
  // Structured Data for Services Page
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Beauty Salon Services",
    "provider": {
      "@type": "BeautySalon",
      "name": "Naksh Unisex Salon",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan",
        "postalCode": "332001"
      }
    },
    "areaServed": "Sikar",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty & Grooming Services",
      "itemListElement": [
        ...menServices.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.short
          }
        })),
        ...womenServices.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.short
          }
        }))
      ]
    }
  };

  return (
    <>
      {/* ✅ Enhanced SEO Meta Tags */}
      <Helmet>
        <title>Salon Services in Sikar | Naksh Unisex Salon - Haircuts, Bridal Makeup, Spa & Beauty</title>
        <meta
          name="description"
          content="Best salon services in Sikar - Professional haircuts for men & women, bridal makeup, facial, spa, hair coloring & beauty treatments. Book appointment +91-8690900970"
        />
        <meta
          name="keywords"
          content="salon services sikar, best salon in sikar, unisex salon services, haircut sikar, bridal makeup sikar, facial sikar, spa sikar, beauty treatments, grooming services, naksh salon services"
        />
        <meta name="author" content="Naksh Unisex Salon" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakshsalon.in/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Salon Services in Sikar | Naksh Unisex Salon - Premium Beauty & Grooming" />
        <meta property="og:description" content="Professional salon services in Sikar - haircuts, bridal makeup, facial, spa & beauty treatments for men and women. Book now!" />
        <meta property="og:url" content="https://nakshsalon.in/services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Salon Services in Sikar | Naksh Unisex Salon" />
        <meta name="twitter:description" content="Premium beauty & grooming services for men and women in Sikar. Haircuts, makeup, spa & more." />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(servicesPageSchema)}
      </script>

      <section className="bg-black text-gray-200 min-h-screen py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading with Local SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] tracking-wide">
              Premium Salon Services in Sikar
            </h1>
            <p className="text-gray-400 mt-3 text-lg">
              Experience the best beauty and grooming services in <strong>Sikar, Rajasthan</strong> - 
              tailored for both men and women at Naksh Unisex Salon.
            </p>
          </motion.div>

          {/* Men Section with Local SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-[#d4af37] mb-6 border-b border-[#d4af37]/30 pb-2">
              Men's Grooming Services in Sikar
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {menServices.map((s) => (
                <article
                  key={s.id}
                  className="bg-white/5 border border-[#d4af37]/20 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="serviceType" content={s.title} />
                  <h3 className="text-2xl font-semibold text-[#d4af37]" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 mt-3" itemProp="description">
                    {s.short}
                  </p>
                  <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
                    <li>Expert Consultation</li>
                    <li>Premium Products</li>
                    <li>Personalized Aftercare Advice</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book ${s.title} service at Naksh Salon Sikar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0c95c] transition inline-block"
                      aria-label={`Book ${s.title} service in Sikar`}
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          {/* Women Section with Local SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-[#d4af37] mb-6 border-b border-[#d4af37]/30 pb-2">
              Women's Beauty Services in Sikar
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {womenServices.map((s) => (
                <article
                  key={s.id}
                  className="bg-white/5 border border-[#d4af37]/20 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="serviceType" content={s.title} />
                  <h3 className="text-2xl font-semibold text-[#d4af37]" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 mt-3" itemProp="description">
                    {s.short}
                  </p>
                  <ul className="text-gray-400 mt-4 list-disc list-inside space-y-1">
                    <li>Personalized Consultation</li>
                    <li>Luxury Products & Care</li>
                    <li>Customized Styling & Aftercare</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book ${s.title} service at Naksh Salon Sikar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0c95c] transition inline-block"
                      aria-label={`Book ${s.title} service in Sikar`}
                    >
                      Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-white/5 border border-[#d4af37]/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">
              Ready to Experience the Best Salon in Sikar?
            </h2>
            <p className="text-gray-300 mb-6">
              Book your appointment today and discover why Naksh Salon is the preferred choice for beauty and grooming in Sikar, Rajasthan.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book a service at Naksh Salon Sikar. Please suggest available slots.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e0c95c] transition inline-block text-lg"
            >
              📞 Call +91-8690900970
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
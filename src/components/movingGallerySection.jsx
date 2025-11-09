import { motion } from "framer-motion";

export default function MovingGallerySection() {
  const imagesRow1 = [
    {
      src: "/1.webp",
      alt: "Hair styling service at Naksh Unisex Salon Sikar - Professional haircut for women",
      title: "Women Hair Styling"
    },
    {
      src: "/2.jpg", 
      alt: "Bridal makeup services at Naksh Unisex Salon Sikar - Wedding makeup artist in Rajasthan",
      title: "Bridal Makeup"
    },
    {
      src: "/3.webp",
      alt: "Hair coloring treatment at Naksh Unisex Salon - Professional hair color services Sikar",
      title: "Hair Coloring"
    },
    {
      src: "/4.webp",
      alt: "Facial treatment at Naksh Unisex Salon Sikar - Skin care and beauty services Rajasthan",
      title: "Facial Treatment"
    },
    {
      src: "/5.jpg",
      alt: "Men grooming services at Naksh Unisex Salon - Beard trim and styling Sikar",
      title: "Men Grooming"
    },
    {
      src: "nail-art2.png",
      alt: "Nail art designs at Naksh Unisex Salon Sikar - Creative nail services Rajasthan",
      title: "Nail Art"
    }
  ];

  const imagesRow2 = [
    {
      src: "/6.webp",
      alt: "Nail art services at Naksh Unisex Salon Sikar - Creative nail designs and treatments",
      title: "Nail Services"
    },
    {
      src: "/7.jpg",
      alt: "Hair spa treatment at Naksh Unisex Salon Sikar - Hair care and conditioning services",
      title: "Hair Spa"
    },
    {
      src: "/8.webp",
      alt: "Makeup services at Naksh Unisex Salon Sikar - Professional makeup for occasions",
      title: "Makeup Services"
    },
    {
      src: "/9.jpg",
      alt: "Beard styling at Naksh Unisex Salon Sikar - Men beard grooming and shaping Rajasthan",
      title: "Beard Styling"
    },
    {
      src: "/10.jpg",
      alt: "Beauty services at Naksh Unisex Salon Sikar - Complete beauty treatments",
      title: "Beauty Services"
    },
    {
      src: "nail-art1.avif",
      alt: "Nail extension services at Naksh Unisex Salon Sikar - Premium nail treatments Rajasthan", 
      title: "Nail Extensions"
    }
  ];

  // Structured Data for Image Gallery
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Naksh Unisex Salon Gallery - Beauty Services in Sikar",
    "description": "Gallery showcasing hair styling, bridal makeup, facial treatments, nail art and beauty treatments at Naksh Unisex Salon in Sikar, Rajasthan",
    "url": "https://nakshsalon.com",
    "mainEntity": {
      "@type": "BeautySalon",
      "name": "Naksh Unisex Salon",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan"
      }
    },
    "image": [...imagesRow1, ...imagesRow2].map(img => ({
      "@type": "ImageObject",
      "contentUrl": `https://nakshsalon.com${img.src}`,
      "name": img.title,
      "description": img.alt,
      "caption": `Naksh Unisex Salon Sikar - ${img.title}`
    }))
  };

  return (
    <>
      {/* Structured Data for Gallery */}
      <script type="application/ld+json">
        {JSON.stringify(gallerySchema)}
      </script>

      <section 
        className="relative w-full overflow-hidden py-16 bg-black"
        itemScope
        itemType="https://schema.org/ImageGallery"
        aria-label="Naksh Unisex Salon Services Gallery"
      >
        <meta itemProp="name" content="Naksh Unisex Salon Beauty Gallery" />
        <meta itemProp="description" content="Gallery of hair, makeup and beauty services at Naksh Unisex Salon Sikar" />
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111111]/60 to-black pointer-events-none"></div>

        {/* SEO Optimized Title */}
        <div className="relative z-10 text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#d4af37] mb-4">
            Our Beauty Gallery - Naksh Unisex Salon Sikar
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our premium beauty services in <strong>Sikar, Rajasthan</strong> - 
            From hair styling to bridal makeup, see why we're the best salon in town.
          </p>
        </div>

        {/* Row 1 - Left to Right */}
        <motion.div
          className="flex gap-4 w-max mb-6"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          aria-label="Beauty services gallery row 1"
        >
          {[...imagesRow1, ...imagesRow1].map((img, i) => (
            <div
              key={`row1-${i}`}
              className="shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-[#d4af37]/20"
              style={{
                width: '280px',
                height: '180px',
                flex: '0 0 auto'
              }}
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              {/* Hidden SEO Metadata */}
              <meta itemProp="contentUrl" content={`https://nakshsalon.com${img.src}`} />
              <meta itemProp="name" content={img.title} />
              <meta itemProp="description" content={img.alt} />
              
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                itemProp="contentUrl"
                style={{
                  maxWidth: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Right to Left */}
        <motion.div
          className="flex gap-4 w-max"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45,
            ease: "linear",
          }}
          aria-label="Beauty services gallery row 2"
        >
          {[...imagesRow2, ...imagesRow2].map((img, i) => (
            <div
              key={`row2-${i}`}
              className="shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-[#d4af37]/20"
              style={{
                width: '280px',
                height: '180px',
                flex: '0 0 auto'
              }}
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              {/* Hidden SEO Metadata */}
              <meta itemProp="contentUrl" content={`https://nakshsalon.com${img.src}`} />
              <meta itemProp="name" content={img.title} />
              <meta itemProp="description" content={img.alt} />
              
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                itemProp="contentUrl"
                style={{
                  maxWidth: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Gallery Description for SEO */}
        <div className="relative z-10 text-center mt-12 px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
              Premium Beauty Services in Sikar
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At <strong>Naksh Unisex Salon Sikar</strong>, we specialize in professional 
              <strong> hair styling, bridal makeup, facial treatments, nail art services</strong> and 
              complete beauty solutions for both men and women. Our gallery showcases the 
              quality and excellence we deliver to every client in <strong>Rajasthan</strong>.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400 text-start">
              <span>✅ Professional Haircuts</span>
              <span>✅ Bridal Makeup</span>
              <span>✅ Facial Treatments</span>
              <span>✅ Hair Coloring</span>
              <span>✅ Nail Art Services</span>
              <span>✅ Beard Trimming</span>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Styles */}
        <style jsx>{`
          @media (max-width: 768px) {
            .flex-shrink-0 {
              width: 250px !important;
              height: 160px !important;
            }
          }
          
          @media (max-width: 480px) {
            .flex-shrink-0 {
              width: 220px !important;
              height: 140px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      img: "/location.avif",
      title: "Luxury Hair Styling in Sikar",
      description: "Professional haircuts & styling for men and women at Naksh Salon Sikar",
      alt: "Luxury hair styling services at Naksh Unisex Salon Sikar - Best salon in Rajasthan"
    },
    {
      id: 2,
      img: "/makeup.avif",
      title: "Bridal Makeup in Sikar",
      description: "Expert bridal & wedding makeup services at Naksh Salon Rajasthan",
      alt: "Bridal makeup services at Naksh Unisex Salon Sikar - Professional wedding makeup artists"
    },
    {
      id: 3,
      img: "/hairstyling.avif",
      title: "Premium Unisex Salon Sikar",
      description: "Complete beauty & grooming services for men and women in Rajasthan",
      alt: "Unisex salon experience at Naksh Salon Sikar - Best beauty services for men and women"
    },
    {
      id: 4,
      img: "/nail-extension.jpg",
      title: "Facial & nail treatments",
      description: "Relaxing facial and Nail Services at Naksh Salon Sikar",
      alt: "Facial and nail treatments at Naksh Unisex Salon Sikar - Skin care services Rajasthan"
    },
  ];

  // Structured Data for Image Gallery
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Naksh Unisex Salon Services Gallery",
    "description": "Gallery of beauty services offered at Naksh Unisex Salon in Sikar, Rajasthan",
    "url": "https://nakshsalon.in",
    "image": slides.map(slide => ({
      "@type": "ImageObject",
      "url": slide.img,
      "name": slide.title,
      "description": slide.description,
      "caption": slide.alt
    }))
  };

  return (
    <>
      {/* Structured Data for Image Gallery */}
      <script type="application/ld+json">
        {JSON.stringify(imageGallerySchema)}
      </script>

      <section 
        className="w-full h-screen overflow-hidden relative"
        itemScope
        itemType="https://schema.org/WebPageElement"
        aria-label="Naksh Unisex Salon Hero Banner"
      >
        <meta itemProp="name" content="Naksh Salon Hero Slider" />
        <meta itemProp="description" content="Showcasing premium beauty services at Naksh Unisex Salon Sikar" />
        
        <Splide
          options={{
            type: "loop",
            direction: "ttb", // vertical slide animation
            height: "100vh",
            autoplay: true,
            interval: 4000, // Increased for better readability
            speed: 1000,
            arrows: false,
            pagination: true,
            pauseOnHover: false,
            resetProgress: false,
            drag: false, // disable manual dragging for better UX
            keyboard: true, // enable keyboard navigation for accessibility
          }}
          aria-label="Naksh Unisex Salon Services Showcase"
        >
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
                role="img"
                aria-label={slide.alt}
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                {/* Hidden SEO Metadata for each slide */}
                <meta itemProp="url" content={slide.img} />
                <meta itemProp="name" content={slide.title} />
                <meta itemProp="description" content={slide.description} />
                
                {/* Overlay for better text readability */}
                <div 
                  className="absolute inset-0 bg-black/60"
                  aria-hidden="true"
                ></div>
                
                {/* Content Container */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                  <h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#d4af37]"
                    itemProp="caption"
                  >
                    {slide.title}
                  </h1>
                  
                  <p 
                    className="text-xs md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light"
                    itemProp="description"
                  >
                    {slide.description}
                  </p>
                  
                  {/* Call to Action Button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="tel:+918690900970"
                      className="bg-[#d4af37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e0c95c] transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Call Naksh Salon Sikar at +91 86909 00970"
                    >
                      📞 Call +91-8690900970
                    </a>
                    
                    <a
                      href="https://wa.me/918690900970?text=Hi! I want to book an appointment at Naksh Salon Sikar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                      aria-label="Message Naksh Salon Sikar on WhatsApp"
                    >
                      💬 WhatsApp Now
                    </a>
                  </div>
                  
                  {/* Location Badge */}
                  <div className="mt-8 inline-block bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full border border-[#d4af37]/30">
                    <p className="text-gray-300 text-lg">
                      🏷️ <strong>Naksh Unisex Salon</strong> | Sikar, Rajasthan
                    </p>
                  </div>
                </div>
                
                {/* Loading optimization */}
                <link rel="preload" as="image" href={slide.img} />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Scroll Indicator for UX - Centered */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center w-full">
          <div className="animate-bounce text-[#d4af37] text-center">
            <span className="block text-sm mb-2 text-gray-300">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization Styles */}
      <style jsx>{`
        .splide__pagination {
          bottom: 100px;
        }
        .splide__pagination__page.is-active {
          background: #d4af37;
        }
        .splide__pagination__page {
          background: rgba(255,255,255,0.5);
        }
      `}</style>
    </>
  );
}
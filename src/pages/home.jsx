import { Helmet } from "react-helmet";
import AboutSection from "../components/aboutSection";
import BookNowSection from "../components/bookNowSection";
import FAQSection from "../components/FaqSection";
import HeroSection from "../components/heroSection";
import MovingGallerySection from "../components/movingGallerySection";
import TestimonialsSection from "../components/testimonialsSection";
import WhyChooseUsSection from "../components/whyChooseUsSection";

const Home = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://nakshsalon.com/#webpage",
    url: "https://nakshsalon.com",
    name: "Naksh Unisex Salon - Best Hair & Beauty Salon in Sikar, Rajasthan",
    description:
      "Premium unisex salon in Sikar offering professional haircuts, bridal makeup, facial, nail art, hair coloring & beauty services for men and women. Book appointment +91-8690900970",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://nakshsalon.com/images/hero-banner.jpg",
      width: "1200",
      height: "630",
    },
    about: {
      "@type": "BeautySalon",
      name: "Naksh Unisex Salon",
      description:
        "Best unisex salon in Sikar, Rajasthan offering hair styling, bridal makeup, facial and beauty services",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sikar",
        addressRegion: "Rajasthan",
        postalCode: "332001",
        streetAddress:
          "Shri Yash Tower Road, Opposite Apple Imagine Store, Near Pawan Travels",
      },
      telephone: "+91-8690900970",
      openingHours: "Mo-Su 10:00-20:00",
      areaServed: "Sikar",
    },
  };

  // ✅ FIXED: Sirf homePageSchema ko stringify karo
  const structuredData = JSON.stringify([homePageSchema]).replace(
    /</g,
    "\\u003c"
  );

  return (
    <>
      <Helmet>
        <title>
          Naksh Unisex Salon Sikar | Best Hair, Bridal Makeup, Beauty & Nail
          Services in Rajasthan
        </title>
        <meta
          name="description"
          content="Best unisex salon in Sikar - Professional haircuts, bridal makeup, facial, nail art, hair coloring & beauty services for men & women. ✅ Expert stylists ✅ Affordable prices ✅ Book now +91-8690900970"
        />
        <link rel="canonical" href="https://nakshsalon.com" />
      </Helmet>

      {/* ✅ FIXED: Sirf homePageSchema hi rahega */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <main itemScope itemType="https://schema.org/BeautySalon">
        <HeroSection />
        <AboutSection />
        <MovingGallerySection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <FAQSection />  {/* Is component mein already FAQ schema hai */}
        <BookNowSection />
      </main>
    </>
  );
};

export default Home;
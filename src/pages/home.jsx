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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://nakshsalon.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What beauty services does Naksh Salon Sikar offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Naksh Unisex Salon in Sikar offers complete beauty and grooming services including professional haircuts, bridal makeup, facial treatments, nail art services, hair coloring, nail extensions, beard grooming, and complete beauty solutions for both men and women in Rajasthan.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to book an appointment in advance at Naksh Salon Sikar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we recommend booking your appointment in advance to ensure your preferred time slot with our expert stylists in Sikar. This is especially important for bridal makeup, special occasions, and weekend appointments at our Rajasthan salon.",
        },
      },
      {
        "@type": "Question",
        name: "Are your beauty products safe for all skin types in Sikar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! At Naksh Salon Sikar, we use only premium, dermatologically-tested products suitable for all skin types. Our products are carefully selected to ensure safety, quality, and complete satisfaction for our clients in Rajasthan.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide bridal makeup packages for Sikar weddings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We specialize in customized bridal makeup packages for Sikar weddings. Our packages include pre-bridal consultations, trial sessions, complete bridal makeup, hairstyling, and traditional Rajasthani wedding looks to make your special day unforgettable.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a personalized beauty consultation at Naksh Salon Sikar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Of course! Our certified stylists in Sikar provide personalized consultations to understand your needs, skin type, and preferences. We suggest the best beauty treatments and styles that suit your personality and lifestyle in Rajasthan.",
        },
      },
      {
        "@type": "Question",
        name: "What are the salon timings at Naksh Unisex Salon Sikar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Naksh Unisex Salon in Sikar is open from 10:00 AM to 8:00 PM, all days of the week including Sundays and holidays. We're conveniently located in Sikar, Rajasthan to serve your beauty needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer men's grooming services in Sikar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer complete men's grooming services including haircuts, beard styling, facial treatments, hair coloring, and nail care services. Naksh Salon is the preferred unisex salon for men's grooming in Sikar, Rajasthan.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Naksh Salon the best beauty salon in Sikar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Naksh Unisex Salon stands out in Sikar due to our certified experts, premium products, modern techniques, hygienic environment, personalized service, and affordable pricing. We're committed to making you look and feel your best in Rajasthan.",
        },
      },
    ],
  };

  // ✅ Convert safely to JSON string for <script> tag
  const structuredData = JSON.stringify([homePageSchema, faqSchema]).replace(
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

      {/* ✅ Structured Data - Syntax Safe */}
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
        <FAQSection />
        <BookNowSection />
      </main>
    </>
  );
};

export default Home;

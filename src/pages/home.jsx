import { Helmet } from 'react-helmet';
import AboutSection from '../components/aboutSection'
import BookNowSection from '../components/bookNowSection'
import FAQSection from '../components/faqSection'
import HeroSection from '../components/heroSection'
import MovingGallerySection from '../components/movingGallerySection'
import TestimonialsSection from '../components/testimonialsSection'
import WhyChooseUsSection from '../components/whyChooseUsSection'

const Home = () => {
  // Structured Data for Home Page
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Naksh Unisex Salon - Best Hair & Beauty Salon in Sikar, Rajasthan",
    "description": "Premium unisex salon in Sikar offering professional haircuts, bridal makeup, facial, nail art, hair coloring & beauty services for men and women. Book appointment +91-8690900970",
    "url": "https://nakshsalon.in",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://nakshsalon.in/images/hero-banner.jpg",
      "width": "1200",
      "height": "630"
    },
    "about": {
      "@type": "BeautySalon",
      "name": "Naksh Unisex Salon",
      "description": "Best unisex salon in Sikar, Rajasthan offering hair styling, bridal makeup, facial and beauty services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan",
        "postalCode": "332001",
        "streetAddress": "Shri Yash Tower Road, Opposite Apple Imagine Store, Near Pawan Travels"
      },
      "telephone": "+91-8690900970",
      "openingHours": "Mo-Su 10:00-20:00",
      "areaServed": "Sikar"
    },
    "mainEntity": {
      "@type": "WebPageElement",
      "name": "Naksh Unisex Salon Services"
    }
  };

  return (
    <>
      {/* ✅ Home Page SEO Meta Tags */}
      <Helmet>
        <title>Naksh Unisex Salon Sikar | Best Hair, Bridal Makeup, Beauty & Nail Services in Rajasthan</title>
        <meta 
          name="description" 
          content="Best unisex salon in Sikar - Professional haircuts, bridal makeup, facial, nail art, hair coloring & beauty services for men & women. ✅ Expert stylists ✅ Affordable prices ✅ Book now +91-8690900970" 
        />
        <meta 
          name="keywords" 
          content="best salon in sikar, unisex salon sikar, bridal makeup sikar, hair salon sikar, beauty parlour sikar, facial sikar, nail art sikar, haircut sikar, makeup artist sikar, naksh salon sikar, beauty services rajasthan" 
        />
        <meta name="author" content="Naksh Unisex Salon" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakshsalon.in" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Naksh Unisex Salon Sikar | Best Hair & Beauty Services in Rajasthan" />
        <meta property="og:description" content="Premium unisex salon in Sikar offering professional haircuts, bridal makeup, facial, nail art & beauty services. Book appointment +91-8690900970" />
        <meta property="og:url" content="https://nakshsalon.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nakshsalon.in/images/og-image.jpg" />
        <meta property="og:locale" content="hi_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naksh Unisex Salon Sikar | Best Beauty Services" />
        <meta name="twitter:description" content="Premium unisex salon in Sikar for haircuts, bridal makeup, facial & Nail Services. Book now +91-8690900970" />
        <meta name="twitter:image" content="https://nakshsalon.in/images/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Sikar" />
        <meta name="geo.position" content="27.6094;75.1399" />
        <meta name="ICBM" content="27.6094, 75.1399" />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(homePageSchema)}
      </script>

      {/* Hidden SEO Content for Crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>Naksh Unisex Salon - Best Salon in Sikar, Rajasthan</h1>
        <h2>Premium Beauty Services in Sikar</h2>
        <p>Welcome to Naksh Unisex Salon, the best hair and beauty salon in Sikar, Rajasthan. We offer professional haircuts, bridal makeup, facial treatments, Nail Services, hair coloring, and complete beauty solutions for both men and women.</p>
        <p>Located at Shri Yash Tower Road, Opposite Apple Imagine Store, Near Pawan Travels, Sikar. Call us at +91-8690900970 to book your appointment.</p>
        <ul>
          <li>Haircut & Styling Services in Sikar</li>
          <li>Bridal Makeup for Sikar Weddings</li>
          <li>Facial & Skin Treatments</li>
          <li>Nail art & Relaxation Therapy</li>
          <li>Hair Coloring & Highlights</li>
          <li>Beard Grooming for Men</li>
        </ul>
      </div>

      {/* Main Content Sections */}
      <main itemScope itemType="https://schema.org/BeautySalon">
        <meta itemProp="name" content="Naksh Unisex Salon" />
        <meta itemProp="description" content="Best unisex salon in Sikar offering professional beauty services for men and women" />
        <meta itemProp="address" content="Sikar, Rajasthan" />
        <meta itemProp="telephone" content="+91-8690900970" />
        
        <HeroSection />
        <AboutSection />
        <MovingGallerySection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <FAQSection />
        <BookNowSection />
      </main>
    </>
  )
}

export default Home
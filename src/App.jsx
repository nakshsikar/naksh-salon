import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy loading for better performance
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const Blogs = lazy(() => import("./pages/blogs"));
const BlogPost = lazy(() => import("./components/blogPost"));
const Contact = lazy(() => import("./pages/contact"));
const Career = lazy(() => import("./pages/career"));

function App() {
  return (
    <Router>
      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nakshsalon.in",
                "description": "Naksh Unisex Salon - Best Salon in Sikar"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Beauty Services in Sikar",
                "item": "https://nakshsalon.in/services",
                "description": "Haircut, Bridal Makeup, Facial & Nail Services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "About Naksh Salon",
                "item": "https://nakshsalon.in/about",
                "description": "Best unisex salon in Sikar, Rajasthan"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Beauty Tips & Blogs",
                "item": "https://nakshsalon.in/blogs",
                "description": "Hair care, makeup tips and beauty advice"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact Salon",
                "item": "https://nakshsalon.in/contact",
                "description": "Visit Naksh Salon in Sikar +91-8690900970"
              }
            ]
          })
        }}
      />

      <ScrollToTop />
      <Navbar />
      
      {/* Main content with enhanced semantic markup */}
      <main 
        role="main" 
        itemScope 
        itemType="https://schema.org/WebPage"
        itemID="https://nakshsalon.in"
      >
        <meta itemProp="name" content="Naksh Unisex Salon Sikar" />
        <meta itemProp="description" content="Best unisex salon in Sikar for haircuts, bridal makeup, facial, spa & beauty services. Expert stylists, affordable prices." />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/services" 
              element={<Services />} 
            />
            <Route 
              path="/blogs" 
              element={<Blogs />} 
            />
            <Route 
              path="/blogs/:slug" 
              element={<BlogPost />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            <Route 
              path="/career" 
              element={<Career />} 
            />
            
            {/* Enhanced 404 Page with SEO */}
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </Router>
  );
}

// Enhanced 404 Component with better SEO
const NotFound = () => {
  // 404 Page Structured Data
  const notFoundSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - Naksh Salon Sikar",
    "description": "The page you're looking for doesn't exist. Return to Naksh Unisex Salon homepage.",
    "url": "https://nakshsalon.in/404",
    "mainEntity": {
      "@type": "WebPage",
      "name": "Naksh Unisex Salon Sikar"
    }
  };

  return (
    <div style={{ padding: '50px 20px', textAlign: 'center', minHeight: '60vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(notFoundSchema) }}
      />
      
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist at Naksh Salon.</p>
      <p>Explore our popular services:</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/" style={{ margin: '0 10px', color: '#D4AF37' }}>Home</a>
        <a href="/services" style={{ margin: '0 10px', color: '#D4AF37' }}>Services</a>
        <a href="/contact" style={{ margin: '0 10px', color: '#D4AF37' }}>Contact</a>
      </div>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import LoadingSpinner from "./components/LoadingSpinner"; // New component for SEO

// Lazy loading for better performance - Google loves fast sites
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
      {/* Structured Data for Breadcrumb */}
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
                "item": "https://nakshsalon.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://nakshsalon.in/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "About Us",
                "item": "https://nakshsalon.in/about"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Blogs",
                "item": "https://nakshsalon.in/blogs"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://nakshsalon.in/contact"
              }
            ]
          })
        }}
      />
      
      <ScrollToTop />
      <Navbar />
      
      {/* Main content with proper semantic structure */}
      <main role="main" itemScope itemType="https://schema.org/WebPage">
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
            
            {/* 404 Page for better UX - Important for SEO */}
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

// 404 Component for better user experience
const NotFound = () => {
  return (
    <div style={{ padding: '50px 20px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <a href="/">Return to Homepage</a>
    </div>
  );
};

export default App;

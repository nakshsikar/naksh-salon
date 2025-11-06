import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const active = (path) =>
    location.pathname === path
      ? "text-[#d4af37] font-semibold"
      : "text-gray-300 hover:text-[#d4af37] transition";

  // SEO optimized navigation items with proper titles
  const navItems = [
    { path: "/", label: "Home", title: "Naksh Salon - Best Unisex Salon in Sikar" },
    { path: "/about", label: "About", title: "About Naksh Salon - Our Story & Expertise" },
    { path: "/services", label: "Services", title: "Salon Services - Hair, Makeup, Spa in Sikar" },
    { path: "/blogs", label: "Blogs", title: "Beauty Tips & Blog - Naksh Salon Sikar" },
    { path: "/contact", label: "Contact", title: "Contact Naksh Salon - Book Appointment" },
  ];

  return (
    <nav 
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] lg:w-[70%]
      bg-black/30 backdrop-blur-xl border border-[#d4af37]/20 
      shadow-[0_0_20px_rgba(212,175,55,0.25)] rounded-2xl z-50 transition-all duration-500"
      
      // SEO & Accessibility Attributes
      role="navigation"
      aria-label="Main Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        {/* Logo with SEO optimized attributes */}
        <Link 
          to="/" 
          className="flex items-center gap-2 shrink-0"
          title="Naksh Unisex Salon - Premium Beauty Services in Sikar"
          aria-label="Visit Naksh Salon Homepage"
          itemProp="url"
        >
          <img
            src="/logo.png"
            alt="Naksh Unisex Salon Logo - Best hair and beauty salon in Sikar, Rajasthan"
            className="h-8 sm:h-10 w-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
            width="40"
            height="40"
            loading="eager"
            itemProp="logo"
          />
          <span className="text-[#d4af37] font-bold text-base sm:text-lg tracking-wide" itemProp="name">
            Naksh Salon
          </span>
        </Link>

        {/* Desktop Menu - Hidden on mobile and tablet */}
        <div 
          className="hidden lg:flex space-x-6 xl:space-x-8 text-sm uppercase tracking-wide"
          role="menubar"
          aria-label="Main Menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={active(item.path)}
              title={item.title}
              role="menuitem"
              itemProp="url"
            >
              <span itemProp="name">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Career Button - Hidden on mobile and tablet */}
        <Link
          to="/career"
          className="hidden lg:inline-block px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37]/50 
          rounded-full text-[#d4af37] text-sm uppercase tracking-wide 
          hover:bg-[#d4af37]/30 transition duration-300 shadow-[0_0_10px_rgba(212,175,55,0.3)] 
          whitespace-nowrap shrink-0"
          title="Career Opportunities at Naksh Salon Sikar"
          aria-label="Explore career opportunities at Naksh Salon"
          role="button"
        >
          Join Our Team
        </Link>

        {/* Mobile Menu Button - Show on lg breakpoint and below */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#d4af37] hover:text-white transition p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Show on lg breakpoint and below */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-[#d4af37]/20 
          px-6 py-5 space-y-4 text-sm uppercase tracking-wide 
          flex flex-col rounded-b-2xl text-center shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          role="menu"
          aria-label="Mobile Navigation Menu"
        >
          {navItems.map((item) => (
            <Link 
              key={item.path}
              onClick={() => setIsOpen(false)}
              to={item.path}
              className={`${active(item.path)} py-2`}
              title={item.title}
              role="menuitem"
              itemProp="url"
            >
              <span itemProp="name">{item.label}</span>
            </Link>
          ))}
          <Link
            onClick={() => setIsOpen(false)}
            to="/career"
            className="inline-block px-6 py-3 bg-[#d4af37]/20 border border-[#d4af37]/50 
            rounded-full text-[#d4af37] hover:bg-[#d4af37]/30 transition duration-300 
            mt-2"
            title="Career at Naksh Salon - Join Our Beauty Team"
            role="menuitem"
          >
            Career Opportunities
          </Link>
        </div>
      )}

      {/* Structured Data for Site Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "Main Navigation",
            "url": "https://nakshsalon.com",
            "mainEntity": navItems.map((item, index) => ({
              "@type": "SiteNavigationElement",
              "position": index + 1,
              "name": item.label,
              "url": `https://nakshsalon.com${item.path}`,
              "description": item.title
            }))
          })
        }}
      />
    </nav>
  );
}

export default Navbar;
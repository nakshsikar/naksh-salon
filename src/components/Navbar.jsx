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

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] 
      bg-black/30 backdrop-blur-xl border border-[#d4af37]/20 
      shadow-[0_0_20px_rgba(212,175,55,0.25)] rounded-2xl z-50 transition-all duration-500">
      
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="Naksh Salon Logo"
            className="h-10 w-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
          />
          <span className="text-[#d4af37] font-bold text-lg tracking-wide">
            Naksh Salon
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <Link to="/" className={active("/")}>Home</Link>
          <Link to="/about" className={active("/about")}>About</Link>
          <Link to="/services" className={active("/services")}>Services</Link>
          <Link to="/blogs" className={active("/blogs")}>Blogs</Link>
          <Link to="/contact" className={active("/contact")}>Contact</Link>
        </div>

        {/* Career Button (Right side) */}
        <Link
          to="/career"
          className="hidden md:inline-block px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37]/50 
          rounded-full text-[#d4af37] text-sm uppercase tracking-wide 
          hover:bg-[#d4af37]/30 transition duration-300 shadow-[0_0_10px_rgba(212,175,55,0.3)]"
        >
          Career
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#d4af37] hover:text-white transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-[#d4af37]/20 
          px-6 py-5 space-y-4 text-sm uppercase tracking-wide 
          flex flex-col rounded-b-2xl text-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <Link onClick={() => setIsOpen(false)} to="/" className={active("/")}>Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className={active("/about")}>About</Link>
          <Link onClick={() => setIsOpen(false)} to="/services" className={active("/services")}>Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/blogs" className={active("/blogs")}>Blogs</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className={active("/contact")}>Contact</Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/career"
            className="inline-block px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full text-[#d4af37] 
            hover:bg-[#d4af37]/30 transition duration-300"
          >
            Career
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

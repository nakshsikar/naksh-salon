import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pt-16 pb-6 border-t border-[#d4af37]/20 overflow-hidden">
      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Naksh Unisex Salon Logo"
              className="h-12 w-auto drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            />
            <h3 className="text-2xl font-semibold text-[#d4af37]">Naksh Unisex Salon</h3>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Discover the art of beauty, style, and elegance with Naksh Unisex Salon —
            where luxury meets perfection. Pamper yourself in a world of glow
            and glamour.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-[#d4af37] transition">Services</Link></li>
            <li><Link to="/blogs" className="hover:text-[#d4af37] transition">Blogs</Link></li>
            <li><Link to="/career" className="hover:text-[#d4af37] transition">Career</Link></li>
            <li><Link to="/contact" className="hover:text-[#d4af37] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-4">Follow Us</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.instagram.com/nakshsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] transition"
            >
              <Instagram className="text-[#d4af37]" size={22} />
            </a>
            <a
              href="https://www.facebook.com/share/16LQkFjvUw/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] transition"
            >
              <Facebook className="text-[#d4af37]" size={22} />
            </a>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Stay connected with us for beauty tips, salon updates, and more!
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-7xl mx-auto border-t border-[#d4af37]/20 my-8"></div>

      {/* Bottom Line */}
      <div className="relative z-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Naksh Unisex Salon. All Rights Reserved. <br />
        Designed & Developed by{" "}
        <a
          href="https://instagram.com/developer.b4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d4af37] hover:text-[#f1c75e] transition font-medium"
        >
          B4 Dev
        </a>
      </div>
    </footer>
  );
}

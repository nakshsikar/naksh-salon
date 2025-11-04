import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Blog data (SEO-optimized titles + excerpts)
const posts = [
  {
    slug: "top-5-hair-trends-2025",
    title: "Top 5 Hair Trends of 2025 – Unisex Styles to Try This Year",
    excerpt:
      "Discover the hottest unisex haircut and color trends of 2025 — from textured layers to glossy hair shades that elevate your personality.",
  },
  {
    slug: "bridal-makeup-guide",
    title: "The Ultimate Bridal Makeup Guide for a Flawless Wedding Look",
    excerpt:
      "Step-by-step expert guide on bridal makeup, pre-wedding skin prep, and long-lasting beauty looks curated by Naksh Unisex Salon professionals.",
  },
  {
    slug: "self-care-routine",
    title: "Luxury Self-Care Routine at Home – Salon Secrets Revealed",
    excerpt:
      "Indulge in a rejuvenating self-care experience at home with professional hair and skin tips from Naksh Unisex Salon experts.",
  },
];

export default function Blogs() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Beauty Blog | Naksh Unisex Salon - Hair, Makeup & Grooming Tips</title>
        <meta
          name="description"
          content="Explore Naksh Unisex Salon's beauty blog — featuring expert haircare tips, bridal makeup guides, unisex style trends, and luxury self-care routines."
        />
        <meta
          name="keywords"
          content="unisex salon blog, hair trends 2025, bridal makeup guide, self care tips, beauty salon tips, hair care blog, grooming blog, Naksh Salon"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-black text-[#d4af37] min-h-screen py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#d4af37]">
              Beauty Blog
            </h1>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Stay updated with the latest beauty, hair, and grooming trends from{" "}
              <span className="text-[#d4af37] font-medium">Naksh Unisex Salon</span> — 
              your destination for style, care, and inspiration.
            </p>
          </motion.header>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {posts.map((p, index) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-[#d4af37]/20 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition"
              >
                <h2 className="text-2xl font-semibold text-[#d4af37] mb-3">
                  {p.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{p.excerpt}</p>

                <Link
                  to={`/blogs/${p.slug}`}
                  className="mt-5 inline-block bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0c95c] transition"
                >
                  Read More
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              At <span className="text-[#d4af37] font-medium">Naksh Unisex Salon</span>, 
              we believe that beauty is an experience. Explore our blogs for expert advice, 
              beauty inspiration, and the latest salon trends crafted for both men & women.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Blog data (SEO-optimized titles + excerpts)
const posts = [
  {
    slug: "top-5-hair-trends-2025",
    title: "Top 5 Hair Trends of 2025 in Sikar – Unisex Styles to Try This Year",
    excerpt: "Discover the hottest unisex haircut and color trends of 2025 in Sikar — from textured layers to glossy hair shades that elevate your personality at Naksh Unisex Salon.",
    category: "Hair Trends",
    readTime: "5 min read",
    publishDate: "2024-12-15"
  },
  {
    slug: "bridal-makeup-guide-sikar",
    title: "Bridal Makeup Guide for Sikar Weddings – Flawless Wedding Look",
    excerpt: "Complete bridal makeup guide for Sikar weddings. Pre-wedding skin prep, traditional looks, and long-lasting beauty tips from Naksh Unisex Salon experts.",
    category: "Bridal Beauty",
    readTime: "7 min read",
    publishDate: "2024-12-10"
  },
  {
    slug: "self-care-routine-sikar",
    title: "Self-Care Routine in Sikar – Salon Secrets for Home Beauty",
    excerpt: "Professional self-care tips for Sikar residents. Rejuvenating hair and skin routines you can do at home from Naksh Unisex Salon experts.",
    category: "Self Care",
    readTime: "4 min read",
    publishDate: "2024-12-05"
  },
];

export default function Blogs() {
  // Structured Data for Blog Listing
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Naksh Unisex Salon Beauty Blog",
    "description": "Expert beauty tips, hair trends, and grooming advice from Naksh Unisex Salon in Sikar, Rajasthan",
    "url": "https://nakshsalon.com/blogs",
    "publisher": {
      "@type": "BeautySalon",
      "name": "Naksh Unisex Salon",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sikar",
        "addressRegion": "Rajasthan"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://nakshsalon.com/blogs/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.publishDate,
      "articleSection": post.category,
      "author": {
        "@type": "Organization",
        "name": "Naksh Unisex Salon"
      }
    }))
  };

  return (
    <>
      {/* ✅ Enhanced SEO Meta Tags */}
      <Helmet>
        <title>Beauty Blog Sikar | Naksh Unisex Salon - Hair, Makeup & Grooming Tips Rajasthan</title>
        <meta
          name="description"
          content="Naksh Unisex Salon Beauty Blog - Expert hair care tips, bridal makeup guides, 2025 trends & self-care routines for Sikar residents. Best salon beauty advice."
        />
        <meta
          name="keywords"
          content="beauty blog sikar, hair tips sikar, bridal makeup guide sikar, salon blog rajasthan, grooming tips, Naksh Unisex Salon blog, beauty articles, hair trends 2025"
        />
        <meta name="author" content="Naksh Unisex Salon" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nakshsalon.com/blogs" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Beauty Blog Sikar | Naksh Unisex Salon - Expert Hair & Makeup Tips" />
        <meta property="og:description" content="Discover expert beauty tips, hair trends and grooming advice from Naksh Unisex Salon - best salon in Sikar, Rajasthan." />
        <meta property="og:url" content="https://nakshsalon.com/blogs" />
        <meta property="og:type" content="blog" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Beauty Blog Sikar | Naksh Unisex Salon" />
        <meta name="twitter:description" content="Expert beauty and grooming tips from Sikar's best unisex salon." />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>

      <section className="bg-black text-[#d4af37] min-h-screen py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header with Local SEO */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#d4af37]">
              Beauty Blog - Naksh Unisex Salon Sikar
            </h1>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              Expert beauty tips, latest hair trends, and grooming advice from{" "}
              <span className="text-[#d4af37] font-medium">Naksh Unisex Salon Sikar</span> — 
              your trusted beauty destination in <strong>Rajasthan</strong>.
            </p>
          </motion.header>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-[#d4af37]/20 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition flex flex-col h-full"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Blog Meta */}
                <div className="mb-3 flex justify-between items-center text-sm text-gray-400">
                  <span className="bg-[#d4af37]/20 px-2 py-1 rounded" itemProp="articleSection">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                {/* Blog Title */}
                <h2 className="text-xl font-semibold text-[#d4af37] mb-3" itemProp="headline">
                  {post.title}
                </h2>

                {/* Blog Excerpt */}
                <p className="text-gray-300 leading-relaxed flex-grow" itemProp="description">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-5">
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="inline-block bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e0c95c] transition"
                    aria-label={`Read more about ${post.title}`}
                    itemProp="url"
                  >
                    Read More
                  </Link>
                </div>

                {/* Hidden SEO Metadata */}
                <meta itemProp="datePublished" content={post.publishDate} />
                <meta itemProp="dateModified" content={post.publishDate} />
                <meta itemProp="author" content="Naksh Unisex Salon" />
                <meta itemProp="publisher" content="Naksh Unisex Salon" />
              </motion.article>
            ))}
          </div>

          {/* Blog Categories Section for SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white/5 border border-[#d4af37]/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-[#d4af37] mb-6 text-center">
              Popular Beauty Topics in Sikar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-[#d4af37]">Hair Care</h3>
                <p className="text-gray-400 text-sm">Tips & Trends</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-[#d4af37]">Bridal Makeup</h3>
                <p className="text-gray-400 text-sm">Wedding Looks</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-[#d4af37]">Skin Care</h3>
                <p className="text-gray-400 text-sm">Facial & Treatment</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold text-[#d4af37]">Grooming</h3>
                <p className="text-gray-400 text-sm">Men & Women</p>
              </div>
            </div>
          </motion.div>

          {/* Closing Note with Local SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              At <span className="text-[#d4af37] font-medium">Naksh Unisex Salon Sikar</span>, 
              we share our expertise to help you look your best. Visit our salon in 
              <strong> Sikar, Rajasthan</strong> for personalized beauty services and 
              experience why we're the <strong>best salon in Sikar</strong>.
            </p>
            
            {/* Call to Action */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e0c95c] transition inline-block"
              >
                Visit Our Salon in Sikar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const blogPosts = {
  "top-5-hair-trends-2025": {
    title: "Top 5 Hair Trends of 2025 in Sikar – Unisex Styles to Try This Year",
    excerpt: "Discover the hottest haircut and color trends redefining beauty in 2025 at Naksh Unisex Salon Sikar. Perfect hair styles for both men and women in Rajasthan.",
    content: `
      <p><strong>Discover the hottest haircut and color trends redefining beauty in 2025 — perfect for both men and women at Naksh Unisex Salon Sikar.</strong></p>

      <p>At <strong>Naksh Unisex Salon Sikar</strong>, we believe great hair never goes out of style — it simply evolves. This year, the global hair scene is all about <strong>texture, bold tones, and effortless individuality</strong>. Whether you prefer subtle sophistication or daring transformation, these 2025 hair trends are your ticket to a fresh, confident look in <strong>Rajasthan</strong>.</p>

      <h2>1. Textured Layers for Effortless Volume</h2>
      <p>Forget flat and lifeless hair! 2025 is all about <strong>soft, tousled layers</strong> that add natural movement and volume. Perfect for both men and women in Sikar, this trend gives a <strong>lightweight, carefree finish</strong> that's easy to maintain. Pair it with a light mousse or salt spray for that salon-fresh bounce every day.</p>
      <p><em>Pro Tip from Naksh Salon Sikar:</em> Ask for feathered or choppy layers to enhance natural texture — especially great for wavy or thick hair types common in Rajasthan's climate.</p>

      <h2>2. The Gender-Neutral Crop</h2>
      <p>Minimalist and edgy, the <strong>modern crop cut</strong> is making waves this year in Sikar. It's a low-maintenance look that suits almost every face shape. With a little texture on top and clean edges, it creates a bold yet polished appearance — ideal for professionals and trendsetters alike in Rajasthan.</p>
      <p><em>Why We Love It at Naksh Salon:</em> It's quick to style and effortlessly chic — a true unisex favorite for 2025 in Sikar.</p>

      <h2>3. Glossy Brunettes & Expensive Blondes</h2>
      <p>Move over, pastel hues — 2025 is about <strong>luxurious, natural tones with a high-gloss finish</strong>. Brunettes are embracing <strong>deep espresso and chocolate shades</strong>, while blondes are opting for <strong>buttery, sun-kissed tones</strong> with smooth dimension. A shine-boosting gloss treatment can instantly enhance color depth and give your hair that red-carpet glow.</p>
      <p><em>Salon Secret from Naksh Sikar:</em> Try our <strong>Luminous Gloss Therapy</strong> at Naksh Salon Sikar for a radiant, mirror-like shine that lasts weeks.</p>

      <h2>4. Statement Highlights & Face-Framing Streaks</h2>
      <p>Add personality without a full color overhaul! 2025 highlights are <strong>strategic and expressive</strong> — think face-framing streaks, peekaboo highlights, or vivid tips. Whether you want a subtle pop of caramel or a bold streak of electric blue, this trend lets you <strong>play with contrast</strong> while keeping things classy.</p>
      <p><em>Pro Tip from Our Sikar Stylists:</em> Choose highlight shades that complement your skin tone — our expert stylists at Naksh Salon can help you find your perfect match.</p>

      <h2>5. Healthy Hair is the Ultimate Trend</h2>
      <p>The biggest statement of 2025? <strong>Strong, shiny, healthy hair.</strong> With increased awareness around scalp care, people in Sikar are focusing on nourishment from root to tip. Hydration treatments, bond-repair masks, and scalp massages are now essentials — not luxuries.</p>
      <p><em>Try at Naksh Salon Sikar:</em> Our <strong>Hydra Repair Spa Treatment</strong> revives dull strands, strengthens follicles, and boosts natural shine — perfect for Rajasthan's weather conditions.</p>

      <h2>Ready for a 2025 Hair Makeover in Sikar?</h2>
      <p>Trends may change, but confidence is timeless. Whether you're looking to revamp your look or simply refresh your style, <strong>Naksh Unisex Salon Sikar</strong> is here to bring your hair goals to life — with precision, care, and creativity.</p>
      <p>📍 Visit us today at our <strong>Sikar, Rajasthan</strong> location or book your appointment online to explore the <strong>Top 5 Hair Trends of 2025</strong> — reimagined just for you!</p>
      
      <div class="bg-gray-800 p-6 rounded-lg mt-8">
        <h3 class="text-[#d4af37] text-xl font-semibold mb-3">Book Your Hair Transformation in Sikar</h3>
        <p class="text-gray-300 mb-4">Ready to try these 2025 hair trends? Contact Naksh Unisex Salon Sikar today:</p>
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="tel:+918690900970" class="bg-[#d4af37] text-black px-4 py-2 rounded text-center font-semibold">📞 Call +91-8690900970</a>
          <a href="https://wa.me/918690900970" class="border border-[#d4af37] text-[#d4af37] px-4 py-2 rounded text-center font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    `,
    category: "Hair Care",
    readTime: "5 min read",
    publishDate: "2024-12-15",
    author: "Naksh Salon Team"
  },

  "bridal-makeup-guide-sikar": {
    title: "Bridal Makeup Guide for Sikar Weddings – Look Radiant on Your Big Day",
    excerpt: "Complete bridal makeup guide for Sikar weddings. Pre-wedding skin prep, traditional looks, and long-lasting beauty tips from Naksh Salon experts in Rajasthan.",
    content: `
      <p><strong>Every bride in Sikar dreams of looking picture-perfect on her wedding day — radiant, confident, and effortlessly beautiful.</strong></p>
      <p>At <strong>Naksh Unisex Salon Sikar</strong>, we understand that bridal beauty isn't just about makeup; it's about expressing your personality through elegance. From pre-bridal care to final touches, here's your ultimate guide to glowing like a goddess on your big day in <strong>Rajasthan</strong>.</p>

      <h2>1. Start with Flawless Skin Preparation</h2>
      <p>Your bridal glow begins with your skin. Start prepping at least two months before your wedding — include regular facials, exfoliation, and hydration. Glowing skin makes every makeup product sit beautifully.</p>
      <p><em>Pro Tip from Naksh Salon Sikar:</em> Our <strong>Bridal Radiance Facial</strong> gently revives dull skin and enhances luminosity for a naturally dewy finish perfect for Sikar's climate.</p>

      <h2>2. Choose the Right Base – Less is More</h2>
      <p>A flawless base is key to bridal makeup. In 2025, brides in Rajasthan are embracing <strong>natural, breathable skin</strong> over heavy foundations. Opt for lightweight HD or airbrush makeup that lasts long and looks real in every lighting condition.</p>
      <p><em>Salon Secret from Naksh Sikar:</em> We customize the foundation shade to match your undertone perfectly — no grey or cakey looks here!</p>

      <h2>3. Eyes that Speak Emotion</h2>
      <p>Soft shimmer lids, defined lashes, and well-shaped brows create a timeless bridal look. Shades of rose gold, bronze, and champagne are trending in Sikar weddings — subtle yet glamorous.</p>
      <p><em>Pro Tip:</em> Add waterproof mascara and a touch of kohl to keep your eyes expressive throughout your celebrations in Rajasthan's weather.</p>

      <h2>4. Lips that Last All Night</h2>
      <p>Go for hydrating matte or satin-finish lipsticks that last from pheras to the final dance. Shades like mauve, peach, and bold red are all-time favorites in Sikar weddings. A light gloss touch adds instant freshness.</p>

      <h2>5. Hair that Completes Your Look</h2>
      <p>Whether you want a romantic bun, floral braid, or soft curls, your hairstyle should complement your outfit and face shape. Add fresh flowers or pearl pins for a royal finish traditional to Rajasthan.</p>

      <h2>6. Final Touch – The Bride's Signature Glow</h2>
      <p>A light dust of highlighter, blush, and setting spray ensures your makeup stays intact and radiant all day long through Sikar's wedding festivities.</p>

      <p><strong>At Naksh Unisex Salon Sikar</strong>, our expert artists craft each bridal look with precision, creativity, and love. From engagement to reception, we ensure every look tells your unique story.</p>

      <div class="bg-gray-800 p-6 rounded-lg mt-8">
        <h3 class="text-[#d4af37] text-xl font-semibold mb-3">Book Your Bridal Makeup in Sikar</h3>
        <p class="text-gray-300 mb-4">💍 Book your <strong>Bridal Makeup Trial</strong> today at Naksh Salon Sikar and step into your wedding day with unmatched confidence and timeless grace.</p>
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="tel:+918690900970" class="bg-[#d4af37] text-black px-4 py-2 rounded text-center font-semibold">📞 Call +91-8690900970</a>
          <a href="https://wa.me/918690900970" class="border border-[#d4af37] text-[#d4af37] px-4 py-2 rounded text-center font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    `,
    category: "Bridal Beauty",
    readTime: "7 min read", 
    publishDate: "2024-12-10",
    author: "Naksh Salon Team"
  },

  "self-care-routine-sikar": {
    title: "Self-Care Routine in Sikar – Salon Secrets for Home Beauty",
    excerpt: "Professional self-care tips for Sikar residents. Rejuvenating hair and skin routines you can do at home from Naksh Unisex Salon experts in Rajasthan.",
    content: `
      <p><strong>Because you deserve a little luxury every day in Sikar.</strong></p>
      <p>Amid the hustle of modern life in Rajasthan, self-care has become more than a trend — it's a necessity. At <strong>Naksh Unisex Salon Sikar</strong>, we believe you can recreate that same salon indulgence at home with the right steps, mood, and mindset.</p>

      <h2>1. Set the Mood</h2>
      <p>Transform your Sikar home space into a calming haven. Dim the lights, light a few scented candles, and play soft instrumental or spa music. A relaxed environment instantly signals your mind to unwind.</p>

      <h2>2. Cleanse & Refresh</h2>
      <p>Start your ritual with a gentle cleanser to remove dirt, oil, and stress from your day in Rajasthan. Use lukewarm water and circular motions for deep yet gentle cleansing.</p>

      <h2>3. Exfoliate & Renew</h2>
      <p>Use a mild scrub or natural exfoliant to remove dead skin cells and reveal fresh, glowing skin. Focus on your face, neck, and arms — areas that often get neglected in Sikar's climate.</p>

      <h2>4. Nourish & Hydrate</h2>
      <p>Apply a hydrating mask or oil to restore your skin's natural balance. For hair, indulge in a <strong>deep-conditioning mask</strong> or oil massage to strengthen and add shine — especially important in Rajasthan's dry weather.</p>
      <p><em>Pro Tip from Naksh Salon Sikar:</em> Warm coconut or argan oil works wonders for dry, frizzy hair common in Sikar.</p>

      <h2>5. Relaxation Rituals</h2>
      <p>Massage your shoulders, scalp, and feet to relieve tension. Even 10 minutes can boost blood flow and release endorphins, leaving you feeling recharged after a long day in Sikar.</p>

      <h2>6. Lock in the Glow</h2>
      <p>After cleansing off your mask or oils, apply a light moisturizer or serum to seal in hydration. Spritz a facial mist or rose water for a final refreshing touch perfect for Rajasthan's weather.</p>

      <p><strong>Remember:</strong> Self-care isn't selfish — it's self-love. Make it a weekly ritual to recharge your body, mind, and soul here in Sikar.</p>

      <div class="bg-gray-800 p-6 rounded-lg mt-8">
        <h3 class="text-[#d4af37] text-xl font-semibold mb-3">Experience Professional Self-Care in Sikar</h3>
        <p class="text-gray-300 mb-4">✨ For a professional touch, visit <strong>Naksh Unisex Salon Sikar</strong> and let our experts pamper you with luxury facials, spa therapies, and rejuvenating treatments that make you feel brand new.</p>
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="tel:+918690900970" class="bg-[#d4af37] text-black px-4 py-2 rounded text-center font-semibold">📞 Call +91-8690900970</a>
          <a href="https://wa.me/918690900970" class="border border-[#d4af37] text-[#d4af37] px-4 py-2 rounded text-center font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    `,
    category: "Self Care",
    readTime: "4 min read",
    publishDate: "2024-12-05",
    author: "Naksh Salon Team"
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <section className="bg-black text-[#d4af37] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl">Blog Post Not Found</h1>
          <Link to="/blogs" className="bg-[#d4af37] text-black px-6 py-2 rounded-lg font-semibold mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  // Structured Data for Blog Post
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://nakshsalon.in/images/blog-cover.jpg",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://nakshsalon.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Naksh Unisex Salon",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nakshsalon.in/logo.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nakshsalon.in/blogs/${slug}`
    },
    "articleSection": post.category,
    "keywords": ["beauty blog", "hair trends", "bridal makeup", "self care", "Sikar salon", "Rajasthan beauty"]
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{post.title} | Naksh Unisex Salon Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, beauty tips, salon services, Sikar, Rajasthan, Naksh Salon`} />
        <meta name="author" content={post.author} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://nakshsalon.in/blogs/${slug}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://nakshsalon.in/blogs/${slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>

      <article 
        className="bg-black text-[#d4af37] min-h-screen pt-28 pb-20 px-6 md:px-20"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link to="/" className="hover:text-[#d4af37]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blogs" className="hover:text-[#d4af37]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#d4af37]">{post.title}</span>
          </nav>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
              <span className="bg-[#d4af37]/20 px-3 py-1 rounded-full">{post.category}</span>
              <span>{post.readTime}</span>
              <span>Published: {new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" itemProp="headline">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6" itemProp="description">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-gray-400">
              <span itemProp="author">By {post.author}</span>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none
                     prose-headings:text-[#d4af37] 
                     prose-p:text-gray-300 
                     prose-strong:text-[#d4af37]
                     prose-em:text-gray-400
                     prose-ul:text-gray-300
                     prose-ol:text-gray-300
                     prose-li:text-gray-300
                     prose-blockquote:border-[#d4af37]
                     prose-blockquote:text-gray-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
            itemProp="articleBody"
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/5 border border-[#d4af37]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Ready to Experience Premium Beauty Services in Sikar?
              </h3>
              <p className="text-gray-300 mb-6">
                Visit Naksh Unisex Salon in Sikar, Rajasthan for professional beauty treatments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e0c95c] transition"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+918690900970"
                  className="border border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-black transition"
                >
                  Call +91-8690900970
                </a>
              </div>
            </div>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center space-x-2 text-[#d4af37] hover:text-[#e0c95c] transition"
            >
              <span>←</span>
              <span>Back to All Articles</span>
            </Link>
          </motion.div>
        </div>
      </article>
    </>
  );
}
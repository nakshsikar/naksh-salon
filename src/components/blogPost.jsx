import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const fakePosts = {
  "top-5-hair-trends-2025": {
    title: "Top 5 Hair Trends of 2025 – Unisex Styles to Try This Year",
    content: `
      <p><strong>Discover the hottest haircut and color trends redefining beauty in 2025 — perfect for both men and women.</strong></p>

      <p>At <strong>Naksh Unisex Salon</strong>, we believe great hair never goes out of style — it simply evolves. This year, the global hair scene is all about <strong>texture, bold tones, and effortless individuality</strong>. Whether you prefer subtle sophistication or daring transformation, these 2025 hair trends are your ticket to a fresh, confident look.</p>

      <h2>1. Textured Layers for Effortless Volume</h2>
      <p>Forget flat and lifeless hair! 2025 is all about <strong>soft, tousled layers</strong> that add natural movement and volume. Perfect for both men and women, this trend gives a <strong>lightweight, carefree finish</strong> that’s easy to maintain. Pair it with a light mousse or salt spray for that salon-fresh bounce every day.</p>
      <p><em>Pro Tip:</em> Ask for feathered or choppy layers to enhance natural texture — especially great for wavy or thick hair types.</p>

      <h2>2. The Gender-Neutral Crop</h2>
      <p>Minimalist and edgy, the <strong>modern crop cut</strong> is making waves this year. It’s a low-maintenance look that suits almost every face shape. With a little texture on top and clean edges, it creates a bold yet polished appearance — ideal for professionals and trendsetters alike.</p>
      <p><em>Why We Love It:</em> It’s quick to style and effortlessly chic — a true unisex favorite for 2025.</p>

      <h2>3. Glossy Brunettes & Expensive Blondes</h2>
      <p>Move over, pastel hues — 2025 is about <strong>luxurious, natural tones with a high-gloss finish</strong>. Brunettes are embracing <strong>deep espresso and chocolate shades</strong>, while blondes are opting for <strong>buttery, sun-kissed tones</strong> with smooth dimension. A shine-boosting gloss treatment can instantly enhance color depth and give your hair that red-carpet glow.</p>
      <p><em>Salon Secret:</em> Try our <strong>Luminous Gloss Therapy</strong> at Naksh for a radiant, mirror-like shine that lasts weeks.</p>

      <h2>4. Statement Highlights & Face-Framing Streaks</h2>
      <p>Add personality without a full color overhaul! 2025 highlights are <strong>strategic and expressive</strong> — think face-framing streaks, peekaboo highlights, or vivid tips. Whether you want a subtle pop of caramel or a bold streak of electric blue, this trend lets you <strong>play with contrast</strong> while keeping things classy.</p>
      <p><em>Pro Tip:</em> Choose highlight shades that complement your skin tone — our stylists can help you find your perfect match.</p>

      <h2>5. Healthy Hair is the Ultimate Trend</h2>
      <p>The biggest statement of 2025? <strong>Strong, shiny, healthy hair.</strong> With increased awareness around scalp care, people are focusing on nourishment from root to tip. Hydration treatments, bond-repair masks, and scalp massages are now essentials — not luxuries.</p>
      <p><em>Try at Naksh:</em> Our <strong>Hydra Repair Spa Treatment</strong> revives dull strands, strengthens follicles, and boosts natural shine.</p>

      <h2>Ready for a 2025 Hair Makeover?</h2>
      <p>Trends may change, but confidence is timeless. Whether you’re looking to revamp your look or simply refresh your style, <strong>Naksh Unisex Salon</strong> is here to bring your hair goals to life — with precision, care, and creativity.</p>
      <p>📍 Visit us today or book your appointment online to explore the <strong>Top 5 Hair Trends of 2025</strong> — reimagined just for you!</p>
    `,
  },

  "bridal-makeup-guide": {
    title: "The Ultimate Bridal Makeup Guide – Look Radiant on Your Big Day",
    content: `
      <p><strong>Every bride dreams of looking picture-perfect on her wedding day — radiant, confident, and effortlessly beautiful.</strong></p>
      <p>At <strong>Naksh Unisex Salon</strong>, we understand that bridal beauty isn’t just about makeup; it’s about expressing your personality through elegance. From pre-bridal care to final touches, here’s your ultimate guide to glowing like a goddess on your big day.</p>

      <h2>1. Start with Flawless Skin Preparation</h2>
      <p>Your bridal glow begins with your skin. Start prepping at least two months before your wedding — include regular facials, exfoliation, and hydration. Glowing skin makes every makeup product sit beautifully.</p>
      <p><em>Pro Tip:</em> Our <strong>Bridal Radiance Facial</strong> gently revives dull skin and enhances luminosity for a naturally dewy finish.</p>

      <h2>2. Choose the Right Base – Less is More</h2>
      <p>A flawless base is key to bridal makeup. In 2025, brides are embracing <strong>natural, breathable skin</strong> over heavy foundations. Opt for lightweight HD or airbrush makeup that lasts long and looks real in every lighting condition.</p>
      <p><em>Salon Secret:</em> We customize the foundation shade to match your undertone perfectly — no grey or cakey looks here!</p>

      <h2>3. Eyes that Speak Emotion</h2>
      <p>Soft shimmer lids, defined lashes, and well-shaped brows create a timeless bridal look. Shades of rose gold, bronze, and champagne are trending — subtle yet glamorous.</p>
      <p><em>Pro Tip:</em> Add waterproof mascara and a touch of kohl to keep your eyes expressive throughout your celebrations.</p>

      <h2>4. Lips that Last All Night</h2>
      <p>Go for hydrating matte or satin-finish lipsticks that last from pheras to the final dance. Shades like mauve, peach, and bold red are all-time favorites. A light gloss touch adds instant freshness.</p>

      <h2>5. Hair that Completes Your Look</h2>
      <p>Whether you want a romantic bun, floral braid, or soft curls, your hairstyle should complement your outfit and face shape. Add fresh flowers or pearl pins for a royal finish.</p>

      <h2>6. Final Touch – The Bride’s Signature Glow</h2>
      <p>A light dust of highlighter, blush, and setting spray ensures your makeup stays intact and radiant all day long.</p>

      <p><strong>At Naksh Unisex Salon</strong>, our expert artists craft each bridal look with precision, creativity, and love. From engagement to reception, we ensure every look tells your unique story.</p>

      <p>💍 Book your <strong>Bridal Makeup Trial</strong> today and step into your wedding day with unmatched confidence and timeless grace.</p>
    `,
  },

  "self-care-routine": {
    title: "Luxury Self-care Routine at Home – Pamper Yourself Like a Pro",
    content: `
      <p><strong>Because you deserve a little luxury every day.</strong></p>
      <p>Amid the hustle of modern life, self-care has become more than a trend — it’s a necessity. At <strong>Naksh Unisex Salon</strong>, we believe you can recreate that same salon indulgence at home with the right steps, mood, and mindset.</p>

      <h2>1. Set the Mood</h2>
      <p>Transform your space into a calming haven. Dim the lights, light a few scented candles, and play soft instrumental or spa music. A relaxed environment instantly signals your mind to unwind.</p>

      <h2>2. Cleanse & Refresh</h2>
      <p>Start your ritual with a gentle cleanser to remove dirt, oil, and stress from your day. Use lukewarm water and circular motions for deep yet gentle cleansing.</p>

      <h2>3. Exfoliate & Renew</h2>
      <p>Use a mild scrub or natural exfoliant to remove dead skin cells and reveal fresh, glowing skin. Focus on your face, neck, and arms — areas that often get neglected.</p>

      <h2>4. Nourish & Hydrate</h2>
      <p>Apply a hydrating mask or oil to restore your skin’s natural balance. For hair, indulge in a <strong>deep-conditioning mask</strong> or oil massage to strengthen and add shine.</p>
      <p><em>Pro Tip:</em> Warm coconut or argan oil works wonders for dry, frizzy hair.</p>

      <h2>5. Relaxation Rituals</h2>
      <p>Massage your shoulders, scalp, and feet to relieve tension. Even 10 minutes can boost blood flow and release endorphins, leaving you feeling recharged.</p>

      <h2>6. Lock in the Glow</h2>
      <p>After cleansing off your mask or oils, apply a light moisturizer or serum to seal in hydration. Spritz a facial mist or rose water for a final refreshing touch.</p>

      <p><strong>Remember:</strong> Self-care isn’t selfish — it’s self-love. Make it a weekly ritual to recharge your body, mind, and soul.</p>

      <p>✨ For a professional touch, visit <strong>Naksh Unisex Salon</strong> and let our experts pamper you with luxury facials, spa therapies, and rejuvenating treatments that make you feel brand new.</p>
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = fakePosts[slug];

  if (!post) {
    return (
      <section className="bg-black text-[#d4af37] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl">Post not found</h1>
          <Link to="/blogs" className="btn-gold mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-black text-[#d4af37] min-h-screen mt-10 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h1 className="text-4xl font-semibold">{post.title}</h1>
        </motion.header>

        <section
          className="prose prose-invert text-gray-300 prose-headings:text-[#d4af37]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

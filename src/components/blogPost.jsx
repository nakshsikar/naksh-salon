import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const fakePosts = {
  "top-5-hair-trends-2025": {
    title: "Top 5 Hair Trends of 2025",
    content: `<p>Trend 1: ...</p><p>Trend 2: ...</p><p>Trend 3: ...</p>`,
  },
  "bridal-makeup-guide": {
    title: "The Ultimate Bridal Makeup Guide",
    content: `<p>Bridal step 1: ...</p><p>Tip: ...</p>`,
  },
  "self-care-routine": {
    title: "Luxury Self-care Routine at Home",
    content: `<p>Start with cleansers ...</p>`,
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
          <Link to="/blogs" className="btn-gold mt-4 inline-block">Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-black text-[#d4af37] min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <h1 className="text-4xl font-semibold">{post.title}</h1>
        </motion.header>

        <section className="prose prose-invert text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

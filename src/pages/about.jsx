import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      {/* 🧠 SEO Meta Tags */}
      <Helmet>
        <title>About Naksh Salon | Best Unisex Salon for Hair, Skin & Beauty Care</title>
        <meta
          name="description"
          content="Naksh Salon is a luxury unisex salon offering premium hair, skin, and beauty services for men and women. Discover our mission, vision, and commitment to excellence."
        />
        <meta
          name="keywords"
          content="Naksh Salon, unisex salon, beauty salon, hair salon, luxury salon, skin care, grooming, best salon for men and women, professional stylists, hair spa, bridal makeup"
        />
      </Helmet>

      <section className="min-h-screen bg-black text-gray-300 pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-8 text-center tracking-wide"
          >
            About <span className="text-white">Naksh Salon</span>
          </motion.h1>

          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-[#d4af37]/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]"
          >
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Welcome to <span className="text-[#d4af37] font-semibold">Naksh Salon</span> — 
              a premium <span className="text-[#d4af37]">unisex salon</span> where beauty meets luxury 
              and self-expression knows no boundaries. Whether you’re a man or a woman, 
              we bring you world-class grooming, styling, and wellness experiences designed 
              to elevate your personality and confidence.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              At Naksh Salon, our philosophy revolves around celebrating individuality.  
              From modern haircuts and advanced skincare to bridal makeovers and spa therapies — 
              every service is customized to match your unique look and lifestyle.  
              Our team of expert stylists and therapists blend art, innovation, and comfort 
              to create transformations that last.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#d4af37]">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to redefine the salon experience by becoming India’s most 
                trusted and loved <span className="text-[#d4af37]">unisex beauty destination</span>.  
                We aim to bring luxury, comfort, and confidence together — offering a space 
                where everyone can express their best selves with style and grace.  
                At Naksh Salon, beauty is not just seen — it’s felt.
              </p>
            </div>
            <img
              src="/our-vision.jpg"
              alt="Our Vision - Naksh Unisex Salon"
              className="rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.15)] border border-[#d4af37]/20"
            />
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse"
          >
            <img
              src="/our-mission.jpg"
              alt="Our Mission - Unisex Salon Experience"
              className="rounded-2xl"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#d4af37]">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to deliver top-notch beauty and grooming services 
                for both men and women, focusing on innovation, hygiene, and excellence.  
                We are dedicated to creating a relaxing environment where every client feels valued, 
                confident, and beautiful — inside and out.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We stay ahead with the latest trends, premium products, and expert techniques 
                to make sure every visit leaves you rejuvenated. Because at 
                <span className="text-[#d4af37]"> Naksh Salon</span>, your satisfaction 
                defines our success.
              </p>
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Step into <span className="text-[#d4af37]">Naksh Salon</span> — 
              a <span className="text-[#d4af37]">unisex salon</span> where artistry, 
              creativity, and comfort come together. Discover a place where 
              your style meets sophistication, and your beauty finds its true reflection.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

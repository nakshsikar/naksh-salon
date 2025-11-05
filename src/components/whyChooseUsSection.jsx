import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-black text-[#d4af37] py-10 px-6 md:px-20 overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/60 to-black pointer-events-none"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-glow">
          Why Choose <span className="text-[#d4af37]">Naksh Unisex Salon</span>?
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          Your trusted destination for luxury beauty, professional care, and
          flawless transformations.
        </p>
      </motion.div>

      {/* Content Area */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/choose-us.jpg"
            alt="Professional hair and beauty services at Naksh Unisex Salon"
            className="rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.3)] w-full max-w-md object-cover"
          />
        </motion.div>

        {/* SEO Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            <strong className="text-[#d4af37]">Naksh Unisex Salon</strong> is
            where modern beauty meets professional expertise. We specialize in{" "}
            <strong>hair styling</strong>, <strong>makeup</strong>,{" "}
            <strong>skin treatments</strong>, and{" "}
            <strong>nail artistry</strong>, using top-quality products to give
            you the confidence you deserve.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Certified Experts:</strong> Skilled stylists and
              beauticians with years of professional experience.
            </li>
            <li>
              <strong>Premium Products:</strong> Trusted brands for healthy,
              lasting results.
            </li>
            <li>
              <strong>Personalized Care:</strong> Every look is designed around
              your face shape, skin tone, and lifestyle.
            </li>
            <li>
              <strong>Relaxing Ambience:</strong> Step into a peaceful,
              luxurious salon space that refreshes your mind and body.
            </li>
          </ul>

          <p className="mt-6">
            Experience the perfect blend of style, care, and comfort — only at{" "}
            <span className="text-[#d4af37] font-semibold">
              Naksh Unisex Salon
            </span>, your one-stop destination for beauty and wellness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
          Why Choose <span className="text-[#d4af37]">Naksh Salon?</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          Because your beauty deserves more than just care — it deserves perfection.
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
            src="/5.avif"
            alt="Professional hair styling at Naksh Salon"
            className="rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.3)] w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Right Side SEO Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            At <strong className="text-[#d4af37]">Naksh Salon</strong>, we combine
            creativity, expertise, and luxury to deliver an experience that
            goes beyond beauty. Our salon is designed to help you relax, refresh,
            and rediscover your glow — because you deserve nothing less.
          </p>

          <h3 className="text-2xl font-semibold text-[#d4af37] mt-4">
            Here’s why our clients trust us:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Experienced Stylists:</strong> Our team of certified
              professionals understands the art of beauty and ensures every
              detail is perfect.
            </li>
            <li>
              <strong>Premium Products:</strong> We use only trusted,
              dermatologist-approved brands for your hair and skin.
            </li>
            <li>
              <strong>Personalized Consultations:</strong> Every service is
              tailored to your unique needs, lifestyle, and style preference.
            </li>
            <li>
              <strong>Relaxing Atmosphere:</strong> Immerse yourself in a calm,
              luxurious environment designed to pamper your senses.
            </li>
            <li>
              <strong>Commitment to Quality:</strong> From hygiene to
              hospitality, we maintain top-tier salon standards in every step.
            </li>
          </ul>

          <p className="mt-6">
            Whether it’s a new haircut, flawless makeup, or a soothing spa
            session, Naksh Salon is your go-to destination for all things
            beauty and confidence. Experience transformation — the
            <span className="text-[#d4af37] font-semibold"> Naksh way</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

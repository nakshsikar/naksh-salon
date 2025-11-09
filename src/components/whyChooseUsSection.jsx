import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-black text-[#d4af37] py-16 px-6 md:px-20 overflow-hidden"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <meta itemProp="name" content="Why Choose Naksh Unisex Salon" />
      <meta itemProp="description" content="Reasons to choose Naksh Unisex Salon in Sikar for premium beauty and grooming services" />
      
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111]/60 to-black pointer-events-none"></div>

      {/* Heading with Local SEO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Why Choose <span className="text-[#d4af37]">Naksh Unisex Salon Sikar</span>?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your trusted beauty destination in <strong>Sikar, Rajasthan</strong> for luxury grooming, 
          professional care, and flawless transformations.
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
            alt="Professional hair styling and beauty services at Naksh Unisex Salon Sikar, Rajasthan - Best salon services"
            className="rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.3)] w-full max-w-md object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* SEO Rich Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed"
          itemProp="text"
        >
          <p className="text-lg">
            <strong className="text-[#d4af37]">Naksh Unisex Salon Sikar</strong> is 
            Rajasthan's premier destination where modern beauty meets professional expertise. 
            We specialize in <strong>professional haircuts</strong>, <strong>bridal makeup</strong>,{" "}
            <strong>facial treatments</strong>, <strong>nail services</strong>, and{" "}
            <strong>complete grooming</strong>, using premium products to give you 
            the confidence you deserve.
          </p>

          <div className="grid gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-xl mt-1">✓</span>
              <div>
                <strong className="text-white">Certified Beauty Experts in Sikar</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Skilled stylists and beauticians with years of professional experience serving Sikar community.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-xl mt-1">✓</span>
              <div>
                <strong className="text-white">Premium Quality Products</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Trusted international and national brands for healthy, lasting beauty results in Rajasthan.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-xl mt-1">✓</span>
              <div>
                <strong className="text-white">Personalized Beauty Solutions</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Every look is customized around your face shape, skin tone, and lifestyle preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-xl mt-1">✓</span>
              <div>
                <strong className="text-white">Luxurious Salon Ambience</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Step into a peaceful, hygienic, and luxurious space that refreshes your mind and body.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-xl mt-1">✓</span>
              <div>
                <strong className="text-white">Affordable Premium Services</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Experience luxury beauty services at competitive prices in Sikar, Rajasthan.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-xl mt-1">✓</span>
              <div>
                <strong className="text-white">Modern Equipment & Techniques</strong>
                <p className="text-gray-400 text-sm mt-1">
                  Latest beauty technology and trending styles for the best grooming experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional SEO Content - Hidden for Crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h3>Why Choose Naksh Unisex Salon in Sikar?</h3>
        <p>Naksh Unisex Salon is the best beauty salon in Sikar, Rajasthan offering professional hair styling, bridal makeup, facial treatments, nail services, and complete grooming solutions for men and women. Our certified beauty experts, premium products, and luxurious ambience make us the preferred choice for beauty services in Sikar.</p>
        <ul>
          <li>Professional Hair Styling Services in Sikar</li>
          <li>Bridal Makeup Artists in Rajasthan</li>
          <li>Skin Care and Facial Treatments</li>
          <li>Relaxing Nail Services Services</li>
          <li>Nail Services and Beauty Services</li>
          <li>Men Grooming and Beard Styling</li>
        </ul>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function MovingGallerySection() {
  const imagesRow1 = [
    "/1.webp",
    "/2.jpg",
    "/3.webp",
    "/4.webp",
    "/5.jpg",
    "nail-art2.png"
  ];

  const imagesRow2 = [
    "/6.webp",
    "/7.jpg",
    "/8.webp",
    "/9.jpg",
    "/10.jpg",
    "nail-art1.avif"

  ];

  return (
    <section className="relative w-full overflow-hidden py-10 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111111]/60 to-black pointer-events-none"></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#d4af37] text-glow">
          A Glimpse of Elegance
        </h2>
        <p className="text-gray-400 mt-3">Every frame tells a story of style & grace</p>
      </div>

      {/* Row 1 - Left to Right */}
      <motion.div
        className="flex gap-6 w-max mb-8"
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...imagesRow1, ...imagesRow1].map((img, i) => (
          <div
            key={i}
            className="glass-card overflow-hidden rounded-2xl min-w-[300px] h-[200px]"
          >
            <img
              src={img}
              alt="Salon Style"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </motion.div>

      {/* Row 2 - Right to Left */}
      <motion.div
        className="flex gap-6 w-max"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {[...imagesRow2, ...imagesRow2].map((img, i) => (
          <div
            key={i}
            className="glass-card overflow-hidden rounded-2xl min-w-[300px] h-[200px]"
          >
            <img
              src={img}
              alt="Salon Look"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

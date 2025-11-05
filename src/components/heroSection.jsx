import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
      title: "Luxury Hair Styling",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      title: "Bridal & Event Makeup",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1200&q=80",
      title: "Unisex Salon Experience",
    },
  ];

  return (
    <section className="w-full h-screen overflow-hidden">
      <Splide
        options={{
          type: "loop",
          direction: "ttb", // vertical slide animation
          height: "100vh",
          autoplay: true,
          interval: 3000,
          speed: 1000,
          arrows: false,
          pagination: true,
          pauseOnHover: false,
          resetProgress: false,
          drag: false, // disable manual dragging (optional)
        }}
        aria-label="Naksh Unisex Salon Banner"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div
              className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <h2 className="relative text-[#d4af37] text-5xl md:text-7xl font-extrabold z-10 text-center">
                {slide.title}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

// Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/barber/gallery/photo (3).webp",
  "/barber/gallery/photo (6).webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hovered]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative h-screen w-full text-white overflow-hidden"
      id="home"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />

      {/* Konten */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:pl-24 text-left">
        <div className="mb-6 drop-shadow-lg">
          <div className="text-6xl md:text-8xl font-extrabold text-white">
            FADED
          </div>
          <div className="text-6xl md:text-8xl font-semibold text-gray-300 mt-1 ml-1">
            STUDIO BALI
          </div>
        </div>

        <p className="text-base md:text-xl text-white max-w-2xl mb-8 drop-shadow-md leading-relaxed text-justify">
          From a Pair of Clippers in High School to Faded Studio Bali — Built
          from Struggle, Sharpened by Experience. Since 2016, we’ve mastered
          every style and every story behind the chair. <br />
          Founded in 2022 to not only cut hair, but to uplift the next
          generation of young men chasing purpose through skill.
        </p>

        <div className="w-fit mx-auto md:mx-0 text-center md:text-left">
          <a
            href="https://wa.me/6282359489726"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-300 text-black font-medium text-base py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Tombol panah kiri */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 p-2 rounded-full transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Tombol panah kanan */}
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 p-2 rounded-full transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}

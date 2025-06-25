"use client";

import Image from "next/image";

const galleryImages = [
  "/barber/gallery/photo (1).webp",
  "/barber/gallery/photo (2).webp",
  "/barber/gallery/photo (3).webp",
  "/barber/gallery/photo (4).webp",
  "/barber/gallery/photo (5).webp",
  "/barber/gallery/photo (6).webp",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-zinc-900 text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 border-l-4 border-yellow-400 pl-4 text-left">
          Galleries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

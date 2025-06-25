"use client";

import { useState } from "react";

const outlets = [
  {
    name: "Pererenan",
    address: "Jl. Sempol, Pererenan, Kec. Mengwi, Kabupaten Badung.",
    hours: "Open Daily: 9 AM – 7 PM",
    mapsLink: "https://maps.app.goo.gl/H7DtkmtF8FXt6xyH8",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5315997603116!2d115.13203859999999!3d-8.640883600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2395aefc89d47%3A0x3050af4f1bbd03c1!2sFaded%20studio%20Bali!5e0!3m2!1sid!2sid!4v1750832078994!5m2!1sid!2sid",
    image: "/barber/photo (9).jpg",
  },
  {
    name: "Munggu",
    address: "Jl. Pantai Munggu, Munggu, Kec. Mengwi, Kabupaten Badung.",
    hours: "Open Daily: 9 AM – 7 PM",
    mapsLink: "https://maps.app.goo.gl/vF92bNhx2EfHX8aK9",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5035905312748!2d115.1185502!3d-8.6435604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23900632acd67%3A0xff57ca7488262a5b!2sFaded%20Studio%20Bali!5e0!3m2!1sid!2sid!4v1750832160107!5m2!1sid!2sid",
    image: "/barber/photo (8).jpg",
  },
];

export default function About() {
  const [selectedOutlet, setSelectedOutlet] = useState<
    null | (typeof outlets)[0]
  >(null);

  return (
    <section id="about" className="bg-zinc-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 border-l-4 border-yellow-400 pl-4">
          OUR <span className="text-yellow-400">OUTLETS</span>
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-4">
          <b>Faded Studio Bali</b> isn&rsquo;t just a barbershop — it&rsquo;s a
          place where style meets precision. Founded by passionate
          professionals, we&rsquo;ve served the community with top-tier grooming
          services since 2020.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          Whether you&rsquo;re looking for a clean fade, a classic cut, or a
          sharp beard line, our experienced barbers are ready to make it happen.
          With a cozy atmosphere and modern style, you&rsquo;re always in good
          hands.
        </p>

        <p className="text-sm text-gray-400 mt-8 mb-2">
          Tap on a branch to see the map & reviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {outlets.map((outlet) => (
            <div
              key={outlet.name}
              className="relative h-72 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => {
                setSelectedOutlet(outlet);
                setTimeout(() => {
                  const el = document.getElementById("map-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              style={{
                backgroundImage: `url('${outlet.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/80 transition" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h3 className="text-2xl font-bold mb-2">{outlet.name}</h3>
                <p className="text-sm mb-1">{outlet.hours}</p>
                <p className="text-sm mb-4">{outlet.address}</p>
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedOutlet(outlet);
                      setTimeout(() => {
                        const el = document.getElementById("map-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="border border-white text-white py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-black transition"
                  >
                    See Location
                  </button>

                  <a
                    href="https://wa.me/6282359489726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map detail */}
        {selectedOutlet && (
          <div
            id="map-section"
            className="mt-16 bg-zinc-800 p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              {selectedOutlet.name} Location & Reviews
            </h3>
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <iframe
                src={selectedOutlet.mapEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
            <div className="flex items-center gap-4">
              <a
                href={selectedOutlet.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300"
              >
                View on Google Maps
              </a>
              <button
                onClick={() => setSelectedOutlet(null)}
                className="text-sm text-white underline hover:text-yellow-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

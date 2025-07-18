export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Motto */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Faded Studio Bali
          </h2>
          <p className="text-sm text-gray-400">
            From a Pair of Clippers in High School to Faded Studio Bali — Built
            from Struggle, Sharpened by Experience. Since 2016, we’ve mastered
            every style and every story behind the chair. <br />
            Founded in 2022 to not only cut hair, but to uplift the next
            generation of young men chasing purpose through skill.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-yellow-400 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Jl. Sempol, Pererenan, Kec. Mengwi, Kabupaten Badung</li>
            <li>
              📍 Jl. Pantai Munggu, Munggu, Kec. Mengwi, Kabupaten Badung.
            </li>
            <li>⏰ Open Daily: 9 AM – 7 PM</li>
            <li>
              📞 WhatsApp:{" "}
              <a
                href="https://wa.me/6282359489726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                +62 823-5948-9726
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Faded Studio Bali. All rights
        reserved.
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link
          href="/"
          className={`${playfair.className} leading-tight text-center`}
        >
          <div className="text-3xl md:text-4xl font-extrabold tracking-wide">
            FADED
          </div>
          <div className="text-xs md:text-sm tracking-widest text-gray-300">
            STUDIO BALI
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex text-sm uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-yellow-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-4 space-y-4 text-white text-base font-medium transition">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block w-full hover:text-yellow-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[#f7f4ef]/95 backdrop-blur-md border-b border-[#d6d0c6] shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="group">
          <span
            className={`block font-serif text-xl lg:text-2xl tracking-wide transition-colors leading-none ${
              isTransparent ? "text-[#f7f4ef]" : "text-[#1e3520]"
            }`}
          >
            Sandy Horne
          </span>
          <span
            className={`block text-[10px] tracking-[0.3em] uppercase font-sans font-light transition-colors mt-0.5 ${
              isTransparent ? "text-[#f7f4ef]/60" : "text-[#4a7a3c]"
            }`}
          >
            Photography
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.2em] uppercase font-sans font-medium transition-colors hover:text-[#4a7a3c] ${
                isTransparent ? "text-[#f7f4ef]/90 hover:text-white" : "text-[#1a2e1c]"
              } ${
                pathname === href
                  ? isTransparent
                    ? "border-b border-white/60 pb-0.5"
                    : "border-b border-[#4a7a3c] pb-0.5 text-[#1e3520]"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors ${
            isTransparent ? "text-[#f7f4ef]" : "text-[#1e3520]"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#f7f4ef] border-t border-[#d6d0c6] px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-xs tracking-[0.2em] uppercase font-sans font-medium transition-colors hover:text-[#4a7a3c] ${
                pathname === href ? "text-[#1e3520]" : "text-[#1a2e1c]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

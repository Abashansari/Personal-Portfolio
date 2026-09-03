
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Laptop2 } from "lucide-react";
import Image from "next/image";
import { FaTerminal } from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience & Training", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Journey", href: "#journey" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">

      {/* ================= DESKTOP NAVBAR ================= */}

      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo Area */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
        >
          {/* Laptop Logo */}
<div className="relative flex items-center justify-center w-12 h-12 group">
  <Image
    src="/kali.png"
    alt="Kali Linux"
    width={48}
    height={48}
    className="object-contain group-hover:scale-110 transition-transform duration-300"
  />
</div>

          {/* Logo Text */}
          <div className="flex flex-col">
            <span className="text-text-primary font-bold text-xl tracking-wider leading-none">
              ABASH ANSARI
            </span>

            <span className="text-accent-teal text-[10px] tracking-[0.2em] mt-1.5 font-mono uppercase">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP LINKS ================= */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-accent-teal text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

         <Link
            href="#contact"
            className="group relative px-6 py-2 border border-accent-teal text-accent-teal text-sm tracking-wide hover:bg-accent-teal/10 transition-colors overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center">
              Get In Touch 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent-teal transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* ================= MOBILE NAVIGATION ================= */}

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">

          <div className="container mx-auto px-6 py-5 flex flex-col gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-accent-teal text-sm font-medium py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
}

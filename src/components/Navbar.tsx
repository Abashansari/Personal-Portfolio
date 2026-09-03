"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience & Training", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Journey", href: "#journey" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-md border-b border-border-teal py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex flex-col">
          <Link href="#home" className="text-text-primary font-bold text-xl tracking-wider">
            ABASH ANSARI
          </Link>
          <span className="text-accent-teal text-xs tracking-[0.2em] mt-1 font-mono uppercase">
            Full-Stack Developer
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative group ${
                  activeSection === link.href.substring(1)
                    ? "text-accent-cyan"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent-teal shadow-[0_0_8px_rgba(0,217,192,0.6)]"
                  />
                )}
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
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-lg border-b border-border-teal py-6 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg tracking-wide ${
                activeSection === link.href.substring(1)
                  ? "text-accent-cyan"
                  : "text-text-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-4 text-accent-teal border border-accent-teal px-6 py-3 text-center tracking-wide"
          >
            Get In Touch →
          </Link>
        </div>
      )}
    </nav>
  );
}

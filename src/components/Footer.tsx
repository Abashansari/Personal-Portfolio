"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaCode,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const exploreLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience & Training", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Journey", href: "#journey" },
  ];

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6 md:px-12">

        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Link
              href="#home"
              className="inline-flex items-center gap-3 group"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all duration-300">
                <FaCode
                  size={21}
                  className="text-teal-400 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="font-bold text-lg tracking-wider">
                  ABASH ANSARI
                </h3>

                <p className="text-[10px] text-teal-400 font-mono tracking-[0.2em] uppercase mt-0.5">
                  Full-Stack Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 text-gray-400 text-sm leading-7 max-w-xs">
              Art is all about <span className="text-teal-400">Revolution.</span>
              <br />
              Art will not change the condition of a people until they change what is in themselves.
            </p>

            {/* Back to top */}
            <Link
              href="#home"
              className="inline-flex items-center gap-2 mt-7 text-sm text-gray-400 hover:text-teal-400 transition-colors group"
            >
              <FaArrowUp
                size={12}
                className="group-hover:-translate-y-1 transition-transform"
              />
              Back to top
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-6">
              Explore
            </h4>

            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-teal-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <a
                href="mailto:your-email@example.com"
                className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <FaEnvelope
                  size={15}
                  className="mt-1 text-teal-400 group-hover:scale-110 transition-transform"
                />

                <span className="text-sm break-all">
                  ansariabash2004@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/918167259866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <FaWhatsapp
                  size={17}
                  className="text-teal-400 group-hover:scale-110 transition-transform"
                />

                <span className="text-sm">
                  Let's Chat
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt
                  size={15}
                  className="mt-1 text-teal-400"
                />

                <span className="text-sm">
                  Dentam, West Sikkim, India
                </span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-6">
              Social
            </h4>

            <p className="text-gray-400 text-sm leading-6 mb-6">
              Let's connect and build something meaningful together.
            </p>

            <div className="flex flex-wrap gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/Abashansari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-gray-600 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abash-ansari-0bb191326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin size={19} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/abash_21ansari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-pink-400 hover:border-pink-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram size={19} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918167259866"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-400 hover:text-green-400 hover:border-green-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp size={19} />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">
              Abash Ansari
            </span>
            . All rights reserved.
          </p>

          <p className="text-gray-600 text-xs font-mono">
            The True ART is {" "}
            <span className="text-teal-400">Revolution</span>
          </p>

        </div>

      </div>
    </footer>
  );
}
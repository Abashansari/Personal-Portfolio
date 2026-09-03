"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaHeart,
  FaCoffee,
  FaInstagram
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern" />

      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="container mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div className="w-full lg:w-[60%]">

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-2xl">
                👋
              </span>

              <span className="text-lg md:text-xl text-gray-500 font-medium">
                Hello, Welcome!
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] font-bold text-gray-900 tracking-tight"
            >
              I'm{" "}
              <span className="text-cyan-600">
                Abash Ansari
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-5 text-2xl md:text-3xl font-semibold text-gray-700"
            >
              Full-Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed"
            >
              I build practical and modern applications across{" "}
              <span className="font-semibold text-gray-700">
                Web, Mobile, Desktop, AI & Machine Learning.
              </span>
            </motion.p>

            {/* Code / Create / Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="flex items-center gap-5 mt-8 text-gray-400"
            >
              <FaCode size={20} />

              <span className="text-gray-300">
                |
              </span>

              <FaHeart
                size={18}
                className="text-red-400"
              />

              <span className="text-gray-300">
                |
              </span>

              <FaCoffee
                size={19}
                className="text-yellow-500"
              />

              <span className="ml-2 text-sm text-gray-400">
                Code • Create • Learn
              </span>
            </motion.div>

            {/* ================= ACTION BUTTONS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              {/* View Work */}
              <Link
                href="#projects"
                className="px-7 py-3.5 rounded-lg bg-cyan-600 text-white font-semibold shadow-lg hover:bg-cyan-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work →
              </Link>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="px-7 py-3.5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Download Resume
              </a>

              {/* Contact */}
              <Link
                href="#contact"
                className="px-7 py-3.5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* ================= SOCIAL LINKS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              {/* GitHub */}
              <a
                href="https://github.com/Abashansari"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={21} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abash-ansari-0bb191326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin size={21} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/abash_21ansari?igsh=djlkdW43YzVncjR1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 text-gray-500 hover:text-pink-500 hover:border-pink-300 hover:bg-gradient-to-br hover:from-purple-50 hover:via-pink-50 hover:to-orange-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"              >
                <FaInstagram size={21} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918167259866"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center gap-2 px-5 h-12 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaWhatsapp size={20} />

                <span>
                  Let's Chat
                </span>
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT CONTENT / IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="w-full lg:w-[40%] flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">

              {/* Decorative Border */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-cyan-200" />

              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">

                <Image
                  src="/myPhoto.jpeg"
                  alt="Abash Ansari - Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 80vw, 420px"
                />

              </div>

              {/* Status Card */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-lg">

                <div className="flex items-center gap-2">

                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />

                  <span className="text-sm font-semibold text-gray-700">
                    Available for opportunities
                  </span>

                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Web • Mobile • AI
                </p>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

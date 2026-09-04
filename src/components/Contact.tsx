"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-secondary border-t border-gray-200 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-grid-pattern" />

      {/* Soft teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="text-teal-600 font-mono text-sm tracking-widest">
            05
          </span>

          <div className="w-12 h-px bg-teal-500" />

          <span className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            Contact
          </span>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="
            max-w-5xl
            mx-auto
            bg-white
            rounded-3xl
            border-2
            border-gray-200
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
        >

          {/* Main Content */}
          <div className="p-8 md:p-12 lg:p-16 text-center">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />

              <span className="text-teal-700 text-xs font-semibold tracking-wider uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-gray-900">
              HAVE AN IDEA
              <br />
              <span className="text-teal-600">
                WORTH BUILDING?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 mx-auto max-w-2xl text-gray-600 text-lg md:text-xl leading-8">
              Let's turn your idea, challenge, or problem into a practical
              digital product. I'm always interested in building useful
              software and exploring new ideas.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

              {/* Email */}
              <a
                href="mailto:ansariabash2004@gmail.com"
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  bg-gray-900
                  text-white
                  font-semibold
                  tracking-wide
                  hover:bg-teal-600
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope size={16} />

                GET IN TOUCH

                <FaArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Abashansari"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  bg-white
                  border
                  border-gray-300
                  text-gray-800
                  font-semibold
                  tracking-wide
                  hover:border-gray-900
                  hover:-translate-y-1
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={18} />

                VIEW GITHUB

                <FaArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

            </div>
          </div>

          {/* Social Area */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 md:px-12 py-8">

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="text-center md:text-left">
                <p className="text-gray-900 font-semibold">
                  Let's connect
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Find me on social platforms
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">

                {/* GitHub */}
                <a
                  href="https://github.com/Abashansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    border
                    border-gray-200
                    text-gray-500
                    hover:text-gray-900
                    hover:border-gray-400
                    hover:-translate-y-1
                    hover:shadow-sm
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub size={19} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abash-ansari-0bb191326"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    border
                    border-gray-200
                    text-gray-500
                    hover:text-blue-600
                    hover:border-blue-200
                    hover:bg-blue-50
                    hover:-translate-y-1
                    hover:shadow-sm
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin size={19} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918167259866"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    border
                    border-gray-200
                    text-gray-500
                    hover:text-green-600
                    hover:border-green-200
                    hover:bg-green-50
                    hover:-translate-y-1
                    hover:shadow-sm
                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp size={19} />
                </a>

              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-200 px-8 py-4 bg-white">
            <p className="text-center text-gray-400 text-xs font-mono tracking-wider">
              LET'S BUILD SOMETHING USEFUL.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
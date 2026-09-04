"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const highlights = [
    "Hands-on development",
    "Problem solving",
    "Full-stack thinking",
    "Software architecture",
    "Learning by building",
    "Continuous improvement"
  ];

  return (
    <section id="about" className="py-24 relative bg-secondary">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-accent-teal font-mono text-sm tracking-widest">01</span>
            <div className="h-[1px] w-12 bg-accent-teal"></div>
            <span className="text-text-secondary font-mono text-sm tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary mb-8">
            CURIOUS BY<br />
            NATURE.<br />
            BUILDER BY<br />
            PRACTICE.
          </h2>

          <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed mb-8">
            I'm Abash Ansari, a Full-Stack Developer who enjoys building software across web, mobile, desktop, AI, and machine learning.
          </p>

          {/* Grid highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border-teal">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full box-glow-teal"></div>
                <span className="text-text-primary tracking-wide text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group"
        >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-accent-cyan/30 bg-primary/60 backdrop-blur-md p-2 shadow-[0_0_40px_rgba(0,217,192,0.1)] group-hover:shadow-[0_0_60px_rgba(0,217,192,0.25)] transition-shadow duration-700 group-hover:border-accent-cyan/50">
              <div className="relative rounded-xl overflow-hidden bg-secondary">
                {/* Cyber overlay mask */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-accent-cyan/20 mix-blend-overlay z-10 pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>

                {/* Image with subtle zoom on hover */}
                <div className="group-hover:scale-105 transition-transform duration-1000 ease-out">
                    <Image
                      src="/about.png?v=latest"
                      alt="Abash Ansari working on a software development project"
                      width={1200}
                      height={1200}
                      className="w-full h-auto block"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      unoptimized
                    />
                </div>
              </div>
            </div>

            {/* Floating UI Status Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-5 left-8 md:-left-8 bg-secondary/95 backdrop-blur-xl border border-accent-cyan/30 px-5 py-3 rounded-lg shadow-2xl z-30 flex items-center space-x-3 group-hover:border-accent-cyan/60 transition-colors duration-500"
            >
              <span className="text-xs md:text-sm font-mono text-text-primary tracking-wide">
                Everything is beautiful in its time
              </span>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

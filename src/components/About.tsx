"use client";

import { motion } from "framer-motion";

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
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Title side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-accent-teal font-mono text-sm tracking-widest">01</span>
            <div className="h-[1px] w-12 bg-accent-teal"></div>
            <span className="text-text-secondary font-mono text-sm tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
            CURIOUS BY<br />
            NATURE.<br />
            BUILDER BY<br />
            PRACTICE.
          </h2>
        </motion.div>

        {/* Content side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3 flex flex-col space-y-8"
        >
          <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed">
            I'm Abash Ansari, a Full-Stack Developer who enjoys building software across web, mobile, desktop, AI, and machine learning.
          </p>

          {/* Grid highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-teal">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full box-glow-teal"></div>
                <span className="text-text-primary tracking-wide text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

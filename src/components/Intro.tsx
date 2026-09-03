"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary border-t border-border-teal">
      {/* Background grids */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center flex flex-col items-center"
        >
          {/* Top Indicator */}
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-accent-teal mb-8"></div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-text-primary mb-8">
            "I DON'T JUST WRITE CODE.<br />
            I BUILD SYSTEMS THAT SOLVE PROBLEMS."
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            From desktop inventory systems and mobile billing applications to AI-powered web applications, I enjoy turning real-world problems into practical software.
          </p>
          
          {/* Bottom Indicator */}
          <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-accent-teal mt-12"></div>
        </motion.div>
      </div>
    </section>
  );
}

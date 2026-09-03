"use client";

import { motion } from "framer-motion";

export default function Blog() {
  const categories = [
    "NEXT.JS",
    "REACT",
    "FULL-STACK",
    "AI",
    "MACHINE LEARNING",
    "SYSTEM DESIGN"
  ];

  return (
    <section id="blog" className="py-24 relative bg-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent-teal"></div>
            <span className="text-accent-teal font-mono text-sm tracking-widest uppercase">06 // Blog</span>
            <div className="h-[1px] w-12 bg-accent-teal"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-6 tracking-tight"
          >
            NOTES FROM THE BUILD
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl font-light tracking-wide max-w-2xl"
          >
            Technical thoughts, experiments, lessons, and things I'm learning while building software.
          </motion.p>
        </div>

        {/* Coming Soon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border-teal bg-surface-muted p-8 h-64 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono text-text-secondary uppercase tracking-widest border border-border-teal px-2 py-1">
                  {category}
                </span>
                <div className="w-2 h-2 bg-border-teal rounded-full group-hover:bg-accent-teal transition-colors"></div>
              </div>
              
              <div className="z-10">
                <h3 className="text-xl font-bold text-text-primary mb-2 opacity-50">
                  COMING SOON
                </h3>
                <div className="w-12 h-[2px] bg-border-teal group-hover:bg-accent-cyan transition-colors group-hover:w-24 duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-secondary border-t border-border-teal">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern mix-blend-overlay"></div>
      
      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-teal/5 rounded-t-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-4xl"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-accent-cyan mb-8"></div>
          
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] text-text-primary tracking-tight mb-6">
            HAVE AN IDEA<br />
            WORTH BUILDING?
          </h2>
          
          <p className="text-accent-teal text-xl md:text-2xl font-light tracking-widest uppercase mb-12">
            LET'S TURN A PROBLEM INTO A PRODUCT.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="mailto:#" 
              className="group relative px-10 py-5 bg-text-primary text-primary font-bold tracking-wider hover:bg-highlight hover:box-glow-teal transition-all flex items-center"
            >
              GET IN TOUCH
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
            
            <a 
              href="https://github.com/Abashansari" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 border border-border-teal text-text-primary font-medium tracking-wider hover:bg-surface-muted transition-all flex items-center"
            >
              VIEW GITHUB
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6 mt-16 pt-16 border-t border-border-teal w-full justify-center">
            <a href="https://github.com/Abashansari" target="_blank" rel="noopener noreferrer" className="p-4 bg-surface-muted border border-border-teal text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors group">
              <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/abash-ansari-0bb191326" target="_blank" rel="noopener noreferrer" className="p-4 bg-surface-muted border border-border-teal text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors group">
              <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}

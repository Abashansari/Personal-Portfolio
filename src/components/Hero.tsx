"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Grid Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern mix-blend-overlay"></div>
      
      {/* Subtle glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col items-start space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-6 text-xs md:text-sm tracking-[0.2em] text-text-secondary uppercase font-mono"
          >
            <span className="text-accent-teal">Full-Stack Developer</span>
            <span className="hidden md:inline-block w-12 h-[1px] bg-border-teal"></span>
            <span className="hidden md:inline-block">Web</span>
            <span className="hidden md:inline-block border-l border-border-teal h-3"></span>
            <span className="hidden md:inline-block">Mobile</span>
            <span className="hidden md:inline-block border-l border-border-teal h-3"></span>
            <span className="hidden md:inline-block">Desktop</span>
            <span className="hidden md:inline-block border-l border-border-teal h-3"></span>
            <span className="hidden md:inline-block">AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-text-primary tracking-tight"
          >
            BUILDING SOFTWARE<br />
            THAT TURNS COMPLEX<br />
            PROBLEMS INTO SIMPLE<br />
            <span className="text-accent-cyan text-glow-teal">EXPERIENCES.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Full-Stack Developer focused on building practical web, mobile, desktop, AI, and machine-learning applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-accent-teal text-primary font-medium tracking-wider hover:bg-highlight transition-all hover:box-glow-teal flex items-center"
            >
              VIEW MY WORK 
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            
            <Link 
              href="#contact" 
              className="group relative px-8 py-4 border border-border-teal text-text-primary font-medium tracking-wider hover:bg-surface-muted transition-all flex items-center"
            >
              GET IN TOUCH
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <div className="flex items-center space-x-4 ml-2">
              <a href="https://github.com/Abashansari" target="_blank" rel="noopener noreferrer" className="p-3 border border-border-teal text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors group">
                <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/abash-ansari-0bb191326" target="_blank" rel="noopener noreferrer" className="p-3 border border-border-teal text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors group">
                <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[40%] relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5]">
            {/* Technical grid behind image */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-border-teal/50 bg-grid-pattern opacity-50 z-0"></div>
            
            {/* Cyan accent lines */}
            <div className="absolute top-10 -left-6 w-12 h-[1px] bg-accent-cyan z-20"></div>
            <div className="absolute -bottom-6 right-10 w-[1px] h-12 bg-accent-cyan z-20"></div>

            {/* Image Container */}
            <div className="relative w-full h-full border border-border-teal bg-surface-muted z-10 overflow-hidden group">
              {/* Fallback layout in case image is missing */}
              <div className="absolute inset-0 flex items-center justify-center text-border-teal font-mono text-sm uppercase tracking-widest z-0">
                [PORTRAIT.JPG]
              </div>
              
              <Image 
                src="/images/portrait.jpg" 
                alt="Abash Ansari - Full-Stack Developer" 
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 z-10"
                sizes="(max-w-768px) 100vw, 400px"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Engineering Metadata */}
            <div className="absolute bottom-6 -left-8 z-30 flex flex-col space-y-2 bg-primary/90 backdrop-blur-sm border border-border-teal p-4 shadow-xl">
              <span className="text-[10px] text-accent-cyan font-mono tracking-widest uppercase">ID: 001-AA</span>
              <span className="text-[10px] text-text-secondary font-mono tracking-widest uppercase">LOC: INDIA</span>
              <span className="text-[10px] text-text-secondary font-mono tracking-widest uppercase">SYS: ONLINE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

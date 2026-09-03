"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="py-24 relative bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Left / Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-accent-teal font-mono text-sm tracking-widest">02</span>
              <div className="h-[1px] w-12 bg-accent-teal"></div>
              <span className="text-text-secondary font-mono text-sm tracking-widest uppercase">Experience</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
              EXPERIENCE &<br />
              TRAINING
            </h2>
          </motion.div>

          {/* Right / Timeline Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="border border-border-teal bg-surface-muted p-8 md:p-12 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent-teal/10 transition-colors duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">ON-JOB TRAINING</h3>
                  <h4 className="text-accent-cyan font-mono tracking-widest text-sm uppercase">Rapid Skills Acquisition</h4>
                </div>
                <div className="flex flex-col md:items-end font-mono text-sm text-text-secondary">
                  <span className="text-accent-teal font-bold mb-1">26 DAYS</span>
                  <span>02 Nov 2023 — 28 Nov 2023</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-text-secondary text-lg leading-relaxed font-light">
                  Completed a 26-day On-Job Training program focused on Rapid Skills Acquisition, gaining practical exposure through hands-on learning, skill development, and professional training.
                </p>
                <div className="text-sm text-text-secondary flex items-center space-x-2">
                  <span className="uppercase tracking-widest">Institution:</span> 
                  <span className="text-text-primary">Medhavi Skills University, Bermiok Campus</span>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="group/btn inline-flex items-center space-x-2 text-accent-teal hover:text-highlight transition-colors font-medium tracking-widest text-sm"
              >
                <span>VIEW CERTIFICATE</span>
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md p-4 md:p-12"
          >
            <div className="relative w-full max-w-5xl bg-secondary border border-border-teal p-2 shadow-2xl flex flex-col">
              <div className="flex justify-between items-center p-4 border-b border-border-teal/50">
                <span className="font-mono text-xs text-text-secondary uppercase tracking-widest">Certificate of Completion</span>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-surface-muted overflow-hidden flex items-center justify-center">
                {/* Fallback layout in case image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-border-teal font-mono text-sm uppercase tracking-widest z-0">
                  [CERTIFICATE.JPG]
                </div>
                <Image 
                  src="/certificate/certificate.jpg" 
                  alt="On-Job Training Certificate" 
                  fill
                  className="object-contain z-10"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

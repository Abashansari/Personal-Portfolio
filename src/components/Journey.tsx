"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-secondary">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Title side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-accent-teal font-mono text-sm tracking-widest uppercase">05</span>
            <div className="h-[1px] w-12 bg-accent-teal"></div>
            <span className="text-text-secondary font-mono text-sm tracking-widest uppercase">Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-text-primary sticky top-32">
            MY JOURNEY
          </h2>
        </motion.div>

        {/* Timeline side */}
        <div className="w-full md:w-2/3 relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-border-teal"></div>

          <div className="flex flex-col space-y-16">
            {journey.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-accent-teal group-hover:bg-accent-cyan group-hover:box-glow-teal transition-all"></div>
                
                <div className="flex flex-col space-y-2">
                  <span className="text-accent-teal font-mono text-sm tracking-widest">
                    {item.year}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="text-text-secondary font-light text-lg">
                    {item.institution}
                  </p>
                  
                  {item.score && (
                    <div className="pt-2">
                      <span className="inline-block bg-surface-muted border border-border-teal px-3 py-1 text-sm font-mono text-accent-cyan whitespace-pre-line">
                        {item.score}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

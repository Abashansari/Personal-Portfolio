"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative bg-primary overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-accent-teal font-mono text-sm tracking-widest uppercase">04</span>
            <div className="h-[1px] w-12 bg-accent-teal"></div>
            <span className="text-text-secondary font-mono text-sm tracking-widest uppercase">Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary tracking-tight">
            THE STACK IS A TOOL.<br />
            THE PROBLEM IS THE FOCUS.
          </h2>
        </div>

        {/* Tech Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-border-teal bg-surface-muted p-8 hover:bg-surface-muted/80 transition-colors relative"
              >
                {/* Subtle highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-primary border border-border-teal text-accent-teal">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-mono tracking-widest uppercase text-text-primary">
                    {tech.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {tech.skills.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2 text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-border-teal group-hover:bg-accent-cyan transition-colors"></div>
                      <span className="font-light tracking-wide">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

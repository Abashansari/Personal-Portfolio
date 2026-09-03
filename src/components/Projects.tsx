"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        
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
            <span className="text-accent-teal font-mono text-sm tracking-widest uppercase">03 // Work</span>
            <div className="h-[1px] w-12 bg-accent-teal"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-6 tracking-tight"
          >
            SELECTED WORK
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl font-light tracking-wide max-w-2xl uppercase"
          >
            REAL APPLICATIONS BUILT AROUND REAL PROBLEMS.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

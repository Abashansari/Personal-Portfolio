"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  project: {
    id: string;
    name: string;
    category: string;
    description: string;
    techStack: string[];
    features: string[];
    imageType: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative p-8 md:p-12 lg:p-16 bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
      <div className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
        
        {/* Project Info */}
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-transparent opacity-60 select-none">
              {project.id}
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-cyan-600 font-mono text-sm font-semibold tracking-widest uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {project.name}
              </h3>
            </div>

            <p className="text-gray-600 text-lg font-light leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="text-gray-900 font-mono text-xs font-semibold tracking-widest uppercase border-b border-gray-200 pb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium tracking-wider rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-gray-900 font-mono text-xs font-semibold tracking-widest uppercase border-b border-gray-200 pb-2">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link 
                href="#"
                className="group inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 transition-colors font-semibold tracking-widest text-sm"
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Project Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="relative w-full aspect-video bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex justify-center items-center shadow-md group-hover:shadow-xl transition-all duration-700">
            {/* Fallback layout in case image is missing */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-sm font-semibold uppercase tracking-widest z-0">
              [{project.imageType}.JPG]
            </div>
            
            {/* Overlay pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay z-10 pointer-events-none"></div>
            
            {/* The actual image would go here using next/image, assuming path exists */}
            {/* <Image src={`/projects/${project.id}.jpg`} alt={project.name} fill className="object-cover z-20 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" /> */}
            
            <div className="absolute inset-0 z-30 pointer-events-none border border-transparent group-hover:border-cyan-500/20 rounded-2xl transition-colors duration-700"></div>
          </div>
          
          {/* Metadata label */}
          <div className={`absolute -bottom-5 ${isEven ? '-right-5' : '-left-5'} bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-lg z-40`}>
            <span className="text-xs font-mono font-semibold text-cyan-600 tracking-widest uppercase flex items-center gap-2">
              SYS.{project.id} 
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
              ACTIVE
            </span>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

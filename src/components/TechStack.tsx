"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaPython, 
  FaRobot, FaBrain, FaGitAlt, FaGithub, FaLinux, FaAws, FaDocker, FaJava 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiExpress, SiFastapi, SiExpo, SiMongodb, SiMysql, 
  SiPostgresql, SiSqlite, SiSqlalchemy, SiScikitlearn, 
  SiVercel, SiCplusplus 
} from "react-icons/si";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": FaBootstrap,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "Python": FaPython,
  "FastAPI": SiFastapi,
  "React Native": FaReact,
  "Expo": SiExpo,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "SQLite": SiSqlite,
  "SQLAlchemy": SiSqlalchemy,
  "Scikit-Learn": SiScikitlearn,
  "Machine Learning": FaRobot,
  "AI Applications": FaBrain,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Linux": FaLinux,
  "AWS": FaAws,
  "Docker": FaDocker,
  "Vercel": SiVercel,
  "C++": SiCplusplus,
  "Java": FaJava,
};

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
            const CategoryIcon = tech.icon;
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
                    <CategoryIcon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-mono tracking-widest uppercase text-text-primary">
                    {tech.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {tech.skills.map((skill) => {
                    const SkillIcon = iconMap[skill];
                    return (
                      <li key={skill} className="flex items-center space-x-3 text-text-secondary">
                        {SkillIcon ? (
                          <SkillIcon className="text-accent-teal w-4 h-4 group-hover:text-accent-cyan transition-colors" />
                        ) : (
                          <div className="w-1.5 h-1.5 bg-border-teal group-hover:bg-accent-cyan transition-colors"></div>
                        )}
                        <span className="font-light tracking-wide">{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

type Project = typeof projects[0];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const nextProject = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused || isPreviewOpen) return;

    const timer = setInterval(nextProject, 3000);
    return () => clearInterval(timer);
  }, [isPaused, isPreviewOpen, nextProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPreviewOpen) {
        if (e.key === "Escape") setIsPreviewOpen(false);
      } else {
        if (e.key === "ArrowRight") nextProject();
        if (e.key === "ArrowLeft") prevProject();
      }
    };

    if (isPreviewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, nextProject, prevProject]);

  const currentProject = projects[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      z: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      z: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-xl flex items-center h-auto min-h-0">
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="w-full relative flex items-center"
          >
            <div className="p-6 sm:p-8 md:p-12 w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center h-auto">
              
              {/* Left / Main Area - Visual */}
              <div className="w-full lg:w-1/2 relative group shrink-0">
                <div
                  className="relative w-full aspect-video bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex justify-center items-center shadow-md group-hover:shadow-xl transition-all duration-700 cursor-pointer"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay z-10 pointer-events-none"></div>
                  <Image
                    src={`/${currentProject.imageType}.png`}
                    alt={currentProject.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover z-20 opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 z-30 pointer-events-none border border-transparent group-hover:border-cyan-500/20 rounded-2xl transition-colors duration-700"></div>
                </div>
              </div>

              {/* Right / Secondary Area - Info */}
              <div className="w-full lg:w-1/2 flex flex-col h-auto justify-center">
                <div className="flex items-center space-x-4 mb-3 lg:mb-6">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-transparent opacity-60 select-none">
                    {currentProject.id}
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-cyan-600 font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1 block">
                      {currentProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {currentProject.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light leading-relaxed break-words whitespace-normal">
                    {currentProject.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-gray-900 font-mono text-xs font-semibold tracking-widest uppercase border-b border-gray-200 pb-1 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-[10px] sm:text-xs font-medium tracking-wider rounded-md whitespace-normal text-center"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-gray-900 font-mono text-xs font-semibold tracking-widest uppercase border-b border-gray-200 pb-1 mb-2">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentProject.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2 text-gray-600 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 mt-1 sm:mt-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                          <span className="break-words whitespace-normal leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 lg:pt-6 flex flex-wrap w-full">
                    <Link
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 text-cyan-600 hover:text-cyan-700 transition-colors font-semibold tracking-widest text-sm py-2"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-cyan-600 hover:border-cyan-200 hover:bg-cyan-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-cyan-600 hover:border-cyan-200 hover:bg-cyan-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                index === currentIndex 
                  ? "bg-cyan-500 w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
              onClick={() => setIsPreviewOpen(false)}
            />
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-[110] p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-md"
              aria-label="Close preview"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full h-full flex items-center justify-center z-[105] pointer-events-none"
            >
              <Image
                src={`/${currentProject.imageType}.png`}
                alt={`${currentProject.name} preview`}
                fill
                className="object-contain pointer-events-auto"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

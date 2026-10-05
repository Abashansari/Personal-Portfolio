"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-primary border-t border-border-teal py-16 md:py-20">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none bg-grid-pattern" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Top line */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-accent-teal to-accent-teal" />
          </div>

          {/* Main statement */}
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-text-primary mb-9">
            I DON'T JUST WRITE CODE.
            <br />
            <span className="text-accent-teal">
              I BUILD THINGS THAT MATTER.
            </span>
          </h2>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto">
            {/* Opening quote */}
            <span
              aria-hidden="true"
              className="absolute -top-8 -left-5 md:-left-12 text-6xl md:text-8xl font-serif text-accent-teal/20 select-none"
            >
              “
            </span>

            <blockquote className="relative text-center">
              <p className="text-text-secondary text-lg md:text-xl lg:text-2xl font-light leading-[1.7] tracking-wide">
                Everyone in this world carries their own burdens, but I believe
                in one inevitable truth:
                <span className="text-text-primary font-normal">
                  {" "}
                  with difficulty comes ease.
                </span>
              </p>

              <p className="mt-5 text-text-secondary text-lg md:text-xl lg:text-2xl font-light leading-[1.7] tracking-wide">
                I believe art is more than expression;
                <span className="text-text-primary font-normal">
                  {" "}
                  it is a form of revolution.
                </span>
              </p>

              <p className="mt-5 text-text-secondary text-lg md:text-xl lg:text-2xl font-light leading-[1.7] tracking-wide">
                Remember: the insecure and the defeated need unity, not the powerful.
              </p>

              {/* Final statement */}
              <div className="mt-8">
                <p className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-accent-teal uppercase">
                  So Let it happen.
                </p>

                <p className="mt-3 text-lg md:text-xl italic text-text-secondary">
                  It is your time, Oh Artist.
                </p>
              </div>
            </blockquote>

            {/* Closing quote */}
            <span
              aria-hidden="true"
              className="absolute -bottom-12 -right-3 md:-right-10 text-6xl md:text-8xl font-serif text-accent-teal/20 select-none"
            >
              ”
            </span>
          </div>

          {/* Signature */}
          <div className="mt-10 flex flex-col items-center">
            <div className="w-12 h-px bg-accent-teal/50 mb-4" />

            <span className="text-sm md:text-base tracking-[0.25em] uppercase text-text-primary">
              Abash Ansari
            </span>

            <span className="mt-1 text-xs tracking-[0.2em] uppercase text-text-secondary/60">
              Personal Philosophy
            </span>
          </div>

          {/* Bottom line */}
          <div className="flex justify-center mt-9">
            <div className="w-px h-10 bg-gradient-to-t from-transparent via-accent-teal to-accent-teal" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-accent-primary uppercase tracking-[0.2em] mb-3">
            What I&apos;ve Built
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-text-primary">
            My Works
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Gradient border glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-primary/0 via-accent-secondary/0 to-accent-cyan/0
                              group-hover:from-accent-primary/40 group-hover:via-accent-secondary/20 group-hover:to-accent-cyan/40
                              transition-all duration-500" />

              <div className="relative h-full p-6 rounded-2xl bg-bg-tertiary/30 border border-border-subtle
                              group-hover:bg-bg-tertiary/60 transition-all duration-500 flex flex-col">
                {/* Project number */}
                <span className="text-5xl font-black text-bg-tertiary/50 group-hover:text-accent-primary/10 transition-colors duration-500 mb-4 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium
                                 bg-bg-tertiary/50 text-text-muted
                                 group-hover:bg-accent-primary/8 group-hover:text-accent-primary/80
                                 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-text-muted
                               group-hover:text-accent-cyan transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

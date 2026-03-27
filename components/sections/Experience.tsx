"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-secondary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-accent-primary uppercase tracking-[0.2em] mb-3">
            My Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-text-primary">
            Experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/50 via-accent-secondary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-primary shadow-lg shadow-accent-primary/20" />
                    {i === 0 && (
                      <div className="absolute -inset-1 rounded-full bg-accent-primary/20 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="group p-6 rounded-2xl bg-bg-tertiary/20 border border-border-subtle
                             hover:border-accent-primary/20 hover:bg-bg-tertiary/40
                             transition-all duration-500"
                >
                  {/* Period */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                      {exp.period}
                    </span>
                    {i === 0 && (
                      <span className="flex items-center gap-1.5 text-xs text-accent-emerald font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-accent-secondary font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

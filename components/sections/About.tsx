"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
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
            Get to Know Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-text-primary">
            About Me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
              {personalInfo.bio}
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {personalInfo.skillTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium
                             bg-accent-primary/8 text-accent-primary border border-accent-primary/15
                             hover:bg-accent-primary/15 transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-5">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="group flex items-center gap-3 p-3 rounded-xl
                             bg-bg-tertiary/30 border border-border-subtle
                             hover:border-accent-primary/30 hover:bg-bg-tertiary/60
                             transition-all duration-300"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

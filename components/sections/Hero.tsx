"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

function Typewriter({ words, speed = 100, pause = 2000 }: { words: string[]; speed?: number; pause?: number }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return (
    <span className="text-accent-cyan">
      {text}
      <span className="animate-pulse text-accent-primary">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/3 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-accent-primary/10 border border-accent-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="text-xs font-medium text-accent-primary">
                {personalInfo.experienceBadge}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-text-primary">{personalInfo.greeting.split(",")[0]},</span>
              <br />
              <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-cyan bg-clip-text text-transparent">
                I&apos;m Ganesh.
              </span>
            </h1>

            <div className="mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-text-secondary">
              <span className="text-text-muted">I&apos;m into </span>
              <Typewriter words={personalInfo.roles} speed={80} pause={1800} />
            </div>

            <p className="mt-4 text-base text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group relative px-7 py-3 rounded-xl font-semibold text-sm overflow-hidden
                           bg-accent-primary text-white shadow-lg shadow-accent-primary/25
                           hover:shadow-xl hover:shadow-accent-primary/30 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl font-semibold text-sm
                           bg-transparent text-text-primary border border-border-subtle
                           hover:border-accent-primary/40 hover:bg-bg-tertiary/50
                           transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
              {/* Glow rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-cyan/20 blur-xl animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-cyan p-[2px]">
                <div className="w-full h-full rounded-full bg-bg-primary" />
              </div>
              {/* Avatar Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-bg-tertiary">
                <Image
                  src="/mbganesh.png"
                  alt="Ganesh MB"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>

            {/* Floating tags */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-bg-tertiary/80 backdrop-blur-sm
                         border border-glass-border text-xs font-medium text-accent-cyan shadow-lg"
            >
              React.js
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-bg-tertiary/80 backdrop-blur-sm
                         border border-glass-border text-xs font-medium text-accent-emerald shadow-lg"
            >
              Next.js
            </motion.div>
            <motion.div
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg bg-bg-tertiary/80 backdrop-blur-sm
                         border border-glass-border text-xs font-medium text-accent-pink shadow-lg"
            >
              TypeScript
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-text-muted/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

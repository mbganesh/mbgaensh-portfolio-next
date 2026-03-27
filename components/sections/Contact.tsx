"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Uses environment variables defined in .env.local
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus("success");
      formRef.current.reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-accent-primary/10 rounded-[100%] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          {/* Left Column: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-sm font-semibold text-accent-primary uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </h2>
            <p className="text-4xl sm:text-5xl lg:text-5xl font-black text-text-primary leading-tight mb-6">
              Let&apos;s build something <br />
              <span className="bg-gradient-to-r from-accent-primary to-accent-cyan bg-clip-text text-transparent">
                extraordinary.
              </span>
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-md">
              I&apos;m currently looking for new opportunities and my inbox is always open.
              Whether you have a question or just want to say hi, I&apos;ll try my best
              to get back to you!
            </p>

            {/* Direct Contact */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-bg-tertiary/30 border border-border-subtle
                           hover:border-accent-primary/50 hover:bg-bg-tertiary/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary
                                group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-sm font-medium text-text-primary">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\\s/g, '')}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-bg-tertiary/30 border border-border-subtle
                           hover:border-accent-cyan/50 hover:bg-bg-tertiary/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan
                                group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-sm font-medium text-text-primary">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            {/* Social Profiles Grid */}
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Find me online</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-2xl
                             bg-bg-tertiary/40 border border-border-subtle
                             hover:bg-bg-tertiary/80 transition-all duration-300 overflow-hidden"
                  aria-label={link.name}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: link.color }}
                  />
                  <div
                    className="text-xl text-text-secondary group-hover:-translate-y-1 transition-transform duration-300"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-bg-secondary/50 backdrop-blur-xl border border-glass-border p-8 sm:p-10 rounded-[2rem] shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send me a message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-sm font-medium text-text-secondary">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-bg-primary border border-border-subtle rounded-xl px-4 py-3 text-text-primary
                           focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary
                           transition-all duration-300 placeholder:text-text-muted/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-sm font-medium text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-bg-primary border border-border-subtle rounded-xl px-4 py-3 text-text-primary
                           focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary
                           transition-all duration-300 placeholder:text-text-muted/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg-primary border border-border-subtle rounded-xl px-4 py-3 text-text-primary
                           focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary
                           transition-all duration-300 placeholder:text-text-muted/50 resize-y min-h-[120px]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white
                         overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2
                         bg-accent-primary shadow-lg shadow-accent-primary/25 hover:shadow-xl hover:shadow-accent-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && (
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-sm text-accent-emerald text-center mt-2 font-medium animate-pulse">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-500 text-center mt-2 font-medium">
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

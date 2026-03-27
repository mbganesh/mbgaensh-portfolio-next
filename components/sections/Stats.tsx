"use client";

import { motion } from "framer-motion";
import { stackOverflow, codingProfiles } from "@/data/portfolio";

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 lg:py-32 bg-bg-secondary/30">
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
            Developer Metrics
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-text-primary">
            Social Stats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* StackOverflow Card */}
          <motion.a
            href={stackOverflow.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group block p-8 rounded-3xl bg-bg-tertiary/40 border border-border-subtle
                       hover:border-[#f48024]/50 hover:bg-[#f48024]/5
                       hover:shadow-[0_0_40px_-10px_rgba(244,128,36,0.15)]
                       transition-all duration-500 overflow-hidden relative"
          >
            {/* Background pattern */}
            <div className="absolute -right-16 -top-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="#f48024">
                <path d="M15.825 8.163l-8.995 2.502.597 2.144 8.995-2.503-.597-2.143zM14.516 4.605l-8.412 4.144 1.05 2.13 8.411-4.143-1.049-2.131zM11.696.539L2.34 6.643l1.326 1.956 9.355-6.104L11.696.54zm5.845 11.233l-9.33-.004v2.226h9.33v-2.222zM2.81 12.89v8.887h15.25v-8.886h-2.223v6.66H5.035v-6.66H2.81z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#f48024]/20 flex items-center justify-center text-[#f48024]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.825 8.163l-8.995 2.502.597 2.144 8.995-2.503-.597-2.143zM14.516 4.605l-8.412 4.144 1.05 2.13 8.411-4.143-1.049-2.131zM11.696.539L2.34 6.643l1.326 1.956 9.355-6.104L11.696.54zm5.845 11.233l-9.33-.004v2.226h9.33v-2.222zM2.81 12.89v8.887h15.25v-8.886h-2.223v6.66H5.035v-6.66H2.81z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Ganesh MB</h3>
                  <p className="text-sm font-medium text-text-secondary">StackOverflow Profile</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-text-primary">{stackOverflow.reputation.toLocaleString()}</p>
                  <p className="text-xs font-medium text-text-muted mt-1 uppercase tracking-wider">Reputation</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-text-primary">{stackOverflow.reach}</p>
                  <p className="text-xs font-medium text-text-muted mt-1 uppercase tracking-wider">Reach</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-text-primary">{stackOverflow.answers}</p>
                  <p className="text-xs font-medium text-text-muted mt-1 uppercase tracking-wider">Answers</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-bg-primary/50 border border-bg-tertiary">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffcc01]"></span>
                  <span className="text-sm font-bold text-text-primary">{stackOverflow.goldBadges} <span className="text-text-muted font-medium">Gold</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b4b8bc]"></span>
                  <span className="text-sm font-bold text-text-primary">{stackOverflow.silverBadges} <span className="text-text-muted font-medium">Silver</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d1a684]"></span>
                  <span className="text-sm font-bold text-text-primary">{stackOverflow.bronzeBadges} <span className="text-text-muted font-medium">Bronze</span></span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Other Coding Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {codingProfiles.map((profile, i) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex flex-col items-center justify-center p-8 rounded-3xl
                           bg-bg-tertiary/20 border border-border-subtle
                           hover:bg-bg-tertiary/60 hover:border-accent-cyan/40
                           hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)]
                           transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-bg-tertiary flex items-center justify-center text-4xl mb-6
                                group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shell-glow">
                  {profile.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                  {profile.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted group-hover:text-text-secondary transition-colors">
                  View Profile
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary/50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-cyan bg-clip-text text-transparent"
            >
              {"<BG />"}
            </a>
            <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting modern web experiences with
              React, Next.js, and cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Stats", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-accent-primary transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-accent-primary transition-colors duration-200"
                >
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.slice(0, 5).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center text-lg
                             hover:bg-accent-primary hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {personalInfo.fullName}. All
            rights reserved.
          </p>

          {/* NOTE: no need this tech stack to build */}
          <p className="text-xs text-text-muted">
            Design and build by{" "}
            <span className="text-accent-primary">MB</span>
            <span className="text-accent-cyan">Ganesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

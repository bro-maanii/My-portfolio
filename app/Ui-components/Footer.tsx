import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FloatingDockDemo } from "@/components/IconContact";

const navLinks = [
  { label: "Home",    href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Work",    href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/bro-maanii",                                    icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emanaliabbasi-softwareengineer/",       icon: Linkedin },
  { label: "Email",    href: "mailto:emanaliabbasi31@gmail.com",                                  icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Social dock — centered */}
        <div className="flex justify-center mb-8">
          <FloatingDockDemo />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <p className="font-heading font-bold text-lg text-foreground">Eman.</p>

          {/* Nav */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[11px] font-medium uppercase tracking-widest text-[#525252] hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons — minimal inline */}
          <div className="flex gap-4">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-[#525252] hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#1f1f1f] text-center">
          <p className="font-body text-xs text-[#525252]">
            &copy; 2026 Eman Ali Abbasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

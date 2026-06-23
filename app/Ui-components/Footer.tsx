import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/bro-maanii",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emanaliabbasi-softwareengineer/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:emanaliabbasi31@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Eman Ali Abbasi</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Software Engineer &amp; Full-Stack Developer
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-5 text-sm text-gray-600 dark:text-gray-400">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-purple-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
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
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/60 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
            Sculpted with code, polished with passion
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
            &copy; 2026 Eman Ali Abbasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

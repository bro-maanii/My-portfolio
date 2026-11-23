import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FloatingDockDemo } from "@/components/IconContact";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "Contact",  href: "#contact" },
];

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/bro-maanii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emanaliabbasi-softwareengineer/" },
  { label: "Email",    href: "mailto:emanaliabbasi31@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-border overflow-hidden">
      {/* Warm glow rising from the bottom */}
      <div className="pointer-events-none absolute -bottom-48 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-primary/[0.12] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Pitch */}
          <div className="md:col-span-6">
            <p className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-tight max-w-[22ch]">
              Have a project in mind?{" "}
              <span className="font-serif italic font-normal text-muted-foreground">Let&apos;s talk.</span>
            </p>
            <a
              href="mailto:emanaliabbasi31@gmail.com"
              className="group mt-5 inline-flex items-center gap-1.5 font-body text-base font-medium text-foreground underline decoration-border decoration-2 underline-offset-[6px] hover:decoration-primary transition-colors break-all"
            >
              emanaliabbasi31@gmail.com
              <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-[11px] text-muted-foreground mb-4">Sitemap</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] text-muted-foreground mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-body text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {s.label}
                    <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social dock */}
        <div className="flex justify-center mt-12">
          <FloatingDockDemo />
        </div>

        {/* Oversized wordmark */}
        <p
          aria-hidden="true"
          className="select-none mt-4 font-heading font-semibold tracking-[-0.06em] leading-[0.85] whitespace-nowrap text-[clamp(2.4rem,10.5vw,10rem)] text-center bg-gradient-to-b from-foreground/[0.14] to-transparent bg-clip-text text-transparent"
        >
          Eman Ali Abbasi
        </p>

        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Eman Ali Abbasi · Built with Next.js &amp; Tailwind
          </p>
          <Link
            href="#home"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

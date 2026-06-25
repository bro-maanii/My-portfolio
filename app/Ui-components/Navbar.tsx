"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
  { label: "Contact",  href: "#contact" },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="#home"
            className="font-heading text-xl font-bold text-foreground hover:text-primary transition-colors tracking-tight"
          >
            Eman.
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-[11px] font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — theme toggle + Hire Me CTA + mobile btn */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            <Link
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest rounded-sm bg-primary text-white hover:bg-primary/90 transition-colors font-body"
            >
              Hire Me
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 font-body text-[11px] font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-3">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center px-4 py-2 text-[11px] font-semibold uppercase tracking-widest rounded-sm bg-primary text-white font-body"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

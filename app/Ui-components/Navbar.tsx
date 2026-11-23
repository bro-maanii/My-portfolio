"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import { cn } from "@/lib/utils"

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
  const [active,   setActive]   = useState("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4 pt-3">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto max-w-5xl rounded-2xl border transition-all duration-500",
          scrolled || isOpen
            ? "bg-background/75 backdrop-blur-xl border-border shadow-soft"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex justify-between items-center h-14 pl-4 pr-2">

          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Eman Ali Abbasi, home"
          >
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-foreground text-background font-heading text-[13px] font-semibold tracking-tight transition-transform duration-300 group-hover:-rotate-6">
              EA
            </span>
            <span className="hidden sm:block font-heading text-[15px] font-semibold tracking-tight text-foreground">
              Eman Ali<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 rounded-full p-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-full font-body text-[13px] font-medium transition-colors",
                  active === link.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            <ModeToggle />

            <Link
              href="#contact"
              className="pressable hidden md:inline-flex items-center gap-1.5 h-9 px-4 text-[13px] font-medium rounded-xl bg-foreground text-background hover:bg-foreground/85"
            >
              Let&apos;s talk
              <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-border px-2 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2.5 rounded-lg font-body text-sm font-medium transition-colors",
                  active === link.href ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 h-10 rounded-xl bg-foreground text-background text-sm font-medium"
            >
              Let&apos;s talk <ArrowUpRight size={14} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Menu, X } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"

const navLinks = [
  { label: "Home",    href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Work",    href: "#work" },
  { label: "Contact", href: "#contact" },
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
          ? "bg-white/95 dark:bg-[hsl(240,10%,4%)]/95 backdrop-blur-md border-b border-gray-200/60 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-black italic font-mono text-purple-500 hover:text-purple-400 transition-colors"
          >
            Maani.
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — social + toggle + mobile btn */}
          <div className="flex items-center gap-1">
            <div className="hidden md:flex items-center gap-1 mr-2">
              <Link
                href="https://github.com/bro-maanii"
                target="_blank"
                aria-label="GitHub"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <Github size={17} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/emanaliabbasi-softwareengineer/"
                target="_blank"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <Linkedin size={17} />
              </Link>
            </div>

            <ModeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden ml-1 p-2 rounded-lg text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200/60 dark:border-white/5 bg-white dark:bg-[hsl(240,8%,7%)]">
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-3 pt-3 pb-1">
              <Link href="https://github.com/bro-maanii" target="_blank" className="text-gray-500 hover:text-purple-500 transition-colors"><Github size={17} /></Link>
              <Link href="https://www.linkedin.com/in/emanaliabbasi-softwareengineer/" target="_blank" className="text-gray-500 hover:text-purple-500 transition-colors"><Linkedin size={17} /></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

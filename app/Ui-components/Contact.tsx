"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/ContactMe"
import { FloatingDockDemo } from "@/components/IconContact"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "emanaliabbasi31@gmail.com",
    href: "mailto:emanaliabbasi31@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          Let&apos;s Work Together
        </h2>
        <div className="w-14 h-1 bg-purple-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Looking for a software engineer who ships production-ready work? I&apos;m
          available for full-time roles, contracts, and freelance projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* ── Left: contact info ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <h3 className="text-lg font-bold mb-5">Get in touch</h3>

          <div className="space-y-3 mb-8">
            {contactItems.map((c) => {
              const Icon = c.icon
              const inner = (
                <div className="flex items-center gap-3.5 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-colors group">
                  <div className="p-2.5 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 shrink-0">
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">{c.label}</p>
                    <p className="text-sm font-semibold truncate">{c.value}</p>
                  </div>
                  {c.href && (
                    <ArrowUpRight size={14} className="ml-auto text-gray-400 group-hover:text-purple-500 transition-colors shrink-0" />
                  )}
                </div>
              )
              return c.href ? (
                <Link key={c.label} href={c.href}>{inner}</Link>
              ) : (
                <div key={c.label}>{inner}</div>
              )
            })}
          </div>

          <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
            Find me online
          </p>
          <FloatingDockDemo />
        </motion.div>

        {/* ── Right: form ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-bold mb-5">Send a message</h3>
          <ContactForm />
        </motion.div>

      </div>
    </section>
  )
}

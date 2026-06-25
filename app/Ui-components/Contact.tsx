"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/ContactMe"
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

      <div className="grid md:grid-cols-2 gap-14">

        {/* Left: editorial heading + contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8">
            <span className="section-label">Contact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Let&apos;s Build<br />Something Together.
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
              Available for full-time roles, contracts, and freelance projects.
            </p>
          </div>

          <div className="space-y-3">
            {contactItems.map((c) => {
              const Icon = c.icon
              const inner = (
                <div className="flex items-center gap-3.5 p-4 bg-card border border-border hover:border-border rounded-sm transition-colors group">
                  <div className="p-2.5 rounded-sm bg-secondary border border-border text-primary shrink-0 group-hover:border-primary/30 transition-colors">
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{c.label}</p>
                    <p className="font-body text-sm font-medium text-foreground truncate">{c.value}</p>
                  </div>
                  {c.href && (
                    <ArrowUpRight size={13} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
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
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary mb-5">Send a message</p>
          <ContactForm />
        </motion.div>

      </div>
    </section>
  )
}

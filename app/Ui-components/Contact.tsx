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
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 overflow-x-hidden">

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left: editorial heading + contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="mb-10">
            <span className="section-label">Contact</span>
            <h2 className="font-heading text-[clamp(2.5rem,5.5vw,4rem)] font-semibold tracking-[-0.045em] text-foreground leading-[1]">
              Let&apos;s build something{" "}
              <span className="font-serif italic font-normal tracking-[-0.01em] text-primary">together.</span>
            </h2>
            <p className="font-body text-base text-muted-foreground mt-5 leading-relaxed max-w-[42ch]">
              Open to full-time roles, contracts and freelance projects. Tell me what
              you&apos;re working on and I&apos;ll get back to you within a day or two.
            </p>
          </div>

          <div className="space-y-3">
            {contactItems.map((c) => {
              const Icon = c.icon
              const inner = (
                <div className="spotlight group flex items-center gap-3.5 p-4 bg-card border border-border rounded-2xl shadow-soft">
                  <div className="p-2.5 rounded-lg bg-secondary border border-border text-primary shrink-0 group-hover:border-primary/30 transition-colors">
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-muted-foreground mb-0.5">{c.label}</p>
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
          className="lg:col-span-7 bg-card border border-border rounded-3xl shadow-lifted p-6 sm:p-10"
        >
          <p className="font-heading text-xl font-semibold tracking-tight text-foreground mb-1">Send a message</p>
          <p className="font-body text-sm text-muted-foreground mb-7">Prefer email? Use the address on the left.</p>
          <ContactForm />
        </motion.div>

      </div>
    </section>
  )
}

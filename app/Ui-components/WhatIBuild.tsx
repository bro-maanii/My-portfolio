"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Brain, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, high-performance UIs built with React.js, Next.js, and TypeScript. I own the full frontend — from architecture to deployment, design system to Lighthouse scores — no handholding needed.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Full-Stack APIs",
    description:
      "End-to-end backend — REST API design, database modelling, authentication, and production deployments. Node.js, FastAPI, MongoDB/PostgreSQL, containerised with Docker, hosted on AWS.",
    tech: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "AI-powered features using OpenAI, DeepSeek, and Python — intelligent chatbots, automated report generators, and personalised recommendation engines that ship as real product features.",
    tech: ["Python", "OpenAI", "DeepSeek", "FastAPI", "Streamlit"],
  },
]

export default function WhatIBuild() {
  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="section-label">Services</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">What I Build</h2>
        <p className="font-body text-sm text-muted-foreground mt-3 max-w-md">
          Three disciplines, one engineer. Full stack — from pixel to production.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 bg-card border border-border hover:border-primary/30 rounded-sm transition-all duration-300 flex flex-col gap-5 group overflow-visible"
            >
              {/* Corner accents on hover */}
              <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                <div className="absolute -left-[3px] -top-[3px] h-3 w-3 bg-primary/60" />
                <div className="absolute -right-[3px] -top-[3px] h-3 w-3 bg-primary/60" />
                <div className="absolute -left-[3px] -bottom-[3px] h-3 w-3 bg-primary/60" />
                <div className="absolute -right-[3px] -bottom-[3px] h-3 w-3 bg-primary/60" />
              </div>

              {/* Icon */}
              <div className="p-3 rounded-sm border border-border bg-secondary text-primary w-fit group-hover:border-primary/30 transition-colors">
                <Icon size={20} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5">
                {s.tech.map((t) => (
                  <span
                    key={t}
                    className="font-body text-[10px] font-medium px-2.5 py-1 rounded-sm border border-border bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Inquire CTA */}
              <Link
                href="#contact"
                className="mt-auto flex items-center gap-1 font-body text-[11px] font-semibold uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
              >
                Inquire <ArrowUpRight size={11} />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { SectionHeading, Accent } from "@/components/section-heading";
import { Monitor, Server, Brain, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "Frontend engineering",
    description:
      "Pixel-perfect, high-performance UIs built with React.js, Next.js, and TypeScript. I own the full frontend, from architecture and design system to deployment and Lighthouse scores.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Full-stack APIs",
    description:
      "End-to-end backend REST API design, database modelling, authentication, and production deployments. Node.js, FastAPI, MongoDB/PostgreSQL, containerised with Docker, hosted on AWS.",
    tech: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "AWS"],
  },
  {
    icon: Brain,
    title: "AI integration",
    description:
      "AI-powered features using OpenAI, DeepSeek, and Python: chatbots, automated report generators, and personalised recommendation engines that ship as real product features.",
    tech: ["Python", "OpenAI", "DeepSeek", "FastAPI", "Streamlit"],
  },
]

// Asymmetric bento: wide / narrow, then a full-width row
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-12"]

export default function WhatIBuild() {
  return (
    <section id="services" className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <SectionHeading
        label="Services"
        title={<>What I <Accent>build</Accent></>}
        description="Three disciplines, one engineer. I take products from the first pixel to a production deploy."
      />

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`spotlight group p-7 sm:p-9 bg-card border border-border rounded-2xl shadow-soft flex flex-col gap-6 ${spans[i]}`}
            >

              {/* Icon */}
              <div className="flex items-start justify-between">
                <div className="grid place-items-center w-12 h-12 rounded-xl border border-border bg-secondary text-primary group-hover:-rotate-6 group-hover:border-primary/40 transition-all duration-300">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[12px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Body — on the full-width card, text and tags sit side by side */}
              <div className={`flex-1 flex flex-col gap-6 ${i === 2 ? "lg:grid lg:grid-cols-12 lg:gap-12 lg:items-end" : ""}`}>
              <div className={i === 2 ? "lg:col-span-7" : "flex-1"}>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed max-w-[60ch]">
                  {s.description}
                </p>
              </div>

              <div className={`flex flex-col gap-6 ${i === 2 ? "lg:col-span-5 lg:items-end" : "mt-auto"}`}>
              {/* Tech pills */}
              <div className={`flex flex-wrap gap-1.5 ${i === 2 ? "lg:justify-end" : ""}`}>
                {s.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border bg-secondary/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Inquire CTA */}
              <Link
                href="#contact"
                className="inline-flex w-fit items-center gap-1 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Start a project <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

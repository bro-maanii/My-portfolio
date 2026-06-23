"use client"

import { motion } from "framer-motion"
import HoverEffect from "@/components/card-hover-effect"

const stats = [
  { value: "2",   label: "Companies" },
  { value: "11+", label: "Live Projects" },
  { value: "15+", label: "Technologies" },
  { value: "1+",  label: "Years XP" },
]

const cards = [
  {
    title: "Sole Frontend Engineer",
    description:
      "Built a full cybersecurity platform UI with no Figma, no design reference — designed, developed, and shipped to production at SOCByte.",
  },
  {
    title: "11 Live Projects",
    description:
      "Healthcare AI, pharmacy search, photo editing, e-commerce, chatbots — shipped across diverse domains on Vercel and AWS.",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "REST APIs, backend modules, and database design across Node.js, FastAPI, and MongoDB/PostgreSQL — not just frontend.",
  },
  {
    title: "MERN + Python",
    description:
      "React, Next.js, TypeScript, Node.js, FastAPI, Docker, AWS — the complete delivery stack for modern web platforms.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">About Me</h2>
        <div className="w-14 h-1 bg-purple-500 mx-auto rounded-full" />
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center py-7 px-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-purple-500/40 transition-colors"
          >
            <p className="text-4xl font-black text-purple-500 mb-1">{s.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Two-column: text + hover cards */}
      <div className="lg:grid grid-cols-2 gap-14 space-y-10 lg:space-y-0">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-base sm:text-lg leading-relaxed font-medium"
        >
          <p>
            I&apos;m{" "}
            <strong>Eman Ali Abbasi</strong> — Software Engineer and
            Full-Stack Developer. At{" "}
            <strong>SOCByte</strong>, I&apos;m the sole frontend engineer: I
            designed and built the entire cybersecurity platform UI from
            scratch — no Figma, no design reference, no hand-holding — and
            shipped it to production on schedule.
          </p>
          <p>
            My core stack is React.js, Next.js, TypeScript, and the MERN
            stack. Beyond the UI, I&apos;ve engineered REST API layers and
            backend modules for Threat Intelligence, Asset Management, and
            Reporting — and deployed applications using Docker and AWS.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            I care about clean architecture, measurable performance, and code
            the next engineer can read without a map. I build things that work
            in production — not just demos.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          <HoverEffect items={cards} />
        </motion.div>

      </div>
    </section>
  )
}

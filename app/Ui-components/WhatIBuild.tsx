"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Brain } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, high-performance UIs built with React.js, Next.js, and TypeScript. I own the full frontend — from architecture to deployment, design system to Lighthouse scores — no handholding needed.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    cardBg: "bg-blue-50/60 dark:bg-blue-900/10",
    border: "border-blue-200 dark:border-blue-800/50",
    hoverBorder: "hover:border-blue-400/60 dark:hover:border-blue-600/60",
    pillBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/40",
  },
  {
    icon: Server,
    title: "Full-Stack APIs",
    description:
      "End-to-end backend — REST API design, database modelling, authentication, and production deployments. Node.js, FastAPI, MongoDB/PostgreSQL, containerised with Docker, hosted on AWS.",
    tech: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "AWS"],
    accent: "text-purple-500 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    cardBg: "bg-purple-50/60 dark:bg-purple-900/10",
    border: "border-purple-200 dark:border-purple-800/50",
    hoverBorder: "hover:border-purple-400/60 dark:hover:border-purple-600/60",
    pillBg: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "AI-powered features using OpenAI, DeepSeek, and Python — intelligent chatbots, automated report generators, and personalised recommendation engines that ship as real product features.",
    tech: ["Python", "OpenAI", "DeepSeek", "FastAPI", "Streamlit"],
    accent: "text-emerald-500 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    cardBg: "bg-emerald-50/60 dark:bg-emerald-900/10",
    border: "border-emerald-200 dark:border-emerald-800/50",
    hoverBorder: "hover:border-emerald-400/60 dark:hover:border-emerald-600/60",
    pillBg: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40",
  },
]

export default function WhatIBuild() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">What I Build</h2>
        <div className="w-14 h-1 bg-purple-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Three disciplines, one engineer. Full stack — from pixel to production.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-2xl border ${s.border} ${s.hoverBorder} ${s.cardBg} transition-all duration-300 hover:shadow-lg flex flex-col gap-4`}
            >
              {/* Icon */}
              <div className={`p-3 rounded-xl ${s.iconBg} ${s.accent} w-fit shadow-sm`}>
                <Icon size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {s.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${s.pillBg}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

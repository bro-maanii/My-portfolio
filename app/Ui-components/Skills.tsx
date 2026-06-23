"use client"

import { motion } from "framer-motion"

const categories = [
  {
    label: "Frontend",
    accent: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/8",
    pill: "bg-blue-50 dark:bg-blue-900/25 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Framer Motion", "Material UI", "Webflow"],
  },
  {
    label: "Backend & APIs",
    accent: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500/8",
    pill: "bg-purple-50 dark:bg-purple-900/25 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST API Design", "JWT & Auth", "Streamlit"],
  },
  {
    label: "Databases",
    accent: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/8",
    pill: "bg-emerald-50 dark:bg-emerald-900/25 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    label: "DevOps & Tools",
    accent: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500/8",
    pill: "bg-amber-50 dark:bg-amber-900/25 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
    skills: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Postman", "Sanity CMS", "OpenAI & DeepSeek", "Figma"],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">My Skills</h2>
        <div className="w-14 h-1 bg-purple-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          15+ technologies across the full stack — from pixel to production.
        </p>
      </motion.div>

      {/* Category rows */}
      <div className="space-y-4">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: ci % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:items-start gap-3 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/30 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            {/* Category label */}
            <div className={`shrink-0 text-xs font-extrabold uppercase tracking-widest ${cat.accent} sm:min-w-[120px] sm:pt-1`}>
              {cat.label}
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: ci * 0.07 + si * 0.025 }}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${cat.pill} hover:scale-105 transition-transform cursor-default select-none`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
      "Vue.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit",
      "Framer Motion", "Material UI", "Webflow",
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js", "Express.js", "Python", "FastAPI",
      "REST API Design", "JWT & Auth", "Streamlit",
    ],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Redis", "Firebase"],
  },
  {
    label: "DevOps & Tools",
    skills: [
      "Docker", "AWS", "Git", "GitHub", "Vercel",
      "Postman", "Sanity CMS", "OpenAI & DeepSeek", "Figma",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="section-label">Tech Stack</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          My Skills
        </h2>
        <p className="font-body text-sm text-muted-foreground mt-3">
          30+ technologies across the full stack — from pixel to production.
        </p>
      </motion.div>

      {/* Category rows */}
      <div className="space-y-3">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: ci % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border hover:border-primary/20 rounded-sm transition-colors"
          >
            {/* Row header */}
            <div className="flex items-center gap-3 px-5 pt-5 pb-3">
              <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary">
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="font-body text-[10px] text-muted-foreground">
                {cat.skills.length} skills
              </span>
            </div>

            {/* Static pill grid */}
            <div className="px-5 pb-5 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-xs font-medium px-3 py-1.5 rounded-sm border border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

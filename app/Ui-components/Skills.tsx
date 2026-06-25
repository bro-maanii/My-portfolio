"use client";

import { useRef } from "react";
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

function MarqueeRow({
  skills,
  reverse = false,
}: {
  skills: string[];
  reverse?: boolean;
}) {
  const doubled = [...skills, ...skills, ...skills];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex shrink-0 gap-2 py-1"
        style={{
          animation: `scroll 28s linear infinite${reverse ? " reverse" : ""}`,
          willChange: "transform",
        }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="font-body text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-sm border border-[#1f1f1f] bg-[#161616] text-[#a3a3a3] hover:border-primary/40 hover:text-foreground transition-colors cursor-default select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

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
        <p className="font-body text-sm text-[#a3a3a3] mt-3">
          30+ technologies across the full stack — from pixel to production.
        </p>
      </motion.div>

      {/* Marquee rows */}
      <div className="space-y-3">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: ci % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-sm transition-colors overflow-hidden group"
          >
            {/* Row header */}
            <div className="flex items-center gap-3 px-5 pt-5 pb-3">
              <span className="font-body text-[11px] font-semibold uppercase tracking-widest text-primary">
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-[#1f1f1f]" />
              <span className="font-body text-[10px] text-[#525252]">
                {cat.skills.length} skills
              </span>
            </div>

            {/* Marquee */}
            <div className="px-5 pb-5">
              <MarqueeRow skills={cat.skills} reverse={ci % 2 !== 0} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

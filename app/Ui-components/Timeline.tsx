"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    title: "Software Engineer",
    organization: "SOCByte Private Limited",
    period: "April 2025 – Present",
    year: "2025",
    current: true,
    highlights: [
      "Sole frontend engineer — built entire cybersecurity platform UI from scratch, no Figma, no design reference; delivered production-ready on schedule.",
      "Integrated all platform REST APIs end-to-end with robust error handling, loading states, and data consistency.",
      "Engineered backend modules for Threat Intelligence, Asset Management, and Reporting alongside the founding team.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    organization: "TemplateSpace",
    period: "September 2024 – December 2024",
    year: "2024",
    current: false,
    highlights: [
      "Delivered pixel-perfect, responsive UIs across multiple client projects using Vue.js, React.js, Next.js, and Tailwind CSS.",
      "Boosted Lighthouse scores via code-splitting, lazy loading, image optimisation, and render-blocking elimination.",
    ],
  },
  {
    title: "Freelance MERN Stack Developer",
    organization: "Self-Employed / Remote Clients",
    period: "January 2024 – August 2024",
    year: "2024",
    current: false,
    highlights: [
      "Delivered 5+ client projects including e-commerce platforms, portfolio sites, and internal dashboards.",
      "Managed complete project lifecycle — requirements, design, development, and deployment.",
    ],
  },
  {
    title: "Bachelor of Software Engineering",
    organization: "University of Karachi — UBIT",
    period: "February 2022 – December 2025",
    year: "2022",
    current: false,
    highlights: [
      "Coursework in software design, algorithms, databases, and full-stack web development.",
    ],
  },
];

export default function ProfessionalTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="section-label">Experience</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">My Timeline</h2>
      </motion.div>

      {/* Table */}
      <div className="divide-y divide-[#1f1f1f]">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "grid grid-cols-[64px_1fr] md:grid-cols-[64px_1fr_160px] gap-4 md:gap-6 py-7 transition-colors",
              item.current && "pl-4 border-l-2 border-primary"
            )}
          >
            {/* Year */}
            <span className="font-heading text-xs font-semibold text-primary pt-0.5">{item.year}</span>

            {/* Role + org + highlights */}
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-heading text-sm font-semibold text-foreground">{item.title}</h3>
                {item.current && (
                  <span className="font-body text-[9px] font-semibold px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>
              <p className="font-body text-xs text-primary mb-3">{item.organization}</p>
              <ul className="space-y-1.5">
                {item.highlights.map((h, hi) => (
                  <li key={hi} className="font-body text-xs text-[#a3a3a3] leading-relaxed pl-3 border-l border-[#2a2a2a]">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full period — desktop only */}
            <span className="hidden md:block font-body text-[11px] text-[#525252] pt-0.5 text-right leading-relaxed">
              {item.period}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

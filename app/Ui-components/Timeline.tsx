"use client";

import { motion } from "framer-motion";
import { SectionHeading, Accent } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    title: "Software Engineer",
    organization: "SOCByte Private Limited",
    period: "April 2025 – Present",
    year: "2025",
    current: true,
    highlights: [
      "Sole frontend engineer: built the entire cybersecurity platform UI from scratch, no Figma, no design reference; delivered production ready on schedule.",
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
      "Managed complete project lifecycle: requirements, design, development, and deployment.",
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 overflow-x-hidden">

      {/* Heading */}
      <SectionHeading
        label="Experience"
        title={<>Where I&apos;ve <Accent>worked</Accent></>}
        aside={
          <a href="/CV/Eman-webDev.pdf?v=2026-11" download="Eman-Ali-Abbasi-CV.pdf" className="font-mono text-[12px] text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border hover:decoration-primary">
            Full CV (PDF) ↓
          </a>
        }
      />

      {/* Rail timeline */}
      <ol className="relative">
        {timelineData.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid grid-cols-[20px_1fr] md:grid-cols-[180px_20px_1fr] gap-x-5 md:gap-x-8"
          >
            {/* Period — desktop left column */}
            <div className="hidden md:block pt-1 text-right">
              <p className="font-mono text-[12px] text-foreground tabular-nums">{item.period.split("–")[0].trim()}</p>
              <p className="font-mono text-[11px] text-muted-foreground mt-1">→ {item.period.split("–")[1]?.trim()}</p>
            </div>

            {/* Rail + dot */}
            <div className="relative flex justify-center">
              <span className={cn(
                "absolute top-0 w-px bg-border",
                index === timelineData.length - 1 ? "h-3" : "h-full"
              )} />
              <span className={cn(
                "relative mt-1.5 h-3 w-3 rounded-full border-2",
                item.current
                  ? "border-primary bg-primary shadow-[0_0_0_5px_hsl(var(--primary)/0.15)]"
                  : "border-muted-foreground/40 bg-background"
              )} />
            </div>

            {/* Content */}
            <div className={cn("pb-12", index === timelineData.length - 1 && "pb-0")}>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                {item.current && (
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                    Current
                  </span>
                )}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-1.5">
                <span className="text-foreground font-medium">{item.organization}</span>
                <span className="md:hidden font-mono text-[11px]"> · {item.period}</span>
              </p>
              <ul className="mt-4 space-y-2.5 max-w-[68ch]">
                {item.highlights.map((h, hi) => (
                  <li key={hi} className="relative font-body text-[15px] text-muted-foreground leading-relaxed pl-5">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-primary/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

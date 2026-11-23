"use client";

import type { CSSProperties, ComponentType } from "react";
import { motion } from "framer-motion";
import { SectionHeading, Accent } from "@/components/section-heading";
import {
  IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandTypescript, IconBrandReact,
  IconBrandNextjs, IconBrandVue, IconBrandTailwind, IconBrandBootstrap, IconBrandRedux,
  IconBrandFramerMotion, IconBrandWebflow, IconBrandNodejs, IconBrandPython, IconBrandMongodb,
  IconBrandFirebase, IconBrandPrisma, IconBrandDocker, IconBrandAws, IconBrandGit, IconBrandGithub,
  IconBrandVercel, IconBrandFigma, IconBrandOpenai, IconBrandGoogleMaps,
  IconApi, IconKey, IconServer, IconBolt, IconChartBar, IconDatabase, IconSql, IconStack2,
  IconSparkles, IconTerminal2, IconWand, IconBrain, IconSend, IconPhoto, IconFeather,
  IconLayout, IconCloud, IconCube,
} from "@tabler/icons-react";

type Icon = ComponentType<{ size?: number; stroke?: number; className?: string }>;
type Skill = { name: string; icon: Icon; color: string };

/** `color` lights up the logo on hover. "currentColor" = monochrome brands (Next.js, GitHub…). */
const categories: {
  label: string;
  blurb: string;
  icon: Icon;
  span: string;
  cols: string;
  skills: Skill[];
}[] = [
  {
    label: "Frontend",
    blurb: "Where I spend most of my day: interfaces, design systems and motion.",
    icon: IconLayout,
    span: "lg:col-span-7 lg:row-span-2",
    cols: "grid-cols-2 sm:grid-cols-3",
    skills: [
      { name: "React.js",      icon: IconBrandReact,        color: "#61dafb" },
      { name: "Next.js",       icon: IconBrandNextjs,       color: "currentColor" },
      { name: "TypeScript",    icon: IconBrandTypescript,   color: "#3178c6" },
      { name: "Tailwind CSS",  icon: IconBrandTailwind,     color: "#38bdf8" },
      { name: "JavaScript",    icon: IconBrandJavascript,   color: "#f7df1e" },
      { name: "Vue.js",        icon: IconBrandVue,          color: "#42b883" },
      { name: "Redux Toolkit", icon: IconBrandRedux,        color: "#764abc" },
      { name: "Framer Motion", icon: IconBrandFramerMotion, color: "#e639d0" },
      { name: "GSAP",          icon: IconBolt,              color: "#88ce02" },
      { name: "HTML",          icon: IconBrandHtml5,        color: "#e34f26" },
      { name: "CSS",           icon: IconBrandCss3,         color: "#1572b6" },
      { name: "Material UI",   icon: IconCube,              color: "#007fff" },
      { name: "Bootstrap",     icon: IconBrandBootstrap,    color: "#7952b3" },
      { name: "Webflow",       icon: IconBrandWebflow,      color: "#4353ff" },
    ],
  },
  {
    label: "Backend & APIs",
    blurb: "REST APIs, auth and the services behind the UI.",
    icon: IconServer,
    span: "lg:col-span-5",
    cols: "grid-cols-2",
    skills: [
      { name: "Node.js",         icon: IconBrandNodejs,     color: "#5fa04e" },
      { name: "Express.js",      icon: IconServer,          color: "currentColor" },
      { name: "Python",          icon: IconBrandPython,     color: "#3776ab" },
      { name: "FastAPI",         icon: IconBolt,            color: "#009688" },
      { name: "REST API design", icon: IconApi,             color: "currentColor" },
      { name: "JWT & Auth",      icon: IconKey,             color: "#f59e0b" },
      { name: "Google Maps API", icon: IconBrandGoogleMaps, color: "#34a853" },
      { name: "Streamlit",       icon: IconChartBar,        color: "#ff4b4b" },
    ],
  },
  {
    label: "Databases",
    blurb: "Modelling data that stays fast as it grows.",
    icon: IconDatabase,
    span: "lg:col-span-5",
    cols: "grid-cols-2",
    skills: [
      { name: "MongoDB",    icon: IconBrandMongodb,  color: "#47a248" },
      { name: "PostgreSQL", icon: IconDatabase,      color: "#4169e1" },
      { name: "SQL",        icon: IconSql,           color: "currentColor" },
      { name: "Prisma",     icon: IconBrandPrisma,   color: "currentColor" },
      { name: "Redis",      icon: IconStack2,        color: "#dc382d" },
      { name: "Firebase",   icon: IconBrandFirebase, color: "#ffca28" },
    ],
  },
  {
    label: "AI & dev tooling",
    blurb: "Models I ship with, and the AI tools I build with.",
    icon: IconSparkles,
    span: "lg:col-span-5",
    cols: "grid-cols-2",
    skills: [
      { name: "OpenAI & DeepSeek", icon: IconBrandOpenai, color: "currentColor" },
      { name: "Gemini AI",         icon: IconSparkles,    color: "#8e75ff" },
      { name: "Claude",            icon: IconBrain,       color: "#d97757" },
      { name: "Cursor",            icon: IconTerminal2,   color: "currentColor" },
      { name: "Antigravity",       icon: IconWand,        color: "#4285f4" },
    ],
  },
  {
    label: "DevOps & tools",
    blurb: "Shipping, hosting and everything around the code.",
    icon: IconCloud,
    span: "lg:col-span-7",
    cols: "grid-cols-2 sm:grid-cols-3",
    skills: [
      { name: "Docker",     icon: IconBrandDocker, color: "#2496ed" },
      { name: "AWS",        icon: IconBrandAws,    color: "#ff9900" },
      { name: "Git",        icon: IconBrandGit,    color: "#f05032" },
      { name: "GitHub",     icon: IconBrandGithub, color: "currentColor" },
      { name: "Vercel",     icon: IconBrandVercel, color: "currentColor" },
      { name: "Postman",    icon: IconSend,        color: "#ff6c37" },
      { name: "Sanity CMS", icon: IconFeather,     color: "#f03e2f" },
      { name: "Cloudinary", icon: IconPhoto,       color: "#3448c5" },
      { name: "Figma",      icon: IconBrandFigma,  color: "#a259ff" },
    ],
  },
];

const coreNotes = ["UI library", "Framework", "Language", "Styling"];

const total = categories.reduce((n, c) => n + c.skills.length, 0);

export default function SkillsSection() {
  return (
    <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <SectionHeading
        label="Stack"
        title={<>Tools I <Accent>reach for</Accent></>}
        description="40+ technologies across the stack. These are the ones I use week to week."
        aside={
          <div className="flex items-center gap-6 font-mono text-[12px] text-muted-foreground">
            <span><span className="text-foreground text-2xl font-heading font-semibold tabular-nums mr-1.5">{total}</span>tools</span>
            <span><span className="text-foreground text-2xl font-heading font-semibold tabular-nums mr-1.5">{categories.length}</span>areas</span>
          </div>
        }
      />

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {categories.map((cat, ci) => {
          const CatIcon = cat.icon;
          const featured = ci === 0;
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: ci * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`spotlight relative overflow-hidden bg-card border border-border rounded-2xl shadow-soft p-6 sm:p-7 flex flex-col ${cat.span}`}
            >
              {/* Warm wash on the featured card */}
              {featured && (
                <div className="pointer-events-none absolute -top-32 -right-24 w-80 h-80 rounded-full bg-primary/[0.12] blur-[80px]" />
              )}

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <span className="grid place-items-center w-11 h-11 rounded-xl border border-border bg-secondary text-primary shrink-0">
                    <CatIcon size={20} stroke={1.6} />
                  </span>
                  <div>
                    <h3 className={`font-heading font-semibold tracking-tight text-foreground leading-none ${featured ? "text-2xl" : "text-lg"}`}>
                      {cat.label}
                    </h3>
                    <p className="font-body text-[13px] text-muted-foreground mt-1.5 leading-snug">{cat.blurb}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0 pt-1">
                  {String(cat.skills.length).padStart(2, "0")}
                </span>
              </div>

              {/* Featured card: large "daily driver" tiles fill the extra height */}
              {featured && (
                <div className="relative mb-3">
                  <p className="font-mono text-[11px] text-muted-foreground mb-3">Daily drivers</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {cat.skills.slice(0, 4).map((skill, si) => {
                      const SkillIcon = skill.icon;
                      return (
                        <li
                          key={skill.name}
                          style={{ "--brand": skill.color } as CSSProperties}
                          className="group/tile relative overflow-hidden rounded-2xl border border-border bg-secondary/50 p-4 aspect-[4/3] sm:aspect-square flex flex-col justify-between hover:-translate-y-1 hover:border-foreground/15 transition-all duration-300 cursor-default"
                        >
                          <span className="pointer-events-none absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[color:var(--brand)] opacity-[0.10] blur-2xl group-hover/tile:opacity-25 transition-opacity duration-300" />
                          <SkillIcon
                            size={34}
                            stroke={1.4}
                            className="relative text-[color:var(--brand)] group-hover/tile:scale-110 group-hover/tile:-rotate-6 transition-transform duration-300"
                          />
                          <span className="relative">
                            <span className="block font-heading text-[15px] font-semibold tracking-tight text-foreground leading-tight">{skill.name}</span>
                            <span className="block font-mono text-[10px] text-muted-foreground mt-1">{coreNotes[si]}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="font-mono text-[11px] text-muted-foreground mt-7">Also fluent in</p>
                </div>
              )}

              {/* Skill tiles */}
              <ul className={`relative grid gap-2 ${cat.cols} ${featured ? "flex-1 content-start" : ""}`}>
                {(featured ? cat.skills.slice(4) : cat.skills).map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <li
                      key={skill.name}
                      style={{ "--brand": skill.color } as CSSProperties}
                      className="group/chip flex items-center gap-2.5 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 hover:bg-secondary hover:border-foreground/15 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      <SkillIcon
                        size={18}
                        stroke={1.6}
                        className="shrink-0 text-muted-foreground group-hover/chip:text-[color:var(--brand)] group-hover/chip:scale-110 transition-all duration-200"
                      />
                      <span className="font-body text-[13px] font-medium text-foreground/85 leading-tight">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

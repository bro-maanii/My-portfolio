"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const stats = [
  { value: "3+", label: "Years" },
  { value: "15+", label: "Projects" },
  { value: "5+", label: "Clients" },
  { value: "∞", label: "Coffee" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <span className="section-label">About Me</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          The Person Behind the Code
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 — About text (col-span-2) */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-2 bg-card border border-border hover:border-border rounded-sm p-7 transition-colors duration-300 relative overflow-hidden"
        >
          {/* Subtle grid bg */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 border-2 border-primary/40 rounded-full overflow-hidden relative ring-4 ring-primary/10">
              <Image src="/p1.png" alt="Eman" fill className="object-cover object-center pt-1" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Eman Ali Abbasi
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                I&apos;m a Full-Stack Developer and UI/UX enthusiast currently working at{" "}
                <span className="text-primary font-medium">SOCByte</span>. I specialize in
                building fast, accessible, and conversion-focused web experiences using
                React, Next.js, Vue, and Node.js.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Beyond code, I create AI-generated UGC ads, consult on digital strategy,
                and contribute to open-source. My goal: write software that is beautiful,
                purposeful, and built to last.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 — Stats 2x2 */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-card border border-border hover:border-border rounded-sm p-6 transition-colors duration-300"
        >
          <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            By the Numbers
          </p>
          <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-center bg-secondary border border-border rounded-sm p-3"
              >
                <span className="font-heading text-2xl font-bold text-primary leading-none">
                  {s.value}
                </span>
                <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3 — Companies */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-card border border-border hover:border-border rounded-sm p-6 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-sm bg-secondary border border-border text-primary shrink-0">
              <Briefcase size={14} />
            </div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Work Experience
            </p>
          </div>

          {/* SOCByte — current */}
          <div className="flex items-center gap-3 p-3 bg-secondary border border-primary/20 rounded-sm mb-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden  shrink-0 ">
              <Image src="/company2.png" alt="SOCByte" fill className="object-contain p-0.5" />
            </div>
            <div className="min-w-0">
              <p className="font-heading text-xs font-semibold text-foreground leading-none">SOCByte</p>
              <p className="font-body text-[10px] text-muted-foreground mt-0.5">Full-Stack Dev · 2025–Present</p>
            </div>
            <span className="ml-auto font-body text-[9px] px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider shrink-0">
              Now
            </span>
          </div>

          {/* TemplateSpace — previous */}
          <div className="flex items-center gap-3 p-3 bg-secondary border border-border rounded-sm">
            <div className="relative w-8 h-8 rounded-full overflow-hidden  shrink-0 ">
              <Image src="/company.png" alt="TemplateSpace" fill className="object-contain p-0.5" />
            </div>
            <div className="min-w-0">
              <p className="font-heading text-xs font-semibold text-foreground leading-none">TemplateSpace</p>
              <p className="font-body text-[10px] text-muted-foreground mt-0.5">Junior Frontend Dev · 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Card 4 — Open to work */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-card border border-border hover:border-border rounded-sm p-6 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <Sparkles size={13} className="text-primary" />
            <span className="font-body text-xs font-semibold text-emerald-400">
              Open to Work
            </span>
          </div>
          <p className="font-heading text-sm font-semibold text-foreground mb-1">
            Full-time &amp; Freelance
          </p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            Looking for senior frontend / full-stack roles or exciting freelance
            projects. Let&apos;s build something.
          </p>
        </motion.div>

        {/* Card 5 — Location + email */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-card border border-border hover:border-border rounded-sm p-6 transition-colors duration-300 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-secondary border border-border text-primary shrink-0">
              <MapPin size={14} />
            </div>
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
                Location
              </p>
              <p className="font-body text-sm text-foreground">Karachi, Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-secondary border border-border text-primary shrink-0">
              <Mail size={14} />
            </div>
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:eman.abbasi@socbyte.ai"
                className="font-body text-sm text-foreground hover:text-primary transition-colors"
              >
                eman.abbasi@socbyte.ai
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

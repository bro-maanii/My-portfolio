"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const BlurWord = ({ word, delay = 0 }: { word: string; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, filter: "blur(12px)", y: -16 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    style={{ display: "inline-block" }}
  >
    {word}
  </motion.span>
);

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background noise-overlay overflow-hidden">
      {/* Ambient indigo glow */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[640px] h-[640px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,hsl(var(--primary)) 1px,transparent 1px),linear-gradient(to bottom,hsl(var(--primary)) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col"
        >
          {/* Eyebrow */}
          <motion.span variants={item} className="section-label mb-6">
            Available for hire
          </motion.span>

          {/* Heading with blur-word animation */}
          <h1 className="font-heading font-extrabold leading-[0.88] tracking-tight text-[clamp(3.2rem,7.5vw,6.5rem)] mb-6">
            <span className="block text-foreground overflow-hidden">
              <BlurWord word="Full‑Stack" delay={0.2} />
            </span>
            <span className="block text-foreground overflow-hidden">
              <BlurWord word="Developer" delay={0.34} />
              <BlurWord word=" &" delay={0.42} />
            </span>
            <span className="block text-primary overflow-hidden">
              <BlurWord word="Engineer." delay={0.54} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="font-body text-base text-muted-foreground max-w-md leading-relaxed mb-8"
          >
            I build scalable web apps, sleek UIs, and full-stack products that
            turn ideas into revenue — for startups and enterprises alike.
          </motion.p>


          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-body text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              View My Work
              <ArrowRight size={14} />
            </Link>
            <a
              href="/CV/Eman-webDev.pdf"
              download
              className="inline-flex items-center gap-2 border border-border hover:border-muted-foreground bg-transparent text-foreground font-body text-sm font-medium px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              Download CV
              <Download size={14} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex gap-8 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-bold text-primary leading-none">
                  {s.value}
                </p>
                <p className="font-body text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — profile image */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative shrink-0 flex items-center justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 scale-[1.2] rounded-sm bg-primary/20 blur-[70px]" />

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary/70" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary/70" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary/70" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary/70" />

          <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] lg:w-[360px] lg:h-[500px] border border-primary/30 rounded-sm overflow-hidden">
            <Image
              src="/p1.png"
              alt="Eman Ali Abbasi"
              fill
              className="object-cover object-center pt-4"
              priority
            />
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}

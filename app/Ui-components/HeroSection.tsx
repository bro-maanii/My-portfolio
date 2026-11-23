"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stats = [
  { value: "3+",  label: "Years shipping" },
  { value: "15+", label: "Projects delivered" },
  { value: "5+",  label: "Happy clients" },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "FastAPI", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "GSAP", "Three.js", "Docker", "AWS", "Supabase", "Python",
];

/** Live local time in Karachi — rendered client-side only to avoid hydration mismatch. */
function KarachiTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden pt-28 sm:pt-32"
    >
      {/* Ambient warm light — top right, single light source */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[720px] h-[720px] rounded-full bg-primary/[0.13] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-15%] w-[520px] h-[520px] rounded-full bg-primary/[0.05] blur-[120px]" />

      {/* Faint dot grid, fading out toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--muted-foreground) / 0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 items-center gap-14 lg:gap-10 pb-16">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col"
        >
          {/* Availability pill */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 backdrop-blur pl-2.5 pr-3.5 py-1.5 font-mono text-[12px] text-muted-foreground shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-heading font-semibold text-foreground leading-[0.95] tracking-[-0.05em] text-[clamp(2.75rem,5.4vw,5.25rem)] mb-7"
          >
            Full‑stack engineer building products people{" "}
            <span className="font-serif italic font-normal tracking-[-0.02em] text-primary">
              enjoy
            </span>{" "}
            using.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="font-body text-base sm:text-lg text-muted-foreground max-w-[50ch] leading-relaxed mb-10"
          >
            I&apos;m Eman, a software engineer in Karachi. I design and build fast,
            accessible interfaces and the APIs behind them, currently as the sole
            frontend engineer on a cybersecurity platform at{" "}
            <span className="text-foreground font-medium">SOCByte</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-14">
            <Link
              href="#work"
              className="pressable group inline-flex items-center gap-2 h-12 pl-6 pr-5 rounded-xl bg-primary text-primary-foreground font-body text-[15px] font-medium shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] hover:brightness-110"
            >
              See selected work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="/CV/Eman-webDev.pdf?v=2026-11"
              download="Eman-Ali-Abbasi-CV.pdf"
              className="group inline-flex items-center gap-2 font-body text-[15px] font-medium text-foreground underline decoration-border decoration-2 underline-offset-[6px] hover:decoration-primary transition-colors"
            >
              Download CV
              <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl variants={item} className="grid grid-cols-3 max-w-md divide-x divide-border border-y border-border">
            {stats.map((s) => (
              <div key={s.label} className="py-4 px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-semibold tracking-tight text-foreground tabular-nums leading-none">
                  {s.value}
                </dd>
                <dd className="font-mono text-[11px] text-muted-foreground mt-2">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right column — portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="lg:col-span-5 relative mx-auto w-full max-w-[400px]"
        >
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-border shadow-lifted bg-gradient-to-b from-primary/25 via-secondary to-card">
            {/* Warm backdrop rings */}
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-foreground/[0.06]" />
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-foreground/[0.08]" />

            <Image
              src="/p1.png"
              alt="Portrait of Eman Ali Abbasi"
              fill
              sizes="(max-width: 1024px) 400px, 420px"
              className="object-cover object-top pt-6"
              priority
            />

            {/* Bottom glass caption */}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md px-4 py-3 flex items-center justify-between text-white">
              <div>
                <p className="font-heading text-[15px] font-semibold tracking-tight leading-none">Eman Ali Abbasi</p>
                <p className="font-mono text-[11px] text-white/70 mt-1.5">Software Engineer</p>
              </div>
              <div className="text-right font-mono text-[11px] text-white/70 leading-tight">
                <p>Karachi, PK</p>
                {/* <p className="text-white mt-1"><KarachiTime /> PKT</p> */}
              </div>
            </div>
          </div>

          {/* Floating chip — current role */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="absolute -left-4 sm:-left-10 top-10"
          >
            {/* <div className="animate-float flex items-center gap-2.5 rounded-2xl border border-border bg-card/90 backdrop-blur-md pl-2 pr-4 py-2 shadow-lifted">
              <span className="relative w-8 h-8 rounded-lg overflow-hidden bg-secondary">
                <Image src="/company2.png" alt="" fill sizes="32px" className="object-contain p-0.5" />
              </span>
              {/* <span>
                <span className="block font-mono text-[10px] text-muted-foreground leading-none">Now at</span>
                <span className="block font-heading text-[13px] font-semibold text-foreground mt-1 leading-none">SOCByte</span>
              </span> */}
            {/* </div> */}
          </motion.div>

          {/* Floating chip — stack */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="absolute -right-3 sm:-right-8 top-[46%]"
          >
            <div className="animate-float [animation-delay:-3s] rounded-2xl border border-border bg-card/90 backdrop-blur-md px-3.5 py-2.5 shadow-lifted font-mono text-[11px] leading-relaxed">
              <span className="text-muted-foreground">const</span>{" "}
              <span className="text-foreground">stack</span>{" "}
              <span className="text-muted-foreground">=</span>
              <br />
              <span className="text-primary">[&quot;next&quot;, &quot;ts&quot;, &quot;node&quot;]</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="marquee-track relative z-10 border-y border-border bg-card/40 backdrop-blur-sm py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 pr-10" aria-hidden="true">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-[13px] text-muted-foreground whitespace-nowrap">
              {t}
              <span className="text-primary/60">✦</span>
            </span>
          ))}
        </div>
        <p className="sr-only">Tech stack: {stack.join(", ")}</p>
      </div>
    </section>
  );
}

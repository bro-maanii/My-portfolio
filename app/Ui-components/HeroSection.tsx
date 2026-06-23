"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Vortex } from "@/components/BackgroundBean";
import p1 from "@/public/p1.png";
import Typeeffect from "@/components/Type-effect";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "2",   label: "Companies" },
  { value: "11+", label: "Projects" },
  { value: "15+", label: "Technologies" },
];

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className="w-full min-h-svh relative overflow-x-hidden" id="home">
      <Vortex
        backgroundColor={theme === "dark" ? "hsl(240,10%,4%)" : "white"}
        rangeY={800}
        particleCount={320}
        baseHue={265}
        className="flex items-center justify-center w-full min-h-svh px-4 md:px-10 py-20"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 max-w-7xl mx-auto">

          {/* ── Left: text ─────────────────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full md:w-[58%] text-center md:text-left"
          >
            {/* Available badge */}
            <motion.div variants={item} className="flex justify-center md:justify-start mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-5"
            >
              EMAN
              <br />
              <span className="text-purple-500">ALI ABBASI</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="mb-5">
              <Typeeffect />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-7 max-w-lg mx-auto md:mx-0"
            >
              Sole frontend engineer at{" "}
              <span className="font-semibold text-foreground">SOCByte</span> — built
              an entire cybersecurity platform from scratch, no Figma, no design
              reference. Full-stack across React, Next.js, Node.js, Python,
              Docker &amp; AWS.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start gap-3 mb-9">
              <a href="/CV/Eman-webDev.pdf" download="EmanAliAbbasi-CV">
                <Button className="gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20">
                  <DownloadIcon size={15} />
                  Download CV
                </Button>
              </a>
              <Link href="#work">
                <Button
                  variant="outline"
                  className="gap-2 border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-500"
                >
                  View Work
                  <ArrowRight size={15} />
                </Button>
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div variants={item} className="flex justify-center md:justify-start gap-7">
              {stats.map((s, i) => (
                <div key={s.label}>
                  {i > 0 && (
                    <span className="hidden" aria-hidden />
                  )}
                  <p className="text-2xl font-black text-purple-500">{s.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: image ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[42%] flex justify-center"
          >
            <div className="relative">
              {/* ambient glow */}
              <div className="absolute inset-[-20%] rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
              {/* ring */}
              <div className="relative rounded-full p-1 ring-2 ring-purple-500/40 shadow-2xl shadow-purple-500/10">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden color-bg">
                  <Image
                    src={p1}
                    alt="Eman Ali Abbasi – Software Engineer & Full-Stack Developer"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Vortex>
    </div>
  );
}

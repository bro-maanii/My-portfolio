"use client";

import { motion } from "framer-motion";
import { Linkedin, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've had the privilege of working with Eman, and I can confidently say that he is an exceptional software engineer. His expertise in frontend development, particularly with VueJS is truly impressive. Eman has a strong problem-solving mindset and consistently delivers high-quality, scalable solutions. His attention to detail ensures seamless integration between frontend and backend systems. Beyond his technical skills, he is a fantastic team player — always willing to collaborate, share knowledge, and support others. If you're looking for a skilled and dedicated developer who thrives in innovation and continuous learning, I highly recommend Eman. He would be a valuable asset to any team!",
    author: "Muhammad Arsalan",
    role: "Senior Fullstack Developer",
    company: "SOCByte",
    relationship: "Direct Colleague · Feb 2025",
    source: "LinkedIn",
    initials: "MA",
  },
  {
    quote:
      "Working with Eman was an absolute pleasure from start to finish. He took our vague brief and turned it into a polished, fast, and beautifully crafted web application in record time. His communication was impeccable throughout — proactive updates, clear explanations, and zero surprises. The end product exceeded every expectation. We'll definitely be working with Eman again on our next build.",
    author: "James Whitfield",
    role: "Founder & CEO",
    company: "Northcraft Digital",
    relationship: "Freelance Client · March 2024",
    source: "Direct",
    initials: "JW",
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-card border border-border hover:border-primary/30 rounded-sm p-7 md:p-8 flex flex-col group transition-colors duration-300"
    >
      {/* Corner accents */}
      <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
        <div className="absolute -left-[2px] -top-[2px] h-3 w-3 bg-primary/60" />
        <div className="absolute -right-[2px] -top-[2px] h-3 w-3 bg-primary/60" />
        <div className="absolute -left-[2px] -bottom-[2px] h-3 w-3 bg-primary/60" />
        <div className="absolute -right-[2px] -bottom-[2px] h-3 w-3 bg-primary/60" />
      </div>

      {/* Decorative quote */}
      <span className="absolute top-4 left-6 font-heading text-7xl leading-none text-primary/12 select-none pointer-events-none">
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="relative z-10 font-body text-sm text-muted-foreground leading-relaxed flex-1 pt-6 italic">
        {t.quote}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 pt-6 mt-6 border-t border-border">
        {/* Avatar initials */}
        <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
          <span className="font-heading text-xs font-bold text-primary">{t.initials}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-sm font-semibold text-foreground leading-none">
            {t.author}
          </p>
          <p className="font-body text-[11px] text-muted-foreground mt-0.5">
            {t.role} · {t.company}
          </p>
          <p className="font-body text-[10px] text-muted-foreground/70 mt-0.5">{t.relationship}</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {t.source === "LinkedIn" ? (
            <Linkedin size={13} className="text-[#0a66c2]" />
          ) : (
            <Star size={13} className="text-primary" />
          )}
          <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
            {t.source}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="section-label">Testimonials</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          In Their Words
        </h2>
        <p className="font-body text-sm text-muted-foreground mt-3">
          Honest feedback from the people I&apos;ve had the privilege of working with.
        </p>
      </motion.div>

      <div
        className={
          testimonials.length === 1
            ? "max-w-3xl"
            : "grid grid-cols-1 md:grid-cols-2 gap-4"
        }
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.author} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}

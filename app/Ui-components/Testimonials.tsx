"use client";

import { motion } from "framer-motion";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Linkedin, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've had the privilege of working with Eman, and I can confidently say that he is an exceptional software engineer. His expertise in frontend development, particularly with VueJS is truly impressive. Eman has a strong problem-solving mindset and consistently delivers high-quality, scalable solutions. His attention to detail ensures seamless integration between frontend and backend systems. Beyond his technical skills, he is a fantastic team player always willing to collaborate, share knowledge, and support others. If you're looking for a skilled and dedicated developer who thrives in innovation and continuous learning, I highly recommend Eman. He would be a valuable asset to any team!",
    author: "Muhammad Arsalan",
    role: "Senior Fullstack Developer",
    company: "TemplateSpace",
    relationship: "Direct Colleague · Feb 2025",
    source: "LinkedIn",
    initials: "MA",
  },
  {
    quote:
      "I had the chance to work with Eman while leading a project where he was responsible for a significant part of the technical execution, and honestly, he made my job easier. What stood out to me was how independently he worked. I didn't have to constantly explain or follow up on things — he would figure problems out, take ownership, and actually get things shipped. He was also very receptive to feedback and cared about getting things right, not just getting them done. As a lead, having someone you can trust with their part of the project makes a huge difference. Eman was that person for me, and I'd happily work with him again.",
    author: "Hafsa Tahir",
    role: "Project Lead",
    company: "Ex-DigitalOcean",
    relationship: "Managed Eman directly · Sep 2026",
    source: "LinkedIn",
    initials: "HT",
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
      className="spotlight bg-card border border-border rounded-2xl shadow-soft p-7 md:p-10 flex flex-col h-full"
    >

      {/* Decorative quote */}
      <span aria-hidden="true" className="font-serif text-7xl leading-[0.6] text-primary h-8 select-none">
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="font-serif text-[1.3rem] sm:text-[1.4rem] leading-[1.45] text-foreground/90 flex-1 pt-4">
        {t.quote}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 pt-6 mt-8 border-t border-border">
        {/* Avatar initials */}
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-secondary border border-border flex items-center justify-center shrink-0">
          <span className="font-heading text-sm font-semibold text-foreground">{t.initials}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-sm font-semibold text-foreground leading-none">
            {t.author}
          </p>
          <p className="font-body text-[13px] text-muted-foreground mt-1">
            {t.role} · {t.company}
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/80 mt-0.5">{t.relationship}</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {t.source === "LinkedIn" ? (
            <Linkedin size={13} className="text-[#0a66c2]" />
          ) : (
            <Star size={13} className="text-primary" />
          )}
          <span className="font-mono text-[11px] text-muted-foreground">
            {t.source}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <SectionHeading
        label="Testimonials"
        title={<>In their <Accent>words</Accent></>}
        description="Feedback from people I&apos;ve worked with."
      />

      <div
        className={
          testimonials.length === 1
            ? "max-w-3xl"
            : "grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch"
        }
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.author} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}

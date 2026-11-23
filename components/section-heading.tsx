"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  /** Optional element shown on the right on wide screens (e.g. a link or count) */
  aside?: ReactNode;
}

/** Shared section header: numbered mono eyebrow, large tight title, short lede. */
export function SectionHeading({ label, title, description, className, aside }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6", className)}
    >
      <div className="max-w-2xl">
        <span className="section-label">{label}</span>
        <h2 className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground">
          {title}
        </h2>
        {description && (
          <p className="font-body text-base text-muted-foreground mt-4 max-w-[52ch] leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </motion.div>
  );
}

/** Italic serif accent used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-serif italic font-normal tracking-[-0.01em] text-primary">{children}</span>
  );
}

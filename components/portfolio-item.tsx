"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface PortfolioItemProps {
  item: {
    image: string
    title: string
    category: string
    description?: string
    tech?: string[]
    Codeurl?: string
    Liveurl?: string
  }
  index: number
}

export function PortfolioItem({ item, index }: PortfolioItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col"
    >
      {/* Corner accents on hover */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden group-hover:block">
        <div className="absolute -left-[2px] -top-[2px] h-3 w-3 bg-primary/70" />
        <div className="absolute -right-[2px] -top-[2px] h-3 w-3 bg-primary/70" />
        <div className="absolute -left-[2px] -bottom-[2px] h-3 w-3 bg-primary/70" />
        <div className="absolute -right-[2px] -bottom-[2px] h-3 w-3 bg-primary/70" />
      </div>

      {/* Image + hover overlay */}
      <div className="relative overflow-hidden h-48 shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Project number — decorative bg text */}
        <span className="absolute top-3 right-3 font-heading text-5xl font-extrabold text-white/8 leading-none select-none z-0 pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Category badge */}
        <span className="absolute top-3 left-3 font-body text-[9px] font-semibold uppercase tracking-widest bg-black/60 text-white px-2.5 py-1 rounded-sm z-10">
          {item.category}
        </span>

        {/* Dark overlay + action buttons on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2 z-10">
          {item.Codeurl && (
            <Link
              href={item.Codeurl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              aria-label="View source code"
              className="w-9 h-9 rounded-sm bg-secondary border border-border flex items-center justify-center hover:border-border transition-colors"
            >
              <Github size={14} className="text-white" />
            </Link>
          )}
          {item.Liveurl && (
            <Link
              href={item.Liveurl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              aria-label="View live demo"
              className="w-9 h-9 rounded-sm bg-primary/80 border border-primary/40 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <ExternalLink size={14} className="text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading text-sm font-semibold text-foreground leading-snug mb-2">{item.title}</h3>

        {item.description && (
          <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>
        )}

        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {item.tech.map((t) => (
              <span
                key={t}
                className="font-body text-[10px] font-medium px-2.5 py-1 rounded-sm border border-border bg-secondary text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

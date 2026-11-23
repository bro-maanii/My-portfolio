"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { BrowserFrame } from "@/components/browser-frame"

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
  const isAI = item.category.startsWith("AI")

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="spotlight group bg-card border border-border rounded-2xl shadow-soft p-3 flex flex-col hover:-translate-y-1 hover:shadow-lifted transition-[transform,box-shadow] duration-500"
    >
      {/* Screenshot inside browser chrome */}
      <BrowserFrame url={item.Liveurl} className="h-52 shrink-0">
        <Image
          src={item.image}
          alt={`Screenshot of ${item.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </BrowserFrame>

      {/* Card body */}
      <div className="px-2 pt-5 pb-2 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11px] text-muted-foreground">
            {String(index + 1).padStart(2, "0")} · {isAI ? "AI / Chatbot" : "Web"}
          </span>
        </div>

        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground leading-snug mb-2">
          {item.title}
        </h3>

        {item.description && (
          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {item.description}
          </p>
        )}

        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10.5px] px-2 py-0.5 rounded-md border border-border bg-secondary/60 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions pinned to the bottom so they line up across cards */}
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border">
          {item.Liveurl && (
            <Link
              href={item.Liveurl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {isAI ? "Watch demo" : "Visit site"}
              <ArrowUpRight size={14} />
            </Link>
          )}
          {item.Codeurl && (
            <Link
              href={item.Codeurl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} />
              Source
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}

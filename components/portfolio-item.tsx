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
}

export function PortfolioItem({ item }: PortfolioItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 flex flex-col"
    >
      {/* Image + hover overlay */}
      <div className="relative overflow-hidden h-48 shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/55 text-white backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
          {item.category}
        </span>

        {/* Dark overlay + action buttons on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
          {item.Codeurl && (
            <Link
              href={item.Codeurl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              aria-label="View source code"
              className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-white/25 transition-colors"
            >
              <Github size={15} className="text-white" />
            </Link>
          )}
          {item.Liveurl && (
            <Link
              href={item.Liveurl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              aria-label="View live demo"
              className="w-9 h-9 rounded-full bg-purple-600/80 backdrop-blur-sm border border-purple-500/40 flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <ExternalLink size={15} className="text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-bold leading-snug mb-2">{item.title}</h3>

        {item.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>
        )}

        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {item.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200/60 dark:border-purple-800/40"
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

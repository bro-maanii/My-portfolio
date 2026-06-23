"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Software Engineer",
    organization: "SOCByte Private Limited",
    period: "April 2025 – Present",
    type: "work",
    icon: "/company2.png",
    current: true,
    highlights: [
      "Sole frontend engineer — built entire cybersecurity platform UI from scratch, no Figma, no design reference; delivered production-ready on schedule.",
      "Integrated all platform REST APIs end-to-end with robust error handling, loading states, and data consistency.",
      "Engineered backend modules for Threat Intelligence, Asset Management, and Reporting alongside the founding team.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    organization: "TemplateSpace",
    period: "September 2024 – December 2024",
    type: "work",
    icon: "/company.png",
    current: false,
    highlights: [
      "Delivered pixel-perfect, responsive UIs across multiple client projects using Vue.js, React.js, Next.js, and Tailwind CSS.",
      "Boosted Lighthouse scores via code-splitting, lazy loading, image optimisation, and render-blocking elimination.",
    ],
  },
  {
    title: "Bachelor of Software Engineering",
    organization: "University of Karachi — UBIT",
    period: "February 2022 – December 2025",
    type: "education",
    icon: "/ku_icon.jpg",
    current: false,
    highlights: [
      "Coursework in software design, algorithms, databases, and full-stack web development.",
    ],
  },
];

export default function ProfessionalTimeline() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">My Timeline</h2>
        <div className="w-14 h-1 bg-purple-500 mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Glowing vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-[3px] glow-line rounded-full" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-start gap-5"
            >
              {/* Dot on line */}
              <div
                className={`absolute left-[26px] top-7 w-4 h-4 rounded-full z-10 border-2 border-background shadow-md ${
                  item.current
                    ? "bg-purple-500 shadow-purple-500/40 animate-pulse"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />

              {/* Logo circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 + 0.1 }}
                className="relative z-10 shrink-0"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-md p-1.5 border border-gray-100 dark:border-gray-800 flex items-center justify-center hover:scale-105 transition-transform">
                  <Image
                    src={item.icon}
                    alt={item.organization}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Card */}
              <div className="flex-1 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-purple-500/40 transition-colors shadow-sm hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold">{item.title}</h3>
                      {item.current && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-purple-500 font-semibold">{item.organization}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500 font-medium whitespace-nowrap shrink-0">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

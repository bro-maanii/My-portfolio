"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Code2, Terminal } from "lucide-react";

const certifications = [
  {
    title: "HTML, CSS & JavaScript for Web Developers",
    org: "Johns Hopkins University",
    platform: "Coursera",
    icon: GraduationCap,
    accent: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    title: "TypeScript Fundamentals",
    org: "Self-Directed Learning",
    platform: "TypeScript",
    icon: Code2,
    accent: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/10",
  },
  {
    title: "IT Essentials",
    org: "Cisco Networking Academy",
    platform: "Cisco",
    icon: Shield,
    accent: "text-green-500 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/10",
  },
  {
    title: "Programming for Everybody (Python)",
    org: "University of Michigan",
    platform: "Coursera",
    icon: Terminal,
    accent: "text-yellow-500 dark:text-yellow-400",
    bg: "bg-yellow-50 dark:bg-yellow-900/10",
  },
];

export default function Certifications() {
  return (
    <section
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      id="certifications"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 underline decoration-purple-500">
        Certifications
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm sm:text-base">
        Verified credentials from world-class institutions
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${cert.bg} border border-gray-200 dark:border-gray-800 hover:border-purple-500/60 dark:hover:border-purple-500/60 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 shadow-sm hover:shadow-lg`}
            >
              <div
                className={`${cert.accent} mt-0.5 shrink-0 p-2.5 rounded-lg bg-white dark:bg-gray-800/60 shadow-sm`}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {cert.org}
                </p>
                <span className="inline-block text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium">
                  {cert.platform}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

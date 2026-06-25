"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Code2, Terminal, Network, Database, ExternalLink } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "HTML, CSS & JavaScript for Web Developers",
    org: "Johns Hopkins University",
    platform: "Coursera",
    icon: GraduationCap,
    pdf: "/certificates/Coursera_web_develop.pdf",
  },
  {
    title: "TypeScript Fundamentals",
    org: "Self-Directed Learning",
    platform: "TypeScript / Coursera",
    icon: Code2,
    pdf: "/certificates/Typescript_Coursera.pdf",
  },
  {
    title: "IT Essentials",
    org: "Cisco Networking Academy",
    platform: "Cisco",
    icon: Shield,
    pdf: "/certificates/CISCO_NETWORKING.pdf",
  },
  {
    title: "Programming for Everybody (Python)",
    org: "University of Michigan",
    platform: "Coursera",
    icon: Terminal,
    pdf: "/certificates/Coursera_PYTHON.pdf",
  },
  {
    title: "Blockchain Basics",
    org: "SUNY Buffalo",
    platform: "Coursera",
    icon: Network,
    pdf: "/certificates/Coursera Blockchain Basic.pdf",
  },
  {
    title: "Introduction to SQL",
    org: "DataCamp",
    platform: "DataCamp",
    icon: Database,
    pdf: "/certificates/intero_to_sql.pdf",
  },
  {
    title: "Intermediate SQL",
    org: "DataCamp",
    platform: "DataCamp",
    icon: Database,
    pdf: "/certificates/intermediate_sql.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      id="certifications"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="section-label">Credentials</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">Certifications</h2>
        <p className="font-body text-sm text-[#a3a3a3] mt-3">
          Verified credentials from world-class institutions — click any card to view the certificate.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-[#111111] border border-[#1f1f1f] hover:border-primary/40 rounded-sm transition-all duration-300 block"
              >
                {/* Icon */}
                <div className="p-2.5 rounded-sm border border-[#1f1f1f] bg-[#161616] text-primary shrink-0 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                  <Icon size={18} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-body text-xs text-[#a3a3a3] mb-2">
                    {cert.org}
                  </p>
                  <span className="font-body inline-block text-[10px] px-2.5 py-0.5 rounded-sm bg-[#161616] border border-[#1f1f1f] text-[#525252]">
                    {cert.platform}
                  </span>
                </div>

                {/* External link icon */}
                <ExternalLink
                  size={13}
                  className="shrink-0 mt-0.5 text-[#525252] group-hover:text-primary transition-colors"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

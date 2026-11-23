"use client";

import { motion } from "framer-motion";
import { SectionHeading, Accent } from "@/components/section-heading";
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
      className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      id="certifications"
    >
      <SectionHeading
        label="Credentials"
        title={<>Certifications</>}
        description="Verified courses from universities and training providers. Click any card to open the certificate."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight group flex h-full items-start gap-4 p-5 bg-card border border-border rounded-2xl shadow-soft hover:-translate-y-0.5 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="p-2.5 rounded-lg border border-border bg-secondary text-primary shrink-0 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                  <Icon size={18} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 flex flex-col">
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mb-2">
                    {cert.org}
                  </p>
                  <span className="font-body mt-auto self-start text-[10px] px-2.5 py-0.5 rounded-lg bg-secondary border border-border text-muted-foreground">
                    {cert.platform}
                  </span>
                </div>

                {/* External link icon */}
                <ExternalLink
                  size={13}
                  className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

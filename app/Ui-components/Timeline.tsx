"use client";

import Image from "next/image";
import { motion } from "framer-motion";


interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "Junior Software Engineer",
    organization: "SOCByte Private Limited",
    period: "April 2025 - Present",
    icon: "/company2.png",
  },
  {
    title: "Junior Frontend Developer",
    organization: "TemplateSpace",
    period: "September 2024 - December 2024",
    icon: "/company.png",
  },
  {
    title: "Bachelor's in Software Engineering",
    organization: "University Of Karachi",
    period: "February 2022 - December 2025",
    icon: "/ku_icon.jpg",
  }
];

export default function ProfessionalTimeline() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 overflow-x-hidden px-4">
      <h2 className="text-3xl text-center mb-12 font-bold">MY TIMELINE</h2>

      <div className="relative">
        {/* Vertical glowing line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 glow-line rounded" />

        {/* Timeline items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Pulsing Dot on the line */}
              <div className="absolute left-8 top-8 w-4 h-4 bg-purple-500 rounded-full shadow-lg animate-pulse"></div>

              {/* Animated Icon container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-lg p-2 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col pt-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mb-1 text-gray-700">{item.organization}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

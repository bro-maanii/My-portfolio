"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/components/portfolio-item";
import { TabSystem } from "@/components/tab-system";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/* ── Featured project (DiaCare) ───────────────────────────────── */
const featured = {
  title:       "DiaCare — AI-Powered Diabetes Management",
  category:    "WEB DEV",
  image:       "/ProjectsImages/DiaCare_web.PNG",
  liveUrl:     "https://diabetescaresystem.vercel.app/",
  description:
    "End-to-end health management platform where users track blood glucose, manage medications, and receive AI-personalised diet and exercise plans. Built an AI chatbot and automated health report generator with Python + FastAPI, real-time glucose trend visualisations, and a 3-month longitudinal audit. Containerised with Docker and deployed on AWS.",
  tech: ["Python", "FastAPI", "React.js", "MongoDB", "Docker", "AWS"],
};

/* ── Remaining projects ────────────────────────────────────────── */
const portfolioItems = [
  {
    id: 1,
    title: "Generic Medicine Finder",
    category: "WEB DEV",
    image: "/ProjectsImages/Generic_web.PNG",
    Liveurl: "https://altmedicinefinder.vercel.app/",
    description: "Finds affordable generic alternatives and compares prices across pharmacies with a real-time Google Maps pharmacy locator.",
    tech: ["JavaScript", "MongoDB", "Node.js", "Google Maps API"],
  },
  {
    id: 2,
    title: "Photo App",
    category: "WEB DEV",
    image: "/ProjectsImages/photo_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Photo-App",
    Liveurl: "https://my-photo-app-three.vercel.app/",
    description: "AI-powered photo editing with enhancement, colorisation, and cartoonisation via Cloudinary's transformation API.",
    tech: ["React.js", "Node.js", "Cloudinary"],
  },
  {
    id: 3,
    title: "Jem Jewelers",
    category: "WEB DEV",
    image: "/ProjectsImages/Jem_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Jem-Jewllars",
    Liveurl: "https://jem-jewllars.vercel.app/",
    description: "Elegant e-commerce UI for a jewelry brand with product catalog, filtering, and responsive mobile-first layout.",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Food Restaurant UI",
    category: "WEB DEV",
    image: "/ProjectsImages/food_web.PNG",
    Codeurl: "https://github.com/bro-maanii/restaurant-app",
    Liveurl: "https://foody-world.vercel.app/",
    description: "Modern restaurant UI with menu display, ordering flow, and responsive mobile-first design.",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Travel Guide Chatbot",
    category: "AI - CHATBOT",
    image: "/ProjectsImages/PYthon1.png",
    Codeurl: "https://github.com/bro-maanii/Travel-Assisent",
    Liveurl: "https://www.linkedin.com/feed/update/urn:li:activity:7160967211212288002/",
    description: "AI travel assistant that answers destination queries, recommends itineraries, and provides travel tips in real time.",
    tech: ["Python", "Streamlit", "OpenAI"],
  },
  {
    id: 6,
    title: "Personalized AI Chatbot",
    category: "AI - CHATBOT",
    image: "/ProjectsImages/PYthon2.png",
    Codeurl: "https://github.com/bro-maanii/my-personal-assistent",
    Liveurl: "https://www.linkedin.com/feed/update/urn:li:activity:7158947486651318273/",
    description: "Custom personal assistant chatbot with context-aware responses and configurable personality settings.",
    tech: ["Python", "Streamlit", "OpenAI"],
  },
  {
    id: 7,
    title: "Hospital Home UI",
    category: "WEB DEV",
    image: "/ProjectsImages/hospital_web.PNG",
    Codeurl: "https://github.com/bro-maanii/MedCareH",
    Liveurl: "https://med-care-hospital.vercel.app/",
    description: "Clean hospital landing page with services overview, department listings, and appointment CTA.",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Animated Music Website",
    category: "WEB DEV",
    image: "/ProjectsImages/music_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Music-Academy",
    Liveurl: "https://music-academy-kappa.vercel.app/",
    description: "Music academy landing page with smooth Framer Motion animations and a course showcase section.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 9,
    title: "Photography Portfolio",
    category: "WEB DEV",
    image: "/ProjectsImages/PortfolioHTML_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Photography-web",
    Liveurl: "https://photography-orcin.vercel.app/",
    description: "Minimal, image-first photography portfolio with responsive grid layout.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "E-Commerce Shoes Website",
    category: "WEB DEV",
    image: "/ProjectsImages/Shoes_web.PNG",
    Codeurl: "https://github.com/bro-maanii/ShoesShop",
    Liveurl: "https://www.youtube.com/watch?v=pQVPVnjIKj4&t=4s",
    description: "Full e-commerce storefront for a shoe brand with product listings, cart, and checkout flow.",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered = portfolioItems.filter(
    (item) => activeTab === "ALL" || item.category === activeTab
  );

  const showFeatured = activeTab === "ALL" || activeTab === "WEB DEV";

  return (
    <section id="work" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">My Portfolio</h2>
        <div className="w-14 h-1 bg-blue-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Production-grade work across web development and AI — every project ships to real users.
        </p>
      </motion.div>

      {/* ── Featured card ───────────────────────────────────────── */}
      {showFeatured && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 overflow-hidden hover:border-purple-500/40 transition-colors shadow-sm hover:shadow-xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-[55%] h-56 sm:h-72 md:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 dark:to-black/30" />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                    Featured Project
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    {featured.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 leading-snug">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Link href={featured.liveUrl} target="_blank">
                  <Button className="gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Filter tabs ─────────────────────────────────────────── */}
      <TabSystem activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ── Project grid ────────────────────────────────────────── */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}

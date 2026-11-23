"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Accent } from "@/components/section-heading";
import { PortfolioItem } from "@/components/portfolio-item";
import { TabSystem } from "@/components/tab-system";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { BrowserFrame } from "@/components/browser-frame";

/* ── Featured project (Career Pipeline) ───────────────────────── */
const featured = {
  title:       "Career Pipeline — Job Search Tracker SaaS",
  category:    "WEB DEV",
  image:       "/ProjectsImages/CareerPipeline_web.png",
  liveUrl:     "https://career-pipeline-tan.vercel.app",
  codeUrl:     "https://github.com/bro-maanii/career-pipeline",
  description:
    "Multi-tenant job-search workspace where every account gets its own private tracker — applications, outreach contacts, interview notes, daily targets, follow-up queues, editable message templates and funnel/source reporting. Supabase Auth with owner-only Postgres row-level security, CSV/Excel import, a GSAP-animated landing page and a 22-step guided tutorial in English and Roman Urdu.",
  tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "GSAP"],
};

/* ── Remaining projects ────────────────────────────────────────── */
const portfolioItems = [
  {
    id: 13,
    title: "DiaCare — AI-Powered Diabetes Management",
    category: "WEB DEV",
    image: "/ProjectsImages/Diacare_web.png",
    Liveurl: "https://diabetescaresystem.vercel.app/",
    description: "Health platform to track blood glucose and medications, with AI-personalised diet and exercise plans, an AI chatbot and automated health reports. Dockerised and deployed on AWS.",
    tech: ["Python", "FastAPI", "React.js", "MongoDB", "Docker", "AWS"],
  },
  {
    id: 17,
    title: "OFFRAIL — Interactive 3D Fashion Store",
    category: "WEB DEV",
    image: "/ProjectsImages/Offrail_web.png",
    Liveurl: "https://offrail-beta.vercel.app/",
    description: "Immersive 3D storefront with a draggable clothing rack powered by custom cloth physics in a Web Worker — grab the fabric and garments swing realistically. Includes an illuminated shoe wall, GLB product viewer with rotate and zoom, size guide, sound and shopping bag.",
    tech: ["Next.js", "TypeScript", "Three.js", "React Three Fiber", "Web Workers"],
  },
  {
    id: 14,
    title: "QuoteSnap AI",
    category: "WEB DEV",
    image: "/ProjectsImages/QuoteSnap_web.png",
    Liveurl: "https://quotesnap-ai.onrender.com/",
    description: "AI invoicing SaaS for freelancers and small businesses — record a quick voice note in English, Urdu or Roman Urdu and get a polished, professional invoice draft to review, personalise and download as a PDF.",
    tech: ["Next.js", "TypeScript", "AI", "Speech-to-Text", "PDF Generation"],
  },
  {
    id: 15,
    title: "Roam — Travel Agency Website",
    category: "WEB DEV",
    image: "/ProjectsImages/RoamTravel_web.png",
    Codeurl: "https://github.com/bro-maanii/roam-travel-nextjs",
    Liveurl: "https://roam-travel-nextjs.vercel.app",
    description: "Editorial travel agency site with working flight, hotel, visa and car-rental search forms, destination filters, a validated contact form with email delivery, GSAP ScrollTrigger animations, full SEO and accessibility support.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Playwright"],
  },
  {
    id: 16,
    title: "ShopDash — E-Store",
    category: "WEB DEV",
    image: "/ProjectsImages/EStore_web.png",
    Codeurl: "https://github.com/bro-maanii/my-store",
    Liveurl: "https://my-store-sepia-three.vercel.app/",
    description: "Responsive product catalog and cart with real-time search, category filters, product detail dialogs, a Redux-powered cart with live totals and a wishlist view. Includes loading skeletons, retryable errors and accessible keyboard-friendly UI.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vitest"],
  },
  {
    id: 11,
    title: "AI Job Assistant",
    category: "WEB DEV",
    image: "/ProjectsImages/AiJobhelper.png",
    Liveurl: "https://ai-job-helper-sigma.vercel.app/login",
    description: "Production-ready AI SaaS that automates job applications — generates ATS-optimised resumes, cover letters, HR emails, LinkedIn messages, and job match analysis from a single master resume.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Gemini AI"],
  },
  {
    id: 1,
    title: "Generic Medicine Finder",
    category: "WEB DEV",
    image: "/ProjectsImages/Generic_web.png",
    Liveurl: "https://altmedicinefinder.vercel.app/",
    description: "Finds affordable generic alternatives and compares prices across pharmacies with a real-time Google Maps pharmacy locator.",
    tech: ["JavaScript", "MongoDB", "Node.js", "Google Maps API"],
  },
  {
    id: 12,
    title: "Lumen Studio — Creative Agency Site",
    category: "WEB DEV",
    image: "/ProjectsImages/LumenStudio_web.png",
    Liveurl: "https://creative-digital-agency-website.vercel.app/",
    description: "Motion-led agency site with 8 sections, each on a different compositional pattern — scroll-driven timelines, clip-path reveals and pointer parallax. All 12 artwork files are hand-generated SVG geometry: zero external images.",
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind v4", "GSAP"],
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
    title: "Harmonia",
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

  const counts = {
    ALL: portfolioItems.length,
    "WEB DEV": portfolioItems.filter((p) => p.category === "WEB DEV").length,
    "AI - CHATBOT": portfolioItems.filter((p) => p.category === "AI - CHATBOT").length,
  };

  return (
    <section id="work" className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <SectionHeading
        label="Selected work"
        title={<>Things I&apos;ve <Accent>shipped</Accent></>}
        description="Production work across web and AI. Most of these are live; open one and click around."
      />

      {/* ── Featured card ───────────────────────────────────────── */}
      {showFeatured && (
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group mb-14 spotlight bg-card border border-border rounded-3xl shadow-lifted p-3 sm:p-4 grid lg:grid-cols-12 gap-6 lg:gap-10 overflow-hidden"
        >
          {/* Screenshot on a warm stage */}
          <div className="lg:col-span-7 relative rounded-2xl bg-gradient-to-br from-primary/25 via-secondary to-secondary p-4 sm:p-8 overflow-hidden">
            <BrowserFrame url={featured.liveUrl} className="shadow-lifted aspect-[16/10] bg-background">
              <Image
                src={featured.image}
                alt={`Screenshot of ${featured.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
            </BrowserFrame>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 flex flex-col justify-center px-3 pb-4 lg:px-0 lg:pr-6 lg:py-6">
            <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] text-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Featured project
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05] mb-4">
              {featured.title.split(" — ")[0]}
              <span className="block font-serif italic font-normal text-2xl sm:text-3xl text-muted-foreground tracking-normal mt-1">
                {featured.title.split(" — ")[1]}
              </span>
            </h3>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-[56ch]">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border bg-secondary/60 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href={featured.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] hover:brightness-110"
              >
                Open live site
                <ArrowUpRight size={15} />
              </Link>
              <Link
                href={featured.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={15} />
                View source
              </Link>
            </div>
          </div>
        </motion.article>
      )}

      {/* ── Filter tabs ─────────────────────────────────────────── */}
      <TabSystem activeTab={activeTab} setActiveTab={setActiveTab} counts={counts} />

      {/* ── Project grid ────────────────────────────────────────── */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence>
          {filtered.map((item, i) => (
            <PortfolioItem key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}

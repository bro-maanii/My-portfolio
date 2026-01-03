"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/components/portfolio-item";
import { TabSystem } from "@/components/tab-system";

const portfolioItems = [
  {
    id: 12,
    title: " DiaCare AI-Powered Diabetes Management System",
    category: "WEB DEV",
    image: "/ProjectsImages/DiaCare_web.PNG",
    Liveurl: "https://diabetescaresystem.vercel.app/",
  },
  {
    id: 22,
    title: "Generic Medicine Finder",
    category: "WEB DEV",
    image: "/ProjectsImages/Generic_web.PNG",
    Liveurl: "https://altmedicinefinder.vercel.app/",
  },
  {
    id: 1,
    title: "Photo App",
    category: "WEB DEV",
    image: "/ProjectsImages/photo_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Photo-App",
    Liveurl: "https://my-photo-app-three.vercel.app/",
  },
  {
    id: 2,
    title: "Jem Jewllars",
    category: "WEB DEV",
    image: "/ProjectsImages/Jem_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Jem-Jewllars",
    Liveurl: "https://jem-jewllars.vercel.app/",
  },
  {
    id: 3,
    title: "Food Restaurent UI",
    category: "WEB DEV",
    image: "/ProjectsImages/food_web.PNG",
    Codeurl: "https://github.com/bro-maanii/restaurant-app",
    Liveurl: "https://foody-world.vercel.app/",
  },
  {
    id: 4,
    title: "Travel Guide",
    category: "AI - CHATBOT",
    image: "/ProjectsImages/PYthon1.png",
    Codeurl: "https://github.com/bro-maanii/Travel-Assisent",
    Liveurl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7160967211212288002/",
  },
  {
    id: 5,
    title: "My Personalize Chatbot",
    category: "AI - CHATBOT",
    image: "/ProjectsImages/PYthon2.png",
    Codeurl: "https://github.com/bro-maanii/my-personal-assistent",
    Liveurl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7158947486651318273/",
  },
  {
    id: 6,
    title: "Hospital Home UI",
    category: "WEB DEV",
    image: "/ProjectsImages/hospital_web.PNG",
    Codeurl: "https://github.com/bro-maanii/MedCareH",
    Liveurl: "https://med-care-hospital.vercel.app/",
  },
  {
    id: 7,
    title: "Animated Music Website",
    category: "WEB DEV",
    image: "/ProjectsImages/music_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Music-Academy",
    Liveurl: "https://music-academy-kappa.vercel.app/",
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "WEB DEV",
    image: "/ProjectsImages/PortfolioHTML_web.PNG",
    Codeurl: "https://github.com/bro-maanii/Photography-web",
    Liveurl: "https://photography-orcin.vercel.app/",
  },
  {
    id: 9,
    title: "E-commerce Shoes Website",
    category: "WEB DEV",
    image: "/ProjectsImages/Shoes_web.PNG",
    Codeurl: "https://github.com/bro-maanii/ShoesShop",
    Liveurl: "https://www.youtube.com/watch?v=pQVPVnjIKj4&t=4s",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredItems = portfolioItems.filter(
    (item) => activeTab === "ALL" || item.category === activeTab
  );

  return (
    <div
      className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      id="work"
    >
      <h1 className="text-center text-4xl font-bold pt-6 sm:py-2 underline decoration-blue-500">
        My Portfolio
      </h1>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Explore some of my{" "}
        <span className="font-semibold text-blue-500">featured projects</span>.
        Click on a project card to view the{" "}
        <span className="font-semibold">live demo</span> or check the{" "}
        <span className="font-semibold">code repository</span>.
      </p>

      <TabSystem activeTab={activeTab} setActiveTab={setActiveTab} />
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

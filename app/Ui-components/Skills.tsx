import React from "react";
import InfiniteMovingCards from "@/components/SkillShow";

export default function SkillsSection() {
//   const skills = [
//     { name: "JavaScript"},
//     { name: "TypeScript" },
//     { name: "Next.js" },
//     { name: "UI/UX Design" },
//     { name: "Framer Motion & CSS Animations" },
//   ];
    const skills=[
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "JavaScript"
        },
        {
            name: "TypeScript"
        },
        {
            name: "Next JS"
        },
        {
            name:"React JS"
        },
        {
            name:"TailWind CSS"
        },
        {
            name : "BootStrap"
        },
        {
            name:"Redux Toolkit"
        },
        {
            name:"Material UI"
        },
        {
            name:"WebFlow"
        }
    ]

    const skill2 = [
        {name:"Redux"},
        {name : "Saniity"},
        {name:"Node JS"},
        {name:"Express JS"},
        {name:"Python"},
        {name:"FastAPI"},
        {name:"Streamlit"},
        {name:"OpenAI & DeepSeek"},
        {name:"GPT-3.5 & GPT-4"},
        { name: "Framer Motion & CSS Animations" },
        {name:"MongoDB"},            // added
    {name:"REST API"},           // added
    {name:"JWT & Auth"}    
    ];


  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <h2 className="text-3xl text-center mb-6">My Skills</h2>
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="normal"
        pauseOnHover={true}
      />
      <InfiniteMovingCards
        items={skill2}
        direction="left"
        speed="normal"
        pauseOnHover={true}
      />
    </section>
  );
}

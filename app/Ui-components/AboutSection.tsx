"use client"
import HoverEffect from "@/components/card-hover-effect"
import React from "react"

function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 overflow-x-hidden" id="about">
      <h1 className="flex justify-center align-middle text-4xl font-bold py-6 underline sm:py-12">
        About Me
      </h1>

      <div className="lg:grid grid-cols-2 sm:gap-4 space-y-11 lg:space-y-0">
        {/* Text */}
        <div>
          <p className="pb-4 px-2 text-lg font-medium leading-relaxed">
            I&apos;m{" "}
            <strong className="text-xl px-2 font-bold">
              Eman Ali Abbasi
            </strong>
            , a Software Engineer with hands-on experience in frontend and
            full-stack web development. I am currently working as a Junior
            Software Engineer at SOCByte, contributing to real-world,
            production-grade platforms.
          </p>

          <p className="pb-4 px-2 text-lg font-medium leading-relaxed">
            My core expertise lies in building scalable, high-performance web
            applications using React.js, Next.js, TypeScript, Tailwind CSS, and
            the MERN stack. I focus strongly on clean UI architecture,
            performance optimization, and writing maintainable, reusable code.
          </p>

          <p className="pb-4 px-2 text-lg font-medium leading-relaxed">
            I have worked on complete product UIs, API integrations, and backend
            modules, collaborating closely with teams to deliver reliable and
            efficient solutions. I enjoy solving real engineering problems and
            continuously improving the quality of the systems I build.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-7 mt-0">
          <HoverEffect items={items} />
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    title: "Production Systems",
    description:
      "Worked on real-world platforms with complete frontend ownership and backend integration in a professional environment.",
  },
  {
    title: "10+ Projects",
    description:
      "Delivered multiple academic and professional projects focused on scalability, UI quality, and real-world use cases.",
  },
  {
    title: "Industry Experience",
    description:
      "Hands-on experience working in a collaborative software engineering team building production-ready applications.",
  },
  {
    title: "Strong Tech Stack",
    description:
      "React.js, Next.js, TypeScript, Tailwind CSS, Node.js, MERN Stack, Git, and modern development workflows.",
  },
]

export default AboutSection

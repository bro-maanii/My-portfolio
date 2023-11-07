import React from 'react'
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

function Section1() {
  return (
    <>
    <h1 className="flex justify-center align-middle text-4xl font-bold py-6 underline sm:py-12 ">About Me</h1>
    <div className="lg:grid grid-cols-2 sm:gap-4 space-y-11 lg:space-y-4  ">
      {/* text */}
      <div className="">
        <p className="pb-7 px-2 text-lg font-medium">
          I&apos;m <strong className="text-xl px-2 font-bold">Eman Ali Abbasi </strong> from Karachi, also known as the City of Light. A
          Second-year Software Engineering student at the University of
          Karachi -UBIT, I thrive on challenges across diverse domains.
        </p>
        <p className="pb-7 px-2 text-lg font-medium">
          Focused on web dev and blockchain, adept at dynamic sites and
          decentralized systems. Portfolio highlights innovation, while
          continuous learning fuels impactful tech contributions. Reach out
          anytime for assistance or inquiries!
        </p>
        <a href="/Cv/cv resume.pdf" download={"My-CV"} >
        <Button
          variant="ghost"
          className="flex justify-center font-semibold hover:bg-blue-600  rounded-full border-2 border-blue-600 delay-500 duration-300 pr-0 "
        >
          Download Resume
          <span className="rounded-full bg-blue-600 ml-3 p-2">
            
            <DownloadIcon />
          </span>
        </Button>
        </a>
      </div>
      {/* 4boxes */}
      <div className="grid grid-cols-2 gap-7">
        <div className="transform h-32 hover:scale-110 duration-500 hover:shadow-md  bg-stone-100 shadow-sm   shadow-black dark:shadow-white dark:bg-slate-700">
          <span className="text-xl text-red-500 dark:text-blue-500 font-extrabold ">600+</span>
          <p className="text-sm sm:text-base pl-3 sm:pl-8 pt-3 italic">LINES OF CODE</p>
        </div>
        <div className="transform h-32 hover:scale-110 duration-500 hover:shadow-md  bg-stone-100 shadow-sm  shadow-black dark:shadow-white dark:bg-slate-700">
          <span className="text-xl text-red-500 dark:text-blue-500  font-extrabold ">3+</span>
          <p className="text-sm sm:text-base pl-3 sm:pl-8 pt-3 italic">PROJECTS</p>
        </div>
        <div className="
      transform h-32 hover:scale-110 duration-500 hover:shadow-md  bg-stone-100 shadow-sm  shadow-black dark:shadow-white dark:bg-slate-700">
          <span className="text-xl text-red-500 dark:text-blue-500  font-extrabold ">2+</span>
          <p className="text-sm sm:text-base pl-3 sm:pl-8 pt-3 italic">MONTHS OF EXPERIENCE</p>

        </div>
        <div className="transform h-32 hover:scale-110 duration-500 hover:shadow-md  bg-stone-100 shadow-sm   shadow-black dark:shadow-white dark:bg-slate-700">
          <span className="text-xl text-red-500 dark:text-blue-500  font-extrabold ">6+</span>
          <p className="text-sm sm:text-base pl-3 sm:pl-8 pt-3 italic">PROFESSIONAL CERTIFICATIONS EARNED</p>
        </div>
      </div>
    </div></>
  )
}

export default Section1
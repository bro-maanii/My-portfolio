"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { Vortex } from "@/components/BackgroundBean"
import p1 from "@/public/p1.png"
import Typeeffect from "@/components/Type-effect"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <div className="w-full h-full overflow-hidden relative" id="home">
      <Vortex
        backgroundColor={theme === "dark" ? "black" : "white"}
        rangeY={800}
        particleCount={350} // Optimized particle count for performance
        baseHue={theme === "dark" ? 220 : 180}
        className=" flex items-center justify-center w-full px-4 md:px-10 md:pt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <p className="text-md">
              Hi 👋, I&apos;m <strong className="text-xl sm:text-2xl text-ellipsis ">EMAN ALI ABBASI</strong>
            </p>
            <Typeeffect />
            <p className="lg:text-lg sm:text-lg md:text-base font-extralight py-2 sm:py-4">
              I&apos;m eager to apply my passion for frontend development and
              learn the ropes of crafting innovative solutions that utilize the
              latest technologies to create impactful outcomes.
            </p>
            <p className="text-sm font-light py-1">Let&apos;s build together!</p>
            <a href="/CV/Eman-webDev.pdf" download="EmanAliAbbasi-CV">
              <Button className="my-2 "> <DownloadIcon/> Download CV</Button>
            </a>
          </div>
          <div className="w-3/5 sm:w-1/2 order-1 md:order-2 pt-4">
            <div className="relative aspect-square max-w-md mx-auto dark:bg-none color-bg rounded-full p-4">
              <Image
                src={p1}
                alt="Platform Preview"
                fill
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  )
}

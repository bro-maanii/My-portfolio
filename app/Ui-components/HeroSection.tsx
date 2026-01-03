"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Vortex } from "@/components/BackgroundBean";
import p1 from "@/public/p1.png";
import Typeeffect from "@/components/Type-effect";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Linkedin } from "lucide-react"
import Link from "next/link";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-svh relative overflow-x-hidden" id="home">
      <Vortex
        backgroundColor={theme === "dark" ? "black" : "white"}
        rangeY={800}
        particleCount={350}
        baseHue={theme === "dark" ? 220 : 180}
        className="flex items-center justify-center w-full h-svh px-2 sm:px-4 md:px-10 md:pt-10 overflow-x-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-8 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 overflow-x-hidden">
          {/* Text Section */}
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left min-w-0">
            <p className="text-sm sm:text-md tracking-wide break-words">
              Hi 👋, I&apos;m{" "}
              <strong className="text-lg sm:text-xl md:text-2xl break-words">EMAN ALI ABBASI</strong>
            </p>

            <Typeeffect />

            <p className="text-xs sm:text-sm font-light tracking-wide mt-2 break-words">
              Building production-ready web applications used in real-world
              platforms.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-extralight py-2 sm:py-3 md:py-5 leading-relaxed break-words">
              Software Engineer with hands-on experience in building scalable,
              production-ready web applications. Currently working as a Junior
              Software Engineer at SOCByte, delivering high-quality frontend
              solutions and collaborating on backend systems for real-world
              platforms.
            </p>

            <p className="text-xs sm:text-sm font-light py-1 tracking-wide break-words">
              React.js • Next.js • TypeScript • Tailwind CSS • Node.js • MERN
              Stack
            </p>

            <p className="text-xs sm:text-sm font-light py-1 break-words">
              Focused on clean architecture, performance optimization, and
              maintainable code.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <a href="/CV/Eman-webDev.pdf" download="EmanAliAbbasi-CV">
              <Button className="text-xs sm:text-sm px-2 sm:px-3 flex gap-1 sm:gap-2">
                <DownloadIcon size={16} className="sm:w-[18px] sm:h-[18px]" /> <span className="whitespace-nowrap">Download CV</span>
              </Button>
            </a>

            <Link
              href="https://www.linkedin.com/in/emanaliabbasi-softwareengineer/"
              target="_blank"
            >
              <Button className="text-xs sm:text-sm px-2 sm:px-3 flex gap-1 sm:gap-2">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" /> <span className="whitespace-nowrap">Let&apos;s Connect</span>
              </Button>
            </Link>
          </div>
          </div>

          {/* Image Section */}
          <div className="w-2/3 sm:w-3/5 md:w-1/2 order-1 md:order-2 pt-2 md:pt-4 min-w-0">
            <div className="relative aspect-square max-w-[200px] sm:max-w-md mx-auto dark:bg-none color-bg rounded-full p-2 sm:p-4">
              <Image
                src={p1}
                alt="Eman Ali Abbasi – Software Engineer"
                fill
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

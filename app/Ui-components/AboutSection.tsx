import HoverEffect from "@/components/card-hover-effect";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6" id="about">
      <h1 className="flex justify-center align-middle text-4xl font-bold py-6 underline sm:py-12 ">
        About Me
      </h1>
      <div className="lg:grid grid-cols-2 sm:gap-4 space-y-11 lg:space-y-0  ">
        {/* text */}
        <div className="">
          <p className="pb-4 px-2 text-lg font-medium">
            I&apos;m{" "}
            <strong className="text-xl px-2 font-bold">Eman Ali Abbasi</strong>,
            a passionate Final-year Software Engineering student at the
            University of Karachi - UBIT, specializing in Web Development and
            AI-powered solutions.
          </p>
          <p className="pb-4 px-2 text-lg font-medium">
            With expertise in HTML, CSS, JavaScript/TypeScript, React.js,
            Next.js, and OpenAI, I love crafting innovative applications. My
            portfolio features projects like a Photo Editing App and a Music
            Academy platform and Personalized Chatbot, reflecting my creativity
            and technical skills.
          </p>
          <p className="pb-4 px-2 text-lg font-medium">
            Currently, I&apos;m m exploring AI-driven web applications and eager
            to contribute to impactful tech solutions. Feel free to connect for
            collaborations, queries, or just tech discussions!
          </p>

          <div>
            <a href="/CV/Eman-webDev.pdf" download="EmanAliAbbasi-CV">
            <Button className="m-2 px-2" >
              {" "}
              <DownloadIcon /> Download CV
            </Button>
            </a>
            <Link href="https://www.linkedin.com/in/emanaliabbasi-softwareengineer/" target="_blank">
              <Button className="m-2 px-2">
                {" "}
                <Linkedin /> Let&apos;s Connect
              </Button>
            </Link>
          </div>
        </div>
        {/* 4boxes */}
        <div className="grid sm:grid-cols-2 gap-7 mt-0">
          <HoverEffect items={items} />
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "1000+ ",
    description:
      "Lines of code written and optimized, each line a testament to my commitment to quality and efficiency.",
  },
  {
    title: "10+",
    description:
      "Projects delivered with precision and creativity, each one a testament to problem-solving excellence.",
  },
  {
    title: "1 year",
    description:
      "A year of dynamic, hands-on experience driving impactful change and technical mastery.",
  },
  {
    title: "6+",
    description:
      "Industry-recognized certifications earned through dedication and continuous learning.",
  },
];

export default AboutSection;

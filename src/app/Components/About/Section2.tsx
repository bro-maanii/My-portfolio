"use client";
import React from "react";
import ProgressDemo from "@/components/Progress";
import HtmlIcon from "@/components/ui/icons/Skill_Icons/Html";
import Css from "@/components/ui/icons/Skill_Icons/Css";
import JS from "@/components/ui/icons/Skill_Icons/JS";
import TS from "@/components/ui/icons/Skill_Icons/TS";
import Bootstrap from "@/components/ui/icons/Skill_Icons/Bootstrap";
import Tailwind from "@/components/ui/icons/Skill_Icons/Tailwind";
import ReactIcon from "@/components/ui/icons/Skill_Icons/React";
import Reveal from "@/components/Reveal";
import Nextjs from "@/components/ui/icons/Skill_Icons/Nextjs";
import OpenAI from "@/components/ui/icons/Skill_Icons/OpenAI";
import Python from "@/components/ui/icons/Skill_Icons/Python";

function Section2() {
  return (
    <Reveal>
      <>
        <h1 className="flex justify-center align-middle text-4xl font-bold mt-12">
          MY SKILLS{" "}
        </h1>
        <div className="pt-9 md:grid grid-cols-2 gap-4 ">
          <ProgressDemo componentProp={<HtmlIcon />} Percent={80} />
          <ProgressDemo componentProp={<Css />} Percent={75} />
          <ProgressDemo componentProp={<JS />} Percent={75} />
          <ProgressDemo componentProp={<TS />} Percent={75} />
          <ProgressDemo componentProp={<Bootstrap />} Percent={80} />
          <ProgressDemo componentProp={<Tailwind />} Percent={80} />
          <ProgressDemo componentProp={<Nextjs />} Percent={75} />
          <ProgressDemo componentProp={<ReactIcon />} Percent={60} />
          <ProgressDemo componentProp={<Python />} Percent={70} />
          <ProgressDemo componentProp={<OpenAI />} Percent={80} />
        </div>
      </>
    </Reveal>
  );
}

export default Section2;

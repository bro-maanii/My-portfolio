"use client"
import React from 'react'
import  ProgressDemo  from "@/components/Progress";
import HtmlIcon from "@/components/ui/icons/Skill_Icons/Html";
import Css from "@/components/ui/icons/Skill_Icons/Css";
import JS from "@/components/ui/icons/Skill_Icons/JS";
import TS from "@/components/ui/icons/Skill_Icons/TS";
import Bootstrap from "@/components/ui/icons/Skill_Icons/Bootstrap";
import Tailwind from "@/components/ui/icons/Skill_Icons/Tailwind";
import ReactIcon from "@/components/ui/icons/Skill_Icons/React";


function Section2() {
  return (
    <>
    <h1 className="flex justify-center align-middle text-4xl font-bold pt-9">MY SKILLS </h1>
      <div className="pt-9 md:grid grid-cols-2 gap-4 ">
        <ProgressDemo componentProp={<HtmlIcon/>}  Percent={80}/>
        <ProgressDemo componentProp={<Css/>}  Percent={75}/>
        <ProgressDemo componentProp={<JS/>}  Percent={60}/>
        <ProgressDemo componentProp={<TS/>}  Percent={75}/>
        <ProgressDemo componentProp={<Bootstrap/>}  Percent={65}/>
        <ProgressDemo componentProp={<Tailwind/>}  Percent={75}/>
        <ProgressDemo componentProp={<ReactIcon/>}  Percent={30}/>
        {/* <ProgressDemo SkillName="Nextjs" Percent={40}/> */}
      </div>
    
    </>
  )
}

export default Section2
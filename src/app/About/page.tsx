"use client"
import React from "react";
import Link from "next/link";
import Section1 from "../Components/About/Section1";
import Section2 from "../Components/About/Section2";



function page() {
  return (
    <>
    <div className="flex flex-col gap-5">
      {/* About Me  */}
      <div>
        <Section1/>
      </div>
      {/* Skills */}
      <div className="pb-6 md:pb-24">
        <Section2/>
      </div>
    </div>
    
    </>
  );
}

export default page;

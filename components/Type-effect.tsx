"use client"
import React from "react"
import Typewriter from "typewriter-effect"

function Typeeffect() {
  return (
    <div className="text-xl font-bold font-mono">
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Frontend Specialist",
            "React & Next.js Developer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          delay: 80
        }}
      />
    </div>
  )
}

export default Typeeffect

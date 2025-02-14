"use client"
import React from 'react'
import Typewriter from "typewriter-effect";

function Typeeffect() {
  return (
    <div className='text-xl font-bold font-mono '>
      <Typewriter
        options={
          {strings:[
            "Frontend Web Developer",
            "Nextjs Developer",
            "Software Engineer"
          ],
          autoStart:true,
          loop:true,
          deleteSpeed:50,
          delay:200
          }
        }

      />
    </div>
  )
}

export default Typeeffect
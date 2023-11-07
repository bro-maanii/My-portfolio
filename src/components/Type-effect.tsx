"use client"
import React from 'react'
import Typewriter from "typewriter-effect";

function Typeeffect() {
  return (
    <div className='text-2xl font-bold font-mono '>
      <Typewriter
        options={
          {strings:[
            "Frontend Web Developer",
            "Node.js Developer",
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
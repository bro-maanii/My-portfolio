import Typeeffect from '@/components/Type-effect'
import React from 'react'
import Image from 'next/image'
import p1 from '../../../../public/p1.png'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { DownloadIcon, Facebook, Instagram, LinkedinIcon, MailIcon, PhoneCall, TwitterIcon } from 'lucide-react'


function HeroSection() {
  return (
    <div className='px-[3%] py-3 flex flex-col md:flex-row justify-center place-items-center gap-10 '>
        {/* Image */}
        <div className='bg-red-400  dark:bg-blue-500  lg:w-2/6 md:w-3/6 w-3/5 mb-10 object-cover object-center rounded-full ' >
        <Image src={p1} alt='product' className='flex align-middle rotate-0  rounded-full justify-between h-full w-full '/>
        </div>

        {/* Text */}
        <div className=' flex-1'>
            <p className='lg:text-xl md:text-lg sm:text-xl'>Hi, I'm <strong>EMAN ALI ABBASI</strong></p>
            {/* type effect */}
            <Typeeffect/>
            {/*  */}
            <p className='lg:text-lg sm:text-lg md:text-base font-extralight italic py-8'>I'm eager to apply my passion for frontend development and learn the ropes in crafting innovative solutions that utilize the latest technologies to create impactful outcomes.</p>
            <p className='text-sm font-light py-8'>Let build Together</p>
            {/* download CV button */}
            <a href="/Cv/cv resume.pdf" download={"My-CV"} >
            <Button variant="ghost" className="flex justify-center font-semibold hover:bg-blue-600  rounded-full border-2 border-blue-600 delay-500 duration-300 pr-0">
                    Download Resume <span className='rounded-full bg-blue-600 ml-3 p-2'> <DownloadIcon/> </span>
                </Button>
            </a>
            {/* social media links */}
            <div className='flex flex-wrap gap-2 py-10'>
            <Link href="https://www.linkedin.com/in/eman-ali-abbasi-937932237/" target='_blank'>
                <Button variant="ghost" className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-2xl ">
                    <LinkedinIcon/>
                </Button>
            </Link>
           
            
            <Link href="https://www.instagram.com/maani__31/" target='_blank'>
                <Button variant="ghost" className="flex justify-end rounded-full p-3  bg-red-500 hover:bg-red-600 hover:shadow-xl">
                    <Instagram/>
                </Button>
            </Link>
            <Link href="https://www.facebook.com/eman.aliabbasi.5" target='_blank'>
                <Button variant="ghost" className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-xl">
                    <Facebook/>
                </Button>
            </Link>
            <Link href={`tel:${+92-3062662261}`} >
                <Button variant="ghost" className="flex justify-end rounded-full p-3  bg-green-600 hover:bg-green-700 hover:shadow-xl">
                    <PhoneCall/>
                </Button>
            </Link>
            <Link href="/">
                <Button variant="ghost" className="flex justify-end rounded-full p-3 bg-blue-600 hover:bg-blue-700 hover:shadow-xl">
                    <TwitterIcon/>
                </Button>
            </Link>
            <Link href="mailto:alie15425@gmail.com" >
                <Button  variant="ghost" className="flex justify-end rounded-full p-3 bg-slate-300 hover:bg-slate-400 hover:shadow-xl">
                    <MailIcon/>
                </Button>
            </Link>
            </div>
            
        </div>
        
    </div>
  )
}

export default HeroSection
import React from 'react'
import Image, {StaticImageData} from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Project_view(props:{title:string,decrption:string,img:StaticImageData,LiveURL:string, codeURL:string}) {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="flex relative lg:h-72">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover  bg-cover border-4 dark:border-blue-500 border-blue-200"
                  src={props.img}
                />
                <div className="cursor-pointer px-7 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  {props.title}
                  </h2>
                  <p className="leading-[26px] line-clamp-2 md:pb-2 text-xs italic">
                  {props.decrption}
                  </p>
                  <div className='pb-1 '>
                    <Link href={props.LiveURL} target='_blank'>
                      <Button variant="ghost" className="px-1 flex justify-center h-8 w-24 bg-red-400       hover:bg-red-500 dark:bg-blue-500 dark:hover:bg-blue-600">Live Demo 
                      </Button>
                    </Link>
                  </div>
                  <Link href={props.codeURL} target='_blank'>
                      <Button variant="ghost" className="px-1 flex justify-center h-8 w-24 bg-red-400 hover:bg-red-500 dark:bg-blue-500 dark:hover:bg-blue-600">View Code 
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
  )
}

export default Project_view
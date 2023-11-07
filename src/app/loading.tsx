import { LoaderIcon } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <>
    <section className='flex flex-col justify-center align-middle '>
      <div className='flex justify-center align-middle text-4xl pb-6 lg:text-9xl'>loading...</div>
      <div className='flex justify-center align-middle text-xl lg:text-4xl'> Please Wait  </div>
    </section>
    </>
  )
}

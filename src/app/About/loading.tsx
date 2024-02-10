import React from 'react'
import {Spinner} from "@nextui-org/react";

export default function Loading() {
  return (
    <>
    <section className='flex flex-row justify-center align-middle '>
      <Spinner className='flex justify-center align-middle' color="success" size="lg" />
      <div className='flex justify-center align-middle '>loading...</div>
      <div className='flex justify-center align-middle'> Please Wait  </div>
    </section>
    </>
  )
}

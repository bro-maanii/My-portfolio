import React from 'react'
import { LanguagesIcon, Mail, PhoneCallIcon } from 'lucide-react'

function Section3() {
  return (
    <div>
            <div className='flex flex-col  pb-12'>
                <h1 className='flex justify-center text-4xl font-bold p-6'>Contact Me</h1>
                <p className='flex justify-center text-lg opacity-75'>For any questions or inquiries about my Services, Please don't hesitate to reach out to me. I'd be happy to assist you.</p>
            </div>
            <div className='flex flex-wrap gap-4 justify-center align-middle pb-12'>
                <div className='flex flex-1 gap-3 '>
                    <div className='bg-red-500 dark:bg-blue-500 p-2'><PhoneCallIcon/></div>
                    <div>
                        <h1 className="text-xl font-semibold">Phone</h1>
                        <p  className='p-1'>+92-3062662261</p>
                    </div>
                </div>
                <div  className='flex flex-1 gap-3'>
                    <div className='bg-red-500 dark:bg-blue-500 p-2'><Mail/></div>
                    <div><h1 className="text-xl font-semibold">Email</h1>
                    <p className='p-1'>alie15425@gmail.com</p></div>
                </div>
                <div className='flex flex-1 gap-3'>
                    <div className='bg-red-500 dark:bg-blue-500 p-2'><LanguagesIcon/></div>
                    <div><h1 className="text-xl font-semibold">Language</h1>
                    <p className='p-1'>English,Hindi,Urdu</p></div>
                </div>
                
            </div>
        </div>
  )
}

export default Section3
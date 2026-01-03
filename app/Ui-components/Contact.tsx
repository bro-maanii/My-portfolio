import ContactForm from '@/components/ContactMe'
import { FloatingDockDemo } from '@/components/IconContact'
import React from 'react'

function Contact() {
  return (
    <div id='contact' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 overflow-x-hidden">
        <h1 className="text-4xl text-center font-bold text-center">
            Contact Me
      </h1>
        <h2 className="text-lg text-center font-bold text-center">
            Feel free to reach out to me on any of the following platforms.
        </h2>
      <FloatingDockDemo />
      <ContactForm />
      <div className="w-full overflow-x-hidden max-w-full px-4 sm:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6674637859223!2d67.36152222517494!3d24.87520459466782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3333bdf4e78d1%3A0x6f0ab2256269e86!2sL%206%20Market%2C%20Phase%202%20Gulshan%20e%20Hadeed%20Phase%202%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075010%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695046282505!5m2!1sen!2s"
          className="w-full max-w-full"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Contact
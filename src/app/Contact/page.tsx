import React from "react";
import Contact from "../Components/Contact/Contact";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  LinkedinIcon,
  MailIcon,
  PhoneCall,
  TwitterIcon,
} from "lucide-react";
import Section3 from "../Components/Contact/Section3";

function page() {
  return (
    <div className="sm:pl-[6%]">
      {/* text */}
      <Section3 />
      {/* social media links */}
      <div className="flex flex-wrap gap-2 py-10">
        <Link
          href="https://www.linkedin.com/in/eman-ali-abbasi-937932237/"
          target="_blank"
        >
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-2xl "
          >
            <LinkedinIcon />
          </Button>
        </Link>

        <Link href="https://www.instagram.com/maani__31/" target="_blank">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-red-500 hover:bg-red-600 hover:shadow-xl"
          >
            <Instagram />
          </Button>
        </Link>
        <Link href="https://www.facebook.com/eman.aliabbasi.5" target="_blank">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
          >
            <Facebook />
          </Button>
        </Link>
        <Link href={`tel:${+92 - 3062662261}`}>
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-green-600 hover:bg-green-700 hover:shadow-xl"
          >
            <PhoneCall />
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3 bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
          >
            <TwitterIcon />
          </Button>
        </Link>
        <Link href="mailto:alie15425@gmail.com">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3 bg-slate-300 hover:bg-slate-400 hover:shadow-xl"
          >
            <MailIcon />
          </Button>
        </Link>
      </div>
      <div className="">
        <Contact />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6674637859223!2d67.36152222517494!3d24.87520459466782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3333bdf4e78d1%3A0x6f0ab2256269e86!2sL%206%20Market%2C%20Phase%202%20Gulshan%20e%20Hadeed%20Phase%202%20Bin%20Qasim%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075010%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695046282505!5m2!1sen!2s"
          className="w-full"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default page;

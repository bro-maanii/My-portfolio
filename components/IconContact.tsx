import React from "react";

import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconRecordMail,

} from "@tabler/icons-react";

import { FloatingDock } from "./floating-dock";


export function FloatingDockDemo() {
  const links = [
    {
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedin className="h-full w-full text-blue-900 " />
        ),
        href: "https://www.linkedin.com/in/emanaliabbasi-softwareengineer/",
    },
    {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 " />
        ),
        href: "https://github.com/bro-maanii",
    },
    {
        title:"Instagram",
        icon: (
            <IconBrandInstagram className="h-full w-full text-red-500 " />
        ),
        href: "https://www.instagram.com/maani__31/",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-blue-500 " />
      ),
      href: "https://www.facebook.com/eman.aliabbasi.5",
    },
    {
        title:"Email",
        icon:(
            <IconRecordMail className="h-full w-full text-pink-500 " />
        ),
        href: "mailto:emanaliabbasi31@gmail.com",
    },
    {
        title:"Whatsapp",
        icon:(
            <IconBrandWhatsapp className="h-full w-full  text-green-500 " />
        ),
        href: "https://wa.me/923062662261",
    }
    
  ];
  return (
    <div className="flex items-center justify-center h-auto my-6 w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />

    </div>
  );
}

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import Reveal from "@/components/Reveal";

function Contact() {
  return (
    <Reveal>
      <form
        action="https://formspree.io/f/xvojqwdp"
        method="POST"
        className="pb-8"
      >
        <div className="grid grid-flow-col gap-10 py-4">
          <div className="">
            <label htmlFor="name" className="font-semibold text-lg font-mono">
              Name
            </label>
            <Input
              type="text"
              placeholder="Enter your Name"
              id="name"
              name="name"
              className="border-2  border-opacity-100  "
              required
            />
          </div>
          <div className="">
            <label htmlFor="email" className="font-semibold text-lg font-mono">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your Email"
              id="email"
              name="email"
              className="border-2  border-opacity-100  "
              required
            />
          </div>
        </div>
        <div className="py-4">
          <label htmlFor="subject" className="font-semibold text-lg font-mono">
            Subject
          </label>
          <Input
            type="text"
            placeholder="Enter your Name"
            id="subject"
            name="subject"
            className="border-2  border-opacity-100  "
            required
          />
        </div>
        <div className="py-4">
          <label htmlFor="message" className="font-semibold text-lg font-mono">
            Message
          </label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            name="message"
            className="border-2  border-opacity-100  "
            required
          />
        </div>
        <div className="py-2 flex justify-center">
          <Button
            variant="ghost"
            type="submit"
            className=" bg-red-500 text-lg font-bold hover:bg-red-600 dark:hover:hover:bg-blue-600 dark:bg-blue-600"
          >
            Submit
          </Button>
        </div>
      </form>
    </Reveal>
  );
}

export default Contact;

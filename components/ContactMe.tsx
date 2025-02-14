"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/xvojqwdp" method="POST" className="mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-7xl  sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="sm:flex sm:space-x-4 space-y-6 sm:space-y-0">
          <div className="w-full sm:w-1/2 space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input type="text" name="name" id="name" placeholder="Your name" required className="w-full" />
          </div>
          <div className="w-full sm:w-1/2 space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input id="email" type="email" name="email" placeholder="Your email" required className="w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Subject
          </Label>
          <Input id="subject" type="text" name="subject" placeholder="Subject" required className="w-full" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="w-full min-h-[120px] sm:min-h-[150px]"
          />
        </div>
        <Button type="submit" onClick={(e) => {
          e.preventDefault();
          const form = (e.target as HTMLElement).closest('form');
          if (form) {
            form.submit();
            form.reset();
          }
        }} className="w-full sm:w-auto px-6 py-2">
          Submit
        </Button>
      </div>
    </form>
  )
}


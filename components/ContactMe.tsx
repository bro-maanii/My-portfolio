"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xvojqwdp"
      method="POST"
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm font-semibold">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            className="focus-visible:ring-purple-500/30 focus-visible:border-purple-500"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-semibold">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="focus-visible:ring-purple-500/30 focus-visible:border-purple-500"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject" className="text-sm font-semibold">
          Subject
        </Label>
        <Input
          id="subject"
          type="text"
          name="subject"
          placeholder="What's this about?"
          required
          className="focus-visible:ring-purple-500/30 focus-visible:border-purple-500"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-sm font-semibold">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          required
          className="min-h-[150px] resize-none focus-visible:ring-purple-500/30 focus-visible:border-purple-500"
        />
      </div>

      <Button
        type="submit"
        className="w-full gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 transition-all"
        onClick={(e) => {
          e.preventDefault();
          const form = (e.target as HTMLElement).closest("form");
          if (form) {
            form.submit();
            form.reset();
          }
        }}
      >
        <Send size={14} />
        Send Message
      </Button>
    </form>
  );
}

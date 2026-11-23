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
          <Label htmlFor="name" className="text-[13px] font-medium text-muted-foreground">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            className="h-11 rounded-xl bg-background px-3.5 text-[15px] focus-visible:ring-primary/20 focus-visible:border-primary"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-[13px] font-medium text-muted-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="h-11 rounded-xl bg-background px-3.5 text-[15px] focus-visible:ring-primary/20 focus-visible:border-primary"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="subject" className="text-[13px] font-medium text-muted-foreground">
          Subject
        </Label>
        <Input
          id="subject"
          type="text"
          name="subject"
          placeholder="What's this about?"
          required
          className="h-11 rounded-xl bg-background px-3.5 text-[15px] focus-visible:ring-primary/20 focus-visible:border-primary"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-[13px] font-medium text-muted-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          required
          className="min-h-[160px] rounded-xl bg-background px-3.5 py-3 text-[15px] resize-none focus-visible:ring-primary/20 focus-visible:border-primary"
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] pressable font-body text-[15px] font-medium hover:brightness-110"
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

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, BookOpen, Code2, Layers } from "lucide-react";

const icons = [Code2, Layers, Award, BookOpen];

export const HoverEffect = ({
  items,
  className,
}: {
  items: { title: string; description: string }[];
  className?: string;
}) => {
  return (
    <>
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className={cn(
              "group relative p-5 rounded-sm flex flex-col gap-3",
              "bg-[#111111]",
              "border border-[#1f1f1f]",
              "hover:border-primary/30",
              "transition-all duration-300",
              className
            )}
          >
            <div className="p-2.5 rounded-sm bg-[#161616] border border-[#1f1f1f] text-primary w-fit">
              <Icon size={20} />
            </div>
            <h3 className="text-base font-bold leading-snug">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </>
  );
};

export default HoverEffect;

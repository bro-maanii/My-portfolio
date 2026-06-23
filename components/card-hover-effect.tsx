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
              "group relative p-5 rounded-2xl flex flex-col gap-3",
              "bg-white dark:bg-gray-900/50",
              "border border-gray-200 dark:border-gray-800",
              "hover:border-purple-500/50 dark:hover:border-purple-500/50",
              "transition-all duration-300 shadow-sm hover:shadow-lg",
              className
            )}
          >
            <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-fit">
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

"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Book, Code2Icon, Layers } from "lucide-react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            rotate: index % 2 === 0 ? -1 : 1,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
          }}
          className={cn(
            "group relative p-2 rounded-xl bg-white dark:bg-slate-800",
            "border border-slate-100 dark:border-slate-700",
            "transform transition-all duration-300 ease-out",
            "hover:z-10 hover:border-transparent",
            className
          )}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-slate-900/80 dark:to-slate-800/80 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="mb-1 text-3xl text-blue-600 dark:text-blue-400">
              {index === 0 ? <Code2Icon/> : index === 1 ? <Layers />  : index === 2 ? <Award /> : <Book />}
            </div>
            <motion.h3
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};


export default HoverEffect;
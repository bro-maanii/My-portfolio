import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button";
import Link from "next/link";

interface PortfolioItemProps {
  item: {
    image: string;
    title: string;
    category: string;
    Codeurl?: string;
    Liveurl?: string;
  };
}

export function PortfolioItem({ item }: PortfolioItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </motion.div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-400">{item.category}</p>
        <div className="flex justify-end gap-3">
          {item.Codeurl && (
            <Link href={item.Codeurl || ""} target="_blank">
            <Button className="px-4 py-2 mt-4 rounded-lg">
                View code
            </Button>
            </Link>
            )}
            {item.Liveurl && (
            item.category === "WEB DEV" ?(
                <Link  href={item.Liveurl || ""} target="_blank">
                <Button className="px-4 py-2 mt-4 rounded-lg">
                    Live 
                </Button>
                </Link>
            ): item.Liveurl && (
                <Link href={item.Liveurl || ""} target="_blank">
                <Button className="px-4 py-2 mt-4 rounded-lg">
                        Watch
                    </Button>
                    </Link>
                )
            )}

        </div>
      </div>
    </motion.div>
  )
}


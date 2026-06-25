import { motion } from "framer-motion"

const tabs = ["ALL", "WEB DEV", "AI - CHATBOT"]

interface TabSystemProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabSystem({ activeTab, setActiveTab }: TabSystemProps) {
  return (
    <div className="flex gap-8 border-b border-[#1f1f1f] mb-8">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          className={`font-body pb-3 text-[11px] font-semibold uppercase tracking-widest border-b-2 transition-colors ${
            activeTab === tab
              ? "text-foreground border-primary"
              : "text-[#525252] border-transparent hover:text-[#a3a3a3]"
          }`}
          onClick={() => setActiveTab(tab)}
          whileTap={{ scale: 0.97 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  )
}

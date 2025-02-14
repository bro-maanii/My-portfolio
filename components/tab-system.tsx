import { motion } from "framer-motion"

const tabs = ["ALL", "WEB DEV", "AI - CHATBOT"]

interface TabSystemProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabSystem({ activeTab, setActiveTab }: TabSystemProps) {
  return (
    <div className="flex justify-center space-x-4">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === tab
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab(tab)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  )
}


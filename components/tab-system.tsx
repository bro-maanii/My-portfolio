import { motion } from "framer-motion"

const tabs = [
  { id: "ALL",          label: "All" },
  { id: "WEB DEV",      label: "Web" },
  { id: "AI - CHATBOT", label: "AI / Chatbot" },
]

interface TabSystemProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  counts?: Record<string, number>;
}

/** Segmented control with a sliding indicator. */
export function TabSystem({ activeTab, setActiveTab, counts }: TabSystemProps) {
  return (
    <div role="tablist" aria-label="Filter projects" className="inline-flex gap-1 p-1 mb-8 rounded-xl border border-border bg-card shadow-soft">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 h-9 rounded-lg font-body text-[13px] font-medium transition-colors ${
              isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-lg bg-foreground"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {tab.label}
              {counts?.[tab.id] !== undefined && (
                <span className="font-mono text-[10px] opacity-60 tabular-nums">{counts[tab.id]}</span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}

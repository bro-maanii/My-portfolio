import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/** Pull a clean hostname out of a URL for the fake address bar. */
export function hostOf(url?: string) {
  if (!url) return "localhost:3000";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Minimal browser chrome so screenshots read as real, live products. */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-xl border border-border bg-secondary/70", className)}>
      <div className="flex items-center gap-3 px-3 h-8 shrink-0 border-b border-border bg-secondary">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <span className="flex items-center gap-1.5 max-w-full truncate rounded-md bg-background/70 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            <Lock size={9} className="shrink-0" />
            <span className="truncate">{hostOf(url)}</span>
          </span>
        </div>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

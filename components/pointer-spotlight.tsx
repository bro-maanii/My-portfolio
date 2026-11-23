"use client";

import { useEffect } from "react";

/**
 * Feeds cursor coordinates into any `.spotlight` element under the pointer
 * (as --mx / --my), which the CSS in globals.css uses to light up the border.
 * One listener for the whole page instead of one per card.
 */
export default function PointerSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight");
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}

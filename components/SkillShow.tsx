"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        name: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            // Duplicate each card for a seamless infinite scroll
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            setAnimationDirection();
            setAnimationSpeed();
            setStart(true);
        }
    }

    const setAnimationDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const setAnimationSpeed = () => {
        if (containerRef.current) {
            let duration = "20s";
            if (speed === "normal") {
                duration = "40s";
            } else if (speed === "slow") {
                duration = "80s";
            }
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    const handleMouseEnter = () => {
        if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "paused";
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "running";
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden ",
                className
            )}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleMouseLeave}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="relative rounded-full border border-b-0 flex-shrink-0 px-8 py-6 "
                    >
                        <div className="relative z-20 flex items-center justify-center h-full">
                            <span className="text-lg text-gray-900 dark:text-white font-bold">
                                {item.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfiniteMovingCards;

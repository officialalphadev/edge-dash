"use client";

import { useState } from "react";
import { cn } from "@/lib";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  offset?: number;
  className?: string;
}

function Tooltip({ content, children, position = "top", offset = 2, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleMouseEnter() {
    setIsVisible(true);
  }

  function handleMouseLeave() {
    setIsVisible(false);
  }

  return (
    <div className="relative inline-flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <div
          className={cn(
            "animate-fade absolute z-50 whitespace-nowrap rounded-xl border border-gray-200 bg-white px-3 py-1 text-[10px] shadow-lg dark:border-gray-700 dark:bg-gray-800",
            position === "top" && `bottom-full left-1/2 -translate-x-1/2 mb-${offset}`,
            position === "bottom" && `left-1/2 top-full -translate-x-1/2 mt-${offset}`,
            position === "left" && `right-full top-1/2 -translate-y-1/2 mr-${offset}`,
            position === "right" && `left-full top-1/2 -translate-y-1/2 ml-${offset}`,
            className,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export { Tooltip };

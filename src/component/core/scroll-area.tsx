"use client";

import { cn } from "@/lib";

function ScrollArea({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("overflow-auto", className)} {...props}>
      {children}
    </div>
  );
}

export { ScrollArea };

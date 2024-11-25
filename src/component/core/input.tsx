"use client";

import { cn } from "@/lib";

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn("rounded-xl border-none bg-gray-50 p-3 outline-none focus:ring-0 dark:bg-gray-700", className)}
    />
  );
}

export { Input };

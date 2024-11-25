"use client";

import { cn } from "@/lib";

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "focus:border-brand-50 focus:ring-brand-100 rounded-xl",
        "border border-gray-100 bg-gray-50 p-3 text-sm text-gray-500",
        "outline-none transition-all duration-300 focus:ring-4",
        className,
      )}
    />
  );
}

export { Input };

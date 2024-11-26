"use client";

import { cn } from "@/lib";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { MouseEventHandler } from "react";

const ButtonSize = ["xs", "sm", "md", "lg", "xl"] as const;
const ButtonType = ["button", "reset", "submit"] as const;
const ButtonVariant = [
  "indigo-fill",
  "indigo-outline",
  "indigo-secondary",
  "success-fill",
  "success-outline",
  "gray-fill",
  "gray-outline",
] as const;

type TypeButton = {
  text: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: (typeof ButtonType)[number];
  size?: (typeof ButtonSize)[number];
  variant?: (typeof ButtonVariant)[number];
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
};

export function Button({
  text,
  onClick,
  type = "button",
  size = "md",
  variant = "indigo-fill",
  className,
  isLoading,
  disabled: buttonDisabled,
}: TypeButton) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-xl text-center font-medium",
        "outline-none",
        ["xs", "sm"].includes(size) && "px-3 py-2",
        size == "md" && "px-5 py-2.5",
        size == "lg" && "px-5 py-3",
        size == "xl" && "px-6 py-3.5",
        variant == "indigo-fill" && [
          "border-indigo-500 bg-indigo-500 text-white",
          "hover:border-indigo-600 hover:bg-indigo-600",
        ],
        variant == "indigo-outline" && [
          "border-indigo-500 bg-white text-indigo-500",
          "hover:border-indigo-600 hover:bg-indigo-600 hover:text-white",
        ],
        variant == "indigo-secondary" && [
          "border-indigo-50 bg-indigo-50 text-indigo-500",
          "hover:border-indigo-100 hover:bg-indigo-100",
        ],
        variant == "success-fill" && [
          "border-success-500 bg-success-500 text-white",
          "hover:border-success-600 hover:bg-success-600",
        ],
        variant == "success-outline" && [
          "border-success-500 text-success-500 bg-white",
          "hover:border-success-600 hover:bg-success-600 hover:text-white",
        ],
        variant == "gray-fill" && ["border-gray-100 bg-gray-100", "hover:border-gray-200 hover:bg-gray-200"],
        variant == "gray-outline" && ["border-gray-100 bg-white", "hover:border-gray-200 hover:bg-gray-100"],
        disabled && "cursor-not-allowed opacity-75",
        className,
      )}
    >
      <span
        className={cn(
          size == "xs" && "text-xs",
          ["sm", "md"].includes(size) && "text-sm",
          ["lg", "xl"].includes(size) && "text-base",
        )}
      >
        {isLoading ? <ArrowPathIcon className="size-5 animate-spin" /> : text}
      </span>
    </button>
  );
}

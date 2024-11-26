"use client";

import { cn } from "@/lib";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const ButtonSize = ["xs", "sm", "md", "lg", "xl"] as const;
const ButtonType = ["button", "reset", "submit"] as const;
const ButtonVariant = [
  "brand-fill",
  "brand-secondary",
  "brand-outline",
  "success-fill",
  "success-secondary",
  "success-outline",
  "warning-fill",
  "warning-secondary",
  "warning-outline",
  "danger-fill",
  "danger-secondary",
  "danger-outline",
  "info-fill",
  "info-secondary",
  "info-outline",
] as const;

type TypeButton = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
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
  variant = "brand-fill",
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
        "inline-flex items-center justify-center rounded-xl text-center font-medium outline-none",
        ["xs", "sm"].includes(size) && "px-3 py-2",
        size == "md" && "px-5 py-2.5",
        size == "lg" && "px-5 py-3",
        size == "xl" && "px-6 py-3.5",
        variant == "brand-fill" && [
          "border-indigo-500 bg-indigo-500 text-white",
          "hover:border-indigo-600 hover:bg-indigo-600",
        ],
        variant == "brand-secondary" && ["bg-indigo-500/10 text-indigo-500", "hover:bg-indigo-500/20"],
        variant == "brand-outline" && [
          "border border-indigo-500 text-indigo-500 dark:border-indigo-500",
          "hover:border-indigo-600 hover:bg-indigo-600 hover:text-white",
        ],
        variant == "success-fill" && [
          "border-green-500 bg-green-500 text-white",
          "hover:border-green-600 hover:bg-green-600",
        ],
        variant == "success-secondary" && ["bg-green-500/10 text-green-500", "hover:bg-green-500/20"],
        variant == "success-outline" && [
          "border border-green-500 text-green-500",
          "hover:border-green-600 hover:bg-green-600 hover:text-white",
        ],
        variant == "warning-fill" && [
          "border-yellow-500 bg-yellow-500 text-white",
          "hover:border-yellow-600 hover:bg-yellow-600",
        ],
        variant == "warning-secondary" && ["bg-yellow-500/10 text-yellow-500", "hover:bg-yellow-500/20"],
        variant == "warning-outline" && [
          "border border-yellow-500 text-yellow-500",
          "hover:border-yellow-600 hover:bg-yellow-600 hover:text-white",
        ],
        variant == "danger-fill" && ["border-red-500 bg-red-500 text-white", "hover:border-red-600 hover:bg-red-600"],
        variant == "danger-secondary" && ["bg-red-500/10 text-red-500", "hover:bg-red-500/20"],
        variant == "danger-outline" && [
          "border border-red-500 text-red-500",
          "hover:border-red-600 hover:bg-red-600 hover:text-white",
        ],
        variant == "info-fill" && ["border-blue-500 bg-blue-500 text-white", "hover:border-blue-600 hover:bg-blue-600"],
        variant == "info-secondary" && ["bg-blue-500/10 text-blue-500", "hover:bg-blue-500/20"],
        variant == "info-outline" && [
          "border border-blue-500 text-blue-500",
          "hover:border-blue-600 hover:bg-blue-600 hover:text-white",
        ],
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
        {isLoading && <ArrowPathIcon className="mr-2 inline size-4 animate-spin" />}
        {text}
      </span>
    </button>
  );
}

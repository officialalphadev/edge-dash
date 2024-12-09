"use client";

import { cn } from "@/lib";
import { useState } from "react";

interface SwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

function Switch({ checked = false, onChange, disabled, className, ...props }: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  function toggleSwitch() {
    !disabled && setIsChecked(!isChecked) && onChange?.(!isChecked);
  }

  return (
    <button
      {...props}
      aria-checked={isChecked}
      onClick={toggleSwitch}
      disabled={disabled}
      className={cn(
        "h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "bg-indigo-500" : "bg-gray-200 dark:bg-gray-700",
        className,
      )}
    >
      <span
        className={cn(
          "block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform dark:bg-gray-800",
          isChecked ? "translate-x-5" : "translate-x-0",
        )}
      />
    </button>
  );
}

export { Switch };

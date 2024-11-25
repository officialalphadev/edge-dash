"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { cn } from "@/lib";

interface DropdownContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

function Dropdown({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((isOpen) => !isOpen);
  const close = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && close();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div ref={dropdownRef} className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function DropdownTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggle } = useContext(DropdownContext);
  return (
    <button onClick={toggle} className={cn(className, "cursor-pointer")} {...props}>
      {children}
    </button>
  );
}

function DropdownContent({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useContext(DropdownContext);
  return (
    <div
      className={cn(
        "absolute right-0 mt-2 w-48 overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800",
        !isOpen && "hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

function DropdownItem({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700", className)}
      {...props}
    >
      {children}
    </button>
  );
}

function DropdownLabel({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn("block px-4 py-2 text-xs font-semibold uppercase", className)} {...props}>
      {children}
    </label>
  );
}

function DropdownSeparator({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("border-gray-200 dark:border-gray-700", className)} {...props} />;
}

export { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownLabel, DropdownSeparator };

"use client";

import { cn } from "@/lib";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link, { LinkProps } from "next/link";

function Breadcrumb({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav aria-label="breadcrumb" {...props}>
      {children}
    </nav>
  );
}

function BreadcrumbList({ children, className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn("flex flex-wrap items-center gap-1.5 break-words text-gray-500 sm:gap-2.5", className)}
      {...props}
    >
      {children}
    </ol>
  );
}

function BreadcrumbItem({ children, className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("inline-flex items-center gap-1.5", className)} {...props}>
      {children}
    </li>
  );
}

function BreadcrumbLink({ children, className, ...props }: LinkProps & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link className={cn("hover:text-indigo-500", className)} {...props}>
      {children}
    </Link>
  );
}

function BreadcrumbPage({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span role="link" aria-disabled="true" aria-current="page" className={cn("text-indigo-500", className)} {...props}>
      {children}
    </span>
  );
}

function BreadcrumbSeparator({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li role="presentation" aria-hidden="true" className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)} {...props}>
      {children || <ChevronRightIcon />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      ...
    </span>
  );
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink };
export { BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };

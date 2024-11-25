"use client";

import { cn } from "@/lib";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800", className)} {...props} />;
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5 border-b p-6 dark:border-gray-700", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />;
}

function CardDescription(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center border-t p-6 dark:border-gray-700", className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

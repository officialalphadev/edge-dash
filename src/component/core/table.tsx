"use client";

import { cn } from "@/lib";
import { ScrollArea } from "./scroll-area";

function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <ScrollArea className="relative w-full">
      <table className={cn("w-full caption-bottom", className)} {...props} />
    </ScrollArea>
  );
}

function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("bg-gray-100 uppercase dark:bg-gray-700", className)} {...props} />;
}

function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("divide-y divide-gray-200 text-xs dark:divide-gray-700", className)} {...props} />;
}

function TableFooter({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tfoot className={cn("bg-gray-100 p-4 font-medium dark:bg-gray-700", className)} {...props} />;
}

function TableRow(props: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr {...props} />;
}

function TableHead({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn("p-4 text-left align-middle font-semibold", className)} {...props} />;
}

function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-4 py-2 align-middle", className)} {...props} />;
}

function TableCaption({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return <caption className={cn("px-4 py-2", className)} {...props} />;
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };

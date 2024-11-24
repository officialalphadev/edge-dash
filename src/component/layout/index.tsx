"use client";

import { useEffect, useState } from "react";
import { Header } from "../header";
import { DefaultSidebar } from "../sidebar";
import { InitialLoad } from "../initial-load";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <InitialLoad />;

  return (
    <>
      <DefaultSidebar />
      <div className="ml-[276px]">
        <Header />
        <div className="mx-auto max-w-7xl p-2">{children}</div>
      </div>
    </>
  );
}

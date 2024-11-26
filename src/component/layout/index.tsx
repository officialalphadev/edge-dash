"use client";

import { useEffect, useState } from "react";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { InitialLoad } from "../initial-load";
import { useColorMode } from "@/hook/use-color-mode";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  useColorMode();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <InitialLoad />;

  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="lg:ml-[276px]">
        <Header setSidebar={setSidebar} />
        <div className="mx-auto max-w-7xl p-2">{children}</div>
      </div>
    </>
  );
}

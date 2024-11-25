"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconChevronBottom,
  IconChevronLeft,
  IconEvent,
  IconFaq,
  IconHome,
  IconLogout,
  IconMedia,
  IconPortfolio,
  IconSetting,
} from "@/asset/icon";
import { SVGProps, useEffect, useState } from "react";
import { cn } from "@/lib";
import { ScrollArea } from "../core/scroll-area";

const menus = [
  {
    href: "/",
    name: "Dashboard",
    icon: IconHome,
  },
  {
    href: "/tables",
    name: "Tables",
    icon: IconHome,
  },
  {
    href: "auth",
    name: "Authentication",
    icon: IconLogout,
    items: [
      {
        href: "/auth/signin",
        name: "Sign In",
      },
      {
        href: "/auth/signup",
        name: "Sign Up",
      },
    ],
  },
  {
    href: "/medias",
    name: "Media",
    icon: IconMedia,
  },
  {
    href: "events",
    name: "Event",
    icon: IconEvent,
    items: [
      {
        href: "/events/flashsales",
        name: "Flash Sale",
      },
      {
        href: "/events/newsletters",
        name: "Newsletter",
      },
      {
        href: "/events/subscribers",
        name: "Subscriber",
      },
    ],
  },
  {
    href: "/portfolios",
    name: "Portofolio",
    icon: IconPortfolio,
  },
  {
    href: "/faqs",
    name: "FAQ",
    icon: IconFaq,
  },
  {
    href: "settings",
    name: "Pengaturan",
    icon: IconSetting,
    items: [
      {
        href: "/settings/profiles",
        name: "Profil",
      },
      {
        href: "/settings/users",
        name: "Pengguna",
      },
      {
        href: "/settings/roles",
        name: "Role",
      },
    ],
  },
];

interface SidebarProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ sidebar, setSidebar }: SidebarProps) {
  return (
    <aside className={cn("fixed -left-full top-0 z-40 h-screen w-[276px] p-2 md:left-0", sidebar && "left-0")}>
      <div className="h-full overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 p-4 md:justify-center dark:border-gray-700">
          <h1 className="text-xl font-semibold text-indigo-500">Edge Dash</h1>
          <button onClick={() => setSidebar(false)} className="md:hidden">
            <IconChevronLeft className="size-4" />
          </button>
        </div>
        <ScrollArea className="max-h-[calc(100vh-72px)] space-y-2 px-4 py-2">
          {menus.map(({ items, ...menu }, index) => {
            if (!items) return <SingleSideMenu key={index} data={menu} />;
            return <MultiSideMenu key={index} data={{ items, ...menu }} />;
          })}
        </ScrollArea>
      </div>
    </aside>
  );
}

type typeSideMenu = {
  data: {
    href: string;
    icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
    name: string;
    items?: { href: string; name: string }[];
  };
};

const SingleSideMenu = ({ data: { href, icon: Icon, name } }: typeSideMenu) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-xl px-4 py-2",
        pathname === href ? "bg-indigo-500/10 text-indigo-500" : "hover:bg-gray-50 dark:hover:bg-gray-700",
      )}
    >
      <Icon className="size-4" />
      <span className="whitespace-nowrap">{name}</span>
    </Link>
  );
};

const MultiSideMenu = ({ data: { href, icon: Icon, name, items } }: typeSideMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    pathname.split("/").includes(href) && setIsOpen(true);
  }, [pathname, href]);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2",
          isOpen && "bg-gray-50 dark:bg-gray-700",
          pathname.includes(href) && "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/10",
          !pathname.includes(href) && "hover:bg-gray-50 dark:hover:bg-gray-700",
        )}
      >
        <Icon className="size-4 flex-none" />
        <span className="w-full whitespace-nowrap">{name}</span>
        <IconChevronBottom className={cn("size-4", isOpen && "rotate-180")} />
      </div>
      <div className={cn("space-y-1 overflow-hidden", !isOpen && "hidden")}>
        {items?.map(({ href, name }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "ml-6 block whitespace-nowrap rounded-xl px-4 py-2",
              pathname.includes(href) ? "bg-indigo-500/10 text-indigo-500" : "hover:bg-gray-50 dark:hover:bg-gray-700",
            )}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
};

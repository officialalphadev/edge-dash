"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconChevronBottom,
  IconEvent,
  IconFaq,
  IconHome,
  IconLogout,
  IconMedia,
  IconPortfolio,
  IconSetting,
} from "@/asset/icon";
import React, { SVGProps, useEffect, useState } from "react";
import { cn } from "@/lib";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  {
    href: "/",
    name: "Dashboard",
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

export function DefaultSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[276px] p-2">
      <div className="h-full overflow-hidden rounded-xl border bg-white">
        <div className="flex items-center justify-center border-b p-4">
          <Image
            src="/image/alphadev-icon.png"
            alt="alphadev-icon"
            className="size-8"
            height={50}
            width={50}
          />
          <h1 className="font-semibold">Edge Dash</h1>
        </div>
        <div className="h-full space-y-2 overflow-y-auto px-4 py-5 duration-300">
          {menus.map(({ items, ...menu }, index) => {
            if (!items) return <SingleSideMenu key={index} data={menu} />;
            return <MultiSideMenu key={index} data={{ items, ...menu }} />;
          })}
        </div>
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
        "flex items-center gap-2 rounded-xl p-4 text-sm font-medium duration-300",
        pathname === href && "bg-brand-50/50 text-brand-500",
        pathname !== href && "text-gray-500 hover:bg-gray-50",
      )}
    >
      <Icon className="size-5" />
      <span className="whitespace-nowrap">{name}</span>
    </Link>
  );
};

const MultiSideMenu = ({
  data: { href, icon: Icon, name, items },
}: typeSideMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    pathname.split("/").includes(href) && setIsOpen(true);
  }, [pathname, href]);

  return (
    <>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-2 rounded-xl p-4 text-sm font-medium duration-300",
          isOpen && "bg-gray-50 text-gray-500",
          pathname.includes(href) && "bg-brand-50/50 text-brand-500",
          !pathname.includes(href) && "text-gray-500 hover:bg-gray-50",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon className="size-5 flex-none" />
        <span className="w-full whitespace-nowrap">{name}</span>
        <IconChevronBottom
          className={cn("size-5 duration-300", isOpen && "rotate-180")}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1 overflow-hidden"
          >
            {items?.map(({ href, name }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium duration-300",
                  pathname.includes(href)
                    ? "text-brand-500 bg-brand-50/50"
                    : "text-gray-500 hover:bg-gray-50",
                )}
              >
                <span className="ml-8 whitespace-nowrap">{name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

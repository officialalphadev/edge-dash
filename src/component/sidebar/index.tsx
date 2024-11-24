"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
import { useEffect, useState } from "react";

const menus = [
  {
    href: "/",
    name: "Dashboard",
    icon: <IconHome className={`h-6 w-6 flex-none`} />,
  },
  {
    href: "auth",
    name: "Authentication",
    icon: <IconLogout className={`h-6 w-6 flex-none`} />,
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
    icon: <IconMedia className={`h-6 w-6 flex-none`} />,
  },
  {
    href: "events",
    name: "Event",
    icon: <IconEvent className={`h-6 w-6 flex-none`} />,
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
    icon: <IconPortfolio className={`h-6 w-6 flex-none`} />,
  },
  {
    href: "/faqs",
    name: "FAQ",
    icon: <IconFaq className={`h-6 w-6 flex-none`} />,
  },
  {
    href: "settings",
    name: "Pengaturan",
    icon: <IconSetting className={`h-6 w-6 flex-none`} />,
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
        <div className="scrollbar h-full space-y-2 overflow-y-auto px-4 py-5 duration-300">
          {menus.map(({ href, icon, name, items }) => {
            if (!items) {
              return <SingleSideMenu key={name} data={{ href, icon, name }} />;
            }
            return (
              <MultiSideMenu key={name} data={{ icon, href, name, items }} />
            );
          })}
        </div>
      </div>
    </aside>
  );
}

type typeSideMenu = {
  data: {
    href: string;
    icon: JSX.Element;
    name: string;
    items?: { href: string; name: string }[];
  };
};

const SingleSideMenu = ({ data: { href, icon, name } }: typeSideMenu) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className={`${
          pathname === href
            ? "bg-brand-50/50 text-brand-500"
            : "text-gray-500 hover:bg-gray-50"
        } flex h-12 items-center overflow-hidden rounded-xl px-3 text-sm font-medium duration-300`}
      >
        {icon}
        <span className="ml-3 whitespace-nowrap">{name}</span>
      </Link>
    </motion.div>
  );
};

const ChildSideMenu = ({ data: { href, name } }: typeSideMenu) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className={`${
          pathname.includes(href)
            ? "bg-brand-50/50 text-brand-500"
            : "text-gray-500 hover:bg-gray-50"
        } flex h-12 items-center overflow-hidden rounded-xl px-6 text-sm font-medium duration-300`}
      >
        <span className="ml-3 whitespace-nowrap">{name}</span>
      </Link>
    </motion.div>
  );
};

const MultiSideMenu = ({ data: { href, icon, name, items } }: typeSideMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    pathname.split("/").includes(href) && setIsOpen(true);
  }, [pathname, href]);

  return (
    <>
      <div
        className={`${
          pathname.includes(href)
            ? "bg-brand-50/50 text-brand-500"
            : "text-gray-500 hover:bg-gray-50"
        } flex h-12 cursor-pointer items-center overflow-hidden rounded-xl px-3 text-sm font-medium duration-300`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {icon}
        <span className="ml-3 whitespace-nowrap">{name}</span>
        <IconChevronBottom
          className={`ml-auto size-5 duration-300 ${isOpen && "rotate-180"}`}
        />
      </div>
      <AnimatePresence>
        {isOpen &&
          items?.map(({ href, name }) => (
            <ChildSideMenu key={name} data={{ href, icon, name }} />
          ))}
      </AnimatePresence>
    </>
  );
};

import {
  IconChevronBottom,
  IconMenu,
  IconNotification,
  IconSearch,
  IconUser,
} from "@/asset/icon";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from "../core/dropdown";
import { ScrollArea } from "../core/scroll-area";
import Image from "next/image";

export function Header({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="sticky top-0 z-30 p-2">
      <div className="flex items-center gap-4 rounded-xl border bg-white p-4">
        <div className="mr-auto flex items-center gap-2 md:hidden">
          <button
            onClick={() => setSidebar(true)}
            className="rounded-xl bg-gray-100 p-2 ring-gray-300 duration-200 hover:ring-4"
          >
            <IconMenu className="size-4" />
          </button>
          <Image
            src="/image/alphadev-icon.png"
            alt="alphadev-icon"
            className="size-8"
            height={50}
            width={50}
          />
        </div>
        <div className="flex w-full items-center gap-2 max-md:hidden">
          <IconSearch className="size-6" />
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full border-none bg-transparent text-sm outline-none focus:ring-0"
          />
        </div>
        <Dropdown>
          <DropdownTrigger className="rounded-xl bg-gray-100 p-2 ring-gray-300 duration-200 hover:ring-4">
            <IconNotification className="size-4" />
          </DropdownTrigger>
          <DropdownContent className="right-1/2 mt-5 w-64 translate-x-1/2">
            <DropdownLabel>Notification</DropdownLabel>
            <DropdownSeparator />
            <ScrollArea className="max-h-[300px]">
              {[...Array(5)].map((_, index) => (
                <DropdownItem key={index} className="text-xs">
                  <p className="mb-2 text-gray-700">
                    Edit your information in a swipe Sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim.
                  </p>
                  <p className="text-gray-500">12 May, 2025</p>
                </DropdownItem>
              ))}
            </ScrollArea>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger className="flex items-center gap-2">
            <div className="whitespace-nowrap text-end">
              <p className="text-xs font-semibold">Jhon Doe</p>
              <p className="text-[10px] text-gray-500">Developer</p>
            </div>
            <IconUser className="bg-brand-500 size-8 rounded-xl p-1.5 text-white" />
            <IconChevronBottom className="size-4" />
          </DropdownTrigger>
          <DropdownContent className="mt-5">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem>My Contacts</DropdownItem>
            <DropdownItem>Account Settings</DropdownItem>
            <DropdownSeparator />
            <DropdownItem>Logout</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    </header>
  );
}

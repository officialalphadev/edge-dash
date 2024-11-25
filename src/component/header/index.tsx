import { IconChevronBottom, IconMenu, IconNotification, IconSearch, IconUser } from "@/asset/icon";
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
import { Switch } from "../core/switch";
import { useColorMode } from "@/hook/use-color-mode";

export function Header({ setSidebar }: { setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <header className="sticky top-0 z-30 p-2">
      <div className="flex items-center gap-4 rounded-xl bg-white px-4 py-2 shadow-xl dark:bg-gray-800">
        <div className="mr-auto flex items-center gap-2 md:hidden">
          <button onClick={() => setSidebar(true)} className="rounded-xl bg-gray-100 p-2 dark:bg-gray-700">
            <IconMenu className="size-4" />
          </button>
          <Image src="/image/alphadev-icon.png" alt="alphadev-icon" className="size-8" height={50} width={50} />
        </div>
        <div className="flex w-full items-center gap-2 max-md:hidden">
          <IconSearch className="size-4" />
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full border-none bg-transparent text-sm outline-none focus:ring-0"
          />
        </div>
        <Switch onChange={(checked) => setColorMode(checked ? "dark" : "light")} checked={colorMode === "dark"} />
        <Dropdown>
          <DropdownTrigger className="rounded-xl bg-gray-100 p-2 dark:bg-gray-700">
            <IconNotification className="size-4" />
          </DropdownTrigger>
          <DropdownContent className="right-1/2 mt-3 w-64 translate-x-1/2">
            <DropdownLabel>Notification</DropdownLabel>
            <DropdownSeparator />
            <ScrollArea className="max-h-[300px]">
              {[...Array(5)].map((_, index) => (
                <DropdownItem key={index} className="text-xs">
                  <p className="mb-2">
                    Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim.
                  </p>
                  <p className="text-gray-500">12 May, 2025</p>
                </DropdownItem>
              ))}
            </ScrollArea>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger className="flex items-center gap-2">
            <div className="whitespace-nowrap text-end leading-none max-md:hidden">
              <p className="text-xs font-semibold">Rizky Maulana</p>
              <p className="text-[10px]">Developer</p>
            </div>
            <IconUser className="size-8 rounded-xl bg-indigo-500 p-1.5 text-white" />
            <IconChevronBottom className="size-4" />
          </DropdownTrigger>
          <DropdownContent className="mt-3">
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

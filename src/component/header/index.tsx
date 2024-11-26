import { Dropdown, DropdownContent, DropdownItem } from "../core/dropdown";
import { DropdownLabel, DropdownSeparator, DropdownTrigger } from "../core/dropdown";
import { ScrollArea } from "../core/scroll-area";
import { useColorMode } from "@/hook/use-color-mode";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export function Header({ setSidebar }: { setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <header className="sticky top-0 z-30 p-2">
      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <button
          onClick={() => setSidebar(true)}
          className="mr-auto rounded-xl bg-gray-100 p-2 md:hidden dark:bg-gray-700"
        >
          <Bars3Icon className="size-4" />
        </button>
        <div className="flex w-full items-center gap-2 max-md:hidden">
          <MagnifyingGlassIcon className="size-4" />
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full border-none bg-transparent text-sm outline-none focus:ring-0"
          />
        </div>
        <button
          onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
          className="rounded-xl bg-gray-100 p-2 dark:bg-gray-700"
        >
          {colorMode === "dark" ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
        </button>
        <Dropdown>
          <DropdownTrigger className="relative rounded-xl bg-gray-100 p-2 dark:bg-gray-700">
            <div className="absolute right-0 top-0 size-2 rounded-full bg-indigo-500" />
            <BellIcon className="size-4" />
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
            <UserCircleIcon className="size-8 rounded-xl bg-indigo-500 p-1.5 text-white" />
            <ChevronDownIcon className="size-4" />
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

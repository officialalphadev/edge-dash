import {
  IconChevronBottom,
  IconNotification,
  IconSearch,
  IconUser,
} from "@/asset/icon";

export function Header() {
  return (
    <header className="sticky top-0 z-40 p-2">
      <div className="flex items-center gap-4 rounded-xl border bg-white p-4">
        <div className="flex w-full items-center gap-2">
          <IconSearch className="size-6" />
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full border-none bg-transparent text-sm outline-none focus:ring-0"
          />
        </div>
        <button className="rounded-xl bg-gray-100 p-2 ring-gray-300 duration-200 hover:ring-4">
          <IconNotification className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          <div className="whitespace-nowrap text-end">
            <p className="text-xs font-semibold">Jhon Doe</p>
            <p className="text-[10px] text-gray-500">Developer</p>
          </div>
          <IconUser className="bg-brand-500 size-8 rounded-xl p-1.5 text-white" />
          <IconChevronBottom className="size-4" />
        </div>
      </div>
    </header>
  );
}

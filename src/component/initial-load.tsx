import Image from "next/image";

export function InitialLoad() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/image/alphadev-icon.png"
        alt="alphadev-icon"
        className="size-20 animate-pulse"
        height={200}
        width={200}
      />
      <p className="text-xs font-semibold">Loading...</p>
    </div>
  );
}

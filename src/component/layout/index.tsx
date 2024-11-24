import { Header } from "../header";
import { DefaultSidebar } from "../sidebar";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <DefaultSidebar />
      <div className="ml-[276px]">
        <Header />
        <div className="mx-auto max-w-6xl p-2">{children}</div>
      </div>
    </>
  );
}

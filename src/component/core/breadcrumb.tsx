import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

export function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 px-2 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-xl font-semibold">{pageName}</h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="text-brand-500 font-medium">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
}

"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function ModelSidebar({
  categories,
}: {
  categories: { displayName: string; slug: string }[];
}) {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
      <div className="relative">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
            {categories.map((cat) => (
              <NavLink
                key={cat.slug}
                href={`/3d-models/categories/${cat.slug}`}
                isActive={pathname === `/3d-models/categories/${cat.slug}`}
              >
                {cat.displayName}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

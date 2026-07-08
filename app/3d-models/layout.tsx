import { ReactNode } from "react";
import { getAllCategories } from "../lib/categories";
import Link from "next/link";
import ModelSidebar from "@/components/ModelSidebar";
import NavLink from "@/components/NavLink";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories();
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Sidebar */}
      <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
        <div className="relative">
          <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
              {categories.map((cat) => (
                <ModelSidebar key={cat.slug} cat={cat} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}

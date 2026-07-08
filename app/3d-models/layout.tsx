import { ReactNode } from "react";
import { getAllCategories } from "../lib/categories";
import CategoriesNav from "@/components/CategoriesNav";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories();
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Sidebar */}
      <CategoriesNav categories={categories} />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}

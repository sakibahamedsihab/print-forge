import { getAllCategories, getCategoryBySlug } from "@/app/lib/categories";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  return <h1>{category.displayName}</h1>;
}

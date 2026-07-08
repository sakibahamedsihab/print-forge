import { getAllCategories, getCategoryBySlug } from "@/app/lib/categories";
import { getAllModelsByCategory } from "@/app/lib/models";
import ModelCard from "@/components/ModelCard";
import ModelsGrid from "@/components/ModelsGrid";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;
  const models = await getAllModelsByCategory(categoryName);
  return <ModelsGrid title="3D models" models={models} />;
}

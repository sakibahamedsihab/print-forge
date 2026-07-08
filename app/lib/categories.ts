import categories from "@/app/data/categories.json";

export function getAllCategories(): { displayName: string; slug: string }[] {
  return categories;
}

export function getCategoryBySlug(slug: string): {
  displayName: string;
  slug: string;
} {
  const category = categories.find((c) => c.slug.toString() === slug);
  if (!category) {
    throw new Error(`Category with the slug ${slug} not found`);
  }
  return category;
}

export function getDisplayNameFromSlug(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category.displayName;
}

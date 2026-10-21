import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { CollectionView } from "@/components/collections/CollectionView";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === slug);

  return (
    <CollectionView
      initialProducts={categoryProducts}
      title={category.title}
      subtitle={category.subtitle}
      description={category.description}
      heroImage={category.image}
      categorySlug={slug}
    />
  );
}

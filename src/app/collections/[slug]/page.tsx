import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/categories";
import { CollectionView } from "@/components/collections/CollectionView";

export function generateStaticParams() {
  const collectionSlugs = COLLECTIONS.map((c) => ({ slug: c.slug }));
  return [...collectionSlugs, { slug: "women" }, { slug: "men" }];
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Handle women / men collections
  if (slug === "women") {
    const womenProducts = PRODUCTS.filter((p) => p.gender === "women" || p.gender === "all");
    return (
      <CollectionView
        initialProducts={womenProducts}
        title="Womenswear Collection"
        subtitle="AUTUMN / WINTER SARTORIAL"
        description="Sculptural silhouettes, liquid silk column gowns, and architectural double-face cashmere coats."
        heroImage="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85"
        defaultGender="women"
      />
    );
  }

  if (slug === "men") {
    const menProducts = PRODUCTS.filter((p) => p.gender === "men" || p.gender === "all");
    return (
      <CollectionView
        initialProducts={menProducts}
        title="Menswear Collection"
        subtitle="PRECISION & RESTRAINT"
        description="High-twist tropical wool tailoring, heavy Melton overcoats, and Japanese shuttle-loomed selvedge."
        heroImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85"
        defaultGender="men"
      />
    );
  }

  const collection = COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) {
    notFound();
  }

  const collectionProducts = PRODUCTS.filter((p) => p.collection === slug);

  return (
    <CollectionView
      initialProducts={collectionProducts}
      title={collection.title}
      subtitle={collection.season}
      description={collection.description}
      heroImage={collection.heroImage}
      collectionSlug={slug}
    />
  );
}

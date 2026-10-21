import { PRODUCTS } from "@/data/products";
import { CollectionView } from "@/components/collections/CollectionView";

export const metadata = {
  title: "All Collections — NEXKART ATELIER",
  description:
    "Browse curated haute couture collections, seasonal capsules, and architectural wardrobe icons.",
};

export default function CollectionsIndexPage() {
  return (
    <CollectionView
      initialProducts={PRODUCTS}
      title="The Atelier Wardrobe"
      subtitle="COMPLETE MAISON CATALOGUE"
      description="Sculptured proportions, ethical Mongolian cashmere, and precision Italian tailoring designed for enduring relevance."
      heroImage="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=85"
    />
  );
}

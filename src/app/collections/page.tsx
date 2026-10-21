import { PRODUCTS } from "@/data/products";
import { CollectionView } from "@/components/collections/CollectionView";

export const metadata = {
  title: "All Collections — NEXKART",
  description:
    "Browse our full collection of outfits, everyday wear, and seasonal styles.",
};

export default function CollectionsIndexPage() {
  return (
    <CollectionView
      initialProducts={PRODUCTS}
      title="All Clothes & Outfits"
      subtitle="EXPLORE THE COLLECTION"
      description="Discover comfortable jackets, soft sweaters, crisp shirts, dresses, and trousers for any occasion."
      heroImage="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=85"
    />
  );
}

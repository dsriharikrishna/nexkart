import { PRODUCTS } from "@/data/products";
import { CollectionView } from "@/components/collections/CollectionView";

export const metadata = {
  title: "New Arrivals — NEXKART ATELIER",
  description: "Explore the latest runway releases, limited editions, and seasonal capsules.",
};

export default function NewArrivalsPage() {
  const newProducts = PRODUCTS.filter((p) => p.isNew);

  return (
    <CollectionView
      initialProducts={newProducts}
      title="New Arrivals"
      subtitle="AUTUMN / WINTER RELEASES"
      description="The freshest expressions of sartorial craft from our Mumbai flagship atelier and artisanal workshops."
      heroImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
    />
  );
}

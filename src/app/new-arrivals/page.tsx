import { PRODUCTS } from "@/data/products";
import { CollectionView } from "@/components/collections/CollectionView";

export const metadata = {
  title: "New Arrivals — NEXKART",
  description: "Shop our newest clothes, dresses, shirts, and footwear.",
};

export default function NewArrivalsPage() {
  const newProducts = PRODUCTS.filter((p) => p.isNew);

  return (
    <CollectionView
      initialProducts={newProducts}
      title="New Arrivals"
      subtitle="NEW STYLES JUST IN"
      description="Check out our newest outfits, fresh colors, and trending everyday styles ready to ship."
      heroImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
    />
  );
}

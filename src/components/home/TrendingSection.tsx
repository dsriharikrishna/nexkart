import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/types";

interface TrendingSectionProps {
  products: Product[];
}

export function TrendingSection({ products }: TrendingSectionProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ProductGrid products={products} columns={4} priorityCount={4} />
      </div>
    </section>
  );
}


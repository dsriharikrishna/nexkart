import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { MotionGrid } from "@/components/ui/motion";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  priorityCount?: number;
}

export function ProductGrid({ products, columns = 4, priorityCount = 4 }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 py-16 text-center">
        <p className="text-sm font-medium text-neutral-600">
          No products found. Try changing your filters.
        </p>
      </div>
    );
  }

  const gridColsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <MotionGrid className={`grid ${gridColsClass} gap-6 md:gap-8`}>
      {products.map((product, idx) => (
        <ProductCard key={product.id} product={product} priority={idx < priorityCount} />
      ))}
    </MotionGrid>
  );
}

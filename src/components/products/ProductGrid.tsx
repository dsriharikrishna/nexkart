import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  priorityCount?: number;
}

export function ProductGrid({ products, columns = 4, priorityCount = 4 }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="border border-dashed border-neutral-200 py-16 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          No pieces found in this selection
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
    <div className={`grid ${gridColsClass} gap-6 md:gap-8`}>
      {products.map((product, idx) => (
        <ProductCard key={product.id} product={product} priority={idx < priorityCount} />
      ))}
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/types";

interface NewArrivalsSectionProps {
  products: Product[];
  totalCount: number;
}

export function NewArrivalsSection({ products, totalCount }: NewArrivalsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between border-b border-[#EAEAEA] pb-4 sm:flex-row sm:items-end">
        <div>
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#707070]">
            FRESH DROPS
          </span>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
            New Arrivals
          </h2>
        </div>
        <Link
          href="/new-arrivals"
          className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#171717] hover:text-[#FFB800] sm:mt-0"
        >
          All New Arrivals ({totalCount}) <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <ProductGrid products={products} columns={4} priorityCount={4} />
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/types";

interface TrendingSectionProps {
  products: Product[];
}

export function TrendingSection({ products }: TrendingSectionProps) {
  return (
    <section className="border-t border-[#EAEAEA] bg-[#FFF9D6]/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-end">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD629]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171717]">
                POPULAR THIS WEEK
              </span>
            </div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
              Trending Outfits
            </h2>
          </div>
          <Link
            href="/collections"
            className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#171717] hover:text-[#FFB800] sm:mt-0"
          >
            See All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ProductGrid products={products} columns={4} priorityCount={4} />
      </div>
    </section>
  );
}

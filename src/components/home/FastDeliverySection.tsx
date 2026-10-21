import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/types";

interface FastDeliverySectionProps {
  products: Product[];
}

export function FastDeliverySection({ products }: FastDeliverySectionProps) {
  return (
    <section className="border-y border-[#EAEAEA] bg-neutral-50/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#FFB800]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#171717]">
                READY TO SHIP
              </span>
            </div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
              ⚡ Fast Delivery Outfits
            </h2>
            <p className="mt-1 text-xs text-[#707070]">
              In stock at nearby fulfillment hubs for fast delivery to your door.
            </p>
          </div>
          <Link
            href="/collections"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#171717] hover:text-[#FFB800]"
          >
            See All Fast Delivery <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ProductGrid products={products} columns={4} priorityCount={4} />
      </div>
    </section>
  );
}

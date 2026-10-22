import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "All Categories — NEXKART Fashion",
  description:
    "Explore our complete fashion catalog across all categories: jackets, dresses, tailoring, footwear, jewelry, beauty, and gifts with 45-60 min fast delivery.",
};

export default function CategoriesIndexPage() {
  return (
    <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      {/* Compact Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD629] bg-[#FFF9D6] px-3 py-0.5 text-[11px] font-bold text-[#171717]">
            <Sparkles className="h-3 w-3" />
            <span>Curated Quick-Commerce Catalog</span>
          </div>
          <h1 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717]">
            Shop by Category
          </h1>
          <p className="mt-1 text-xs text-neutral-500">
            Browse all product departments with guaranteed local hub dispatch and 45-60 minute doorstep delivery.
          </p>
        </div>
        <span className="text-xs font-semibold text-neutral-400 shrink-0">
          {CATEGORIES.length} Departments
        </span>
      </div>

      {/* Categories Grid - Full Width without awkward empty gaps */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4 lg:gap-5">
        {CATEGORIES.map((cat) => {
          const productCount = PRODUCTS.filter((p) => p.category === cat.slug).length;

          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD629] hover:shadow-lg"
            >
              {/* Category Image Cover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Delivery Badge */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#171717]/85 px-2.5 py-1 text-[10px] font-bold text-[#FFD629] backdrop-blur-xs">
                  <Zap className="h-3 w-3 fill-[#FFD629]" />
                  <span>45-60 mins</span>
                </div>

                {/* Product Count Badge */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#171717] backdrop-blur-xs">
                  {productCount} {productCount === 1 ? "Item" : "Items"}
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h2 className="font-heading text-lg font-bold tracking-tight sm:text-xl">
                    {cat.title}
                  </h2>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#FFB800]">
                    {cat.subtitle}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-neutral-500">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs font-bold text-[#171717] group-hover:text-[#FFB800]">
                  <span>Explore Catalog</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

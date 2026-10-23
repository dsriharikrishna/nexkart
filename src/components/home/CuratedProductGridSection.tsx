"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/types";

type TabKey = "trending" | "shop-by-cat" | "new-arrivals" | "bestsellers";

interface TabItem {
  id: TabKey;
  label: string;
}

const TABS: TabItem[] = [
  { id: "trending", label: "TRENDING NOW" },
  { id: "new-arrivals", label: "NEW ARRIVALS" },
  { id: "bestsellers", label: "BESTSELLERS" },
  { id: "shop-by-cat", label: "FESTIVE PICKS" },
];

interface CuratedProductGridSectionProps {
  products: Product[];
}

export function CuratedProductGridSection({ products }: CuratedProductGridSectionProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("trending");

  const displayedProducts = products.filter((p) => {
    switch (activeTab) {
      case "new-arrivals":
        return p.isNew;
      case "bestsellers":
        return p.isBestseller;
      case "shop-by-cat":
        return p.category === "tailoring" || p.category === "dresses" || p.category === "outerwear";
      case "trending":
      default:
        return p.isFeatured || p.isBestseller;
    }
  }).slice(0, 8);

  return (
    <section className="w-full bg-white py-3 sm:py-4" aria-label="Curated Products">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Clean Left-Aligned Header */}
        <div className="mb-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <h2 className="font-heading text-xl sm:text-2xl font-black tracking-tight text-[#171717]">
            Hottest Drops On Nexkart
          </h2>

          {/* Interactive Segment Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#171717] text-[#FFD629] shadow-xs"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-[#171717]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Static Product Cards Grid without animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayedProducts.map((product, index) => (
            <div key={product.id}>
              <ProductCard product={product} priority={index < 4} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#171717] bg-white px-6 py-2.5 text-xs font-black uppercase tracking-wider text-[#171717] transition-all hover:bg-[#171717] hover:text-[#FFD629] active:scale-95 shadow-xs"
          >
            <span>VIEW COMPLETE CATALOG</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { FilterSidebar } from "@/components/products/FilterSidebar";

function SlikkProductListingContent() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") || "all";
  const rawGender = searchParams.get("gender") || "all";
  const rawBrand = searchParams.get("namex") || "all";
  const searchQuery = searchParams.get("q") || "";

  // Dynamic Page Title
  const pageTitle = useMemo(() => {
    if (searchQuery) return `Search: "${searchQuery}"`;
    if (rawBrand !== "all") return rawBrand;
    if (rawCategory !== "all") return rawCategory;
    if (rawGender !== "all") return `${rawGender}'s Collection`;
    return "All Products";
  }, [searchQuery, rawBrand, rawCategory, rawGender]);

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>(rawCategory);
  const [selectedGender, setSelectedGender] = useState<string>(rawGender);
  const [selectedBrand, setSelectedBrand] = useState<string>(rawBrand);
  const [selectedPriceMax, setSelectedPriceMax] = useState<number>(100000);
  const [sortBy, setSortBy] = useState<
    "featured" | "price-asc" | "price-desc" | "newest"
  >("featured");

  // Keep state perfectly synchronized whenever the URL query params change (e.g. clicking category circles or banners)
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "all");
    setSelectedGender(searchParams.get("gender") || "all");
    setSelectedBrand(searchParams.get("namex") || "all");
  }, [searchParams]);

  // Accordion Expand States
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    gender: true,
    brand: true,
    size: false,
    shade: false,
    material: false,
  });

  const toggleSection = (sec: string) => {
    setOpenSections((prev) => ({ ...prev, [sec]: !prev[sec] }));
  };

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedGender("all");
    setSelectedBrand("all");
    setSelectedPriceMax(100000);
    setSortBy("featured");
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q))) ||
          (p.brand && p.brand.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "all") {
      const targetCat = selectedCategory.toLowerCase().trim();
      list = list.filter((p) => {
        const pCat = p.category.toLowerCase();
        if (pCat === targetCat) return true;
        if (p.tags && p.tags.some((t) => t.toLowerCase() === targetCat)) return true;
        return false;
      });
    }

    if (selectedGender !== "all") {
      list = list.filter(
        (p) =>
          p.gender === selectedGender ||
          p.gender === "unisex" ||
          p.gender === "all"
      );
    }

    if (selectedBrand !== "all") {
      const b = selectedBrand.toLowerCase().trim();
      list = list.filter(
        (p) =>
          (p.brand && p.brand.toLowerCase().includes(b)) ||
          p.name.toLowerCase().includes(b) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(b))) ||
          p.category.toLowerCase().includes(b)
      );
    }

    list = list.filter((p) => p.price <= selectedPriceMax);

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return list;
  }, [searchQuery, selectedCategory, selectedGender, selectedBrand, selectedPriceMax, sortBy]);

  return (
    <div className="w-full min-h-screen bg-white text-[#171717]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Filter Column */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-[#171717]" />
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-[#171717]">
                  Filters
                </span>
              </div>
              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider"
              >
                Clear All
              </button>
            </div>

            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedPriceMax={selectedPriceMax}
              setSelectedPriceMax={setSelectedPriceMax}
              openSections={openSections}
              toggleSection={toggleSection}
            />
          </aside>

          {/* Right Product Grid Area */}
          <main className="flex-1 min-w-0">
            {/* Top Toolbar */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
              <div>
                <h1 className="font-heading text-xl sm:text-2xl font-black text-[#171717] tracking-tight capitalize">
                  {selectedCategory !== "all" ? selectedCategory : pageTitle}
                </h1>
                <p className="mt-0.5 text-xs text-neutral-500 font-medium">
                  {filteredProducts.length} items
                </p>

                {/* Active Filter Chips */}
                {(selectedCategory !== "all" ||
                  selectedGender !== "all" ||
                  selectedBrand !== "all") && (
                  <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                    {selectedCategory !== "all" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-semibold text-[#171717]">
                        <span className="capitalize">
                          Category: {selectedCategory}
                        </span>
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSelectedCategory("all")}
                        />
                      </span>
                    )}
                    {selectedBrand !== "all" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-semibold text-[#171717]">
                        <span>{selectedBrand}</span>
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSelectedBrand("all")}
                        />
                      </span>
                    )}
                    {selectedGender !== "all" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-semibold text-[#171717]">
                        <span className="capitalize">{selectedGender}</span>
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSelectedGender("all")}
                        />
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-neutral-500 font-medium">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as "featured" | "price-asc" | "price-desc" | "newest"
                    )
                  }
                  className="rounded-xl border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-[#171717] focus:border-[#171717] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-heading text-base font-bold text-neutral-800">
                  No products match your filters
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Try adjusting your filters or price range.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 rounded-full bg-[#171717] px-5 py-2 text-xs font-bold text-white hover:bg-black"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4 sm:gap-4 lg:gap-5">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-20 text-center text-xs">
          Loading products...
        </div>
      }
    >
      <SlikkProductListingContent />
    </Suspense>
  );
}

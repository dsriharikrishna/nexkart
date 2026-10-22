"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal, X, ArrowLeft } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

function SlikkProductListingContent() {
  const searchParams = useSearchParams();
  const bannerName = searchParams.get("namex") || searchParams.get("q") || "All Products";
  const sectionName = searchParams.get("section_name") || "";

  // Filters State
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedPriceMax, setSelectedPriceMax] = useState<number>(100000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Accordion Expand States
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    gender: true,
    brand: true,
    category: false,
    size: false,
    shade: false,
    material: false,
  });

  const toggleSection = (sec: string) => {
    setOpenSections((prev) => ({ ...prev, [sec]: !prev[sec] }));
  };

  const clearAllFilters = () => {
    setSelectedGender("all");
    setSelectedBrand("all");
    setSelectedPriceMax(100000);
    setSortBy("featured");
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Filter by banner query if present
    if (bannerName && bannerName !== "All Products") {
      const q = bannerName.toLowerCase();
      const match = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          (p.brand && p.brand.toLowerCase().includes(q))
      );
      if (match.length > 0) list = match;
    }

    // Gender Filter
    if (selectedGender !== "all") {
      list = list.filter((p) => p.gender === selectedGender || p.gender === "unisex" || p.gender === "all");
    }

    // Brand Filter
    if (selectedBrand !== "all") {
      list = list.filter(
        (p) =>
          (p.brand && p.brand.toLowerCase() === selectedBrand.toLowerCase()) ||
          p.category.toLowerCase().includes(selectedBrand.toLowerCase())
      );
    }

    // Price Filter
    list = list.filter((p) => p.price <= selectedPriceMax);

    // Sort
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
  }, [bannerName, selectedGender, selectedBrand, selectedPriceMax, sortBy]);

  return (
    <div className="w-full min-h-screen bg-white text-[#171717]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Filter Column (Slikk exact accordion layout) */}
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

            {/* Accordion Filter Items */}
            <div className="divide-y divide-neutral-200 text-xs">
              {/* 1. Price Range */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleSection("price")}
                  className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
                >
                  <span>+ Price Range</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSections.price ? "rotate-180" : ""}`} />
                </button>
                {openSections.price && (
                  <div className="mt-3 space-y-2 text-neutral-600">
                    <input
                      type="range"
                      min={299}
                      max={100000}
                      step={500}
                      value={selectedPriceMax}
                      onChange={(e) => setSelectedPriceMax(Number(e.target.value))}
                      className="w-full accent-[#171717]"
                    />
                    <div className="flex justify-between text-[11px] font-semibold text-neutral-800">
                      <span>₹299</span>
                      <span>Under ₹{selectedPriceMax.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Gender */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleSection("gender")}
                  className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
                >
                  <span>+ Gender</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSections.gender ? "rotate-180" : ""}`} />
                </button>
                {openSections.gender && (
                  <div className="mt-2.5 space-y-2">
                    {["all", "women", "men"].map((g) => (
                      <label key={g} className="flex items-center gap-2 cursor-pointer capitalize text-neutral-700">
                        <input
                          type="radio"
                          name="gender"
                          checked={selectedGender === g}
                          onChange={() => setSelectedGender(g)}
                          className="accent-[#171717]"
                        />
                        <span>{g === "all" ? "All Genders" : g}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Brand */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleSection("brand")}
                  className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
                >
                  <span>+ Brand</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSections.brand ? "rotate-180" : ""}`} />
                </button>
                {openSections.brand && (
                  <div className="mt-2.5 space-y-2">
                    {["all", "Tokyo Talkies", "Aadvi Fashion", "Bewakoof", "Snitch", "Freehand"].map((b) => (
                      <label key={b} className="flex items-center gap-2 cursor-pointer text-neutral-700">
                        <input
                          type="radio"
                          name="brand"
                          checked={selectedBrand.toLowerCase() === b.toLowerCase()}
                          onChange={() => setSelectedBrand(b)}
                          className="accent-[#171717]"
                        />
                        <span>{b === "all" ? "All Brands" : b}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Static Slikk Filter Rows */}
              {["Product Type", "Shade", "Size", "Aesthetic", "Material", "Boldness", "Tops Type", "Body Type Fit"].map(
                (item) => (
                  <div key={item} className="py-3.5">
                    <button
                      onClick={() => toggleSection(item)}
                      className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800 hover:text-black"
                    >
                      <span>+ {item}</span>
                      <ChevronDown className="h-4 w-4 text-neutral-400" />
                    </button>
                  </div>
                )
              )}
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <main className="flex-1 min-w-0">
            {/* Top Toolbar: Heading, Item Count, and Sort Dropdown */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
              <div>
                <h1 className="font-heading text-xl sm:text-2xl font-black text-[#171717] tracking-tight">
                  {bannerName}
                </h1>
                <p className="mt-0.5 text-xs text-neutral-500 font-medium">
                  {filteredProducts.length} items
                </p>

                {/* Active Filter Chips */}
                {(selectedGender !== "all" || selectedBrand !== "all") && (
                  <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                    {selectedBrand !== "all" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-semibold text-[#171717]">
                        <span>{selectedBrand}</span>
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedBrand("all")} />
                      </span>
                    )}
                    {selectedGender !== "all" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-semibold text-[#171717]">
                        <span className="capitalize">{selectedGender}</span>
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedGender("all")} />
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-neutral-500 font-medium">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="rounded-xl border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-[#171717] focus:border-[#171717] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid (4 columns desktop, 2 columns mobile) */}
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-heading text-base font-bold text-neutral-800">No products match your filters</p>
                <p className="mt-1 text-xs text-neutral-500">Try adjusting your filters or price range.</p>
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
    <Suspense fallback={<div className="min-h-screen bg-white py-20 text-center text-xs">Loading products...</div>}>
      <SlikkProductListingContent />
    </Suspense>
  );
}

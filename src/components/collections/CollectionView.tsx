"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Product, FilterState, ProductSize } from "@/types";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FilterBar } from "@/components/collections/FilterBar";
import { luxuryTransition } from "@/components/ui/motion";

interface CollectionViewProps {
  initialProducts: Product[];
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  defaultGender?: "all" | "men" | "women";
  categorySlug?: string;
  collectionSlug?: string;
}

export function CollectionView({
  initialProducts,
  title,
  subtitle,
  description,
  heroImage,
  defaultGender = "all",
  categorySlug,
  collectionSlug,
}: CollectionViewProps) {
  const [filters, setFilters] = useState<FilterState>({
    gender: defaultGender,
    category: categorySlug || "all",
    collection: collectionSlug || "all",
    colors: [],
    sizes: [],
    priceRange: [0, 200000],
    onlyInStock: false,
    sortBy: "featured",
  });

  // Collect available colors and sizes across the initial dataset
  const availableColors = useMemo(() => {
    const set = new Set<string>();
    initialProducts.forEach((p) => p.colors.forEach((c) => set.add(c.name)));
    return Array.from(set);
  }, [initialProducts]);

  const availableSizes: ProductSize[] = ["XS", "S", "M", "L", "XL", "XXL", "OS"];

  // Filter & sort logic client-side
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Gender filter
    if (filters.gender && filters.gender !== "all") {
      result = result.filter(
        (p) => p.gender === filters.gender || p.gender === "unisex" || p.gender === "all"
      );
    }

    // Category filter
    if (filters.category && filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Collection filter
    if (filters.collection && filters.collection !== "all") {
      result = result.filter((p) => p.collection === filters.collection);
    }

    // Colors
    if (filters.colors.length > 0) {
      result = result.filter((p) => p.colors.some((c) => filters.colors.includes(c.name)));
    }

    // Sizes
    if (filters.sizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => filters.sizes.includes(s)));
    }

    // Price
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // In stock
    if (filters.onlyInStock) {
      result = result.filter((p) => p.isAvailable && p.variants.some((v) => v.inStock));
    }

    // Sort
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [initialProducts, filters]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Editorial Header Banner */}
      {heroImage ? (
        <div className="relative mb-12 h-64 overflow-hidden rounded-3xl border border-[#E8E2D2] bg-neutral-900 sm:h-80 md:h-96">
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-8 bottom-8 max-w-2xl text-white">
            {subtitle && (
              <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
                {subtitle}
              </span>
            )}
            <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="text-xs font-light leading-relaxed text-neutral-300 sm:text-sm">
                {description}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="mx-auto mb-12 max-w-3xl pt-6 text-center">
          {subtitle && (
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
              {subtitle}
            </span>
          )}
          <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-xl text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Filter and Sorting Controls */}
      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        availableColors={availableColors}
        availableSizes={availableSizes}
        totalResults={filteredProducts.length}
      />

      {/* Results Count & Product Grid */}
      <div className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
        Showing {filteredProducts.length} items
      </div>

      <ProductGrid products={filteredProducts} columns={4} priorityCount={4} />
    </motion.div>
  );
}

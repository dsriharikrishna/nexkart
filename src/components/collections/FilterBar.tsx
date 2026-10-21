"use client";

import { useState } from "react";
import { Filter, X, ChevronDown } from "lucide-react";
import { FilterState, ProductSize } from "@/types";
import { FilterDrawer } from "./FilterDrawer";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableColors: string[];
  availableSizes: ProductSize[];
  totalResults: number;
}

export function FilterBar({
  filters,
  onFilterChange,
  availableColors,
  availableSizes,
  totalResults,
}: FilterBarProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleGenderChange = (gender: "all" | "men" | "women") => {
    onFilterChange({ ...filters, gender });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      sortBy: e.target.value as FilterState["sortBy"],
    });
  };

  const toggleColor = (color: string) => {
    const updated = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onFilterChange({ ...filters, colors: updated });
  };

  const toggleSize = (size: ProductSize) => {
    const updated = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: updated });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      priceRange: [filters.priceRange[0], Number(e.target.value)],
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      ...filters,
      gender: "all",
      category: "all",
      colors: [],
      sizes: [],
      priceRange: [0, 200000],
      onlyInStock: false,
    });
  };

  const hasActiveFilters =
    (filters.gender && filters.gender !== "all") ||
    filters.colors.length > 0 ||
    filters.sizes.length > 0 ||
    filters.priceRange[1] < 200000 ||
    filters.onlyInStock;

  return (
    <div className="mb-8 w-full">
      {/* Top Filter and Sort Controls Bar */}
      <div className="flex flex-col items-start justify-between gap-4 border-y border-neutral-200 py-4 sm:flex-row sm:items-center">
        {/* Gender Tabs (Pill-shaped Filter Controls) */}
        <div className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 p-1">
          {(["all", "women", "men"] as const).map((gender) => (
            <button
              key={gender}
              onClick={() => handleGenderChange(gender)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                filters.gender === gender
                  ? "shadow-xs bg-[#171717] text-[#FFD629]"
                  : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              {gender === "all" ? "All" : gender === "women" ? "Women" : "Men"}
            </button>
          ))}
        </div>

        {/* Right side: Filter drawer toggle & Sort */}
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-800 transition-all hover:border-black hover:bg-neutral-50"
          >
            <Filter className="h-3.5 w-3.5 text-[#0A0A0A]" />
            <span>Filters {hasActiveFilters && `(Active)`}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden text-[11px] uppercase tracking-[0.15em] text-neutral-400 md:inline">
              Sort By:
            </span>
            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="focus:outline-hidden cursor-pointer appearance-none rounded-full border border-neutral-300 bg-white py-2 pl-4 pr-9 text-xs font-semibold uppercase tracking-wider text-neutral-900 focus:border-neutral-950"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Chips (Pill-shaped VOLT Badges) */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-3">
          <span className="mr-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Active:
          </span>
          {filters.gender && filters.gender !== "all" && (
            <span className="shadow-2xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-medium text-neutral-800">
              Division: {filters.gender}
              <button onClick={() => handleGenderChange("all")}>
                <X className="h-3 w-3 hover:text-[#FF3344]" />
              </button>
            </span>
          )}
          {filters.colors.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-800 shadow-2xs"
            >
              {c}
              <button onClick={() => toggleColor(c)}>
                <X className="h-3 w-3 hover:text-black" />
              </button>
            </span>
          ))}
          {filters.sizes.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-800 shadow-2xs"
            >
              Size: {s}
              <button onClick={() => toggleSize(s)}>
                <X className="h-3 w-3 hover:text-black" />
              </button>
            </span>
          ))}
          {filters.priceRange[1] < 200000 && (
            <span className="shadow-2xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-800">
              Under ₹{filters.priceRange[1].toLocaleString("en-IN")}
              <button
                onClick={() =>
                  onFilterChange({ ...filters, priceRange: [filters.priceRange[0], 200000] })
                }
              >
                <X className="h-3 w-3 hover:text-[#8A6A3B]" />
              </button>
            </span>
          )}
          <button
            onClick={clearAllFilters}
            className="ml-2 text-[11px] uppercase tracking-wider text-[#8A6A3B] underline hover:text-black"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Slide-over Filter Panel / Drawer */}
      <FilterDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        filters={filters}
        onFilterChange={onFilterChange}
        availableColors={availableColors}
        availableSizes={availableSizes}
        totalResults={totalResults}
        toggleColor={toggleColor}
        toggleSize={toggleSize}
        handlePriceChange={handlePriceChange}
        clearAllFilters={clearAllFilters}
      />
    </div>
  );
}

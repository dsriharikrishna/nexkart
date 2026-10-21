"use client";

import { useState } from "react";
import { Filter, X, ChevronDown, Check } from "lucide-react";
import { FilterState, ProductSize } from "@/types";

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
        {/* Gender Tabs (Pill-shaped VOLT Filter Controls) */}
        <div className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 p-1">
          {(["all", "women", "men"] as const).map((gender) => (
            <button
              key={gender}
              onClick={() => handleGenderChange(gender)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all ${
                filters.gender === gender
                  ? "shadow-xs bg-gradient-to-r from-[#EED8A1] via-[#D4AF62] to-[#C89B48] text-[#101010]"
                  : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              {gender === "all" ? "All Divisions" : gender}
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
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Arrivals</option>
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
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="backdrop-blur-xs absolute inset-0 bg-black/40 transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <div className="flex w-screen max-w-md flex-col justify-between bg-white p-6 shadow-2xl sm:rounded-l-3xl">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <h3 className="font-heading text-base font-bold uppercase tracking-wider">
                    Sartorial Filters
                  </h3>
                  <button
                    onClick={() => setMobileDrawerOpen(false)}
                    className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-black"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="max-h-[calc(100vh-180px)] space-y-6 overflow-y-auto py-6">
                  {/* Sizes */}
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider">Sizes</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {availableSizes.map((size) => {
                        const isSelected = filters.sizes.includes(size);
                        return (
                          <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`rounded-xl border py-2.5 text-center text-xs font-medium transition-all ${
                              isSelected
                                ? "border-[#101010] bg-[#101010] text-[#D4AF62] shadow-sm"
                                : "border-neutral-200 bg-white text-neutral-800 hover:border-[#D4AF62] hover:bg-neutral-50"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider">Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      {availableColors.map((color) => {
                        const isSelected = filters.colors.includes(color);
                        return (
                          <button
                            key={color}
                            onClick={() => toggleColor(color)}
                            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                              isSelected
                                ? "border-[#101010] bg-[#101010] text-[#D4AF62] shadow-sm"
                                : "border-neutral-200 bg-white text-neutral-700 hover:border-[#D4AF62] hover:bg-neutral-50"
                            }`}
                          >
                            {isSelected && <Check className="h-3 w-3" />}
                            {color}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price Slider */}
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                      <span>Maximum Price</span>
                      <span className="font-bold text-[#8A6A3B]">
                        ₹{filters.priceRange[1].toLocaleString("en-IN")}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5000}
                      max={200000}
                      step={5000}
                      value={filters.priceRange[1]}
                      onChange={handlePriceChange}
                      className="w-full cursor-pointer accent-[#D4AF62]"
                    />
                    <div className="mt-1 flex justify-between text-[11px] text-neutral-400">
                      <span>₹5,000</span>
                      <span>₹2,00,000+</span>
                    </div>
                  </div>

                  {/* Stock Availability Toggle */}
                  <div className="pt-2">
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={filters.onlyInStock}
                        onChange={(e) =>
                          onFilterChange({ ...filters, onlyInStock: e.target.checked })
                        }
                        className="h-4 w-4 rounded-md accent-[#101010]"
                      />
                      <span className="text-xs font-medium uppercase tracking-wider text-neutral-800">
                        In-Stock Inventory Only
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="flex gap-3 border-t border-neutral-200 pt-4">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 rounded-full border border-neutral-300 py-3 text-xs uppercase tracking-[0.15em] text-neutral-700 transition-colors hover:border-black"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex-1 rounded-full bg-gradient-to-r from-[#EED8A1] via-[#D4AF62] to-[#C89B48] py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#101010] shadow-md transition-all hover:opacity-95"
                >
                  View ({totalResults}) Pieces
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

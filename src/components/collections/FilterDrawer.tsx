"use client";

import { X, Check } from "lucide-react";
import { FilterState, ProductSize } from "@/types";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableColors: string[];
  availableSizes: ProductSize[];
  totalResults: number;
  toggleColor: (color: string) => void;
  toggleSize: (size: ProductSize) => void;
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearAllFilters: () => void;
}

export function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  availableColors,
  availableSizes,
  totalResults,
  toggleColor,
  toggleSize,
  handlePriceChange,
  clearAllFilters,
}: FilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="backdrop-blur-xs absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="flex w-screen max-w-md flex-col justify-between bg-white p-6 shadow-2xl sm:rounded-l-3xl">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <h3 className="font-heading text-base font-bold uppercase tracking-wider">
                Filters
              </h3>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-black"
                aria-label="Close filters"
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
                            ? "border-[#101010] bg-[#101010] text-[#FFD629] shadow-sm"
                            : "border-neutral-200 bg-white text-neutral-800 hover:border-[#FFD629] hover:bg-neutral-50"
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
                            ? "border-[#101010] bg-[#101010] text-[#FFD629] shadow-sm"
                            : "border-neutral-200 bg-white text-neutral-700 hover:border-[#FFD629] hover:bg-neutral-50"
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
                  <span className="font-bold text-[#171717]">
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
                  className="w-full cursor-pointer accent-[#FFD629]"
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
                    In Stock Only
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
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#171717] shadow-md transition-all hover:brightness-105"
            >
              Show ({totalResults}) Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

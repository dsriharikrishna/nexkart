"use client";

import { ChevronDown } from "lucide-react";

export const CATEGORIES_LIST = [
  { slug: "all", label: "All Categories" },
  { slug: "outerwear", label: "Outerwear" },
  { slug: "tailoring", label: "Tailoring" },
  { slug: "knitwear", label: "Knitwear" },
  { slug: "shirts", label: "Shirts" },
  { slug: "dresses", label: "Dresses" },
  { slug: "trousers", label: "Trousers" },
  { slug: "accessories", label: "Accessories" },
  { slug: "footwear", label: "Footwear" },
  { slug: "jewelry", label: "Jewelry" },
  { slug: "beauty", label: "Beauty" },
  { slug: "gifts", label: "Gifting" },
];

export const BRANDS_LIST = [
  "all",
  "Tokyo Talkies",
  "Aadvi Fashion",
  "Bewakoof",
  "Snitch",
  "Freehand",
];

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedPriceMax: number;
  setSelectedPriceMax: (price: number) => void;
  openSections: Record<string, boolean>;
  toggleSection: (sec: string) => void;
}

export function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
  selectedBrand,
  setSelectedBrand,
  selectedPriceMax,
  setSelectedPriceMax,
  openSections,
  toggleSection,
}: FilterSidebarProps) {
  return (
    <div className="divide-y divide-neutral-200 text-xs">
      {/* 1. Category */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("category")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Category</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.category ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.category && (
          <div className="mt-2.5 max-h-48 overflow-y-auto space-y-2 pr-1">
            {CATEGORIES_LIST.map((c) => (
              <label
                key={c.slug}
                className="flex items-center gap-2 cursor-pointer capitalize text-neutral-700"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory.toLowerCase() === c.slug.toLowerCase()}
                  onChange={() => setSelectedCategory(c.slug)}
                  className="accent-[#171717]"
                />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 2. Price Range */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("price")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Price Range</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.price ? "rotate-180" : ""
            }`}
          />
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

      {/* 3. Gender */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("gender")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Gender</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.gender ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.gender && (
          <div className="mt-2.5 space-y-2">
            {["all", "women", "men"].map((g) => (
              <label
                key={g}
                className="flex items-center gap-2 cursor-pointer capitalize text-neutral-700"
              >
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

      {/* 4. Brand */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("brand")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Brand</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.brand ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.brand && (
          <div className="mt-2.5 space-y-2">
            {BRANDS_LIST.map((b) => (
              <label
                key={b}
                className="flex items-center gap-2 cursor-pointer text-neutral-700"
              >
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

      {/* 5. Size */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("size")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Size</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.size ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.size && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {["XS", "S", "M", "L", "XL", "OS"].map((sz) => (
              <span
                key={sz}
                className="rounded-md border border-neutral-300 px-2.5 py-1 text-[11px] font-semibold text-neutral-700 hover:border-black cursor-pointer"
              >
                {sz}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 6. Material */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("material")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Material</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.material ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.material && (
          <div className="mt-2.5 space-y-1.5 text-neutral-600">
            {["100% Cashmere", "Virgin Wool", "Mulberry Silk", "Organic Cotton", "Italian Leather", "Sterling Silver"].map((m) => (
              <label key={m} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#171717]" />
                <span>{m}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 7. Shade & Color */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("shade")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Shade</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.shade ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.shade && (
          <div className="mt-2.5 flex items-center gap-2 flex-wrap">
            {[
              { name: "Black", hex: "#111111" },
              { name: "White", hex: "#FFFFFF" },
              { name: "Navy", hex: "#0F1A2C" },
              { name: "Camel", hex: "#C19A6B" },
              { name: "Silver", hex: "#C0C0C0" },
              { name: "Gold", hex: "#E5C158" },
            ].map((c) => (
              <span
                key={c.name}
                title={c.name}
                style={{ backgroundColor: c.hex }}
                className="h-5 w-5 rounded-full border border-neutral-300 shadow-xs cursor-pointer hover:scale-110 transition-transform"
              />
            ))}
          </div>
        )}
      </div>

      {/* 8. Aesthetic & Style */}
      <div className="py-3.5">
        <button
          onClick={() => toggleSection("aesthetic")}
          className="flex w-full items-center justify-between font-bold uppercase tracking-wider text-neutral-800"
        >
          <span>+ Aesthetic</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openSections.aesthetic ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSections.aesthetic && (
          <div className="mt-2.5 space-y-1.5 text-neutral-600">
            {["Quiet Luxury", "Modern Tailoring", "Atelier Autumn", "Minimalist Capsule", "Evening Luxe"].map((a) => (
              <label key={a} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#171717]" />
                <span>{a}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

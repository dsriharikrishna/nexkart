"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useSearchOverlayStore } from "@/stores/searchOverlayStore";
import { PRODUCTS } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

export function SearchModal() {
  const isOpen = useSearchOverlayStore((state) => state.isOpen);
  const closeSearch = useSearchOverlayStore((state) => state.closeSearch);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const results =
    query.trim().length > 1
      ? PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
        )
      : [];

  const suggestedTerms = [
    "Cashmere",
    "Wool Overcoat",
    "Tailored Blazer",
    "Silk Gown",
    "Lug Sole Loafer",
    "Selvedge Denim",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20">
      {/* Backdrop */}
      <div
        className="backdrop-blur-xs fixed inset-0 bg-black/60 transition-opacity"
        onClick={closeSearch}
      />

      {/* Modal Dialog */}
      <div className="animate-in fade-in zoom-in-95 relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-neutral-200/90 bg-[#FBF9F4] p-3 shadow-2xl duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 sm:px-6">
          <Search className="h-5 w-5 shrink-0 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search our atelier catalogue (e.g., Cashmere, Coat, Tailoring)..."
            className="focus:outline-hidden w-full bg-transparent text-sm text-neutral-900 placeholder-neutral-400 sm:text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={closeSearch}
            className="ml-2 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-600 hover:bg-[#D4AF62] hover:text-black"
          >
            Esc
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim().length <= 1 ? (
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A6A3B]">
                CURATED SARTORIAL SEARCHES
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedTerms.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="hover:shadow-xs rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-800 transition-all hover:border-[#D4AF62] hover:bg-[#D4AF62]/20 hover:text-black"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-heading text-sm font-semibold text-neutral-800">
                No matching pieces found for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Try searching for broader terms like &ldquo;Wool&rdquo;, &ldquo;Dress&rdquo;, or
                &ldquo;Trousers&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                MATCHING PIECES ({results.length})
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {results.slice(0, 6).map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    onClick={closeSearch}
                    className="group flex gap-3 border border-transparent p-2 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
                  >
                    <div className="h-20 w-16 shrink-0 overflow-hidden bg-neutral-100">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="line-clamp-1 font-heading text-xs font-semibold text-neutral-900 group-hover:text-[#9E643C]">
                        {item.name}
                      </h4>
                      <p className="mt-0.5 line-clamp-1 text-[11px] text-neutral-500">
                        {item.subtitle}
                      </p>
                      <span className="mt-1 text-xs font-bold text-neutral-900">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

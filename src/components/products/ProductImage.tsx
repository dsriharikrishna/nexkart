import React from "react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  price: number;
  compareAtPrice?: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  showOverlay?: boolean;
  aspectRatio?: "4/5" | "square" | "auto";
}

/**
 * Reusable ProductImage component featuring:
 * 1. High-resolution commercial 4:5 fashion framing
 * 2. Dynamic price overlay positioned at the bottom of the image
 * 3. Flowing price directly from centralized product data (never hardcoded)
 * 4. Graceful fallback on load error
 */
export function ProductImage({
  src,
  alt,
  price,
  compareAtPrice,
  priority = false,
  className = "",
  imageClassName = "",
  showOverlay = true,
  aspectRatio = "4/5",
}: ProductImageProps) {
  const aspectClass =
    aspectRatio === "4/5"
      ? "aspect-[4/5]"
      : aspectRatio === "square"
      ? "aspect-square"
      : "";

  const discountPercent =
    compareAtPrice && compareAtPrice > price
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : null;

  return (
    <div
      className={`relative w-full overflow-hidden bg-neutral-100 ${aspectClass} ${className}`}
    >
      <img
        src={src || "/images/products/placeholder.webp"}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-full object-cover object-center transition-transform duration-700 ease-out ${imageClassName}`}
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.includes("placeholder.webp")) {
            target.src = "/images/products/placeholder.webp";
          }
        }}
      />

      {/* Dynamic Price Overlay at bottom of product image */}
      {showOverlay && (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 py-2.5 text-white backdrop-blur-[1px] transition-opacity">
          <div className="flex items-baseline justify-between gap-1.5">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-sm font-extrabold tracking-tight text-white drop-shadow-xs">
                {formatCurrency(price)}
              </span>
              {compareAtPrice && compareAtPrice > price && (
                <span className="text-[11px] font-medium text-neutral-300 line-through">
                  {formatCurrency(compareAtPrice)}
                </span>
              )}
            </div>

            {discountPercent && discountPercent > 0 && (
              <span className="rounded bg-[#147924] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-xs">
                {discountPercent}% OFF
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

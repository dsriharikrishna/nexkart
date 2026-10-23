"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Eye, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [mounted, setMounted] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const isSaved = mounted && isInWishlist;
  const addItem = useCartStore((state) => state.addItem);

  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultVariant) {
      addItem(product, defaultVariant.color, defaultVariant.size, 1);
      setAddedNotice(true);
      setTimeout(() => setAddedNotice(false), 1800);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
      {/* Editorial Fashion Product Image (4:5 Portrait Ratio) with Dynamic Price Overlay */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-neutral-100"
        aria-label={product.name}
      >
        <ProductImage
          src={product.images[0] || "/images/products/placeholder.webp"}
          alt={product.name}
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          priority={priority}
          imageClassName=""
        />

        {/* Eye Quick View Icon on top right (Slikk style) */}
        <div className="absolute right-2.5 top-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-xs">
          <Eye className="h-3.5 w-3.5" />
        </div>

        {/* Try & Buy Black Sticker Pill at bottom left of image (Slikk style)
        <div className="absolute bottom-2.5 left-2.5 z-10 rounded-md bg-black px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
          Try &amp; Buy
        </div> */}

        {/* Heart Wishlist Icon at bottom right of image (Slikk style) */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute bottom-2.5 right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full transition-all ${
            isSaved
              ? "bg-[#171717] text-[#FFD629] scale-110 shadow-md"
              : "bg-black/30 text-white/90 backdrop-blur-xs hover:bg-black/60 hover:text-white"
          }`}
          aria-label={isSaved ? `Remove ${product.name} from saved items` : `Save ${product.name}`}
        >
          <Heart className={`h-3.5 w-3.5 ${isSaved ? "fill-[#FFD629]" : ""}`} />
        </button>
      </Link>

      {/* Slikk Card Info: Brand, Title, Price, Discount Pill */}
      <div className="flex flex-col p-3 text-left">
        {/* Brand Name */}
        <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-tight">
          {product.brand || (product.category === "outerwear" ? "Tokyo Talkies" : product.category === "tailoring" ? "Aadvi Fashion" : "Bewakoof")}
        </span>

        {/* Product Title */}
        <Link href={`/products/${product.slug}`} className="group-hover:text-neutral-950">
          <h3 className="line-clamp-1 text-xs text-neutral-800 font-normal leading-snug hover:underline">
            {product.name}
          </h3>
        </Link>

        {/* Quick Add To Bag Strip */}
        <div className="mt-2.5 flex items-center justify-between border-t border-neutral-100 pt-2 text-[10px]">
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            ⚡ <span>{product.estimatedDeliveryTime || "60 Min"}</span>
          </span>
          <button
            onClick={handleQuickAdd}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#171717] shadow-xs cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95 select-none ${
              addedNotice
                ? "bg-emerald-500 text-white hover:bg-emerald-600"
                : "bg-gradient-to-r from-[#FFE566] via-[#FFD629] to-[#FFC400] hover:from-[#FFD629] hover:to-[#FFAE00] border border-[#F0BE00]/50 hover:shadow-sm"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {addedNotice ? (
              <>
                <Check className="h-3 w-3 stroke-[2.5]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="h-3 w-3 stroke-[2.5] fill-[#171717]/10" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}


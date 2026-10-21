"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { formatCurrency, formatDiscount } from "@/lib/utils";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";
import { fadeUpVariants } from "@/components/ui/motion";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedNotice, setAddedNotice] = useState(false);

  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const addItem = useCartStore((state) => state.addItem);

  const discountText = formatDiscount(product.price, product.compareAtPrice);
  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultVariant) {
      addItem(product, defaultVariant.color, defaultVariant.size, 1);
      setAddedNotice(true);
      setTimeout(() => setAddedNotice(false), 2000);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 hover:border-[#D4AF62]/50 hover:shadow-lg"
    >
      {/* Image Container with Editorial Aspect Ratio (4:5) */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-t-2xl bg-neutral-100"
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => {
          setCurrentImageIndex(0);
        }}
      >
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          onError={(e) => {
            // Graceful fallback to high quality editorial luxury placeholder
            const target = e.currentTarget;
            if (!target.src.includes("1539571696357")) {
              target.src =
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85";
            }
          }}
        />

        {/* Badges (Champagne Gold & Antique Gold Pill Design) */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="shadow-xs rounded-full bg-gradient-to-r from-[#EED8A1] via-[#D4AF62] to-[#C89B48] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#101010]">
              NEW IN
            </span>
          )}
          {discountText && (
            <span className="shadow-xs rounded-full border border-[#8A6A3B]/30 bg-[#8A6A3B] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EA]">
              {discountText}
            </span>
          )}
        </div>

        {/* Wishlist Toggle Button (Rounded Minimalist Control) */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute right-3 top-3 z-10 rounded-full p-2 transition-all duration-200 ${
            isInWishlist
              ? "bg-[#D4AF62] text-[#101010] shadow-sm"
              : "backdrop-blur-xs border border-neutral-200/80 bg-white/85 text-neutral-800 hover:border-[#D4AF62] hover:bg-white hover:text-black"
          }`}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-3.5 w-3.5 ${isInWishlist ? "fill-[#101010]" : ""}`} />
        </button>

        {/* Quick Add Overlay on Desktop Hover (Pill-shaped Champagne Gold Primary Button) */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:flex">
          <button
            onClick={handleQuickAdd}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98] ${
              addedNotice
                ? "border border-[#101010] bg-[#101010] text-[#D4AF62]"
                : "bg-gradient-to-r from-[#EED8A1] via-[#D4AF62] to-[#C89B48] text-[#101010] hover:opacity-95 hover:shadow-lg"
            }`}
          >
            {addedNotice ? (
              <>
                <Check className="h-3.5 w-3.5" /> ADDED TO BAG
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5" /> QUICK ADD ({defaultVariant?.size})
              </>
            )}
          </button>
        </div>
      </Link>

      {/* Product Details Block */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          {/* Colors palette dots */}
          <div className="mb-2 flex items-center gap-1.5">
            {product.colors.slice(0, 4).map((c) => (
              <span
                key={c.name}
                className="h-2.5 w-2.5 rounded-full border border-neutral-300"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-neutral-400">+{product.colors.length - 4}</span>
            )}
          </div>

          <h3 className="line-clamp-1 font-heading text-xs font-semibold tracking-wide text-neutral-900 transition-colors group-hover:text-[#8A6A3B]">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-0.5 line-clamp-1 text-[11px] text-neutral-500">{product.subtitle}</p>
        </div>

        {/* Price & Mobile Add */}
        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-semibold text-neutral-950">
              {formatCurrency(product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-[11px] text-neutral-400 line-through">
                {formatCurrency(product.compareAtPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className="p-1.5 text-neutral-700 hover:text-neutral-950 lg:hidden"
            aria-label="Quick add"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

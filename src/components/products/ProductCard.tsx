"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Check, Zap } from "lucide-react";
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
      setTimeout(() => setAddedNotice(false), 1800);
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
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white transition-all duration-300 hover:border-[#FFD629] hover:shadow-md"
    >
      {/* Image Container with Editorial Fashion Aspect Ratio (4:5) */}
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
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes("1539571696357")) {
              target.src =
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85";
            }
          }}
        />

        {/* Badges: Fast Delivery + Discount + New In */}
        <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-1.5">
          {product.isFastDeliveryEligible && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#171717] px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#FFD629] shadow-xs">
              <Zap className="h-2.5 w-2.5 fill-[#FFD629] text-[#FFD629]" />
              {product.estimatedDeliveryTime || "60 mins"}
            </span>
          )}

          {product.isNew && (
            <span className="inline-flex rounded-full bg-[#FFD629] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#171717] shadow-xs">
              NEW
            </span>
          )}

          {discountText && (
            <span className="inline-flex rounded-full bg-[#FFF9D6] border border-[#FFD629]/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#171717] shadow-xs">
              {discountText}
            </span>
          )}
        </div>

        {/* Wishlist Toggle Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute right-3 top-3 z-10 rounded-full p-2 transition-all duration-200 ${
            isInWishlist
              ? "bg-[#FFD629] text-[#171717] shadow-xs"
              : "border border-neutral-200 bg-white/90 text-neutral-700 backdrop-blur-xs hover:border-[#FFD629] hover:bg-white hover:text-black"
          }`}
          aria-label={isInWishlist ? "Remove from saved items" : "Save item"}
        >
          <Heart className={`h-3.5 w-3.5 ${isInWishlist ? "fill-[#171717]" : ""}`} />
        </button>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:flex">
          <button
            onClick={handleQuickAdd}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] shadow-md transition-all active:scale-[0.98] ${
              addedNotice
                ? "border border-[#171717] bg-[#171717] text-[#FFD629]"
                : "bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] text-[#171717] hover:brightness-105 hover:shadow-lg"
            }`}
          >
            {addedNotice ? (
              <>
                <Check className="h-3.5 w-3.5" /> ADDED TO CART
              </>
            ) : (
              <>
                <ShoppingBag className="h-3.5 w-3.5" /> ADD TO CART ({defaultVariant?.size})
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
              <span className="text-[10px] text-[#707070]">+{product.colors.length - 4}</span>
            )}
          </div>

          <h3 className="line-clamp-1 font-heading text-xs font-semibold tracking-wide text-[#171717] transition-colors group-hover:text-black">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-0.5 line-clamp-1 text-[11px] text-[#707070]">{product.subtitle}</p>
        </div>

        {/* Price & Mobile Add */}
        <div className="mt-3 flex items-center justify-between border-t border-[#EAEAEA] pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-bold text-[#171717]">
              {formatCurrency(product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-[11px] text-[#707070] line-through">
                {formatCurrency(product.compareAtPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF9D6] text-[#171717] hover:bg-[#FFD629] lg:hidden"
            aria-label="Quick add"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

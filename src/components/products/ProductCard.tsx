"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Eye } from "lucide-react";
import { Product } from "@/types";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";
import { fadeUpVariants } from "@/components/ui/motion";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    <motion.div
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-150/80 bg-white transition-all duration-300 hover:border-neutral-900 hover:shadow-lg"
    >
      {/* Editorial Fashion Product Image (4:5 Portrait Ratio) */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-neutral-100"
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => {
          setCurrentImageIndex(0);
        }}
        aria-label={product.name}
      >
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes("placeholder.webp")) {
              target.src = "/images/products/placeholder.webp";
            }
          }}
        />

        {/* Eye Quick View Icon on top right (Slikk style) */}
        <div className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-xs transition-transform hover:scale-110">
          <Eye className="h-3.5 w-3.5" />
        </div>

        {/* Try & Buy Black Sticker Pill at bottom left of image (Slikk style) */}
        <div className="absolute bottom-2.5 left-2.5 z-10 rounded-md bg-black px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
          Try &amp; Buy
        </div>

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

        {/* Price Row: Selling Price, MRP, Green % Discount Badge (Slikk exact) */}
        <div className="mt-1 flex items-center gap-1.5 flex-wrap">
          <span className="font-heading text-xs sm:text-sm font-bold text-neutral-950">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <>
              <span className="text-[11px] text-neutral-400 line-through">
                ₹{product.compareAtPrice.toLocaleString("en-IN")}
              </span>
              <span className="rounded bg-[#E8F8EA] px-1 py-0.2 text-[9px] font-bold text-[#147924]">
                {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        {/* Quick Add To Bag Strip */}
        <div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-1.5 text-[10px]">
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            ⚡ <span>60 Min Delivery</span>
          </span>
          <button
            onClick={handleQuickAdd}
            className="font-bold uppercase tracking-wider text-[#171717] hover:text-[#FFB800] active:scale-95"
          >
            {addedNotice ? "Added" : "+ Add"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}


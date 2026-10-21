"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Heart, ShoppingBag } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/lib/utils";
import { luxuryTransition } from "@/components/ui/motion";

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);
  const items = useWishlistStore((state) => state.items);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mb-10 border-b border-neutral-200 pb-6">
        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFB800]">
          YOUR SAVED ITEMS
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Saved Items ({items.length})
        </h1>
        <p className="mt-1 text-xs font-light text-neutral-500 sm:text-sm">
          Clothes and accessories you saved to shop later.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white p-8 py-24 text-center">
          <Heart className="mx-auto mb-4 h-12 w-12 stroke-[1.2] text-neutral-300" />
          <h2 className="mb-2 font-heading text-base font-bold uppercase tracking-wider text-neutral-900">
            You haven&apos;t saved any items yet
          </h2>
          <p className="mx-auto mb-8 max-w-sm text-xs leading-relaxed text-neutral-500">
            Tap the heart icon on any outfit you like to save it here.
          </p>
          <Link
            href="/collections"
            className="inline-block rounded-full bg-neutral-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
          >
            Start Browsing
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => {
            const defaultVariant = product.variants[0];
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 hover:border-[#D4AF62]/50 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl bg-neutral-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="backdrop-blur-xs absolute right-3 top-3 rounded-full bg-white/90 p-2 text-neutral-600 transition-colors hover:bg-rose-50 hover:text-rose-600"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="line-clamp-1 font-heading text-xs font-semibold text-neutral-900">
                      <Link href={`/products/${product.slug}`}>{product.name}</Link>
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-neutral-500">
                      {product.subtitle}
                    </p>
                    <span className="mt-2 block text-xs font-bold text-neutral-950">
                      {formatCurrency(product.price)}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2 border-t border-neutral-100 pt-3">
                    <button
                      onClick={() => {
                        if (defaultVariant) {
                          addItem(product, defaultVariant.color, defaultVariant.size, 1);
                        }
                      }}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171717] shadow-sm transition-all hover:brightness-105"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

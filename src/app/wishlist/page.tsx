"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, X, Zap } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";
import { getProductById } from "@/data/products";

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);
  const rawItems = useWishlistStore((state) => state.items);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const addItem = useCartStore((state) => state.addItem);
  const [movingId, setMovingId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydrate items against master catalog so stale persisted localStorage images/data always resolve to live images
  const items = useMemo(() => {
    return rawItems.map((item) => {
      const liveProduct = getProductById(item.id);
      return liveProduct || item;
    });
  }, [rawItems]);

  if (!mounted) return null;

  const handleMoveToBag = (product: any) => {
    const defaultVariant = product.variants?.find((v: any) => v.inStock) || product.variants?.[0];
    if (defaultVariant) {
      setMovingId(product.id);
      addItem(product, defaultVariant.color, defaultVariant.size, 1);
      setTimeout(() => {
        removeFromWishlist(product.id);
        setMovingId(null);
      }, 500);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF9F4] text-[#171717]">
      <div className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {/* Wishlist Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200/80 pb-4">
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717]">
              My Wishlist
            </h1>
            <p className="mt-1 text-xs text-neutral-500 font-medium">
              {items.length} {items.length === 1 ? "item" : "items"} saved for 45-60 min doorstep delivery
            </p>
          </div>
          {items.length > 0 && (
            <Link
              href="/products"
              className="text-xs font-bold text-neutral-800 hover:text-black underline underline-offset-4"
            >
              + Add More Items
            </Link>
          )}
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="mx-auto my-12 max-w-md rounded-3xl border border-neutral-200 bg-white p-8 py-16 text-center shadow-xs">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF9D6] text-[#171717]">
              <Heart className="h-8 w-8 stroke-[1.8] fill-[#FFD629]" />
            </div>
            <h2 className="font-heading text-lg font-black text-neutral-900">
              YOUR WISHLIST IS EMPTY
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-xs text-neutral-500">
              Explore trending brands, tap the heart icon on any product, and have them delivered to your doorstep in 60 minutes.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#171717] px-8 py-3 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#FFD629] hover:text-[#171717] transition-all"
            >
              Start Discovering
            </Link>
          </div>
        ) : (
          /* Wishlist Cards Grid: 4-5 Columns Slikk / Myntra Style */
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:gap-4 lg:gap-5">
            {items.map((product) => {
              const discountPercent =
                product.compareAtPrice && product.compareAtPrice > product.price
                  ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
                  : null;

              const imageUrl =
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85";

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all duration-300 hover:border-neutral-900 hover:shadow-md"
                >
                  {/* Image & Badges */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <Link href={`/products/${product.slug}`} className="block h-full w-full">
                      <img
                        src={imageUrl}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes("1539571696357")) {
                            target.src =
                              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85";
                          }
                        }}
                      />
                    </Link>

                    {/* Remove Cross Button */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-xs backdrop-blur-xs transition-transform hover:scale-110 hover:bg-black hover:text-white"
                      aria-label="Remove from wishlist"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>

                    {/* Try & Buy Badge */}
                    <div className="absolute bottom-2.5 left-2.5 z-10 rounded-md bg-black px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-xs">
                      Try &amp; Buy
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between p-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-tight text-neutral-400">
                        {product.brand || (product.category === "outerwear" ? "Tokyo Talkies" : "Nexkart Edit")}
                      </span>
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="line-clamp-1 text-xs font-medium text-neutral-800 hover:underline">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Pricing Row */}
                      <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                        <span className="font-heading text-xs sm:text-sm font-bold text-neutral-950">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.compareAtPrice && product.compareAtPrice > product.price && (
                          <>
                            <span className="text-[11px] text-neutral-400 line-through">
                              ₹{product.compareAtPrice.toLocaleString("en-IN")}
                            </span>
                            {discountPercent && (
                              <span className="rounded bg-[#E8F8EA] px-1 py-0.2 text-[9px] font-bold text-[#147924]">
                                {discountPercent}% OFF
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {/* Delivery Marker */}
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                        <Zap className="h-3 w-3 fill-emerald-600 text-emerald-600" />
                        <span>60 Min Delivery</span>
                      </div>
                    </div>

                    {/* Move to Bag Action Button */}
                    <button
                      onClick={() => handleMoveToBag(product)}
                      disabled={movingId === product.id}
                      className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#171717] py-2 text-xs font-bold text-white transition-all hover:bg-[#FFD629] hover:text-[#171717] active:scale-95 disabled:opacity-50"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>{movingId === product.id ? "Moving to Bag..." : "Move to Bag"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

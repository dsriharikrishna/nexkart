"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Ruler,
  Check,
  ChevronRight,
} from "lucide-react";
import { Product, ProductSize } from "@/types";
import { formatCurrency, formatDiscount } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { ProductGrid } from "@/components/products/ProductGrid";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));

  const discountBadge = formatDiscount(product.price, product.compareAtPrice);

  const isSizeAvailable = (size: ProductSize) => {
    const v = product.variants.find((item) => item.color === selectedColor && item.size === size);
    return v ? v.inStock : true;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem(product, selectedColor, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500">
        <Link href="/" className="transition-colors hover:text-black">
          Home
        </Link>
        <ChevronRight className="h-3 w-3 text-neutral-400" />
        <Link
          href={`/categories/${product.category}`}
          className="transition-colors hover:text-black"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3 w-3 text-neutral-400" />
        <span className="truncate font-medium text-neutral-900">{product.name}</span>
      </nav>

      {/* Main Product Layout: Gallery (Left) & Editorial Details (Right) */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row lg:col-span-7">
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex shrink-0 gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-y-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative aspect-[4/5] w-16 overflow-hidden border transition-all md:w-full ${
                    selectedImageIndex === idx
                      ? "border-neutral-950 opacity-100"
                      : "border-neutral-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Selected Image */}
          <div className="relative aspect-[4/5] flex-1 overflow-hidden border border-neutral-200/80 bg-neutral-100">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-all duration-500"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes("1539571696357")) {
                  target.src =
                    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85";
                }
              }}
            />
            {discountBadge && (
              <span className="absolute left-4 top-4 bg-[#9E643C] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                {discountBadge}
              </span>
            )}
            {product.isNew && (
              <span className="absolute right-4 top-4 bg-[#111111] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                NEW RELEASE
              </span>
            )}
          </div>
        </div>

        {/* Right: Product Specification & Actions */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <div className="mb-6 border-b border-neutral-200 pb-6">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                NEXKART ATELIER • {product.composition}
              </span>
              <h1 className="mb-2 font-heading text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                {product.name}
              </h1>
              <p className="mb-4 text-xs font-light text-neutral-500">{product.subtitle}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-bold text-neutral-950">
                  {formatCurrency(product.price)}
                </span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="text-sm text-neutral-400 line-through">
                    {formatCurrency(product.compareAtPrice)}
                  </span>
                )}
                <span className="ml-2 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-800">
                  Complimentary Courier Included
                </span>
              </div>
            </div>

            {/* Color Palette Selector */}
            <div className="mb-6">
              <div className="mb-2.5 flex items-center justify-between text-xs uppercase tracking-wider">
                <span className="font-semibold text-neutral-900">Color:</span>
                <span className="text-neutral-500">{selectedColor}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => {
                  const isSelected = selectedColor === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`relative h-8 w-8 rounded-full border-2 p-0.5 transition-all ${
                        isSelected
                          ? "scale-110 border-neutral-950"
                          : "border-neutral-200 hover:border-neutral-400"
                      }`}
                      title={c.name}
                      aria-label={`Select color ${c.name}`}
                    >
                      <span
                        className="block h-full w-full rounded-full border border-neutral-300"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="mb-2.5 flex items-center justify-between text-xs uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-neutral-900">Select Size:</span>
                  {sizeError && (
                    <span className="animate-bounce text-[11px] font-medium text-rose-600">
                      Please pick a size
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="flex items-center gap-1 text-[11px] text-neutral-600 underline underline-offset-2 hover:text-black"
                >
                  <Ruler className="h-3 w-3" /> Size Guide
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  const available = isSizeAvailable(size);
                  return (
                    <button
                      key={size}
                      disabled={!available}
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeError(false);
                      }}
                      className={`border py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                        !available
                          ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400 line-through opacity-30"
                          : isSelected
                            ? "shadow-xs border-neutral-950 bg-neutral-950 text-white"
                            : "border-neutral-300 bg-white text-neutral-900 hover:border-neutral-950"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Stock Status */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center border border-neutral-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-neutral-600 hover:text-black"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-2 text-xs font-semibold text-neutral-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-neutral-600 hover:text-black"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-800">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
                  Available for immediate dispatch
                </span>
                <p className="mt-0.5 text-[10px] text-neutral-400">
                  Dispatches within 24 hours from Mumbai Flagship Atelier
                </p>
              </div>
            </div>

            {/* Action Buttons: Add to Bag & Wishlist */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm transition-all ${
                  addedNotice
                    ? "bg-emerald-900 text-white"
                    : "bg-neutral-950 text-white hover:bg-[#9E643C]"
                }`}
              >
                {addedNotice ? (
                  <>
                    <Check className="h-4 w-4" /> Added to Shopping Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" /> Add to Shopping Bag
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`flex items-center justify-center gap-2 border p-4 transition-colors ${
                  isInWishlist
                    ? "border-neutral-950 bg-neutral-100 text-neutral-950"
                    : "border-neutral-300 text-neutral-800 hover:border-black"
                }`}
                aria-label="Save to Wishlist"
              >
                <Heart className={`h-4 w-4 ${isInWishlist ? "fill-black" : ""}`} />
                <span className="hidden text-xs font-medium uppercase tracking-wider sm:inline">
                  {isInWishlist ? "Saved" : "Save"}
                </span>
              </button>
            </div>

            {/* Delivery & Security Badges */}
            <div className="space-y-3.5 border-t border-neutral-200 pt-6 text-xs font-light text-neutral-600">
              <div className="flex items-center gap-3">
                <Truck className="h-4 w-4 shrink-0 text-[#9E643C]" />
                <span>Complimentary DHL Express Courier on orders over $300</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 shrink-0 text-[#9E643C]" />
                <span>30-Day complimentary concierge returns & size exchanges</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#9E643C]" />
                <span>100% Guaranteed authenticity & traceable fabric provenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Accordion Details Section */}
      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-neutral-200 pt-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
            Garment Narrative & Cut
          </h3>
          <p className="mb-4 text-xs font-light leading-relaxed text-neutral-600">
            {product.description}
          </p>
          <p className="text-xs font-medium text-neutral-700">Fit Note: {product.fit}</p>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
            Atelier Specifications
          </h3>
          <dl className="space-y-2 text-xs">
            {product.details.map((item, idx) => (
              <div key={idx} className="flex justify-between border-b border-neutral-100 py-1">
                <dt className="text-neutral-500">{item.label}</dt>
                <dd className="text-right font-medium text-neutral-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
            Textile Preservation & Care
          </h3>
          <ul className="list-inside list-disc space-y-2 text-xs text-neutral-600">
            {product.careInstructions.map((inst, idx) => (
              <li key={idx}>{inst}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 border-t border-neutral-200 pt-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9E643C]">
                COMPLEMENTARY ATELIER PIECES
              </span>
              <h2 className="font-heading text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                You May Also Appreciate
              </h2>
            </div>
          </div>
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      )}

      {/* Size Guide Modal */}
      {sizeGuideOpen && (
        <div className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-lg bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-4">
              <h3 className="font-heading text-base font-bold uppercase tracking-wider">
                Sartorial Sizing Framework (CM / IN)
              </h3>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="text-sm text-neutral-400 hover:text-black"
              >
                ✕
              </button>
            </div>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-200 font-semibold uppercase text-neutral-500">
                  <th className="py-2">Size</th>
                  <th className="py-2">Chest (cm)</th>
                  <th className="py-2">Waist (cm)</th>
                  <th className="py-2">Hips (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700">
                <tr>
                  <td className="py-2 font-medium">XS / EU 44</td>
                  <td className="py-2">88 - 92</td>
                  <td className="py-2">74 - 78</td>
                  <td className="py-2">90 - 94</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">S / EU 46</td>
                  <td className="py-2">92 - 96</td>
                  <td className="py-2">78 - 82</td>
                  <td className="py-2">94 - 98</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">M / EU 48</td>
                  <td className="py-2">96 - 100</td>
                  <td className="py-2">82 - 86</td>
                  <td className="py-2">98 - 102</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">L / EU 50</td>
                  <td className="py-2">100 - 104</td>
                  <td className="py-2">86 - 90</td>
                  <td className="py-2">102 - 106</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">XL / EU 52</td>
                  <td className="py-2">104 - 108</td>
                  <td className="py-2">90 - 94</td>
                  <td className="py-2">106 - 110</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 border-t border-neutral-200 pt-4 text-right">
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="bg-black px-6 py-2 text-xs font-medium uppercase tracking-wider text-white"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

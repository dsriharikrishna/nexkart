"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ChevronRight,
} from "lucide-react";
import { Product, ProductSize } from "@/types";
import { formatCurrency, formatDiscount } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { checkPincodeServiceability, PincodeServiceability } from "@/data/pincodes";
import { ProductGrid } from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { luxuryTransition } from "@/components/ui/motion";
import { ProductGallery } from "./detail/ProductGallery";
import { ProductActions } from "./detail/ProductActions";
import { ProductSizeGuideModal } from "./detail/ProductSizeGuideModal";

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
  const [pincodeInput, setPincodeInput] = useState("500081");
  const [pincodeResult, setPincodeResult] = useState<PincodeServiceability | null>(null);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));

  const handleCheckPincode = () => {
    if (!pincodeInput || pincodeInput.length < 6) return;
    const res = checkPincodeServiceability(pincodeInput);
    setPincodeResult(res);
  };

  const discountBadge = formatDiscount(product.price, product.compareAtPrice);

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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="w-full px-4 py-8 sm:px-6 md:py-12 lg:px-8"
    >
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

      {/* Main Product Layout: Gallery & Details */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: Gallery */}
        <ProductGallery
          images={product.images}
          view360={product.view360}
          productName={product.name}
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          selectedImageIndex={selectedImageIndex}
          discountBadge={discountBadge}
          isNew={product.isNew}
          onSelectImage={setSelectedImageIndex}
        />

        {/* Right: Product Specification & Actions */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <div className="mb-6 border-b border-neutral-200 pb-6">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                NEXKART • {product.composition}
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
                  Free Fast Delivery
                </span>
              </div>
            </div>

            {/* Action Selectors */}
            <ProductActions
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              quantity={quantity}
              sizeError={sizeError}
              pincodeInput={pincodeInput}
              pincodeResult={pincodeResult}
              onSelectColor={setSelectedColor}
              onSelectSize={(size) => {
                setSelectedSize(size);
                setSizeError(false);
              }}
              onUpdateQuantity={setQuantity}
              onOpenSizeGuide={() => setSizeGuideOpen(true)}
              onPincodeChange={setPincodeInput}
              onCheckPincode={handleCheckPincode}
            />

            {/* Action Buttons: Add to Bag & Wishlist */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] shadow-md transition-all active:scale-[0.98] ${
                  addedNotice
                    ? "bg-[#171717] text-[#FFD629]"
                    : "bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] text-[#171717] hover:brightness-105"
                }`}
              >
                {addedNotice ? (
                  <>
                    <Check className="h-4 w-4" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`flex items-center justify-center gap-2 rounded-full border px-6 py-4 transition-colors ${
                  isInWishlist
                    ? "border-[#171717] bg-[#FFF9D6] text-[#171717]"
                    : "border-neutral-300 text-neutral-800 hover:border-black hover:bg-neutral-50"
                }`}
                aria-label="Save item"
              >
                <Heart className={`h-4 w-4 ${isInWishlist ? "fill-[#171717]" : ""}`} />
                <span className="hidden text-xs font-medium uppercase tracking-wider sm:inline">
                  {isInWishlist ? "Saved" : "Save"}
                </span>
              </button>
            </div>

            {/* Delivery & Security Badges */}
            <div className="space-y-3.5 border-t border-[#EAEAEA] pt-6 text-xs text-[#707070]">
              <div className="flex items-center gap-3">
                <Truck className="h-4 w-4 shrink-0 text-[#171717]" />
                <span>Free delivery on orders over ₹2,500</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 shrink-0 text-[#171717]" />
                <span>Easy doorstep size exchange and quick returns</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#171717]" />
                <span>100% Genuine, verified brand quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Product Details & Craftsmanship Gallery */}
      <div className="mt-16 border-t border-neutral-200/80 pt-12">
        {/* Material & Craftsmanship Visual Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Fabric & Texture Close-up */}
          <div className="group overflow-hidden rounded-2xl border border-neutral-150/80 bg-neutral-50/50 p-4 transition-all hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
              <img
                src={product.images[1] || product.images[0]}
                alt="Fabric texture and craftsmanship detail"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="mt-3.5 flex items-center justify-between">
              <span className="font-heading text-xs font-bold text-neutral-900">
                {product.composition}
              </span>
              <span className="text-[11px] text-neutral-500">{product.fit}</span>
            </div>
          </div>

          {/* Card 2: Silhouette & Form */}
          <div className="group overflow-hidden rounded-2xl border border-neutral-150/80 bg-neutral-50/50 p-4 transition-all hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
              <img
                src={product.images[2] || product.images[0]}
                alt="Silhouette and fit overview"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="mt-3.5 flex items-center justify-between">
              <span className="font-heading text-xs font-bold text-neutral-900">
                Tailored Silhouette
              </span>
              <span className="text-[11px] text-neutral-500">Regular / Relaxed</span>
            </div>
          </div>

          {/* Card 3: Care & Craftsmanship Specifications */}
          <div className="rounded-2xl border border-neutral-150/80 bg-neutral-50/50 p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="border-b border-neutral-200/70 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  SPECIFICATIONS
                </span>
                <dl className="mt-2 space-y-2 text-xs">
                  {product.details.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <dt className="text-neutral-500">{item.label}</dt>
                      <dd className="font-medium text-neutral-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  CARE
                </span>
                <ul className="mt-2 space-y-1.5 text-xs text-neutral-600">
                  {product.careInstructions.map((inst, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curated Complementary Styling Gallery */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 border-t border-neutral-200/80 pt-12">
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      )}

      {/* Size Guide Modal with Visual Measurement Diagram */}
      <ProductSizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </motion.div>
  );
}

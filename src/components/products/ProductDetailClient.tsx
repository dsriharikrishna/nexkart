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
  ArrowRight,
} from "lucide-react";
import { Product, ProductSize } from "@/types";
import { formatCurrency, formatDiscount } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useToastStore } from "@/stores/toastStore";
import { checkPincodeServiceability, PincodeServiceability } from "@/data/pincodes";
import { ProductGrid } from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { luxuryTransition } from "@/components/ui/motion";
import { ProductGallery } from "./detail/ProductGallery";
import { ProductActions } from "./detail/ProductActions";
import { ProductOffersSection } from "./detail/ProductOffersSection";
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
  const cartItems = useCartStore((state) => state.items);
  const isInCart = cartItems.some((item) => item.productId === product.id);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));
  const showToast = useToastStore((state) => state.showToast);

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
    showToast({
      title: "Added to Cart!",
      description: `${product.name} (${selectedSize})`,
      actionLabel: "Checkout",
      actionHref: "/checkout",
    });
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="w-full px-4 pt-2 pb-6 sm:px-6 md:pt-3 md:pb-8 lg:px-8"
    >
      {/* Breadcrumb Navigation */}
      <nav className="mb-2.5 flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500">
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

      {/* Main Product Layout: Gallery & Details (Balanced compact image sizing) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Left: Gallery (Compact & proportional) */}
        <div className="lg:col-span-6 xl:col-span-5 max-w-md mx-auto w-full lg:max-w-none">
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
        </div>

        {/* Right: Product Specification & Actions */}
        <div className="flex flex-col justify-between lg:col-span-6 xl:col-span-7">
          <div>
            {/* Main Product Info Header */}
            <div className="mb-5 rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF9D6] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#171717] border border-[#FFD629]/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8860B]" />
                  Nexkart Exclusive • {product.composition}
                </span>

                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                  ★ 4.8 <span className="text-neutral-400 font-normal">(128)</span>
                </span>
              </div>

              <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-neutral-950">
                {product.name}
              </h1>
              <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{product.subtitle}</p>

              {/* Price Strip */}
              <div className="mt-4 flex flex-wrap items-baseline gap-2.5 pt-3 border-t border-neutral-100">
                <span className="text-2xl sm:text-3xl font-black text-neutral-950">
                  {formatCurrency(product.price)}
                </span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <>
                    <span className="text-sm font-medium text-neutral-400 line-through">
                      {formatCurrency(product.compareAtPrice)}
                    </span>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-black text-[#147924]">
                      {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF
                    </span>
                  </>
                )}
                <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full">
                  ⚡ Express In Stock
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

            {/* Primary Action Buttons */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row">
              {isInCart ? (
                <div className="flex flex-1 flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="/checkout"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#171717] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD629] shadow-md transition-all hover:bg-black active:scale-[0.98]"
                  >
                    <span>Proceed To Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition-colors hover:bg-neutral-50 active:scale-[0.98]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>{addedNotice ? "Added" : "+ Add More"}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] shadow-md transition-all active:scale-[0.98] ${
                    addedNotice
                      ? "bg-[#171717] text-[#FFD629]"
                      : "bg-[#171717] text-[#FFD629] hover:bg-black"
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="h-4 w-4 stroke-[3]" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" /> Add to Cart
                    </>
                  )}
                </button>
              )}

              <button
                onClick={() => toggleWishlist(product)}
                className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 transition-colors ${
                  isInWishlist
                    ? "border-[#171717] bg-[#FFF9D6] text-[#171717]"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-black hover:bg-neutral-50"
                }`}
                aria-label="Save item"
              >
                <Heart className={`h-4 w-4 ${isInWishlist ? "fill-[#171717] text-[#171717]" : ""}`} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isInWishlist ? "Saved" : "Save"}
                </span>
              </button>
            </div>

            {/* Delivery & Security Trust Strip */}
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-neutral-200 bg-neutral-50/60 p-3 text-center mb-5">
              <div className="flex flex-col items-center gap-1">
                <Truck className="h-4 w-4 text-[#171717]" />
                <span className="text-[10px] font-bold text-neutral-800">Free Delivery</span>
                <span className="text-[9px] text-neutral-500">Orders above ₹2,500</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-neutral-200 px-1">
                <RotateCcw className="h-4 w-4 text-[#171717]" />
                <span className="text-[10px] font-bold text-neutral-800">Easy Returns</span>
                <span className="text-[9px] text-neutral-500">Doorstep swap eligible</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-[#171717]" />
                <span className="text-[10px] font-bold text-neutral-800">100% Genuine</span>
                <span className="text-[9px] text-neutral-500">Direct from brand hub</span>
              </div>
            </div>

            {/* Flipkart & Amazon Style Bank Offers, Coupons & Discounts (Positioned downside) */}
            <ProductOffersSection />
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

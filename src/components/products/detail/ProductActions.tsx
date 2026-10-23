"use client";

import { Check, Ruler } from "lucide-react";
import { Product, ProductSize } from "@/types";
import { PincodeServiceability } from "@/data/pincodes";

interface ProductActionsProps {
  product: Product;
  selectedColor: string;
  selectedSize: ProductSize | null;
  quantity: number;
  sizeError: boolean;
  pincodeInput: string;
  pincodeResult: PincodeServiceability | null;
  onSelectColor: (color: string) => void;
  onSelectSize: (size: ProductSize) => void;
  onUpdateQuantity: (quantity: number) => void;
  onOpenSizeGuide: () => void;
  onPincodeChange: (val: string) => void;
  onCheckPincode: () => void;
}

export function ProductActions({
  product,
  selectedColor,
  selectedSize,
  quantity,
  sizeError,
  pincodeInput,
  pincodeResult,
  onSelectColor,
  onSelectSize,
  onUpdateQuantity,
  onOpenSizeGuide,
  onPincodeChange,
  onCheckPincode,
}: ProductActionsProps) {
  const isSizeAvailable = (size: ProductSize) => {
    const v = product.variants.find((item) => item.color === selectedColor && item.size === size);
    return v ? v.inStock : true;
  };

  return (
    <div className="space-y-5 mb-5">
      {/* Color Selector */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-xs">
        <div className="mb-2.5 flex items-center justify-between text-xs">
          <span className="font-bold uppercase tracking-wider text-neutral-900">Color</span>
          <span className="font-medium text-neutral-600">{selectedColor}</span>
        </div>
        <div className="flex items-center gap-2.5">
          {product.colors.map((c) => {
            const isSelected = selectedColor === c.name;
            return (
              <button
                key={c.name}
                onClick={() => onSelectColor(c.name)}
                className={`relative flex items-center gap-2 rounded-xl border px-3 py-1.5 transition-all text-xs font-bold ${
                  isSelected
                    ? "border-neutral-950 bg-neutral-950 text-white shadow-xs"
                    : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-400"
                }`}
                title={c.name}
                aria-label={`Select color ${c.name}`}
              >
                <span
                  className="h-3.5 w-3.5 rounded-full border border-white/60 shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Selector */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-xs">
        <div className="mb-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-neutral-900">Select Size</span>
            {sizeError && (
              <span className="animate-pulse text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                Please select a size
              </span>
            )}
          </div>
          <button
            onClick={onOpenSizeGuide}
            className="flex items-center gap-1 text-[11px] font-bold text-neutral-600 hover:text-black underline underline-offset-2"
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
                onClick={() => onSelectSize(size)}
                className={`rounded-xl border py-2.5 text-xs font-bold uppercase transition-all ${
                  !available
                    ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400 line-through opacity-40"
                    : isSelected
                      ? "border-neutral-950 bg-neutral-950 text-white shadow-xs"
                      : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-950 hover:bg-neutral-50"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* Quantity Controls inside size box */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">Quantity</span>
          <div className="flex items-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
            <button
              onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 text-sm font-bold text-neutral-600 hover:text-black hover:bg-neutral-200/60 transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-3.5 py-1 text-xs font-bold text-neutral-900">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity(quantity + 1)}
              className="px-3 py-1 text-sm font-bold text-neutral-600 hover:text-black hover:bg-neutral-200/60 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Delivery & Pincode Serviceability */}
      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#171717] text-[#FFD629] text-xs font-bold">
              ⚡
            </span>
            <span className="text-xs font-bold text-neutral-900">
              {product.isFastDeliveryEligible ? "Fast Delivery Available" : "Standard Delivery"}
            </span>
          </div>
          <span className="text-[11px] font-bold text-emerald-700">
            {product.estimatedDeliveryTime || "45-60 mins"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              maxLength={6}
              value={pincodeInput}
              onChange={(e) => onPincodeChange(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter Pincode (e.g. 500081)"
              className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-900 placeholder:text-neutral-400 focus:border-[#171717] focus:outline-none shadow-2xs"
            />
          </div>
          <button
            type="button"
            onClick={onCheckPincode}
            className="rounded-xl bg-[#171717] px-4 py-2 text-xs font-bold text-[#FFD629] transition-all hover:bg-black active:scale-95"
          >
            Check
          </button>
        </div>

        {pincodeResult && (
          <div className="mt-2.5 rounded-xl border border-neutral-200 bg-white p-2.5 text-xs">
            {pincodeResult.isServiceable ? (
              <div className="flex items-start gap-2 text-emerald-800">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <div>
                  <p className="font-bold text-xs">
                    ⚡ Guaranteed {pincodeResult.deliveryTime} delivery in {pincodeResult.city}!
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    Dispatched from {pincodeResult.hubName}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-neutral-700">
                <p className="font-bold text-xs text-amber-700">Standard Delivery (2-4 Days)</p>
                <p className="text-[10px] text-neutral-500">
                  {pincodeResult.pincode} serviced via {pincodeResult.hubName}.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

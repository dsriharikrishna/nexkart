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
    <div>
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
                onClick={() => onSelectColor(c.name)}
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
                Please choose a size
              </span>
            )}
          </div>
          <button
            onClick={onOpenSizeGuide}
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
                onClick={() => onSelectSize(size)}
                className={`rounded-xl border py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                  !available
                    ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400 line-through opacity-30"
                    : isSelected
                      ? "shadow-xs border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-300 bg-white text-neutral-900 hover:border-neutral-950 hover:bg-neutral-50"
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
        <div className="flex items-center overflow-hidden rounded-full border border-neutral-300 bg-neutral-50">
          <button
            onClick={() => onUpdateQuantity(Math.max(1, quantity - 1))}
            className="px-3.5 py-2 text-sm text-neutral-600 hover:text-black"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-3.5 py-2 text-xs font-semibold text-neutral-900">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(quantity + 1)}
            className="px-3.5 py-2 text-sm text-neutral-600 hover:text-black"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="text-right">
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-800">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
            In Stock • Ready to Ship
          </span>
          <p className="mt-0.5 text-[10px] text-neutral-400">
            Ships from our nearest local fulfillment hub
          </p>
        </div>
      </div>

      {/* Interactive Quick Delivery & Pincode Checker */}
      <div className="mb-6 rounded-2xl border border-[#FFD629]/60 bg-[#FFF9D6]/40 p-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#FFD629]">
            ⚡
          </span>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#171717]">
              {product.isFastDeliveryEligible
                ? `Fast Delivery Eligible (${product.estimatedDeliveryTime || "45-60 mins"})`
                : "Standard Dispatch • 1-2 Days"}
            </p>
            <p className="text-[11px] text-[#707070]">
              Simulated quick-commerce dispatch across Telangana &amp; Andhra Pradesh.
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              maxLength={6}
              value={pincodeInput}
              onChange={(e) => onPincodeChange(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter 6-digit PIN (e.g. 500081)"
              className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-[#171717] focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={onCheckPincode}
            className="rounded-xl bg-[#171717] px-4 py-2 text-xs font-bold text-[#FFD629] transition-all hover:bg-black"
          >
            Check
          </button>
        </div>

        {pincodeResult && (
          <div className="mt-3 rounded-xl border border-neutral-200 bg-white p-2.5 text-xs">
            {pincodeResult.isServiceable ? (
              <div className="flex items-start gap-2 text-emerald-800">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <div>
                  <p className="font-bold">
                    ⚡ Available for {pincodeResult.deliveryTime} delivery in {pincodeResult.city}!
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    Dispatched via {pincodeResult.hubName} • Doorstep size swap eligible
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-neutral-700">
                <p className="font-semibold text-amber-700">Standard Delivery (2-4 Days)</p>
                <p className="text-[10px] text-neutral-500">
                  {pincodeResult.pincode} is outside our 60-min express zone. Dispatched via {pincodeResult.hubName}.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

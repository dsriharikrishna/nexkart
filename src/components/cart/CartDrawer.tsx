"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/lib/utils";

export function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShippingEstimate = useCartStore((state) => state.getShippingEstimate);
  const getTotal = useCartStore((state) => state.getTotal);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const subtotal = getSubtotal();
  const shipping = getShippingEstimate();
  const total = getTotal();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="backdrop-blur-xs absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="flex w-screen max-w-md flex-col justify-between bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 p-6">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-neutral-900" />
              <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-neutral-950">
                Your Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1 text-neutral-400 transition-colors hover:text-black"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <ShoppingBag className="mb-4 h-12 w-12 stroke-[1.2] text-neutral-300" />
                <p className="mb-1 font-heading text-sm font-semibold uppercase tracking-wider text-neutral-800">
                  Your cart is empty
                </p>
                <p className="mb-6 max-w-xs text-xs text-neutral-500">
                  Find clothes you love and add them to your cart.
                </p>
                <button
                  onClick={closeCart}
                  className="rounded-full bg-neutral-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-neutral-100 pb-6">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.productSlug}`}
                          onClick={closeCart}
                          className="line-clamp-1 font-heading text-xs font-semibold text-neutral-900 hover:text-[#FFB800]"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-0.5 text-neutral-400 transition-colors hover:text-rose-600"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="mt-1 flex gap-3 text-[11px] text-neutral-500">
                        <span>Color: {item.color}</span>
                        <span>Size: {item.size}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center rounded-lg border border-neutral-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-neutral-600 hover:text-black"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-[11px] font-semibold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-neutral-600 hover:text-black"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-neutral-900">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Calculations */}
          {items.length > 0 && (
            <div className="space-y-4 border-t border-neutral-200 bg-neutral-50/50 p-6">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-neutral-900">
                    {shipping === 0 ? "Free" : formatCurrency(shipping)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-neutral-200/80 pt-2 text-sm font-bold text-neutral-950">
                  <span>Total Amount</span>
                  <span className="text-[#171717]">{formatCurrency(total)}</span>
                </div>
              </div>

              {shipping > 0 && (
                <p className="text-center text-[10px] text-neutral-500">
                  Add {formatCurrency(2500 - subtotal)} more for free fast delivery.
                </p>
              )}

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-4 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#171717] shadow-md transition-all hover:brightness-105 active:scale-[0.99]"
                >
                  Go to Checkout <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full rounded-full border border-neutral-300 bg-white px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:border-black hover:bg-neutral-50"
                >
                  View Full Cart
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-neutral-500">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FFB800]" />
                <span>Fast Delivery • Easy Size Swaps at Doorstep</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

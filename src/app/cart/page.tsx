"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/lib/utils";
import { luxuryTransition } from "@/components/ui/motion";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShippingEstimate = useCartStore((state) => state.getShippingEstimate);
  const getTotal = useCartStore((state) => state.getTotal);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const shipping = getShippingEstimate();
  const total = getTotal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mb-10 border-b border-neutral-200 pb-6">
        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFB800]">
          YOUR CART
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Shopping Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})
        </h1>
      </div>

      {items.length === 0 ? (
        <div className="mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white p-8 py-24 text-center">
          <ShoppingBag className="mx-auto mb-4 h-12 w-12 stroke-[1.2] text-neutral-300" />
          <h2 className="mb-2 font-heading text-base font-bold uppercase tracking-wider text-neutral-900">
            Your cart is empty
          </h2>
          <p className="mx-auto mb-8 max-w-sm text-xs leading-relaxed text-neutral-500">
            Find something you like and add it to your cart.
          </p>
          <Link
            href="/collections"
            className="inline-block rounded-full bg-neutral-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Items Table */}
          <div className="space-y-6 lg:col-span-8">
            <div className="divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-6 p-6 sm:flex-row">
                  <div className="h-32 w-24 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/products/${item.productSlug}`}
                          className="font-heading text-sm font-semibold text-neutral-900 hover:text-[#FFB800]"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-rose-600"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-2 flex gap-4 text-xs text-neutral-500">
                        <span>Color: {item.color}</span>
                        <span>Size: {item.size}</span>
                        <span>Price: {formatCurrency(item.price)}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                      <div className="flex items-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-sm text-neutral-600 hover:text-black"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-semibold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-sm text-neutral-600 hover:text-black"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-heading text-sm font-bold text-neutral-950">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-black"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
              <h2 className="border-b border-neutral-200 pb-3 font-heading text-sm font-bold uppercase tracking-wider text-neutral-950">
                Order Summary
              </h2>

              <div className="space-y-3 text-xs">
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
                <div className="flex justify-between border-t border-neutral-200 pt-3 text-base font-bold text-neutral-950">
                  <span>Total Amount</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              {shipping > 0 && (
                <div className="rounded-xl border border-[#FFD629]/40 bg-[#FFF9D6] p-3 text-[11px] text-[#171717]">
                  Add {formatCurrency(2500 - subtotal)} more to get free fast delivery!
                </div>
              )}

              <Link
                href="/checkout"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] py-4 text-center text-xs font-bold uppercase tracking-wider text-[#171717] shadow-md transition-all hover:brightness-105"
              >
                Go to Checkout <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <div className="space-y-2 border-t border-neutral-100 pt-2 text-[11px] text-neutral-500">
                <div className="flex items-center gap-2">
                  <Truck className="h-3.5 w-3.5 text-neutral-400" />
                  <span>Doorstep size swap and easy returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-neutral-400" />
                  <span>Safe and secure simulated checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, HelpCircle } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/lib/utils";

export default function CheckoutFailedPage() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      {/* Alert Icon */}
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-700">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-700">
        PAYMENT NOT COMPLETED • DEMO TEST
      </span>
      <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-neutral-950">
        Payment Failed
      </h1>
      <p className="mx-auto mb-8 max-w-md text-xs font-light text-neutral-600 sm:text-sm">
        We could not complete your payment. No money was charged, and your items are still saved in your cart.
      </p>

      {/* Failure Details Card */}
      <div className="mx-auto mb-10 max-w-lg rounded-xl border border-neutral-200 bg-white p-6 text-left shadow-xs">
        <h3 className="border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
          Payment Details
        </h3>
        <div className="divide-y divide-neutral-100 text-xs">
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Reason:</span>
            <span className="text-neutral-800">
              Payment session timed out or was cancelled
            </span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Cart Total:</span>
            <span className="font-bold text-neutral-950">{formatCurrency(total)}</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Saved Items:</span>
            <span className="text-neutral-800">
              {items.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>
        </div>
      </div>

      {/* Recommended Steps */}
      <div className="mx-auto mb-10 max-w-lg space-y-2.5 rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-left text-xs">
        <p className="font-heading font-semibold uppercase tracking-wider text-neutral-900">
          What you can do:
        </p>
        <ul className="list-inside list-disc space-y-1.5 text-neutral-600">
          <li>Try paying again using UPI (Google Pay, PhonePe, or Paytm).</li>
          <li>Choose Cash on Delivery to pay when your order arrives.</li>
          <li>Check that your card details or UPI ID are entered correctly.</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/checkout"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#171717] transition-all hover:brightness-105"
        >
          <RotateCcw className="h-4 w-4" /> Try Checkout Again
        </Link>
        <Link
          href="/cart"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:border-black"
        >
          View Cart
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-transparent px-4 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:text-black"
        >
          <HelpCircle className="h-4 w-4" /> Need Help?
        </Link>
      </div>
    </div>
  );
}

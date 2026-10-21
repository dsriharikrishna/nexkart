"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  RotateCcw,
  HelpCircle,
} from "lucide-react";
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
        AUTHORIZATION INTERRUPTED • DEMO GATEWAY
      </span>
      <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-neutral-950">
        Transaction Could Not Be Completed
      </h1>
      <p className="mx-auto mb-8 max-w-md text-xs font-light text-neutral-600 sm:text-sm">
        Your financial institution was unable to authenticate this payment attempt. No charges were
        made to your account, and your bag remains saved.
      </p>

      {/* Failure Diagnostic Card */}
      <div className="mx-auto mb-10 max-w-lg border border-neutral-200 bg-white p-6 text-left">
        <h3 className="border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
          Diagnostic Details
        </h3>
        <div className="divide-y divide-neutral-100 text-xs">
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Error Code:</span>
            <span className="font-mono font-semibold text-neutral-900">
              ERR_3DS_SECURITY_TIMEOUT
            </span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Gateway Response:</span>
            <span className="text-neutral-800">
              Card issuer 3D Secure verification window expired
            </span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Pending Bag Total:</span>
            <span className="font-bold text-neutral-950">{formatCurrency(total)}</span>
          </div>
          <div className="flex justify-between py-2.5">
            <span className="text-neutral-500">Bag Items Saved:</span>
            <span className="text-neutral-800">
              {items.reduce((acc, i) => acc + i.quantity, 0)} pieces
            </span>
          </div>
        </div>
      </div>

      {/* Recommended Recovery Steps */}
      <div className="mx-auto mb-10 max-w-lg space-y-2.5 border border-neutral-200 bg-neutral-50 p-5 text-left text-xs">
        <p className="font-heading font-semibold uppercase tracking-wider text-neutral-900">
          Suggested Actions:
        </p>
        <ul className="list-inside list-disc space-y-1.5 text-neutral-600">
          <li>Verify your billing address matches your card issuer records.</li>
          <li>Select an alternative payment method (e.g. Apple Pay or Atelier VIP balance).</li>
          <li>
            Contact your issuing bank if international commerce transactions require authorization.
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/checkout"
          className="inline-flex items-center justify-center gap-2 bg-neutral-950 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#9E643C]"
        >
          <RotateCcw className="h-4 w-4" /> Re-attempt Authorization
        </Link>
        <Link
          href="/cart"
          className="inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:border-black"
        >
          Modify Shopping Bag
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 border border-transparent px-4 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:text-black"
        >
          Client Concierge <HelpCircle className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

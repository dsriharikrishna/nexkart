"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Package,
  ArrowLeft,
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { useAccountStore } from "@/stores/accountStore";
import { formatCurrency } from "@/lib/utils";

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [mounted, setMounted] = useState(false);
  const orders = useAccountStore((state) => state.orders);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const order = orders.find((o) => o.id === id || o.orderNumber.toLowerCase() === id.toLowerCase());

  if (!order) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Package className="mx-auto mb-4 h-12 w-12 stroke-[1.2] text-neutral-300" />
        <h1 className="mb-2 font-heading text-xl font-bold uppercase tracking-wider text-neutral-900">
          Order Not Found
        </h1>
        <p className="mb-8 text-xs text-neutral-500">
          We could not find an order with number &ldquo;{id}&rdquo;.
        </p>
        <Link
          href="/account"
          className="inline-flex items-center gap-2 bg-neutral-950 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-800"
        >
          <ArrowLeft className="h-4 w-4" /> Return to My Account
        </Link>
      </div>
    );
  }

  // Simulated timeline stages
  const isDelivered = order.status === "Delivered";
  const isDispatched = order.status === "Dispatched" || isDelivered;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/account")}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 transition-colors hover:text-black"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to My Orders
        </button>
      </div>

      {/* Order Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              ORDER DETAILS
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
              <CheckCircle2 className="h-3 w-3" /> {order.status}
            </span>
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-neutral-950">
            {order.orderNumber}
          </h1>
          <p className="mt-1 flex items-center gap-2 text-xs font-light text-neutral-500">
            <Calendar className="h-3.5 w-3.5 text-neutral-400" />
            Placed on {order.date} • Order ID: {order.id}
          </p>
        </div>

        <div className="text-right">
          <span className="block text-xs uppercase tracking-wider text-neutral-500">
            Total Amount
          </span>
          <span className="font-heading text-2xl font-bold text-neutral-950">
            {formatCurrency(order.total)}
          </span>
        </div>
      </div>

      {/* Shipment Tracking Progress Bar */}
      <div className="mb-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs">
        <h2 className="mb-6 flex items-center justify-between font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
          <span>Order Status</span>
          <span className="font-normal text-neutral-500">Fast Delivery by Courier</span>
        </h2>

        <div className="relative mx-auto flex max-w-2xl items-center justify-between py-2">
          {/* Progress bar line */}
          <div className="absolute left-0 right-0 top-1/2 z-0 h-0.5 -translate-y-1/2 bg-neutral-200" />
          <div
            className={`absolute left-0 top-1/2 z-0 h-0.5 -translate-y-1/2 bg-neutral-950 transition-all duration-500 ${
              isDelivered ? "w-full" : isDispatched ? "w-1/2" : "w-1/6"
            }`}
          />

          {/* Stage 1: Confirmed */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="shadow-xs flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-xs text-white">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-900">
              Order Placed
            </span>
            <span className="text-[10px] text-neutral-400">{order.date}</span>
          </div>

          {/* Stage 2: Dispatched */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`shadow-xs flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                isDispatched ? "bg-neutral-950 text-white" : "bg-neutral-200 text-neutral-500"
              }`}
            >
              <Truck className="h-4 w-4" />
            </div>
            <span
              className={`mt-2 text-[11px] font-semibold uppercase tracking-wider ${
                isDispatched ? "text-neutral-900" : "text-neutral-400"
              }`}
            >
              On The Way
            </span>
            <span className="text-[10px] text-neutral-400">Local Hub</span>
          </div>

          {/* Stage 3: Delivered */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`shadow-xs flex h-8 w-8 items-center justify-center rounded-full text-xs ${
                isDelivered ? "bg-emerald-900 text-white" : "bg-neutral-200 text-neutral-500"
              }`}
            >
              {isDelivered ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
            </div>
            <span
              className={`mt-2 text-[11px] font-semibold uppercase tracking-wider ${
                isDelivered ? "text-emerald-900" : "text-neutral-400"
              }`}
            >
              Delivered
            </span>
            <span className="text-[10px] text-neutral-400">
              {isDelivered ? "Completed" : "Estimated in 45-60 mins"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Order Content: Items & Meta Columns */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Ordered Pieces */}
        <div className="border border-neutral-200 bg-white p-6 sm:p-8 lg:col-span-8">
          <h2 className="mb-6 border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
            Items in This Order ({order.items.reduce((acc, i) => acc + i.quantity, 0)})
          </h2>

          <div className="space-y-4 divide-y divide-neutral-100">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 pt-4 first:pt-0">
                <div className="h-24 w-20 shrink-0 overflow-hidden border border-neutral-200 bg-neutral-100">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xs font-semibold text-neutral-900 sm:text-sm">
                    {item.name}
                  </h3>
                  <div className="mt-1 flex gap-4 text-xs text-neutral-500">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <span className="mt-2 block text-xs font-semibold text-neutral-900">
                    Price: {formatCurrency(item.price)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-heading text-sm font-bold text-neutral-950">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-xs">
            <div className="flex justify-between text-neutral-600">
              <span>Subtotal</span>
              <span>
                {formatCurrency(order.items.reduce((acc, i) => acc + i.price * i.quantity, 0))}
              </span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Delivery</span>
              <span className="font-medium text-emerald-800">Free Fast Delivery</span>
            </div>
            <div className="flex justify-between border-t border-neutral-200 pt-2 text-base font-bold text-neutral-950">
              <span>Total Amount</span>
              <span>{formatCurrency(order.total)}</span>
            </div>
          </div>
        </div>

        {/* Sidebar: Delivery Details & Actions */}
        <div className="space-y-6 lg:col-span-4">
          {/* Destination */}
          <div className="border border-neutral-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-2 text-neutral-950">
              <MapPin className="h-4 w-4 text-[#9E643C]" />
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider">
                Delivery Address
              </h3>
            </div>
            <p className="text-xs font-light leading-relaxed text-neutral-600">
              {order.shippingAddress}
            </p>
          </div>

          {/* Support Box */}
          <div className="space-y-3 border border-neutral-200 bg-white p-6">
            <div className="flex items-center gap-2 text-neutral-950">
              <ShieldCheck className="h-4 w-4 text-[#C5A059]" />
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider">
                Easy Returns &amp; Exchanges
              </h3>
            </div>
            <p className="text-xs font-light leading-relaxed text-neutral-500">
              Free returns and easy size swaps are available within 30 days of delivery.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-[#9E643C] hover:underline"
            >
              Contact Support <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

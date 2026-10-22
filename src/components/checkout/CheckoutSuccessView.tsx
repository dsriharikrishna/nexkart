import { MockOrder } from "@/stores/accountStore";
import { formatCurrency } from "@/lib/utils";
import { Lock } from "lucide-react";
import Link from "next/link";

interface CheckoutSuccessViewProps {
  order: MockOrder;
}

export function CheckoutSuccessView({ order }: CheckoutSuccessViewProps) {
  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
          <Lock className="h-7 w-7" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A6A3B]">
          Demo Order Confirmed
        </span>
        <h1 className="mt-2 font-heading text-3xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-4xl">
          Your demo order is confirmed
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          Order Reference: <strong className="font-bold text-neutral-900">{order.orderNumber}</strong>. We have sent a confirmation email to you.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
        <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 text-left shadow-xs sm:p-8">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A6A3B]">
                ORDER DETAILS
              </span>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
                Order Summary ({order.orderNumber})
              </h3>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800">
              Packed at local hub
            </span>
          </div>

          <div className="divide-y divide-neutral-100 text-xs">
            {order.items.map((i, idx) => (
              <div key={idx} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <img
                    src={i.image}
                    alt={i.name}
                    className="h-12 w-10 rounded-lg object-cover"
                  />
                  <div>
                    <span className="font-semibold text-neutral-900">{i.name}</span>
                    <p className="text-[11px] text-neutral-500">
                      Qty: {i.quantity} • {i.color} / {i.size}
                    </p>
                  </div>
                </div>
                <span className="font-heading font-semibold text-neutral-950">
                  {formatCurrency(i.price * i.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between border-t border-neutral-200 pt-4 text-sm font-bold text-neutral-950">
            <span>Total Amount</span>
            <span className="font-heading text-base">{formatCurrency(order.total)}</span>
          </div>
          <p className="pt-2 text-[11px] text-neutral-500">
            Delivery Address: {order.shippingAddress}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/account/orders/${order.id}`}
            className="rounded-full bg-neutral-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-neutral-800"
          >
            View Order Details
          </Link>
          <Link
            href="/account"
            className="rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-800 transition-all hover:border-black"
          >
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}

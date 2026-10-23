import { CartItem } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface CheckoutOrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

export function CheckoutOrderSummary({
  items,
  subtotal,
  shipping,
  total,
}: CheckoutOrderSummaryProps) {
  const totalItemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="space-y-6 border border-neutral-200 bg-white p-6">
      <h2 className="border-b border-neutral-100 pb-3 font-heading text-xs font-bold tracking-tight text-neutral-900">
        Order Summary ({totalItemCount} Items)
      </h2>

      <div className="max-h-72 space-y-4 divide-y divide-neutral-100 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 pt-3">
            <div className="h-18 w-14 shrink-0 border border-neutral-200 bg-neutral-100">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h4 className="line-clamp-1 font-heading text-xs font-semibold text-neutral-900">
                  {item.name}
                </h4>
                <p className="text-[11px] text-neutral-500">
                  {item.color} / {item.size} • Qty {item.quantity}
                </p>
              </div>
              <span className="text-xs font-bold text-neutral-900">
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs">
        <div className="flex justify-between text-neutral-600">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-neutral-600">
          <span>Fast Delivery</span>
          <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between border-t border-neutral-200 pt-2 text-sm font-bold text-neutral-950">
          <span>Total Amount</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}

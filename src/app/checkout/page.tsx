"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { Lock, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useCartStore } from "@/stores/cartStore";
import { useAccountStore, MockOrder } from "@/stores/accountStore";
import { formatCurrency } from "@/lib/utils";

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: "upi" | "card" | "netbanking" | "apple_pay" | "atelier_credit";
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState<MockOrder | null>(null);

  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const shipping = useCartStore((state) => state.getShippingEstimate());
  const total = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);
  const addOrder = useAccountStore((state) => state.addOrder);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      email: "aditya.sharma@atelier-india.com",
      firstName: "Aditya",
      lastName: "Sharma",
      address: "Flat 14B, Altamount Road, Cumballa Hill",
      city: "Mumbai",
      postalCode: "400026",
      country: "India",
      paymentMethod: "upi",
    },
  });

  const selectedPayment = useWatch({ control, name: "paymentMethod" });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h2 className="mb-2 font-heading text-lg font-bold uppercase tracking-wider">
          Your Bag is Empty
        </h2>
        <p className="mb-6 text-xs text-neutral-500">
          You need items in your bag before accessing checkout.
        </p>
        <Link
          href="/collections"
          className="inline-block bg-black px-6 py-3 text-xs uppercase tracking-wider text-white"
        >
          Explore Pieces
        </Link>
      </div>
    );
  }

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: MockOrder = {
        id: `ord-${Math.floor(1000 + Math.random() * 9000)}`,
        orderNumber: `NX-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        status: "Processing",
        items: items.map((i) => ({
          name: i.name,
          size: i.size,
          color: i.color,
          quantity: i.quantity,
          price: i.price,
          image: i.image,
        })),
        total,
        shippingAddress: `${data.address}, ${data.city}, ${data.postalCode}, ${data.country}`,
      };

      addOrder(newOrder);
      clearCart();
      setOrderComplete(newOrder);
      setIsSubmitting(false);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#9E643C", "#C5A059", "#111111", "#E5E5E5"],
        });
      } catch {
        // Fallback gracefully
      }
    }, 1000);
  };

  // SUCCESS CONFIRMATION VIEW
  if (orderComplete) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C5A059]/40 bg-[#FBF8F4] text-[#9E643C]">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
          COMMANDE VALIDÉE • DEMO ATELIER
        </span>
        <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-neutral-950">
          Your Order Has Been Cataloged
        </h1>
        <p className="mx-auto mb-8 max-w-md text-xs font-light text-neutral-600 sm:text-sm">
          Order reference:{" "}
          <strong className="font-semibold text-black">{orderComplete.orderNumber}</strong>. A
          dispatch confirmation has been routed to your registered concierge email.
        </p>

        {/* Demo notification alert */}
        <div className="mx-auto mb-10 max-w-lg border border-[#E8DCC8] bg-[#FAF7F2] p-4 text-left text-xs text-[#9E643C]">
          <strong>Note:</strong> This was a simulated checkout in Phase 1 frontend development. No
          real card charge or physical shipment was initiated.
        </div>

        <div className="mx-auto mb-8 max-w-lg space-y-4 border border-neutral-200 bg-white p-6 text-left">
          <h3 className="border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-wider text-neutral-900">
            Order Breakdown
          </h3>
          <div className="divide-y divide-neutral-100 text-xs">
            {orderComplete.items.map((i, idx) => (
              <div key={idx} className="flex justify-between py-2.5">
                <span>
                  {i.quantity}x {i.name} ({i.color}, {i.size})
                </span>
                <span className="font-semibold">{formatCurrency(i.price * i.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-neutral-200 pt-2 text-sm font-bold">
            <span>Total Simulated Payment</span>
            <span>{formatCurrency(orderComplete.total)}</span>
          </div>
          <p className="pt-1 text-[11px] text-neutral-500">
            Destination: {orderComplete.shippingAddress}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href={`/account/orders/${orderComplete.id}`}
            className="bg-neutral-950 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-800"
          >
            Inspect Order Dossier
          </Link>
          <Link
            href="/account"
            className="border border-neutral-300 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:border-black"
          >
            My Account & Orders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
          NEXKART CONCIERGE DESK
        </span>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
          Simulated Checkout
        </h1>
        <p className="mt-1 text-xs font-light text-neutral-500">
          Complete your simulated dispatch reservation. No real payment processing occurs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 border border-neutral-200 bg-white p-6 sm:p-8"
          >
            {/* Contact Details */}
            <div>
              <h2 className="mb-4 border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                1. Contact & Dispatch Details
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                    Email Address *
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-rose-600">Email is required</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                      First Name *
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      type="text"
                      className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                      Last Name *
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      type="text"
                      className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                    Street Address *
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                      City *
                    </label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                      Postal Code *
                    </label>
                    <input
                      {...register("postalCode", { required: true })}
                      type="text"
                      className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] uppercase tracking-wider text-neutral-600">
                      Country *
                    </label>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      className="focus:outline-hidden w-full border border-neutral-300 px-3 py-2 text-xs focus:border-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Payment Option */}
            <div>
              <h2 className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                <span>2. Simulated Payment Method</span>
                <span className="bg-emerald-50 px-2 py-0.5 text-[10px] font-normal text-emerald-700">
                  Sandbox Active
                </span>
              </h2>

              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    value="upi"
                    className="accent-black"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <span className="text-xs font-medium">
                      UPI Instant Transfer (GPay / PhonePe / Paytm)
                    </span>
                    <span className="rounded-xs bg-[#FBF8F4] px-1.5 py-0.5 text-[9px] font-bold text-[#9E643C]">
                      Popular
                    </span>
                  </div>
                </label>
                <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    value="card"
                    className="accent-black"
                  />
                  <span className="text-xs font-medium">Credit / Debit Card / RuPay (Sandbox)</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    value="netbanking"
                    className="accent-black"
                  />
                  <span className="text-xs font-medium">Net Banking (HDFC, ICICI, SBI, Axis)</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-3 hover:border-black">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    value="atelier_credit"
                    className="accent-black"
                  />
                  <span className="text-xs font-medium">
                    Private Atelier VIP Account Balance (₹1,50,000)
                  </span>
                </label>
              </div>

              {selectedPayment === "upi" && (
                <div className="mt-4 space-y-3 border border-neutral-200 bg-[#FAF7F2] p-4">
                  <div>
                    <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-600">
                      Virtual Payment Address (UPI ID)
                    </label>
                    <input
                      type="text"
                      defaultValue="aditya.sharma@okaxis"
                      className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800"
                    />
                    <p className="mt-1 text-[10px] text-neutral-400">
                      Supports Google Pay, PhonePe, Paytm, BHIM, CRED UPI. Instant verification.
                    </p>
                  </div>
                </div>
              )}

              {selectedPayment === "netbanking" && (
                <div className="mt-4 space-y-3 border border-neutral-200 bg-neutral-50 p-4">
                  <div>
                    <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-600">
                      Select Primary Banking Partner
                    </label>
                    <select
                      defaultValue="hdfc"
                      className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800"
                    >
                      <option value="hdfc">HDFC Bank (Instant NEFT / RTGS / IMPS)</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="sbi">State Bank of India (SBI)</option>
                      <option value="axis">Axis Bank</option>
                      <option value="kotak">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                </div>
              )}

              {selectedPayment === "card" && (
                <div className="mt-4 space-y-3 border border-neutral-200 bg-neutral-50 p-4">
                  <div>
                    <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-500">
                      Demo Card / RuPay Number
                    </label>
                    <input
                      type="text"
                      defaultValue="•••• •••• •••• 4242"
                      disabled
                      className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-500">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        defaultValue="12 / 28"
                        disabled
                        className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] uppercase tracking-wider text-neutral-500">
                        CVC
                      </label>
                      <input
                        type="text"
                        defaultValue="888"
                        disabled
                        className="w-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 bg-neutral-950 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#9E643C]"
            >
              {isSubmitting ? (
                "Simulating Authorization..."
              ) : (
                <>
                  Complete Demo Order ({formatCurrency(total)}){" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400">
              <Lock className="h-3.5 w-3.5 text-neutral-500" />
              <span>Simulated encrypted checkout session • No real card charged</span>
            </div>
          </form>
        </div>

        {/* Order Summary Column */}
        <div className="lg:col-span-5">
          <div className="space-y-6 border border-neutral-200 bg-white p-6">
            <h2 className="border-b border-neutral-100 pb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
              Order Review ({items.reduce((acc, i) => acc + i.quantity, 0)} Items)
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
                <span>Express Courier</span>
                <span>{shipping === 0 ? "Complimentary" : formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2 text-sm font-bold text-neutral-950">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

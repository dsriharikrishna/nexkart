"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useCartStore } from "@/stores/cartStore";
import { useAccountStore, MockOrder } from "@/stores/accountStore";
import { formatCurrency } from "@/lib/utils";
import { luxuryTransition } from "@/components/ui/motion";
import { CheckoutFormData } from "@/components/checkout/checkout-types";
import { CheckoutDeliveryForm } from "@/components/checkout/CheckoutDeliveryForm";
import { CheckoutPaymentSection } from "@/components/checkout/CheckoutPaymentSection";
import { CheckoutOrderSummary } from "@/components/checkout/CheckoutOrderSummary";
import { CheckoutSuccessView } from "@/components/checkout/CheckoutSuccessView";

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
      email: "aditya.reddy@nexkart-express.com",
      phone: "9849012345",
      firstName: "Aditya",
      lastName: "Reddy",
      address: "Plot 42, Road No. 36, Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      postalCode: "500034",
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
        <h2 className="mb-2 font-heading text-lg font-bold tracking-tight text-neutral-900">
          Your Cart Is Empty
        </h2>
        <p className="mb-6 text-xs text-neutral-500">
          Your cart is empty. Find something you like and add it to your cart.
        </p>
        <Link
          href="/collections"
          className="inline-block bg-black px-6 py-3 text-xs uppercase tracking-wider text-white"
        >
          Start Shopping
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

  if (orderComplete) {
    return <CheckoutSuccessView order={orderComplete} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={luxuryTransition}
      className="w-full px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
          QUICK &amp; EASY CHECKOUT
        </span>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
          Demo Checkout
        </h1>
        <p className="mt-1 text-xs font-light text-neutral-500">
          This is a simulated demo checkout. No real money or card is charged.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 border border-neutral-200 bg-white p-6 sm:p-8"
          >
            <CheckoutDeliveryForm register={register} errors={errors} />
            <CheckoutPaymentSection register={register} selectedPayment={selectedPayment} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] py-4 text-xs font-black uppercase tracking-[0.16em] text-[#171717] shadow-md transition-all hover:brightness-105 active:scale-[0.99]"
            >
              {isSubmitting ? (
                "Placing Your Demo Order..."
              ) : (
                <>
                  Place Demo Order ({formatCurrency(total)}){" "}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400">
              <Lock className="h-3.5 w-3.5 text-neutral-500" />
              <span>Simulated demo checkout • No payment is processed</span>
            </div>
          </form>
        </div>

        {/* Order Summary Column */}
        <div className="lg:col-span-5">
          <CheckoutOrderSummary
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </motion.div>
  );
}

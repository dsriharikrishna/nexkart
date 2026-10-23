"use client";

import { useState } from "react";
import { PRODUCT_OFFERS } from "@/data/offers";
import { Tag, CreditCard, ChevronRight, Copy, Check, Sparkles, Percent } from "lucide-react";
import { useToastStore } from "@/stores/toastStore";

export function ProductOffersSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showToast = useToastStore((state) => state.showToast);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast({
      title: "Coupon Copied!",
      description: `Code ${code} copied to clipboard.`,
      actionLabel: "Checkout",
      actionHref: "/checkout",
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const primaryOffer = PRODUCT_OFFERS[0];
  const couponOffer = PRODUCT_OFFERS.find((o) => o.code) || PRODUCT_OFFERS[2];

  return (
    <>
      <div className="mt-2 mb-4 rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-xs">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#147924] text-white">
              <Percent className="h-3 w-3 stroke-[3]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717]">
              Bank Offers &amp; Coupons
            </span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 text-xs font-bold text-[#147924] hover:underline"
          >
            <span>View All ({PRODUCT_OFFERS.length})</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* 2 Featured Amazon/Flipkart Clean Offer Strips */}
        <div className="mt-3 space-y-2.5">
          {/* Offer 1: Bank Card Instant Discount */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 rounded-xl bg-neutral-50 p-3 border border-neutral-200/80">
            <div className="flex items-start gap-2.5 min-w-0">
              <CreditCard className="h-4 w-4 shrink-0 text-blue-700 mt-0.5" />
              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-100/70 rounded px-1.5 py-0.5">
                    {primaryOffer.badge}
                  </span>
                  <span className="text-xs font-bold text-neutral-900">
                    {primaryOffer.title}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                  {primaryOffer.description}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="self-end sm:self-center shrink-0 text-[11px] font-bold text-neutral-600 hover:text-black underline active:text-neutral-900"
            >
              View T&amp;C
            </button>
          </div>

          {/* Offer 2: Direct 1-Click Coupon Code */}
          {couponOffer && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 rounded-xl bg-[#FFF9D6]/60 p-3 border border-[#FFD629]/70">
              <div className="flex items-start gap-2.5 min-w-0">
                <Tag className="h-4 w-4 shrink-0 text-[#B8860B] mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#171717] bg-[#FFD629] rounded px-1.5 py-0.5">
                      Coupon
                    </span>
                    <span className="text-xs font-bold text-neutral-900">
                      {couponOffer.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-600 mt-0.5 line-clamp-1">
                    {couponOffer.description}
                  </span>
                </div>
              </div>

              {couponOffer.code && (
                <div className="flex items-center justify-between sm:justify-end gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#FFD629]/30">
                  <span className="text-[10px] text-neutral-500 sm:hidden">Tap code to copy:</span>
                  <button
                    onClick={() => handleCopyCode(couponOffer.code!)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono font-bold transition-all active:scale-95 ${
                      copiedCode === couponOffer.code
                        ? "bg-emerald-600 text-white"
                        : "bg-[#171717] text-[#FFD629] hover:bg-black"
                    }`}
                  >
                    {copiedCode === couponOffer.code ? (
                      <>
                        <Check className="h-3 w-3 stroke-[3]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>{couponOffer.code}</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal / Bottom Sheet: View All Offers & Coupons */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-2xl max-h-[85vh] flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#147924] text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-neutral-900">
                    All Available Offers &amp; Coupons
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    Max savings applied automatically at checkout
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-black transition-colors"
                aria-label="Close offers dialog"
              >
                ✕
              </button>
            </div>

            {/* Modal Offers Scroll List */}
            <div className="my-4 space-y-3 overflow-y-auto pr-1">
              {PRODUCT_OFFERS.map((offer) => (
                <div
                  key={offer.id}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4 transition-colors hover:border-neutral-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        offer.type === "bank"
                          ? "bg-blue-100 text-blue-900"
                          : offer.type === "coupon"
                          ? "bg-emerald-100 text-emerald-900"
                          : "bg-amber-100 text-amber-900"
                      }`}
                    >
                      {offer.type === "bank" && <CreditCard className="h-3 w-3" />}
                      {offer.type === "coupon" && <Tag className="h-3 w-3" />}
                      {offer.badge}
                    </span>

                    {offer.code && (
                      <button
                        onClick={() => handleCopyCode(offer.code!)}
                        className="inline-flex items-center gap-1 rounded border border-dashed border-[#171717] bg-[#FFF9D6] px-2 py-0.5 text-xs font-mono font-bold text-[#171717] hover:bg-[#FFD629] transition-colors"
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-700 stroke-[3]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>{offer.code}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-neutral-900">
                    {offer.title}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                    {offer.description}
                  </p>

                  {offer.terms && (
                    <div className="mt-2.5 pt-2 border-t border-neutral-200/70 text-[10px] text-neutral-500">
                      <strong>Terms:</strong> {offer.terms}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-3 border-t border-neutral-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full rounded-full bg-[#171717] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Compass,
  Grid,
  MapPin,
  ChevronDown,
  X,
  CheckCircle2,
} from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useSearchOverlayStore } from "@/stores/searchOverlayStore";
import { checkPincodeServiceability } from "@/data/pincodes";

export function SiteHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedPinCode, setSelectedPinCode] = useState("500081");
  const [selectedCity, setSelectedCity] = useState("Hyderabad (HITEC City)");
  const [deliveryTime, setDeliveryTime] = useState("45 mins");
  const [tempPin, setTempPin] = useState("");
  const [pinFeedback, setPinFeedback] = useState<string | null>(null);

  const cartItemCount = useCartStore((state) => state.getItemCount());
  const openCart = useCartStore((state) => state.openCart);
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const openSearch = useSearchOverlayStore((state) => state.openSearch);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSavePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempPin.trim().length === 6) {
      const result = checkPincodeServiceability(tempPin);
      setSelectedPinCode(result.pincode);
      setSelectedCity(result.city);
      setDeliveryTime(result.deliveryTime);
      if (result.isServiceable) {
        setPinFeedback(`Delivery available! Arrives in ${result.deliveryTime} from our ${result.hubName}.`);
        setTimeout(() => {
          setLocationModalOpen(false);
          setPinFeedback(null);
        }, 1200);
      } else {
        setPinFeedback("Standard courier delivery in 2 to 4 days for this PIN code.");
        setTimeout(() => {
          setLocationModalOpen(false);
          setPinFeedback(null);
        }, 1800);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white shadow-2xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Left: Brand Logo & Pin Code Delivery Selector */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="font-heading text-2xl font-black uppercase tracking-tight text-[#171717] sm:text-3xl">
                NEXKART
              </span>
              <span className="flex h-2 w-2 rounded-full bg-[#FFD629]" />
            </Link>

            {/* Delivery Location Pill: Telangana / AP Regional First */}
            <button
              onClick={() => setLocationModalOpen(true)}
              className="hidden items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-left text-xs transition-colors hover:border-[#FFD629] hover:bg-[#FFF9D6]/40 sm:flex"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD629] text-[#171717]">
                <MapPin className="h-3 w-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-medium leading-none text-[#707070]">
                  ⚡ Delivery in {deliveryTime}
                </span>
                <span className="font-heading text-[11px] font-bold leading-tight text-[#171717]">
                  {selectedCity} • {selectedPinCode}
                </span>
              </div>
              <ChevronDown className="h-3 w-3 text-neutral-400" />
            </button>
          </div>

          {/* Center: Search Bar */}
          <div className="flex flex-1 max-w-xl">
            <button
              onClick={openSearch}
              className="relative flex w-full items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-left text-xs text-neutral-400 transition-colors hover:border-[#FFD629] hover:bg-white"
            >
              <Search className="h-4 w-4 text-neutral-400" />
              <span className="line-clamp-1">Search shirts, kurtas, dresses, shoes, and pants...</span>
            </button>
          </div>

          {/* Right: Quick Links & Actions */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold text-[#171717]">
            <Link
              href="/categories"
              className="hidden items-center gap-1.5 transition-colors hover:text-[#FFB800] lg:flex"
            >
              <Grid className="h-4 w-4" />
              <span>Categories</span>
            </Link>

            <Link
              href="/collections"
              className="hidden items-center gap-1.5 transition-colors hover:text-[#FFB800] lg:flex"
            >
              <Compass className="h-4 w-4" />
              <span>Collections</span>
            </Link>

            <Link
              href="/wishlist"
              className="relative flex items-center gap-1.5 p-2 transition-colors hover:text-[#FFB800]"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden md:inline">Saved</span>
              {mounted && wishlistCount > 0 && (
                <span className="absolute -top-0.5 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD629] text-[9px] font-bold text-[#171717]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={openCart}
              className="relative flex items-center gap-1.5 rounded-full bg-[#171717] px-3.5 py-2 text-xs font-bold text-white transition-all hover:bg-[#FFD629] hover:text-[#171717]"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Cart</span>
              {mounted && cartItemCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD629] text-[9px] font-extrabold text-[#171717]">
                  {cartItemCount}
                </span>
              )}
            </button>

            <Link
              href="/account"
              className="flex items-center gap-1.5 p-1.5 hover:text-[#FFB800]"
              aria-label="User Account"
            >
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Account</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Pincode Serviceability Selector Modal */}
      {locationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-2xs">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FFB800]" />
                <h3 className="font-heading text-sm font-bold text-[#171717]">
                  Check Delivery by PIN Code
                </h3>
              </div>
              <button
                onClick={() => setLocationModalOpen(false)}
                className="rounded-full p-1 text-neutral-400 hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-xs text-[#707070]">
              Fast 45-60 minute delivery is active in <strong className="text-neutral-900">Telangana &amp; Andhra Pradesh</strong>. Enter your 6-digit PIN code:
            </p>

            <form onSubmit={handleSavePin} className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Enter 6-digit PIN code"
                maxLength={6}
                value={tempPin}
                onChange={(e) => setTempPin(e.target.value.replace(/\D/g, ""))}
                className="flex-1 rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold focus:border-[#FFD629] focus:outline-hidden"
              />
              <button
                type="submit"
                className="rounded-full bg-[#171717] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#FFD629] hover:bg-[#FFD629] hover:text-[#171717]"
              >
                Check
              </button>
            </form>

            {pinFeedback && (
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#FFF9D6] p-2 text-xs font-medium text-neutral-800">
                <CheckCircle2 className="h-4 w-4 text-[#FFB800]" />
                <span>{pinFeedback}</span>
              </div>
            )}

            {/* Quick Regional Picks */}
            <div className="mt-5 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#707070]">
                Popular Cities:
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPinCode("500081");
                    setSelectedCity("Hyderabad (HITEC City)");
                    setDeliveryTime("45 mins");
                    setLocationModalOpen(false);
                  }}
                  className="rounded-full border border-[#FFD629] bg-[#FFF9D6] px-3 py-1 font-semibold text-[#171717] hover:bg-[#FFD629]"
                >
                  ⚡ Hyderabad HITEC (500081) • 45m
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPinCode("500034");
                    setSelectedCity("Hyderabad (Banjara Hills)");
                    setDeliveryTime("45 mins");
                    setLocationModalOpen(false);
                  }}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-semibold text-[#171717] hover:border-[#FFD629] hover:bg-[#FFF9D6]"
                >
                  ⚡ Banjara Hills (500034) • 45m
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPinCode("530001");
                    setSelectedCity("Visakhapatnam");
                    setDeliveryTime("60 mins");
                    setLocationModalOpen(false);
                  }}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-semibold text-[#171717] hover:border-[#FFD629] hover:bg-[#FFF9D6]"
                >
                  ⚡ Vizag Port (530001) • 60m
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPinCode("520001");
                    setSelectedCity("Vijayawada");
                    setDeliveryTime("60 mins");
                    setLocationModalOpen(false);
                  }}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-semibold text-[#171717] hover:border-[#FFD629] hover:bg-[#FFF9D6]"
                >
                  ⚡ Vijayawada (520001) • 60m
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPinCode("560001");
                    setSelectedCity("Bengaluru");
                    setDeliveryTime("60 mins");
                    setLocationModalOpen(false);
                  }}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-semibold text-[#171717] hover:border-[#FFD629] hover:bg-[#FFF9D6]"
                >
                  Bengaluru (560001)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

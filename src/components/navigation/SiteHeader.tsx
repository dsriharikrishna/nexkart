"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Compass,
  Grid,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useSearchOverlayStore } from "@/stores/searchOverlayStore";
import { LocationSelectorModal } from "./LocationSelectorModal";
import { CookieLocationConsentDialog } from "./CookieLocationConsentDialog";

export function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedPinCode, setSelectedPinCode] = useState("500081");
  const [selectedCity, setSelectedCity] = useState("Hyderabad (HITEC City)");
  const [deliveryTime, setDeliveryTime] = useState("45 mins");

  const cartItemCount = useCartStore((state) => state.getItemCount());
  const openCart = useCartStore((state) => state.openCart);
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const openSearch = useSearchOverlayStore((state) => state.openSearch);

  useEffect(() => {
    setMounted(true);

    // Auto-detect location if permitted previously
    const savedPin = localStorage.getItem("nexkart_user_pincode");
    const savedCity = localStorage.getItem("nexkart_user_city");
    const savedTime = localStorage.getItem("nexkart_user_delivery_time");
    if (savedPin && savedCity) {
      setSelectedPinCode(savedPin);
      setSelectedCity(savedCity);
      if (savedTime) setDeliveryTime(savedTime);
    }
  }, []);

  const handleLocationUpdate = (pincode: string, city: string, time: string) => {
    setSelectedPinCode(pincode);
    setSelectedCity(city);
    setDeliveryTime(time);
    localStorage.setItem("nexkart_user_pincode", pincode);
    localStorage.setItem("nexkart_user_city", city);
    localStorage.setItem("nexkart_user_delivery_time", time);
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
      <LocationSelectorModal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        onSelectLocation={handleLocationUpdate}
      />

      {/* Bottom Cookies & Location Permission Consent Dialog */}
      <CookieLocationConsentDialog
        onLocationDetected={handleLocationUpdate}
      />
    </>
  );
}

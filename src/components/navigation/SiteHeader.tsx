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
import { CategoriesMegaMenu } from "./CategoriesMegaMenu";

export function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedPinCode, setSelectedPinCode] = useState("500081");
  const [selectedCity, setSelectedCity] = useState("Hyderabad (HITEC City)");
  const [deliveryTime, setDeliveryTime] = useState("45 mins");
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

  const cartItemCount = useCartStore((state) => state.getItemCount());
  const openCart = useCartStore((state) => state.openCart);
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const openSearch = useSearchOverlayStore((state) => state.openSearch);

  useEffect(() => {
    setMounted(true);

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
      <header
        onMouseLeave={() => setIsCategoriesMenuOpen(false)}
        className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/98 backdrop-blur-md shadow-xs transition-all"
      >
        {/* Main Header Container: Mobile is 2-row (col-wise), md+ is single row */}
        <div className="flex flex-col gap-2.5 px-4 py-2.5 sm:py-3.5 sm:px-6 lg:px-8">
          {/* Top Row: Brand, Location Pill & Action Icons */}
          <div className="flex w-full items-center justify-between gap-2">
            {/* Left: Brand Logo & Desktop Location Pill */}
            <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
              <Link href="/" className="flex items-center gap-1.5 shrink-0 group">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#171717] group-hover:text-[#FFB800] transition-colors">
                  NEXKART
                </span>
                <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FFD629] shadow-xs" />
              </Link>

              {/* Desktop / Tablet Delivery Location Pill */}
              <button
                onClick={() => setLocationModalOpen(true)}
                className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-left text-xs transition-colors hover:border-[#FFD629] hover:bg-[#FFF9D6]/40 md:flex shadow-2xs"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD629] text-[#171717] shadow-xs">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold leading-none text-[#707070]">
                    ⚡ Delivery in {deliveryTime}
                  </span>
                  <span className="font-heading text-xs font-bold leading-tight text-[#171717] max-w-[150px] truncate">
                    {selectedCity} • {selectedPinCode}
                  </span>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
              </button>

              {/* Mobile Delivery Location Pill */}
              <button
                onClick={() => setLocationModalOpen(true)}
                className="flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-neutral-50 px-2.5 py-1 text-left md:hidden active:scale-95 transition-all shadow-2xs"
                aria-label="Change location"
              >
                <MapPin className="h-3.5 w-3.5 text-[#FFB800] shrink-0" />
                <span className="text-[11px] font-bold text-[#171717] max-w-[70px] truncate">
                  {selectedPinCode}
                </span>
                <span className="text-[10px] font-black text-[#FFB800]">
                  ⚡{deliveryTime.replace(" mins", "m")}
                </span>
              </button>
            </div>

            {/* Desktop Center Search Bar (md+ screens) */}
            <div className="hidden md:flex flex-1 max-w-xl min-w-0 mx-4">
              <button
                onClick={openSearch}
                className="relative flex w-full items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 sm:py-2.5 text-left text-xs text-neutral-400 transition-colors hover:border-[#FFD629] hover:bg-white shadow-2xs"
              >
                <Search className="h-4 w-4 shrink-0 text-neutral-400" />
                <span className="line-clamp-1 text-xs sm:text-[13px] text-neutral-500 font-medium">
                  Search clothes, kurtas, jackets, sneakers...
                </span>
                <span className="hidden sm:inline-flex ml-auto text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-200/60 rounded px-1.5 py-0.5">
                  ⌘K
                </span>
              </button>
            </div>

            {/* Right: Actions, Links & Cart */}
            <div className="flex items-center gap-1 sm:gap-3 text-xs font-semibold text-[#171717] shrink-0">
              {/* Mega Menu Trigger: Categories (Desktop Only) */}
              <div
                className="relative hidden lg:block"
                onMouseEnter={() => setIsCategoriesMenuOpen(true)}
              >
                <button
                  onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 transition-all ${
                    isCategoriesMenuOpen
                      ? "bg-[#FFF9D6] text-[#171717] font-bold shadow-xs"
                      : "hover:bg-neutral-100 hover:text-[#FFB800]"
                  }`}
                  aria-expanded={isCategoriesMenuOpen}
                  aria-label="Open Categories Menu"
                >
                  <Grid className="h-4 w-4 text-[#171717]" />
                  <span>Categories</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isCategoriesMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Direct Discover Link (Desktop Only) */}
              <Link
                href="/products"
                className="hidden items-center gap-1.5 p-2 rounded-lg hover:bg-neutral-100 hover:text-[#FFB800] transition-colors lg:flex"
              >
                <Compass className="h-4 w-4" />
                <span>Discover</span>
              </Link>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="relative flex items-center justify-center p-2 rounded-lg hover:bg-neutral-100 transition-colors hover:text-[#FFB800]"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5 sm:h-4.5 sm:w-4.5" />
                <span className="hidden xl:inline ml-1.5 font-bold">Wishlist</span>
                {mounted && wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD629] text-[9px] font-black text-[#171717] shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-1.5 rounded-full bg-[#171717] px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white transition-all hover:bg-[#FFD629] hover:text-[#171717] active:scale-95 shadow-xs"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">Cart</span>
                {mounted && cartItemCount > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD629] text-[9px] font-black text-[#171717]">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Account Link */}
              <Link
                href="/account"
                className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-neutral-100 hover:text-[#FFB800] transition-colors"
                aria-label="User Account"
              >
                <User className="h-5 w-5 sm:h-4.5 sm:w-4.5" />
                <span className="hidden xl:inline font-bold">Account</span>
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Row (Column 2): Full-Width Search Input */}
          <div className="w-full md:hidden pt-0.5 pb-1">
            <button
              onClick={openSearch}
              className="relative flex w-full items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-left text-xs text-neutral-400 transition-colors hover:border-[#FFD629] hover:bg-white shadow-2xs"
            >
              <Search className="h-4 w-4 shrink-0 text-neutral-400" />
              <span className="line-clamp-1 text-xs text-neutral-500 font-medium">
                Search clothes, kurtas, jackets, sneakers...
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Hierarchical Categories Mega Menu */}
        <CategoriesMegaMenu
          isOpen={isCategoriesMenuOpen}
          onClose={() => setIsCategoriesMenuOpen(false)}
        />
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

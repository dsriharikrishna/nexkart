"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useSearchOverlayStore } from "@/stores/searchOverlayStore";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cartItemCount = useCartStore((state) => state.getItemCount());
  const openCart = useCartStore((state) => state.openCart);
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const openSearch = useSearchOverlayStore((state) => state.openSearch);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "WOMEN", href: "/collections/women" },
    { label: "MEN", href: "/collections/men" },
    { label: "NEW ARRIVALS", href: "/new-arrivals" },
    { label: "COLLECTIONS", href: "/collections" },
    { label: "THE ATELIER", href: "/about" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "shadow-xs border-b border-[#E8E3D8]/80 bg-[#FBF9F4]/85 py-3 backdrop-blur-md"
            : "backdrop-blur-xs border-b border-neutral-200/40 bg-[#FBF9F4]/70 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-ml-2 rounded-full p-2 text-neutral-900 transition-colors hover:bg-[#D4AF62]/20"
              aria-label="Open mobile navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Left Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-[#101010]" : "text-neutral-700 hover:text-[#101010]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF62] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Brand Logo / Wordmark - BLACK & CHAMPAGNE GOLD */}
          <div className="flex-1 text-center lg:flex-none">
            <Link href="/" className="group inline-block">
              <div className="flex items-center justify-center gap-2">
                <span className="block font-heading text-2xl font-black uppercase tracking-[0.22em] text-[#101010] sm:text-3xl">
                  NEXKART
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF62] ring-2 ring-[#101010]" />
              </div>
              <span className="-mt-0.5 block text-[8px] font-semibold uppercase tracking-[0.5em] text-[#8A6A3B] transition-colors group-hover:text-[#D4AF62]">
                ATELIER INDIA
              </span>
            </Link>
          </div>

          {/* Desktop Right Navigation & Actions */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="mr-2 hidden items-center gap-7 lg:flex">
              {navLinks.slice(3).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative py-1 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-[#101010]" : "text-neutral-700 hover:text-[#101010]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF62] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Action Icons - Rounded Minimalist Controls */}
            <button
              onClick={openSearch}
              className="backdrop-blur-xs rounded-full border border-[#E6DFCF] bg-white/80 p-2 text-neutral-800 transition-all hover:border-[#101010] hover:bg-white hover:text-black"
              aria-label="Search catalog"
            >
              <Search className="h-4 w-4" />
            </button>

            <Link
              href="/account"
              className="backdrop-blur-xs hidden rounded-full border border-[#E6DFCF] bg-white/80 p-2 text-neutral-800 transition-all hover:border-[#101010] hover:bg-white hover:text-black sm:block"
              aria-label="Client Account"
            >
              <User className="h-4 w-4" />
            </Link>

            <Link
              href="/wishlist"
              className="backdrop-blur-xs relative rounded-full border border-[#E6DFCF] bg-white/80 p-2 text-neutral-800 transition-all hover:border-[#101010] hover:bg-white hover:text-black"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
              {mounted && wishlistCount > 0 && (
                <span className="shadow-xs absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8A6A3B] text-[9px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Bag Button with Champagne Gold Accent */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 rounded-full border border-[#101010] bg-[#101010] px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#D4AF62] hover:text-[#101010]"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span className="hidden text-[11px] uppercase tracking-wider sm:inline">Bag</span>
              {mounted && cartItemCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF62] text-[9px] font-extrabold text-[#101010]">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="backdrop-blur-xs fixed inset-0 bg-black/40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-10 flex w-full max-w-xs flex-col justify-between bg-white p-6 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-6">
                  <span className="font-heading text-lg font-bold tracking-[0.2em]">NEXKART</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-900"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-1 text-sm font-medium uppercase tracking-[0.15em] text-neutral-800 hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 border-t border-neutral-100 pt-4">
                    <Link
                      href="/account"
                      className="text-xs uppercase tracking-[0.15em] text-neutral-600 hover:text-neutral-900"
                    >
                      My Account & Orders
                    </Link>
                    <Link
                      href="/wishlist"
                      className="text-xs uppercase tracking-[0.15em] text-neutral-600 hover:text-neutral-900"
                    >
                      Saved Items ({mounted ? wishlistCount : 0})
                    </Link>
                    <Link
                      href="/cart"
                      className="text-xs uppercase tracking-[0.15em] text-neutral-600 hover:text-neutral-900"
                    >
                      Shopping Bag ({mounted ? cartItemCount : 0})
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-6 text-xs text-neutral-400">
                <p>NEXKART ATELIER INDIA</p>
                <p className="mt-1">Customer Concierge: concierge-india@nexkart.com</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

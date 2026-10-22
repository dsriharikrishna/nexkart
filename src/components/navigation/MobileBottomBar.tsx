"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Compass, Heart, ShoppingBag } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";

export function MobileBottomBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const wishlistCount = useWishlistStore((state) => state.getCount());
  const cartCount = useCartStore((state) => state.getItemCount());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Categories", href: "/categories", icon: Grid },
    { label: "Discover", href: "/products", icon: Compass },
    { label: "Saved", href: "/wishlist", icon: Heart, count: mounted ? wishlistCount : 0 },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200/80 bg-white/95 px-2 backdrop-blur-md transition-all lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex h-14 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex min-w-[56px] flex-col items-center justify-center py-1 transition-all active:scale-95 ${
                isActive ? "text-[#171717]" : "text-neutral-500 hover:text-[#171717]"
              }`}
            >
              <div className="relative flex items-center justify-center">
                <Icon
                  className={`h-5 w-5 transition-transform ${
                    isActive ? "stroke-[2.5px] scale-110 text-[#171717]" : "text-neutral-600"
                  }`}
                />
                {item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1 -right-2.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#FFD629] px-1 text-[9px] font-black leading-none text-[#171717] ring-2 ring-white">
                    {item.count > 99 ? "99+" : item.count}
                  </span>
                )}
              </div>
              <span
                className={`mt-1 text-[10px] tracking-tight ${
                  isActive ? "font-bold text-[#171717]" : "font-medium text-neutral-500"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-0.5 h-1 w-5 rounded-full bg-[#FFD629]" />
              )}
            </Link>
          );
        })}

        {/* Quick Cart Trigger in Mobile Bar */}
        <button
          type="button"
          onClick={openCart}
          className="relative flex min-w-[56px] flex-col items-center justify-center py-1 text-neutral-500 transition-all hover:text-[#171717] active:scale-95"
          aria-label="Open Cart"
        >
          <div className="relative flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-neutral-600" />
            {mounted && cartCount > 0 && (
              <span className="absolute -top-1 -right-2.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#171717] px-1 text-[9px] font-black leading-none text-[#FFD629] ring-2 ring-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </div>
          <span className="mt-1 text-[10px] font-medium text-neutral-500">
            Cart
          </span>
        </button>
      </div>
    </nav>
  );
}


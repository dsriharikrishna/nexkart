"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Compass, Heart } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";

export function MobileBottomBar() {
  const pathname = usePathname();
  const wishlistCount = useWishlistStore((state) => state.getCount());

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Categories", href: "/categories/outerwear", icon: Grid },
    { label: "Collections", href: "/collections", icon: Compass },
    { label: "Saved", href: "/wishlist", icon: Heart, count: wishlistCount },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-[64px] w-full items-center justify-around border-t border-neutral-200 bg-white px-4 shadow-lg lg:hidden">
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
            className={`relative flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-[#171717]" : "text-[#707070] hover:text-[#171717]"
            }`}
          >
            <div className="relative">
              <Icon className={`h-5 w-5 ${isActive ? "stroke-[2.5px] text-[#171717]" : "text-neutral-500"}`} />
              {item.count !== undefined && item.count > 0 && (
                <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#FFD629] text-[8px] font-black text-[#171717]">
                  {item.count}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] font-bold ${
                isActive ? "text-[#171717]" : "text-neutral-500"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

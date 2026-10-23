"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/components/ui/motion";

export interface BudgetTile {
  title: string;
  priceTag: string;
  tagline: string;
  image: string;
  href: string;
}

const BUDGET_TILES: BudgetTile[] = [
  {
    title: "EVERYDAY TEES",
    priceTag: "UNDER ₹499",
    tagline: "Graphic, boxy & oversized cuts",
    image: "/images/products/prod-17/front.webp",
    href: "/products?category=shirts&price=499",
  },
  {
    title: "LINEN & KNIT TOPS",
    priceTag: "UNDER ₹699",
    tagline: "Breathable vacation casuals",
    image: "/images/products/prod-18/front.webp",
    href: "/products?category=knitwear&price=699",
  },
  {
    title: "DENIM & CARGOS",
    priceTag: "UNDER ₹799",
    tagline: "Utility pockets & skate fits",
    image: "/images/products/prod-15/front.webp",
    href: "/products?category=trousers&price=799",
  },
  {
    title: "FESTIVE KURTIS",
    priceTag: "UNDER ₹899",
    tagline: "Zari embroidery & modern ethnic",
    image: "/images/products/prod-07/front.webp",
    href: "/products?category=tailoring&price=899",
  },
  {
    title: "SNEAKERS & HEELS",
    priceTag: "UNDER ₹999",
    tagline: "Retro runners & strappy mules",
    image: "/images/products/prod-19/front.webp",
    href: "/products?category=footwear&price=999",
  },
];

export function BudgetCardSection() {
  return (
    <section
      className="w-full bg-neutral-50/70 py-3 sm:py-5"
      aria-label="Budget Cards"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Clean Left-Aligned Header */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
            POCKET-FRIENDLY STEALS
          </h2>

          <Link
            href="/products"
            className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#171717] hover:text-[#E52D27] transition-colors"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 5 Tall Vertical Budget Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {BUDGET_TILES.map((tile, idx) => (
            <div key={tile.title + idx}>
              <Link
                href={tile.href}
                className="group relative flex aspect-[9/16] w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#171717]/10 bg-neutral-900 p-3.5 shadow-sm block"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />

                {/* Top Badge: Price Anchor */}
                <div className="relative z-10 flex justify-start">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#FFD629] backdrop-blur-md shadow-md">
                    <Tag className="h-3 w-3" />
                    {tile.priceTag}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 text-white">
                  <h3 className="font-heading text-sm sm:text-base font-black uppercase tracking-tight text-white drop-shadow-md">
                    {tile.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] text-neutral-300 line-clamp-1">
                    {tile.tagline}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#FFD629]">
                    SHOP DEALS <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

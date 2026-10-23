"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/components/ui/motion";

export interface DealCardItem {
  title: string;
  priceText: string;
  image: string;
  href: string;
}

const DEALS_OF_THE_DAY_CARDS: DealCardItem[] = [
  {
    title: "Dresses",
    priceText: "Under ₹899",
    image: "/images/products/prod-08/front.webp",
    href: "/products?category=dresses",
  },
  {
    title: "Shirts",
    priceText: "Under ₹799",
    image: "/images/products/prod-10/front.webp",
    href: "/products?category=shirts",
  },
  {
    title: "Tops & Tunics",
    priceText: "Under ₹699",
    image: "/images/products/prod-18/front.webp",
    href: "/products?category=knitwear",
  },
  {
    title: "Heels & Flats",
    priceText: "Under ₹999",
    image: "/images/products/prod-14/front.webp",
    href: "/products?category=footwear",
  },
  {
    title: "Statement Kicks",
    priceText: "Under ₹999",
    image: "/images/products/prod-19/front.webp",
    href: "/products?category=footwear",
  },
];

export function DealOfTheDaySection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3" aria-label="Deal of the Day">
      {/* Clean Left-Aligned Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
          DEAL OF THE DAY
        </h2>
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52D27]">
          HOURLY REFRESHED
        </span>
      </div>

      {/* 5 Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {DEALS_OF_THE_DAY_CARDS.map((card, idx) => (
          <div key={card.title + idx}>
            <Link
              href={card.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-b from-[#8B0000] via-[#5C0000] to-[#3B0000] p-1.5 shadow-sm block"
            >
              {/* Header Tag */}
              <div className="relative z-10 rounded-t-xl bg-gradient-to-r from-[#A00000] to-[#7B0000] py-2 text-center border-b border-[#D4AF37]/40">
                <h3 className="font-heading text-sm sm:text-base font-extrabold uppercase text-white tracking-wide">
                  {card.title}
                </h3>
              </div>

              {/* Model Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30" />
              </div>

              {/* Footer Price Strip */}
              <div className="relative z-10 rounded-b-xl bg-gradient-to-r from-[#8B0000] via-[#B22222] to-[#8B0000] py-2 text-center border-t border-[#D4AF37]/50">
                <span className="font-heading text-sm sm:text-base font-black uppercase tracking-tight text-white drop-shadow-sm">
                  {card.priceText}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/components/ui/motion";

const FEATURED_BRANDS = [
  {
    name: "THE SOULED STORE",
    offer: "UP TO 70% OFF • POP DROPS",
    tagline: "Graphic tees, pop culture collabs & daily casuals",
    link: "/products?namex=The%20Souled%20Store",
    image: "/images/brand_spotlight_1.jpg",
    accent: "#FFD629",
  },
  {
    name: "SNITCH OFFICIAL",
    offer: "MIN 60% OFF • URBAN FITS",
    tagline: "Modern streetwear, textured resort shirts & relaxed trousers",
    link: "/products?namex=Snitch",
    image: "/images/brand_spotlight_2.jpg",
    accent: "#FFFFFF",
  },
  {
    name: "BEWAKOOF & TIGC",
    offer: "UP TO 80% OFF • SUPERHITS",
    tagline: "Heavyweight hoodies, cargo pants & outerwear layering",
    link: "/products?namex=Bewakoof",
    image: "/images/products/prod-10/front.webp",
    accent: "#FFD629",
  },
];

const QUICK_PARTNER_PILLS = [
  { name: "PUMA", off: "FLAT 40% OFF", href: "/products?namex=Puma" },
  { name: "TOKYO TALKIES", off: "UP TO 80% OFF", href: "/products?namex=Tokyo%20Talkies" },
  { name: "ZOUK", off: "UNDER ₹999", href: "/products?namex=Zouk" },
  { name: "BROWNBUTTER", off: "FROM ₹499", href: "/products?namex=Brown%20Butter" },
  { name: "CAMPUS", off: "FROM ₹299", href: "/products?category=footwear" },
  { name: "PLUM BEAUTY", off: "FROM ₹250", href: "/products?category=beauty" },
];

export function BrandPartnersSection() {
  return (
    <section className="w-full bg-white py-3 sm:py-4" aria-label="Brand Partners">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Clean Left-Aligned Header */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
            FEATURED BRAND PARTNERS
          </h2>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#171717] hover:text-[#FF8A00] transition-colors"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Brand Billboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {FEATURED_BRANDS.map((brand, idx) => (
            <div key={brand.name + idx}>
              <Link
                href={brand.link}
                className="group relative flex h-60 sm:h-72 w-full flex-col justify-end overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 p-5 shadow-xs block"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 flex flex-col">
                  <span
                    className="w-fit rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider"
                    style={{ backgroundColor: brand.accent, color: "#171717" }}
                  >
                    {brand.offer}
                  </span>
                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow-md">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 line-clamp-1">
                    {brand.tagline}
                  </p>
                  <span className="mt-3 flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#FFD629]">
                    EXPLORE DROP <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Partner Rail */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {QUICK_PARTNER_PILLS.map((pill) => (
            <Link
              key={pill.name}
              href={pill.href}
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#171717] hover:border-[#171717] hover:bg-[#171717] hover:text-[#FFD629] transition-all whitespace-nowrap shrink-0 shadow-2xs"
            >
              <span>{pill.name}</span>
              <span className="text-[10px] text-amber-600 font-extrabold">{pill.off}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

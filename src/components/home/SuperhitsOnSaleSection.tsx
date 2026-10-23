"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/components/ui/motion";

export interface SuperhitItem {
  brand1: string;
  brand2: string;
  offer: string;
  image: string;
  href: string;
}

const SUPERHITS_ITEMS: SuperhitItem[] = [
  {
    brand1: "BEWAKOOF",
    brand2: "TIGC",
    offer: "UP TO 75% OFF",
    image: "/images/products/prod-10/front.webp",
    href: "/products?namex=Bewakoof",
  },
  {
    brand1: "TOKYO TALKIES",
    brand2: "FREECAND",
    offer: "UP TO 70% OFF",
    image: "/images/products/prod-08/front.webp",
    href: "/products?namex=Tokyo%20Talkies",
  },
  {
    brand1: "SNITCH",
    brand2: "SOULED STORE",
    offer: "UP TO 75% OFF",
    image: "/images/brand_spotlight_2.jpg",
    href: "/products?namex=Snitch",
  },
  {
    brand1: "ASIAN",
    brand2: "CAMPUS",
    offer: "FROM ₹299",
    image: "/images/products/prod-19/front.webp",
    href: "/products?category=footwear",
  },
  {
    brand1: "BATA",
    brand2: "LIBERTY",
    offer: "UP TO 75% OFF",
    image: "/images/products/prod-14/front.webp",
    href: "/products?category=footwear",
  },
  {
    brand1: "PLUM",
    brand2: "BODY SHOP",
    offer: "FROM ₹250",
    image: "/images/beauty_steal_deals.jpg",
    href: "/products?category=beauty",
  },
];

export function SuperhitsOnSaleSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainerVariants}
      className="w-full px-4 sm:px-6 lg:px-8"
      aria-label="Superhits on Sale"
    >
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="relative inline-flex items-center justify-center">
          <h2 className="font-serif italic text-2xl sm:text-4xl text-[#8B0000] font-bold tracking-tight">
            Superhits <span className="font-heading not-italic font-black text-[#171717] uppercase tracking-wider text-xl sm:text-2xl">ON SALE</span>
          </h2>
        </div>
        <div className="mt-1.5 h-0.5 w-24 bg-[#8B0000]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {SUPERHITS_ITEMS.map((hit, idx) => (
          <motion.div
            key={hit.brand1 + idx}
            variants={fadeUpVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Link
              href={hit.href}
              className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 p-2.5 shadow-sm transition-all hover:border-[#D4AF37] hover:shadow-xl block"
            >
              <img
                src={hit.image}
                alt={hit.brand1}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Marquee Billboard Tag */}
              <div className="relative z-10 w-full rounded-xl border border-[#D4AF37] bg-amber-50/95 p-2 text-center shadow-md backdrop-blur-xs">
                <div className="flex items-center justify-center gap-1 text-[11px] font-black uppercase text-[#171717]">
                  <span>{hit.brand1}</span>
                  <span className="text-neutral-400">•</span>
                  <span>{hit.brand2}</span>
                </div>
                <div className="mt-1 rounded-md bg-[#8B0000] py-0.5 text-[9px] font-extrabold uppercase tracking-tight text-white">
                  {hit.offer}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

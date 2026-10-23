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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainerVariants}
      className="w-full px-4 sm:px-6 lg:px-8"
      aria-label="Deal of the Day"
    >
      {/* Slikk 3D Deal of the Day Title with golden marquee glow */}
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="relative inline-flex items-center justify-center">
          <span className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF275] via-[#FF8A00] to-[#E52D27] drop-shadow-[0_4px_12px_rgba(229,45,39,0.45)]">
            DEAL OF THE DAY
          </span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#E52D27]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#E52D27]">
            Hourly Refreshed Drops
          </span>
          <span className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#E52D27]" />
        </div>
      </div>

      {/* 5 Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {DEALS_OF_THE_DAY_CARDS.map((card, idx) => (
          <motion.div
            key={card.title + idx}
            variants={fadeUpVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <Link
              href={card.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-b from-[#8B0000] via-[#5C0000] to-[#3B0000] p-1.5 shadow-lg shadow-amber-900/20 transition-all hover:border-[#FFE259] hover:shadow-2xl"
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
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20" />
              </div>

              {/* Footer Price Strip */}
              <div className="relative z-10 rounded-b-xl bg-gradient-to-r from-[#8B0000] via-[#B22222] to-[#8B0000] py-2 text-center border-t border-[#D4AF37]/50">
                <span className="font-heading text-sm sm:text-base font-black uppercase tracking-tight text-white drop-shadow-sm">
                  {card.priceText}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

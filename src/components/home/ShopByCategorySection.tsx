"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/components/ui/motion";

export interface CategoryCardItem {
  title: string;
  offer: string;
  image: string;
  href: string;
}

const SHOP_BY_CATEGORY_ITEMS: CategoryCardItem[] = [
  { title: "Kurtis & Sets", offer: "From ₹359", image: "/images/products/prod-07/front.webp", href: "/products?category=tailoring" },
  { title: "Dresses", offer: "Up to 75% OFF", image: "/images/products/prod-08/front.webp", href: "/products?category=dresses" },
  { title: "Topwear", offer: "Up to 70% OFF", image: "/images/products/prod-18/front.webp", href: "/products?category=knitwear" },
  { title: "Bottomwear", offer: "From ₹399", image: "/images/products/prod-15/front.webp", href: "/products?category=trousers" },
  { title: "Shirts", offer: "Up to 75% OFF", image: "/images/products/prod-10/front.webp", href: "/products?category=shirts" },
  { title: "T-shirts", offer: "From ₹199", image: "/images/products/prod-17/front.webp", href: "/products?category=shirts" },
  { title: "Footwear", offer: "Up to 80% OFF", image: "/images/products/prod-19/front.webp", href: "/products?category=footwear" },
  { title: "Jewellery", offer: "From ₹99", image: "/images/products/prod-13/front.webp", href: "/products?category=jewelry" },
];

export function ShopByCategorySection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainerVariants}
      className="w-full px-4 sm:px-6 lg:px-8"
      aria-label="Shop by Category"
    >
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="relative inline-flex items-center justify-center">
          <h2 className="font-serif italic text-2xl sm:text-4xl text-[#8B0000] font-bold tracking-tight">
            Shop <span className="font-heading not-italic font-black text-[#171717] uppercase tracking-wider text-xl sm:text-2xl">BY CATEGORY</span>
          </h2>
        </div>
        <div className="mt-1.5 h-0.5 w-24 bg-[#8B0000]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
        {SHOP_BY_CATEGORY_ITEMS.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            variants={fadeUpVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Link
              href={item.href}
              className="group relative flex aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-sm transition-all hover:border-[#D4AF37] hover:shadow-xl block"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              {/* Top Category Title */}
              <div className="relative z-10 p-4">
                <h3 className="font-heading text-base sm:text-lg font-black uppercase text-white drop-shadow-md leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Red Marquee Badge */}
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-lg border border-[#D4AF37] bg-gradient-to-r from-[#990000] to-[#C00000] px-3 py-1.5 text-white shadow-md">
                <span className="font-heading text-xs font-black uppercase tracking-tight">
                  {item.offer}
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-[#FFD629] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

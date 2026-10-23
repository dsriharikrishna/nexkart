"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/components/ui/motion";

export function BeautyStealDealsBanner() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUpVariants}
      className="w-full px-4 sm:px-6 lg:px-8"
      aria-label="Beauty Steal Deals"
    >
      <Link
        href="/products?category=beauty"
        className="group relative block w-full overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-black p-1 shadow-xl hover:border-[#FFDF00] transition-all"
      >
        {/* Marquee Light Bulb Border Effect */}
        <div className="relative flex flex-col md:flex-row items-center justify-between rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-black px-6 py-6 md:py-8 overflow-hidden">
          <img
            src="/images/beauty_steal_deals.jpg"
            alt="Steal Deals Beauty Essentials"
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E52D27] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" /> Flash Drop
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-white">
              Steal Deals • Beauty Essentials
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-300">
              Skincare, perfumes &amp; cosmetics from top luxury labels
            </p>
          </div>

          <div className="relative z-10 mt-4 md:mt-0 flex items-center gap-4">
            <div className="rounded-xl border border-[#D4AF37]/60 bg-black/60 px-4 py-2 backdrop-blur-sm text-center">
              <span className="text-[10px] uppercase font-bold text-[#FFD629]">Flat</span>
              <p className="text-xl sm:text-2xl font-black text-white">UP TO 75% OFF</p>
            </div>
            <span className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD629] text-black transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}

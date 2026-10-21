"use client";

import Link from "next/link";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FestiveCampaignHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF9D6]/30 via-white to-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#FFD629] bg-gradient-to-r from-[#8A001A] via-[#B81424] to-[#E52538] shadow-xl">
          {/* Decorative Background Lighting & Radiance */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FFD629]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#FFB800]/25 blur-3xl" />

          {/* Grid Layout: Editorial Text Content on Left, Photography on Right */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start p-6 sm:p-10 lg:col-span-6 lg:py-12"
            >
              {/* Eyebrow Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFD629]/60 bg-black/40 px-3.5 py-1 backdrop-blur-md">
                <Zap className="h-3.5 w-3.5 fill-[#FFD629] text-[#FFD629]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD629]">
                  FAST DELIVERY • ARRIVES IN 45-60 MINS
                </span>
              </div>

              {/* Catchy Festive Sale Badge */}
              <div className="mb-3 inline-block rounded-2xl bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-4 py-1 text-center shadow-md">
                <span className="font-heading text-xs font-black uppercase tracking-wider text-[#171717] sm:text-sm">
                  ✨ FESTIVE SALE IS LIVE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-3xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                UP TO <span className="text-[#FFD629]">90% OFF</span>
                <span className="mt-1 block font-serif italic font-normal text-amber-200">
                  Festive Outfits
                </span>
              </h1>

              <p className="mt-3 max-w-md text-xs font-medium leading-relaxed text-amber-100/90 sm:text-sm">
                Bright kurtas, sarees, dresses, and festive shoes for your celebrations. Delivered to your doorstep in minutes.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/collections"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-7 py-3 text-xs font-black uppercase tracking-wider text-[#171717] shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-105 active:scale-95"
                >
                  Shop Festive Sale <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/collections/women"
                  className="rounded-full border border-white/40 bg-black/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  Women&apos;s Outfits
                </Link>

                <Link
                  href="/collections/men"
                  className="rounded-full border border-white/40 bg-black/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  Men&apos;s Kurtas
                </Link>
              </div>

              {/* Trust Signal */}
              <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-wide text-amber-200">
                <Sparkles className="h-3.5 w-3.5 text-[#FFD629]" />
                <span>Try at your doorstep and swap sizes easily</span>
              </div>
            </motion.div>

            {/* Right Photography Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-64 overflow-hidden sm:h-80 lg:col-span-6 lg:h-full lg:min-h-[440px]"
            >
              <img
                src="/nexkart_festive_hero.jpg"
                alt="Nexkart Festive Celebration Fashion Edit"
                className="h-full w-full object-cover object-center"
              />
              {/* Subtle gradient vignette blend into the left column */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#8A001A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#B81424] lg:via-transparent lg:to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

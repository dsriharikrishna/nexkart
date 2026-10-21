import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  TITLE_SPONSORS,
  ASSOCIATE_SPONSORS,
  DEALS_OF_THE_DAY,
  FEATURED_STYLE_CATEGORIES,
} from "@/data/spotlight";

export function ExpressSpotlightSections() {
  return (
    <div className="w-full space-y-12 py-8 bg-white text-[#171717]">
      {/* 1. Value Proposition Strip: 60 Min Delivery | Try & Buy | Instant Refund */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-around rounded-2xl border border-[#EAEAEA] bg-white py-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[#FFD629] text-xs font-black">
              ⚡
            </span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wide text-[#171717]">Fast Delivery</p>
              <p className="text-[10px] text-[#707070]">Delivered in 45-60 mins</p>
            </div>
          </div>

          <div className="h-6 w-px bg-[#EAEAEA]" />

          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[#FFD629] text-xs font-black">
              👔
            </span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wide text-[#171717]">Try at Home</p>
              <p className="text-[10px] text-[#707070]">Easy size exchange</p>
            </div>
          </div>

          <div className="h-6 w-px bg-[#EAEAEA]" />

          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[#FFD629] text-xs font-black">
              💸
            </span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wide text-[#171717]">Quick Refunds</p>
              <p className="text-[10px] text-[#707070]">Direct back to your account</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. POPULAR BRANDS */}
      <section className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-0.5 w-16 bg-[#171717]" />
          <h2 className="font-heading text-lg font-black uppercase tracking-[0.2em] text-[#171717] sm:text-xl">
            TOP BRANDS
          </h2>
          <div className="h-0.5 w-16 bg-[#171717]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TITLE_SPONSORS.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.link}
              className="group relative flex flex-col items-center justify-center rounded-3xl border-2 border-[#EAEAEA] bg-gradient-to-br from-[#171717] via-[#222222] to-[#171717] p-8 text-white shadow-md transition-all duration-300 hover:border-[#FFD629] hover:shadow-xl hover:scale-[1.01]"
            >
              {/* Subtle ambient gold glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#FFD629]/10 blur-2xl" />

              <div className="my-3 text-center">
                <span className="font-heading text-2xl font-black uppercase tracking-widest text-white drop-shadow-sm sm:text-3xl">
                  {sponsor.logoText}
                </span>
                <p className="mt-1 text-xs text-[#FFF9D6]/80">{sponsor.subtitle}</p>
              </div>

              {/* Primary Electric Yellow CTA button */}
              <div className="mt-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-6 py-2 text-xs font-black uppercase tracking-wider text-[#171717] shadow-sm transition-all group-hover:brightness-105">
                <span>{sponsor.badge}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. MORE FEATURED BRANDS */}
      <section className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-0.5 w-16 bg-[#EAEAEA]" />
          <h2 className="font-heading text-xs font-black uppercase tracking-[0.2em] text-[#707070] sm:text-sm">
            MORE FEATURED BRANDS
          </h2>
          <div className="h-0.5 w-16 bg-[#EAEAEA]" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ASSOCIATE_SPONSORS.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.link}
              className="group relative flex flex-col items-center justify-between rounded-2xl border border-[#EAEAEA] bg-white p-5 shadow-xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
            >
              <div className="flex h-12 w-full items-center justify-center">
                <span className="font-heading text-sm font-black uppercase tracking-wide text-[#171717] group-hover:text-black">
                  {sponsor.logoText}
                </span>
              </div>

              <div className="mt-3 flex w-full items-center justify-center gap-1 rounded-full bg-[#FFF9D6] border border-[#FFD629]/50 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#171717] group-hover:bg-[#FFD629]">
                <span>{sponsor.badge}</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. DEAL OF THE DAY */}
      <section className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FFD629]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#707070]">
              TODAY&apos;S BEST PRICES
            </span>
          </div>
          <h2 className="mt-1 font-heading text-2xl font-black uppercase tracking-tight text-[#171717] sm:text-3xl">
            Deal <span className="font-serif italic font-normal text-[#707070]">of the</span> Day
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {DEALS_OF_THE_DAY.map((deal, idx) => (
            <Link
              key={idx}
              href={deal.link}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white text-[#171717] shadow-xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
            >
              {/* Category banner header */}
              <div className="bg-[#171717] py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-white">
                {deal.category}
              </div>

              {/* Photo */}
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={deal.image}
                  alt={deal.category}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
              </div>

              {/* Price Tag Footer with Electric Yellow highlight */}
              <div className="bg-[#FFF9D6] py-2 text-center text-xs font-black uppercase tracking-wider text-[#171717] group-hover:bg-[#FFD629]">
                {deal.priceTag}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. PROMOTIONAL STRIP */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#FFD629] bg-[#171717] p-5 text-white shadow-md sm:flex-row sm:px-8">
          <div>
            <h3 className="font-heading text-lg font-black tracking-wide text-white sm:text-xl">
              SPECIAL OFFERS • <span className="text-[#FFD629]">UP TO 75% OFF</span>
            </h3>
            <p className="text-xs text-neutral-300">
              Get trending clothes delivered straight to your door in 45-60 minutes.
            </p>
          </div>
          <Link
            href="/collections"
            className="rounded-full bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-[#171717] shadow-md transition-all hover:brightness-105"
          >
            Shop Offers
          </Link>
        </div>
      </div>

      {/* 6. SHOP BY CATEGORY */}
      <section className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-6 flex flex-col items-center justify-center">
          <span className="font-heading text-2xl font-black uppercase tracking-tight text-[#171717] sm:text-3xl">
            Popular <span className="font-serif italic font-normal text-[#707070]">Categories</span>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURED_STYLE_CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[#EAEAEA] aspect-[3/4] bg-neutral-900 shadow-xs transition-all hover:border-[#FFD629] hover:scale-105 hover:shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />

              <div className="relative z-10 p-3 text-left">
                <h4 className="font-heading text-xs font-bold leading-tight text-white drop-shadow-xs">
                  {cat.title}
                </h4>
                <div className="mt-1 inline-block rounded-md bg-[#FFD629] px-2 py-0.5 text-[10px] font-black text-[#171717]">
                  {cat.discount}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

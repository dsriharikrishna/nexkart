import Link from "next/link";
import { Zap, RotateCcw, ShieldCheck, ArrowRight } from "lucide-react";
import {
  TITLE_SPONSORS,
  ASSOCIATE_SPONSORS,
  DEALS_OF_THE_DAY,
  FEATURED_STYLE_CATEGORIES,
} from "@/data/spotlight";

export function SlikkSpotlightHub() {
  return (
    <div className="w-full space-y-10 py-6 bg-white text-[#171717]">
      {/* 1. OFFERS & SERVICE HIGHLIGHTS (NexKart Local Quick-Commerce Banners) */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Banner 1: Welcome Offer */}
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#171717] to-neutral-800 p-5 text-white shadow-xs">
            <div>
              <span className="inline-block rounded-md bg-[#FFD629] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#171717]">
                Welcome Offer
              </span>
              <h3 className="mt-2 font-heading text-lg sm:text-xl font-extrabold tracking-tight">
                ₹200 Off on First 3 Orders
              </h3>
              <p className="mt-0.5 text-xs text-neutral-300">
                Use code <span className="font-bold text-[#FFD629]">NEX200</span> • Free delivery on beauty &amp; jewellery
              </p>
            </div>
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#FFD629]">
              <Zap className="h-6 w-6 fill-[#FFD629]" />
            </div>
          </div>

          {/* Banner 2: Credibility & Try & Buy */}
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#FFF9D6] to-[#FFECA8] p-5 text-[#171717] border border-[#FFD629]/50 shadow-xs">
            <div>
              <span className="inline-block rounded-md bg-[#171717] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                Guaranteed Promise
              </span>
              <h3 className="mt-2 font-heading text-lg sm:text-xl font-extrabold tracking-tight">
                60 Min Delivery • Try &amp; Buy
              </h3>
              <p className="mt-0.5 text-xs text-neutral-700">
                Doorstep size trials • Instant refund • 100% verified authentic fashion
              </p>
            </div>
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#FFD629]">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. TITLE SPONSORS (NexKart Editorial Brand Tiles) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-3">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
              Featured Brand Partners
            </h2>
            <p className="text-xs text-neutral-500 font-medium">Official flagship stores with express doorstep delivery</p>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-[#171717] hover:text-[#FFB800] flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Brand Card 1: Bewakoof */}
          <Link
            href="/products?namex=Bewakoof"
            className="group relative flex h-44 sm:h-52 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 p-6 text-white shadow-xs transition-all hover:border-[#FFD629] hover:shadow-lg"
          >
            <img
              src="/images/products/shirts/prod-10-1.webp"
              alt="Bewakoof Official Store"
              className="absolute right-0 top-0 h-full w-3/5 object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="relative z-10 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-[#FFD629] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#171717]">
                  Up to 70% Off
                </span>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  Bewakoof
                </h3>
                <p className="mt-1 text-xs text-neutral-300">Everyday casuals, graphic tees &amp; denim</p>
              </div>
              <span className="text-xs font-bold text-[#FFD629] group-hover:underline flex items-center gap-1">
                Shop Collection <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>

          {/* Brand Card 2: The Indian Garage Co */}
          <Link
            href="/products?namex=TIGC"
            className="group relative flex h-44 sm:h-52 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 p-6 text-white shadow-xs transition-all hover:border-[#FFD629] hover:shadow-lg"
          >
            <img
              src="/images/products/outerwear/prod-02-1.webp"
              alt="The Indian Garage Co Store"
              className="absolute right-0 top-0 h-full w-3/5 object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="relative z-10 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-black uppercase text-[#171717]">
                  Min 60% Off
                </span>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  The Indian Garage Co
                </h3>
                <p className="mt-1 text-xs text-neutral-300">Layering jackets, rugged shirts &amp; trousers</p>
              </div>
              <span className="text-xs font-bold text-[#FFD629] group-hover:underline flex items-center gap-1">
                Shop Collection <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. ASSOCIATE BRANDS (Original NexKart Brand Grid) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h3 className="font-heading text-base font-bold uppercase tracking-wider text-neutral-500">
            Top Partner Labels
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          {[
            { name: "The Souled Store", off: "Min 50% Off", link: "/products?namex=The%20Souled%20Store", img: "/images/products/shirts/prod-17-1.webp" },
            { name: "Snitch", off: "Up to 70% Off", link: "/products?namex=Snitch", img: "/images/products/trousers/prod-11-1.webp" },
            { name: "Puma", off: "Flat 40% Off", link: "/products?namex=Puma", img: "/images/products/footwear/prod-19-1.webp" },
            { name: "Tokyo Talkies", off: "Up to 80% Off", link: "/products?namex=Tokyo%20Talkies", img: "/images/products/outerwear/prod-01-3.webp" },
            { name: "Zouk", off: "Under ₹999", link: "/products?namex=Zouk", img: "/images/products/accessories/prod-12-1.webp" },
            { name: "Brown Butter", off: "From ₹499", link: "/products?namex=Brown%20Butter", img: "/images/products/dresses/prod-09-1.webp" },
          ].map((brand) => (
            <Link
              key={brand.name}
              href={brand.link}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-2.5 text-center">
                <h4 className="font-heading text-xs font-bold text-[#171717] line-clamp-1">{brand.name}</h4>
                <span className="mt-0.5 inline-block text-[10px] font-semibold text-emerald-700">{brand.off}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FLASH DEALS / DEAL OF THE DAY */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between border-b border-neutral-100 pb-3">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
              ⚡ Deal of the Day
            </h2>
            <p className="text-xs text-neutral-500 font-medium">Limited-time price drops ending tonight</p>
          </div>
          <Link href="/products" className="text-xs font-bold text-[#171717] hover:text-[#FFB800] flex items-center gap-1">
            <span>Explore Deals</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          {DEALS_OF_THE_DAY.map((deal, idx) => (
            <Link
              key={idx}
              href={deal.link}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-[#171717] shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
            >
              <div className="bg-[#171717] py-1 text-center text-[10px] font-bold uppercase tracking-wider text-white">
                {deal.category}
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={deal.image}
                  alt={deal.category}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
              </div>
              <div className="bg-[#FFF9D6] py-1.5 text-center text-[11px] font-black uppercase tracking-wider text-[#171717] group-hover:bg-[#FFD629]">
                {deal.priceTag}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. SHOP BY POPULAR CATEGORIES */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
            Featured Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          {FEATURED_STYLE_CATEGORIES.slice(0, 6).map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-neutral-200 aspect-[3/4] bg-neutral-900 shadow-2xs transition-all hover:border-[#FFD629] hover:scale-105 hover:shadow-md"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent" />
              <div className="relative z-10 p-3 text-left">
                <h4 className="font-heading text-xs font-bold leading-tight text-white drop-shadow-xs">
                  {cat.title}
                </h4>
                <div className="mt-1 inline-block rounded-md bg-[#FFD629] px-2 py-0.5 text-[9px] font-black text-[#171717]">
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

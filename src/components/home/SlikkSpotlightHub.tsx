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
    <div className="w-full space-y-12 py-6 bg-white text-[#171717]">
      {/* 1. OFFERS & SERVICE HIGHLIGHTS (SLIKK DUAL BANNER) */}
      <div className="w-full px-0 sm:px-6 lg:px-8 space-y-4">
        {/* Slikk Dual Promotional Banner Strip - Full bleed edge-to-edge on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          <div className="overflow-hidden rounded-none sm:rounded-2xl border-y sm:border border-neutral-200/80 bg-neutral-100 shadow-2xs hover:shadow-md transition-shadow">
            <img
              src="https://cdn1.slikkclub.com/product/c47ee41278b44909b3e10720df6de29d_OFFER STRIP WEB (1).webp"
              alt="₹200 Off on First 3 Orders + Free Delivery on Beauty and Jewellery"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-none sm:rounded-2xl border-y sm:border border-neutral-200/80 bg-neutral-100 shadow-2xs hover:shadow-md transition-shadow">
            <img
              src="https://cdn1.slikkclub.com/product/4e4f30607b2c4d85a0bf93e155d7ef55_credibility_marker WEB (1).webp"
              alt="60 Min Delivery - Try & Buy - Instant Refund Guaranteed"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 2. TITLE SPONSORS (SLIKK OFFICIAL HEADER & BRAND CARDS) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <img
            src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/161c50dc3794436d85f680249785925e_Title_sponsors_title.webp"
            alt="Title Sponsors"
            className="h-7 sm:h-9 object-contain"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Bewakoof Card */}
          <Link
            href="/products?namex=Bewakoof"
            className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-black shadow-md transition-all hover:border-[#FFD629] hover:shadow-xl hover:scale-[1.01]"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/4f83faa9ee794eaf95f905a30b6e110b_bewakoof_3x.webp"
              alt="Bewakoof Title Sponsor"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
          </Link>

          {/* TIGC Card */}
          <Link
            href="/products?namex=TIGC"
            className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-black shadow-md transition-all hover:border-[#FFD629] hover:shadow-xl hover:scale-[1.01]"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/ed9b2656fb9049228b78f487709d5e0e_tigc_3x.webp"
              alt="The Indian Garage Co Title Sponsor"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />
          </Link>
        </div>
      </section>

      {/* 3. ASSOCIATE SPONSORS (SLIKK OFFICIAL HEADER & CARDS) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <img
            src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/75baf430a83d4c649895596c04cb6e51_Title_sponsors_title.webp"
            alt="Associate Sponsors"
            className="h-7 sm:h-9 object-contain"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          <Link
            href="/products?namex=The%20Souled%20Store"
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/9dc018b265f242e1b30b9a4ef80ee0cd_souled_store (2).webp"
              alt="The Souled Store"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>

          <Link
            href="/products?namex=Snitch"
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e17de3410b354bf19f259b9e14471cfd_snitch_3x.webp"
              alt="Snitch"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>

          <Link
            href="/products?namex=Puma"
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/92cfbf3747054270b5e8e697a891418a_puma (3).webp"
              alt="Puma"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>

          <Link
            href="/products?namex=Tokyo%20Talkies"
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/6bd7291bfdf94f8aa5dfff96d0bc64a1_tokyo_tolkies_3x.webp"
              alt="Tokyo Talkies"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>

          <Link
            href="/products?namex=Zouk"
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/b3b6f35be9064cc1bc4ef990fbb0f45b_zoukj.webp"
              alt="Zouk"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>

          <Link
            href="/products?namex=Brown%20Butter"
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs transition-all hover:border-[#FFD629] hover:shadow-md hover:scale-105"
          >
            <img
              src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/60f4d87ab98b4c9793e4d857fc3fc69a_brown_butterac.webp"
              alt="Brown Butter"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>
        </div>
      </section>

      {/* 4. FLASH DEALS / DEAL OF THE DAY (SLIKK OFFICIAL HEADER) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <img
            src="https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/7cfabadfe66c43ab92a7121d538d3a8c_flash_deals_titleww.webp"
            alt="Flash Deals"
            className="h-7 sm:h-9 object-contain"
            loading="lazy"
          />
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

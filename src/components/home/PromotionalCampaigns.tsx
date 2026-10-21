import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BannerCardMotion } from "@/components/home/HomeClientMotion";

export function PromotionalCampaigns() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between border-b border-[#EAEAEA] pb-4 md:flex-row md:items-end">
        <div>
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#707070]">
            FEATURED STYLES
          </span>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
            New Outfit Collections
          </h2>
        </div>
        <Link
          href="/collections"
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#171717] hover:text-[#FFB800] md:mt-0"
        >
          All Collections <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Women's Campaign Banner */}
        <BannerCardMotion>
          <Link
            href="/collections/women"
            className="group relative flex h-[480px] flex-col justify-end overflow-hidden rounded-3xl border border-[#EAEAEA] bg-[#171717] p-8 text-white transition-all duration-500 hover:shadow-xl sm:p-10"
          >
            <img
              src="/south_indian_female_model.jpg"
              alt="Women's Outfits"
              className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />
            <div className="relative z-10">
              <span className="mb-2 inline-block rounded-full bg-[#FFD629] px-3 py-1 text-[9.5px] font-bold uppercase tracking-wider text-[#171717]">
                WOMEN&apos;S COLLECTION
              </span>
              <h3 className="mb-2 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Soft Silk Outfits &amp; Casual Dresses
              </h3>
              <p className="mb-5 max-w-md text-xs text-neutral-300">
                Comfortable dresses, pure silk sets, and light tops ready for fast 45-60 minute doorstep delivery.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#171717] transition-all group-hover:bg-[#FFD629]">
                Shop Women <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        </BannerCardMotion>

        {/* Men's Campaign Banner */}
        <BannerCardMotion>
          <Link
            href="/collections/men"
            className="group relative flex h-[480px] flex-col justify-end overflow-hidden rounded-3xl border border-[#EAEAEA] bg-[#171717] p-8 text-white transition-all duration-500 hover:shadow-xl sm:p-10"
          >
            <img
              src="/south_indian_male_model.jpg"
              alt="Men's Outfits"
              className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />
            <div className="relative z-10">
              <span className="mb-2 inline-block rounded-full bg-[#FFD629] px-3 py-1 text-[9.5px] font-bold uppercase tracking-wider text-[#171717]">
                MEN&apos;S COLLECTION
              </span>
              <h3 className="mb-2 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Crisp Shirts &amp; Everyday Kurtas
              </h3>
              <p className="mb-5 max-w-md text-xs text-neutral-300">
                Neat festive kurtas, breathable linen shirts, and comfortable pants made for daily wear.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#171717] transition-all group-hover:bg-[#FFD629]">
                Shop Men <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        </BannerCardMotion>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SuperhitTile {
  brand1: string;
  brand2: string;
  offer: string;
  image: string;
  href: string;
}

const SUPERHITS_ITEMS: SuperhitTile[] = [
  {
    brand1: "BEWAKOOF",
    brand2: "TIGC",
    offer: "UP TO 75% OFF",
    image: "/images/products/prod-02/front.webp",
    href: "/products?namex=Bewakoof",
  },
  {
    brand1: "TOKYO TALKIES",
    brand2: "FREEHAND",
    offer: "UP TO 70% OFF",
    image: "/images/products/prod-08/front.webp",
    href: "/products?namex=Tokyo%20Talkies",
  },
  {
    brand1: "VASTRAMAY",
    brand2: "JOMPERS",
    offer: "UP TO 70% OFF",
    image: "/images/products/prod-07/front.webp",
    href: "/products?category=tailoring",
  },
  {
    brand1: "L'ORÉAL",
    brand2: "MOXIE",
    offer: "MIN 15% OFF",
    image: "/images/beauty_steal_deals.jpg",
    href: "/products?category=beauty",
  },
  {
    brand1: "CULT",
    brand2: "TECHNOSPORT",
    offer: "UNDER ₹799",
    image: "/images/products/prod-17/front.webp",
    href: "/products?category=shirts",
  },
  {
    brand1: "BATA",
    brand2: "LIBERTY",
    offer: "UP TO 75% OFF",
    image: "/images/products/prod-14/front.webp",
    href: "/products?category=footwear",
  },
  {
    brand1: "BROWN BUTTER",
    brand2: "ATELIER",
    offer: "UP TO 60% OFF",
    image: "/images/products/prod-05/front.webp",
    href: "/products?category=dresses",
  },
  {
    brand1: "SNITCH",
    brand2: "SOULED STORE",
    offer: "UP TO 75% OFF",
    image: "/images/brand_spotlight_2.jpg",
    href: "/products?namex=Snitch",
  },
  {
    brand1: "LIBAS",
    brand2: "AURELIA",
    offer: "UP TO 65% OFF",
    image: "/images/products/prod-01/front.webp",
    href: "/products?category=tailoring",
  },
  {
    brand1: "ASIAN",
    brand2: "CAMPUS",
    offer: "FROM ₹399",
    image: "/images/products/prod-19/front.webp",
    href: "/products?category=footwear",
  },
  {
    brand1: "THE BODY SHOP",
    brand2: "PLUM",
    offer: "MIN 20% OFF",
    image: "/images/beauty_steal_deals.jpg",
    href: "/products?category=beauty",
  },
  {
    brand1: "WILDCRAFT",
    brand2: "MOKOBARA",
    offer: "UP TO 50% OFF",
    image: "/images/products/prod-15/front.webp",
    href: "/products?category=accessories",
  },
];

export function SuperhitsOnSaleSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3" aria-label="Superhits on Sale">
      {/* Editorial Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#171717]">
            Superhits On Sale
          </h2>
          <span className="hidden sm:inline-block rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-red-700">
            Top Brands
          </span>
        </div>

        <Link
          href="/products"
          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#171717] hover:text-[#B22222] transition-colors"
        >
          <span>VIEW ALL</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 2-Row Grid matching Slikk Superhits On Sale */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {SUPERHITS_ITEMS.map((item, idx) => (
          <div key={item.brand1 + idx}>
            <Link
              href={item.href}
              className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 shadow-sm border border-neutral-200 block"
            >
              {/* Product / Model Image */}
              <img
                src={item.image}
                alt={`${item.brand1} & ${item.brand2}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Marquee Glowing Signboard with Light Bulbs / Gold Studs */}
              <div className="relative z-10 m-2 overflow-hidden rounded-xl border-2 border-[#D4AF37] bg-gradient-to-b from-[#FFF5D6] via-[#FFEBB0] to-[#E5C158] p-1.5 text-center shadow-lg">
                {/* Vintage Bulb Border Dots */}
                <div className="flex items-center justify-between px-1 text-[7px] text-[#8B0000] leading-none mb-0.5">
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>

                {/* Brands In Dual Column */}
                <div className="flex items-center justify-center gap-1.5 px-1 text-[11px] font-black uppercase tracking-tight text-[#171717]">
                  <span className="truncate max-w-[48%]">{item.brand1}</span>
                  <span className="text-[#8B0000] font-bold">|</span>
                  <span className="truncate max-w-[48%]">{item.brand2}</span>
                </div>

                {/* Bottom Red Offer Pill with Arrow */}
                <div className="mt-1 flex items-center justify-center gap-1 rounded-md bg-gradient-to-r from-[#8B0000] to-[#5a0000] py-0.5 px-2 text-[9px] font-black uppercase tracking-wider text-white shadow-xs">
                  <span>{item.offer}</span>
                  <span className="text-[10px] leading-none">→</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

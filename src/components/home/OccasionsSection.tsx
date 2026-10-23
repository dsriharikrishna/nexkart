import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface OccasionItem {
  title: string;
  sub: string;
  fontStyle: string;
  image: string;
  href: string;
}

const OCCASIONS_ITEMS: OccasionItem[] = [
  {
    title: "WEEKEND GETAWAY",
    sub: "Road trip & beach vibes",
    fontStyle: "font-black tracking-tighter uppercase",
    image: "/images/occ_weekend.jpg",
    href: "/products?q=weekend",
  },
  {
    title: "OFFICE HOURS",
    sub: "Clean 9-to-5 aesthetic",
    fontStyle: "font-mono font-black tracking-wider uppercase",
    image: "/images/products/prod-02/lifestyle.webp",
    href: "/products?q=office",
  },
  {
    title: "Night Out Looks",
    sub: "Cocktails, neon & glam",
    fontStyle: "font-serif italic tracking-wide text-amber-200",
    image: "/images/occ_nightout.jpg",
    href: "/products?q=evening",
  },
  {
    title: "BRUNCH DATE",
    sub: "Pastel linen & sunshine",
    fontStyle: "font-serif tracking-widest uppercase",
    image: "/images/occ_brunch.jpg",
    href: "/products?q=brunch",
  },
  {
    title: "KARAOKE NIGHT",
    sub: "Y2K electric drop",
    fontStyle: "font-black tracking-tight text-lime-400 uppercase",
    image: "/images/occ_karaoke.jpg",
    href: "/products?q=party",
  },
  {
    title: "Dinner Date",
    sub: "Intimate luxe tailoring",
    fontStyle: "font-serif italic tracking-wide",
    image: "/images/products/prod-01/front.webp",
    href: "/products?q=dinner",
  },
];

export function OccasionsSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3" aria-label="Occasions Beyond Festivals">
      {/* Clean Left-Aligned Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-heading text-xl sm:text-2xl font-black tracking-tight text-[#171717]">
          Occasions Beyond Festivals
        </h2>
        <Link
          href="/products"
          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#171717] hover:text-[#FF8A00] transition-colors"
        >
          <span>VIEW ALL</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {OCCASIONS_ITEMS.map((occ, idx) => (
          <div key={occ.title + idx}>
            <Link
              href={occ.href}
              className="group relative flex aspect-[9/16] w-full flex-col justify-end overflow-hidden rounded-2xl bg-black p-3 block shadow-sm border border-neutral-900"
            >
              {/* Main Photo */}
              <img
                src={occ.image}
                alt={occ.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

              {/* Elegant Inset Editorial Frame with Diamond Accent Notches */}
              <div className="pointer-events-none absolute inset-2.5 z-10 rounded-xl border border-white/40">
                {/* Top diamond notch */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] text-white/80 leading-none">
                  ✦
                </div>
                {/* Bottom diamond notch */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] text-white/80 leading-none">
                  ✦
                </div>
                {/* Left diamond notch */}
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 text-[9px] text-white/80 leading-none">
                  ✦
                </div>
                {/* Right diamond notch */}
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 text-[9px] text-white/80 leading-none">
                  ✦
                </div>
              </div>

              {/* Typographical Editorial Headline inside frame */}
              <div className="relative z-20 flex flex-col items-center text-center pb-2">
                <h3 className={`text-sm sm:text-base text-white drop-shadow-md leading-tight ${occ.fontStyle}`}>
                  {occ.title}
                </h3>
                <p className="mt-0.5 text-[9px] text-neutral-300 font-medium line-clamp-1">
                  {occ.sub}
                </p>
                <span className="mt-2 inline-block rounded-full bg-black/50 border border-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors">
                  Shop now
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

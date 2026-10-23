"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/components/ui/motion";

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
    image: "/images/products/prod-04/front.webp",
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainerVariants}
      className="w-full px-4 sm:px-6 lg:px-8"
      aria-label="Occasions Beyond Festivals"
    >
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="relative inline-flex items-center justify-center">
          <h2 className="font-serif italic text-2xl sm:text-4xl text-[#8B0000] font-bold tracking-tight">
            Occasions <span className="font-heading not-italic font-black text-[#171717] uppercase tracking-wider text-xl sm:text-2xl">BEYOND FESTIVALS</span>
          </h2>
        </div>
        <div className="mt-1.5 h-0.5 w-28 bg-[#8B0000]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {OCCASIONS_ITEMS.map((occ, idx) => (
          <motion.div
            key={occ.title + idx}
            variants={fadeUpVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <Link
              href={occ.href}
              className="group relative flex aspect-[9/16] w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/20 bg-neutral-900 p-3 shadow-md transition-all hover:border-white hover:shadow-2xl block"
            >
              <img
                src={occ.image}
                alt={occ.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Typographical Editorial Headline */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className={`text-base sm:text-lg text-white drop-shadow-md leading-tight ${occ.fontStyle}`}>
                  {occ.title}
                </h3>
                <p className="mt-0.5 text-[10px] text-neutral-300 font-medium line-clamp-1">
                  {occ.sub}
                </p>
                <span className="mt-2.5 inline-block rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black">
                  Shop Now
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

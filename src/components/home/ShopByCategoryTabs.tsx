"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryTile {
  title: string;
  slug: string;
  image: string;
  subtitle: string;
}

const MEN_CATEGORIES: CategoryTile[] = [
  {
    title: "Casualwear & Tees",
    slug: "shirts",
    subtitle: "Heavyweight drop-shoulder & oversized tees",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Shirts & Poplins",
    slug: "shirts",
    subtitle: "Crisp Egyptian cotton & resort button-downs",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Bottomwear & Denim",
    slug: "trousers",
    subtitle: "Japanese selvedge & pleated relaxed chinos",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Ethnicwear & Kurtas",
    slug: "tailoring",
    subtitle: "Modern silk-blend bandhgalas & draped kurtas",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Footwear & Loafers",
    slug: "footwear",
    subtitle: "Lug-sole leather loafers & minimal court sneakers",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Accessories & Bags",
    slug: "accessories",
    subtitle: "Full-grain calfskin totes & palladium accents",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85",
  },
];

const WOMEN_CATEGORIES: CategoryTile[] = [
  {
    title: "Westernwear & Blazers",
    slug: "tailoring",
    subtitle: "Sharp unstructured tailoring & sculpted fits",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Ethnicwear & Sets",
    slug: "dresses",
    subtitle: "Sensual chanderi sets & contemporary drape",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Dresses & Tops",
    slug: "dresses",
    subtitle: "Fluid bias slips, evening midi dresses & knit tops",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Bottomwear & Trousers",
    slug: "trousers",
    subtitle: "Wide-leg fluid trousers & pleated tailored pants",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Footwear & Mules",
    slug: "footwear",
    subtitle: "Architectural block heels & minimalist leather mules",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Accessories & Bags",
    slug: "accessories",
    subtitle: "Sculptural leather crossbodies & signature jewelry",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85",
  },
];

export function ShopByCategoryTabs() {
  const [activeTab, setActiveTab] = useState<"men" | "women">("women");

  const categories = activeTab === "men" ? MEN_CATEGORIES : WOMEN_CATEGORIES;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header + Gender Tabs */}
      <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#EAEAEA] pb-4 sm:flex-row sm:items-end">
        <div>
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#707070]">
            FIND WHAT YOU NEED
          </span>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
            Shop by Category
          </h2>
        </div>

        {/* Gender Toggle Pill */}
        <div className="inline-flex rounded-full border border-[#EAEAEA] bg-neutral-100 p-1">
          <button
            onClick={() => setActiveTab("women")}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "women"
                ? "bg-[#171717] text-[#FFD629] shadow-sm"
                : "text-[#707070] hover:text-[#171717]"
            }`}
          >
            Women
          </button>
          <button
            onClick={() => setActiveTab("men")}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "men"
                ? "bg-[#171717] text-[#FFD629] shadow-sm"
                : "text-[#707070] hover:text-[#171717]"
            }`}
          >
            Men
          </button>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={`/categories/${cat.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white transition-all duration-300 hover:border-[#FFD629] hover:shadow-md"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95" />
              <div className="absolute inset-x-3 bottom-3 text-white">
                <h3 className="font-heading text-xs font-bold leading-snug tracking-wide text-white">
                  {cat.title}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-[#FFD629] opacity-90 group-hover:underline">
                  Shop Now <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

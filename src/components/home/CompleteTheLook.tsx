"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";

interface LookItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  slug: string;
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL" | "OS";
  color: string;
}

export function CompleteTheLook() {
  const addItem = useCartStore((state) => state.addItem);
  const [bundleAdded, setBundleAdded] = useState(false);

  // Curate 3 coordinated items from PRODUCTS dataset
  const trench = PRODUCTS.find((p) => p.slug === "double-breasted-cashmere-coat") || PRODUCTS[0];
  const trousers = PRODUCTS.find((p) => p.category === "trousers") || PRODUCTS[1];
  const footwear = PRODUCTS.find((p) => p.category === "footwear") || PRODUCTS[2];

  const lookItems: LookItem[] = [
    {
      id: trench.id,
      name: trench.name,
      category: "Outerwear",
      price: trench.price,
      image: trench.images[0],
      slug: trench.slug,
      size: "M",
      color: trench.colors[0]?.name || "Camel",
    },
    {
      id: trousers.id,
      name: trousers.name,
      category: "Bottomwear",
      price: trousers.price,
      image: trousers.images[0],
      slug: trousers.slug,
      size: "M",
      color: trousers.colors[0]?.name || "Charcoal",
    },
    {
      id: footwear.id,
      name: footwear.name,
      category: "Footwear",
      price: footwear.price,
      image: footwear.images[0],
      slug: footwear.slug,
      size: "L",
      color: footwear.colors[0]?.name || "Noir",
    },
  ];

  const bundleTotal = lookItems.reduce((acc, item) => acc + item.price, 0);

  const handleAddBundle = () => {
    // Add all 3 to cart
    addItem(trench, lookItems[0].color, lookItems[0].size, 1);
    addItem(trousers, lookItems[1].color, lookItems[1].size, 1);
    addItem(footwear, lookItems[2].color, lookItems[2].size, 1);

    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 2500);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-[#EAEAEA] bg-gradient-to-br from-white via-[#FFF9D6]/30 to-[#FFF1B8]/40 p-6 md:p-10 shadow-xs">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD629] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#171717]">
              MATCHING SET
            </span>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
              Complete The Look
            </h2>
            <p className="mt-1 text-xs text-[#707070] sm:text-sm">
              Coordinated clothes that look great together. Ready for fast delivery to your door.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider text-[#707070]">Total for 3 items:</span>
              <p className="font-heading text-lg font-black text-[#171717]">{formatCurrency(bundleTotal)}</p>
            </div>
            <button
              onClick={handleAddBundle}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] ${
                bundleAdded
                  ? "bg-[#171717] text-[#FFD629]"
                  : "bg-gradient-to-r from-[#FFD629] via-[#FFC400] to-[#FFB800] text-[#171717] hover:brightness-105"
              }`}
            >
              {bundleAdded ? (
                <>
                  <Check className="h-4 w-4" /> Added All 3 to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" /> Add All 3 to Cart
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3 Items Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {lookItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white p-4 transition-all hover:border-[#FFD629] hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-[#171717] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    0{index + 1} • {item.category}
                  </span>
                </div>

                <div className="mt-3">
                  <h4 className="line-clamp-1 font-heading text-xs font-bold text-[#171717]">
                    <Link href={`/products/${item.slug}`} className="hover:underline">
                      {item.name}
                    </Link>
                  </h4>
                  <p className="mt-0.5 text-[11px] text-[#707070]">
                    Size: {item.size} • Color: {item.color}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#EAEAEA] pt-3">
                <span className="text-xs font-bold text-[#171717]">{formatCurrency(item.price)}</span>
                <Link
                  href={`/products/${item.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#171717] hover:text-[#FFB800]"
                >
                  Inspect <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

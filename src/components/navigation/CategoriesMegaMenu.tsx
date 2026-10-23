"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, X, ChevronDown } from "lucide-react";
import { CATEGORIES_TREE, CategoryMenuItem } from "./categoriesMegaMenuData";

interface CategoriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoriesMegaMenu({ isOpen, onClose }: CategoriesMegaMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryMenuItem>(CATEGORIES_TREE[0]);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(CATEGORIES_TREE[0].id);

  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 top-[65px] sm:top-[73px] z-40 bg-black/50 backdrop-blur-xs transition-opacity duration-150"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div
        onMouseLeave={onClose}
        className="absolute left-0 top-full z-50 w-full border-t border-neutral-200 bg-white shadow-2xl animate-in fade-in-50 duration-150 max-h-[85vh] overflow-y-auto"
      >
        {/* ============================================================== */}
        {/* DESKTOP VIEW (lg:flex / lg:grid)                                */}
        {/* 3-Tier Layout: Level 1 (Menu) -> Level 2 (Sub) -> Level 3 (Sub) */}
        {/* ============================================================== */}
        <div className="hidden lg:block mx-auto w-full px-6 lg:px-8 py-6">
          <div className="grid grid-cols-12 gap-6 min-h-[380px]">
            {/* LEVEL 1: Main Category Menus (Left Column Navigation) */}
            <div className="col-span-3 border-r border-neutral-200 pr-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 px-3">
                Select Department
              </span>
              <div className="mt-2 space-y-1">
                {CATEGORIES_TREE.map((cat) => {
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setSelectedCategory(cat)}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all ${
                        isSelected
                          ? "bg-[#FFF9D6] text-[#171717] shadow-xs border border-[#FFD629]/50"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-[#171717]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base leading-none">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isSelected ? "text-[#171717] translate-x-0.5" : "text-neutral-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* View All Categories Link */}
              <div className="mt-6 border-t border-neutral-100 pt-3 px-3">
                <Link
                  href="/categories"
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#171717] hover:text-[#FFB800] transition-colors"
                >
                  <span>All 11 Categories</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* LEVEL 2 & LEVEL 3: Sub Menus with Sub-Sub Items */}
            <div className="col-span-6 border-r border-neutral-200 pr-6 pl-2">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{selectedCategory.icon}</span>
                  <h3 className="font-heading text-base font-black text-[#171717]">
                    {selectedCategory.name}
                  </h3>
                </div>
                <Link
                  href={selectedCategory.href}
                  onClick={onClose}
                  className="text-[11px] font-black uppercase tracking-wider text-[#171717] hover:text-[#FFB800] transition-colors"
                >
                  View All {selectedCategory.name} →
                </Link>
              </div>

              {/* Multi-Column Sub-Menus Grid */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {selectedCategory.subMenus.map((sub) => (
                  <div key={sub.title} className="space-y-2.5">
                    {/* LEVEL 2: Sub Menu Group Title */}
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-[#FFB800]">
                      {sub.title}
                    </h4>

                    {/* LEVEL 3: Sub Sub Menu Item Links */}
                    <ul className="space-y-1.5 text-xs">
                      {sub.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="group flex items-center justify-between py-1 text-neutral-600 hover:text-[#171717] transition-colors"
                          >
                            <span className="group-hover:translate-x-0.5 transition-transform">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="rounded-full bg-[#FFD629]/30 px-1.5 py-0.2 text-[9px] font-extrabold text-[#171717]">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Campaign Billboard for the Active Category */}
            <div className="col-span-3 pl-2 flex flex-col justify-between">
              {selectedCategory.featuredPromo ? (
                <Link
                  href={selectedCategory.featuredPromo.href}
                  onClick={onClose}
                  className="group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-5 text-white shadow-md block"
                >
                  <img
                    src={selectedCategory.featuredPromo.image}
                    alt={selectedCategory.featuredPromo.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative z-10">
                    <span className="inline-block rounded-full bg-[#FFD629] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#171717]">
                      {selectedCategory.featuredPromo.tag}
                    </span>
                    <h4 className="mt-1.5 font-heading text-sm sm:text-base font-black text-white leading-tight">
                      {selectedCategory.featuredPromo.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-neutral-300 leading-snug">
                      {selectedCategory.featuredPromo.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#FFD629]">
                      Shop Now <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ) : null}

              {/* Express Delivery Guarantee Strip */}
              <div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-[11px] font-semibold text-neutral-700 flex items-center justify-between">
                <span>⚡ 45-60 Min Doorstep Delivery</span>
                <span className="font-bold text-emerald-700">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET VIEW (block lg:hidden)                         */}
        {/* Accordion hierarchy: Menu -> Sub Menu -> Sub Sub Menu          */}
        {/* ============================================================== */}
        <div className="block lg:hidden px-4 py-4 divide-y divide-neutral-100">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
              Categories Hierarchy
            </span>
            <button
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 active:scale-95"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2 pt-2">
            {CATEGORIES_TREE.map((cat) => {
              const isExpanded = mobileExpandedCat === cat.id;

              return (
                <div key={cat.id} className="rounded-xl border border-neutral-200/80 overflow-hidden bg-white">
                  {/* LEVEL 1: Category Accordion Header */}
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                    className={`flex w-full items-center justify-between p-3 text-left transition-colors ${
                      isExpanded ? "bg-[#FFF9D6]" : "bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{cat.icon}</span>
                      <span className="font-heading text-xs font-black text-[#171717]">
                        {cat.name}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-500 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* LEVEL 2 & 3: Sub Menus Accordion Body */}
                  {isExpanded && (
                    <div className="p-3 bg-white space-y-4">
                      {cat.subMenus.map((sub) => (
                        <div key={sub.title} className="space-y-1.5">
                          {/* LEVEL 2: Sub Menu Title */}
                          <div className="text-[11px] font-black uppercase tracking-wider text-[#FFB800]">
                            {sub.title}
                          </div>

                          {/* LEVEL 3: Sub-Sub Menu Items */}
                          <div className="grid grid-cols-2 gap-1.5 pt-1">
                            {sub.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between rounded-md bg-neutral-50 p-2 text-[11px] font-semibold text-neutral-700 active:bg-neutral-100"
                              >
                                <span className="truncate">{item.name}</span>
                                {item.badge && (
                                  <span className="rounded-full bg-[#FFD629] px-1 text-[8px] font-black text-[#171717]">
                                    {item.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* View Department All Link */}
                      <div className="pt-2 border-t border-neutral-100 flex justify-between items-center">
                        <Link
                          href={cat.href}
                          onClick={onClose}
                          className="text-xs font-black uppercase tracking-wider text-[#171717] flex items-center gap-1"
                        >
                          <span>Explore All {cat.name}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-[#FFB800]" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 mt-2">
            <Link
              href="/categories"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] py-3 text-xs font-black uppercase tracking-wider text-white active:scale-95"
            >
              <span>Explore All Categories Hub</span>
              <ArrowRight className="h-4 w-4 text-[#FFD629]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

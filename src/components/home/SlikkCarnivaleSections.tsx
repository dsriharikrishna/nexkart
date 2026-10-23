"use client";

import { DealOfTheDaySection } from "./DealOfTheDaySection";
import { BeautyStealDealsBanner } from "./BeautyStealDealsBanner";
import { ShopByCategorySection } from "./ShopByCategorySection";
import { OccasionsSection } from "./OccasionsSection";
import { SuperhitsOnSaleSection } from "./SuperhitsOnSaleSection";

export {
  DealOfTheDaySection,
  BeautyStealDealsBanner,
  ShopByCategorySection,
  OccasionsSection,
  SuperhitsOnSaleSection,
};

export function SlikkCarnivaleSections() {
  return (
    <div className="w-full space-y-16 py-8 bg-white text-[#171717] overflow-hidden">
      {/* 1. DEAL OF THE DAY (Carnivale Marquee Cards) */}
      <DealOfTheDaySection />

      {/* 2. STEAL DEALS BEAUTY STRIP (Full bleed marquee light banner) */}
      <BeautyStealDealsBanner />

      {/* 3. SHOP BY CATEGORY (Curved Archs with Marquee Badges) */}
      <ShopByCategorySection />

      {/* 4. OCCASIONS BEYOND FESTIVALS (Tall Editorial Story Cards) */}
      <OccasionsSection />

      {/* 5. SUPERHITS ON SALE (Marquee Brand Billboard Tiles) */}
      <SuperhitsOnSaleSection />
    </div>
  );
}

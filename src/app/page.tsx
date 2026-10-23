import { PRODUCTS } from "@/data/products";
import { TopCategoryCircleBar } from "@/components/navigation/TopCategoryCircleBar";
import { PureImageHero } from "@/components/home/PureImageHero";
import { BrandPartnersSection } from "@/components/home/BrandPartnersSection";
import { CuratedProductGridSection } from "@/components/home/CuratedProductGridSection";
import { BudgetCardSection } from "@/components/home/BudgetCardSection";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { SuperhitsOnSaleSection } from "@/components/home/SuperhitsOnSaleSection";
import { DealOfTheDaySection } from "@/components/home/DealOfTheDaySection";
import { BeautyStealDealsBanner } from "@/components/home/BeautyStealDealsBanner";
import { HyderabadBrandBanner } from "@/components/home/HyderabadBrandBanner";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#171717]">
      {/* ZONE 1: CATEGORY CIRCLE BAR (HORIZONTAL RAIL)                  */}
      <TopCategoryCircleBar />

      {/* ZONE 2: 1 OR 2 HERO SECTION (FESTIVE & TRENDING CAMPAIGNS)     */}
      <PureImageHero />

      {/* FLASH CARNIVALE DEALS (HOURLY DROPS & BEAUTY STEALS)          */}
      <DealOfTheDaySection />
      <BeautyStealDealsBanner />

      {/* ZONE 3: BRAND PARTNERS (3 BILLBOARD FLAGSHIP CARDS)            */}
      <BrandPartnersSection />

      {/* ZONE 4: PRODUCT SHOWCASE (TRENDING, NEW ARRIVALS, BESTSELLERS) */}
      <CuratedProductGridSection products={PRODUCTS} />

      {/* ZONE 5: BUDGET CARDS, OCCASIONS & SUPERHITS ON SALE           */}
      <BudgetCardSection />
      <OccasionsSection />
      <SuperhitsOnSaleSection />

      {/* ZONE 6: HYDERABAD SPEED & TRY-N-BUY VALUE PROMISE              */}
      <HyderabadBrandBanner />
    </div>
  );
}

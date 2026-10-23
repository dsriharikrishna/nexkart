import { PRODUCTS } from "@/data/products";
import { PureImageHero } from "@/components/home/PureImageHero";
import { SlikkSpotlightHub } from "@/components/home/SlikkSpotlightHub";
import { SlikkCarnivaleSections } from "@/components/home/SlikkCarnivaleSections";
import { TrendingSection } from "@/components/home/TrendingSection";
import { HyderabadBrandBanner } from "@/components/home/HyderabadBrandBanner";

export default function HomePage() {
  const trendingProducts = PRODUCTS.filter((p) => p.isFeatured || p.isBestseller).slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#171717]">
      {/* 1. EDITORIAL HERO CAMPAIGN BANNER (SLIKK HERO) */}
      <PureImageHero />
      
      {/* 2. SLIKK EXPRESS SPOTLIGHT & OFFICIAL BRAND HUBS */}
      <SlikkSpotlightHub />

      {/* 3. SLIKK CARNIVALE SECTIONS (DEAL OF THE DAY, SHOP BY CATEGORY, OCCASIONS, SUPERHITS) */}
      <SlikkCarnivaleSections />

      {/* 4. TRENDING CURATED PRODUCTS */}
      <TrendingSection products={trendingProducts} />

      {/* 5. SPEED & TRY-N-BUY VALUE BANNER */}
      <HyderabadBrandBanner />
    </div>
  );
}

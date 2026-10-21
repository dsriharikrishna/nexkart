import { PRODUCTS } from "@/data/products";
import { FestiveCampaignHero } from "@/components/home/FestiveCampaignHero";
import { ExpressSpotlightSections } from "@/components/home/ExpressSpotlightSections";
import { ShopByCategoryTabs } from "@/components/home/ShopByCategoryTabs";
import { FastDeliverySection } from "@/components/home/FastDeliverySection";
import { CompleteTheLook } from "@/components/home/CompleteTheLook";
import { PromotionalCampaigns } from "@/components/home/PromotionalCampaigns";
import { TrendingSection } from "@/components/home/TrendingSection";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  const fastDeliveryProducts = PRODUCTS.filter((p) => p.isFastDeliveryEligible).slice(0, 4);
  const trendingProducts = PRODUCTS.filter((p) => p.isFeatured || p.isBestseller).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);
  const totalNewCount = PRODUCTS.filter((p) => p.isNew).length;

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#171717]">
      {/* 1. FESTIVE HERO SECTION — EXCLUSIVELY CURATED AS HERO */}
      <FestiveCampaignHero />

      {/* 2. VALUE PROPOSITIONS, MARQUEE SPONSORS & DEALS OF THE DAY */}
      <ExpressSpotlightSections />

      {/* 3. SHOP BY CATEGORY (MEN'S & WOMEN'S DISTINCT TABS) */}
      <ShopByCategoryTabs />

      {/* 4. FAST-DELIVERY COLLECTION (45-60 MIN ELIGIBLE PRODUCTS) */}
      <FastDeliverySection products={fastDeliveryProducts} />

      {/* 5. COMPLETE THE LOOK (OUTFIT COORDINATOR) */}
      <CompleteTheLook />

      {/* 6. PROMOTIONAL CAMPAIGNS (MEN & WOMEN EDITORIAL SPLIT) */}
      <PromotionalCampaigns />

      {/* 7. TRENDING NOW CURATED GRID */}
      <TrendingSection products={trendingProducts} />

      {/* 8. NEW ARRIVALS GRID */}
      <NewArrivalsSection products={newArrivals} totalCount={totalNewCount} />

      {/* 9. NEWSLETTER DISPATCH */}
      <NewsletterSection />
    </div>
  );
}

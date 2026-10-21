import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Truck, RotateCcw, Award } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { PRODUCTS } from "@/data/products";
import { ThreeProductShowcase } from "@/components/home/ThreeProductShowcase";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { HeroMotionWrapper, BannerCardMotion } from "@/components/home/HomeClientMotion";

export default function HomePage() {
  const trendingProducts = PRODUCTS.filter((p) => p.isFeatured || p.isBestseller).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F3EA] text-[#101010]">
      {/* 
        ========================================================================
        OPTIONAL THEME 1 (VOLT - Electric Yellow, Signal Red, Deep Black)
        To revert to VOLT theme:
        - Hero background: bg-[#0A0A0A], radial lighting: bg-[#FFE600]/15, bg-[#FF3344]/15
        - Primary CTA: bg-gradient-to-r from-[#FFE600] to-[#FFF8C5] text-[#0A0A0A]
        - Eyebrow: text-[#FFE600] border-[#FFE600]/40
        ========================================================================
      */}

      {/* 1. IMMERSIVE CAMPAIGN HERO — BLACK & CHAMPAGNE GOLD */}
      <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[#101010] text-[#F7F3EA]">
        {/* Subtle Ambient Radial Lighting & Refined Gradients (Black-to-Charcoal-to-Gold) */}
        <div className="bg-[#D4AF62]/12 pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#8A6A3B]/10 blur-[150px]" />
        <div className="bg-radial-at-c pointer-events-none absolute inset-0 from-transparent via-[#101010]/50 to-[#101010]" />

        {/* Dual Male and Female Editorial Model Split Composition */}
        <div className="absolute inset-0 grid grid-cols-1 opacity-45 md:grid-cols-2">
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85"
              alt="Nexkart Atelier Female Muse — Haute Tailoring"
              className="contrast-105 h-full w-full object-cover object-top brightness-90 filter"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#101010]/60 to-[#101010]" />
          </div>
          <div className="relative hidden h-full w-full overflow-hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85"
              alt="Nexkart Atelier Male Muse — Modern Architectural Wool"
              className="contrast-105 h-full w-full object-cover object-top brightness-90 filter"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#101010]/60 to-[#101010]" />
          </div>
        </div>

        {/* Hero Editorial Copy & Oversized Sora Typography */}
        <HeroMotionWrapper>
          {/* Eyebrow Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF62]/35 bg-[#101010]/85 px-4 py-1.5 backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#D4AF62]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF62]">
              ATELIER AUTUMN • 2026 EDITION
            </span>
          </div>

          {/* Oversized Signature Typography */}
          <h1 className="font-heading text-4xl font-extrabold uppercase leading-[0.94] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-[#F7F3EA]">FASHION MOVES</span>
            <span className="bg-gradient-to-r from-[#F4EBD0] via-[#D4AF62] to-[#8A6A3B] bg-clip-text text-transparent">
              FASTER.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#F7F3EA]/80 sm:text-base md:text-lg">
            Where architectural precision meets Indian heritage textile artistry. High-contrast
            outerwear, sculptured tailoring, and pure Mongolian cashmere engineered for discerning
            contemporary wardrobes.
          </p>

          {/* Minimalist Pill-Shaped CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/collections/atelier-autumn"
              className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#EED8A1] via-[#D4AF62] to-[#C89B48] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#101010] shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[#D4AF62]/20 active:scale-[0.98]"
            >
              Explore Collection <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/collections/women"
              className="rounded-full border border-[#F7F3EA]/30 bg-white/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F7F3EA] backdrop-blur-md transition-all duration-300 hover:border-[#D4AF62] hover:bg-[#D4AF62]/10 hover:text-white"
            >
              Womenswear
            </Link>

            <Link
              href="/collections/men"
              className="rounded-full border border-[#F7F3EA]/30 bg-white/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F7F3EA] backdrop-blur-md transition-all duration-300 hover:border-[#D4AF62] hover:bg-[#D4AF62]/10 hover:text-white"
            >
              Menswear
            </Link>
          </div>

          {/* Subtle Atelier Capsule Tag */}
          <div className="mt-8 flex items-center gap-2 text-[11px] font-medium tracking-widest text-[#EFE9DC]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF62]" />
            <span>EXPRESS COURIER CONSIGNMENTS ACROSS INDIA • KALA GHODA ATELIER</span>
          </div>
        </HeroMotionWrapper>

        {/* Hero Bottom Meta Strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-[#D4AF62]/15 bg-[#101010]/90 backdrop-blur-md md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
            <span>STYLING: ARCHITECTURAL PURISM</span>
            <span className="text-[#D4AF62]">ORIGIN: KALA GHODA • MUMBAI</span>
            <span>EDITION: CRAFTED IN LIMITED EDITIONS</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS STRIP (Rounded minimal icons & generous whitespace) */}
      <section className="border-b border-[#E8E2D2] bg-[#FAF7F0] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF62]/15 text-[#101010]">
                <Truck className="h-4 w-4 text-[#8A6A3B]" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#101010]">
                  Priority Express
                </p>
                <p className="text-[11px] text-neutral-500">Pan-India delivery over ₹5,000</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF62]/15 text-[#101010]">
                <ShieldCheck className="h-4 w-4 text-[#8A6A3B]" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#101010]">
                  Verified Provenance
                </p>
                <p className="text-[11px] text-neutral-500">Pure cashmere & virgin wool</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#101010] text-[#D4AF62]">
                <RotateCcw className="h-4 w-4" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#101010]">
                  30-Day Doorstep Returns
                </p>
                <p className="text-[11px] text-neutral-500">Seamless home pickup service</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE9DC] text-[#101010]">
                <Award className="h-4 w-4 text-[#8A6A3B]" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#101010]">
                  Atelier Guarantee
                </p>
                <p className="text-[11px] text-neutral-500">Lifetime seam & stitching care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEN'S & WOMEN'S COLLECTION BANNERS */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between border-b border-[#E8E2D2] pb-4 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A6A3B]">
              CURATED PERSPECTIVE
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#101010] sm:text-3xl">
              Men&apos;s &amp; Women&apos;s Collection Banners
            </h2>
          </div>
          <Link
            href="/collections"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#101010] hover:text-[#8A6A3B] md:mt-0"
          >
            All Collections <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Women's Banner */}
          <BannerCardMotion>
            <Link
              href="/collections/women"
              className="group relative flex h-[520px] flex-col justify-end overflow-hidden rounded-3xl border border-[#E8E2D2] bg-[#101010] p-8 transition-all duration-500 hover:shadow-xl sm:p-10"
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                alt="Women's Atelier Edit"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient Lighting Overlay: Black-to-Charcoal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/45 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#EED8A1] to-[#D4AF62] px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#101010]">
                  WOMENSWEAR FW26
                </span>
                <h3 className="mb-2 font-heading text-3xl font-extrabold tracking-tight text-[#F7F3EA] sm:text-4xl">
                  The Sculptural Feminine
                </h3>
                <p className="mb-6 max-w-md text-xs font-light text-[#EFE9DC]/80 sm:text-sm">
                  Fluid silk slips, heavyweight double-faced cashmere coats, and sharp cocoon
                  tailoring.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F3EA] backdrop-blur-md transition-all group-hover:border-[#D4AF62] group-hover:bg-[#D4AF62] group-hover:text-[#101010]">
                  Explore Women <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </BannerCardMotion>

          {/* Men's Banner */}
          <BannerCardMotion>
            <Link
              href="/collections/men"
              className="group relative flex h-[520px] flex-col justify-end overflow-hidden rounded-3xl border border-[#E8E2D2] bg-[#101010] p-8 transition-all duration-500 hover:shadow-xl sm:p-10"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="Men's Atelier Edit"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/45 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="mb-2 inline-block rounded-full border border-[#D4AF62]/40 bg-[#101010]/80 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#D4AF62]">
                  MENSWEAR FW26
                </span>
                <h3 className="mb-2 font-heading text-3xl font-extrabold tracking-tight text-[#F7F3EA] sm:text-4xl">
                  Architectural Form
                </h3>
                <p className="mb-6 max-w-md text-xs font-light text-[#EFE9DC]/80 sm:text-sm">
                  Single-breasted Melton overcoats, high-twist virgin wool suits, and Japanese
                  selvedge denim.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F3EA] backdrop-blur-md transition-all group-hover:border-[#D4AF62] group-hover:bg-[#D4AF62] group-hover:text-[#101010]">
                  Explore Men <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </BannerCardMotion>
        </div>
      </section>

      {/* 4. TRENDING PRODUCT CARDS (Black & Champagne Gold) */}
      <section className="border-y border-[#E8E2D2] bg-[#EFE9DC]/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between sm:flex-row sm:items-end">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#D4AF62]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#101010]">
                  CURRENT MOMENTUM
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[#101010] sm:text-3xl">
                Trending Product Cards
              </h2>
            </div>
            <Link
              href="/collections/atelier-autumn"
              className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 hover:text-black sm:mt-0"
            >
              View All Autumn Pieces <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ProductGrid products={trendingProducts} columns={4} priorityCount={4} />
        </div>
      </section>

      {/* 5. PREMIUM CATEGORY CAMPAIGNS (Understated Luxury Category Cards) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between border-b border-[#E8E2D2] pb-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A6A3B]">
              WARDROBE PILLARS
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#101010] sm:text-3xl">
              Premium Category Campaigns
            </h2>
          </div>
          <p className="mt-2 text-xs text-neutral-500 sm:mt-0">
            Categorical edits built on zero compromises
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Campaign 1: Outerwear */}
          <BannerCardMotion>
            <Link
              href="/categories/outerwear"
              className="group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-[#E8E2D2] bg-[#101010] p-8 text-white transition-all duration-300 hover:shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=85"
                alt="Outerwear Campaign"
                className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] backdrop-blur-md">
                  CATEGORY 01
                </span>
                <span className="font-heading text-xl font-bold text-[#D4AF62]">01</span>
              </div>
              <div className="relative z-10">
                <h3 className="mb-1 font-heading text-2xl font-black tracking-tight text-[#F7F3EA]">
                  Coats &amp; Overcoats
                </h3>
                <p className="mb-4 text-xs font-light text-neutral-300">
                  Heavyweight double-faced cashmere and Spanish shearling.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF62] group-hover:underline">
                  Discover Coats <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </BannerCardMotion>

          {/* Campaign 2: Tailoring */}
          <BannerCardMotion>
            <Link
              href="/categories/tailoring"
              className="group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-[#E8E2D2] bg-[#101010] p-8 text-white transition-all duration-300 hover:shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
                alt="Modern Tailoring Campaign"
                className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] backdrop-blur-md">
                  CATEGORY 02
                </span>
                <span className="font-heading text-xl font-bold text-[#D4AF62]">02</span>
              </div>
              <div className="relative z-10">
                <h3 className="mb-1 font-heading text-2xl font-black tracking-tight text-[#F7F3EA]">
                  Modern Tailoring
                </h3>
                <p className="mb-4 text-xs font-light text-neutral-300">
                  Deconstructed shoulders and relaxed-straight silhouettes.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF62] group-hover:underline">
                  Discover Suiting <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </BannerCardMotion>

          {/* Campaign 3: Cashmere Knitwear */}
          <BannerCardMotion>
            <Link
              href="/categories/knitwear"
              className="group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-[#E8E2D2] bg-[#101010] p-8 text-white transition-all duration-300 hover:shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85"
                alt="Cashmere Knitwear Campaign"
                className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] backdrop-blur-md">
                  CATEGORY 03
                </span>
                <span className="font-heading text-xl font-bold text-[#D4AF62]">03</span>
              </div>
              <div className="relative z-10">
                <h3 className="mb-1 font-heading text-2xl font-black tracking-tight text-[#F7F3EA]">
                  Knitwear Layers
                </h3>
                <p className="mb-4 text-xs font-light text-neutral-300">
                  7-gauge fisherman rib and 15.5-micron Mongolian underfleece.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF62] group-hover:underline">
                  Discover Knits <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </BannerCardMotion>
        </div>
      </section>

      {/* 6. SIGNATURE THREE.JS 3D SHOWCASE */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E8E2D2] bg-[#FAF7F0] p-8 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Story */}
            <div className="lg:col-span-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF62]/30 bg-[#D4AF62]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#101010]">
                <Zap className="h-3 w-3 fill-current text-[#8A6A3B]" />
                OBJECTS &amp; JEWELRY
              </div>
              <h2 className="mb-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#101010] sm:text-4xl">
                Sensory Metallurgy for Contemporary Form.
              </h2>
              <p className="mb-6 text-xs font-light leading-relaxed text-neutral-600 sm:text-sm">
                Each piece in our objects collection is hand-carved in solid 925 sterling silver,
                featuring micro-brushed facets that reflect dynamic champagne light. Interact with
                the 3D model below to rotate in real time.
              </p>
              <div className="mb-8 space-y-2.5 text-xs font-medium text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF62]" />
                  <span>Solid 925 Sterling Silver with anti-tarnish rhodium barrier</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8A6A3B]" />
                  <span>Individual atelier hallmark stamping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#101010]" />
                  <span>Interactive 360-degree real-time proportion preview</span>
                </div>
              </div>

              <Link
                href="/products/sculptural-silver-signet-cuff"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EED8A1] via-[#D4AF62] to-[#C89B48] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#101010] shadow-md transition-all hover:scale-[1.02] hover:opacity-95"
              >
                Inspect Silver Arc Cuff <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Three.js Canvas Container */}
            <div className="lg:col-span-7">
              <ThreeProductShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONTRAST OBSIDIAN & CHAMPAGNE STUDY */}
      <section className="relative overflow-hidden bg-[#101010] py-24 text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#D4AF62]/10 blur-[130px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF62]">
                EDITORIAL CAMPAIGN • BLACK &amp; GOLD ATELIER
              </span>
              <h2 className="mb-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#F7F3EA] sm:text-5xl">
                The Stoic Power of Deep Contrast.
              </h2>
              <blockquote className="mb-6 border-l-2 border-[#D4AF62] pl-4 text-sm italic text-neutral-300">
                &ldquo;Where obsidian black meets champagne gold, tailoring commands space with
                uncompromised authority.&rdquo;
              </blockquote>
              <p className="mb-8 max-w-lg text-xs font-light leading-relaxed text-neutral-400 sm:text-sm">
                Explore garments engineered from raw Japanese denim, Italian virgin wool gabardines,
                and obsidian textures designed to command space without gratuitous embellishment.
              </p>
              <Link
                href="/collections/monochrome-series"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF62] bg-[#D4AF62] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#101010] transition-all hover:bg-transparent hover:text-white"
              >
                View Monochrome Edit <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85"
                  alt="Monochrome Look Female"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <div className="mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
                  alt="Monochrome Look Male"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEW ARRIVALS GRID */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between border-b border-[#E8E2D2] pb-4 sm:flex-row sm:items-end">
          <div>
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A6A3B]">
              NEW IN THE ATELIER
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#101010] sm:text-3xl">
              Fresh Sartorial Drops
            </h2>
          </div>
          <Link
            href="/new-arrivals"
            className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 hover:text-black sm:mt-0"
          >
            All New Arrivals ({PRODUCTS.filter((p) => p.isNew).length}){" "}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ProductGrid products={newArrivals} columns={4} priorityCount={4} />
      </section>

      {/* 9. NEWSLETTER DISPATCH */}
      <NewsletterSection />
    </div>
  );
}

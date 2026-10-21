import { CategoryMeta, CollectionMeta } from "@/types";

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "cat-outerwear",
    slug: "outerwear",
    title: "Jackets & Coats",
    subtitle: "Warm layers and everyday jackets",
    description:
      "Comfortable wool coats, trenches, and light jackets to keep you warm and looking great in any weather.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-tailoring",
    slug: "tailoring",
    title: "Blazers & Suits",
    subtitle: "Smart blazers and matching pants",
    description:
      "Easy-to-wear blazers and trousers designed for work, dinners, or special occasions.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-knitwear",
    slug: "knitwear",
    title: "Sweaters & Knits",
    subtitle: "Soft sweaters and cozy cardigans",
    description:
      "Super soft knit sweaters and cardigans made from pure wool and soft cotton for daily comfort.",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-shirts",
    slug: "shirts",
    title: "Shirts & Tops",
    subtitle: "Everyday cotton and silk shirts",
    description:
      "Crisp cotton button-downs and relaxed everyday tops that feel soft and look clean.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-dresses",
    slug: "dresses",
    title: "Dresses & Outfits",
    subtitle: "Casual and party dresses",
    description:
      "Simple, stylish dresses and outfits ready for day outings, parties, or festive events.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
    gender: "women",
  },
  {
    id: "cat-trousers",
    slug: "trousers",
    title: "Pants & Trousers",
    subtitle: "Comfortable pants, chinos, and jeans",
    description:
      "Well-fitted everyday trousers, relaxed wide-leg pants, and premium jeans.",
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-accessories",
    slug: "accessories",
    title: "Bags & Accessories",
    subtitle: "Leather bags, belts, and jewelry",
    description:
      "Everyday tote bags, neat crossbodies, classic belts, and clean jewelry pieces.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-footwear",
    slug: "footwear",
    title: "Shoes & Footwear",
    subtitle: "Comfortable loafers, boots, and heels",
    description:
      "Handcrafted leather shoes, easy loafers, and boots made for walking and comfort.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-jewelry",
    slug: "jewelry",
    title: "Fine Jewelry",
    subtitle: "Solid silver, gold vermeil, and modern cuffs",
    description:
      "Handcrafted solid sterling silver cuffs, signet rings, and timeless minimalist jewelry designed for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-beauty",
    slug: "beauty",
    title: "Beauty & Grooming",
    subtitle: "Luxury fragrance, botanicals, and skincare",
    description:
      "Artisanal Eau de Parfum, botanical facial oils, and clean nourishing body care essentials.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
  {
    id: "cat-gifts",
    slug: "gifts",
    title: "Curated Gifts",
    subtitle: "Luxury sets, fragrant candles, and curated gift boxes",
    description:
      "Thoughtfully boxed gifts, scented soy wax candles, and handpicked premium lifestyle sets.",
    image:
      "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=1200&q=85",
    gender: "all",
  },
];

export const COLLECTIONS: CollectionMeta[] = [
  {
    id: "col-atelier-autumn",
    slug: "atelier-autumn",
    title: "Autumn & Winter Collection",
    season: "New Season",
    headline: "Warm Layers and Comfortable Everyday Fits",
    description:
      "Discover soft warm coats, neat blazers, and easy knit layers designed for everyday wear.",
    heroImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85",
    editorialQuote: "Simple, warm, and easy to wear every day.",
  },
  {
    id: "col-minimalist-capsule",
    slug: "minimalist-capsule",
    title: "Everyday Essentials",
    season: "All-Year Basics",
    headline: "Essential Outfits That Always Match",
    description:
      "Clean basic pieces you can wear to work, dinners, or casual weekends without thinking twice.",
    heroImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=85",
    editorialQuote: "Good clothes that match everything in your closet.",
  },
  {
    id: "col-resort-modern",
    slug: "resort-modern",
    title: "Holiday & Summer Wear",
    season: "Summer Edit",
    headline: "Breezy Linens and Light Cotton Clothes",
    description:
      "Light linen shirts, easy summer pants, and soft cotton tops perfect for warm days and sunny trips.",
    heroImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85",
    editorialQuote: "Light, cool clothes made for warm sunny days.",
  },
  {
    id: "col-monochrome-series",
    slug: "monochrome-series",
    title: "Black & White Edit",
    season: "Classic Fits",
    headline: "Classic Black, White, and Grey Outfits",
    description:
      "Simple black coats, crisp white tops, and grey pants that give you a clean, sharp look.",
    heroImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85",
    editorialQuote: "Clean black and white styles that never go out of style.",
  },
  {
    id: "col-evening-luxe",
    slug: "evening-luxe",
    title: "Party & Evening Wear",
    season: "Celebration Edit",
    headline: "Special Outfits for Parties and Events",
    description:
      "Silk dresses, clean party jackets, and neat celebration wear made for dinners and festive gatherings.",
    heroImage:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1800&q=85",
    editorialQuote: "Look your best for dinner and celebrations.",
  },
];

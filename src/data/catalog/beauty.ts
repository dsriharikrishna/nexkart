import { Product } from "@/types";

export const BEAUTY_PRODUCTS: Product[] = [
  {
    id: "prod-23",
    slug: "santal-amber-eau-de-parfum",
    name: "Santal & Amber Eau de Parfum",
    subtitle: "50ml Artisan Botanical Unisex Fragrance",
    description:
      "A rich, smoky blend of Australian sandalwood, cardamom, warm amber, and hints of Tuscan iris. Formulated with 22% concentrated fragrance oils for a 12-hour nuanced sillage.",
    price: 12500,
    compareAtPrice: 15000,
    category: "beauty",
    collection: "beauty-wellness",
    gender: "unisex",
    tags: ["beauty", "perfume", "fragrance", "santal", "amber"],
    images: [
      "/images/products/beauty/prod-23-1.webp",
      "/images/products/placeholder.webp",
    ],
    colors: [
      { name: "Amber Glass", hex: "#7E5109" },
    ],
    sizes: ["OS"],
    composition: "Organic Grain Alcohol, Fragrance (Parfum), Essential Botanical Oils",
    fit: "50ml Spray Glass Flacon",
    details: [
      { label: "Top Notes", value: "Cardamom, Violet Leaf, Papyrus" },
      { label: "Heart Notes", value: "Tuscan Iris, Cedarwood, Leather" },
      { label: "Base Notes", value: "Australian Sandalwood, Amber Resin" },
      { label: "Concentration", value: "22% Eau de Parfum" },
    ],
    careInstructions: [
      "Store in cool, dry place away from direct sunlight",
      "Do not spray near open flame or eyes",
    ],
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    isAvailable: true,
    isFastDeliveryEligible: true,
    estimatedDeliveryTime: "45 mins",
    variants: [
      { id: "v23-1", color: "Amber Glass", size: "OS", sku: "BT-EDP-50", inStock: true, stockCount: 20 },
    ],
  },
  {
    id: "prod-24",
    slug: "nourishing-botanical-face-oil",
    name: "Active Botanical Face Oil",
    subtitle: "30ml Cold-Pressed Antioxidant Complex",
    description:
      "An intensive restorative facial elixir formulated with 16 nutrient-dense botanical oils, including rosehip, squalane, marula, and neroli. Delivers instant hydration and a radiant dewy finish without clogging pores.",
    price: 8900,
    compareAtPrice: 11000,
    category: "beauty",
    collection: "beauty-wellness",
    gender: "all",
    tags: ["beauty", "skincare", "face-oil", "botanical", "glow"],
    images: [
      "/images/products/placeholder.webp",
      "/images/products/placeholder.webp",
    ],
    colors: [
      { name: "Golden Dropper", hex: "#D4AF37" },
    ],
    sizes: ["OS"],
    composition: "100% Pure Plant Seed & Fruit Oils",
    fit: "30ml UV-Protected Glass Dropper",
    details: [
      { label: "Active Extracts", value: "Rosehip, Squalane, Sea Buckthorn, Neroli" },
      { label: "Formulation", value: "100% Vegan & Cruelty Free, No Phthalates" },
      { label: "Skin Type", value: "Suitable for all skin types including sensitive" },
    ],
    careInstructions: [
      "Press 3-5 drops onto cleansed face and neck morning and evening",
      "Store below 25°C",
    ],
    isFeatured: false,
    isNew: true,
    isBestseller: true,
    isAvailable: true,
    isFastDeliveryEligible: true,
    estimatedDeliveryTime: "60 mins",
    variants: [
      { id: "v24-1", color: "Golden Dropper", size: "OS", sku: "BT-OIL-30", inStock: true, stockCount: 25 },
    ],
  },
];

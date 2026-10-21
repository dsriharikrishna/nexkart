import { Product } from "@/types";

export const JEWELRY_PRODUCTS: Product[] = [
  {
    id: "prod-21",
    slug: "solid-gold-vermeil-chain-necklace",
    name: "18K Gold Vermeil Box Chain",
    subtitle: "Understated 50cm curb link chain necklace",
    description:
      "Precision-crafted 18-karat gold vermeil over a solid 925 sterling silver core. Features a sleek 2.2mm box profile that lays flat against the collarbone, secured with a custom engraved lobster clasp.",
    price: 19500,
    compareAtPrice: 24000,
    category: "jewelry",
    collection: "fine-jewelry",
    gender: "unisex",
    tags: ["jewelry", "gold", "necklace", "chain", "fine-jewelry"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1611591475102-4618c5ea4960?auto=format&fit=crop&w=1200&q=85",
    ],
    colors: [
      { name: "18K Gold", hex: "#E5C158" },
      { name: "White Rhodium", hex: "#EAEAEA" },
    ],
    sizes: ["OS"],
    composition: "18K Gold Vermeil (3.0 Microns) over 925 Sterling Silver",
    fit: "50cm Length / 2.2mm Gauge",
    details: [
      { label: "Core", value: "Solid 925 Sterling Silver" },
      { label: "Plating", value: "Heavy 18K Yellow Gold Vermeil" },
      { label: "Clasp", value: "Precision Laser-Engraved Lobster Clasp" },
      { label: "Origin", value: "Handcrafted in Vicenza, Italy" },
    ],
    careInstructions: [
      "Avoid contact with colognes, lotions, and chlorine",
      "Store in provided velvet jewelry pouch",
      "Polish gently with micro-fiber cloth",
    ],
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    isAvailable: true,
    isFastDeliveryEligible: true,
    estimatedDeliveryTime: "45 mins",
    variants: [
      { id: "v21-1", color: "18K Gold", size: "OS", sku: "JW-CHN-GLD", inStock: true, stockCount: 12 },
      { id: "v21-2", color: "White Rhodium", size: "OS", sku: "JW-CHN-RHD", inStock: true, stockCount: 7 },
    ],
  },
  {
    id: "prod-22",
    slug: "sculptural-onyx-signet-ring",
    name: "Brushed Silver Onyx Signet Ring",
    subtitle: "Natural black onyx inset in 925 silver",
    description:
      "A modern reinterpretation of the heritage signet ring. Set with a hand-cut natural black onyx gemstone within a solid bevelled sterling silver housing with brushed directional satin flanks.",
    price: 16800,
    compareAtPrice: 19500,
    category: "jewelry",
    collection: "fine-jewelry",
    gender: "all",
    tags: ["jewelry", "ring", "onyx", "silver", "signet"],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85",
    ],
    colors: [
      { name: "Silver & Onyx", hex: "#C0C0C0" },
    ],
    sizes: ["S", "M", "L"],
    composition: "Solid 925 Sterling Silver & Natural Grade-A Onyx",
    fit: "Standard ring sizing (US 7, 9, 11)",
    details: [
      { label: "Stone", value: "Natural Untreated Black Onyx" },
      { label: "Finish", value: "Hand-Brushed Matte Satin with Polished Bezel" },
      { label: "Weight", value: "14.2 grams" },
    ],
    careInstructions: [
      "Remove before swimming or heavy exercise",
      "Clean with warm water and soft brush",
    ],
    isFeatured: false,
    isNew: true,
    isBestseller: true,
    isAvailable: true,
    isFastDeliveryEligible: true,
    estimatedDeliveryTime: "60 mins",
    variants: [
      { id: "v22-1", color: "Silver & Onyx", size: "S", sku: "JW-RNG-S", inStock: true, stockCount: 8 },
      { id: "v22-2", color: "Silver & Onyx", size: "M", sku: "JW-RNG-M", inStock: true, stockCount: 14 },
      { id: "v22-3", color: "Silver & Onyx", size: "L", sku: "JW-RNG-L", inStock: true, stockCount: 6 },
    ],
  },
];

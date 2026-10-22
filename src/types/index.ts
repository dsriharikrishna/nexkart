export interface ProductColor {
  name: string;
  hex: string;
  bgClass?: string;
}

export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "OS";

export interface ProductVariant {
  id: string;
  color: string;
  size: ProductSize;
  sku: string;
  inStock: boolean;
  stockCount: number;
}

export interface ProductDetailItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  subtitle: string;
  description: string;
  category:
    | "outerwear"
    | "tailoring"
    | "knitwear"
    | "shirts"
    | "trousers"
    | "dresses"
    | "accessories"
    | "footwear"
    | "jewelry"
    | "beauty"
    | "gifts";
  collection:
    | "atelier-autumn"
    | "minimalist-capsule"
    | "resort-modern"
    | "monochrome-series"
    | "evening-luxe"
    | "gifts-and-living"
    | "beauty-wellness"
    | "fine-jewelry";
  gender: "men" | "women" | "unisex" | "all";
  price: number;
  compareAtPrice?: number;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  variants: ProductVariant[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  isAvailable: boolean;
  isFastDeliveryEligible?: boolean;
  estimatedDeliveryTime?: string;
  tags: string[];
  details: ProductDetailItem[];
  careInstructions: string[];
  composition: string;
  fit: string;
}

export interface CategoryMeta {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gender: "men" | "women" | "all";
}

export interface CollectionMeta {
  id: string;
  slug: string;
  title: string;
  season: string;
  headline: string;
  description: string;
  heroImage: string;
  editorialQuote?: string;
}

export interface CartItem {
  id: string; // unique item cart id: `${productId}-${color}-${size}`
  productId: string;
  productSlug: string;
  name: string;
  color: string;
  size: ProductSize;
  price: number;
  image: string;
  quantity: number;
  maxStock: number;
}

export interface FilterState {
  gender?: "all" | "men" | "women";
  category?: string;
  collection?: string;
  colors: string[];
  sizes: ProductSize[];
  priceRange: [number, number];
  onlyInStock: boolean;
  sortBy: "featured" | "newest" | "price-asc" | "price-desc";
  searchQuery?: string;
}

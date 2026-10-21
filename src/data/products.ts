import { Product } from "@/types";
import { OUTERWEAR_PRODUCTS } from "./catalog/outerwear";
import { TAILORING_KNITWEAR_PRODUCTS } from "./catalog/tailoringKnitwear";
import { DRESSES_SHIRTS_TROUSERS_PRODUCTS } from "./catalog/dressesShirtsTrousers";
import { ACCESSORIES_FOOTWEAR_PRODUCTS } from "./catalog/accessoriesFootwear";
import { DENIM_JEWELRY_PRODUCTS } from "./catalog/denimJewelry";
import { SHIRTS_EXPANSION_PRODUCTS } from "./catalog/shirtsExpansion";
import { FOOTWEAR_EXPANSION_PRODUCTS } from "./catalog/footwearExpansion";
import { JEWELRY_PRODUCTS } from "./catalog/jewelry";
import { BEAUTY_PRODUCTS } from "./catalog/beauty";
import { GIFTS_PRODUCTS } from "./catalog/gifts";

export const PRODUCTS: Product[] = [
  ...OUTERWEAR_PRODUCTS,
  ...TAILORING_KNITWEAR_PRODUCTS,
  ...DRESSES_SHIRTS_TROUSERS_PRODUCTS,
  ...ACCESSORIES_FOOTWEAR_PRODUCTS,
  ...DENIM_JEWELRY_PRODUCTS,
  ...SHIRTS_EXPANSION_PRODUCTS,
  ...FOOTWEAR_EXPANSION_PRODUCTS,
  ...JEWELRY_PRODUCTS,
  ...BEAUTY_PRODUCTS,
  ...GIFTS_PRODUCTS,
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.isNew);
}

export function getBestsellerProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isBestseller);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t)))
  ).slice(0, limit);
}

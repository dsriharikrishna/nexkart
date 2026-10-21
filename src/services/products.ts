import { PRODUCTS } from "@/data/products";
import { CATEGORIES, COLLECTIONS } from "@/data/categories";
import { Product, CategoryMeta, CollectionMeta, FilterState } from "@/types";

// Simulated network latency for realistic UX transitions
const simulateDelay = (ms: number = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export const ProductService = {
  async getAll(): Promise<Product[]> {
    await simulateDelay(150);
    return PRODUCTS;
  },

  async getBySlug(slug: string): Promise<Product | null> {
    await simulateDelay(200);
    const product = PRODUCTS.find((p) => p.slug === slug);
    return product || null;
  },

  async getFeatured(): Promise<Product[]> {
    await simulateDelay(150);
    return PRODUCTS.filter((p) => p.isFeatured);
  },

  async getNewArrivals(): Promise<Product[]> {
    await simulateDelay(150);
    return PRODUCTS.filter((p) => p.isNew);
  },

  async getBestsellers(): Promise<Product[]> {
    await simulateDelay(150);
    return PRODUCTS.filter((p) => p.isBestseller);
  },

  async getByCategory(categorySlug: string): Promise<Product[]> {
    await simulateDelay(200);
    return PRODUCTS.filter((p) => p.category === categorySlug);
  },

  async getByCollection(collectionSlug: string): Promise<Product[]> {
    await simulateDelay(200);
    return PRODUCTS.filter((p) => p.collection === collectionSlug);
  },

  async getRelated(productId: string, limit: number = 4): Promise<Product[]> {
    await simulateDelay(150);
    const target = PRODUCTS.find((p) => p.id === productId);
    if (!target) return PRODUCTS.slice(0, limit);
    return PRODUCTS.filter(
      (p) =>
        p.id !== productId &&
        (p.category === target.category ||
          p.collection === target.collection ||
          p.gender === target.gender)
    ).slice(0, limit);
  },

  async filterProducts(filters: FilterState): Promise<{ items: Product[]; total: number }> {
    await simulateDelay(200);
    let result = [...PRODUCTS];

    // Gender filter
    if (filters.gender && filters.gender !== "all") {
      result = result.filter(
        (p) => p.gender === filters.gender || p.gender === "unisex" || p.gender === "all"
      );
    }

    // Category filter
    if (filters.category && filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Collection filter
    if (filters.collection && filters.collection !== "all") {
      result = result.filter((p) => p.collection === filters.collection);
    }

    // Color filter
    if (filters.colors.length > 0) {
      result = result.filter((p) => p.colors.some((c) => filters.colors.includes(c.name)));
    }

    // Size filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => filters.sizes.includes(s)));
    }

    // Price range
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Stock availability
    if (filters.onlyInStock) {
      result = result.filter((p) => p.isAvailable && p.variants.some((v) => v.inStock));
    }

    // Search query
    if (filters.searchQuery && filters.searchQuery.trim().length > 0) {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return { items: result, total: result.length };
  },
};

export const CategoryService = {
  async getAll(): Promise<CategoryMeta[]> {
    await simulateDelay(100);
    return CATEGORIES;
  },
  async getBySlug(slug: string): Promise<CategoryMeta | null> {
    await simulateDelay(150);
    return CATEGORIES.find((c) => c.slug === slug) || null;
  },
};

export const CollectionService = {
  async getAll(): Promise<CollectionMeta[]> {
    await simulateDelay(100);
    return COLLECTIONS;
  },
  async getBySlug(slug: string): Promise<CollectionMeta | null> {
    await simulateDelay(150);
    return COLLECTIONS.find((c) => c.slug === slug) || null;
  },
};

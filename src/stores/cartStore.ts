import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, Product, ProductSize } from "@/types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, color: string, size: ProductSize, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  // Computed values
  getItemCount: () => number;
  getSubtotal: () => number;
  getShippingEstimate: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product, color, size, quantity = 1) => {
        const itemId = `${product.id}-${color}-${size}`;
        const existingVariant = product.variants?.find((v) => v.color === color && v.size === size);
        const maxStock = existingVariant ? existingVariant.stockCount : 10;
        const liveImage = product.images?.[0] || "/images/products/placeholder.webp";

        set((state) => {
          const existingItemIndex = state.items.findIndex((item) => item.id === itemId);

          if (existingItemIndex > -1) {
            const updatedItems = [...state.items];
            const currentItem = updatedItems[existingItemIndex];
            const newQty = Math.min(currentItem.quantity + quantity, maxStock);
            updatedItems[existingItemIndex] = {
              ...currentItem,
              image: liveImage,
              quantity: newQty,
            };
            return { items: updatedItems, isOpen: true };
          } else {
            const newItem: CartItem = {
              id: itemId,
              productId: product.id,
              productSlug: product.slug,
              name: product.name,
              color,
              size,
              price: product.price,
              image: liveImage,
              quantity: Math.min(quantity, maxStock),
              maxStock,
            };
            return { items: [...state.items, newItem], isOpen: true };
          }
        });
      },

      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((item) => item.id !== itemId) };
          }
          return {
            items: state.items.map((item) => {
              if (item.id === itemId) {
                const safeQty = Math.min(quantity, item.maxStock);
                return { ...item, quantity: safeQty };
              }
              return item;
            }),
          };
        });
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getShippingEstimate: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= 5000 ? 0 : 500; // Complimentary express delivery across India over ₹5,000
      },

      getTotal: () => {
        return get().getSubtotal() + get().getShippingEstimate();
      },
    }),
    {
      name: "nexkart_cart_storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);

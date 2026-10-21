import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";

interface UserProfile {
  name: string;
  email: string;
  memberTier: "Client" | "Privilege" | "Atelier VIP";
  joinedDate: string;
}

export interface MockOrder {
  id: string;
  orderNumber: string;
  date: string;
  status: "Processing" | "Dispatched" | "Delivered";
  isWardrobeDelivery?: boolean;
  estimatedMinutes?: number;
  items: {
    name: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  total: number;
  shippingAddress: string;
}

interface AccountStore {
  isAuthenticated: boolean;
  user: UserProfile | null;
  orders: MockOrder[];
  recentlyViewed: Product[];
  login: (email: string, name?: string) => void;
  logout: () => void;
  addOrder: (order: MockOrder) => void;
  addRecentlyViewed: (product: Product) => void;
}

const DEFAULT_ORDERS: MockOrder[] = [
  {
    id: "ord-8831",
    orderNumber: "NX-2026-8831",
    date: "October 14, 2026",
    status: "Delivered",
    items: [
      {
        name: "Architectural Melton Wool Overcoat",
        size: "M",
        color: "Obsidian Black",
        quantity: 1,
        price: 75000,
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=85",
      },
    ],
    total: 75000,
    shippingAddress: "Apartment 14B, Altamount Road, Cumballa Hill, Mumbai, Maharashtra 400026",
  },
  {
    id: "ord-7920",
    orderNumber: "NX-2026-7920",
    date: "September 02, 2026",
    status: "Delivered",
    items: [
      {
        name: "Architectural Raw Edge Cashmere Scarf",
        size: "OS",
        color: "Oatmeal Melange",
        quantity: 1,
        price: 26000,
        image:
          "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=85",
      },
    ],
    total: 26000,
    shippingAddress: "Apartment 14B, Altamount Road, Cumballa Hill, Mumbai, Maharashtra 400026",
  },
];

export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      isAuthenticated: true,
      user: {
        name: "Alexander Vance",
        email: "alexander.vance@studio-atelier.com",
        memberTier: "Atelier VIP",
        joinedDate: "January 2025",
      },
      orders: DEFAULT_ORDERS,
      recentlyViewed: [],

      login: (email: string, name: string = "Valued Member") => {
        set({
          isAuthenticated: true,
          user: {
            name,
            email,
            memberTier: "Privilege",
            joinedDate: "October 2026",
          },
        });
      },

      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
        });
      },

      addOrder: (order: MockOrder) => {
        set((state) => ({
          orders: [order, ...state.orders],
        }));
      },

      addRecentlyViewed: (product: Product) => {
        set((state) => {
          const filtered = state.recentlyViewed.filter((p) => p.id !== product.id);
          return {
            recentlyViewed: [product, ...filtered].slice(0, 6),
          };
        });
      },
    }),
    {
      name: "nexkart_account_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

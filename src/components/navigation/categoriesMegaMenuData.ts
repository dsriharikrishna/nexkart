export interface SubSubMenuItem {
  name: string;
  href: string;
  badge?: string;
}

export interface SubMenuItem {
  title: string;
  items: SubSubMenuItem[];
}

export interface CategoryMenuItem {
  id: string;
  name: string;
  icon: string;
  href: string;
  subMenus: SubMenuItem[];
  featuredPromo?: {
    tag: string;
    title: string;
    desc: string;
    image: string;
    href: string;
  };
}

export const CATEGORIES_TREE: CategoryMenuItem[] = [
  {
    id: "women",
    name: "Women's Fashion",
    icon: "👗",
    href: "/products?gender=women",
    subMenus: [
      {
        title: "Western & Party Wear",
        items: [
          { name: "Dresses & Gowns", href: "/products?category=dresses", badge: "Hot" },
          { name: "Tops & Cropped Tees", href: "/products?category=shirts" },
          { name: "Co-ord Sets & Jumpsuits", href: "/products?category=dresses" },
          { name: "Denim & Wide-Leg Pants", href: "/products?category=trousers" },
          { name: "Party Bodysuits", href: "/products?category=dresses" },
        ],
      },
      {
        title: "Ethnic & Festive",
        items: [
          { name: "Kurtas & Anarkalis", href: "/products?category=tailoring", badge: "Festive" },
          { name: "Festive Kurti Sets", href: "/products?category=tailoring" },
          { name: "Palazzos & Skirts", href: "/products?category=trousers" },
          { name: "Dupattas & Shawls", href: "/products?category=accessories" },
        ],
      },
      {
        title: "Winter & Layers",
        items: [
          { name: "Cashmere & Long Coats", href: "/products?category=outerwear" },
          { name: "Knitted Cardigans & Sweaters", href: "/products?category=knitwear" },
          { name: "Trench Coats & Blazers", href: "/products?category=outerwear" },
          { name: "Leather & Bomber Jackets", href: "/products?category=outerwear" },
        ],
      },
    ],
    featuredPromo: {
      tag: "NEW ARRIVAL",
      title: "Festive & Western Drop",
      desc: "Starting at ₹499 with 60-min express delivery",
      image: "/images/categories/cat-dresses.webp",
      href: "/products?gender=women",
    },
  },
  {
    id: "men",
    name: "Men's Fashion",
    icon: "👔",
    href: "/products?gender=men",
    subMenus: [
      {
        title: "Top Wear",
        items: [
          { name: "Casual & Boxy Shirts", href: "/products?category=shirts" },
          { name: "Oversized Graphic Tees", href: "/products?category=shirts", badge: "Trending" },
          { name: "Polo & Knitted Shirts", href: "/products?category=knitwear" },
          { name: "Formal Office Shirts", href: "/products?category=shirts" },
        ],
      },
      {
        title: "Suits & Outerwear",
        items: [
          { name: "Tailored Blazers & Suits", href: "/products?category=tailoring" },
          { name: "Virgin Wool Overcoats", href: "/products?category=outerwear" },
          { name: "Shearling & Aviator Jackets", href: "/products?category=outerwear" },
          { name: "Trench & Utility Jackets", href: "/products?category=outerwear" },
        ],
      },
      {
        title: "Bottoms & Trousers",
        items: [
          { name: "Pleated Trousers & Chinos", href: "/products?category=trousers" },
          { name: "Skate Fits & Baggy Jeans", href: "/products?category=trousers" },
          { name: "Cargo & Utility Pants", href: "/products?category=trousers" },
          { name: "Relaxed Joggers", href: "/products?category=trousers" },
        ],
      },
    ],
    featuredPromo: {
      tag: "FLAGSHIP TAILORING",
      title: "Modern Suits & Overcoats",
      desc: "Tailored luxury fits for weddings & corporate",
      image: "/images/categories/cat-tailoring.webp",
      href: "/products?gender=men",
    },
  },
  {
    id: "footwear",
    name: "Footwear & Shoes",
    icon: "👟",
    href: "/products?category=footwear",
    subMenus: [
      {
        title: "Men's Footwear",
        items: [
          { name: "Retro & Chunky Sneakers", href: "/products?category=footwear", badge: "Popular" },
          { name: "Handcrafted Leather Loafers", href: "/products?category=footwear" },
          { name: "Chelsea Boots & Dress Shoes", href: "/products?category=footwear" },
          { name: "Slides & Casual Slip-ons", href: "/products?category=footwear" },
        ],
      },
      {
        title: "Women's Footwear",
        items: [
          { name: "Strappy Heels & Stilettos", href: "/products?category=footwear" },
          { name: "Ballerinas & Pointed Flats", href: "/products?category=footwear" },
          { name: "Chunky White Trainers", href: "/products?category=footwear" },
          { name: "Ankle Boots & Platform Mules", href: "/products?category=footwear" },
        ],
      },
    ],
    featuredPromo: {
      tag: "SPEED DROPS",
      title: "Campus, Asian & Bata",
      desc: "Delivered to your doorstep in 45-60 mins",
      image: "/images/categories/cat-footwear.webp",
      href: "/products?category=footwear",
    },
  },
  {
    id: "accessories",
    name: "Bags & Accessories",
    icon: "👜",
    href: "/products?category=accessories",
    subMenus: [
      {
        title: "Bags & Wallets",
        items: [
          { name: "Everyday Structured Totes", href: "/products?category=accessories" },
          { name: "Crossbody Bags & Clutches", href: "/products?category=accessories" },
          { name: "Leather Wallets & Cardholders", href: "/products?category=accessories" },
          { name: "Travel Backpacks & Duffles", href: "/products?category=accessories" },
        ],
      },
      {
        title: "Style Accents",
        items: [
          { name: "Classic Leather Belts", href: "/products?category=accessories" },
          { name: "Sunglasses & Frames", href: "/products?category=accessories" },
          { name: "Caps, Beanies & Hats", href: "/products?category=accessories" },
          { name: "Scarves & Silk Pocket Squares", href: "/products?category=accessories" },
        ],
      },
    ],
    featuredPromo: {
      tag: "CURATED PICKS",
      title: "Leather Essentials",
      desc: "Complete your outfit with handcrafted pieces",
      image: "/images/categories/cat-accessories.webp",
      href: "/products?category=accessories",
    },
  },
  {
    id: "jewelry",
    name: "Fine Jewelry",
    icon: "💍",
    href: "/products?category=jewelry",
    subMenus: [
      {
        title: "Precious Metals",
        items: [
          { name: "925 Sterling Silver Cuffs", href: "/products?category=jewelry" },
          { name: "18K Gold Vermeil Necklaces", href: "/products?category=jewelry" },
          { name: "Statement Signet Rings", href: "/products?category=jewelry" },
          { name: "Minimalist Hoop Earrings", href: "/products?category=jewelry" },
        ],
      },
      {
        title: "Occasion Jewelry",
        items: [
          { name: "Layered Chains & Pendants", href: "/products?category=jewelry" },
          { name: "Festive Kundan Sets", href: "/products?category=jewelry" },
          { name: "Modern Unisex Bands", href: "/products?category=jewelry" },
        ],
      },
    ],
    featuredPromo: {
      tag: "TIMELESS",
      title: "Pure Solid Silver & Gold",
      desc: "Antiallergic, water-safe jewelry drops",
      image: "/images/categories/cat-jewelry.webp",
      href: "/products?category=jewelry",
    },
  },
  {
    id: "beauty",
    name: "Beauty & Grooming",
    icon: "✨",
    href: "/products?category=beauty",
    subMenus: [
      {
        title: "Fragrance & Parfum",
        items: [
          { name: "Artisanal Eau de Parfum", href: "/products?category=beauty", badge: "Exclusive" },
          { name: "Fresh Citrus & Aquatic Scents", href: "/products?category=beauty" },
          { name: "Smoky Oud & Warm Amber", href: "/products?category=beauty" },
          { name: "Travel Perfume Sprays", href: "/products?category=beauty" },
        ],
      },
      {
        title: "Skincare & Body",
        items: [
          { name: "Botanical Facial Oils", href: "/products?category=beauty" },
          { name: "Gentle Clean Cleansers", href: "/products?category=beauty" },
          { name: "Hydrating Day Moisturizers", href: "/products?category=beauty" },
          { name: "Nourishing Body Creams", href: "/products?category=beauty" },
        ],
      },
    ],
    featuredPromo: {
      tag: "BEAUTY DEALS",
      title: "L'Oréal, Moxie & Plum",
      desc: "Authentic skincare with express delivery",
      image: "/images/beauty_steal_deals.jpg",
      href: "/products?category=beauty",
    },
  },
];

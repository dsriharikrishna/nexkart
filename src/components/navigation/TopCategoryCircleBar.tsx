import Link from "next/link";

interface CategoryIconItem {
  name: string;
  href: string;
  image: string;
}

const CATEGORY_ICONS: CategoryIconItem[] = [
  {
    name: "For You",
    href: "/collections",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Women",
    href: "/collections/women",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Men",
    href: "/collections/men",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Festive",
    href: "/categories/tailoring",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Beauty",
    href: "/categories/beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Bags",
    href: "/categories/accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Shoes",
    href: "/categories/footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Jackets",
    href: "/categories/outerwear",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Jewelry",
    href: "/categories/jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Gifts",
    href: "/categories/gifts",
    image: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=200&q=80",
  },
];

export function TopCategoryCircleBar() {
  return (
    <div className="w-full border-b border-neutral-100 bg-white py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-4 scrollbar-none sm:px-6 lg:px-8">
        {CATEGORY_ICONS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center gap-1.5 shrink-0"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 p-0.5 transition-all group-hover:scale-105 group-hover:border-[#FFD629] group-hover:shadow-xs">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-[11px] font-semibold text-[#171717] group-hover:text-[#FFB800]">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

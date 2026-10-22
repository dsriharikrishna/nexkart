import Link from "next/link";

interface CategoryIconItem {
  name: string;
  href: string;
  image: string;
}

const CATEGORY_ICONS: CategoryIconItem[] = [
  {
    name: "For you",
    href: "/products",
    image: "/images/categories/cat-outerwear.webp",
  },
  {
    name: "Women",
    href: "/products?gender=women",
    image: "/images/categories/cat-dresses.webp",
  },
  {
    name: "Men",
    href: "/products?gender=men",
    image: "/images/categories/cat-shirts.webp",
  },
  {
    name: "Ethnic",
    href: "/products?category=tailoring",
    image: "/images/categories/cat-tailoring.webp",
  },
  {
    name: "Beauty",
    href: "/products?category=beauty",
    image: "/images/categories/cat-beauty.webp",
  },
  {
    name: "Accessories",
    href: "/products?category=accessories",
    image: "/images/categories/cat-accessories.webp",
  },
  {
    name: "Footwear",
    href: "/products?category=footwear",
    image: "/images/categories/cat-footwear.webp",
  },
  {
    name: "Knitwear",
    href: "/products?category=knitwear",
    image: "/images/categories/cat-knitwear.webp",
  },
  {
    name: "Jewellery",
    href: "/products?category=jewelry",
    image: "/images/categories/cat-jewelry.webp",
  },
  {
    name: "Gifting",
    href: "/products?category=gifts",
    image: "/images/categories/cat-gifts.webp",
  },
];

export function TopCategoryCircleBar() {
  return (
    <div className="w-full border-b border-neutral-100 bg-white py-2 shadow-2xs">
      <div className="flex w-full items-center justify-between gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8 scrollbar-none overscroll-x-contain snap-x snap-proximity">
        {CATEGORY_ICONS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center gap-1 shrink-0 snap-start active:scale-95 transition-transform"
          >
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 p-0.5 transition-all group-hover:scale-105 group-hover:border-[#FFD629] group-hover:shadow-xs">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#171717] group-hover:text-[#FFB800] whitespace-nowrap leading-tight">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

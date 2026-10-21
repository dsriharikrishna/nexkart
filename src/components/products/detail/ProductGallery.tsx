"use client";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  selectedImageIndex: number;
  discountBadge: string | null;
  isNew?: boolean;
  onSelectImage: (index: number) => void;
}

export function ProductGallery({
  images,
  productName,
  selectedImageIndex,
  discountBadge,
  isNew,
  onSelectImage,
}: ProductGalleryProps) {
  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row lg:col-span-7">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex shrink-0 gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-y-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelectImage(idx)}
              className={`relative aspect-[4/5] w-16 overflow-hidden border transition-all md:w-full ${
                selectedImageIndex === idx
                  ? "border-neutral-950 opacity-100"
                  : "border-neutral-200 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${productName} ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Selected Image */}
      <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-sm">
        <img
          src={images[selectedImageIndex] || images[0]}
          alt={productName}
          className="h-full w-full object-cover object-center transition-all duration-500"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes("1539571696357")) {
              target.src =
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85";
            }
          }}
        />
        {discountBadge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#8A6A3B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xs">
            {discountBadge}
          </span>
        )}
        {isNew && (
          <span className="absolute right-4 top-4 rounded-full bg-[#101010] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF62] shadow-xs">
            NEW IN
          </span>
        )}
      </div>
    </div>
  );
}

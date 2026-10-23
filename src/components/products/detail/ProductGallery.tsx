"use client";

import { useState } from "react";
import { RotateCw, Image as ImageIcon } from "lucide-react";
import { Product360Viewer } from "./Product360Viewer";
import { ProductImage } from "../ProductImage";

interface ProductGalleryProps {
  images: string[];
  view360?: string[];
  productName: string;
  price: number;
  compareAtPrice?: number;
  selectedImageIndex: number;
  discountBadge: string | null;
  isNew?: boolean;
  onSelectImage: (index: number) => void;
}

export function ProductGallery({
  images,
  view360,
  productName,
  price,
  compareAtPrice,
  selectedImageIndex,
  discountBadge,
  isNew,
  onSelectImage,
}: ProductGalleryProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "360">("gallery");
  const has360 = Boolean(view360 && view360.length >= 8);

  return (
    <div className="flex flex-col-reverse gap-3 sm:gap-4 md:flex-row lg:sticky lg:top-28">
      {/* Left Thumbnail Column */}
      <div className="flex shrink-0 gap-2.5 overflow-x-auto md:w-16 md:flex-col md:overflow-y-auto max-h-[520px] scrollbar-thin">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab("gallery");
              onSelectImage(idx);
            }}
            className={`relative aspect-[3/4] w-14 shrink-0 overflow-hidden rounded-lg border transition-all md:w-full ${
              activeTab === "gallery" && selectedImageIndex === idx
                ? "border-neutral-950 ring-2 ring-neutral-950 opacity-100 shadow-xs"
                : "border-neutral-200 opacity-65 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${productName} view ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}

        {/* 360 View Thumbnail Button if available */}
        {has360 && (
          <button
            onClick={() => setActiveTab("360")}
            className={`relative flex aspect-[3/4] w-14 shrink-0 flex-col items-center justify-center rounded-lg border bg-neutral-900 text-white transition-all md:w-full ${
              activeTab === "360"
                ? "border-neutral-950 ring-2 ring-[#FFD629] text-[#FFD629]"
                : "border-neutral-300 opacity-80 hover:opacity-100"
            }`}
            title="Interactive 360° View"
          >
            <RotateCw className="h-4 w-4 mb-1 animate-spin-slow" />
            <span className="text-[9px] font-bold uppercase tracking-wider">360°</span>
          </button>
        )}
      </div>

      {/* Main Display Area (Compact & Proportional) */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[520px] flex-1 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-xs">
        {/* Gallery / 360 Tab Toggle Pills */}
        {has360 && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-white/90 p-1 shadow-sm backdrop-blur-md">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                activeTab === "gallery"
                  ? "bg-[#171717] text-white shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <ImageIcon className="h-3 w-3" />
              <span>Photos</span>
            </button>
            <button
              onClick={() => setActiveTab("360")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                activeTab === "360"
                  ? "bg-[#171717] text-[#FFD629] shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <RotateCw className="h-3 w-3" />
              <span>360° Spin</span>
            </button>
          </div>
        )}

        {/* Badges */}
        {activeTab === "gallery" && discountBadge && (
          <span
            className={`absolute top-4 z-10 rounded-full bg-[#147924] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs ${
              has360 ? "right-4" : "left-4"
            }`}
          >
            {discountBadge}
          </span>
        )}
        {activeTab === "gallery" && isNew && !discountBadge && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-[#101010] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#FFD629] shadow-xs">
            NEW IN
          </span>
        )}

        {/* Display Content: 360 Viewer or High-Res Main Image with Dynamic Price Overlay */}
        {activeTab === "360" ? (
          <Product360Viewer frames={view360} productName={productName} />
        ) : (
          <ProductImage
            src={images[selectedImageIndex] || images[0]}
            alt={productName}
            price={price}
            compareAtPrice={compareAtPrice}
            showOverlay={true}
          />
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { RotateCw, MoveHorizontal } from "lucide-react";

interface Product360ViewerProps {
  frames?: string[];
  productName: string;
}

export function Product360Viewer({ frames = [], productName }: Product360ViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const startXRef = useRef(0);
  const startIndexRef = useRef(0);

  const hasValidSequence = Array.isArray(frames) && frames.length >= 8;

  useEffect(() => {
    if (!hasValidSequence) return;
    let count = 0;
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
      img.onerror = () => {
        count++;
        setLoadedCount(count);
      };
    });
  }, [frames, hasValidSequence]);

  const handlePointerDown = (clientX: number) => {
    if (!hasValidSequence) return;
    setIsDragging(true);
    startXRef.current = clientX;
    startIndexRef.current = currentIndex;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || !hasValidSequence) return;
    const deltaX = clientX - startXRef.current;
    // Every 15px rotated advances 1 frame
    const steps = Math.floor(deltaX / 15);
    const total = frames.length;
    let nextIndex = (startIndexRef.current + steps) % total;
    if (nextIndex < 0) nextIndex += total;
    setCurrentIndex(nextIndex);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  if (!hasValidSequence) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
        <RotateCw className="h-10 w-10 text-neutral-400 mb-3 animate-spin-slow" />
        <p className="font-heading text-sm font-bold text-neutral-800">
          360° Interactive Rotation
        </p>
        <p className="mt-1 max-w-xs text-xs text-neutral-500">
          A genuine multi-angle 360° sequence is currently being rendered for {productName}. Enjoy our high-resolution multi-view gallery in the meantime.
        </p>
      </div>
    );
  }

  const isLoaded = loadedCount >= frames.length;

  return (
    <div
      className="relative flex h-full w-full select-none flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-100 cursor-grab active:cursor-grabbing"
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={(e) => handlePointerMove(e.clientX)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
      onTouchEnd={handlePointerUp}
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-xs">
          <RotateCw className="h-8 w-8 animate-spin text-neutral-800 mb-2" />
          <span className="text-xs font-semibold text-neutral-700">
            Loading 360° frames ({loadedCount}/{frames.length})...
          </span>
        </div>
      )}

      {/* Frame image */}
      <img
        src={frames[currentIndex]}
        alt={`${productName} 360 view frame ${currentIndex + 1}`}
        className="h-full w-full object-cover object-center pointer-events-none"
        draggable={false}
      />

      {/* Interactive Drag Hint Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 rounded-full bg-black/70 px-4 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md shadow-md">
        <MoveHorizontal className="h-3.5 w-3.5 animate-pulse" />
        <span>Drag to rotate 360°</span>
        <span className="ml-1 text-[10px] text-neutral-300">
          ({currentIndex + 1}/{frames.length})
        </span>
      </div>
    </div>
  );
}

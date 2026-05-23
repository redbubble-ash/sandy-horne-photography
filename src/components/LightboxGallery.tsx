"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/lib/images";

export default function LightboxGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [current, setCurrent] = useState<number | null>(null);

  const open = (index: number) => setCurrent(index);
  const close = () => setCurrent(null);
  const prev = useCallback(() => setCurrent((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), [photos.length]);
  const next = useCallback(() => setCurrent((i) => (i === null ? null : (i + 1) % photos.length)), [photos.length]);

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, prev, next]);

  return (
    <>
      {/* Photo Grid */}
      <div className="masonry">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => open(index)}
            className="masonry-item block group relative overflow-hidden w-full cursor-zoom-in"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#0F4C81]/0 group-hover:bg-[#0F4C81]/50 transition-all duration-500 flex items-end pointer-events-none">
              <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-serif text-base text-[#f7f4ef]">{photo.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            aria-label="Previous photo"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[current].src}
              alt={photos[current].alt}
              width={photos[current].width}
              height={photos[current].height}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              sizes="90vw"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white/60 text-sm font-sans py-3 bg-black/30">
              {photos[current].title}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            aria-label="Next photo"
          >
            <ChevronRight size={48} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-sans tracking-widest">
            {current + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}

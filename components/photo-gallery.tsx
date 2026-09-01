"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/site";

type Photo = { src: string; alt: string; width: number; height: number };

export function PhotoGallery({
  photos = gallery,
  layout = "rail",
  label = "IBM Peru ministry photos",
}: {
  photos?: Photo[];
  /** "rail" is the homepage's uneven strip; "grid" is an even grid. */
  layout?: "rail" | "grid";
  label?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const photo = openIndex === null ? null : photos[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    // The lightbox covers the page, so stop the page behind it from scrolling.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

  return (
    <>
      <section
        className={layout === "grid" ? "photo-grid" : "image-rail"}
        aria-label={label}
      >
        {photos.map((image, index) => (
          <button
            className="rail-image"
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View larger: ${image.alt}`}
          >
            <span className="rail-image-frame">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 22vw" />
            </span>
          </button>
        ))}
      </section>

      {photo ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          onClick={close}
        >
          <button className="lightbox-close" type="button" onClick={close} aria-label="Close">
            <X size={22} aria-hidden />
          </button>

          <button
            className="lightbox-step lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={26} aria-hidden />
          </button>

          <figure
            className="lightbox-frame"
            // Never larger than the file's own pixels, the viewport, or the
            // height cap — small scans stay sharp instead of being blown up.
            style={{
              width: `min(${photo.width}px, 92vw, ${((74 * photo.width) / photo.height).toFixed(2)}vh)`,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="92vw"
              priority
            />
            <figcaption>{photo.alt}</figcaption>
          </figure>

          <button
            className="lightbox-step lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={26} aria-hidden />
          </button>
        </div>
      ) : null}
    </>
  );
}

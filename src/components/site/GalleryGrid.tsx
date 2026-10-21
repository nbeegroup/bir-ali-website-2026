"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  if (images.length === 0) {
    return <p className="gallery-empty-state">Gallery images will be added soon.</p>;
  }

  return (
    <>
      <div className="gallery-page-grid">
        {images.map((item, index) => (
          <button
            key={item.image}
            type="button"
            className="gallery-page-card reveal-in"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.title}`}
          >
            <span className="gallery-page-media">
              <Image
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                loading={index === 0 || index === 4 || index === 9 ? "eager" : "lazy"}
              />
              <span className="gallery-page-open" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="m14 5 5 5-5 5M19 10H9a4 4 0 0 0-4 4v5" />
                </svg>
              </span>
            </span>
            <span className="gallery-page-caption">
              <span className="gallery-page-title">{item.title}</span>
              <span className="gallery-page-description">{item.description}</span>
              <span className="gallery-page-count">
                {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setActiveIndex(null);
            }
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            className="gallery-lightbox-arrow previous"
            onClick={showPrevious}
            aria-label="View previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="gallery-lightbox-content">
            <div className="gallery-lightbox-image">
              <Image
                key={activeImage.image}
                src={activeImage.image}
                alt={activeImage.title}
                fill
                sizes="100vw"
                priority
              />
            </div>
            <div className="gallery-lightbox-caption">
              <div>
                <h2 id="gallery-lightbox-title">{activeImage.title}</h2>
                <p>{activeImage.description}</p>
              </div>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-arrow next"
            onClick={showNext}
            aria-label="View next image"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
}

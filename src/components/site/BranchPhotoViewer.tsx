"use client";

import { type RefObject, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BranchImage } from "./BranchImage";

const defaultBranchPhoto = "/images/branches/Bir-Ali-Default-Branch.jpg";

type BranchPhoto = {
  src: string;
  alt: string;
};

type BranchLightboxProps = {
  photos: BranchPhoto[];
  activeIndex: number | null;
  branchName: string;
  fallbackSrc: string;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

function OpenIcon() {
  return (
    <span className="branch-photo-open" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m14.5 14.5 5 5M10.5 8v5M8 10.5h5" />
      </svg>
    </span>
  );
}

function BranchLightbox({
  photos,
  activeIndex,
  branchName,
  fallbackSrc,
  closeButtonRef,
  onClose,
  onPrevious,
  onNext,
}: BranchLightboxProps) {
  const titleId = useId();
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  if (!activePhoto || activeIndex === null) {
    return null;
  }

  return createPortal(
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="gallery-lightbox-close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {photos.length > 1 ? (
        <button
          type="button"
          className="gallery-lightbox-arrow previous"
          onClick={onPrevious}
          aria-label="View previous image"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      ) : null}

      <div className="gallery-lightbox-content">
        <div className="gallery-lightbox-image">
          <BranchImage
            key={activePhoto.src}
            src={activePhoto.src}
            fallbackSrc={fallbackSrc}
            alt={activePhoto.alt}
            className="branch-lightbox-image"
          />
        </div>
        <div className="gallery-lightbox-caption">
          <div>
            <h2 id={titleId}>Bir Ali {branchName}</h2>
            <p>{activePhoto.alt}</p>
          </div>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {photos.length > 1 ? (
        <button
          type="button"
          className="gallery-lightbox-arrow next"
          onClick={onNext}
          aria-label="View next image"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      ) : null}
    </div>,
    document.body,
  );
}

function useBranchLightbox(photoCount: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + photoCount) % photoCount,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % photoCount));
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
      } else if (event.key === "ArrowLeft" && photoCount > 1) {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + photoCount) % photoCount,
        );
      } else if (event.key === "ArrowRight" && photoCount > 1) {
        setActiveIndex((current) => (current === null ? current : (current + 1) % photoCount));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, photoCount]);

  return {
    activeIndex,
    closeButtonRef,
    open: setActiveIndex,
    close: () => setActiveIndex(null),
    showPrevious,
    showNext,
  };
}

type BranchPreviewPhotoProps = {
  src: string;
  alt: string;
  branchName: string;
  className?: string;
};

export function BranchPreviewPhoto({ src, alt, branchName, className }: BranchPreviewPhotoProps) {
  const photos = [{ src, alt }];
  const lightbox = useBranchLightbox(photos.length);

  return (
    <>
      <button
        type="button"
        className="branch-preview-button"
        onClick={() => lightbox.open(0)}
        aria-label={`Open ${alt}`}
      >
        <BranchImage src={src} fallbackSrc={defaultBranchPhoto} alt={alt} className={className} />
        <OpenIcon />
      </button>
      <BranchLightbox
        photos={photos}
        activeIndex={lightbox.activeIndex}
        branchName={branchName}
        fallbackSrc={defaultBranchPhoto}
        closeButtonRef={lightbox.closeButtonRef}
        onClose={lightbox.close}
        onPrevious={lightbox.showPrevious}
        onNext={lightbox.showNext}
      />
    </>
  );
}

type BranchGalleryProps = {
  branchName: string;
  photos: string[];
  fallbackSrc: string;
};

export function BranchGallery({ branchName, photos, fallbackSrc }: BranchGalleryProps) {
  const galleryPhotos = photos.map((src, index) => ({
    src,
    alt: `${branchName} gallery photo ${index + 1}`,
  }));
  const lightbox = useBranchLightbox(galleryPhotos.length);

  return (
    <>
      <div className="branch-photo-grid">
        {galleryPhotos.map((photo, index) => (
          <figure key={`${photo.src}-${index}`} className="branch-photo-card reveal-in">
            <button
              type="button"
              className="branch-photo-button"
              onClick={() => lightbox.open(index)}
              aria-label={`Open ${photo.alt}`}
            >
              <BranchImage
                src={photo.src}
                fallbackSrc={fallbackSrc}
                alt={photo.alt}
                className="branch-photo-image"
              />
              <OpenIcon />
            </button>
            <figcaption>
              <span>{branchName}</span>
              <span>
                {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <BranchLightbox
        photos={galleryPhotos}
        activeIndex={lightbox.activeIndex}
        branchName={branchName}
        fallbackSrc={fallbackSrc}
        closeButtonRef={lightbox.closeButtonRef}
        onClose={lightbox.close}
        onPrevious={lightbox.showPrevious}
        onNext={lightbox.showNext}
      />
    </>
  );
}

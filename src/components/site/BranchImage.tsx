"use client";

import { useEffect, useRef, useState } from "react";

type BranchImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

const fallbackImage = "/images/branches/Bir-Ali-Default-Branch.jpg";

export function BranchImage({
  src,
  alt,
  className,
  fallbackSrc = fallbackImage,
}: BranchImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);

    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) {
      setImageSrc(fallbackSrc);
    }
  }, [fallbackSrc, src]);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setImageSrc(fallbackSrc)}
    />
  );
}

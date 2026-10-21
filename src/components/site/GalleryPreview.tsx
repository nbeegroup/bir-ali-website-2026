"use client";

import { Button, Card, Column, Media, Row, Text } from "@once-ui-system/core";
import { useState } from "react";

import type { ImageItem } from "@/resources/data.types";

type GalleryPreviewProps = {
  images: ImageItem[];
};

export function GalleryPreview({ images }: GalleryPreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  if (!activeImage) {
    return null;
  }

  return (
    <Card fillWidth radius="l" overflow="hidden" className="gallery-preview-card">
      <Column fillWidth gap="0">
        <Column fillWidth className="gallery-preview-stage">
          <Media
            src={activeImage.image}
            alt={activeImage.title}
            aspectRatio="16/9"
            objectFit="contain"
          />
          <Row
            fillWidth
            horizontal="between"
            vertical="center"
            className="gallery-preview-controls"
          >
            <button
              type="button"
              className="gallery-arrow-button"
              aria-label="Show previous gallery image"
              onClick={showPrevious}
            >
              &lt;
            </button>
            <button
              type="button"
              className="gallery-arrow-button"
              aria-label="Show next gallery image"
              onClick={showNext}
            >
              &gt;
            </button>
          </Row>
          <Column gap="8" padding="24" className="gallery-preview-caption">
            <Text variant="label-strong-s" className="panel-kicker">
              {activeIndex + 1} / {images.length}
            </Text>
            <Text variant="heading-strong-m">{activeImage.title}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {activeImage.description}
            </Text>
          </Column>
        </Column>

        <Row fillWidth gap="8" padding="12" className="gallery-thumbnail-row">
          {images.map((image, index) => (
            <button
              key={image.image}
              type="button"
              aria-label={`Show ${image.title}`}
              aria-current={index === activeIndex}
              className={index === activeIndex ? "gallery-thumbnail active" : "gallery-thumbnail"}
              onClick={() => setActiveIndex(index)}
            >
              <Media src={image.image} alt="" aspectRatio="4/3" />
            </button>
          ))}
        </Row>

        <Row paddingX="24" paddingTop="24" paddingBottom="24">
          <Button href="/gallery" variant="secondary" className="secondary-cta">
            View Gallery
          </Button>
        </Row>
      </Column>
    </Card>
  );
}

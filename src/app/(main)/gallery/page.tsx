import { SitePage } from "@/components/site";
import { createPageMetadata, meta } from "@/resources/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(meta.gallery);

export default function GalleryPage() {
  return <SitePage page="gallery" />;
}

import { SitePage } from "@/components/site";
import { createPageMetadata, meta } from "@/resources/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(meta.about);

export default function AboutPage() {
  return <SitePage page="about" />;
}

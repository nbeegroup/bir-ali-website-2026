import { SitePage } from "@/components/site";
import { createPageMetadata, meta } from "@/resources/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(meta.blog);

export default function BlogPage() {
  return <SitePage page="blog" />;
}

import { SitePage } from "@/components/site";
import { createPageMetadata, meta } from "@/resources/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(meta.testimonials);

export default function TestimonialsPage() {
  return <SitePage page="testimonials" />;
}

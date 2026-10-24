import { SitePage } from "@/components/site";
import { createPageMetadata, meta } from "@/resources/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(meta.contact);

export default function ContactPage() {
  return <SitePage page="contact" />;
}

import { Column, Heading, Text } from "@once-ui-system/core";
import type { Metadata } from "next";

import { BranchesDirectory } from "@/components/site";
import type { Branch } from "@/resources/data.types";
import { branches } from "@/resources/mockData";
import { createPageMetadata, meta } from "@/resources/seo";

export const metadata: Metadata = createPageMetadata(meta.branches);

export default function BranchesPage() {
  return (
    <Column fillWidth>
      <section className="page-hero branches-page-hero">
        <Column maxWidth={88} gap="24" className="reveal-in">
          <Text variant="label-strong-s" className="eyebrow">
            Our branches
          </Text>
          <Heading as="h1" variant="display-strong-l" wrap="balance">
            {meta.branches.title}
          </Heading>
          <Text as="p" variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
            Explore our growing family of branches and choose a location that feels close to home.
          </Text>
        </Column>
      </section>

      <section className="site-section branches-page-section">
        <Column maxWidth={88} gap="32">
          <BranchesDirectory branches={branches as Branch[]} />
        </Column>
      </section>
    </Column>
  );
}

import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaThreads, FaTiktok } from "react-icons/fa6";
import { HiArrowLeft, HiOutlineExternalLink } from "react-icons/hi";

import { BranchGallery, BranchMap, BranchPreviewPhoto } from "@/components/site";
import type { Branch } from "@/resources/data.types";
import { branches } from "@/resources/mockData";
import { createPageMetadata, defaultPreviewPhoto } from "@/resources/seo";

type BranchPageProps = {
  params: Promise<{ slug: string }>;
};

const branchData = branches as Branch[];
const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  threads: FaThreads,
  tiktok: FaTiktok,
};

function getPlatformLabel(platform: string) {
  return platform.charAt(0).toUpperCase() + platform.slice(1);
}

export function generateStaticParams() {
  return branchData.map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({ params }: BranchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = branchData.find((item) => item.slug === slug);

  if (!branch) {
    return {
      title: "Branch not found",
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    title: `Tadika Bir Ali ${branch.name}`,
    description: `Discover Bir Ali Preschool ${branch.name} in ${branch.state}. View branch photos, contact details, social media, and its Google Maps location.`,
    path: `/branches/${branch.slug}`,
    image: branch.preview_photo || defaultPreviewPhoto,
    keywords: [
      `Tadika Bir Ali ${branch.name}`,
      `Islamic preschool ${branch.state}`,
      `kindergarten ${branch.state}`,
      `preschool near ${branch.name}`,
    ],
  });
}

export default async function BranchPage({ params }: BranchPageProps) {
  const { slug } = await params;
  const branch = branchData.find((item) => item.slug === slug);

  if (!branch) {
    notFound();
  }

  const socialLinks = branch.social.filter((social) => Boolean(social.url));

  return (
    <Column fillWidth>
      <section className="page-hero branch-detail-hero">
        <Column maxWidth={88} gap="16" className="reveal-in">
          <a href="/branches" className="branch-back-link">
            <HiArrowLeft aria-hidden="true" />
            <span>Back to branches</span>
          </a>
          {/* <Text variant="label-strong-s" className="eyebrow">
            {branch.state}
          </Text>
          <Heading as="h1" variant="display-strong-l" wrap="balance">
            {branch.name}
          </Heading>
          <Text as="p" variant="heading-default-m" onBackground="neutral-weak">
            {branch.address}
          </Text> */}
        </Column>
      </section>

      <section className="site-section branch-detail-section">
        <Row maxWidth={88} gap="32" vertical="center" className="branch-detail-grid">
          <div className="branch-detail-media reveal-in">
            <BranchPreviewPhoto
              src={branch.preview_photo}
              alt={`${branch.name} branch`}
              branchName={branch.name}
              className="branch-detail-image"
            />
          </div>
          <Column gap="24" padding="32" className="final-cta reveal-in delay-1">
            <Column gap="8">
              <Text variant="label-strong-s" className="eyebrow">
                {branch.state}
              </Text>
              <Heading as="h1" variant="display-strong-s">
                Tadika Bir Ali {branch.name}
              </Heading>
            </Column>
            <Column gap="8">
              <Text variant="body-default-m">{branch.address}</Text>
              <Text variant="body-default-m">{branch.phone}</Text>
            </Column>
            <Row gap="12" wrap>
              <Button
                href={`https://ads.birali.my/whatsapp/?ba=${encodeURIComponent(branch.slug)}&utm_source=website`}
                size="l"
                className="primary-cta"
              >
                Whatsapp Bir Ali {branch.name}
              </Button>
              {/* <Button href="/branches" variant="secondary" size="l" className="secondary-cta">
                All branches
              </Button> */}
            </Row>
            {socialLinks.length > 0 ? (
              <Column gap="12" className="branch-social-block">
                <Text variant="label-strong-s">Follow this branch</Text>
                <div className="branch-social-links">
                  {socialLinks.map((social) => {
                    const Icon =
                      socialIcons[social.platform.toLowerCase()] ?? HiOutlineExternalLink;
                    const label = getPlatformLabel(social.platform);

                    return (
                      <a
                        key={social.platform}
                        href={social.url || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="branch-social-link"
                        aria-label={`Visit Bir Ali ${branch.name} on ${label} (opens in a new tab)`}
                      >
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </a>
                    );
                  })}
                </div>
              </Column>
            ) : null}
          </Column>
        </Row>
      </section>

      <section className="site-section branch-gallery-section">
        <Column maxWidth={88} gap="32">
          <Column gap="12" maxWidth={46}>
            <Text variant="label-strong-s" className="eyebrow">
              Branch gallery
            </Text>
            <Heading as="h2" variant="display-strong-s" wrap="balance">
              A closer look at Bir Ali {branch.name}.
            </Heading>
            <Text as="p" variant="body-default-l" onBackground="neutral-weak">
              Explore the learning spaces and everyday environment at this branch.
            </Text>
          </Column>

          {branch.photos.length > 0 ? (
            <BranchGallery
              branchName={branch.name}
              photos={branch.photos}
              fallbackSrc={branch.preview_photo}
            />
          ) : (
            <div className="branch-empty-panel">
              <Text variant="body-default-m">Photos for this branch will be added soon.</Text>
            </div>
          )}
        </Column>
      </section>

      <section className="site-section branch-map-section">
        <Column maxWidth={88} gap="32">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <Column gap="12" maxWidth={46}>
              <Text variant="label-strong-s" className="eyebrow">
                Find us
              </Text>
              <Heading as="h2" variant="display-strong-s" wrap="balance">
                Visit Bir Ali {branch.name}.
              </Heading>
              {/* <Text as="p" variant="body-default-l" onBackground="neutral-weak">
                Google Maps for {branch.location || `Bir Ali ${branch.name}`}.
              </Text> */}
            </Column>
            {/* <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              className="branch-map-address"
            >
              {branch.address}
            </Text> */}
          </Row>
          <BranchMap branchName={branch.name} location={branch.location} />
        </Column>
      </section>
    </Column>
  );
}

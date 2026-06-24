import { Button, Card, Column, Grid, Heading, Media, Row, Text } from "@once-ui-system/core";

import {
  aboutSections,
  blogPosts,
  contact,
  gallery,
  site,
  testimonials,
} from "@/resources/content";

import { SectionHeading } from "./SectionHeading";

type PageKey = "about" | "gallery" | "testimonials" | "blog" | "contact";

const pageIntro: Record<PageKey, { eyebrow: string; title: string; description: string }> = {
  about: {
    eyebrow: "About",
    title: "A premium preschool identity with a values-first centre.",
    description:
      "Placeholder about-page content for Bir Ali Preschool, ready to be replaced with the real school story.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Scenes from a calm, carefully prepared learning world.",
    description:
      "Placehold.co imagery stands in for school photography while the structure is finalised.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Parent confidence, expressed with clarity and warmth.",
    description: "Mock parent quotes demonstrate how trust-building content will feel on the site.",
  },
  blog: {
    eyebrow: "Blog",
    title: "Editorial notes for intentional early-years parenting.",
    description:
      "Placeholder article cards for future education, parenting, and Sunnah routine content.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Begin the admissions conversation.",
    description:
      "A polished contact experience for families who want a private visit, programme details, or intake information.",
  },
};

export function SitePage({ page }: { page: PageKey }) {
  const intro = pageIntro[page];

  return (
    <Column fillWidth>
      <section className="page-hero">
        <Column maxWidth={88} gap="24" className="reveal-in">
          <Text variant="label-strong-s" className="eyebrow">
            {intro.eyebrow}
          </Text>
          <Heading as="h1" variant="display-strong-l" wrap="balance">
            {intro.title}
          </Heading>
          <Text as="p" variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
            {intro.description}
          </Text>
        </Column>
      </section>

      {page === "about" ? <AboutContent /> : null}
      {page === "gallery" ? <GalleryContent /> : null}
      {page === "testimonials" ? <TestimonialsContent /> : null}
      {page === "blog" ? <BlogContent /> : null}
      {page === "contact" ? <ContactContent /> : null}
    </Column>
  );
}

function AboutContent() {
  return (
    <section className="site-section">
      <Column maxWidth={88} gap="32">
        <Grid columns="3" gap="16" m={{ columns: 1 }}>
          {aboutSections.map((section, index) => (
            <Column key={section.title} padding="24" gap="16" className="outline-panel reveal-in">
              <Text variant="label-strong-s" className="panel-kicker">
                0{index + 1}
              </Text>
              <Heading as="h2" variant="heading-strong-m">
                {section.title}
              </Heading>
              <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                {section.description}
              </Text>
            </Column>
          ))}
        </Grid>
        <Column padding="32" gap="16" className="final-cta">
          <Heading as="h2" variant="display-strong-s">
            {site.tagline}
          </Heading>
          <Text as="p" variant="body-default-l" onBackground="neutral-weak">
            {site.description} is the guiding placeholder promise for the brand narrative.
          </Text>
        </Column>
      </Column>
    </section>
  );
}

function GalleryContent() {
  return (
    <section className="site-section">
      <Column maxWidth={88} gap="32">
        <Grid columns="3" gap="16" m={{ columns: 1 }}>
          {gallery.map((item) => (
            <Card key={item.title} radius="l" overflow="hidden" className="image-card reveal-in">
              <Media src={item.image} alt={item.title} aspectRatio="4/3" unoptimized />
              <Column gap="8" padding="20">
                <Heading as="h2" variant="heading-strong-s">
                  {item.title}
                </Heading>
                <Text as="p" variant="body-default-s" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>
    </section>
  );
}

function TestimonialsContent() {
  return (
    <section className="site-section">
      <Column maxWidth={88} gap="32">
        <Grid columns="3" gap="16" m={{ columns: 1 }}>
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} padding="24" radius="l" className="quote-card reveal-in">
              <Column gap="20">
                <Text as="p" variant="body-default-l">
                  "{testimonial.quote}"
                </Text>
                <Column gap="4">
                  <Text variant="label-strong-m">{testimonial.name}</Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {testimonial.role}
                  </Text>
                </Column>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>
    </section>
  );
}

function BlogContent() {
  return (
    <section className="site-section">
      <Column maxWidth={88} gap="32">
        <Grid columns="3" gap="16" m={{ columns: 1 }}>
          {blogPosts.map((post) => (
            <Card key={post.title} radius="l" overflow="hidden" className="image-card reveal-in">
              <Media src={post.image} alt={post.title} aspectRatio="3/2" unoptimized />
              <Column gap="12" padding="20">
                <Text variant="label-default-s" className="panel-kicker">
                  {post.date}
                </Text>
                <Heading as="h2" variant="heading-strong-s">
                  {post.title}
                </Heading>
                <Text as="p" variant="body-default-s" onBackground="neutral-weak">
                  {post.excerpt}
                </Text>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>
    </section>
  );
}

function ContactContent() {
  return (
    <section className="site-section">
      <Row maxWidth={88} gap="24" className="contact-grid" s={{ direction: "column" }}>
        <Column flex={5} padding="32" gap="20" className="final-cta reveal-in">
          <SectionHeading title={contact.heading} description={contact.description} />
          <Column gap="12">
            <Text variant="body-default-m">{site.email}</Text>
            <Text variant="body-default-m">{site.phone}</Text>
            <Text variant="body-default-m">{site.address}</Text>
            <Text variant="body-default-m">{contact.hours}</Text>
          </Column>
        </Column>
        <Column as="form" flex={4} padding="24" gap="16" className="contact-form reveal-in">
          <label>
            Parent name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Child age
            <input type="text" name="age" placeholder="3, 4, 5, or 6" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us what you would like to know" rows={5} />
          </label>
          <Button type="submit" size="l" className="primary-cta">
            Send Enquiry
          </Button>
        </Column>
      </Row>
    </section>
  );
}

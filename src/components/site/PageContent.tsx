import { Badge, Button, Card, Column, Grid, Heading, Media, Row, Text } from "@once-ui-system/core";

import {
  aboutSections,
  aboutCurriculum,
  aboutProgrammes,
  aboutWhyBirAli,
  blogPosts,
  contact,
  gallery,
  pageIntro,
  site,
  testimonials,
} from "@/resources/mockData";

import type { PageKey } from "@/resources/data.types";

import { GalleryGrid } from "./GalleryGrid";
import { SectionHeading } from "./SectionHeading";
import { TestimonialsDirectory } from "./TestimonialsDirectory";

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
    <>
      <section className="site-section about-story-section">
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

          <Row gap="32" s={{ direction: "column" }} className="about-manifesto-panel">
            <Column flex={5} gap="16">
              <Badge border="neutral-alpha-medium" background="neutral-alpha-weak">
                <Text variant="label-strong-s">The Sunnah Preschool</Text>
              </Badge>
              <Heading as="h2" variant="display-strong-s">
                Growing faith, language, character, and curiosity together.
              </Heading>
            </Column>
            <Column flex={7} gap="16">
              <Text as="p" variant="body-default-l" onBackground="neutral-weak">
                We look forward to making Bir Ali a leading Islamic preschool in Malaysia—one that
                keeps children connected to their faith, languages, cultures, and strong heritage.
              </Text>
              <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                The learning environment is designed to help children grow together while still
                receiving the individual support they need.
              </Text>
            </Column>
          </Row>
        </Column>
      </section>

      <section className="site-section about-curriculum-section">
        <Column maxWidth={88} gap="24">
          <SectionHeading eyebrow="Curriculum" title="A complete foundation for the early years." />
          <Grid columns="4" gap="16" m={{ columns: 2 }} s={{ columns: 1 }}>
            {aboutCurriculum.map((area, index) => (
              <Column
                key={area.title}
                padding="24"
                gap="12"
                className="about-curriculum-card reveal-in"
              >
                <Text variant="label-strong-s" className="panel-kicker">
                  0{index + 1}
                </Text>
                <Heading as="h3" variant="heading-strong-m">
                  {area.title}
                </Heading>
                <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                  {area.items}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </section>

      <section className="site-section about-why-section">
        <Column maxWidth={88} gap="24">
          <SectionHeading
            eyebrow="Why Bir Ali"
            title="The routines behind confident, grounded learners."
          />
          <Grid columns="2" gap="16" s={{ columns: 1 }}>
            {aboutWhyBirAli.map((reason, index) => (
              <Card key={reason} padding="24" radius="l" className="about-reason-card reveal-in">
                <Row gap="16" vertical="start">
                  <Text variant="label-strong-s" className="about-reason-number">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Text as="p" variant="body-default-l">
                    {reason}
                  </Text>
                </Row>
              </Card>
            ))}
          </Grid>
        </Column>
      </section>

      <section className="site-section about-programme-section">
        <Column maxWidth={88} gap="24">
          <SectionHeading
            eyebrow="Our programme"
            title="Three rhythms for different family needs."
          />
          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {aboutProgrammes.map((programme, index) => (
              <Column
                key={programme.name}
                padding="24"
                gap="16"
                className="about-programme-card reveal-in"
              >
                <Text variant="label-strong-s" className="panel-kicker">
                  0{index + 1}
                </Text>
                <Heading as="h3" variant="heading-strong-m">
                  {programme.name}
                </Heading>
                <Text variant="label-strong-s" className="about-programme-schedule">
                  {programme.schedule}
                </Text>
                <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                  {programme.description}
                </Text>
              </Column>
            ))}
          </Grid>
          <Column padding="32" gap="16" className="final-cta">
            <Heading as="h2" variant="display-strong-s">
              {site.tagline}
            </Heading>
            <Text as="p" variant="body-default-l" onBackground="neutral-weak">
              A supportive Islamic learning environment for children and families across Malaysia.
            </Text>
            <Button href="/contact" variant="secondary" className="secondary-cta">
              Begin the conversation
            </Button>
          </Column>
        </Column>
      </section>
    </>
  );
}

function GalleryContent() {
  return (
    <section className="site-section gallery-page-section">
      <Column maxWidth={88} gap="32">
        <Row horizontal="between" vertical="center" gap="16" wrap>
          <Text variant="body-default-m" onBackground="neutral-weak">
            A growing collection of life at Bir Ali.
          </Text>
          <Text variant="label-strong-s" className="gallery-image-total">
            {gallery.length} moments
          </Text>
        </Row>
        <GalleryGrid images={gallery} />
      </Column>
    </section>
  );
}

function TestimonialsContent() {
  return <TestimonialsDirectory testimonials={testimonials} />;
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
          {contact.formFields.map((field) => (
            <label key={field.name} htmlFor={field.name}>
              {field.label}
              {field.multiline ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={field.rows}
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              )}
            </label>
          ))}
          <Button type="submit" size="l" className="primary-cta">
            {contact.submitLabel}
          </Button>
        </Column>
      </Row>
    </section>
  );
}

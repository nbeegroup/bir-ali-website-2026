import { Badge, Button, Card, Column, Grid, Heading, Media, Row, Text } from "@once-ui-system/core";

import {
  events,
  aboutSections,
  blogPosts,
  branches,
  branchesSection,
  contact,
  hero,
  homeGallery,
  pillars,
  site,
  stats,
  testimonials,
} from "@/resources/content";

import { GalleryPreview } from "./GalleryPreview";
import { SectionHeading } from "./SectionHeading";

export function HomePage() {
  return (
    <Column fillWidth>
      <section className="hero-section">
        <Row
          fillWidth
          maxWidth={88}
          gap="40"
          vertical="center"
          className="hero-grid reveal-in"
          s={{ direction: "column" }}
        >
          <Column gap="24" flex={6} className="hero-copy">
            <Badge border="neutral-alpha-medium" background="neutral-alpha-weak">
              <Text variant="label-strong-s">{hero.eyebrow}</Text>
            </Badge>
            <Column gap="16">
              <Heading as="h1" variant="display-strong-xl" wrap="balance">
                {hero.title}
              </Heading>
              <Text as="p" variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
                {hero.description}
              </Text>
            </Column>
            <Row gap="12" wrap>
              <Button href="/contact" size="l" className="primary-cta" arrowIcon>
                {hero.primaryCta}
              </Button>
              <Button href="/about" variant="secondary" size="l" className="secondary-cta">
                {hero.secondaryCta}
              </Button>
            </Row>
            <Grid columns="3" gap="12" s={{ columns: 1 }} className="stat-grid">
              {stats.map((stat) => (
                <Column key={stat.label} gap="4" padding="16" className="outline-panel">
                  <Text variant="heading-strong-l">{stat.value}</Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {stat.label}
                  </Text>
                </Column>
              ))}
            </Grid>
          </Column>

          <Column flex={5} className="hero-visual">
            <Media
              src={hero.image}
              alt="Placeholder preview of Bir Ali Preschool learning environment"
              aspectRatio="5/4"
              radius="l"
              priority
              unoptimized
            />
            <Column gap="8" padding="20" className="floating-note">
              <Text variant="label-strong-s">Daily rhythm</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Adab, discovery, language, practical life, and outdoor calm.
              </Text>
            </Column>
          </Column>
        </Row>
      </section>

      <section className="site-section">
        <Column maxWidth={88} gap="32" className="reveal-in delay-1">
          <SectionHeading
            eyebrow="Why families choose us"
            title="A boutique preschool experience with a stronger inner compass."
            description="The mock data below will be replaced by resources/content.tsx production content later."
          />
          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {pillars.map((pillar) => (
              <Card key={pillar.title} padding="24" radius="l" className="premium-card">
                <Column gap="16">
                  <span className="card-orbit" aria-hidden="true" />
                  <Heading as="h3" variant="heading-strong-m">
                    {pillar.title}
                  </Heading>
                  <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                    {pillar.description}
                  </Text>
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>
      </section>

      <section className="site-section compact">
        <Column maxWidth={88} gap="32" className="reveal-in delay-2">
          <SectionHeading
            eyebrow="Programme model"
            title="Modern early-years structure, quietly grounded in Sunnah values."
          />
          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {aboutSections.map((section) => (
              <Column key={section.title} gap="12" padding="24" className="outline-panel">
                <Text variant="label-strong-s" className="panel-kicker">
                  0{aboutSections.indexOf(section) + 1}
                </Text>
                <Heading as="h3" variant="heading-strong-s">
                  {section.title}
                </Heading>
                <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                  {section.description}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </section>

      <section className="site-section">
        <Column maxWidth={88} gap="32" className="reveal-in delay-2">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <SectionHeading eyebrow={branchesSection.title} title={branchesSection.description} />
            <Button
              href={branchesSection.viewAllHref}
              variant="secondary"
              className="secondary-cta"
            >
              View All Branches
            </Button>
          </Row>
          <Row fillWidth gap="24" className="branches-grid" s={{ direction: "column" }}>
            <Card radius="l" overflow="hidden" className="image-card branch-featured-card">
              <Media
                src={branchesSection.featuredImage}
                alt={branchesSection.featuredImageAlt}
                aspectRatio="4/3"
              />
            </Card>
            <Column flex={1} gap="20" className="branches-stack">
              {branches.map((branch) => (
                <Card
                  key={branch.id}
                  href={`/branches/${branch.id}`}
                  fillWidth
                  paddingX="20"
                  paddingY="12"
                  radius="l"
                  className="premium-card branch-link-card"
                >
                  <Row fillWidth horizontal="between" vertical="center" gap="12">
                    <Text variant="heading-strong-s">{branch.name}</Text>
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Row>
                </Card>
              ))}
            </Column>
          </Row>
        </Column>
      </section>

      <section className="site-section">
        <Column maxWidth={88} gap="32" className="reveal-in delay-3">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <SectionHeading
              eyebrow="Events at Bir Ali"
              title="Enriching experiences throughout the year to develop well-rounded, confident Muslim children."
            />
          </Row>
          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {events.map((event) => (
              <Card
                key={event.title}
                direction="column"
                radius="l"
                overflow="hidden"
                className="image-card"
              >
                <Media src={event.image} alt={event.title} aspectRatio="4/3" unoptimized />
                <Column gap="8" padding="20">
                  <Heading as="h3" variant="heading-strong-s">
                    {event.title}
                  </Heading>
                  <Text as="p" variant="body-default-s" onBackground="neutral-weak">
                    {event.description}
                  </Text>
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>
      </section>

      <section className="site-section">
        <Column maxWidth={88} gap="32" className="reveal-in delay-3">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <SectionHeading
              eyebrow="Gallery"
              title="A darker, calmer view of premium preschool life."
            />
          </Row>
          <GalleryPreview images={homeGallery} />
        </Column>
      </section>

      <section className="site-section compact">
        <Column maxWidth={88} gap="32" className="reveal-in delay-1">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <SectionHeading
              eyebrow="Parent voice"
              title="Trust signals for families making a careful decision."
            />
            <Button href="/testimonials" variant="secondary" className="secondary-cta">
              Read Testimonials
            </Button>
          </Row>

          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} padding="24" radius="l" className="quote-card">
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

      <section className="site-section">
        <Column maxWidth={88} gap="32" className="reveal-in delay-2">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <SectionHeading eyebrow="Blog" title="Thoughtful notes for intentional parents." />
            <Button href="/blog" variant="secondary" className="secondary-cta">
              Read Blog
            </Button>
          </Row>
          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {blogPosts.map((post) => (
              <Card
                key={post.title}
                href="/blog"
                radius="l"
                overflow="hidden"
                className="image-card"
              >
                <Media src={post.image} alt={post.title} aspectRatio="3/2" unoptimized />
                <Column gap="12" padding="20">
                  <Text variant="label-default-s" className="panel-kicker">
                    {post.date}
                  </Text>
                  <Heading as="h3" variant="heading-strong-s">
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

      <section className="site-section">
        <Column maxWidth={88} padding="40" gap="24" className="final-cta reveal-in">
          <Text variant="label-strong-s" className="eyebrow">
            Admissions
          </Text>
          <Heading as="h2" variant="display-strong-s" wrap="balance">
            {contact.heading}
          </Heading>
          <Text as="p" variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {contact.description}
          </Text>
          <Row gap="12" wrap>
            <Button href="/contact" size="l" className="primary-cta" arrowIcon>
              Contact Admissions
            </Button>
            <Button
              href={`mailto:${site.email}`}
              variant="secondary"
              size="l"
              className="secondary-cta"
            >
              Email Us
            </Button>
          </Row>
        </Column>
      </section>
    </Column>
  );
}

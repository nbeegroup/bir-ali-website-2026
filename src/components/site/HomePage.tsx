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
  homeSections,
  site,
  stats,
  featuredTestimonials,
} from "@/resources/mockData";

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
              <Text variant="label-strong-s">{hero.dailyRhythm.label}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {hero.dailyRhythm.description}
              </Text>
            </Column>
          </Column>
        </Row>
      </section>

      {/* <section className="site-section">
        <Column maxWidth={88} gap="32" className="reveal-in delay-1">
          <SectionHeading
            eyebrow={homeSections.whyFamilies.eyebrow}
            title={homeSections.whyFamilies.title}
            description={homeSections.whyFamilies.description}
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
      </section> */}

      <section className="site-section compact">
        <Column maxWidth={88} gap="32" className="reveal-in delay-2">
          <SectionHeading
            eyebrow={homeSections.programme.eyebrow}
            title={homeSections.programme.title}
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
              {branchesSection.viewAllLabel}
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
              {branches.slice(0, 7).map((branch) => (
                <Card
                  key={branch.slug}
                  href={`/branches/${branch.slug}`}
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
              eyebrow={homeSections.events.eyebrow}
              title={homeSections.events.title}
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
              eyebrow={homeSections.gallery.eyebrow}
              title={homeSections.gallery.title}
            />
          </Row>
          <GalleryPreview images={homeGallery} />
        </Column>
      </section>

      <section className="site-section compact">
        <Column maxWidth={88} gap="32" className="reveal-in delay-1">
          <Row horizontal="between" vertical="end" gap="24" wrap>
            <SectionHeading
              eyebrow={homeSections.testimonials.eyebrow}
              title={homeSections.testimonials.title}
            />
            <Button href="/testimonials" variant="secondary" className="secondary-cta">
              {homeSections.testimonials.ctaLabel}
            </Button>
          </Row>

          <Grid columns="3" gap="16" m={{ columns: 1 }}>
            {featuredTestimonials.map((testimonial) => (
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
            <SectionHeading eyebrow={homeSections.blog.eyebrow} title={homeSections.blog.title} />
            <Button href="/blog" variant="secondary" className="secondary-cta">
              {homeSections.blog.ctaLabel}
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
            {homeSections.admissions.eyebrow}
          </Text>
          <Heading as="h2" variant="display-strong-s" wrap="balance">
            {contact.heading}
          </Heading>
          <Text as="p" variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {contact.description}
          </Text>
          <Row gap="12" wrap>
            <Button href="/contact" size="l" className="primary-cta" arrowIcon>
              {homeSections.admissions.primaryCta}
            </Button>
            {/* <Button
              href={`mailto:${site.email}`}
              variant="secondary"
              size="l"
              className="secondary-cta"
            >
              {homeSections.admissions.secondaryCta}
            </Button> */}
          </Row>
        </Column>
      </section>
    </Column>
  );
}

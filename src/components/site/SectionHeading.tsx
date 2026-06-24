import { Column, Heading, Text } from "@once-ui-system/core";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: SectionHeadingProps) {
  return (
    <Column
      gap="12"
      maxWidth={align === "center" ? 52 : 46}
      horizontal={align === "center" ? "center" : "start"}
      align={align}
      className="section-heading"
    >
      {eyebrow ? (
        <Text variant="label-strong-s" className="eyebrow">
          {eyebrow}
        </Text>
      ) : null}
      <Heading as="h2" variant="display-strong-s" wrap="balance">
        {title}
      </Heading>
      {description ? (
        <Text as="p" variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {description}
        </Text>
      ) : null}
    </Column>
  );
}

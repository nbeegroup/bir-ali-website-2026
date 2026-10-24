import "../../../node_modules/@once-ui-system/core/dist/css/styles.css";
import "../../../node_modules/@once-ui-system/core/dist/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import { Providers } from "@/components/Providers";
import { SiteShell } from "@/components/site";
import { dataStyle, fonts, style } from "@/resources/once-ui.config";
import { baseURL, createPageMetadata, meta, siteName } from "@/resources/seo";
import { Column, Flex, Schema, ThemeInit } from "@once-ui-system/core";
import type { Metadata } from "next";

const homeMetadata = createPageMetadata(meta.home);

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL(baseURL),
  title: {
    default: meta.home.title,
    template: `%s | ${siteName}`,
  },
  applicationName: siteName,
  category: "education",
  authors: [{ name: siteName, url: baseURL }],
  creator: siteName,
  publisher: siteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <head>
        <ThemeInit
          config={{
            theme: style.theme,
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            "solid-style": style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            "viz-style": dataStyle.variant,
          }}
        />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0" className="bir-body">
          <SiteShell>{children}</SiteShell>
        </Column>
      </Providers>
    </Flex>
  );
}

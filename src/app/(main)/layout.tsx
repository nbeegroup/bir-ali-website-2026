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

const metaPixelScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '335776009123613');
fbq('track', 'PageView');
`;

const tiktokPixelScript = `
!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

ttq.load('CPL9PQRC77U3S3PJLD8G');
ttq.page();
}(window, document, 'ttq');
`;

const googleTagScript = `
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["ads.birali.my"]});
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "GT-5D4XCML");
//# sourceURL=google_gtagjs-js-after
`;

const googleTagManagerScript = `
( function( w, d, s, l, i ) {
    w[l] = w[l] || [];
    w[l].push( {'gtm.start': new Date().getTime(), event: 'gtm.js'} );
    var f = d.getElementsByTagName( s )[0],
        j = d.createElement( s ), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore( j, f );
} )( window, document, 'script', 'dataLayer', 'GTM-PQX6X58B' );
`;

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

        {/* Meta Pixel Code Bir Ali */}
        <script dangerouslySetInnerHTML={{ __html: metaPixelScript }} />

        {/* TikTok Pixel Code */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: tiktokPixelScript }} />

        {/* Google tag (gtag.js) */}
        <script
          id="google_gtagjs-js"
          src="https://www.googletagmanager.com/gtag/js?id=GT-5D4XCML"
          async
        />
        <script id="google_gtagjs-js-after" dangerouslySetInnerHTML={{ __html: googleTagScript }} />

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: googleTagManagerScript }} />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0" className="bir-body">
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=335776009123613&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PQX6X58B"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
          <SiteShell>{children}</SiteShell>
        </Column>
      </Providers>
    </Flex>
  );
}

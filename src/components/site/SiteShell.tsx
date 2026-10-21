"use client";

import { Button, Column, Row, Text } from "@once-ui-system/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems, site } from "@/resources/mockData";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const updateGlowPosition = (event: PointerEvent) => {
      root.style.setProperty("--glow-x", `${event.clientX}px`);
      root.style.setProperty("--glow-y", `${event.clientY}px`);
    };

    const resetGlowPosition = () => {
      root.style.setProperty("--glow-x", "50vw");
      root.style.setProperty("--glow-y", "18rem");
    };

    resetGlowPosition();
    window.addEventListener("pointermove", updateGlowPosition, { passive: true });
    window.addEventListener("pointerleave", resetGlowPosition);

    return () => {
      window.removeEventListener("pointermove", updateGlowPosition);
      window.removeEventListener("pointerleave", resetGlowPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = () => {
    setMenuOpen(false);
    scrollToTop();
  };

  return (
    <Column fillWidth minHeight="100vh" className="site-shell">
      <span aria-hidden="true" className="mouse-glow" />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Row as="header" fillWidth horizontal="center" className="site-header">
        <Row
          fillWidth
          maxWidth={88}
          horizontal="between"
          vertical="center"
          gap="16"
          className="site-nav"
        >
          <Link
            href="/"
            onClick={handleNavigation}
            className="brand-lockup"
            aria-label="Bir Ali Preschool home"
          >
            {/* <span className="brand-mark" aria-hidden="true">
              BA
            </span> */}
            <span aria-hidden="true">
              {/* <span className="brand-mark" aria-hidden="true"> */}
              <img
                src="/images/bir-ali-preschool-white-logo.png"
                alt="Bir Ali Preschool Logo"
                height="40"
              />
            </span>
            {/* <span>
              <Text as="span" variant="label-strong-m">
                {site.title}
              </Text>
              <Text as="span" variant="label-default-xs" className="brand-tagline">
                {site.tagline}
              </Text>
            </span> */}
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={menuOpen ? "nav-links open" : "nav-links"}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavigation}
                className={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            href="https://ads.birali.my/?utm_source=website"
            onClick={handleNavigation}
            size="s"
            className={menuOpen ? "nav-cta open" : "nav-cta"}
          >
            Book Visit
          </Button>
        </Row>
      </Row>

      <Column as="main" id="main-content" fillWidth>
        {children}
      </Column>
    </Column>
  );
}

"use client";

import { Button, Column, Row, Text } from "@once-ui-system/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navItems, site } from "@/resources/mockData";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    if (openSubmenu === null) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSubmenu]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
    scrollToTop();
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setOpenSubmenu(null);
    }
    setMenuOpen((open) => !open);
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
            onClick={toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <nav
            ref={navigationRef}
            id="main-navigation"
            aria-label="Main navigation"
            className={menuOpen ? "nav-links open" : "nav-links"}
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href.startsWith("/") &&
                  item.href !== "/" &&
                  pathname.startsWith(`${item.href}/`));
              const submenuId = `${item.label.toLowerCase().replaceAll(" ", "-")}-submenu`;

              if (item.children) {
                const isOpen = openSubmenu === item.label;

                return (
                  <div
                    key={item.href}
                    className={
                      isOpen
                        ? "nav-item nav-item-with-children open"
                        : "nav-item nav-item-with-children"
                    }
                    onMouseEnter={() => setOpenSubmenu(item.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setOpenSubmenu(null);
                      }
                    }}
                  >
                    <div className="nav-parent-row">
                      <Link
                        href={item.href}
                        onClick={handleNavigation}
                        onFocus={() => setOpenSubmenu(item.label)}
                        className={isActive ? "nav-link active" : "nav-link"}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="nav-submenu-toggle"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isOpen}
                        aria-controls={submenuId}
                        onClick={() => setOpenSubmenu(isOpen ? null : item.label)}
                      >
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
                        </svg>
                      </button>
                    </div>
                    <div
                      id={submenuId}
                      className="nav-submenu"
                      aria-label={`${item.label} submenu`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={handleNavigation}
                          className="nav-submenu-link"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className={isActive ? "nav-link active" : "nav-link"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            href="https://ads.birali.my/?utm_content=contact&utm_source=birali.my"
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

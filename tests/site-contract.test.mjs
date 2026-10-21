import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");

test("mock data resource defines the Bir Ali Preschool brand and required pages", () => {
  const contentPath = "src/resources/mockData.js";

  assert.equal(existsSync(path.join(root, contentPath)), true, "mockData.js should exist");

  const content = read(contentPath);
  const requiredCopy = ["Bir Ali Preschool", "The Sunnah Preschool", "Jom Didik Anak Ikut Sunnah"];
  const requiredPages = ["Home", "About", "Gallery", "Testimonials", "Blog", "Contact"];

  for (const copy of requiredCopy) {
    assert.match(content, new RegExp(copy), `${copy} should be present in content data`);
  }

  for (const page of requiredPages) {
    assert.match(content, new RegExp(`label:\\s*"${page}"`), `${page} nav item should exist`);
  }

  assert.match(content, /https:\/\/placehold\.co\//, "placeholder imagery should use placehold.co");
});

test("all six main route pages exist", () => {
  const routes = [
    "src/app/(main)/page.tsx",
    "src/app/(main)/about/page.tsx",
    "src/app/(main)/gallery/page.tsx",
    "src/app/(main)/testimonials/page.tsx",
    "src/app/(main)/blog/page.tsx",
    "src/app/(main)/contact/page.tsx",
  ];

  for (const route of routes) {
    assert.equal(existsSync(path.join(root, route)), true, `${route} should exist`);
  }
});

test("shared site shell includes scroll-to-top navigation behavior", () => {
  const shellPath = "src/components/site/SiteShell.tsx";

  assert.equal(existsSync(path.join(root, shellPath)), true, "SiteShell should exist");

  const shell = read(shellPath);

  assert.match(shell, /scrollTo\(\{/, "navigation should call window.scrollTo");
  assert.match(shell, /behavior:\s*"smooth"/, "scroll-to-top behavior should be smooth");
});

test("navy styling uses requested brand palette and preserves accessible motion", () => {
  const css = read("src/resources/custom.css");

  assert.match(css, /#000080/i, "main navy background color should be defined");
  assert.match(
    css,
    /--bir-motion-highlight-rgb:\s*125,\s*211,\s*252/i,
    "cursor motion highlight should be lighter than navy",
  );
  assert.match(
    css,
    /\.site-shell::before[\s\S]*background-size:\s*28px\s+28px/i,
    "the light grid should cover the shared site shell",
  );
  assert.doesNotMatch(
    css,
    /\.hero-section:hover::after/i,
    "the grid should not brighten only on hero hover",
  );
  assert.match(
    css,
    /--bir-panel:\s*rgba\(19,\s*48,\s*132,\s*0\.78\)/i,
    "dark surfaces should use the shared navy panel color",
  );
  assert.match(css, /#f97316/i, "orange accent color should be defined");
  assert.match(css, /prefers-reduced-motion/, "animations should respect reduced motion");
});

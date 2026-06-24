import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");

test("content resource defines the Bir Ali Preschool brand and required pages", () => {
  const contentPath = "src/resources/content.tsx";

  assert.equal(existsSync(path.join(root, contentPath)), true, "content.tsx should exist");

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

test("dark premium styling uses requested brand palette and avoids preschool brightness", () => {
  const css = read("src/resources/custom.css");

  assert.match(css, /#23370a/i, "main deep-blue brand color should be defined");
  assert.match(css, /#f97316/i, "orange accent color should be defined");
  assert.match(css, /prefers-reduced-motion/, "animations should respect reduced motion");
});

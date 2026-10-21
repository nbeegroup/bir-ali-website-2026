// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://bir-ali-website-2026.vercel.app";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Bir Ali | The Sunnah Preschool",
    description: "Jom Didik Anak Ikut Sunnah.",
    image: "/images/og/home.jpg",
    canonical: "https://bir-ali-website-2026.vercel.app",
    robots: "index,follow",
    alternates: [{ href: "https://birali.my", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Bir Ali - The Sunnah Preschool",
  description: meta.home.description,
  email: "preschool@birali.my",
};

export { meta, schema, baseURL };

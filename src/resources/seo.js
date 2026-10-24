import { hero, pageIntro } from "./mockData.js";

export const baseURL = "https://birali.my";

export const siteName = "Bir Ali Preschool";

export const defaultPreviewPhoto = "/images/Ustazah-Isfadiah-di-Tadika-Bir-Ali-Alam-Impian-1.jpg";

const sharedKeywords = [
  "Bir Ali Preschool",
  "Tadika Bir Ali",
  "Islamic preschool Malaysia",
  "Sunnah preschool",
  "Muslim kindergarten Malaysia",
  "early childhood education Malaysia",
];

export const meta = {
  home: {
    path: "/",
    title: hero.title,
    description:
      "Bir Ali is a Sunnah-inspired Islamic preschool nurturing faith, character, confidence, and early learning for children across Malaysia.",
    image: hero.image,
    keywords: ["Islamic kindergarten", "Sunnah curriculum", "preschool branches Malaysia"],
  },
  about: {
    path: "/about",
    title: pageIntro.about.title,
    description:
      "Discover Bir Ali Preschool's Sunnah-inspired approach, KP2026-aligned curriculum, programmes, values, and commitment to whole-child development.",
    image: hero.image,
    keywords: ["Bir Ali curriculum", "KP2026 preschool", "Islamic early education"],
  },
  branches: {
    path: "/branches",
    title: "Find your nearest Bir Ali Preschool.",
    description:
      "Browse Bir Ali Preschool branches across Malaysia by state, view branch details, photos, contact information, and Google Maps locations.",
    image: "/images/branches/Bir-Ali-Default-Branch.jpg",
    keywords: ["Bir Ali branches", "preschool near me", "Islamic preschool locations"],
  },
  gallery: {
    path: "/gallery",
    title: pageIntro.gallery.title,
    description:
      "Explore photos of classroom learning, events, achievements, field trips, and joyful moments from the Bir Ali Preschool community.",
    image: "/images/gallery/0-Co-founder-Bir-Ali-Superbrands-Award-2025-scaled.jpg",
    keywords: ["Bir Ali gallery", "preschool activities", "Islamic preschool events"],
  },
  testimonials: {
    path: "/testimonials",
    title: pageIntro.testimonials.title,
    description:
      "Read Google Business Profile reviews and genuine experiences shared by parents from Bir Ali Preschool branches across Malaysia.",
    image: "/images/branches/Tadika Bir Ali Alam Impian Tari.jpg",
    keywords: ["Bir Ali reviews", "preschool testimonials", "parent reviews Malaysia"],
  },
  blog: {
    path: "/blog",
    title: pageIntro.blog.title,
    description:
      "Read practical articles from Bir Ali about early childhood education, Islamic parenting, preschool learning, and daily Sunnah routines.",
    image: "/images/Field-Trip-2025.jpg",
    keywords: ["Islamic parenting", "preschool tips", "Sunnah activities for children"],
  },
  contact: {
    path: "/contact",
    title: pageIntro.contact.title,
    description:
      "Contact Bir Ali Preschool for programme details, admissions, intake information, or to arrange a visit to a nearby branch.",
    image: hero.image,
    keywords: ["Bir Ali admissions", "contact Bir Ali Preschool", "preschool registration"],
  },
};

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   path: string;
 *   image?: string;
 *   keywords?: string[];
 * }} page
 * @returns {import("next").Metadata}
 */
export function createPageMetadata({ title, description, path, image, keywords = [] }) {
  const previewPhoto = image || defaultPreviewPhoto;

  return {
    title,
    description,
    keywords: [...new Set([...sharedKeywords, ...keywords])],
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_MY",
      url: path,
      siteName,
      title,
      description,
      images: [
        {
          url: previewPhoto,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewPhoto],
    },
  };
}

export const schema = {
  logo: "/images/bir-ali-preschool-white-logo.png",
  type: "EducationalOrganization",
  name: "Bir Ali - The Sunnah Preschool",
  description: meta.home.description,
  email: "preschool@birali.my",
};

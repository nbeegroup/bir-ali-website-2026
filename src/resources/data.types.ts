export type ImageItem = {
  title: string;
  description: string;
  image: string;
};

export type PageKey = "about" | "gallery" | "testimonials" | "blog" | "contact";

export type Branch = {
  slug: string;
  name: string;
  state: string;
  year: number;
  phone: string;
  address: string;
  location?: string | null;
  preview_photo: string;
  photos: string[];
  social: Array<{
    platform: string;
    url: string | null;
  }>;
};

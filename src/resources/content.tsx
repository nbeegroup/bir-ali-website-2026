export type NavItem = {
  label: string;
  href: string;
};

export type ImageItem = {
  title: string;
  description: string;
  image: string;
};

export type EventItem = {
  title: string;
  description: string;
  image: string;
};

export type BranchItem = {
  id: string;
  name: string;
};

export const site = {
  title: "Bir Ali Preschool",
  tagline: "The Sunnah Preschool",
  description: "Jom Didik Anak Ikut Sunnah",
  email: "hello@biralipreschool.test",
  phone: "+60 12-345 6789",
  address: "No. 12, Jalan Ilmu, 43000 Kajang, Selangor",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Jom Didik Anak Ikut Sunnah",
  title: "Bir Ali - The Sunnah Preschool",
  description:
    "Bir Ali Preschool, established in 2015 by NBee Group with a vision to provide high-quality early childhood education rooted in Islamic values. Committed to excellence and innovation, Bir Ali Preschool creates a nurturing and supportive Islamic learning environment for children across Malaysia.",
  primaryCta: "Book a Visit",
  secondaryCta: "Explore Programme",
  image: "/images/Ustazah-Isfadiah-di-Tadika-Bir-Ali-Alam-Impian-1.jpg",
  // image: "https://staging.birali.my/Taska-Bir-Ali-Junior-Alam-Impian.jpg",
};

export const stats = [
  { value: "4-6", label: "Years old" },
  { value: "50", label: "Branches across Malaysia" },
  { value: "Sunnah Module", label: "Verified by JAIS" },
];

export const pillars = [
  {
    title: "Adab before academics",
    description:
      "Daily routines are designed to shape manners, gratitude, independence, and care for others.",
  },
  {
    title: "Sunnah-inspired rhythm",
    description:
      "Children experience gentle habits, meaningful stories, and purposeful transitions through the day.",
  },
  {
    title: "Premium small-group care",
    description:
      "A boutique environment keeps each child seen, supported, and known by the teaching team.",
  },
];

export const aboutSections = [
  {
    title: "Our Philosophy",
    description:
      "Bir Ali Preschool is a placeholder brand story for a premium private preschool that pairs modern early childhood practice with Sunnah-led values.",
  },
  {
    title: "Learning Culture",
    description:
      "The mock curriculum balances language, numeracy, Quranic exposure, sensory play, practical life skills, art, movement, and outdoor discovery.",
  },
  {
    title: "Parent Partnership",
    description:
      "Families receive clear communication, observation-led updates, and thoughtful guidance for continuing routines at home.",
  },
];

export const gallery: ImageItem[] = [
  {
    title: "Calm arrival rituals",
    description: "A premium reception experience for children and families.",
    image: "https://placehold.co/640x520/17243a/f7f4ed?text=Arrival+Rituals",
  },
  {
    title: "Montessori-inspired corners",
    description: "Prepared materials for focus, order, and independence.",
    image: "https://placehold.co/640x520/1d2c45/f7f4ed?text=Learning+Corners",
  },
  {
    title: "Outdoor exploration",
    description: "Gentle discovery, movement, and sensory observation.",
    image: "https://placehold.co/640x520/203753/f7f4ed?text=Outdoor+Play",
  },
  {
    title: "Story and sirah circle",
    description: "Values-led storytelling in a warm, intimate setting.",
    image: "https://placehold.co/640x520/263b57/f7f4ed?text=Story+Circle",
  },
  {
    title: "Creative expression",
    description: "Art invitations that encourage patience and imagination.",
    image: "https://placehold.co/640x520/102036/f7f4ed?text=Creative+Studio",
  },
  {
    title: "Practical life studio",
    description: "Small routines that build confidence and coordination.",
    image: "https://placehold.co/640x520/23370a/f7f4ed?text=Practical+Life",
  },
];

export const homeGallery: ImageItem[] = [
  {
    title: "Superbrands Award 2025",
    description: "A proud milestone for the Bir Ali community.",
    image: "/images/gallery/0-Co-founder-Bir-Ali-Superbrands-Award-2025-scaled.jpg",
  },
  {
    title: "Khalifah Speech 2025",
    description: "Students grow in confidence through storytelling and public speaking.",
    image: "/images/gallery/1-Khalifah%20Speech%202025%2002.JPG",
  },
  {
    title: "Classroom Moments",
    description: "Daily learning experiences shaped by curiosity, adab, and care.",
    image: "/images/gallery/2-photo_2023-04-10_13-05-15-2.jpg",
  },
  {
    title: "Sports and Solat",
    description: "A balanced rhythm of movement, teamwork, and spiritual practice.",
    image: "/images/gallery/3-bir-ali-sports-pray.jpg",
  },
  {
    title: "Hands-on Learning",
    description: "Children explore, discover, and learn through guided experiences.",
    image: "/images/gallery/5-DSC01390-1-2048x1536.jpg",
  },
  {
    title: "Field Trip 2024",
    description: "Learning beyond the classroom through memorable excursions.",
    image: "/images/gallery/9-Field-Trip-2024.jpg",
  },
  {
    title: "Majlis Takharruj",
    description: "Celebrating growth, achievement, and cherished preschool memories.",
    image: "/images/gallery/9-Majlis-Takharruj-Bir-Ali-2025-2.jpg",
  },
];

export const events: EventItem[] = [
  {
    title: "Usrati Jannati",
    description:
      "Informative sessions led by experts covering topics like child development, positive parenting techniques, and fostering a strong parent-child bond.",
    image: "/images/Usrati Jannati 2025.JPG",
  },
  {
    title: "Khalifah Speech",
    description:
      "Annual festival celebrating oratory excellence where students showcase their talents in public speaking, storytelling, and dramatic performances.",
    image: "/images/Khalifah Speech 2025 01.jpg",
  },
  {
    title: "Field Trip Adventures",
    description:
      "Exciting educational excursions to fascinating destinations where children explore, discover, and enjoy hands-on learning experiences beyond the classroom.",
    image: "/images/Field-Trip-2025.jpg",
  },
  {
    title: "Sports Day Carnival",
    description:
      "Action-packed athletic celebration featuring fun competitions, team games, and physical challenges that promote fitness, teamwork, and sportsmanship.",
    image: "/images/Sports-Day-Bir-Ali-2024.jpg",
  },
  {
    title: "Haji Cilik Simulation",
    description:
      "Immersive Hajj pilgrimage experience where children learn and practice sacred rituals alongside peers from preschools across Malaysia.",
    image: "/images/Haji-Cilik-2024.jpg",
  },
  {
    title: "Majlis Takharruj & Talent Show",
    description:
      "Memorable year-end celebration honoring graduates with a spectacular showcase of talents, achievements, and cherished preschool memories.",
    image: "/images/Majlis-Takharruj-Bir-Ali-2025-1.jpg",
  },
];

export const branchesSection = {
  title: "Our Branches",
  description: "Serving families around Malaysia with convenient locations near you.",
  featuredImage: "/images/Taska-Bir-Ali-Junior-Alam-Impian.jpg",
  featuredImageAlt: "Featured Branch Image (Bir Ali Junior)",
  viewAllHref: "/branches",
};

export const branches: BranchItem[] = [
  { id: "bir-ali-junior", name: "Bir Ali Junior" },
  { id: "alam-impian", name: "Alam Impian" },
  { id: "u12-shah-alam", name: "U12 Shah Alam" },
  { id: "sri-andalas", name: "Sri Andalas" },
  { id: "taman-medan", name: "Taman Medan" },
  { id: "sek-3-shah-alam", name: "Seksyen 3 Shah Alam" },
  { id: "sentul-kl", name: "Sentul, KL" },
];

export const testimonials = [
  {
    quote:
      "Placeholder testimonial: the environment feels premium, peaceful, and intentional. Our child settled with confidence.",
    name: "Aina Rahman",
    role: "Parent of 4-year-old",
  },
  {
    quote:
      "Placeholder testimonial: we love the balance between strong routines, joyful play, and values we can continue at home.",
    name: "Hafiz & Maryam",
    role: "Parents of 5-year-old",
  },
  {
    quote:
      "Placeholder testimonial: communication is thoughtful and the teachers notice the small details that matter.",
    name: "Nur Izzati",
    role: "Parent of 3-year-old",
  },
];

export const blogPosts = [
  {
    title: "Building Sunnah routines for preschool mornings",
    excerpt:
      "Placeholder article summary about making arrival, greetings, and independence feel calm and repeatable.",
    date: "12 Jun 2026",
    image: "https://placehold.co/600x400/17243a/f7f4ed?text=Morning+Routines",
  },
  {
    title: "Why adab belongs in every learning corner",
    excerpt:
      "Placeholder article summary about weaving manners, patience, and service into early-years exploration.",
    date: "18 Jun 2026",
    image: "https://placehold.co/600x400/1d2c45/f7f4ed?text=Adab+Corners",
  },
  {
    title: "Choosing a boutique preschool environment",
    excerpt:
      "Placeholder article summary about small-group care, classroom atmosphere, and parent communication.",
    date: "22 Jun 2026",
    image: "https://placehold.co/600x400/203753/f7f4ed?text=Boutique+Care",
  },
];

export const contact = {
  heading: "Start with a private school visit.",
  description:
    "Share your details and our admissions team will follow up with available visit slots, intake notes, and programme information.",
  hours: "Monday-Friday, 8:00 AM-5:30 PM",
};

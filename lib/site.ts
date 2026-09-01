import {
  BookOpen,
  Church,
  Globe2,
  GraduationCap,
  HandHeart,
  MapPinned,
  Plane,
  ScrollText,
  Send,
  Users,
} from "lucide-react";

// Set NEXT_PUBLIC_SITE_URL to https://ibmperu.org at launch — that alone flips
// robots.txt and every canonical off the demo settings. See README "Going live".
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ibmperu.elijahdesent.com";

export const isDemo = !/ibmperu\.org$/.test(new URL(siteUrl).hostname);

export const site = {
  name: "Independent Baptist Missions of Peru",
  shortName: "IBM Peru",
  description:
    "Training, sending, and supporting Baptist missionaries from South America to the world.",
  email: "nash.desent@outlook.com",
  phone: "401.862.6604",
  donateUrl: "https://donorbox.org/independent-baptist-missions",
};

export const aboutLinks = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/our-mission", label: "Our Mission" },
  { href: "/statement-of-faith", label: "Statement of Faith" },
  { href: "/our-missionaries", label: "Missionaries" },
  { href: "/our-church-partners", label: "Church Partners" },
  { href: "/why-support-ibm", label: "Why Support IBM" },
  { href: "/hbc", label: "Historic Baptist Church" },
  { href: "/ibela", label: "Iglesia Bautista El Lindero Antiguo" },
];

export const primaryLinks = [
  { href: "/language-information", label: "Language" },
  { href: "/scripture-work", label: "Scripture Work" },
  { href: "/bi-peru", label: "BIU Peru" },
  { href: "/present-day-missions", label: "Missions" },
  { href: "/how-our-missionaries-are-supported", label: "Support Model" },
  { href: "/379-2", label: "Plan a Trip" },
];

export const footerLinks = [
  ...aboutLinks.slice(0, 5),
  ...primaryLinks,
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const focusCards = [
  {
    title: "Missionary Support",
    href: "/how-our-missionaries-are-supported",
    icon: HandHeart,
    text: "Practical, accountable help for church-sent missionaries serving throughout Peru, Argentina, Bolivia, and beyond.",
  },
  {
    title: "Scripture Publishing",
    href: "/scripture-work",
    icon: ScrollText,
    text: "Printing and distributing Scripture resources in Spanish and regional languages through long-running Bible publishing work.",
  },
  {
    title: "Bible Training",
    href: "/bi-peru",
    icon: GraduationCap,
    text: "Using the Baptist International University curriculum to train pastors, evangelists, and missionaries without tuition barriers.",
  },
  {
    title: "Church Partnerships",
    href: "/our-church-partners",
    icon: Church,
    text: "Independent Baptist churches working together so faithful national missionaries can reach their own region and the world.",
  },
];

export const stats = [
  { value: "60+", label: "missionaries currently supported" },
  { value: "24", label: "departments of Peru reached" },
  { value: "100%", label: "of gifts directed to missions or Scripture work" },
  { value: "2016", label: "Peru-based work formally underway" },
];

export const pageDetails: Record<
  string,
  { title: string; eyebrow: string; summary: string; image?: string; icon?: typeof Send }
> = {
  "379-2": {
    title: "Plan a Church Missions Trip",
    eyebrow: "Visit The Field",
    summary:
      "A practical field visit for churches that want to see the ministry, encourage missionaries, and serve alongside local believers in Peru.",
    image: "/images/mission-header.png",
    icon: Plane,
  },
  "present-day-missions": {
    title: "Present Day Missions",
    eyebrow: "Mission Strategy",
    summary:
      "A thoughtful paper and ministry reflection on supporting national missionaries, training institutes, and faithful church planting.",
    image: "/images/peru-village.jpg",
    icon: Globe2,
  },
  "how-our-missionaries-are-supported": {
    title: "How Our Missionaries Are Supported",
    eyebrow: "Funding Model",
    summary:
      "IBM supports men who serve faithfully, keeps accountability close to the field, and directs gifts toward missionary and Scripture work.",
    image: "/images/field-visit-2.png",
    icon: HandHeart,
  },
  "bi-peru": {
    title: "Baptist International University in Peru",
    eyebrow: "Bible Training",
    summary:
      "Bible institute and university curriculum offered in Peru to equip pastors, missionaries, and church workers for ministry.",
    image: "/images/biu-logo.jpeg",
    icon: GraduationCap,
  },
  ibela: {
    title: "Iglesia Bautista El Lindero Antiguo",
    eyebrow: "Local Church",
    summary:
      "The Landmark Baptist Church in Villa El Salvador, a Peruvian church partner connected to the mission and its local work.",
    image: "/images/ibela-church.jpg",
    icon: Church,
  },
  "scripture-work": {
    title: "The Scripture Work in Peru",
    eyebrow: "Bible Publishing",
    summary:
      "Decades of Scripture publishing and distribution carried into Peru through Bearing Precious Seed and local ministry partners.",
    image: "/images/new-testament.jpg",
    icon: BookOpen,
  },
  hbc: {
    title: "Historic Baptist Church",
    eyebrow: "Sending Church History",
    summary:
      "The Rhode Island church family connected to the beginning of Peru Missions and ongoing support for IBM.",
    image: "/images/peru-hills.jpg",
    icon: Church,
  },
  "why-support-ibm": {
    title: "Why Support IBM",
    eyebrow: "Why Peru",
    summary:
      "Strategic reasons churches support a Peru-based mission effort that trains and sends Spanish-speaking missionaries.",
    image: "/images/lima-street.jpg",
    icon: MapPinned,
  },
  "our-church-partners": {
    title: "Our Church Partners",
    eyebrow: "Partner Churches",
    summary:
      "A fellowship of independent Baptist churches collaborating in worldwide evangelism through IBM.",
    image: "/images/field-visit-4.png",
    icon: Users,
  },
  "who-we-are": {
    title: "Who We Are",
    eyebrow: "About IBM",
    summary:
      "Independent Baptist churches helping missionaries from South America carry the gospel into their region and beyond.",
    image: "/images/peru-landscape.jpg",
    icon: Users,
  },
  "language-information": {
    title: "Language Information",
    eyebrow: "Spanish-Speaking Missions",
    summary:
      "Why Spanish-speaking missionaries from Peru are positioned to reach South America and other parts of the world.",
    image: "/images/peru-languages.jpg",
    icon: Globe2,
  },
  "our-missionaries": {
    title: "Our Missionaries Described",
    eyebrow: "Missionary Standards",
    summary:
      "The doctrinal, personal, and church-sent qualifications IBM expects of missionaries it supports.",
    image: "/images/field-visit-1.png",
    icon: Send,
  },
  resources: {
    title: "Resources",
    eyebrow: "Resources",
    summary: "Useful links and reference material connected to IBM Peru's ministry work.",
    image: "/images/awajun-scripture.jpg",
    icon: BookOpen,
  },
  "statement-of-faith": {
    title: "Statement of Faith",
    eyebrow: "Doctrine",
    summary:
      "The Baptist doctrine and ministry convictions that guide IBM Peru's missionary work and partnerships.",
    image: "/images/bilingual-new-testament.jpg",
    icon: ScrollText,
  },
  blog: {
    title: "Blog",
    eyebrow: "Updates",
    summary: "Ministry notes and legacy updates from the IBM Peru site.",
    image: "/images/peru-village.jpg",
    icon: ScrollText,
  },
  contact: {
    title: "Contact",
    eyebrow: "Get In Touch",
    summary:
      "Reach IBM Peru for questions about supporting, visiting, or partnering in the mission work.",
    image: "/images/andes-city.jpg",
    icon: Send,
  },
  about: {
    title: "About",
    eyebrow: "About",
    summary: "A legacy about page preserved from the original WordPress site.",
    image: "/images/peru-landscape.jpg",
    icon: Users,
  },
  "sample-page": {
    title: "Sample Page",
    eyebrow: "Legacy Page",
    summary: "The original WordPress sample page, retained so old public links resolve.",
    image: "/images/peru-hills.jpg",
    icon: ScrollText,
  },
};

// width/height are the files' real pixel sizes — the lightbox caps each photo at
// its own natural width so the small ones are never blown up.
export const gallery = [
  { src: "/images/peru-landscape.jpg", alt: "Landscape in Peru", width: 3872, height: 2269 },
  { src: "/images/field-visit-1.png", alt: "Ministry gathering in Peru", width: 512, height: 320 },
  { src: "/images/field-visit-2.png", alt: "Mission field visit", width: 512, height: 320 },
  {
    src: "/images/img-6859.jpeg",
    alt: "Semilla Sembradores Enviadores, the mission's sower emblem",
    width: 1320,
    height: 2190,
  },
  { src: "/images/awajun-scripture.jpg", alt: "Scripture publication work", width: 886, height: 633 },
  { src: "/images/ibela-church.jpg", alt: "Iglesia Bautista El Lindero Antiguo", width: 1600, height: 900 },
];

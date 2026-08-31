import { pageDetails } from "@/lib/site";

const API_ROOT = "https://public-api.wordpress.com/rest/v1.1/sites/ibmperu.org/posts/";
const PAGE_FIELDS = "ID,slug,title,content,excerpt,URL,date,modified,featured_image";

export type WpItem = {
  ID: number;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  URL: string;
  date?: string;
  modified?: string;
  featured_image?: string;
};

type WpResponse = {
  found: number;
  posts: WpItem[];
};

const imageMap: Record<string, string> = {
  "ibm-logo.png": "/images/ibm-logo.png",
  "mckayla-crump-hjanvzlqob8-unsplash.jpg": "/images/peru-landscape.jpg",
  "joe-green-nsy6ztjk5hm-unsplash.jpg": "/images/lima-street.jpg",
  "eduardo-flores-v1xoqijg5xu-unsplash-2.jpg": "/images/andes-city.jpg",
  "photo-2023-03-19-16-12-34.png": "/images/field-visit-1.png",
  "photo-2023-04-08-17-39-08.png": "/images/field-visit-2.png",
  "photo-2023-01-22-11-18-30.png": "/images/field-visit-3.png",
  "photo-2023-03-31-14-45-01.png": "/images/field-visit-4.png",
  "gabriel-silva-suares-fimzgaxhp_c-unsplash.jpg": "/images/peru-hills.jpg",
  "carlos-ruiz-huaman-l91dwhigru8-unsplash.jpg": "/images/peru-village.jpg",
  "imb-peru-header.png": "/images/mission-header.png",
  "imb-peru-languages.jpg": "/images/peru-languages.jpg",
  "biu-logo-large-jpeg.jpeg": "/images/biu-logo.jpeg",
  "photo-2023-08-23-03-50-47.jpg": "/images/ibela-church.jpg",
  "nt.jpg": "/images/new-testament.jpg",
  "awajun-3.jpg": "/images/awajun-scripture.jpg",
  "nt-bilingual.jpg": "/images/bilingual-new-testament.jpg",
  "awajun-2.jpg": "/images/awajun-bibles.jpg",
};

async function fetchWp(type: "page" | "post") {
  const response = await fetch(
    `${API_ROOT}?type=${type}&number=100&fields=${PAGE_FIELDS}`,
    { next: { revalidate: 60 * 60 * 12 } },
  );

  if (!response.ok) {
    throw new Error(`Unable to fetch IBM Peru ${type} content`);
  }

  const data = (await response.json()) as WpResponse;
  return data.posts;
}

export async function getPages() {
  const pages = await fetchWp("page");
  return pages
    .filter((page) => page.slug !== "home-2")
    .sort((a, b) => getPageTitle(a).localeCompare(getPageTitle(b)));
}

export async function getHomePage() {
  const pages = await fetchWp("page");
  return pages.find((page) => page.slug === "home-2") ?? pages[0];
}

export async function getPage(slug: string) {
  const pages = await fetchWp("page");
  return pages.find((page) => page.slug === slug);
}

export async function getPosts() {
  return fetchWp("post");
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export function getPageTitle(item: Pick<WpItem, "slug" | "title" | "content">) {
  return pageDetails[item.slug]?.title || decode(stripTags(item.title)) || extractHeading(item.content) || item.slug;
}

export function getPageSummary(item: Pick<WpItem, "slug" | "content" | "excerpt">) {
  return pageDetails[item.slug]?.summary || decode(stripTags(item.excerpt || item.content)).slice(0, 180);
}

export function prepareContent(html: string) {
  let output = html
    .replace(/<h[1-2][^>]*>[\s\S]*?<\/h[1-2]>/i, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "");

  for (const [remoteName, localPath] of Object.entries(imageMap)) {
    const pattern = new RegExp(`https?:\\/\\/[^"']*${escapeRegExp(remoteName)}(?:\\?[^"']*)?`, "gi");
    output = output.replace(pattern, localPath);
  }

  output = output
    .replace(/http:\/\/ibmperu\.org/gi, "https://ibmperu.org")
    .replace(/href="https:\/\/ibmperu\.org\/([^"#?]+)\/?"/gi, 'href="/$1"')
    .replace(/href="https:\/\/ibmperu\.org\/?"/gi, 'href="/"');

  return output;
}

function extractHeading(html: string) {
  const match = html.match(/<h[1-2][^>]*>([\s\S]*?)<\/h[1-2]>/i);
  return match ? decode(stripTags(match[1])) : "";
}

function stripTags(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function decode(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&ldquo;/g, '"')
    .replace(/&#8221;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&#8212;|&mdash;/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

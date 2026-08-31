import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPage, getPages, getPageSummary, getPageTitle, prepareContent } from "@/lib/content";
import { aboutLinks, pageDetails, primaryLinks } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: getPageTitle(page),
    description: getPageSummary(page),
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  const details = pageDetails[slug];
  const title = getPageTitle(page);
  const summary = getPageSummary(page);

  return (
    <main>
      <PageHero
        eyebrow={details?.eyebrow || "IBM Peru"}
        title={title}
        summary={summary}
        image={details?.image}
        icon={details?.icon}
      />
      <section className="page-layout">
        <aside className="side-nav" aria-label="IBM Peru pages">
          <p>Explore</p>
          {[...aboutLinks, ...primaryLinks].map((link) => (
            <Link key={link.href} href={link.href} className={link.href === `/${slug}` ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </aside>
        <article className="article-panel">
          {slug === "contact" ? <ContactPanel /> : null}
          {slug === "blog" ? <BlogPanel /> : null}
          <div className="page-body" dangerouslySetInnerHTML={{ __html: prepareContent(page.content) }} />
        </article>
      </section>
    </main>
  );
}

function ContactPanel() {
  return (
    <div className="callout-panel">
      <h2>Start with a direct note.</h2>
      <p>
        For missions support, field trip planning, or ministry questions, contact IBM Peru
        through Pastor N. Sebastian Desent.
      </p>
      <a className="button button-primary" href="mailto:nash.desent@outlook.com">
        Send Email
        <ArrowRight size={16} aria-hidden />
      </a>
    </div>
  );
}

function BlogPanel() {
  return (
    <div className="callout-panel">
      <h2>Legacy blog archive</h2>
      <p>The original site included one starter post, preserved here for route completeness.</p>
      <Link className="button button-primary" href="/2023/04/27/hello-world">
        View Post
        <ArrowRight size={16} aria-hidden />
      </Link>
    </div>
  );
}

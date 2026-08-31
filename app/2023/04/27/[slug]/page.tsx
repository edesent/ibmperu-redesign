import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getPost, getPosts, prepareContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return post ? { title: post.title || "Blog Post" } : {};
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero
        eyebrow="Blog Archive"
        title={post.title || "Blog Post"}
        summary="A legacy post preserved from the original IBM Peru WordPress site."
        image="/images/peru-village.jpg"
      />
      <section className="page-layout single-column">
        <article className="article-panel">
          <div className="page-body" dangerouslySetInnerHTML={{ __html: prepareContent(post.content) }} />
        </article>
      </section>
    </main>
  );
}

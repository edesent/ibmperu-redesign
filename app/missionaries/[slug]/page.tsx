import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, MapPinned, Send } from "lucide-react";
import { MissionaryPortrait } from "@/components/missionary-portrait";
import { MissionaryVideoCard } from "@/components/missionary-video";
import { PhotoGallery } from "@/components/photo-gallery";
import {
  formatLetterDate,
  getMissionary,
  missionaries,
  sortedLetters,
} from "@/content/missionaries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return missionaries.map((worker) => ({ slug: worker.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const worker = getMissionary(slug);

  if (!worker) {
    return {};
  }

  return {
    title: `${worker.name} — ${worker.field}`,
    description: worker.summary,
  };
}

export default async function MissionaryPage({ params }: PageProps) {
  const { slug } = await params;
  const worker = getMissionary(slug);

  if (!worker) {
    notFound();
  }

  const letters = sortedLetters(worker);

  return (
    <main>
      <section className="worker-hero">
        <div className="worker-hero-copy">
          <Link className="worker-back" href="/missionaries">
            <ArrowLeft size={15} aria-hidden />
            All missionaries
          </Link>
          <p className="eyebrow">{worker.sentBy ? `Sent by ${worker.sentBy}` : "Missionary"}</p>
          <h1>{worker.name}</h1>
          <p className="worker-hero-field">
            <MapPinned size={17} aria-hidden />
            {worker.field}
            {worker.since ? ` · on the field since ${worker.since}` : ""}
          </p>
          <p className="worker-hero-summary">{worker.summary}</p>
        </div>
        <div className="worker-hero-media">
          <MissionaryPortrait worker={worker} sizes="(max-width: 1100px) 100vw, 42vw" priority />
        </div>
      </section>

      <section className="section worker-body-section">
        <article className="worker-main">
          {worker.bio?.length ? (
            <div className="worker-bio">
              {worker.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          <div id="letters" className="worker-block">
            <h2>Prayer letters</h2>
            {letters.length === 0 ? (
              <p className="worker-empty">
                No letters posted yet. They will appear here as they come in from the field.
              </p>
            ) : (
              <div className="letter-list">
                {letters.map((letter) => (
                  <article className="letter" key={`${letter.date}-${letter.title}`}>
                    <p className="letter-date">
                      <time dateTime={letter.date}>{formatLetterDate(letter.date)}</time>
                    </p>
                    <h3>{letter.title}</h3>
                    {letter.body?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {letter.pdf ? (
                      <a className="letter-pdf" href={letter.pdf}>
                        <Download size={15} aria-hidden />
                        Download the letter
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            )}
          </div>

          {worker.videos?.length ? (
            <div className="worker-block">
              <h2>Videos</h2>
              <div className="video-grid">
                {worker.videos.map((video) => (
                  <MissionaryVideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          ) : null}

          {worker.photos?.length ? (
            <div className="worker-block">
              <h2>Photos</h2>
              <PhotoGallery photos={worker.photos} layout="grid" label={`${worker.name} photos`} />
            </div>
          ) : null}
        </article>

        <aside className="worker-aside">
          <div className="callout-panel">
            <h2>Support this work.</h2>
            <p>
              Gifts given through IBM go to missionary support or Scripture work. Nothing is
              taken out for administration.
            </p>
            <Link className="button button-primary" href="/give">
              Give
              <Send size={16} aria-hidden />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

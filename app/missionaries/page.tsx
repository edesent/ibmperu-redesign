import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { MissionaryPortrait } from "@/components/missionary-portrait";
import { formatLetterDate, latestLetterDate, missionaries } from "@/content/missionaries";

export const metadata: Metadata = {
  title: "Missionary Directory",
  description:
    "The missionaries Independent Baptist Missions of Peru supports — their fields, their prayer letters, and updates from the work.",
};

export default function MissionariesPage() {
  const hasPlaceholders = missionaries.some((worker) => worker.placeholder);

  return (
    <main>
      <section className="directory-header">
        <div>
          <p className="eyebrow">Missionary Directory</p>
          <h1>The men IBM supports, and the work they send back.</h1>
          <p>
            IBM expects regular updates from the field. Each missionary has a page here
            with his prayer letters, videos, and photos as they come in.
          </p>
        </div>
        <Link className="button button-outline" href="/our-missionaries">
          Our Standards
          <ArrowRight size={17} aria-hidden />
        </Link>
      </section>

      <section className="section directory-section">
        {hasPlaceholders ? (
          <p className="directory-notice">
            Sample profiles are shown so the layout can be seen. Replace them in{" "}
            <code>content/missionaries.ts</code> before this page goes public.
          </p>
        ) : null}

        {missionaries.length === 0 ? (
          <div className="callout-panel">
            <h2>No missionaries listed yet.</h2>
            <p>
              As missionaries are added, each one appears here with his field, his prayer
              letters, and updates from the work.
            </p>
            <Link className="button button-primary" href="/contact">
              Contact IBM
              <Mail size={16} aria-hidden />
            </Link>
          </div>
        ) : (
          <div className="directory-grid">
            {missionaries.map((worker) => {
              const latest = latestLetterDate(worker);

              return (
                <Link
                  className="worker-card"
                  key={worker.slug}
                  href={`/missionaries/${worker.slug}`}
                >
                  <span className="worker-photo">
                    <MissionaryPortrait worker={worker} sizes="(max-width: 760px) 100vw, 30vw" />
                  </span>
                  <span className="worker-body">
                    <span className="worker-field">{worker.field}</span>
                    <h2>{worker.name}</h2>
                    <span className="worker-summary">{worker.summary}</span>
                    <span className="worker-meta">
                      {latest ? `Last letter ${formatLetterDate(latest)}` : "Profile"}
                      <ArrowRight size={15} aria-hidden />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

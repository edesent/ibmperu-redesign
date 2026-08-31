import { LucideIcon } from "lucide-react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  image?: string;
  icon?: LucideIcon;
};

export function PageHero({ eyebrow, title, summary, image, icon: Icon }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
      <div className="page-hero-media">
        {image ? (
          <Image className="page-hero-image" src={image} alt="" fill sizes="(max-width: 1100px) 100vw, 42vw" />
        ) : null}
        {Icon ? (
          <div className="page-hero-icon" aria-hidden>
            <Icon size={34} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

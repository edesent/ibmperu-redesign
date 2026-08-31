import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, MapPinned } from "lucide-react";
import { focusCards, gallery, site, stats } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-background" />
        <div className="hero-content">
          <p className="eyebrow">Independent Baptist Missions of Peru</p>
          <h1>South American missionaries reaching the world with the gospel.</h1>
          <p>
            Formerly called Peru Missions, IBM Peru partners with independent Baptist
            churches to train, send, and support faithful missionaries from Peru and
            neighboring countries.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/our-mission">
              Our Mission
              <ArrowRight size={17} aria-hidden />
            </Link>
            <a className="button button-light" href={site.donateUrl}>
              Donate
              <ExternalLink size={17} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Ministry impact">
        {stats.map((stat) => (
          <div key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">About The Work</p>
          <h2>Close to the churches, close to the missionaries, focused on the Great Commission.</h2>
        </div>
        <div className="about-story">
          <p>
            IBM Peru operates under church authority in Peru, near the missionaries it
            serves and the churches it partners with. That closeness keeps the work
            personal, accountable, and rooted in local church ministry.
          </p>
          <p>
            Peru is strategically located in South America with a strong network of
            Baptist churches, pastors, and missionaries. The vision is simple: train
            faithful men, support them wisely, and help South American churches send
            missionaries to the world.
          </p>
          <div className="story-image">
            <Image src="/images/mission-header.png" alt="IBM Peru ministry banner" fill sizes="(max-width: 760px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="field-band">
        <div className="field-photo">
          <Image src="/images/mission-training-gathering.jpg" alt="Mission training gathering in Peru" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div className="field-copy">
          <p className="eyebrow">On The Field</p>
          <h2>A Peru-based mission office with worldwide ambition.</h2>
          <div className="field-list">
            {[
              "Supporting churches in Peru and 60-plus missionaries.",
              "A base church and land in Pachacamac for mission office, seminary, and Scripture publishing.",
              "Baptist International University curriculum for pastors and missionaries.",
              "Support through HBC Peru fund and partner churches in the USA and internationally.",
            ].map((item) => (
              <p key={item}>
                <CheckCircle2 size={19} aria-hidden />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section requirements-section">
        <div className="section-heading">
          <p className="eyebrow">Missionary Standards</p>
          <h2>Supported missionaries are expected to be doctrinally aligned and church sent.</h2>
        </div>
        <div className="requirements-grid">
          {[
            "Baptist in doctrine and practice",
            "Confirmed agreement with the Statement of Faith",
            "Baptist baptism for husband and wife",
            "Legally married and not divorced",
            "Church sent with a good testimony",
            "Committed soul-winners with a world vision",
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Ministry Pathways</p>
          <h2>One mission, several faithful lanes of work.</h2>
        </div>
        <div className="focus-grid">
          {focusCards.map((card) => (
            <Link className="focus-card" key={card.href} href={card.href}>
              <card.icon size={28} aria-hidden />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span>
                Learn more
                <ArrowRight size={16} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="image-rail" aria-label="IBM Peru ministry photos">
        {gallery.map((image) => (
          <div className="rail-image" key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 22vw" />
          </div>
        ))}
      </section>

      <section className="section funding-section">
        <div>
          <p className="eyebrow">Funding</p>
          <h2>Every gift is directed to missionary support or Scripture work.</h2>
          <p>
            Administration costs are carried by the home church so funds received by IBM
            can go where supporters intend them to go.
          </p>
        </div>
        <div className="funding-actions">
          <a className="button button-primary" href={site.donateUrl}>
            Give Online
            <ExternalLink size={17} aria-hidden />
          </a>
          <Link className="button button-outline" href="/contact">
            Contact IBM
            <Mail size={17} aria-hidden />
          </Link>
        </div>
      </section>

      <section className="section visit-band">
        <div>
          <MapPinned size={30} aria-hidden />
          <h2>Plan a church missions trip to Peru.</h2>
          <p>
            IBM maintains a field location for churches that want to visit, see the work
            personally, and encourage missionaries on the ground.
          </p>
        </div>
        <Link className="button button-light" href="/379-2">
          Plan A Trip
          <ArrowRight size={17} aria-hidden />
        </Link>
      </section>
    </main>
  );
}

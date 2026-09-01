import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HandHeart, ScrollText, ShieldCheck } from "lucide-react";
import { DonorboxForm } from "@/components/donorbox-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give to Independent Baptist Missions of Peru. Every gift is directed to missionary support or Scripture work.",
};

const notes = [
  {
    icon: HandHeart,
    title: "Missionary support",
    text: "Practical, accountable help for church-sent missionaries serving throughout Peru, Argentina, Bolivia, and beyond.",
  },
  {
    icon: ScrollText,
    title: "Scripture work",
    text: "Printing and distributing Scripture in Spanish and regional languages through long-running Bible publishing work.",
  },
  {
    icon: ShieldCheck,
    title: "No overhead taken out",
    text: "Administration costs are carried by the home church, so gifts go where supporters intend them to go.",
  },
];

export default function GivePage() {
  return (
    <main>
      {/* Deliberately short: the form is the page, so the header only has to
          say where the money goes before handing over to it. */}
      <section className="give-header">
        <Image
          className="give-header-image"
          src="/images/awajun-scripture.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="give-header-copy">
          <p className="eyebrow">Give</p>
          <h1>Give to the work in Peru.</h1>
          <p>
            Every gift is directed to missionary support or Scripture work. Give once, or
            set up monthly support below.
          </p>
        </div>
      </section>

      <section className="give-section">
        <div className="give-frame">
          <DonorboxForm />
        </div>

        <p className="give-fallback">
          Trouble with the form?{" "}
          <a href={site.donateUrl}>Open it directly on Donorbox</a>, or{" "}
          <Link href="/contact">contact IBM</Link> about giving by check.
        </p>

        <div className="give-notes">
          {notes.map((note) => (
            <div className="give-note" key={note.title}>
              <note.icon size={26} aria-hidden />
              <h2>{note.title}</h2>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

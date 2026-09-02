/**
 * THE MISSIONARY DIRECTORY
 * =======================================================================
 * This one file is the whole workers directory. Add a missionary here and
 * their card appears on /missionaries and their page appears at
 * /missionaries/<slug> — nothing else to wire up.
 *
 * TO ADD A MISSIONARY
 *   1. Put their photo in  public/missionaries/  (e.g. juan-perez.jpg)
 *   2. Copy the block below, paste it into the `missionaries` list, and
 *      fill it in. Only slug, name, field, and summary are required.
 *
 *   {
 *     slug: "juan-perez",                    // the web address: /missionaries/juan-perez
 *     name: "Juan Pérez",
 *     field: "Iquitos, Peru",
 *     sentBy: "Iglesia Bautista El Lindero Antiguo",   // optional
 *     since: "2019",                                    // optional
 *     photo: "/missionaries/juan-perez.jpg",            // optional
 *     summary: "Church planting on the Amazon river.",  // one sentence, shows on the card
 *     bio: [
 *       "First paragraph of their story.",
 *       "Second paragraph.",
 *     ],
 *   },
 *
 * TO ADD A PRAYER LETTER
 *   Add a `letters` list to that missionary. Newest first.
 *
 *     letters: [
 *       {
 *         date: "2026-08-14",              // year-month-day
 *         title: "Four baptized in August",
 *         body: [
 *           "First paragraph of the letter.",
 *           "Second paragraph.",
 *         ],
 *         pdf: "/letters/perez-2026-08.pdf",   // optional, if they also sent a PDF
 *       },
 *     ],
 *
 *   A letter can be typed out (`body`), a PDF (`pdf`), or both. Typing it out
 *   is better — a PDF cannot be read on a phone or found by search engines.
 *
 * TO ADD A VIDEO
 *   Take the code out of the YouTube address and put it in `videos`.
 *   https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: "dQw4w9WgXcQ"
 *
 *     videos: [{ id: "dQw4w9WgXcQ", title: "August update from the field" }],
 *
 * TO ADD PHOTOS
 *   Put them in public/missionaries/ and list them. The width and height must
 *   be the photo's real pixel size, or it will not display at the right size.
 *
 *     photos: [
 *       { src: "/missionaries/perez-baptism.jpg", alt: "Baptism in the river",
 *         width: 1600, height: 1067 },
 *     ],
 * =======================================================================
 */

export type MissionaryLetter = {
  /** ISO date, e.g. "2026-08-14". Used for ordering and the printed date. */
  date: string;
  title: string;
  /** The letter typed out, one string per paragraph. */
  body?: string[];
  /** Optional PDF in public/letters/ */
  pdf?: string;
};

export type MissionaryVideo = {
  /** The code from the YouTube address. Use either id or url. */
  id?: string;
  /** Direct address for an uploaded video file. */
  url?: string;
  title: string;
  /** Optional. Leave off and YouTube's own thumbnail is used. */
  poster?: string;
};

export type MissionaryPhoto = {
  src: string;
  alt: string;
  /** The photo's real pixel size. */
  width: number;
  height: number;
};

export type Missionary = {
  /** Sample profile — shows a notice on the directory. Delete when real. */
  placeholder?: boolean;
  slug: string;
  name: string;
  /** Where they serve, e.g. "Iquitos, Peru". */
  field: string;
  /** Their sending church. */
  sentBy?: string;
  /** Year they went to the field. */
  since?: string;
  photo?: string;
  /** One sentence. This is what shows on their card in the directory. */
  summary: string;
  bio?: string[];
  letters?: MissionaryLetter[];
  videos?: MissionaryVideo[];
  photos?: MissionaryPhoto[];
};

export const missionaries: Missionary[] = [
  // ---------------------------------------------------------------------
  // SAMPLE PROFILES — these two men are not real. They are here so the
  // directory can be seen working. Replace them with real missionaries and
  // delete the `placeholder: true` line; the notice on /missionaries
  // disappears on its own once no placeholders are left.
  // ---------------------------------------------------------------------
  {
    placeholder: true,
    slug: "jorge-rodriguez",
    name: "Jorge Rodriguez",
    field: "San Martin, Tarapoto, Peru",
    photo: "/missionaries/img-6869.jpeg",
    sentBy: "Iglesia Bautista El Lindero Antiguo",
    since: "2019",
    summary: "Church planting and Scripture distribution along the Amazon river.",
    bio: [
      "This is sample text standing in for a missionary's story — where he is from, the church that sent him, and what he is doing on the field.",
      "A second paragraph gives room for how the work began and what he is asking churches to pray for.",
    ],
    letters: [
      {
        date: "2026-08-14",
        title: "Sample letter — August",
        body: [
          "This is where a prayer letter goes, typed out so it can be read on a phone and found by search engines.",
          "Each paragraph is its own line in the file. A letter can also link to a PDF if that is how it arrived.",
        ],
      },
      {
        date: "2026-05-02",
        title: "Sample letter — May",
        body: [
          "An older letter. Letters are listed newest first automatically, so nothing has to be reordered by hand.",
        ],
      },
    ],
    videos: [
      { url: "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/yws3C2ngUM5cl_3BEXiTYZaYZeCietFF/29358b49-f5d1-4681-8e0c-eebb33dc8649-kMD1TDq0dHf9MJ4NlJHMTkdgP0cYNQ.mov", title: "Jorge Rodriguez — Missionary Video" },
    ],
  },
  {
    placeholder: true,
    slug: "juan-moreno",
    name: "Juan Moreno",
    field: "Pachacamac, Peru",
    sentBy: "Historic Baptist Church",
    since: "2022",
    summary: "Training national men and preaching in the southern highlands.",
    bio: [
      "A second sample profile, kept shorter on purpose — a missionary with only a paragraph and no letters yet still gets a complete page.",
    ],
  },
];

export function getMissionary(slug: string) {
  return missionaries.find((worker) => worker.slug === slug);
}

/** Newest letter first, so a profile page leads with the latest news. */
export function sortedLetters(worker: Missionary) {
  return [...(worker.letters ?? [])].sort((a, b) => b.date.localeCompare(a.date));
}

export function latestLetterDate(worker: Missionary) {
  return sortedLetters(worker)[0]?.date;
}

export function formatLetterDate(date: string) {
  // Parsed as UTC on purpose: "2026-08-01" must not slip to July in the US.
  const parsed = new Date(`${date}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

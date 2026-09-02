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
  /** Optional focal point for cropped profile photos, e.g. "center 30%". */
  photoPosition?: string;
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
    slug: "juan-moreno",
    name: "Juan Moreno",
    field: "Pachacamac, Peru",
    photo: "/missionaries/juan-moreno.jpeg",
    sentBy: "Iglesia Bautista El Lindero Antiguo",
    summary: "Directing EBBN Bible training, discipleship, and missions outreach from Pachacamac.",
    bio: [
      "Juan Moreno serves with his family in Pachacamac, south of Lima, where he directs the EBBN Ministry under the authority of Iglesia Bautista El Lindero Antiguo. The work in Pachacamac also serves as a base for the missions project throughout Peru.",
      "Through EBBN, Juan helps train Baptist Bible School teachers and prepares editable Bible study materials for children, adolescents, and young people. His burden is to instill a heart for missions in local churches and help raise up courageous missionaries and pastors.",
      "Juan also serves with Independent Baptist Missions of Peru, contributing his experience in Excel and data management to track the missions program's income and expenses. The program connects missionaries and supporting churches in Peru, the United States, and other parts of the world.",
      "At the Pachacamac mission, the Moreno family serves through preaching, Bible studies, children's ministry, discipleship, and guitar lessons used as an outreach to young people and their families.",
    ],
    letters: [
      {
        date: "2026-08",
        title: "August 2026 Ministry Report",
        body: [
          "Juan presented the EBBN ministry to pastors and missionaries at the first Leaders and Pastors Conference. He proposed training Baptist Bible School teachers so that churches can develop a strong missions vision in their classrooms and prepare future missionaries and pastors.",
          "During a Bible study connected with guitar lessons, a young man accepted Christ. The Moreno family asks prayer for his spiritual growth and for opportunities to reach his family with the gospel.",
          "EBBN Bible study materials were shared with missionaries serving in Ayacucho and Arequipa. The Exploring God material, which teaches the attributes of God, was prepared in editable versions for children's and youth classes.",
          "The Pachacamac mission held a special Children's Day activity. The family asks prayer for the believing families who attend faithfully, along with every new believer and child attending the church.",
          "Prayer requests include wisdom in sharing God's Word, the families and visitors attending services, land in San Antonio de Pachacamac, resources for the ministry and the Moreno home, and the guitar-class outreach project.",
          "The Moreno family thanks God for the opportunity to share the gospel and expresses gratitude to the churches and individuals whose prayers and financial support make the work possible.",
        ],
      },
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
  const monthOnly = /^\d{4}-\d{2}$/.test(date);
  const normalizedDate = monthOnly ? `${date}-01` : date;
  const parsed = new Date(`${normalizedDate}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    ...(monthOnly ? {} : { day: "numeric" }),
    timeZone: "UTC",
  });
}

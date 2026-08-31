# IBM Peru Redesign

A complete rebuild of [ibmperu.org](https://ibmperu.org/) as a modern Next.js app.

## What Is Included

- Full App Router Next.js site
- Redesigned homepage, header, footer, and page templates
- Route coverage for all public WordPress sitemap pages
- Preserved legacy blog post route
- Local ministry images copied from the original site
- WordPress.com content fetch with 12-hour static regeneration

## Key Routes

- `/`
- `/who-we-are`
- `/our-mission`
- `/statement-of-faith`
- `/our-missionaries`
- `/our-church-partners`
- `/why-support-ibm`
- `/language-information`
- `/scripture-work`
- `/bi-peru`
- `/ibela`
- `/hbc`
- `/present-day-missions`
- `/how-our-missionaries-are-supported`
- `/379-2`
- `/resources`
- `/blog`
- `/contact`
- `/about`
- `/sample-page`
- `/2023/04/27/hello-world`

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run lint
npm run build
```

## Typography

Headings, the wordmark, and the stat numbers are set in **Anton** — the closest
match to the IBM Peru mark, which is a fat condensed grotesque with flat
terminals and a thin right diagonal on the M. Body copy is **Archivo**.

Both are self-hosted from `fonts/` and loaded with `next/font/local`, so the
production build never depends on `fonts.gstatic.com` being reachable.

## Going live

The site is currently a demo at `ibmperu.elijahdesent.com` and serves
`Disallow: /` so it cannot compete with ibmperu.org for their own name.

To launch, set `NEXT_PUBLIC_SITE_URL=https://ibmperu.org` in the Vercel project.
That one variable flips `robots.txt` and every canonical URL at once.

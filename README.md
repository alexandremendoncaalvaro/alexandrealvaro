# alexandrealvaro.com.br

Personal website for **Alexandre Mendonça Alvaro** — Senior Software Engineer working on AI systems, computer vision, and software architecture.

Built with **Astro + TypeScript + Tailwind**, fully static, deployed to **Cloudflare Pages**.

---

## Stack

- [Astro](https://astro.build) (static output, no SSR)
- TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- `@astrojs/sitemap` for `sitemap-index.xml`
- System font stack (no web-font fetches) — light/dark via `prefers-color-scheme`
- Zero client-side JavaScript in the default build

---

## Project structure

```
.
├── astro.config.mjs          # Astro config (static, sitemap, tailwind)
├── tailwind.config.mjs       # Design tokens (colors, fonts, spacing)
├── tsconfig.json             # Strict TS with @/* path alias
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── data/
    │   └── site.ts           # ← single source of truth for all content
    ├── layouts/
    │   └── BaseLayout.astro  # <html>, SEO, OG, JSON-LD, nav, footer
    ├── components/
    │   ├── Nav.astro
    │   ├── Footer.astro
    │   ├── Hero.astro
    │   ├── SectionHeading.astro
    │   ├── WorkItem.astro
    │   └── ExperienceItem.astro
    ├── pages/
    │   ├── index.astro       # Home
    │   ├── work.astro        # Curated work
    │   ├── about.astro       # Narrative
    │   ├── contact.astro     # Contact + links
    │   └── 404.astro
    ├── styles/
    │   └── global.css        # Tailwind entry + base styles
    └── env.d.ts
```

---

## Editing content

Almost all copy lives in **`src/data/site.ts`**. Edit that one file to update:

- `site` — name, headline, description, canonical URL
- `nav` — primary navigation links
- `links` — email, GitHub, LinkedIn, Baunilha, Studio Baunilha, Fala, Ko-fi
- `hero` — homepage hero (eyebrow, title, supporting text, CTAs)
- `focus` — current focus areas
- `credibility` — homepage credibility bullets
- `work` — selected work items (featured flag controls homepage surfacing)
- `experience` — roles shown on `/work`
- `about` — about page paragraphs, strengths, stack
- `secondary` — smaller products / studio links (Baunilha, Studio, Fala)

Bilingual expansion path: duplicate `site.ts` to `site.pt.ts`, export a locale map, and switch based on route. The content shape is already locale-agnostic.

---

## Local development

Node version is pinned via [mise](https://mise.jdx.dev) in `.mise.toml` (`node = "22"`). If you have mise installed, it activates automatically on `cd`. Otherwise, any Node 20+ works.

```bash
mise install         # if using mise (first time only)
npm install
npm run dev          # http://localhost:4321
npm run build        # static output → dist/
npm run preview      # preview the production build
npm run check        # astro + TypeScript check
```

---

## Deploy to Cloudflare Pages

This is a standard static Astro project. No adapter needed.

### Option A — connect the Git repo

1. Push this repo to GitHub / GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Use:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (set `NODE_VERSION=22` under Environment Variables to match `.mise.toml`)
4. Save and deploy. Cloudflare will rebuild on every push.

### Option B — Wrangler (manual)

```bash
npm run build
npx wrangler pages deploy dist --project-name alexandrealvaro
```

### Custom domain

Point `alexandrealvaro.com.br` at the Pages project from **Custom domains** in the Cloudflare Pages UI. The `site` field in `astro.config.mjs` and canonical/OG tags already use this domain.

---

## SEO

- Page titles, meta descriptions, canonical URLs and Open Graph tags are set in `src/layouts/BaseLayout.astro` from the `site` config and per-page props.
- JSON-LD `Person` schema is emitted on every page.
- `@astrojs/sitemap` generates `/sitemap-index.xml` at build time.
- `public/robots.txt` references the sitemap.

To add a static social image: drop `public/og.png` (1200×630) and add an `og:image` tag in `BaseLayout.astro`.

---

## What to customize next

- Add a real `og.png` social card to `public/` and wire it in `BaseLayout.astro`.
- Fill in direct GitHub links for `vlm-ocr`, `blueprint`, `face-access` in `src/data/site.ts` once you've confirmed the final public slugs.
- (Optional) Add a minimal `/notes` or `/case-studies` section using Astro Content Collections if you want written long-form later.
- Point `alexandrealvaro.com.br` at Cloudflare Pages and verify OG preview on LinkedIn / Twitter.

# PQB Solutions — Corporate Website

Production Next.js site for **PQB Solutions** (accounting & taxation, medical billing, IT solutions),
built to the approved visual design.

## Stack

| Concern    | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js 16 (App Router, React Server Components) |
| Language   | TypeScript (strict)                              |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens)      |
| Animation  | Framer Motion                                    |
| Icons      | Lucide React                                     |
| Images     | `next/image` + WebP, pre-optimized with `sharp`  |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/
│   ├── api/contact/route.ts   POST endpoint for the contact form
│   ├── globals.css            Design tokens (@theme) + base layer
│   ├── icon.svg               Brand favicon
│   ├── layout.tsx             Fonts, SEO metadata, header/footer shell
│   ├── page.tsx               Home page + JSON-LD structured data
│   ├── robots.ts / sitemap.ts SEO routes
├── components/
│   ├── layout/                SiteHeader (client), SiteFooter
│   ├── sections/              Hero, TrustStrip, About, Services,
│   │                          WhyChooseUs, Industries, Testimonials, Contact
│   └── ui/                    Reveal, SectionHeading, BrandLogo,
│                              ServiceCard, ContactForm
└── lib/site.ts                Single source of truth for company data,
                               nav, services, industries, testimonials
public/images/                 All photography, WebP only
```

Sections are **React Server Components** by default. Only the pieces that need
browser state are client components: the header (scrollspy, menu, search), the
industry strip, the service cards, the testimonial carousel, the contact form,
and the two animation wrappers (`Reveal`, `Float`).

## Design tokens

The palette and type scale sampled from the approved design live in
`src/app/globals.css` under `@theme`, so they are available as ordinary Tailwind
utilities (`bg-deep-800`, `text-brand-600`, `shadow-float`, …).

| Token group    | Base         | Use                                                 |
| -------------- | ------------ | --------------------------------------------------- |
| `deep-900…600` | `#142C3D`    | Deep navy sections (Why Choose Us, Contact, footer) |
| `brand-50…800` | `#24A69A`    | Primary teal — CTAs, icons, accents                 |
| `ink-900…300`  | `#142C3D`    | Headings and body copy                              |
| `mint-50/100`  | `#F4F6F8`    | Soft grey section backgrounds                       |

Fonts: **Playfair Display** (headings), **Inter** (body), **Great Vibes**
(director's signature) — all self-hosted via `next/font/google`.

## Images

Every photographic asset is WebP in `public/images`, with descriptive
filenames, and is rendered through `next/image` with explicit `sizes`. The hero
is `priority`; everything else is lazy-loaded. Total payload for all 10 images
is roughly **430 KB**.

`pqb-logo.webp` is the **client-supplied logo**. The teal mark has enough contrast on
every surface the site uses — white, soft grey and deep navy — so one asset serves both
the header and the footer, and `BrandLogo` takes no tone variant.

The dotted world map behind the contact section is `world-map-dots.svg` — generated
from a public-domain blank world map and rendered as a CSS background so it adds no
DOM nodes. Regenerate it only if the dot density needs to change.

`hero-business-growth-office.webp` is **client-supplied artwork**, converted to WebP at
its native 1372x1147 and otherwise untouched. The Business Growth chart, Trusted Experts
badge and Helping Businesses card are painted into the image — the hero deliberately
renders **no overlay elements on top of it**, and its frame is pinned to the same
1372:1147 aspect ratio so the composition never crops. If that file is ever replaced,
check the ratio constant in `src/components/sections/Hero.tsx`.

On large screens the hero panel is pinned flush under the 5rem navbar at the right
48% of the viewport. Its height therefore falls out of the artwork's own ratio
(`48vw / 1.196 = 40.13vw`), and the hero's `--hero-h` is the navbar plus that — which
is why the section reads ~658px at a 1440px viewport. Changing the panel width means
changing that figure too, or the image will start to crop.

`about-pqb-office.webp` is also **client-supplied artwork** (1536x1024, WebP q76),
showing the PQB Solutions wall branding. The About section frames it at its native
3:2 so it never crops, bleeds it to the right viewport edge, and dissolves its left
edge into the section background with a gradient mask.

The three service photographs (`accounting-services.webp`, `medical-billing.webp`,
`it-solutions.webp`) are **client-supplied artwork**, cropped to the cards' 2.25
aspect ratio at conversion time so no CSS cropping is needed. Each one is paired with
its matching service — accountant/calculator, stethoscope/billing forms, cloud-security
laptop — and they must not be swapped between cards.

`it-solutions.webp` is 708x315 rather than 1100x489 because its source was only 708px
wide; it is stored at native width rather than upscaled. Replacing any of them means
re-cropping to 2.25, or the card will crop the image.


To regenerate or swap an asset, convert it to WebP before committing — no JPEG,
PNG or externally hosted images belong in `public/`.

## Testimonials

The three testimonials in `src/lib/site.ts` are **placeholder content**, not real
reviews. Every name is literally `"Client Name"` and two of the three quotes say
"Placeholder testimonial" in the copy itself, so nothing can be mistaken for a
genuine endorsement. Replace them with approved, attributable quotes before launch.

## Contact form

`ContactForm` posts JSON to `POST /api/contact`. The route validates every
field server-side, returns `422` with per-field messages, and includes a
honeypot field for bots. Nothing is persisted.

**Before production deploy,** wire a real delivery mechanism (email provider or
CRM) at the marked hook in `src/app/api/contact/route.ts`.

## Before going live

- [ ] Confirm the support email address (`Support@pqbsolutions.com`) in `src/lib/site.ts`
- [ ] Replace the placeholder phone number and business address in `src/lib/site.ts`
- [ ] Connect an email/CRM provider in `src/app/api/contact/route.ts`
- [ ] Replace the placeholder testimonials ("Client Name") with approved client quotes and photos
- [ ] Confirm image licensing for the photography in `public/images` (the logo, hero, about, testimonial and the three service photographs were supplied by the client; the industries photograph is Unsplash)
- [ ] Set the canonical domain in `site.url` if it differs from `www.pqbsolutions.com`

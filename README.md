# Portfolio Website

> A blazing-fast, zero-dependency, local file-based portfolio engineered for raw loading speed, structural cleanliness, and zero maintenance.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A statically generated portfolio built on **Next.js 16**, **React 19**, and **Tailwind CSS 4**. No databases, no CMS, no serverless functions, no third-party APIs. The entire content surface — profile data, projects, experience, blog posts — ships from a single, git-driven source tree.

---

## Product Highlights

### Zero-Configuration Deployment

The template ships with **zero** API keys, **zero** environment variables, and **zero** backend services. Clone, install, ship. `pnpm build` produces a fully static output that drops onto any edge CDN.

### Tokenless PFP Syncing

The avatar pipeline queries the unauthenticated GitHub redirect layer — `https://github.com/<username>.png` — and delegates optimization to Next.js Image Optimization. No personal access tokens, no rate-limited API calls, no server-side fetches at request time. Update the avatar on GitHub; it propagates on the next rebuild.

### Local Git-Driven Content

Blog posts live as `.md` files under `src/content/blog/`. Projects, skills, experience, and social links are typed, immutable arrays in `src/content/index.ts`. No migration overhead, no CMS lock-in. Authoring is a `git commit` away.

### GPU-Accelerated Motion

Animations run on a `transform`/`opacity` budget through `motion` (the new Motion One family) — no layout thrash, no jank. A custom Radar Status Indicator marks active projects with a continuously animated, GPU-composited pulse.

### Static-First Architecture

Every route is prerendered at build time. React Server Components handle data hydration; client components are reserved for interactive islands. The result is a near-zero-JS shell for read paths and surgical hydration only where it matters.

---

## Tech Stack

| Layer                | Tool                      | Version        | Role                                                              |
| -------------------- | ------------------------- | -------------- | ----------------------------------------------------------------- |
| **Core Framework**   | Next.js (App Router, RSC) | 16.1.6         | Static generation, Image Optimization, route-level code-splitting |
| **Runtime**          | React                     | 19.2.7         | Server-first rendering, `use client` islands only where required  |
| **Language**         | TypeScript (strict)       | 5.9.3          | End-to-end type safety across server/client boundaries            |
| **Styling Engine**   | Tailwind CSS 4            | 4.3.0          | Utility-first CSS with native CSS variable theming                |
| **PostCSS Layer**    | `@tailwindcss/postcss`    | 4.3.0          | Single-pass Tailwind compilation pipeline                         |
| **Animations**       | `motion`                  | 12.40.0        | GPU-accelerated transitions, scroll-reveal, gesture primitives    |
| **Content Pipeline** | `gray-matter` + `remark`  | 4.0.3 / 15.0.1 | Frontmatter parsing, GFM markdown → HTML at build time            |
| **Icons**            | `react-icons`             | 5.6.0          | Tree-shakeable icon set across FA, BI, SI families                |
| **Lint/Format**      | Biome                     | 2.4.16         | Single-binary formatter + linter, zero-config defaults            |
| **Test**             | Vitest                    | 4.1.8          | Vite-native unit test runner with native ESM                      |
| **Bundle Analysis**  | `@next/bundle-analyzer`   | 16.2.7         | Per-route bundle size inspection                                  |

---

## Directory Structure

```
website/
├── public/                       # Static assets (images, banners, favicon)
│   └── images/
│       ├── banners/
│       └── icon.png
├── src/
│   ├── app/                      # Next.js App Router entry points
│   │   ├── (site)/               # Site route group
│   │   │   ├── blog/
│   │   │   │   ├── [slug]/       # Dynamic blog post route
│   │   │   │   └── page.tsx      # Blog index
│   │   │   ├── projects/
│   │   │   │   ├── [slug]/       # Dynamic project route
│   │   │   │   └── page.tsx      # Projects index
│   │   │   ├── experience/
│   │   │   ├── layout.tsx        # Site chrome
│   │   │   └── page.tsx          # Home (/)
│   │   ├── fonts.ts              # Font variable definitions
│   │   ├── globals.css           # Tailwind entry + global tokens
│   │   ├── layout.tsx            # Root HTML shell + Person JSON-LD
│   │   ├── llms.txt/             # LLM-facing manifest route
│   │   ├── robots.ts             # robots.txt generator
│   │   └── sitemap.ts            # sitemap.xml generator
│   ├── components/
│   │   ├── sections/             # Server-rendered page sections
│   │   │   ├── about.tsx
│   │   │   ├── blogPostCard.tsx
│   │   │   ├── blogPostList.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── experienceList.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── githubProfileHeader.tsx
│   │   │   ├── hire.tsx
│   │   │   ├── profileHeader.tsx
│   │   │   ├── projectCard.tsx
│   │   │   ├── projectList.tsx
│   │   │   ├── projectListClient.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── social.tsx
│   │   │   ├── support.tsx
│   │   │   └── writings.tsx
│   │   └── ui/                   # Client-rendered interactive primitives
│   │       ├── Button.tsx
│   │       ├── ButtonLink.tsx
│   │       ├── CryptoDonationSelector.tsx
│   │       ├── CryptoDonationSelectorClient.tsx
│   │       ├── ImagePreview.tsx
│   │       ├── ImagePreviewDialog.tsx
│   │       ├── MotionSection.tsx
│   │       ├── SectionHeading.tsx
│   │       └── ViewAllLink.tsx
│   ├── content/                  # Single source of truth for site data
│   │   ├── blog/                 # Markdown posts
│   │   └── index.ts              # Profile, skills, projects, social — typed
│   └── lib/
│       ├── blog.ts               # Markdown loader (server-only)
│       ├── date.test.ts          # Date utility tests
│       └── utils.ts              # Shared animation variants + helpers
├── AGENTS.md
├── CLAUDE.md
├── biome.json
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

---

## Performance Decisions

- **React Server Components (RSC) by default.** Every page section is a server component. Client components are opt-in, marked with `"use client"`, and only wrap genuinely interactive surfaces (donation selector, image preview dialog, motion primitives).
- **Static Site Generation (SSG).** All routes are prerendered at build time. No runtime data fetching on read paths. `revalidate` is configured per route for incremental regeneration when needed.
- **Localized bundle-splitting.** Per-route code-splitting is native to the App Router. Client islands are loaded only on routes that mount them.
- **Next.js Image Optimization.** Remote avatar pattern configured via `images.remotePatterns` for `github.com`. AVIF + WebP output, 30-day minimum cache TTL.
- **Strict TypeScript.** `"strict": true` with `noUncheckedIndexedAccess` and `noImplicitOverride`. Type errors block the build.
- **Biome as a single binary.** Replaces ESLint + Prettier. Faster CI, one config file, zero plugin sprawl.

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/c0d3h01/website.git
cd website
pnpm install
```

### 2. Configure Identity

Edit `src/content/index.ts` and replace the `profile` object — name, handles, bio, social links, support addresses. The tokenless avatar automatically syncs from the `githubUsername` field.

### 3. Add Content

- **Blog post:** drop a new `.md` file in `src/content/blog/` with frontmatter:

  ```md
  ---
  title: My Post
  description: Short summary
  date: 2026-06-26
  ---

  Body in GitHub-flavored markdown.
  ```

- **Project:** append to the `projects` array in `src/content/index.ts`. Set `status` to `active`, `building`, or `archived` to drive the Radar Status Indicator.

### 4. Build & Deploy

```bash
pnpm build      # Production build → static output
pnpm start      # Serve locally for verification
```

Push to a Git remote connected to **Vercel**, **Netlify**, **Cloudflare Pages**, or any static host. No environment variables required.

---

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

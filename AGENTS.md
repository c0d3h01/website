# AGENTS.md

## Project Summary
- This is a Next.js 16 + TypeScript portfolio website.
- UI style target is **light mode only** with a minimal, clean interface.
- Primary goals: reliability, fast performance, strong SEO, and maintainable code.

## Tech Stack
- Framework: Next.js App Router (`src/app`)
- Language: TypeScript
- Styling: Tailwind CSS v4 + `src/app/globals.css`
- Content: Markdown blog posts in `src/content/blog`
- Data/config source: `src/data/index.ts`

## Architecture Notes
- Reusable layout wrappers live in `src/layout`.
- Reusable UI primitives live in `src/components/ui`.
- Feature sections live in `src/components/home`, `src/components/projects`, `src/components/experience`, and `src/components/blog`.
- SEO metadata and social metadata are configured in `src/data/index.ts` and page-level metadata exports.

## Non-Negotiable Code Requirements
- Keep the site **light mode only**. Do not add dark-mode toggles or `prefers-color-scheme: dark` variants.
- No garbage code: no placeholder hacks, no bogus logic, no speculative abstractions.
- No dead code: remove unused variables, imports, components, styles, and branches.
- No unused dependencies or duplicate utilities.
- Keep components focused and small; extract only when reuse is real.
- Prefer semantic HTML and accessible controls (`aria-*`, labels, keyboard-safe interactions).
- Preserve SEO integrity: canonical URLs, metadata, Open Graph/Twitter fields, robots/sitemap behavior.
- Preserve performance: static rendering by default, no unnecessary client components, no heavy runtime effects.
- Use descriptive naming and keep comments short and only where code intent is not obvious.

## Editing Rules For AI Contributors
- Make minimal, targeted diffs instead of broad rewrites.
- Respect existing project structure and naming patterns.
- Keep CSS tokens and styles consistent with the light-theme system in `src/app/globals.css`.
- For external links opened in a new tab, use `rel="noopener noreferrer"`.
- Do not commit secrets or environment-specific values.

## Validation Checklist
- Run `pnpm lint`
- Run `pnpm typecheck`
- Run `pnpm build` for production-level verification when changing routing, metadata, or rendering behavior

## Definition of Done
- Code is clean, readable, and free from dead/unused paths.
- Portfolio works correctly across existing routes.
- Light-mode UI remains visually consistent.
- Lint/typecheck/build pass with no new warnings or errors.

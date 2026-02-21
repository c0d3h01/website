# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 + TypeScript portfolio site.

- `src/app`: App Router entrypoints, route groups, and page-level metadata (`sitemap.ts`, `robots.ts`).
- `src/components`: Reusable UI and section components, grouped by feature (`home`, `blog`, `projects`, `ui`).
- `src/layout`: Shared layout shells used across routes.
- `src/lib`: Utilities and server-side helpers (for example, markdown blog loading/rendering).
- `src/data`: Typed content models and profile/project data.
- `src/content/blog`: Markdown blog posts with front matter (`title`, `description`, `date`).
- `public`: Static assets (images, self-hosted fonts).
- `tests/e2e`: Playwright smoke/end-to-end tests.

Use the `@/*` import alias for files under `src`.

## Build, Test, and Development Commands
- `pnpm dev`: Start local dev server with Turbopack.
- `pnpm dev:webpack`: Start dev server with Webpack fallback.
- `pnpm build`: Create production build.
- `pnpm analyze`: Build with Next bundle analyzer enabled.
- `pnpm start`: Run the production build locally.
- `pnpm lint` / `pnpm lint:fix`: Run Biome checks (or auto-fix issues).
- `pnpm fmt` / `pnpm fmt:check`: Format or verify formatting with Biome.
- `pnpm typecheck`: Generate Next route types and run strict TypeScript checks.
- `pnpm test` / `pnpm test:run` / `pnpm test:coverage`: Run Vitest.
- `pnpm test:e2e`: Run Playwright e2e smoke tests.
- `pnpm test:e2e:install`: Install Playwright Chromium browser.
- `pnpm knip`: Find unused files/exports/dependencies.

Git hooks enforce quality gates: pre-commit runs staged Biome fixes/checks; pre-push runs `typecheck` and `build`.

## Coding Style & Naming Conventions
- TypeScript + React function components, strict typing enabled.
- Biome config is the source of truth; keep formatting tool-driven.
- Use PascalCase for component files (`HomePage.tsx`), camelCase for utilities (`blog.ts`), and lowercase-hyphen for markdown slugs (`docker-node-express-basics.md`).
- Keep feature code colocated with its route/section when practical.

## Testing Guidelines
- Unit tests use Vitest and should live close to features (`*.test.ts[x]`).
- E2E tests use Playwright and live in `tests/e2e`.
- Required validation before PR: `pnpm lint`, `pnpm fmt:check`, `pnpm typecheck`, and `pnpm build`.
- Add or update relevant tests for behavior changes when practical.

## Commit & Pull Request Guidelines
Use professional, technical commit messages.

- Use format: `<type>: <imperative technical summary>`.
- Recommended types: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `perf`, `build`, `ci`.
- Keep the subject concise, specific, and implementation-focused.
- If extra context is needed, add a short commit body with bullet points describing:
  - What changed.
  - Why it changed.
  - Any migration, behavior, or risk notes.

Examples:
- `fix: correct canonical URL generation for project pages`
- `feat: add llms.txt endpoint for AI crawler discovery`
- `refactor: simplify blog post card rendering logic`

For PRs, include:
- What changed and why.
- Linked issue (if available).
- Screenshots/GIFs for UI changes.
- Confirmation that `pnpm lint`, `pnpm fmt:check`, `pnpm typecheck`, and `pnpm build` pass locally.

## Non-Negotiable Code Requirements
- Keep the site **light mode only**. Do not add dark-mode toggles or `prefers-color-scheme: dark` variants.
- No garbage code: no placeholder hacks, no bogus logic, no speculative abstractions.
- No dead code: remove unused variables, imports, components, styles, and branches.
- No unused dependencies or duplicate utilities.
- Keep components focused and small; extract only when reuse is real.
- Write once, use everywhere: move repeated UI behavior into shared components in `src/components/ui` and reuse across sections (e.g., profile, blog banners, pictures) to keep code minimal, simple, and fast.
- Prefer semantic HTML and accessible controls (`aria-*`, labels, keyboard-safe interactions).
- Preserve SEO integrity: canonical URLs, metadata, Open Graph/Twitter fields, robots/sitemap behavior.
- Preserve performance: static rendering by default, no unnecessary client components, no heavy runtime effects.
- Use descriptive naming and keep comments short and only where code intent is not obvious.

## Definition of Done
- Code is clean, readable, and free from dead/unused paths.
- Portfolio works correctly across existing routes.
- Light-mode UI remains visually consistent.
- Lint/typecheck/build pass with no new warnings or errors.

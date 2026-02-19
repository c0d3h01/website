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

Use the `@/*` import alias for files under `src`.

## Build, Test, and Development Commands
- `pnpm dev`: Start local dev server with Turbopack.
- `pnpm dev:webpack`: Start dev server with Webpack fallback.
- `pnpm build`: Create production build.
- `pnpm start`: Run the production build locally.
- `pnpm lint` / `pnpm lint:fix`: Run ESLint (or auto-fix issues).
- `pnpm typecheck`: Generate Next route types and run strict TypeScript checks.
- `pnpm fmt` / `pnpm fmt:check`: Format or verify formatting with Prettier.

Git hooks enforce quality gates: pre-commit runs `lint`; pre-push runs `typecheck` and `build`.

## Coding Style & Naming Conventions
- TypeScript + React function components, strict typing enabled.
- Prettier config uses no semicolons; keep formatting tool-driven.
- Use PascalCase for component files (`HomePage.tsx`), camelCase for utilities (`blog.ts`), and lowercase-hyphen for markdown slugs (`docker-node-express-basics.md`).
- Keep feature code colocated with its route/section when practical.

## Testing Guidelines
There is currently no dedicated unit/integration test framework checked in. For now, treat `pnpm lint`, `pnpm typecheck`, and `pnpm build` as the required validation set before opening a PR.

When adding tests, colocate them near the feature (`*.test.ts[x]` or `*.spec.ts[x]`) and document the run command in `package.json`.

## Commit & Pull Request Guidelines
Recent commits follow concise, scoped messages such as:
- `[src] refactor: simplify app structure`
- `[root] chore: update package name`

Prefer: optional scope prefix (`[src]`, `[root]`) + conventional type (`feat`, `fix`, `refactor`, `chore`) + imperative summary.

For PRs, include:
- What changed and why.
- Linked issue (if available).
- Screenshots/GIFs for UI changes.
- Confirmation that `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass locally.

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

## Definition of Done
- Code is clean, readable, and free from dead/unused paths.
- Portfolio works correctly across existing routes.
- Light-mode UI remains visually consistent.
- Lint/typecheck/build pass with no new warnings or errors.

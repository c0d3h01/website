# Repository Guidelines

Use the `@/*` import alias for files under `src`.

## Coding Style & Naming Conventions

- TypeScript + React function components, strict typing enabled.
- Biome config is the source of truth; keep formatting tool-driven.
- Use PascalCase for component files (`HomePage.tsx`), camelCase for utilities (`blog.ts`), and lowercase-hyphen for markdown slugs (`docker-node-express-basics.md`).
- Keep feature code colocated with its route/section when practical.

## Testing Guidelines

- Unit tests use Vitest and should live close to features (`*.test.ts[x]`).
- Required validation before PR: `pnpm lint`, `pnpm fmt:check`, `pnpm typecheck`, and `pnpm build`.

## Commit & Pull Request Guidelines

Use pure, technical commit messages.

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

- No garbage code: no placeholder hacks, no bogus logic, no speculative abstractions.
- No dead code: remove unused variables, unused dependencies, imports, components, styles, and branches, duplicate utilities.
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

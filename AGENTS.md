# wanderlust

Single-package Next.js App Router app (`src/app`). Not a monorepo — `pnpm-workspace.yaml` only exists for `allowBuilds`.

## Commands

- Package manager is **pnpm** (pinned via `packageManager`). Ignore `README.md`, which says npm/yarn.
- `pnpm dev` / `pnpm build` / `pnpm start`
- `pnpm lint` — runs bare `eslint` (lints cwd using `eslint.config.mjs`; no `--fix`).
- No tests are configured — verify changes with `pnpm build` (includes typecheck) and `pnpm lint`.

## Framework quirks

- Next.js 16 + React 19.3 with `cacheComponents` and `partialPrefetching` enabled in `next.config.ts` — async request APIs and caching/data-fetching conventions differ from older Next.js; follow the `node_modules/next/dist/docs/` guides below.
- React Compiler (`reactCompiler: true`) is on — don't add manual memoization (`useMemo`, `useCallback`, `React.memo`).

## Styling / components

- Tailwind v4, CSS-first: no `tailwind.config` file; config lives inline via `@theme` in `src/app/globals.css`. CSS is wired through `@tailwindcss/turbopack` rules in `next.config.ts`, not PostCSS.
- UI components are shadcn (style **base-nova**, built on `@base-ui/react` — not Radix). Add new components with the shadcn CLI (`components.json`), don't hand-roll or copy stock Radix shadcn components from the web.
- Path alias `@/*` → `src/*`; icons from `lucide-react`.
- Static assets live in `public/assets/`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

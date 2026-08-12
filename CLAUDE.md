## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

**Gotcha**: after changing a content collection's glob pattern in `content.config.ts`, the dev server's content store can get stuck reporting the collection as empty even after matching files are added — restart (`astro dev stop` then `astro dev --background`) to force a clean resync.

## Project structure

This is an employee/department onboarding roadmap app (not a coding-skills roadmap). `/roadmap` (`src/pages/roadmap.astro` → `<RoadmapApp client:load />`) is a single unified screen: a left sidebar (departments + roles), a center React Flow canvas (`RoadmapFlow.tsx`), and a right-side node-detail panel — all switching via client state, not page navigation.

- **Departments** (`src/data/departments.ts`) group **roles** (`src/data/roles.ts`, `rolesForDepartment()`). A department with no roles shows "Coming soon" in the sidebar.
- **Roadmap structure vs. display text are split**: `src/data/roadmaps/<role-id>.ts` holds a role's node metadata (`id`, `position`, `optional?`, `guideSlug?`) and edges — no display text. Display text lives in `src/i18n/{en,el}.json` at `roadmap.<role-id>.nodes.<node-id>.{label,description}`. Roles with no real content yet reuse `src/data/roadmaps/placeholder.ts` and share one i18n entry at `roadmap.placeholder.nodes.coming-soon.*` via `translateWithFallback()`.
- **To add a new role**: add it to `src/data/roles.ts` (with its department), create `src/data/roadmaps/<role-id>.ts` (nodes/edges), register it in `src/data/roadmaps/index.ts`, and add its i18n keys to both `en.json` and `el.json`. Guide content is optional (see below).
- **Guide content**: `src/content/guides/<locale>/<slug>.md`, frontmatter `title`, `description`, `order`, `role`. Guide pages (`src/pages/guides/[...slug].astro`) link back to `/roadmap?role=<role>`. **Astro gotcha**: `getStaticPaths()` runs in an isolated scope — a helper merely declared elsewhere in the same `.astro` file is not visible inside it; shared helpers (e.g. `src/lib/guides.ts`) must be imported from a separate module.
- **Credentials policy**: never commit real shared-account credentials (passwords, API keys) into guide markdown or any other file — redact with a note like "shared separately by your onboarding contact."
- **i18n & theme**: locale toggle uses `localStorage` key `site-locale` and dispatches a `localechange` window event; theme toggle uses `data-theme` on `<html>`, `localStorage` key `site-theme`, and a `themechange` event, with a blocking inline script in `BaseLayout.astro` to avoid flash-of-wrong-theme. `RoadmapApp` is the single source of truth for both, passed down as props to `RoadmapFlow`. Shared theme colors live in `src/lib/theme.ts`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
